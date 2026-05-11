import os

file_path = 'src/i18n.js'

# Try different encodings
encodings = ['utf-8', 'utf-8-sig', 'latin-1', 'cp1252']
content = None

for enc in encodings:
    try:
        with open(file_path, 'r', encoding=enc) as f:
            content = f.read()
            print(f"Successfully read with {enc}")
            break
    except Exception as e:
        print(f"Failed with {enc}: {e}")

if content:
    # Add reviews keys first
    if "reviews: {" not in content:
        reviews_keys = """
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
        content = content.replace("roi: {", reviews_keys + "      roi: {")

    # Add commander responses
    if "responses: {" not in content:
        commander_responses = """
        responses: {
          systemOnline: "SYSTEM ONLINE. I am the TrueForce Commander AI. How can I assist with your security perimeter today?",
          pricing: "Pricing depends on the threat level, operational hours, and required unit type. Standard guarding starts effectively at industry rates, while Executive Protection requires a custom quote. Please use our 'Request Quote' page for precise intel.",
          services: "We offer comprehensive operational dominance: Corporate Security, Residential Monitoring, Industrial/Manufacturing patrols, VIP Executive Protection, and elite Cybersecurity tracking. Which sector do you fall under?",
          location: "Our tactical network primarily secures major IT hubs, corporate parks, and high-value residential sectors in Pune and Maharashtra. We are ready to deploy units to your coordinates.",
          greeting: "Commander AI awaiting instructions. Identify your security requirements or ask me about our services.",
          human: "Connecting you to human command. You can reach our 24/7 Operations Center via the WhatsApp support button or dial +91 9876543210.",
          jobs: "We are always recruiting elite personnel. Please visit our Careers page to submit your application and undergo our military-grade vetting process.",
          fallback: "Understood. Re-routing your request. For clearance on this specific inquiry, our human command operatives will need to intervene. Click the WhatsApp button on the left to dispatch a direct message to operations."
        },
"""
        content = content.replace("commander: {", "commander: {" + commander_responses)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated i18n.js successfully.")
else:
    print("Could not read i18n.js with any encoding.")
