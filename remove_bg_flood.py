from PIL import Image

def remove_bg_floodfill(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Get the background color from the top-left pixel
    bg_color = img.getpixel((0, 0))
    
    width, height = img.size
    pixels = img.load()
    
    # Queue for BFS flood fill
    queue = [(0, 0)]
    visited = set([(0, 0)])
    
    # Tolerance for color matching
    tolerance = 20
    
    def color_match(c1, c2):
        return (abs(c1[0] - c2[0]) < tolerance and
                abs(c1[1] - c2[1]) < tolerance and
                abs(c1[2] - c2[2]) < tolerance)

    while queue:
        x, y = queue.pop(0)
        
        # Make transparent
        pixels[x, y] = (bg_color[0], bg_color[1], bg_color[2], 0)
        
        # Check neighbors
        for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                if color_match(pixels[nx, ny], bg_color):
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # Also do the top right, bottom left, and bottom right corners just in case it's not contiguous
    corners = [(width-1, 0), (0, height-1), (width-1, height-1)]
    for cx, cy in corners:
        if color_match(pixels[cx, cy], bg_color) and (cx, cy) not in visited:
            visited.add((cx, cy))
            queue.append((cx, cy))
            while queue:
                x, y = queue.pop(0)
                pixels[x, y] = (bg_color[0], bg_color[1], bg_color[2], 0)
                for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                        if color_match(pixels[nx, ny], bg_color):
                            visited.add((nx, ny))
                            queue.append((nx, ny))

    img.save(output_path, "PNG")
    print(f"Background removed using flood fill and saved to {output_path}")

remove_bg_floodfill(r"e:\MUKUNDHA-V3-SOC\public\images\antigravity\final_sticker3.jpg", r"e:\MUKUNDHA-V3-SOC\public\images\antigravity\final_sticker3.png")
