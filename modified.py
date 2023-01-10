import os
import subprocess

# Set the directory to the "docs" directory of the Gatsby repo
docs_dir = "docs"

# Iterate through all the files in the docs directory and its subdirectories
for root, dirs, files in os.walk(docs_dir):
  for filename in files:
    # Get the full path of the file
    filepath = os.path.join(root, filename)
    
    # Check if the file is a Markdown file
    if filepath.endswith(".mdx"):
      # Open the file in read mode
      with open(filepath, "r") as f:
        # Read the entire file into a string
        content = f.read()
      
      # Use git to get the last modified timestamp of the file in the desired format
      last_modified = subprocess.run(["git", "log", "-1", "--format=%ci", "--", filepath], capture_output=True).stdout.decode().strip()
      
      # Split the content into a list of lines
      lines = content.split("\n")
      
      # Find the index of the opening and closing frontmatter delimiters
      start_index = -1
      end_index = -1
      for i, line in enumerate(lines):
        if line == "---":
          if start_index == -1:
            start_index = i
          else:
            end_index = i
            break
      
      # Make sure that the opening and closing delimiters were found
      if start_index == -1 or end_index == -1:
        continue
      
      # Insert the lastModified frontmatter item within the frontmatter block
      lines.insert(end_index, "lastModified: " + last_modified)
      
      # Join the lines back into a single string
      content = "\n".join(lines)
      
      # Open the file in write mode
      with open(filepath, "w") as f:
        # Write the modified content back to the file
        f.write(content)
