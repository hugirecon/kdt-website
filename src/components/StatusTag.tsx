"use client";

import { useEffect, useState, useRef } from "react";

// ============ STATUS CONFIGURATION ============
interface StatusConfig {
  label: string;
  bg: string;
  text: string;
  border: string;
  dot: string;
  glow?: string;
  pulse?: boolean;
}

const STATUS_MAP: Record<string, StatusConfig> = {
  // Product statuses
  "in_stock": {
    label: "In Stock",
    bg: "rgba(34, 197, 94, 0.08)",
    text: "#22c55e",
    border: "rgba(34, 197, 94, 0.2)",
    dot: "#22c55e",
    pulse: true,
  },
  "low_stock": {
    label: "Low Stock",
    bg: "rgba(249, 115, 22, 0.08)",
    text: "#f97316",
    border: "rgba(249, 115, 22, 0.2)",
    dot: "#f97316",
    pulse: true,
  },
  "out_of_stock": {
    label: "Sold Out",
    bg: "rgba(239, 68, 68, 0.08)",
    text: "#ef4444",
    border: "rgba(239, 68, 68, 0.2)",
    dot: "#ef4444",
  },
  "limited": {
    label: "Limited Edition",
    bg: "rgba(249, 115, 22, 0.1)",
    text: "#f97316",
    border: "rgba(249, 115, 22, 0.3)",
    dot: "#f97316",
    glow: "rgba(249, 115, 22, 0.15)",
    pulse: true,
  },
  "new": {
    label: "New",
    bg: "rgba(99, 102, 241, 0.08)",
    text: "#818cf8",
    border: "rgba(99, 102, 241, 0.2)",
    dot: "#818cf8",
    pulse: true,
  },
  "bestseller": {
    label: "Bestseller",
    bg: "rgba(249, 115, 22, 0.08)",
    text: "#f97316",
    border: "rgba(249, 115, 22, 0.25)",
    dot: "#f97316",
    glow: "rgba(249, 115, 22, 0.1)",
  },
  // Order statuses
  "pending": {
    label: "Pending",
    bg: "rgba(250, 204, 21, 0.08)",
    text: "#facc15",
    border: "rgba(250, 204, 21, 0.2)",
    dot: "#facc15",
    pulse: true,
  },
  "processing": {
    label: "Processing",
    bg: "rgba(99, 102, 241, 0.08)",
    text: "#818cf8",
    border: "rgba(99, 102, 241, 0.2)",
    dot: "#818cf8",
    pulse: true,
  },
  "shipped": {
    label: "Shipped",
    bg: "rgba(56, 189, 248, 0.08)",
    text: "#38bdf8",
    border: "rgba(56, 189, 248, 0.2)",
    dot: "#38bdf8",
    pulse: true,
  },
  "delivered": {
    label: "Delivered",
    bg: "rgba(34, 197, 94, 0.08)",
    text: "#22c55e",
    border: "rgba(34, 197, 94, 0.2)",
    dot: "#22c55e",
  },
  "completed": {
    label: "Completed",
    bg: "rgba(34, 197, 94, 0.08)",
    text: "#22c55e",
    border: "rgba(34, 197, 94, 0.2)",
    dot: "#22c55e",
  },
  "canceled": {
    label: "Canceled",
    bg: "rgba(239, 68, 68, 0.06)",
    text: "#ef4444",
    border: "rgba(239, 68, 68, 0.15)",
    dot: "#ef4444",
  },
  "refunded": {
    label: "Refunded",
    bg: "rgba(163, 163, 163, 0.08)",
    text: "#a3a3a3",
    border: "rgba(163, 163, 163, 0.2)",
    dot: "#a3a3a3",
  },
  // Cart / checkout
  "added": {
    label: "Added to Cart",
    bg: "rgba(34, 197, 94, 0.1)",
    text: "#22c55e",
    border: "rgba(34, 197, 94, 0.25)",
    dot: "#22c55e",
  },
  "reserved": {
    label: "Reserved",
    bg: "rgba(99, 102, 241, 0.08)",
    text: "#818cf8",
    border: "rgba(99, 102, 241, 0.2)",
    dot: "#818cf8",
    pulse: true,
  },
};

// Fallback for unknown statuses
const DEFAULT_STATUS: StatusConfig = {
  label: "Unknown",
  bg: "rgba(163, 163, 163, 0.06)",
  text: "#a3a3a3",
  border: "rgba(163, 163, 163, 0.15)",
  dot: "#a3a3a3",
};

// ============ ANIMATED STATUS DOT ============
function StatusDot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {pulse && (
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ backgroundColor: color, animationDuration: "2s" }}
        />
      )}
      <span
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

// ============ MAIN STATUS TAG ============
interface StatusTagProps {
  status: string;
  label?: string;          // override display label
  size?: "sm" | "md" | "lg";
  animate?: boolean;       // entrance animation (default true)
  className?: string;
}

