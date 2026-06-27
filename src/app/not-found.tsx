import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* Large 404 text */}
        <h1 className="text-8xl font-black text-brand-secondary/15 tracking-widest uppercase">
          404
        </h1>
        
        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground">
            Page Not Found
          </h2>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            The page you are looking for does not exist or has been moved. Let us get you back to our studio homepage.
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-accent text-white hover:bg-brand-accent-hover rounded-full px-6 h-11 text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
