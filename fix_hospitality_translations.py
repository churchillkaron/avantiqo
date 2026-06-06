import json

# Full corrected hospitality content (English as base structure)
hospitality_template = {
  "hero": {
    "badge": "HOSPITALITY INTELLIGENCE PLATFORM",
    "title1": "See The Entire Business.",
    "title2": "Know What Happens Next.",
    "description": "Reservations, operations, workforce, finance, marketing and guest experience connected through one synthetic intelligence layer.",
    "primary": "Book Demo",
    "secondary": "Explore Platform"
  },
  "reality": {
    "badge": "HOSPITALITY REALITY",
    "title1": "Hospitality today is connected everywhere.",
    "title2": "But understood nowhere."
  },
  "runtime": {
    "badge": "ONE HOSPITALITY RUNTIME",
    "title1": "Guests. Operations. Finance. Ownership.",
    "title2": "One connected runtime."
  },
  "relationships": {
    "badge": "FROM ACTIVITY TO INTELLIGENCE",
    "title1": "Most systems store events.",
    "title2": "Avantiqo understands relationships."
  },
  "intelligence": {
    "badge": "REAL HOSPITALITY INTELLIGENCE",
    "title1": "One reservation.",
    "title2": "One chain reaction."
  },
  "intelligenceChain": {
    "eventLabel": "Event",
    "eventTitle": "Reservation demand increases for next weekend",
    "cards": [
      {"label": "Operations","title": "Service demand increases"},
      {"label": "Workforce","title": "Staffing requirements adjust automatically"},
      {"label": "Inventory","title": "Purchasing forecasts update"},
      {"label": "Finance","title": "Revenue and labour projections recalculate"}
    ],
    "ownershipLabel": "Ownership",
    "ownershipTitle": "Ownership sees the impact before it happens."
  },
  "synthetic": {
    "aiTitle": "AI",
    "aiText": "Generates content. Answers questions. Creates reports. Responds to prompts.",
    "syntheticTitle": "Synthetic Intelligence",
    "syntheticText": "Understands relationships between operations, approvals, workflows, and data. Detects risks. Predicts outcomes. Recommends actions.",
    "badge": "SYNTHETIC INTELLIGENCE LAYER",
    "headline1": "Artificial Intelligence answers questions.",
    "headline2": "Synthetic Intelligence understands businesses.",
    "receiptText": "It affects operations, approvals, audit, and management visibility.",
    "receiptFooter": "Synthetic Intelligence understands the entire chain reaction."
  },
  "syntheticContent": [
    "Most platforms stop at reporting. Avantiqo continues into action.",
    "The system continuously observes activity across guests, staff, operations, finance and ownership. It identifies patterns, predicts outcomes, recommends actions and executes approved workflows automatically.",
    "This is not a chatbot. This is an operational intelligence layer built into the business itself."
  ],
  "syntheticExecute": "Execute.",
  "ownership": {
    "badge": "OWNERSHIP LAYER",
    "title1": "Ownership sees everything.",
    "title2": "Before it happens."
  },
  "ownershipTypes": [
    "Restaurant",
    "Hotel",
    "Beach Club",
    "Multi Venue Group",
    "Enterprise Hospitality Organization"
  ],
  "flow": ["Guest arrives","Reservation","Service","Inventory","Payroll","Accounting","Profitability","Ownership"],
  "realityContent": [
    "Most hospitality businesses operate through disconnected systems. Reservations live in one platform. Operations live in another. Finance sees the business weeks later. Marketing works from assumptions. Management reacts instead of leading.",
    "The problem is not a lack of data. The problem is a lack of understanding.",
    "Hospitality businesses do not need more software. They need one operating system."
  ],
  "runtimeContent": "Not separate departments. Not separate software. One connected foundation where every action becomes part of the same business story.",
  "relationshipsItems": [
    "A reservation is not a reservation. It is demand.",
    "A shift is not a shift. It is labour cost.",
    "An order is not an order. It is revenue.",
    "A review is not a review. It is future growth."
  ],
  "relationshipsDescription": "That is the difference between software and Synthetic Intelligence. Avantiqo connects operational activity directly to business meaning.",
  "intelligenceDescription": "Hospitality is not a collection of separate events. Every action creates consequences throughout the business. Avantiqo follows those consequences automatically."
}

files = ["en.json","th.json","ru.json","fr.json","it.json","sv.json","zh.json"]

for file in files:
    path = f"app/locales/{file}"
    with open(path,"r",encoding="utf-8") as f:
        data = json.load(f)

    if "hospitality" in data.get("home", {}):
        data["home"]["hospitality"] = hospitality_template

    with open(path,"w",encoding="utf-8") as f:
        json.dump(data,f,ensure_ascii=False,indent=2)

    print(f"{file} hospitality fully restored")
