import os
import subprocess

# Iterate through the .mdx files in the docs folder and all subdirectories
for root, dirs, files in os.walk("docs"):
    for file in files:
        if file.endswith(".mdx"):
            # Get the last time the file was modified
            git_log_output = subprocess.run(["git", "log", "-1", "--format=%cd", file], cwd=root, capture_output=True)
            last_modified = git_log_output.stdout.decode().strip()
            
            # Add the lastModified key/value pair to the frontmatter
            with open(os.path.join(root, file), "r") as f:
                content = f.read()


                
            # Find the index of the second line that starts with three dashes
            end_index = 0
            dashes_count = 0
            for i, line in enumerate(lines):
                if line.startswith('---'):
                    dashes_count += 1
                    if dashes_count == 2:
                        end_index = i
                        break
            
            # Insert the new lastModified key/value pair at the index right before the second line that starts with three dashes
            lines.insert(end_index, f"lastModified: {last_modified}")
            frontmatter = "\n".join(lines)

            # Write the modified content back to the file
            with open(os.path.join(root, file), "w") as f:
                f.write(f"---{frontmatter}---{rest}")

