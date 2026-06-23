import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { LogoIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <div className="mb-10 flex items-center gap-3">
          <LogoIcon className="h-10 w-10" />
          <span className="text-xl font-bold">ОР АВНЕР</span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, col) => (
            <nav key={col} className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={`${col}-${link.href}`}
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
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

export function AerialDivider() {
  return (
    <div className="relative h-48 w-full overflow-hidden md:h-72 lg:h-96">
      <Image
        src="/images/aerial-campus.jpg"
        alt="Вид на кампус лицея «ОР АВНЕР»"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
