import { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps extends Toast {
  onClose: (id: string) => void;
}

export function ToastComponent({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const colors = {
    success: "border-green-500 bg-green-500/10 text-green-400",
    error: "border-red-500 bg-red-500/10 text-red-400",
    info: "border-blue-500 bg-blue-500/10 text-blue-400",
    warning: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
  };

  const Icon = icons[type];

  return (
    <div
      className={`
        transform transition-all duration-300 ease-in-out
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
        max-w-sm w-full bg-zinc-900 border rounded-lg p-4 shadow-lg z-70 mt-20
        ${colors[type]}
      `}
    >
      <div className="flex items-start gap-3">
        <Icon size={20} className="flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white">{title}</p>
          {message && <p className="text-sm text-zinc-300 mt-1">{message}</p>}
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 text-zinc-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
