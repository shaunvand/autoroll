"""Generate Autoroll brand assets: app icon, logo, favicon."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path

OUT = Path(__file__).parent
OUT.mkdir(exist_ok=True)

# Brand palette
BG_TOP = (255, 90, 95)     # warm coral
BG_BOT = (155, 60, 220)    # deep violet
FG = (255, 255, 255)

def gradient_bg(size: int) -> Image.Image:
    img = Image.new("RGB", (size, size), BG_TOP)
    top = Image.new("RGB", (1, size), BG_TOP)
    px = top.load()
    for y in range(size):
        t = y / (size - 1)
        r = int(BG_TOP[0] * (1 - t) + BG_BOT[0] * t)
        g = int(BG_TOP[1] * (1 - t) + BG_BOT[1] * t)
        b = int(BG_TOP[2] * (1 - t) + BG_BOT[2] * t)
        px[0, y] = (r, g, b)
    return top.resize((size, size))

def rounded_mask(size: int, radius: int) -> Image.Image:
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((0, 0, size, size), radius=radius, fill=255)
    return m

def make_icon(size: int = 1024) -> Image.Image:
    bg = gradient_bg(size)
    icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    icon.paste(bg, (0, 0))
    icon.putalpha(rounded_mask(size, int(size * 0.22)))

    d = ImageDraw.Draw(icon)
    # Camera-roll circles (concentric, off-center)
    cx, cy = size * 0.50, size * 0.50
    # Outer ring
    r1 = size * 0.30
    d.ellipse((cx - r1, cy - r1, cx + r1, cy + r1),
              outline=FG, width=int(size * 0.045))
    # Inner solid dot
    r2 = size * 0.10
    d.ellipse((cx - r2, cy - r2, cx + r2, cy + r2), fill=FG)
    # Rotation arrow (the "auto" / "loop" cue) — small arc top-right
    arc_w = int(size * 0.045)
    bb = (cx - size*0.38, cy - size*0.38, cx + size*0.38, cy + size*0.38)
    d.arc(bb, start=-70, end=-30, fill=FG, width=arc_w)
    # Arrowhead at end of arc
    import math
    ang = math.radians(-30)
    ex = cx + (size*0.38) * math.cos(ang)
    ey = cy + (size*0.38) * math.sin(ang)
    head = size * 0.05
    d.polygon([
        (ex + head, ey),
        (ex - head*0.5, ey - head*0.9),
        (ex - head*0.5, ey + head*0.9),
    ], fill=FG)
    return icon

icon = make_icon(1024)
icon.save(OUT / "icon-1024.png")
icon.resize((512, 512), Image.LANCZOS).save(OUT / "icon-512.png")
icon.resize((192, 192), Image.LANCZOS).save(OUT / "icon-192.png")

# Favicons
for s in (16, 32, 48, 180):
    icon.resize((s, s), Image.LANCZOS).save(OUT / f"icon-{s}.png")

# ICO bundle
icons = [Image.open(OUT / f"icon-{s}.png") for s in (16, 32, 48)]
icons[0].save(OUT / "favicon.ico", sizes=[(16,16),(32,32),(48,48)])

# Wordmark SVG
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FF5A5F"/>
      <stop offset="1" stop-color="#9B3CDC"/>
    </linearGradient>
  </defs>
  <text x="0" y="58" font-family="-apple-system, Segoe UI, Helvetica, sans-serif" font-size="56" font-weight="800" fill="url(#g)" letter-spacing="-2">Autoroll</text>
</svg>'''
(OUT / "wordmark.svg").write_text(svg, encoding="utf-8")

print("Generated:", sorted(p.name for p in OUT.iterdir()))
