import { SiteImage } from "@/components/ui/SiteImage";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { FooterLogo } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16">
        <div className="mb-10">
          <FooterLogo />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, col) => (
            <nav key={col} className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={`${col}-${link.href}`}
                  href={link.href}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} {SITE.subtitle}. Все права защищены.
          </p>
          <p className="mt-1">
            {SITE.phone} · {SITE.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
