import rembg
import PIL.Image

input_path = 'public/logo-new.png'
output_path = 'public/logo-new.png' # overwrite

with open(input_path, 'rb') as i:
    input_data = i.read()

output_data = rembg.remove(input_data)

with open(output_path, 'wb') as o:
    o.write(output_data)

print(f"Successfully processed {input_path}")
