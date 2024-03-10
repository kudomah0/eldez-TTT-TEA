import tkinter as tk
from tkinter import messagebox
from utils import load_clues, load_grid

class CrosswordApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Teka Teka Silang Edukasi")
        self.geometry("800x600")
        self.horizontal_clues = load_clues("clues/horizontal_clues.txt")
        self.vertical_clues = load_clues("clues/vertical_clues.txt")
        self.horizontal_grid = load_grid("grids/horizontal_grid.txt")
        self.vertical_grid = load_grid("grids/vertical_grid.txt")
        self.create_crossword()

    def create_crossword(self):
        # Implement creating crossword here
        # You can use labels, entry widgets, and grids to create the crossword puzzle
        pass

if __name__ == "__main__":
    app = CrosswordApp()
    app.mainloop()
