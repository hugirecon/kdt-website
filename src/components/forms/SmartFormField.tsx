"use client";

import { useState, useRef } from "react";

interface SmartFormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "password" | "textarea" | "select";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: string | number;
  max?: string | number;
  rows?: number;
  accept?: string;
}

export default function SmartFormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  options,
  min,
  max,
  rows = 4,
}: SmartFormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isFloating = isFocused || value.length > 0;
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseInputClasses = `
    w-full px-4 pt-6 pb-2 
    bg-[#0f0f14] 
    border-2 border-white/10 
    rounded-xl 
    text-white text-[15px]
    transition-all duration-300
    focus:outline-none focus:border-[#f97316]/50
    placeholder-transparent
    peer
  `;

  const labelClasses = `
    absolute left-4 
    transition-all duration-300 ease-out
    pointer-events-none
    ${isFloating 
      ? 'top-2 text-[11px] text-[#f97316] font-medium tracking-wide uppercase' 
      : 'top-1/2 -translate-y-1/2 text-[15px] text-gray-500'
    }
  `;

  const renderInput = () => {
    const commonProps = {
      id: name,
      name,
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(e.target.value),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      required,
      placeholder: placeholder || label,
    };

    if (type === "textarea") {
      return (
        <textarea
          {...commonProps}
          rows={rows}
          className={`${baseInputClasses} resize-none pt-7`}
        />
      );
    }

    if (type === "select" && options) {
      return (
        <select
          {...commonProps}
          className={`${baseInputClasses} cursor-pointer appearance-none`}
        >
          <option value="" disabled>{placeholder || `Select ${label}`}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        {...commonProps}
        type={type}
        min={min}
        max={max}
        className={baseInputClasses}
      />
    );
  };

  return (
    <div 
      ref={containerRef}
      className="relative group"
      onMouseMove={handleMouseMove}
    >
      {/* Glow effect on focus */}
      {isFocused && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 rounded-xl"
          style={{
            left: mousePos.x - 80,
            top: mousePos.y - 80,
            width: 160,
            height: 160,
            background: `radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}
      
      {/* Border glow on focus */}
      <div 
        className={`
          absolute inset-0 rounded-xl transition-opacity duration-300
          ${isFocused ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          boxShadow: '0 0 20px rgba(249,115,22,0.2)',
        }}
      />
      
      <div className="relative">
        {renderInput()}
        
        <label htmlFor={name} className={labelClasses}>
          {label}
          {required && <span className="text-[#f97316] ml-1">*</span>}
        </label>
        
        {/* Select arrow */}
        {type === "select" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
        
        {/* Focus indicator line */}
        <div 
          className={`
            absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#f97316] rounded-full
            transition-all duration-300 ease-out
            ${isFocused ? 'w-[calc(100%-2rem)]' : 'w-0'}
          `}
        />
      </div>
    </div>
  );
}

// File upload variant
export function SmartFileField({
  label,
  name,
  accept,
  required = false,
  onChange,
}: {
  label: string;
  name: string;
  accept?: string;
  required?: boolean;
  onChange: (file: File | null) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };

  return (
    <div
      className={`
        relative p-6 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer
        ${isDragging 
          ? 'border-[#f97316] bg-[#f97316]/5' 
          : 'border-white/10 bg-[#0f0f14] hover:border-white/20'
        }
      `}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        required={required}
        onChange={handleChange}
        className="hidden"
      />
      
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#f97316]/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        {fileName ? (
          <div>
            <p className="text-white font-medium">{fileName}</p>
            <p className="text-[13px] text-gray-500 mt-1">Click or drag to replace</p>
          </div>
        ) : (
          <div>
            <p className="text-white font-medium">
              {label}
              {required && <span className="text-[#f97316] ml-1">*</span>}
            </p>
            <p className="text-[13px] text-gray-500 mt-1">
              Click to upload or drag and drop
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Checkbox variant
export function SmartCheckbox({
  label,
  name,
  checked,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className="relative mt-0.5">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
          className="sr-only peer"
        />
        <div className={`
          w-5 h-5 rounded-md border-2 transition-all duration-200
          ${checked 
            ? 'bg-[#f97316] border-[#f97316]' 
            : 'bg-[#0f0f14] border-white/20 group-hover:border-white/40'
          }
        `}>
          {checked && (
            <svg className="w-full h-full text-black p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-[14px] text-gray-400 group-hover:text-gray-300 transition-colors">
        {label}
        {required && <span className="text-[#f97316] ml-1">*</span>}
      </span>
    </label>
  );
}
