'use client';

import { useEffect, useRef, useState } from 'react';
import { Modal } from './modal';

export function Scanner({ onResult, onClose }: { onResult: (value: string) => void; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let stream: MediaStream | undefined;
    let stopped = false;
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    function stop() {
      stopped = true;
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      stream?.getTracks().forEach((track) => track.stop());
      if (video) video.srcObject = null;
    }

    function leavePage() {
      stop();
      onClose();
    }

    async function start() {
      if (!navigator.mediaDevices?.getUserMedia || !video) {
        setError('Camera không khả dụng. Bạn có thể nhập mã bằng tay.');
        return;
      }
      try {
        const camera = await navigator.mediaDevices.getUserMedia({
          audio: false, video: { facingMode: { ideal: 'environment' } },
        });
        if (stopped) { camera.getTracks().forEach((track) => track.stop()); return; }
        stream = camera;
        timeout = setTimeout(() => {
          stop();
          setActive(false);
          setError('Không tìm được mã QR trong 30 giây.');
        }, 30_000);
        video.srcObject = stream;
        await video.play();
        if (stopped) return;
        setActive(true);

        const { default: decode } = await import('jsqr');
        if (stopped) return;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) throw new Error('Camera frame unavailable');

        function scan() {
          if (stopped || !video || !context) return;
          try {
            if (video.readyState >= 2 && video.videoWidth) {
              const width = Math.min(640, video.videoWidth);
              const height = Math.round(video.videoHeight * width / video.videoWidth);
              if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
              }
              context.drawImage(video, 0, 0, width, height);
              const pixels = context.getImageData(0, 0, width, height);
              const code = decode(pixels.data, width, height, { inversionAttempts: 'dontInvert' });
              if (code) { stop(); onResult(code.data); return; }
            }
          } catch {
            stop();
            setActive(false);
            setError('Không thể đọc hình ảnh từ camera. Bạn có thể nhập mã bằng tay.');
            return;
          }
          frame = requestAnimationFrame(scan);
        }
        frame = requestAnimationFrame(scan);
      } catch (cause) {
        if (stopped) return;
        stop();
        setActive(false);
        const name = cause instanceof DOMException ? cause.name : '';
        setError(name === 'NotAllowedError' ? 'Bạn chưa cấp quyền camera.'
          : name === 'NotFoundError' ? 'Thiết bị không có camera.'
          : 'Không thể mở camera.');
      }
    }
    window.addEventListener('pagehide', leavePage);
    queueMicrotask(() => { if (!stopped) void start(); });
    return () => {
      window.removeEventListener('pagehide', leavePage);
      stop();
    };
  }, [onClose, onResult]);

  return (
    <Modal title="Quét QR sản phẩm" onClose={onClose}>
      <video ref={videoRef} muted playsInline className={active ? 'aspect-video w-full rounded-md bg-ink object-contain' : 'hidden'} />
      <p role="status" className="mt-3 text-sm">{error || (active ? 'Đưa mã QR vào khung hình.' : 'Đang mở camera…')}</p>
      <button type="button" className="button-secondary mt-4" onClick={onClose}>Về nhập mã</button>
    </Modal>
  );
}
