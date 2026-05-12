"""Flat (no-alpha) square version of the app icon for Meta App Dashboard."""
from PIL import Image, ImageDraw
from pathlib import Path
import math

OUT = Path(__file__).parent
SIZE = 1024
BG_TOP = (255, 90, 95)
BG_BOT = (155, 60, 220)
FG = (255, 255, 255)

img = Image.new("RGB", (SIZE, SIZE), BG_TOP)
top = Image.new("RGB", (1, SIZE), BG_TOP)
px = top.load()
for y in range(SIZE):
    t = y / (SIZE - 1)
    r = int(BG_TOP[0] * (1 - t) + BG_BOT[0] * t)
    g = int(BG_TOP[1] * (1 - t) + BG_BOT[1] * t)
    b = int(BG_TOP[2] * (1 - t) + BG_BOT[2] * t)
    px[0, y] = (r, g, b)
img = top.resize((SIZE, SIZE))

d = ImageDraw.Draw(img)
cx, cy = SIZE * 0.50, SIZE * 0.50
r1 = SIZE * 0.30
d.ellipse((cx - r1, cy - r1, cx + r1, cy + r1), outline=FG, width=int(SIZE * 0.045))
r2 = SIZE * 0.10
d.ellipse((cx - r2, cy - r2, cx + r2, cy + r2), fill=FG)
bb = (cx - SIZE*0.38, cy - SIZE*0.38, cx + SIZE*0.38, cy + SIZE*0.38)
d.arc(bb, start=-70, end=-30, fill=FG, width=int(SIZE*0.045))
ang = math.radians(-30)
ex = cx + (SIZE*0.38) * math.cos(ang)
ey = cy + (SIZE*0.38) * math.sin(ang)
head = SIZE * 0.05
d.polygon([(ex + head, ey), (ex - head*0.5, ey - head*0.9), (ex - head*0.5, ey + head*0.9)], fill=FG)

img.save(OUT / "icon-1024-flat.png", "PNG", optimize=True)
img.save(OUT / "icon-1024-flat.jpg", "JPEG", quality=95)
print("saved icon-1024-flat.png and .jpg")
