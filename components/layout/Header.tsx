"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { GlassesIcon, Logo } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-lavender/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-2.5 md:px-8 md:py-3">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <Logo className="shrink-0" />
          <p className="hidden max-w-[140px] text-[10px] font-semibold uppercase leading-tight tracking-wide text-brand-navy lg:block xl:max-w-none xl:text-xs">
            {SITE.subtitle}
          </p>
        </div>

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-medium text-brand-navy/85 transition-colors hover:text-brand-navy 2xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-bold text-brand-navy md:block"
          >
            {SITE.phone}
          </a>
          <GlassesIcon className="hidden md:block" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-lavender xl:hidden"
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
        <nav className="border-t border-brand-lavender bg-white px-4 py-4 xl:hidden">
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
              className="pt-2 text-base font-bold text-brand-navy"
            >
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
