const logoSrc = '/assets/logo/agrio-logo.png';

export default function BrandLogo({ showName = true, className = '' }) {
  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/90 p-1 shadow-lg shadow-emerald-500/15">
        <img
          src={logoSrc}
          alt="Smart Irrigation Digital Twin System logo"
          className="h-full w-full object-contain"
        />
      </span>
      {showName && (
        <span className="min-w-0">
          <span className="block truncate text-sm font-black leading-tight text-white sm:text-base">
            Agrio
          </span>
          <span className="hidden text-xs font-medium leading-tight text-emerald-100/60 sm:block">
            Smart Irrigation
          </span>
        </span>
      )}
    </div>
  );
}
