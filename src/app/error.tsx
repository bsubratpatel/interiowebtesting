"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* Error Title */}
        <h1 className="text-8xl font-black text-brand-secondary/15 tracking-widest uppercase">
          ERROR
        </h1>
        
        {/* Detail */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
            Something went wrong
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            An unexpected error occurred during rendering. We apologize for the inconvenience. Let us try reloading the components.
          </p>
        </div>

        {/* Retry Button */}
        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-brand-accent text-white hover:bg-brand-accent-hover rounded-full px-6 h-11 text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}
