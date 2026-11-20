'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { products } from '../lib/products';
import { photo } from '../lib/site';

function atScrollBoundary(direction: number, viewport: HTMLElement) {
  return direction > 0 ? viewport.getBoundingClientRect().bottom <= window.innerHeight + 2 : window.scrollY <= 2;
}

export function Introduction() {
  const [scene, setScene] = useState(0);
  const [exiting, setExiting] = useState(false);
  const reduced = useReducedMotion();
  const router = useRouter();
  const main = useRef<HTMLElement>(null);
  const lastWheel = useRef(-Infinity);
  const sceneWheel = useRef(false);
  const lastMove = useRef(-Infinity);
  const touch = useRef<{ x: number; y: number; up: boolean; down: boolean } | null>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const canMove = useCallback((direction: number) => {
    return main.current !== null && (direction < 0 ? scene > 0 : scene < 2) &&
      atScrollBoundary(direction, main.current);
  }, [scene]);

  const move = useCallback((direction: number) => {
    if (exiting || performance.now() - lastMove.current < 340) return;
    lastMove.current = performance.now();
    main.current?.focus({ preventScroll: true });
    setScene(scene + direction);
  }, [exiting, scene]);

  useEffect(() => {
    main.current?.focus({ preventScroll: true });
    return () => { if (exitTimer.current) clearTimeout(exitTimer.current); };
  }, []);

  useEffect(() => {
    const target = main.current;
    function wheel(event: WheelEvent) {
      if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const direction = Math.sign(event.deltaY);
      const now = performance.now();
      const freshGesture = now - lastWheel.current > 180;
      lastWheel.current = now;
      if (freshGesture) {
        sceneWheel.current = canMove(direction);
        if (sceneWheel.current) move(direction);
      }
      if (sceneWheel.current) event.preventDefault();
    }
    function swipe(event: TouchEvent) {
      const start = touch.current;
      if (!start || event.touches.length !== 1) return;
      const point = event.touches[0];
      const dy = start.y - point.clientY;
      if (Math.abs(dy) > 4 && Math.abs(dy) > Math.abs(start.x - point.clientX) &&
          (dy > 0 ? start.down : start.up) && event.cancelable) event.preventDefault();
    }
    target?.addEventListener('wheel', wheel, { passive: false });
    target?.addEventListener('touchmove', swipe, { passive: false });
    return () => {
      target?.removeEventListener('wheel', wheel);
      target?.removeEventListener('touchmove', swipe);
    };
  }, [canMove, move]);

  return (
    <main ref={main} tabIndex={0} aria-label="Mở đầu Dấu Bản" aria-describedby="intro-help"
      className="relative isolate min-h-svh overflow-hidden focus:outline-none"
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        const space = event.key === ' ' && event.target === event.currentTarget;
        const direction = space || ['ArrowDown', 'PageDown', 'ArrowRight'].includes(event.key) ? 1
          : ['ArrowUp', 'PageUp', 'ArrowLeft'].includes(event.key) ? -1 : 0;
        if (direction && canMove(direction)) {
          event.preventDefault();
          if (!event.repeat) move(direction);
        }
      }}
      onTouchStart={(event) => {
        const start = event.touches[0];
        touch.current = event.touches.length === 1
          ? { x: start.clientX, y: start.clientY, up: canMove(-1), down: canMove(1) }
          : null;
      }}
      onTouchCancel={() => { touch.current = null; }}
      onTouchEnd={(event) => {
        const start = touch.current;
        touch.current = null;
        const end = event.changedTouches[0];
        if (!start || !end) return;
        const vertical = start.y - end.clientY;
        if (Math.abs(vertical) > 50 && Math.abs(vertical) > Math.abs(start.x - end.clientX) &&
          (vertical > 0 ? start.down : start.up)) move(Math.sign(vertical));
      }}>
      <p id="intro-help" className="sr-only">Cuộn, vuốt dọc hoặc dùng phím mũi tên để chuyển cảnh.</p>
      <AnimatePresence initial={false} mode="wait">
        {scene === 0 && (
          <motion.section key="title" exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.3 }}
            className="grid min-h-svh place-items-center bg-paper px-5 text-center">
            <div className="intro-title">
              <h1 className="text-[clamp(4rem,15vw,11rem)] leading-none font-bold tracking-tight">Dấu Bản</h1>
              <p className="mt-6 font-serif text-lg sm:text-2xl">Từ đất, qua tay người, thành dấu nhớ.</p>
            </div>
          </motion.section>
        )}
        {scene === 1 && (
          <motion.section key="gift" initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1, transition: { duration: reduced ? 0 : 0.3 } }}
            exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.23 }}
            className="frame grid min-h-svh content-center items-center gap-6 py-8 md:grid-cols-[1.7fr_1fr] md:gap-12">
            <motion.div exit={{ scale: reduced ? 1 : 1.045 }}
              className="relative aspect-[4/3] max-h-[58svh] overflow-hidden rounded-md bg-paper">
              <Image src={photo('hop-qua')} alt={'Hộp quà ' + products['hop-qua'].name + ' đóng nắp'} fill sizes="(max-width: 768px) 100vw, 675px" className="object-contain" />
            </motion.div>
            <div>
              <h2 className="text-3xl leading-tight sm:text-5xl">Một hộp quà.<br />Ba sản vật.</h2>
              <p className="mt-4 max-w-prose text-sm leading-relaxed sm:text-base">Hộp quà {products['hop-qua'].name} lựa chọn cà phê, mắc ca và hạt điều để kể câu chuyện về vùng đất Đắk Lắk.</p>
              <Link href="/trang-chu/" className="text-link mt-4 inline-flex min-h-11 items-center text-sm">Vào Trang chủ</Link>
            </div>
          </motion.section>
        )}
        {scene === 2 && (
          <motion.section key="land" initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.22 }}
            className="relative isolate flex min-h-svh items-end text-white md:items-center">
            <Image src={photo('nong-dan')} alt="Minh họa người nông dân thu hoạch cà phê" fill sizes="100vw"
              className="-z-20 object-cover object-[15%_center] md:object-center" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/35 to-transparent md:bg-linear-to-r md:from-black/80" />
            <div className="frame pb-12 md:py-16">
              <div className="max-w-md">
                <h2 className="text-4xl leading-tight sm:text-6xl">Một dấu ấn của vùng đất</h2>
                <p className="mt-4 text-sm leading-relaxed sm:text-base">“Dấu” là dấu ấn, ký ức và câu chuyện. “Bản” gợi đến không gian bản làng, nơi con người gắn bó với đất đai, lao động và những giá trị văn hóa được truyền lại qua nhiều thế hệ.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/ve-chung-toi/" className="button-secondary">Về chúng tôi</Link>
                  <Link href="/trang-chu/" className="button" onNavigate={(event) => {
                    if (reduced) return;
                    event.preventDefault();
                    if (exitTimer.current !== null) return;
                    setExiting(true);
                    exitTimer.current = setTimeout(() => router.push('/trang-chu/'), 450);
                  }}>Vào Trang chủ</Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      {exiting && <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.45 }} className="pointer-events-none fixed inset-0 z-20 bg-cream" />}
    </main>
  );
}
