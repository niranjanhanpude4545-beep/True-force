import json

file_path = 'src/i18n.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add commander responses if not present
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
    # Insert inside 'commander: {'
    content = content.replace("commander: {", "commander: {" + commander_responses)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated i18n.js with commander responses.")
