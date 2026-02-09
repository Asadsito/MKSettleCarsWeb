import tkinter as tk
import random

root = tk.Tk()
root.withdraw()

screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

window_width = 400
window_height = 250

for i in range(5):
    win = tk.Toplevel(root)
    win.title(f"Notes clone {i+1}")

    # random position (keep fully on screen)
    x = random.randint(0, screen_width - window_width)
    y = random.randint(0, screen_height - window_height)

    win.geometry(f"{window_width}x{window_height}+{x}+{y}")

    text = tk.Text(win, width=40, height=10)
    text.insert("1.0", f"This is notes window #{i+1}")
    text.pack(padx=10, pady=10)

root.mainloop()

