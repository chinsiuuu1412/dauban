'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useLayoutEffect(() => {
    const element = dialog.current;
    element?.showModal();
    // Close while the dialog is still attached so the browser restores focus.
    return () => element?.close();
  }, []);

  return (
    <dialog ref={dialog} aria-label={title}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      className="fixed inset-0 m-auto max-h-[85svh] w-[calc(100%-2rem)] max-w-md overflow-auto rounded-lg border border-line bg-paper p-5 text-ink shadow-xl backdrop:bg-black/50">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h2 className="text-2xl">{title}</h2>
        <button type="button" className="button-secondary" onClick={onClose}>Đóng</button>
      </div>
      {children}
    </dialog>
  );
}
