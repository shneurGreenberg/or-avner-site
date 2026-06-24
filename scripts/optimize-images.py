from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
SRC = Path.home() / "Downloads" / "or avner site"
GRAPHICS = ROOT / "public" / "images" / "graphics"
OUT = ROOT / "public" / "images"
EXTRACTED = OUT / "extracted"

PHOTO_MAX = 1600
HERO_MAX = 1920
GRAPHIC_MAX = 1200
WEBP_QUALITY = 82


def remove_black_bg(img: Image.Image, threshold: int = 40) -> Image.Image:
    rgba = img.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (r, g, b, 0)
    return rgba


def trim_transparent(img: Image.Image, padding: int = 8) -> Image.Image:
    rgba = img.convert("RGBA")
    bbox = rgba.getbbox()
    if not bbox:
        return rgba
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(rgba.width, right + padding)
    bottom = min(rgba.height, bottom + padding)
    return rgba.crop((left, top, right, bottom))


def save_webp(
    img: Image.Image,
    dest: Path,
    *,
    max_size: int | None = None,
    cut_black: bool = False,
) -> None:
    image = img.copy()
    if cut_black:
        image = remove_black_bg(image)
    if image.mode != "RGBA":
        image = image.convert("RGBA" if dest.stem.startswith(("logo", "hero-boy", "decor", "letter", "aleph")) else "RGB")
    if max_size and max(image.size) > max_size:
        image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
    kb = dest.stat().st_size / 1024
    print(f"saved {dest.name} ({image.size[0]}x{image.size[1]}, {kb:.1f} KB)")


def save_photo(src: Path, dest_name: str, *, max_size: int = PHOTO_MAX, cut_black: bool = False) -> None:
    if not src.exists():
        print("missing", src)
        return
    img = Image.open(src)
    save_webp(img, OUT / f"{dest_name}.webp", max_size=max_size, cut_black=cut_black)


def save_graphic(emf_name: str, dest_name: str, *, max_size: int = GRAPHIC_MAX, trim: bool = True) -> None:
    src = GRAPHICS / f"{emf_name}.png"
    if not src.exists():
        print("missing graphic", src)
        return
    img = remove_black_bg(Image.open(src))
    if trim:
        img = trim_transparent(img)
    save_webp(img, OUT / f"{dest_name}.webp", max_size=max_size)


def save_extracted(src_name: str, dest_name: str, *, max_size: int = PHOTO_MAX) -> None:
    src = EXTRACTED / src_name
    if not src.exists():
        print("missing extracted", src)
        return
    save_webp(Image.open(src), OUT / f"{dest_name}.webp", max_size=max_size)


def main() -> None:
    save_photo(SRC / "תמונה1.png", "hero-staircase", max_size=HERO_MAX)
    save_photo(SRC / "תמונה3.png", "hero-boy", max_size=900, cut_black=True)
    save_photo(SRC / "ללא רקע עם לבן.png", "logo", max_size=600)

    save_graphic("תמונה11", "aleph-podium", max_size=700)
    save_graphic("תמונה12", "letter-a", max_size=220)
    save_graphic("תמונה13", "letter-l", max_size=220)
    save_graphic("תמונה14", "letter-e", max_size=220)
    save_graphic("תמונה15", "letter-f", max_size=220)
    save_graphic("תמונה16", "decor-faq", max_size=900)
    save_graphic("תמונה22", "decor-map-pin", max_size=500)

    extracted_map = {
        "pdf-26-1080x530.jpeg": "building-front",
        "pdf-30-4096x2725.jpeg": "students-desk",
        "pdf-31-4096x2725.jpeg": "students-desk-2",
        "pdf-11-1696x1756.jpeg": "students-classroom",
        "pdf-21-1600x1067.jpeg": "aerial-campus",
        "pdf-23-1098x731.jpeg": "group-event",
        "pdf-29-1280x851.jpeg": "building-balloons",
        "pdf-25-1280x851.jpeg": "building-logo",
        "pdf-28-1280x853.jpeg": "admission-students",
        "pdf-32-1280x851.jpeg": "teacher-office",
        "pdf-33-1280x851.jpeg": "student-project",
        "pdf-12-768x1344.jpeg": "testimonial-1",
        "pdf-16-768x1344.jpeg": "testimonial-2",
        "pdf-22-768x1344.jpeg": "testimonial-3",
        "pdf-07-667x235.jpeg": "logo-footer",
    }

    for src_name, dest in extracted_map.items():
        save_extracted(src_name, dest)


if __name__ == "__main__":
    main()
