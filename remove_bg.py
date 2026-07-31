from PIL import Image
import os

input_path = r"e:\MUKUNDHA-V3-SOC\public\images\antigravity\new_sticker4.png"
output_path = r"e:\MUKUNDHA-V3-SOC\public\images\antigravity\new_sticker4.png"

def remove_black_background(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is black/dark background
            if item[0] < tolerance and item[1] < tolerance and item[2] < tolerance:
                newData.append((255, 255, 255, 0)) # Fully transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Processed: {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

remove_black_background(input_path, output_path)
