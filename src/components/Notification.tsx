'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, X } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  onClose: () => void;
}

export default function Notification({ type, message, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
  };

  const bgColors = {
    success: 'bg-green-500/10',
    error: 'bg-red-500/10',
    warning: 'bg-yellow-500/10',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center gap-2 rounded-lg p-4 ${bgColors[type]} animate-in fade-in slide-in-from-bottom-5`}
    >
      {icons[type]}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-2 rounded-full p-1 hover:bg-white/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
} 