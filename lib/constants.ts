export const SITE = {
  name: "«ОР АВНЕР»",
  subtitle: "Новосибирский еврейский лицей",
  tagline: "МИР ИНТЕЛЛЕКТА И ДОБРА",
  phone: "(383)209-12-08",
  phoneHref: "tel:+73832091208",
  email: "anver@edu54.ru",
  address: "630 015, Новосибирск, улица Шекспира, 9а",
  url: "https://shneurgreenberg.github.io/or-avner-site",
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
  lat: 55.0412,
  lng: 82.9365,
  embedUrl:
    "https://yandex.ru/map-widget/v1/?ll=82.936500%2C55.041200&z=16&pt=82.936500%2C55.041200%2Cpm2rdm",
} as const;

export const IMAGES = {
  logo: "/images/logo.png",
  logoFooter: "/images/logo-footer.png",
  heroStaircase: "/images/hero-staircase.png",
  heroBoy: "/images/hero-boy-logo.png",
  decorFaq: "/images/decor-faq.png",
  decorMapPin: "/images/decor-map-pin.png",
} as const;
