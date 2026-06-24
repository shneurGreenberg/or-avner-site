"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { GlassesIcon, Logo } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-lavender/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 md:gap-4 md:px-8 md:py-3">
        <div className="flex min-w-0 shrink-0 items-center gap-2.5 md:gap-3">
          <Logo className="shrink-0" />
          <p className="hidden min-w-0 text-[10px] font-semibold uppercase leading-tight tracking-wide text-brand-navy sm:block md:text-[11px] lg:text-xs">
            {SITE.subtitle}
          </p>
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-4 2xl:gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[12px] font-medium text-brand-navy/85 transition-colors hover:text-brand-navy xl:text-[13px] 2xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden whitespace-nowrap text-sm font-bold text-brand-navy md:block"
          >
            {SITE.phone}
          </a>
          <GlassesIcon className="hidden md:block" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-lavender lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Меню</span>
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-brand-navy transition-transform",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-brand-navy transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-brand-navy transition-transform",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-lavender bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brand-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              className="whitespace-nowrap pt-2 text-base font-bold text-brand-navy"
            >
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