export default function StatusTag({
  status,
  label,
  size = "md",
  animate = true,
  className = "",
}: StatusTagProps) {
  const [mounted, setMounted] = useState(!animate);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animate) return;
    // Trigger entrance animation on next frame
    requestAnimationFrame(() => setMounted(true));
  }, [animate]);

  const key = status.toLowerCase().replace(/[\s-]+/g, "_");
  const config = STATUS_MAP[key] || { ...DEFAULT_STATUS, label: status };
  const displayLabel = label || config.label;

  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-[11px] px-2.5 py-1 gap-1.5",
    lg: "text-[13px] px-3 py-1.5 gap-2",
  };

  return (
    <span
      ref={ref}
      className={`
        inline-flex items-center font-semibold uppercase tracking-wider rounded-full
        transition-all duration-500 ease-out
        ${sizeClasses[size]}
        ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"}
        ${className}
      `}
      style={{
        backgroundColor: config.bg,
        color: config.text,
        border: `1px solid ${config.border}`,
        boxShadow: config.glow ? `0 0 12px ${config.glow}` : undefined,
      }}
    >
      <StatusDot color={config.dot} pulse={config.pulse} />
      {displayLabel}
    </span>
  );
}

// ============ ANIMATED STATUS TRANSITION ============
// Use this when status changes (e.g., order goes from "processing" → "shipped")
interface StatusTransitionProps {
  status: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusTransition({ status, label, size = "md", className = "" }: StatusTransitionProps) {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (status !== currentStatus) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentStatus(status);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [status, currentStatus]);

  return (
    <span
      className={`
        inline-flex transition-all duration-300 ease-out
        ${isTransitioning ? "opacity-0 scale-90 -translate-y-1" : "opacity-100 scale-100 translate-y-0"}
      `}
    >
      <StatusTag
        status={currentStatus}
        label={label}
        size={size}
        animate={false}
        className={className}
      />
    </span>
  );
}

// ============ ORDER PROGRESS BAR ============
interface OrderProgressProps {
  status: string;
  className?: string;
}

const ORDER_STEPS = [
  { key: "pending", label: "Confirmed" },
  { key: "processing", label: "Processing" },
  { key: "shipped", label: "Shipped" },
  { key: "delivered", label: "Delivered" },
];

export function OrderProgress({ status, className = "" }: OrderProgressProps) {
  const normalizedStatus = status.toLowerCase().replace(/[\s-]+/g, "_");
  const currentIdx = ORDER_STEPS.findIndex((s) => s.key === normalizedStatus);
  const activeIdx = currentIdx === -1 ? 0 : currentIdx;
  const [animatedIdx, setAnimatedIdx] = useState(-1);

  useEffect(() => {
    // Stagger animate each step
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i <= activeIdx; i++) {
      timers.push(setTimeout(() => setAnimatedIdx(i), 150 * (i + 1)));
    }
    return () => timers.forEach(clearTimeout);
  }, [activeIdx]);

  if (normalizedStatus === "canceled" || normalizedStatus === "refunded") {
    return (
      <div className={className}>
        <StatusTag status={normalizedStatus} size="md" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-0 w-full ${className}`}>
      {ORDER_STEPS.map((step, i) => {
        const isActive = i <= activeIdx;
        const isAnimated = i <= animatedIdx;
        const isCurrent = i === activeIdx;
        const config = STATUS_MAP[step.key] || DEFAULT_STATUS;

        return (
          <div key={step.key} className="flex items-center flex-1 last:flex-none">
            {/* Step circle */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`
                  relative w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-500 ease-out
                  ${isAnimated ? "scale-100" : "scale-75"}
                `}
                style={{
                  backgroundColor: isActive ? config.bg : "rgba(255,255,255,0.03)",
                  border: `2px solid ${isActive ? config.border : "rgba(255,255,255,0.08)"}`,
                  boxShadow: isCurrent && config.glow ? `0 0 16px ${config.dot}33` : undefined,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {isActive ? (
                  <svg
                    className={`w-3.5 h-3.5 transition-all duration-300 ${isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                    style={{ color: config.text, transitionDelay: `${i * 150 + 100}ms` }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                )}

                {/* Pulse ring on current step */}
                {isCurrent && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: config.dot, animationDuration: "2.5s" }}
                  />
                )}
              </div>

              <span
                className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap`}
                style={{
                  color: isActive ? config.text : "rgba(255,255,255,0.25)",
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < ORDER_STEPS.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mt-[-18px] rounded-full overflow-hidden bg-white/[0.05]">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: i < activeIdx ? "100%" : "0%",
                    backgroundColor: config.dot,
                    transitionDelay: `${(i + 1) * 200}ms`,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============ CART TOAST ============
// Animated toast notification when item is added to cart
interface CartToastProps {
  show: boolean;
  productName: string;
  onClose: () => void;
}

export function CartToast({ show, productName, onClose }: CartToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 flex items-center gap-3
        px-4 py-3 rounded-xl
        bg-[#0a0a0a]/95 backdrop-blur-md border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        transition-all duration-500 ease-out
        ${show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }
      `}
    >
      {/* Animated checkmark */}
      <div className="w-8 h-8 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] flex items-center justify-center shrink-0">
        <svg
          className={`w-4 h-4 text-[#22c55e] transition-all duration-300 delay-200 ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <p className="text-[13px] text-white font-medium">{productName}</p>
        <p className="text-[11px] text-[#22c55e]">Added to cart</p>
      </div>

      <button
        onClick={onClose}
        className="ml-2 text-gray-500 hover:text-white transition-colors p-1"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
