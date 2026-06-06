#!/bin/bash
# Backup the original page
cp app/industries/healthcare/page.js app/industries/healthcare/page.js.bak

# Replace the hero text
sed -i '' 's/{h.hero?.title1 || "See The Entire Healthcare System."}/{ "Healthcare Doesn'\''t Fail In Treatment. It Fails In Operations." }/' app/industries/healthcare/page.js

echo "Hero text updated. Backup saved as page.js.bak"
