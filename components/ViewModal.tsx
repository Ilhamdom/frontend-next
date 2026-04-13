import React from "react";

type ViewModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function ViewModal({ open, onClose, title, children }: ViewModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Tutup"
        >
          &times;
        </button>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div className="mb-4">{children}</div>
        <button
          className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 w-full"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
