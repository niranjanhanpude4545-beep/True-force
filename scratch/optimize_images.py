from PIL import Image
import os

def compress_image(path, max_size_kb=150):
    if not os.path.exists(path):
        return
    
    img = Image.open(path)
    
    # Keep original format if possible, otherwise use JPEG
    ext = os.path.splitext(path)[1].lower()
    
    if ext == '.png':
        # Optimize PNG
        if img.mode != 'RGB' and img.mode != 'RGBA':
            img = img.convert('RGBA')
        img.save(path, "PNG", optimize=True)
        # If still too big, resize
        if os.path.getsize(path) > max_size_kb * 1024:
            w, h = img.size
            img = img.resize((w//2, h//2), Image.Resampling.LANCZOS)
            img.save(path, "PNG", optimize=True)
    else:
        # Optimize JPG
        img = img.convert('RGB')
        quality = 85
        img.save(path, "JPEG", quality=quality, optimize=True)
        while os.path.getsize(path) > max_size_kb * 1024 and quality > 10:
            quality -= 5
            img.save(path, "JPEG", quality=quality, optimize=True)
    
    print(f"Compressed {path} to {os.path.getsize(path)//1024} KB")

# Target images
public_dir = "public"
images_dir = os.path.join(public_dir, "images")

# Logo
compress_image(os.path.join(public_dir, "logo-new.png"), 100)

# Hero Background
compress_image(os.path.join(public_dir, "hero-new-bg.png"), 200)

# Gallery Images
if os.path.exists(images_dir):
    for f in os.listdir(images_dir):
        if f.endswith(".png") or f.endswith(".jpg"):
            compress_image(os.path.join(images_dir, f), 150)
