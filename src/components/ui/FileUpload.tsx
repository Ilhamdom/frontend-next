"use client";

import React, { useState, useRef, useCallback } from "react";
import { UploadCloud, CheckCircle2, Trash2, XCircle, File as FileIcon, Loader2 } from "lucide-react";

export interface FileUploadProps {
  label?: string;
  description?: string;
  accept?: string;
  maxSizeMB?: number;
  value?: File | null;
  onChange?: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
}

export function FileUpload({
  label = "Unggah File",
  description = "Unggah atau seret dan lepas ke dalam kotak ini.",
  accept,
  maxSizeMB = 10,
  value,
  onChange,
  error,
  disabled = false,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayError = error || internalError;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled && !value && !isUploading) {
      setIsDragging(true);
    }
  }, [disabled, value, isUploading]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processFile = (file: File) => {
    setInternalError(null);
    if (file.size > maxSizeMB * 1024 * 1024) {
      setInternalError(`Ukuran file maksimal ${maxSizeMB}MB.`);
      return;
    }
    
    // Simulate upload delay for standard IDDS "Uploading" state demonstration
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      if (onChange) onChange(file);
    }, 800);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled || value || isUploading) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [disabled, value, isUploading, maxSizeMB, onChange]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
    // reset input value so re-selecting same file works
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemove = () => {
    setInternalError(null);
    if (onChange) onChange(null);
  };

  // Convert bytes to readable sizes
  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // UI STATE: UPLOADED
  if (value) {
    return (
      <div className={`w-full relative border rounded-[12px] p-4 flex items-center justify-between shadow-sm transition-colors
        ${displayError ? 'border-red-500 bg-red-50/10' : 'border-gray-200 bg-white hover:border-gray-300'}
      `}>
        <div className="flex items-center gap-4 px-1 overflow-hidden">
           <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center 
              ${displayError ? 'bg-red-100 text-red-600' : 'bg-status-green/10 text-status-green'}`}>
             {displayError ? <XCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
           </div>
           <div className="flex flex-col truncate">
             <span className="text-sm font-bold text-[#0B1F3A] truncate">{value.name}</span>
             <span className={`text-[11px] font-medium mt-0.5 ${displayError ? 'text-red-500' : 'text-gray-500'}`}>
               {displayError || formatSize(value.size)}
             </span>
           </div>
        </div>
        {!disabled && (
          <button 
            type="button"
            onClick={handleRemove}
            className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // UI STATE: DEFAULT, DRAGGING, UPLOADING, ERROR
  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled || isUploading}
      />
      
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
        className={`relative w-full border-2 border-dashed rounded-[16px] p-8 flex flex-col items-center justify-center text-center transition-all
          ${disabled ? "bg-gray-50 border-gray-200 cursor-not-allowed opacity-70" : "cursor-pointer"}
          ${!disabled && isDragging ? "border-[#1546B4] bg-[#1546B4]/5 scale-[0.99]" : ""}
          ${!disabled && !isDragging && !displayError ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50/50" : ""}
          ${displayError && !isDragging ? "border-red-400 bg-red-50/20" : ""}
        `}
      >
        {isUploading ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
            <Loader2 className="w-8 h-8 text-[#1546B4] animate-spin mb-3" />
            <span className="text-sm font-bold text-[#0B1F3A]">Mengunggah Dokumen...</span>
            <span className="text-xs text-gray-500 font-medium mt-1">Mohon tunggu sebentar</span>
          </div>
        ) : (
          <div className="flex flex-col items-center pointer-events-none">
            {displayError ? (
              <XCircle className="w-8 h-8 text-red-500 mb-3" />
            ) : (
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <UploadCloud className={`w-5 h-5 ${isDragging ? 'text-[#1546B4]' : 'text-gray-500'}`} />
              </div>
            )}
            <span className={`text-[15px] font-extrabold ${displayError ? 'text-red-600' : 'text-[#0B1F3A]'} mb-1`}>
              {displayError ? "Gagal Mengunggah" : label}
            </span>
            <span className={`text-xs font-medium max-w-xs ${displayError ? 'text-red-500' : 'text-gray-500'} leading-relaxed mb-4`}>
              {displayError || description}
            </span>
            
            {!displayError && (
              <button 
                type="button"
                className="bg-[#1A1A1A] text-white text-xs font-bold px-5 py-2.5 rounded-[8px] hover:bg-black transition-colors pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation(); // Biar container parent click listener gk kepanggil ganda
                  fileInputRef.current?.click();
                }}
              >
                Pilih Dokumen
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
