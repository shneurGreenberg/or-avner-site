"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { GlassesIcon, Logo } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-lavender/80 bg-white shadow-sm">
      <div className="mx-auto max-w-[1320px] px-4 py-3 md:px-8">
        <div className="flex items-start gap-3 md:gap-4">
          <Logo className="shrink-0" />

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <p className="hidden text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-brand-navy sm:block md:text-[11px] lg:text-xs">
                {SITE.subtitle}
              </p>
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

            <nav className="mt-2 hidden flex-wrap items-center gap-x-4 gap-y-1 lg:flex xl:gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-[12px] font-medium text-brand-navy/85 transition-colors hover:text-brand-navy xl:text-[13px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-lavender bg-white px-4 py-4 lg:hidden">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy">
            {SITE.subtitle}
          </p>
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
