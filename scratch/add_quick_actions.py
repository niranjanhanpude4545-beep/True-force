import os

file_path = 'src/i18n.js'
enc = 'latin-1' # We know this worked before

try:
    with open(file_path, 'r', encoding=enc) as f:
        content = f.read()

    if "quickActions: {" not in content:
        quick_actions = """
        quickActions: {
          quote: "Request Quote",
          coverage: "Check Coverage",
          human: "Speak to Human",
          jobs: "View Careers"
        },
"""
        content = content.replace("responses: {", quick_actions + "        responses: {")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated i18n.js with quick actions.")
except Exception as e:
    print(f"Error: {e}")
