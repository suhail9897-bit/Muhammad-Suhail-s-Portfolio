import { useEffect } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  XCircle,
} from "lucide-react";

const toastConfig = {
  success: {
    icon: CheckCircle2,
    title: "Success",
    wrapper:
      "border-emerald-100 bg-white shadow-[0_22px_60px_rgba(14,165,233,0.22)]",
    iconBox: "bg-emerald-50 text-emerald-600",
    bar: "from-sky-400 to-blue-600",
    text: "text-emerald-600",
  },
  error: {
    icon: XCircle,
    title: "Error",
    wrapper:
      "border-red-100 bg-white shadow-[0_22px_60px_rgba(239,68,68,0.18)]",
    iconBox: "bg-red-50 text-red-600",
    bar: "from-red-400 to-red-600",
    text: "text-red-600",
  },
  warning: {
    icon: AlertTriangle,
    title: "Warning",
    wrapper:
      "border-amber-100 bg-white shadow-[0_22px_60px_rgba(245,158,11,0.16)]",
    iconBox: "bg-amber-50 text-amber-600",
    bar: "from-amber-300 to-orange-500",
    text: "text-amber-600",
  },
  info: {
    icon: Info,
    title: "Info",
    wrapper:
      "border-sky-100 bg-white shadow-[0_22px_60px_rgba(14,165,233,0.20)]",
    iconBox: "bg-sky-50 text-sky-600",
    bar: "from-sky-400 to-blue-600",
    text: "text-sky-600",
  },
};

function Toast({
  type = "success",
  title,
  message,
  show,
  onClose,
  duration = 2500,
}) {
  const config = toastConfig[type] || toastConfig.info;
  const Icon = config.icon;

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed left-6 top-6 z-[9999] w-[calc(100%-48px)] max-w-md animate-[toastSlideIn_.28s_ease-out]">
      <style>{`
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateX(-24px) translateY(-8px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }
      `}</style>

      <div
        className={`relative overflow-hidden rounded-[24px] border ${config.wrapper}`}
      >
        <div className={`h-1.5 bg-gradient-to-r ${config.bar}`} />

        <div className="flex items-start gap-4 p-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${config.iconBox}`}
          >
            <Icon size={24} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className={`text-sm font-black ${config.text}`}>
              {title || config.title}
            </h3>
            <p className="mt-1 text-sm font-semibold leading-5 text-slate-600">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-slate-500 transition hover:bg-sky-100 hover:text-sky-600"
            aria-label="Close toast"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;