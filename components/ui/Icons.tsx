export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4C26.5 14 34 21.5 44 24C34 26.5 26.5 34 24 44C21.5 34 14 26.5 4 24C14 21.5 21.5 14 24 4Z"
        fill="#F5A623"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="24" r="4" fill="white" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3">
      <LogoIcon className="h-10 w-10 shrink-0 md:h-12 md:w-12" />
      <div className="leading-tight">
        <div className="text-lg font-bold text-brand-navy md:text-xl">
          ОР АВНЕР
        </div>
        {!compact && (
          <div className="hidden text-[10px] font-medium uppercase tracking-wide text-brand-lavender-text sm:block md:text-xs">
            Новосибирский еврейский лицей
          </div>
        )}
      </div>
    </a>
  );
}

export function FaqDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="60" cy="55" r="28" fill="#FFF8E7" stroke="#F5A623" strokeWidth="3" />
      <text x="60" y="65" textAnchor="middle" fontSize="32" fill="#F5A623" fontWeight="700">
        ?
      </text>
      <path d="M15 80 Q25 60 35 75" stroke="#A3A4D5" strokeWidth="2" fill="none" />
      <path d="M85 30 Q95 20 105 35" stroke="#7EC8E3" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <path d="M90 85 L98 93 M98 85 L90 93" stroke="#F5A623" strokeWidth="2" />
    </svg>
  );
}

export function MapPinDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none">
      <path
        d="M40 8C28 8 20 18 20 28C20 42 40 60 40 60C40 60 60 42 60 28C60 18 52 8 40 8Z"
        fill="#FDF081"
        stroke="#F5A623"
        strokeWidth="2"
      />
      <circle cx="40" cy="28" r="8" fill="white" stroke="#F5A623" strokeWidth="2" />
      <path d="M10 65 Q20 55 30 62" stroke="#FDF081" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function LetterIcon({ letter }: { letter: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-[3px] border-brand-yellow bg-white text-3xl font-bold text-brand-navy shadow-sm md:h-20 md:w-20 md:text-4xl">
      {letter}
    </div>
  );
}

export function HeroArcs() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40"
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      <path
        d="M350 50 Q250 150 350 250"
        stroke="#7EC8E3"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
      />
      <path
        d="M380 80 Q280 180 380 280"
        stroke="#7EC8E3"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
      />
    </svg>
  );
}

export function AlephIllustration() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="flex items-end justify-center gap-2">
        <div className="flex h-24 w-16 items-end justify-center rounded-t-lg bg-brand-lavender pb-2 text-2xl font-bold text-brand-navy">
          2
        </div>
        <div className="flex h-32 w-20 items-end justify-center rounded-t-lg bg-brand-navy pb-2 text-3xl font-bold text-white">
          1
        </div>
        <div className="flex h-20 w-14 items-end justify-center rounded-t-lg bg-brand-lavender pb-2 text-xl font-bold text-brand-navy">
          3
        </div>
      </div>
      <LogoIcon className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2" />
    </div>
  );
}
