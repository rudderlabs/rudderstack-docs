import os
import subprocess

# Set the directory to the "docs" directory of the Gatsby repo
docs_dir = "docs"

# Iterate through all the files in the docs directory
for filename in os.listdir(docs_dir):
  # Get the full path of the file
  filepath = os.path.join(docs_dir, filename)
  
  # Check if the file is a Markdown file
  if filepath.endswith(".mdx"):
    # Open the file in read mode
    with open(filepath, "r") as f:
      # Read the entire file into a string
      content = f.read()
      
    # Use git to get the last modified timestamp of the file
    last_modified = subprocess.run(["git", "log", "-1", "--format=%ad", "--", filepath], capture_output=True).stdout.decode().strip()
    
    # Add the lastModified frontmatter item to the content
    content = content.replace("---", "---\nlastModified: " + last_modified)
    
    # Open the file in write mode
    with open(filepath, "w") as f:
      # Write the modified content back to the file
      f.write(content)
