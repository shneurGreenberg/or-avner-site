"use client";

import { FormEvent, useState } from "react";
import { SITE, MAP } from "@/lib/constants";
import { MapPinDoodle } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionTitle } from "@/components/ui/Section";

type FormState = "idle" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Заполните обязательные поля");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Некорректный email");
      return;
    }

    const subject = encodeURIComponent(`Сообщение с сайта от ${name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone || "не указан"}\n\n${message}`,
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  return (
    <section id="contacts" className="relative bg-white">
      <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[380px]">
        <SiteImage
          src="/images/aerial-campus.webp"
          alt=""
          fill
          aria-hidden
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white md:h-32" />
      </div>

      <div className="relative bg-white px-4 pb-16 pt-0 md:px-8 md:pb-20 lg:pb-24">
        <div className="relative mx-auto max-w-[1200px] -mt-20 overflow-visible rounded-[32px] bg-brand-lavender-card p-6 shadow-lg md:-mt-28 md:p-10 lg:-mt-32 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionTitle>Наши контакты</SectionTitle>

              <ul className="mt-6 space-y-2 text-base text-brand-navy">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="font-bold hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:underline">
                    {SITE.email}
                  </a>
                </li>
                <li>{SITE.address}</li>
              </ul>

              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <h3 className="text-lg font-bold text-brand-navy">
                  Написать сообщение
                </h3>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <input
                  name="name"
                  required
                  placeholder="Имя"
                  className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-text-body outline-none ring-1 ring-brand-lavender-muted/40 focus:ring-2 focus:ring-brand-navy"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-text-body outline-none ring-1 ring-brand-lavender-muted/40 focus:ring-2 focus:ring-brand-navy"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-text-body outline-none ring-1 ring-brand-lavender-muted/40 focus:ring-2 focus:ring-brand-navy"
                />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Введите текст сообщения"
                  className="w-full resize-none rounded-2xl border-0 bg-white px-4 py-3 text-text-body outline-none ring-1 ring-brand-lavender-muted/40 focus:ring-2 focus:ring-brand-navy"
                />

                <Button type="submit" className="w-full">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>

                {status === "success" && (
                  <p className="text-sm font-medium text-green-700" role="status">
                    Открывается почтовый клиент для отправки сообщения на{" "}
                    {SITE.email}.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </div>

            <div className="relative pt-6 lg:pt-10">
              <div className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 md:-top-10">
                <MapPinDoodle className="h-16 w-auto md:h-20 lg:h-24" />
              </div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <iframe
                  title="Карта — лицей «ОР АВНЕР»"
                  src={MAP.embedUrl}
                  className="h-80 w-full border-0 md:h-[480px] lg:h-[540px]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
