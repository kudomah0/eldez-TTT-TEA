def load_clues(filename):
    with open(filename, "r") as file:
        clues = file.readlines()
    return clues

def load_grid(filename):
    with open(filename, "r") as file:
        grid = file.readlines()
    return grid
