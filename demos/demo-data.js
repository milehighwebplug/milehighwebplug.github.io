/* Milehighwebplug demo engine — template data.
   Real pet-care copy for all 6 branded templates + palette presets.
   Zero dependencies. Loaded by petcare-single.html and petcare-pack.html. */

const MHWP_TEMPLATES = {
  "urban-leash": {
    id: "urban-leash",
    name: "The Urban Leash",
    layoutClass: "t-urban",
    mode: "cards",
    brand: "LoDo Leash Co.",
    tagline: "Denver's downtown dog walking crew",
    pill: "GPS-tracked · Licensed · Insured",
    heroH1: "Every downtown mile, mapped and messaged.",
    heroLede: "Solo and small-group walks for busy professionals in LoDo, RiNo, and Capitol Hill. Route map and photo sent before I'm back at your building.",
    heroCta: "Book a Meet &amp; Greet",
    servicesTitle: "Walk Services",
    services: [
      { name: "30-Minute Solo Walk", desc: "One dog, one handler, one route around the block grid. Waste pickup, water bowl, and a walk report card texted to you.", price: "$28", unit: "/ walk" },
      { name: "45-Minute Neighborhood Pack", desc: "Friend-vetted groups of 3 maximum through Cheesman Park and City Park. Leash work continues the whole time.", price: "$35", unit: "/ walk" },
      { name: "60-Minute Power Walk", desc: "Hills, stairs, and pace for high-drive breeds. GPS log with distance and elevation shared after every session.", price: "$45", unit: "/ walk" }
    ],
    aboutTitle: "Meet Alex",
    aboutP1: "I've walked Denver dogs full-time for six years, 4,100+ walks and counting. Every route is pre-scouted for construction, traffic, and the off-leash windows at City Park.",
    aboutP2: "Building access is handled with a keyed lockbox protocol and a staff log. I carry pet first aid supplies on every walk and I'm insured through Pet Sitters International.",
    creds: ["Pet First Aid + CPR", "PSI Insured #PSI-881402", "Bark-Behavior Approved"],
    faq: [
      { q: "How do you get into my building?", a: "Lockbox at the management office or a key on file with concierge desk, whichever your HOA allows. Codes rotate every 90 days." },
      { q: "What about snow and storms?", a: "Denver rain and light snow are go-days with booties and a towel dry-off at the door. An NWS severe warning cancels the walk, with a text by 7 AM." },
      { q: "Do you do medication?", a: "Yes. Oral meds and topicals included free on any walk of 45 minutes or more with written vet instructions." }
    ],
    gallery: ["City Park pack at 7am", "Fi collar route map", "RiNo canal stroll", "Bootie check, 16th St", "Cheesman loop, snow day", "Post-wash nap cam"],
    footer: "LoDo Leash Co. · Denver, CO · Walks 7 AM–6 PM, Mon–Sat",
    palettes: {
      "Signature":      { primary: "#0D6EFD", bgNeutral: "#1E2022", accent: "#F8F9FA" },
      "Midnight Cobalt":{ primary: "#3D8BFD", bgNeutral: "#0A0E1A", accent: "#FFC94D" },
      "Street Mono":    { primary: "#111215", bgNeutral: "#F1F3F5", accent: "#FF4D4D" }
    }
  },

  "alpine-paws": {
    id: "alpine-paws",
    name: "Alpine Paws",
    layoutClass: "t-alpine",
    mode: "cards",
    brand: "Summit Paws Colorado",
    tagline: "Trail running & backcountry dog expeditions",
    pill: "Trail-tested since 2017",
    heroH1: "Your dog belongs above the treeline.",
    heroLede: "Half-day and full-day trail adventures for high-drive dogs in the Colorado Front Range. Recall-checked packs, satellite tracking, and mud washed off before the drop-off.",
    heroCta: "Check Pack Availability",
    servicesTitle: "Adventure Outings",
    services: [
      { name: "Foothills Half-Day", desc: "Three hours on established singletrack around Green Mountain. Hydration pack carried, paw checks at every switchback.", price: "$65", unit: "/ outing" },
      { name: "Full-Day Canyon Trek", desc: "Six hours in the canyons west of Golden for endurance dogs. Door-to-trail transport in crash-tested crates.", price: "$95", unit: "/ outing" },
      { name: "Sunrise Trail Run", desc: "For canicross-curious dogs: a paced 5K trail run with harness and belt lines. Tuesdays and Thursdays, 6 AM sharp.", price: "$48", unit: "/ run" }
    ],
    aboutTitle: "Meet Jamie",
    aboutP1: "Ultra-marathoner, Wilderness First Responder, and owner of two cattle dogs who ruined my apartment carpet, which is why I do this. Six seasons leading Front Range dog packs.",
    aboutP2: "Every outing carries a Garmin inReach, a full canine trauma kit, and bear spray where required. Dogs pass a recall and pack-fit assessment before their first trail day.",
    creds: ["WFR Certified", "Leave No Trace Trainer", "Garmin inReach Carried"],
    faq: [
      { q: "Does my dog need perfect recall?", a: "Reliable voice recall in a fenced area is required for off-leash segments. Dogs in training can join on 30-ft long-lines until they pass the field test." },
      { q: "What gear do you provide?", a: "Trail harnesses, booties for rough granite, and collapsible bowls. Bring your dog's regular food. We feed on the trail, not after." },
      { q: "Heat policy?", a: "No trail outings when the forecast tops 88°F, high-country shade notwithstanding. We pivot to river access or sunrise runs." }
    ],
    gallery: ["Green Mtn summit crew", "River rest, South Table", "Paw check at mile 4", "Crate load-out, 6:10 AM", "Snowshoe trail day", "Post-trek shake-down"],
    footer: "Summit Paws Colorado · Jefferson & Boulder County Open Space",
    palettes: {
      "Signature":     { primary: "#4A7C59", bgNeutral: "#1B3B2B", accent: "#C85A17" },
      "Sandstone":     { primary: "#C85A17", bgNeutral: "#EADBC8", accent: "#1B3B2B" },
      "Glacier":       { primary: "#2E6F8E", bgNeutral: "#F2F7F5", accent: "#D64933" }
    }
  },

  "gentle-paws": {
    id: "gentle-paws",
    name: "Gentle Paws Sanctuary",
    layoutClass: "t-gentle",
    mode: "cards",
    brand: "Gentle Paws Sanctuary",
    tagline: "In-home care for senior & medically complex pets",
    pill: "One pet, one handler, one quiet hour",
    heroH1: "Slow, steady care for the pets who need it most.",
    heroLede: "Senior dogs, anxious rescues, and pets on medication schedules deserve unhurried one-on-one attention, never a crowded kennel.",
    heroCta: "Schedule a Meet &amp; Greet",
    servicesTitle: "Sanctuary Visits",
    services: [
      { name: "The Calm Drop-In", desc: "Thirty unhurried minutes: fresh water, slow meals, pad or litter changes, a gentle garden stroll, and a photo before I leave.", price: "$32", unit: "/ visit" },
      { name: "Medication & Mobility", desc: "Sixty minutes for pets on schedules: oral meds, insulin timing, sling-assisted walks, and documented comfort checks.", price: "$48", unit: "/ visit" },
      { name: "Overnight Sanctuary", desc: "Evening-to-morning in-home presence: dinner routine, bedtime meds, and company for recovering or confused seniors.", price: "$90", unit: "/ night" }
    ],
    aboutTitle: "Meet Sarah",
    aboutP1: "Twelve years as a veterinary technician taught me how to read a dog who can't tell you what hurts. I now bring those clinical instincts to your living room instead of the exam room.",
    aboutP2: "I handle insulin protocols, sub-Q fluids, post-surgical restriction, and hand-feeding. Every visit ends with a timestamped log you can read over your morning coffee.",
    creds: ["12 yrs Vet Tech", "Pet First Aid + CPR", "PSI Insured"],
    faq: [
      { q: "Can you manage diabetic schedules?", a: "Yes. Insulin type, dose, and timing are confirmed with your vet at onboarding, and every injection is logged with time and appetite notes." },
      { q: "My senior dog is anxious about strangers.", a: "The first visit is a 20-minute floor-sit and nothing else. No handling. We build trust at their pace before any routine work begins." },
      { q: "Post-surgery care?", a: "Strict confinement routines, cone management, wound checks against your vet's photo reference, and carrier-assisted bathroom trips." }
    ],
    gallery: ["Garden stroll, slow lane", "8 AM insulin logged", "Recovery cone check", "Sunbeam nap, Biscuit", "Sling assist, back steps", "Hand-fed dinner time"],
    footer: "Gentle Paws Sanctuary · Denver & Washington Metro · By appointment",
    palettes: {
      "Signature":    { primary: "#556B2F", bgNeutral: "#F4EFEA", accent: "#C38D9E" },
      "Lavender Dusk":{ primary: "#7C6A9C", bgNeutral: "#F5F1F8", accent: "#E0B4A1" },
      "Sea Calm":     { primary: "#4E7C88", bgNeutral: "#EFF4F3", accent: "#D9A0A8" }
    }
  },

  "metro-k9": {
    id: "metro-k9",
    name: "Metro K9 Companion",
    layoutClass: "t-metro",
    mode: "table",
    brand: "Metro K9 Companion",
    tagline: "Structured handling · Reactive dog specialists",
    pill: "Training-first walking service",
    heroH1: "Structure beats chaos. Every walk counts.",
    heroLede: "Specialized handling for reactive, high-drive, and strong dogs. Loose-leash mechanics, threshold control, and decompression routes. Your training plan, enforced on every outing.",
    heroCta: "Request Intake Evaluation",
    servicesTitle: "Handling Programs",
    services: [
      { name: "45-Min Structured Walk", desc: "Solo outing. Heel mechanics, pattern games, threshold work on low-traffic routes.", price: "$45", unit: "/ walk" },
      { name: "60-Min Decompression Walk", desc: "Sniff-focused forest-edge route. Zero dog contact. Built for over-arousal cases.", price: "$55", unit: "/ walk" },
      { name: "Reactive Reset Session", desc: "Controlled exposure work with distance management and a written session report.", price: "$75", unit: "/ session" },
      { name: "Day School Walk (AM + PM)", desc: "Two structured outings with midday crate rest and consistency between sessions.", price: "$95", unit: "/ day" }
    ],
    aboutTitle: "Handler Credentials",
    aboutP1: "CPDT-KA apprentice with 9 years handling shelter intakes and surrender-prevention cases. I specialize in the dogs other walkers decline: lungers, pullers, and the 70-lb Lab that 'just needs exercise.'",
    aboutP2: "Every program runs your trainer's protocol verbatim: marker words, equipment, and escape routes are documented in your dog's handling sheet and reviewed monthly with you.",
    creds: ["CPDT-KA Apprentice", "Muzzle-Conditioned Handling", "Insured #GL-2298411"],
    faq: [
      { q: "Will my dog meet other dogs?", a: "No. Zero dog-to-dog contact unless your trainer prescribes it. We hold a 20-foot buffer and use pre-scouted alternate exits." },
      { q: "What equipment do you handle?", a: "Slip leads, front-clip harnesses, head halters, Herm Sprenger prongs, and basket muzzles, used per your protocol." },
      { q: "How do I know it's working?", a: "Every walk ends with a logged report: trigger distances, response quality, recovery time, and next-step notes in your portal." }
    ],
    gallery: ["Threshold work, 15ft", "Pattern games, dead zone", "Muzzle-positive session", "Decompression sniff strip", "Loose leash, bike pass", "Crate-down midday"],
    footer: "Metro K9 Companion · Denver Metro · Intake eval required",
    palettes: {
      "Signature":    { primary: "#334155", bgNeutral: "#FFFFFF", accent: "#F59E0B" },
      "Tactical Night":{ primary: "#F59E0B", bgNeutral: "#111215", accent: "#94A3B8" },
      "Field Safety": { primary: "#3F6212", bgNeutral: "#FAFAF7", accent: "#EA580C" }
    }
  },

  "wag-collective": {
    id: "wag-collective",
    name: "The Wag Collective",
    layoutClass: "t-wag",
    mode: "cards",
    brand: "The Wag Collective",
    tagline: "Denver's friendliest dog club",
    pill: "Small packs · Big zoomies",
    heroH1: "Where every walk ends in wags &amp; photos.",
    heroLede: "Small-group play romps in private fenced yards, six dogs maximum, with a photo album of your pup's best moments delivered before dinner, every single day.",
    heroCta: "Join the Pack",
    servicesTitle: "Membership Packs",
    services: [
      { name: "Weekday Warm-Up", desc: "3 play romps weekly (M/W/F), 90 minutes door-to-door in a private fenced yard. Daily photo updates included.", price: "$120", unit: "/ month" },
      { name: "Full Pack Access", desc: "5 sessions weekly with enrichment games and priority size-matched groups. Monthly 'Top Tails' recap album.", price: "$180", unit: "/ month" },
      { name: "Weekend Warrior", desc: "Every Saturday: a 2-hour park adventure with trail time, group social hour, and GPS route sent.", price: "$95", unit: "/ month" }
    ],
    aboutTitle: "The Pack Captain",
    aboutP1: "Dani R., five years running supervised playgroups, 300+ dogs temperament-vetted. Every pup gets a free 20-minute playdate before joining a group, and no dog gets pushed in.",
    aboutP2: "Groups are matched by play style over size: wrestling crew, chase crew, or mellow snobs. DHPP, rabies, and Bordetella records are verified before the first romp.",
    creds: ["Canine Body Language Cert.", "Vetted Play Groups", "Insured #CO-PLG-55810"],
    faq: [
      { q: "How big are the groups?", a: "Strict six-dog maximum per romp, split by play style. Your dog sees the same buddies each week. Stability beats variety." },
      { q: "What if my dog is shy?", a: "Shy dogs start with parallel sessions: same yard, same time, no forced intro. Most join the full pack within three weeks." },
      { q: "Vaccination requirements?", a: "DHPP, rabies, and Bordetella on file, plus a current flea/ticket plan. We'll remind you before anything lapses." }
    ],
    gallery: ["Splash pad showdown", "Waffles vs. the ball pit", "New best friends, Maya & Roo", "Tumbleweed field romp", "Nap pile, 11:40 AM", "Saturday crew, Wash Park"],
    footer: "The Wag Collective · Wash Park & Congress Park, Denver",
    palettes: {
      "Signature":   { primary: "#FF6B6B", bgNeutral: "#0F172A", accent: "#A7F3D0" },
      "Coral Cream": { primary: "#FF6B6B", bgNeutral: "#F0FDF4", accent: "#0F172A" },
      "Mint Party":  { primary: "#14B8A6", bgNeutral: "#0F172A", accent: "#FFD166" }
    }
  },

  "velvet-whiskers": {
    id: "velvet-whiskers",
    name: "The Velvet Whiskers",
    layoutClass: "t-whiskers",
    mode: "list",
    brand: "The Velvet Whiskers",
    tagline: "Cat sitting, done quietly",
    pill: "Feline-only routes · No dog scent",
    heroH1: "Cat sitting the way cats prefer it: quiet, predictable, and on their terms.",
    heroLede: "Specialized drop-in visits for felines and small animals in Cherry Creek and Wash Park. No dogs on my routes, no forced play, no stress.",
    heroCta: "Request Dates",
    servicesTitle: "Visit Types",
    services: [
      { name: "Solo Purr Check-in · 30 min", desc: "Fresh water, food, litter sifting, and a ten-minute quiet sit at your cat's chosen distance. Photo update before I leave.", price: "$28", unit: "" },
      { name: "Enrichment & Grooming · 60 min", desc: "Wand toy rotation, brush-outs for long coats, scratching-post audits, and window-perch resets for multi-cat homes.", price: "$42", unit: "" },
      { name: "Wellness & Medication · 60 min", desc: "Oral medications, sub-Q fluid support, diabetic logging, and appetite tracking shared with your vet.", price: "$55", unit: "" }
    ],
    aboutTitle: "Meet June",
    aboutP1: "Fear-Free pledge sitter with 1,900+ cat visits: kidney diets, hide-and-seek seniors, and a black cat who trusts floor-sitters and no one else.",
    aboutP2: "My routes are feline-only. My gear never contacts a dog between your visits. Litter scoop, litter brand, and box location match your household.",
    creds: ["Fear-Free Pledge", "Insured #PET-7710234", "Rabbit &amp; Small Animal Care"],
    faq: [
      { q: "My cat hides from strangers. Is that a problem?", a: "It's the normal case. I speak softly, sit low, and let hiding happen. Visit logs include a 'visible: yes/no' check either way." },
      { q: "Do you cover more than cats?", a: "Yes: rabbits, guinea pigs, rats, and indoor chickens. Same quiet protocol, same written log." },
      { q: "What about the litter?", a: "Scooped with your scoop, into your bags, refilled with your litter. Box location is never moved, and multi-cat homes get one box per cat." }
    ],
    gallery: ["Luna, under-bed audit", "Floor-sit, minute 12", "Scratch-post reset", "Milo's 4 PM sunbeam", "Rabbit hay swap", "Evening report sent"],
    footer: "The Velvet Whiskers · Cherry Creek & Wash Park, Denver",
    palettes: {
      "Signature":    { primary: "#8A9B6C", bgNeutral: "#FCF9F2", accent: "#4A3F35" },
      "Espresso Night":{ primary: "#D8C7A8", bgNeutral: "#2B241E", accent: "#8A9B6C" },
      "Sage Studio":  { primary: "#5F7653", bgNeutral: "#F2F5EE", accent: "#A87562" }
    }
  }
};
