import json

file_path = 'src/i18n.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I want to add new translation keys.
# Since I can't easily parse the JS object with a simple script, I'll use string replacement.

# Let's add the keys to the 'en' section.
# I'll look for 'roi: {' and insert before it or similar.

if "reviews: {" not in content:
    new_keys = """
      reviews: {
        title1: "What Our",
        title2: "Clients",
        subtitle: "Say",
        googleBadge: "Google Reviews",
        verified: "Based on verified Google Reviews",
        items: {
          r1: {
            name: "Rajesh Sharma",
            date: "2 weeks ago",
            text: "Exceptional service by TrueForce. Their guards are well-trained and extremely professional. The Live Dashboard is a game-changer for tracking deployment."
          },
          r2: {
            name: "Priya Deshmukh",
            date: "1 month ago",
            text: "We hired TrueForce for our residential society. The shift transitions are seamless, and their commander bot support is very responsive."
          },
          r3: {
            name: "Amit Patil",
            date: "2 months ago",
            text: "Highly reliable security firm in Pune. Transparent pricing and no hidden fees. Recommend for corporate security setups."
          }
        }
      },
"""
    # Insert before 'roi: {'
    content = content.replace("roi: {", new_keys + "      roi: {")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated i18n.js successfully.")
