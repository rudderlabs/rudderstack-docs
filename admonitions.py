import csv
import glob
import os
import re

# Initialize an empty list to store the results
results = []

# Iterate over all the files in the docs folder and its subfolders
for root, dirs, files in os.walk("docs"):
    for file in files:
        # Check if the file is a .mdx file
        if file.endswith(".mdx"):
            # Construct the full path to the file
            file_path = os.path.join(root, file)

            # Get the relative path to the file
            relative_path = os.path.relpath(file_path, "docs")

            # Open the .mdx file
            with open(file_path, "r") as f:
                # Read the contents of the file
                contents = f.read()

                # Extract the title from the frontmatter
                title_match = re.search(r"title: \"(.+?)\"", contents)
                if title_match:
                    title = title_match.group(1)
                else:
                    title = None

                # Count the number of warning blocks in the file
                warning_block_count = contents.count('<div class="warningBlock">')

                # Count the number of info blocks in the file
                info_block_count = contents.count('<div class="infoBlock">')

                # Count the number of success blocks in the file
                success_block_count = contents.count('<div class="successBlock">')

                # Count the number of danger blocks in the file
                danger_block_count = contents.count('<div class="dangerBlock">')

                # Calculate the total number of admonitions in the file
                total_admonitions = warning_block_count + info_block_count + success_block_count + danger_block_count

                # Add the title, warning block count, info block count, success block count, danger block count and total admonitions to the results list
                results.append((title, relative_path, warning_block_count, info_block_count, success_block_count, danger_block_count, total_admonitions))

# Open


# Open the CSV file for writing
with open("results.csv", "w", newline="") as csvfile:
    # Create a CSV writer object
    writer = csv.writer(csvfile)

    # Write the header row
    writer.writerow(["Title", "Path", "Warning blocks", "Info blocks", "Success blocks", "Danger blocks", "Total admonitions"])

    # Write the results to the CSV file
    for result in results:
        writer.writerow([result[0], result[1], result[2], result[3], result[4], result[5], result[6]])
