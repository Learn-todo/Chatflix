import os

path = '/home/abba/Desktop/Chatflix/app/app/media/uploads'
mode = os.R_OK | os.W_OK | os.X_OK  # Check for read, write, and execute permissions

if os.access(path, mode):
    print(f"The path '{path}' has the necessary permissions.")
else:
    print(f"The path '{path}' does not have the necessary permissions.")
