export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-6">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated Spin Ring */}
        <div className="h-16 w-16 rounded-full border-4 border-zinc-200 border-t-brand-accent animate-spin" />
        
        {/* Brand Text */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest animate-pulse">
            Interiocore
          </span>
          <span className="text-[9px] font-medium text-zinc-500 uppercase tracking-widest">
            Luxury Interior Studio
          </span>
        </div>
      </div>
    </div>
  );
}
