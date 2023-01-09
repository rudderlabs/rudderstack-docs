import os
import subprocess

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".mdx"):
            # Get the last time the file was modified
            git_log_output = subprocess.run(["git", "log", "-1", "--format=%cd", file], capture_output=True)
            last_modified = git_log_output.stdout.decode().strip()
            
            # Add the lastModified key/value pair to the frontmatter
            with open(file, "r") as f:
                content = f.read()

            # Check if the .mdx file contains two --- delimiters
            if content.count("---") == 2:
                frontmatter, rest = content.split("---", 1)
                frontmatter += f"\nlastModified: {last_modified}\n"

                # Write the modified content back to the file
                with open(file, "w") as f:
                    f.write(f"---{frontmatter}---{rest}")
            else:
                # Skip the file if it does not contain two --- delimiters
                print(f"Skipping {file} because it does not contain two --- delimiters")
