"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-lavender/60 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-semibold text-brand-navy sm:block"
          >
            {SITE.phone}
          </a>
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
              className="pt-2 text-base font-semibold text-brand-navy"
            >
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
