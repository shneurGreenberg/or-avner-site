export const SITE = {
  name: "«ОР АВНЕР»",
  subtitle: "Новосибирский еврейский лицей",
  tagline: "МИР ИНТЕЛЛЕКТА И ДОБРА",
  phone: "(383) 209-12-08",
  phoneHref: "tel:+73832091208",
  email: "anver@edu54.ru",
  address: "г. Новосибирск, просп. Дзержинского, 1",
  url: "https://or-avner.ru",
} as const;

export const NAV_LINKS = [
  { label: "О школе", href: "#about" },
  { label: "Учебный процесс", href: "#reasons" },
  { label: "Новости", href: "#news" },
  { label: "Галерея", href: "#gallery" },
  { label: "Проект «Лев»", href: "#lev" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const MAP = {
  lat: 54.9847,
  lng: 82.8964,
  embedUrl:
    "https://yandex.ru/map-widget/v1/?ll=82.896400%2C54.984700&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY5NTY5MhJ80KDQvtGB0YHQuNGPLCDQndC10YLRgNC-0YHQutC40Y8sINCc0L7RgdC60LLQsNC70Ywg0J%2FQu9C-0YHRgtCw0L0sIDEiCg1q8hJCEQ8%2F%2F8%2F8VfQ0Y9m0LXRgNC20LXQvCwgMSIKDTa28hJCEQ8%2F%2F%2F%2F%2F%2F%2F0YHQvtC70YzQutC-0LLRgdC60LDRjywg0J3QtdGC0YDQvtGB0LrQuNGP&z=16",
} as const;
