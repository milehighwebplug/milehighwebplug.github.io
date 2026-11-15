// Moved out of demo.html on Sep 22 so CSP script-src 'self' allows it.
/* ============================================================
   MILE HIGH WEB PLUG — demo data
   ------------------------------------------------------------
   Three verticals, one schema. Everything a client would change
   lives in here; nothing in app.js knows what industry it's in.
   To add a vertical: copy a block, change the content, add the
   palette to styles.css under [data-vert="<id>"].
   ============================================================ */

const MHWP = {
  name: "Mile High Web Plug",
  domain: "milehighwebplug.xyz",
  email: "chris@milehighwebplug.xyz",
  city: "Denver, Colorado",
  callCta: "Email to book a call"
};

/* ---------- shared helpers used by the estimators ---------- */
const perVisit = (fee, visits) => fee * visits;

/* ============================================================
   1 — PET CARE
   ============================================================ */
const PET = {
  id: "pet",
  label: "Pet care",
  switcherSub: "Sitters, walkers, groomers",
  brand: {
    name: "Blue Spruce Pet Care", short: "Blue Spruce", mark: "✦",
    domain: "bluesprucepetcare.com", owner: "Maddy", phone: "(303) 555-0142",
    cancel: "48 hours",
    firstStep: "Free 20-minute meet & greet before any first booking."
  },
  area: {
    core: ["Aurora", "Central Park", "Park Hill", "Lowry", "Montclair", "Hale"],
    edge: ["Green Valley Ranch", "Northfield", "Congress Park", "Mayfair"],
    fee: 6,
    copy: "I keep a tight radius so a 30-minute visit is actually 30 minutes with your animal, not 30 minutes of I-25. Core neighborhoods have no travel fee."
  },
  services: [
    { id:"drop30", name:"Drop-in visit", dur:"30 min", price:27, unit:"visit", blurb:"Potty break, fresh water, food, meds, and a real play session. Litter boxes and small animals too." },
    { id:"walk45", name:"Neighborhood walk", dur:"45 min", price:32, unit:"visit", blurb:"On-leash walk with route notes. Reactive dogs welcome. Solo walks only, never a pack." },
    { id:"walk60", name:"Long walk", dur:"60 min", price:38, unit:"visit", blurb:"For high-drive dogs who need a real outing. Sniff time counts as exercise." },
    { id:"potty15", name:"Mid-day potty break", dur:"15 min", price:20, unit:"visit", blurb:"Quick in-and-out for puppies, seniors, and post-op recovery." },
    { id:"night", name:"Overnight stay", dur:"12 hr", price:95, unit:"night", blurb:"7pm–7am in your home. Includes the evening and morning routine, plus one walk." }
  ],
  addons: [
    { name:"Each additional pet", price:8, per:"visit" },
    { name:"Holiday rate", price:15, per:"visit" },
    { name:"Outside core area", price:6, per:"visit" }
  ],
  addonNote: "Medication administration included at no charge.",
  hero: {
    eyebrow: "Aurora & East Denver",
    h: "Your dog gets one sitter. Not a rotating cast from an app.",
    lede: "Dog walking, drop-ins, and overnights on the east side of Denver. Insured, bonded, and the same person at your door every time, with a photo report before I leave.",
    cta1: "Check my availability", cta2: "See rates",
    trust: ["Insured & bonded", "Pet First Aid + CPR certified", "Background checked", "Solo walks only"]
  },
  stepsTitle: "Four steps, then you stop thinking about it",
  steps: [
    { n:"FIRST", h:"Meet & greet", p:"Free and no-obligation. We do the walk-through, I meet the animals, you decide." },
    { n:"THEN", h:"Pet profile", p:"Feeding, meds, vet, emergency contact, door quirks, what sets them off. Written down, not remembered." },
    { n:"EVERY VISIT", h:"Report before I leave", p:"Arrival time, potty, food, water, meds, a photo, and a note in plain English." },
    { n:"TWICE A MONTH", h:"One invoice", p:"Every visit itemized. Card, Venmo, or check. No app subscription, no tipping prompt." }
  ],
  areaTitle: "East Denver and Aurora, on purpose",
  quote: {
    text: "She caught that Woodely was favoring a back paw two days before we would have. Sent a photo, said she'd keep the walk short, and asked if we wanted her to call the vet.",
    cite: "Kelly R. · Park Hill · client since 2024"
  },
  faq: [
    ["What happens in an emergency?", "I'm Pet First Aid and CPR certified. Your profile lists your vet and an after-hours ER. I call you first, and if I can't reach you within ten minutes and it's urgent, I go to the ER listed on the profile. You authorize a dollar ceiling in advance so nobody's guessing."],
    ["Do you take reactive or anxious dogs?", "Yes. Every walk is solo (I don't run packs), so a reactive dog isn't managing four other dogs on top of the world. Tell me the triggers at the meet & greet and I'll route around them."],
    ["What's the cancellation policy?", "48 hours notice, no charge. Inside that window it's half the visit rate, because the slot is already held. Holidays need a week."],
    ["How do you get in?", "Lockbox, keypad, or a key I hold. Your call, recorded on the pet profile. If you go with a key, it's tagged with a code, never your address."]
  ],
  book: {
    title: "Request visits",
    who: "Kelly R. · returning client",
    step2: "Which animals?",
    subjects: [
      { id:"woodely", name:"Woodely", sub:"Cattle dog mix", fee:0, mode:"perVisit" },
      { id:"pippa", name:"Pippa", sub:"Cavalier", fee:8, mode:"perVisit" }
    ],
    subjectNote: "Profiles for Woodely and Pippa are already on file: feeding, meds, vet, and access carry over automatically.",
    addLabel: "+ Add a pet",
    step3: "When?",
    freq: [
      { id:"once", label:"One-time", visits:1 },
      { id:"mwf", label:"Recurring · Mon/Wed/Fri", visits:12 }
    ],
    surcharge: { label:"Includes a holiday", fee:15, count:2,
      note:"Two visits in this range fall on a holiday, billed at +$15 each. Holiday bookings need a week's notice to cancel." },
    fields: [["Starts","Sep 08, 2026"],["Through","Sep 30, 2026"],["Preferred window","10:00 AM – 12:00 PM"]],
    noteLabel: "Anything I should know this time?",
    noteValue: "Woodely finished her course of Apoquel on the 4th. No meds this month. She's been extra reactive since the new dog moved in two doors down on Fairfax, so maybe head north out of the gate.",
    billNote: "billed twice monthly, not up front"
  },
  portal: {
    who: "Kelly R. · signed in",
    tabs: [["visits","Visits"],["subject","My pets"],["invoices","Invoices"]],
    nextLabel: "Next visit", nextValue: "Mon Sep 8, 10:30 AM<br>Long walk · Woodely",
    upcomingTag: "Mon / Wed / Fri standing",
    upcoming: [
      { d:"Mon Sep 8", t:"10:30 AM", what:"Long walk · Woodely", sub:"Recurring · Mon/Wed/Fri" },
      { d:"Wed Sep 10", t:"10:30 AM", what:"Long walk · Woodely", sub:"Recurring · Mon/Wed/Fri" },
      { d:"Fri Sep 12", t:"10:30 AM", what:"Long walk · Woodely", sub:"Recurring · Mon/Wed/Fri" },
      { d:"Sat Sep 13", t:"7:00 PM", what:"Overnight stay · Woodely", sub:"Through Sun 7:00 AM · confirmed" }
    ],
    historyHint: "Tap a visit to read the full report",
    history: [
      { d:"Sep 5", t:"10:41 AM", what:"Long walk · Woodely", snip:"Apoquel with morning kibble. Loop north to skip the doodle on Elm." },
      { d:"Sep 3", t:"10:36 AM", what:"Long walk · Woodely", snip:"Storm rolled in at the turnaround. Cut it to 45 and dried her feet." },
      { d:"Sep 1", t:"5:22 PM", what:"Drop-in visit · Woodely", snip:"Holiday rate applied (Labor Day). Backyard fetch, no walk. 94° at 5pm." }
    ],
    report: {
      time:"10:41 AM", label:"Visit report",
      checks:[["Pee",true],["Poop",true],["Food",false],["Water",true],["Meds",true]],
      note:"Apoquel went down with the morning kibble, no fight. We did the loop north to avoid the doodle on Elm. One hard pull when she spotted him, otherwise a good walk. Front gate latched behind us."
    },
    profile: {
      title:"Woodely", sub:"Cattle dog mix · 6 yrs · 41 lb · Park Hill", badge:"Profile complete",
      rows:[["Feeding","1 cup Pro Plan, 7am & 6pm. Half a spoon of pumpkin in the PM bowl."],
            ["Medication","<b>Apoquel 16mg, with the morning food only. Skip if she's already eaten.</b>"],
            ["Access","Lockbox on the gas meter, code 4-1-9-2. Storm door sticks. Lift and pull."]],
      rows2:[["Vet","Park Hill Veterinary · (303) 555-0188"],
             ["After hours","VRCC Emergency · Englewood · (303) 555-0111"],
             ["Microchip","985141002734118"],
             ["Rabies","exp. 04/2027"]],
      listTitle:"Handling notes",
      list:["Leash-reactive to other dogs. Cross the street, don't correct",
            "Bolts the front door. Leash on before the door opens",
            "Hates men in wide-brim hats. Genuinely.",
            "Recall is solid in the backyard, nowhere else"],
      ok:["Backyard off-leash","Crated while alone","Treats: any"],
      no:["Dog parks","Retractable leash","Rawhide"],
      addLabel:"Add a pet"
    },
    invoices: [
      { id:"BS-1042", per:"Aug 16 – Aug 31", count:"11 visits", amt:398, status:"Paid", when:"paid Sep 2" },
      { id:"BS-1048", per:"Sep 1 – Sep 15", count:"8 visits", amt:297, status:"Open", when:"due Sep 18" },
      { id:"BS-1031", per:"Aug 1 – Aug 15", count:"10 visits", amt:365, status:"Paid", when:"paid Aug 18" }
    ],
    invoiceDetail: {
      id:"BS-1048", per:"Sep 1 – Sep 15",
      lines:[["6 × Long walk @ $38",228],["1 × Drop-in visit @ $27",27],["1 × Drop-in visit, holiday rate (Labor Day)",42],["Medication administration",0]],
      total:297, dueLabel:"Due Sep 18",
      note:"Card, Venmo, or check. Nothing auto-charges. You approve every invoice."
    }
  },
  ops: {
    who: "Maddy · sitter",
    url: "today",
    dateLabel: "Sunday, September 6",
    title: "Today's route",
    badge: "Next stop in 18 min",
    stat: ["Sun Sep 6", "<b>4 visits · 2 done</b><br>22.4 mi · ~52 min driving"],
    weekTitle: "This week", week:[4,5,3,5,3,6,4], weekNote:"30 visits booked",
    nav: ["Today","Schedule","Clients","Invoicing"],
    navBadge: ["Requests", 2],
    stops: [
      { t:"8:15 AM", win:"8:00–8:45", title:"Pippa · Mid-day potty break", sub:"Verbena St, Central Park", status:"done", drive:null,
        note:"Big morning. She did her doorbell scream at a delivery guy across the street and then immediately asked for belly rubs. Ate everything, water bowl refilled." },
      { t:"10:30 AM", win:"10:15–11:00", title:"Woodely · Long walk", sub:"Fairfax St, Park Hill", status:"done", drive:"14 min · 5.2 mi",
        note:"Apoquel went down with the morning kibble. Loop north to avoid the doodle on Elm. One hard pull, otherwise a good walk. Front gate latched behind us." },
      { t:"1:00 PM", win:"12:45–1:30", title:"Pippa · Drop-in visit", sub:"Verbena St, Central Park", status:"next", drive:"16 min · 6.0 mi",
        alert:"<b>Before you go in:</b> Screams at the doorbell. It's not distress, it's opinion. Access: garage keypad 8-8-0-3, then the interior door is unlocked." },
      { t:"5:30 PM", win:"5:15–6:00", title:"Woodely · Drop-in visit", sub:"Fairfax St, Park Hill", status:"upcoming", drive:"14 min · 5.2 mi" }
    ],
    composer: {
      eyebrow:"Up next · 1:00 PM", title:"Check in: Pippa", meta:"Verbena St, Central Park",
      togglesLabel:"What happened",
      toggles:[["pee","Pee",true],["poop","Poop",true],["food","Food",true],["water","Water refilled",true],["meds","Meds given",false]],
      warnKey:"meds", warn:"<b>Pippa has no meds on file.</b> Leave this off unless the owner asked in the notes.",
      noteLabel:"Note to Sarah M.",
      noteValue:"She was already at the door. We did the long block, she found something questionable in the alley and I got it out of her mouth. Nothing swallowed. Water bowl was low, refilled. Crate door left open like usual.",
      sendLabel:"Send report to Sarah M.", sentLabel:"Report sent",
      sent:"<b>Sent at 1:14 PM.</b> Sarah M. got a text with a link. The visit is now billable and lands on invoice BS-1048.",
      extra:["Add photo","Flag for owner"],
      sidebarTitle:"Profile at a glance",
      sidebar:[["Feeding","3/4 cup Fromm, 7:30am & 5:30pm. Slow-feeder bowl, she inhales it."],
               ["Meds","<b>None.</b>"],
               ["Vet","Central Park Animal Hospital · (303) 555-0166"],
               ["After hours","VRCC Emergency · Englewood · (303) 555-0111"]],
      noTitle:"Do not", no:["Off-leash anywhere","Chicken (allergy)"]
    }
  },
  ai: {
    inboxNote: "Nothing sends on its own. Every reply waits for you.",
    inquiries: {
      i1: {
        from:"Dana Whitfield", via:"Website contact form", when:"Today, 9:04 AM", unread:true,
        preview:"Hi! A friend gave me your name. We have two cats and…",
        raw:"Hi! A friend gave me your name. We have two cats and we're going to be out of town for Thanksgiving, leaving the 25th and back the 30th. Would need someone to come by once a day, they're pretty independent but one of them (Odie) gets a thyroid pill in the morning. We're near 26th and Xenia. What do you charge? Also do you do a meet and greet first?",
        extract:[["Service","Drop-in visit, 1×/day"],["Dates","Nov 25 – Nov 30 · 6 visits"],["Pets","2 cats, Odie (daily thyroid med)"],["Area","26th & Xenia · Park Hill · core"],["Source","Referral"]],
        flags:[
          { k:"warn", t:"Holiday window", d:"Nov 25–30 covers Thanksgiving. Holiday rate (+$15/visit) applies Nov 26–27 by your policy." },
          { k:"crit", t:"Calendar conflict", d:"You already have an overnight booked Nov 26–28 in Lowry. A 1×/day drop-in in Park Hill fits, but not before 11am." },
          { k:"ok", t:"Med administration", d:"Daily oral med. No surcharge under your current rates. Worth confirming pill vs. transdermal." }
        ],
        quote:[["6 drop-in visits @ $27",162],["Second pet, 6 visits @ $8",48],["Holiday rate, 2 visits @ $15",30]],
        drafts:{
          warm:"Hi Dana, thank you for reaching out, and tell your friend I said hi.\n\nYes, I have Nov 25–30 open. One visit a day for two cats, including Odie's morning thyroid pill, comes to $240 for the six days. That's $27 per visit, $8 per visit for the second cat, and my holiday rate on the 26th and 27th.\n\nOne scheduling note: I have an overnight in Lowry those middle nights, so your visits would land closer to late morning than first thing. If Odie's pill needs to be early, let me know and I'll work it out.\n\nAnd yes. I always do a free 20-minute meet and greet before a first booking, mostly so the cats can decide about me. I have openings next week if you want to grab one.\n\nMaddy, Blue Spruce Pet Care",
          brief:"Hi Dana,\n\nNov 25–30 is available. One daily visit for two cats including Odie's thyroid pill: $240 total ($27/visit, +$8 second cat, holiday rate on the 26th and 27th).\n\nVisits would be late morning those days. I have an overnight booked nearby.\n\nFree 20-minute meet and greet before the first booking. Openings next week.\n\nMaddy, Blue Spruce Pet Care"
        }
      },
      i2: {
        from:"Marcus Ellery", via:"Text · (720) 555-0173", when:"Today, 7:41 AM", unread:true,
        preview:"any chance you could do a potty break today around 2…",
        raw:"any chance you could do a potty break today around 2? got stuck at a job site in golden and my guy has been in since 6am. i know its short notice",
        extract:[["Service","Mid-day potty break"],["Dates","Today · 1 visit"],["Pets","1 dog, existing client"],["Area","Montclair · core"],["Source","Existing client · text"]],
        flags:[
          { k:"crit", t:"Same-day request", d:"Your 1:00 PM in Central Park and 5:30 PM in Park Hill bracket it. A 2:00 PM in Montclair leaves 22 minutes of slack. Tight but real." },
          { k:"warn", t:"Outside booking window", d:"Same-day requests aren't in the online booking flow by design. This one needs a yes or no from you." }
        ],
        quote:[["1 mid-day potty break @ $20",20]],
        drafts:{
          warm:"Hey Marcus, yes, I can make 2:00 work. I've got Central Park at 1 and Park Hill at 5:30, so I'll be coming through anyway.\n\nI'll text you when I'm there. Don't sweat the short notice.\n\nMaddy",
          brief:"Yes. 2:00 PM works. I'll text when I'm there.\n\nMaddy"
        }
      },
      i3: {
        from:"Tomas Reyes", via:"Website contact form", when:"Yesterday, 6:12 PM", unread:false,
        preview:"Looking for daily walks starting October, we're in Golden…",
        raw:"Looking for daily walks starting October, we're in Golden. Two labs, both good on leash. Weekdays around noon. Let me know rates and availability.",
        extract:[["Service","Neighborhood walk, weekdays"],["Dates","Starting October · recurring"],["Pets","2 dogs, labs, leash-trained"],["Area","Golden · outside service area"],["Source","Website form"]],
        flags:[
          { k:"crit", t:"Outside service area", d:"Golden is ~22 miles from your core area. Not reachable between your existing weekday visits." },
          { k:"ok", t:"Referral opportunity", d:"Worth a warm decline with a name attached. This is how you get referrals back." }
        ],
        quote:[],
        drafts:{
          warm:"Hi Tomas, thanks for reaching out.\n\nI have to pass on this one, and I want to be straight about why: Golden is about 22 miles from where I work, and a noon slot there would mean cancelling on clients I already have on the east side. You'd get a sitter who's always watching the clock, which isn't what you're paying for.\n\nWhat I'd do instead: post in the Golden neighborhood groups and ask specifically for someone who already walks on your street. Two easy labs at a standing noon slot is a good gig. Somebody local will want it.\n\nIf you ever move east, I'd be glad to help.\n\nMaddy, Blue Spruce Pet Care",
          brief:"Hi Tomas,\n\nGolden is outside my service area. About 22 miles from where I work weekdays, so I can't hold a reliable noon slot there.\n\nI'd try the Golden neighborhood groups and ask for someone who already walks on your street. Two easy labs at a standing time is a good gig.\n\nMaddy, Blue Spruce Pet Care"
        }
      }
    }
  }
};

/* ============================================================
   2 — HOME SERVICES (house cleaning)
   ============================================================ */
const CLEAN = {
  id: "clean",
  label: "Home services",
  switcherSub: "Cleaners, handymen, landscapers",
  brand: {
    name: "Sagebrush Cleaning Co.", short: "Sagebrush", mark: "◈",
    domain: "sagebrushcleaning.co", owner: "Renata", phone: "(303) 555-0119",
    cancel: "24 hours",
    firstStep: "Free walk-through before the first clean, in person or by video."
  },
  area: {
    core: ["Aurora", "Central Park", "Lowry", "Montclair", "Hale", "Mayfair"],
    edge: ["Green Valley Ranch", "Littleton", "Arvada"],
    fee: 10,
    copy: "Two crews, one side of town. Keeping the routes tight is why we can hold a two-hour arrival window instead of \"sometime Tuesday.\""
  },
  services: [
    { id:"std2", name:"Standard clean · 2 bed", dur:"~2.5 hr", price:145, unit:"visit", blurb:"Kitchen, baths, floors, dusting, trash. The maintenance clean that keeps a place from sliding." },
    { id:"std3", name:"Standard clean · 3 bed", dur:"~3.5 hr", price:175, unit:"visit", blurb:"Same scope, more square footage. Priced by bedrooms and baths, not by guesswork." },
    { id:"deep", name:"Deep clean", dur:"~5 hr", price:310, unit:"visit", blurb:"Required for the first visit. Baseboards, door frames, inside cabinets, grout, behind what moves." },
    { id:"moveout", name:"Move-out clean", dur:"~6 hr", price:395, unit:"job", blurb:"Empty-house scope, written to a landlord's checklist. Photos of every room when we leave." },
    { id:"office", name:"Small office", dur:"~2 hr", price:130, unit:"visit", blurb:"After-hours, keyed entry, alarm codes on file. Invoiced monthly for the business." }
  ],
  addons: [
    { name:"Inside the fridge", price:35, per:"visit" },
    { name:"Inside the oven", price:35, per:"visit" },
    { name:"Interior windows", price:60, per:"visit" },
    { name:"Laundry, wash & fold", price:25, per:"visit" }
  ],
  addonNote: "Recurring clients: 12% off every visit after the first deep clean.",
  hero: {
    eyebrow: "Aurora & East Denver",
    h: "The same two people, every other Thursday, in a two-hour window.",
    lede: "House and small-office cleaning on the east side. We show up when we said, we use your products if you want us to, and you get photos of every room before we lock up.",
    cta1: "Get a price in 60 seconds", cta2: "See what's included",
    trust: ["Insured & bonded", "Same crew every visit", "Background checked", "Fragrance-free on request"]
  },
  stepsTitle: "How a first clean actually goes",
  steps: [
    { n:"FIRST", h:"Walk-through", p:"Free, 20 minutes, in person or over video. We count rooms, look at floors, and find out what you actually care about." },
    { n:"THEN", h:"Property profile", p:"Access, alarm code, parking, pets on site, your products vs. ours, and the skip list: the desk nobody touches." },
    { n:"EVERY VISIT", h:"Room-by-room report", p:"What got done, photos, and anything we found: a slow drain, a cracked outlet cover, a leak under the sink." },
    { n:"MONTHLY", h:"One invoice", p:"Every visit and add-on itemized, recurring discount applied. Card or ACH." }
  ],
  areaTitle: "East side only, and that's the point",
  quote: {
    text: "They found a leak under the kitchen sink on the second visit, photographed it, and texted me before it got into the cabinet floor. That one text paid for six months of cleanings.",
    cite: "Angela T. · Lowry · every-other-week since 2023"
  },
  faq: [
    ["Do I need to be home?", "No, and most clients aren't. Access goes on the property profile: lockbox, garage code, or a key we hold, tagged with a code and never your address. Alarm disarm instructions live there too."],
    ["What about my pets?", "Tell us on the profile. Dogs that need crating, cats that bolt for the door, the parrot that mimics the vacuum. All of it goes in writing so a new crew member isn't guessing."],
    ["Do you bring your own supplies?", "Yes, unless you'd rather we didn't. Plenty of clients want their own hardwood cleaner or a fragrance-free product used. Note it on the profile and that's what we use."],
    ["What's the cancellation policy?", "24 hours, no charge. Inside that we bill half, because the crew's day is already built around you. Lockouts are billed as a full visit."]
  ],
  book: {
    title: "Get a quote",
    who: "Angela T. · returning client",
    step2: "Add anything?",
    subjects: [
      { id:"base", name:"Standard scope", sub:"Kitchen, baths, floors, dusting", fee:0, mode:"perVisit" },
      { id:"fridge", name:"Inside the fridge", sub:"+$35 per visit", fee:35, mode:"perVisit" },
      { id:"oven", name:"Inside the oven", sub:"+$35 per visit", fee:35, mode:"perVisit" },
      { id:"windows", name:"Interior windows", sub:"+$60 per visit", fee:60, mode:"perVisit" }
    ],
    subjectNote: "Your property profile is on file: 3 bed / 2 bath, 1,840 sq ft, hardwood downstairs, fragrance-free products only.",
    addLabel: "+ Something else",
    step3: "How often?",
    freq: [
      { id:"once", label:"One-time", visits:1 },
      { id:"biweekly", label:"Every 2 weeks", visits:6, discount:0.12, discountLabel:"Recurring discount, 12%" },
      { id:"monthly", label:"Every 4 weeks", visits:3, discount:0.08, discountLabel:"Recurring discount, 8%" }
    ],
    surcharge: { label:"Need it this week", fee:45, count:1,
      note:"Rush jobs get slotted around the standing routes, so they cost $45 once. If it can wait a week, it doesn't." },
    fields: [["First visit","Sep 11, 2026"],["Arrival window","9:00 AM – 11:00 AM"],["Through","Nov 20, 2026"]],
    noteLabel: "Anything different this time?",
    noteValue: "The guest room is finally cleared out so it can go back in rotation. Also please skip my husband's desk in the front room entirely. He reorganized it and I'll never hear the end of it.",
    billNote: "invoiced monthly, nothing charged up front"
  },
  portal: {
    who: "Angela T. · signed in",
    tabs: [["visits","Cleanings"],["subject","My property"],["invoices","Invoices"]],
    nextLabel: "Next cleaning", nextValue: "Thu Sep 11, 9–11 AM<br>Standard clean · Renata & Josie",
    upcomingTag: "Every other Thursday",
    upcoming: [
      { d:"Thu Sep 11", t:"9–11 AM", what:"Standard clean · 3 bed", sub:"Renata & Josie · confirmed" },
      { d:"Thu Sep 25", t:"9–11 AM", what:"Standard clean · 3 bed", sub:"Recurring · every 2 weeks" },
      { d:"Thu Oct 9", t:"9–11 AM", what:"Standard clean + inside fridge", sub:"Add-on requested Aug 30" },
      { d:"Thu Oct 23", t:"9–11 AM", what:"Standard clean · 3 bed", sub:"Recurring · every 2 weeks" }
    ],
    historyHint: "Tap a cleaning to see the room report and photos",
    history: [
      { d:"Aug 28", t:"9:12 AM", what:"Standard clean · 3 bed", snip:"All rooms. Found the guest bath faucet dripping. Photo attached." },
      { d:"Aug 14", t:"9:04 AM", what:"Standard clean + windows", snip:"Interior windows downstairs. Skipped the office per your note." },
      { d:"Jul 31", t:"9:20 AM", what:"Standard clean · 3 bed", snip:"Ran 30 min long. The grill got away from somebody. No extra charge." }
    ],
    report: {
      time:"9:12 AM", label:"Room report",
      checks:[["Kitchen",true],["Baths ×2",true],["Bedrooms ×3",true],["Floors",true],["Office",false]],
      note:"Everything on the standard scope, plus we got the range hood filter since it was overdue. Skipped the office per your standing note. One thing to look at: the guest bath faucet is dripping steadily, maybe a drip every two seconds. Photographed it, it's not urgent but it will get worse."
    },
    profile: {
      title:"1400 block, Kearney St", sub:"3 bed · 2 bath · 1,840 sq ft · Lowry", badge:"Profile complete",
      rows:[["Access","Garage keypad 5-5-8-1, then the interior door is unlocked. Park in the alley. No permit needed."],
            ["Alarm","<b>Disarm code 2094 at the kitchen panel within 45 seconds. Re-arm on the way out.</b>"],
            ["Pets on site","Beagle, Gus. Crated in the mudroom, do not let out. He will try."]],
      rows2:[["Products","Client's own hardwood cleaner under the sink. Fragrance-free everywhere else."],
             ["Supplies here","Vacuum in the hall closet, second floor"],
             ["Parking","Alley behind the house"],
             ["Crew","Renata & Josie · same pair since Mar 2024"]],
      listTitle:"Standing notes",
      list:["Do not touch the desk in the front room. Ever.",
            "Guest room back in rotation as of September",
            "Hardwood downstairs. No wet mop, damp only",
            "Text on arrival, she works from home Thursdays"],
      ok:["Alley parking","Crew has key code","Photos in report"],
      no:["Scented products","Wet-mopping hardwood","The front-room desk"],
      addLabel:"Add a property"
    },
    invoices: [
      { id:"SG-0812", per:"August", count:"2 cleanings", amt:308, status:"Paid", when:"paid Sep 3" },
      { id:"SG-0904", per:"September", count:"2 cleanings", amt:343, status:"Open", when:"due Oct 5" },
      { id:"SG-0711", per:"July", count:"3 cleanings", amt:462, status:"Paid", when:"paid Aug 4" }
    ],
    invoiceDetail: {
      id:"SG-0904", per:"September · 2 cleanings",
      lines:[["2 × Standard clean, 3 bed @ $175",350],["1 × Inside the fridge",35],["Recurring discount, 12%",-46],["Range hood filter (no charge)",0]],
      total:339, dueLabel:"Due Oct 5",
      note:"Card or ACH. We invoice after the work, never before."
    }
  },
  ops: {
    who: "Renata · crew lead",
    url: "board",
    dateLabel: "Thursday, September 11",
    title: "Today's jobs",
    badge: "Running 12 min behind",
    stat: ["Thu Sep 11", "<b>4 jobs · 2 done</b><br>18.1 mi · ~41 min driving"],
    weekTitle: "This week", week:[0,5,4,5,6,4,2], weekToday:4, weekNote:"26 jobs booked",
    nav: ["Board","Schedule","Properties","Invoicing"],
    navBadge: ["Requests", 3],
    stops: [
      { t:"8:00 AM", win:"8:00–10:00", title:"Verbena St · Standard, 2 bed", sub:"Central Park · Renata & Josie", status:"done", drive:null,
        note:"In and out clean. Owner left a note asking about the baseboards. Quoted her the add-on, she said next time." },
      { t:"10:30 AM", win:"10:30–12:30", title:"Kearney St · Standard, 3 bed", sub:"Lowry · Renata & Josie", status:"done", drive:"11 min · 3.8 mi",
        note:"Guest bath faucet dripping, photographed for the report. Got the range hood filter, no charge. Gus stayed crated." },
      { t:"1:15 PM", win:"1:15–3:15", title:"Syracuse St · Deep clean, first visit", sub:"Montclair · Renata & Josie", status:"next", drive:"14 min · 4.9 mi",
        alert:"<b>First visit, no profile yet.</b> Walk-through notes: two cats (one hides in the basement), no alarm, key under the planter. Ask about products before you start." },
      { t:"4:00 PM", win:"4:00–6:00", title:"Colfax office suite 210 · Small office", sub:"Mayfair · Renata solo", status:"upcoming", drive:"9 min · 2.6 mi" }
    ],
    composer: {
      eyebrow:"Up next · 1:15 PM", title:"Job report: Syracuse St", meta:"Montclair · deep clean, first visit",
      togglesLabel:"Rooms completed",
      toggles:[["kitchen","Kitchen",true],["baths","Baths ×2",true],["beds","Bedrooms ×3",true],["floors","Floors",true],["base","Baseboards",false]],
      warnKey:"base", warn:"<b>Baseboards are in the deep-clean scope.</b> Leaving this unchecked will show as incomplete on the client's report.",
      noteLabel:"Note to the client",
      noteValue:"First deep clean done. Two things worth knowing: the grout in the hall bath is stained but not dirty. It won't come lighter without a re-seal, which we don't do. And the dryer vent behind the machine is packed solid; that's a fire risk and worth a call to somebody who does vents.",
      sendLabel:"Send report to client", sentLabel:"Report sent",
      sent:"<b>Sent at 3:22 PM.</b> The client got a text with room photos. The job is now billable and lands on the September invoice.",
      extra:["Add photos","Flag for follow-up"],
      sidebarTitle:"Property at a glance",
      sidebar:[["Access","<b>Key under the planter, left of the door. New profile. Confirm they want that recorded.</b>"],
               ["Alarm","None on site"],
               ["Pets","2 cats, one hides in the basement. Do not go looking."],
               ["Products","Unknown. Ask before starting"]],
      noTitle:"Do not", no:["Re-seal grout","Move the piano","Open the basement door"]
    }
  },
  ai: {
    inboxNote: "Nothing sends on its own. Every quote waits for you.",
    inquiries: {
      i1: {
        from:"Priya Raghavan", via:"Website contact form", when:"Today, 8:22 AM", unread:true,
        preview:"hi we need a cleaning before my in-laws get here for…",
        raw:"hi we need a cleaning before my in-laws get here for thanksgiving, 3 bed 2 bath in park hill. it's been a while so probably needs the works. also can you do inside the fridge and the oven? whats the damage",
        extract:[["Service","Deep clean (first visit)"],["Property","3 bed / 2 bath · Park Hill"],["Add-ons","Inside fridge, inside oven"],["Timing","Before Nov 26 · one-time"],["Source","Website form"]],
        flags:[
          { k:"crit", t:"Thanksgiving week is full", d:"Nov 24–26 has no crew capacity. Nov 21 has a 1:15 PM opening and Nov 20 is wide open." },
          { k:"warn", t:"First visit needs the deep clean", d:"\"It's been a while\" plus no prior visits. Deep clean at $310, not the $175 standard. Say so up front so the number isn't a surprise." },
          { k:"ok", t:"In your core area", d:"Park Hill · no travel fee." }
        ],
        quote:[["Deep clean, 3 bed / 2 bath",310],["Inside the fridge",35],["Inside the oven",35]],
        drafts:{
          warm:"Hi Priya, happy to help, and good instinct getting ahead of it.\n\nFor a 3 bed / 2 bath that hasn't been done in a while, that's a deep clean rather than a standard one: baseboards, door frames, inside the cabinets, grout, behind what moves. With the fridge and the oven added, it comes to $380.\n\nThe honest scheduling news: Thanksgiving week itself is full. I have Thursday Nov 20 wide open, or Friday Nov 21 at 1:15. Either one gives you a few days of buffer, which is better anyway. A deep clean stirs up a lot and you don't want that happening the morning they arrive.\n\nWant me to hold the 20th?\n\nRenata, Sagebrush Cleaning Co.",
          brief:"Hi Priya,\n\nFor 3 bed / 2 bath that's overdue, that's a deep clean ($310) rather than a standard. With the fridge and oven: $380 total.\n\nThanksgiving week is full. Thu Nov 20 is open, or Fri Nov 21 at 1:15.\n\nWant me to hold one?\n\nRenata, Sagebrush Cleaning Co."
        }
      },
      i2: {
        from:"Dev Okonkwo", via:"Text · (720) 555-0188", when:"Today, 6:55 AM", unread:true,
        preview:"hey renata, tenant moved out of the syracuse unit…",
        raw:"hey renata, tenant moved out of the syracuse unit yesterday and it's rough. carpet's staying but everything else needs to be turn-ready by monday for the walkthrough. can you get in there friday? 2 bed 1 bath, empty.",
        extract:[["Service","Move-out clean"],["Property","2 bed / 1 bath · empty · Montclair"],["Timing","Friday · hard deadline Monday"],["Client","Existing · property manager, 4 units"],["Source","Existing client · text"]],
        flags:[
          { k:"warn", t:"Friday is booked, Saturday is open", d:"Friday has two jobs and a 6-hour move-out won't fit. Saturday 9 AM is free and still clears the Monday walkthrough." },
          { k:"ok", t:"Repeat client, no walk-through needed", d:"Fourth unit from Dev this year. His units are all the same layout. You already know the scope." },
          { k:"ok", t:"Carpet excluded", d:"He said carpet's staying, which means no carpet cleaning sub. Confirm in writing so it's not assumed later." }
        ],
        quote:[["Move-out clean, 2 bed / 1 bath",395]],
        drafts:{
          warm:"Dev, Friday's already got two jobs on it and a move-out is a six-hour day, so I can't do it justice. Saturday 9 AM I can, and that still gives you all of Sunday before the walkthrough.\n\n$395, same as the last one. Carpet excluded since you said it's staying. I'll note that on the invoice so there's no confusion later.\n\nSay the word and it's on the board.\n\nRenata",
          brief:"Friday's full. A move-out is a six-hour day. Saturday 9 AM works and still clears Monday.\n\n$395, carpet excluded per your note.\n\nSay the word.\n\nRenata"
        }
      },
      i3: {
        from:"Hannah Kessler", via:"Website contact form", when:"Yesterday, 8:40 PM", unread:false,
        preview:"Looking for weekly cleaning for a 5,000 sq ft home in…",
        raw:"Looking for weekly cleaning for a 5,000 sq ft home in Cherry Hills. Five bedrooms, six baths, plus a pool house. We currently have a service but they're inconsistent. Would need a team of at least three. What would that run?",
        extract:[["Service","Weekly recurring · large residence"],["Property","5,000 sq ft · 5 bed / 6 bath + pool house"],["Crew","Needs 3+ people"],["Area","Cherry Hills · outside service area"],["Source","Website form"]],
        flags:[
          { k:"crit", t:"Outside service area", d:"Cherry Hills is ~14 miles off your route spine. A weekly slot there would break two existing east-side routes." },
          { k:"crit", t:"Beyond current crew size", d:"You run two-person crews. A 5,000 sq ft weekly needs three, which is a hire, not a booking." },
          { k:"ok", t:"Worth a real answer anyway", d:"This is the kind of client you'd want if you ever staff up. Decline warm and keep the door open." }
        ],
        quote:[],
        drafts:{
          warm:"Hi Hannah, thanks for reaching out, and I'm going to be straight with you rather than quote something I can't deliver well.\n\nTwo problems on my end. Cherry Hills is about fourteen miles off the routes I run, and a weekly slot there would mean breaking commitments to east-side clients I already have. And a house that size needs a three-person crew. I run pairs. Putting two people on 5,000 square feet weekly is exactly how you end up with the inconsistency you're already dealing with.\n\nWhat I'd look for instead: a company that staffs three-person crews and already works Cherry Hills. Ask them specifically how many people come and whether it's the same ones each week. That second question is usually the whole answer.\n\nIf I ever staff up to that size, I'll reach out.\n\nRenata, Sagebrush Cleaning Co.",
          brief:"Hi Hannah,\n\nI have to pass. Cherry Hills is about 14 miles off my routes, and 5,000 sq ft weekly needs a three-person crew. I run pairs. Putting two people on that is how you get the inconsistency you're already dealing with.\n\nLook for a company that staffs three-person crews in your area, and ask whether it's the same people every week.\n\nRenata, Sagebrush Cleaning Co."
        }
      }
    }
  }
};

/* ============================================================
   3 — WELLNESS (massage therapy)
   ============================================================ */
const BODY = {
  id: "body",
  label: "Wellness",
  switcherSub: "Massage, stylists, practitioners",
  brand: {
    name: "Cedar & Salt Bodywork", short: "Cedar & Salt", mark: "❖",
    domain: "cedarandsalt.studio", owner: "Iris", phone: "(303) 555-0177",
    cancel: "24 hours",
    firstStep: "First-time clients fill out an intake form and waiver before the session, not in the waiting room."
  },
  area: {
    core: ["Studio · Suite 210", "Colfax & Krameria", "Street parking", "Bus 15 stops at the door"],
    edge: ["Outcall · Park Hill", "Outcall · Congress Park"],
    fee: 25,
    copy: "One room, one practitioner, no front desk and no upsell. The studio is a shared suite on Colfax with its own entrance. You won't walk through a lobby in a robe."
  },
  services: [
    { id:"s60", name:"Therapeutic · 60 min", dur:"60 min", price:110, unit:"session", blurb:"The standard session. Broad work with focused time on wherever the trouble is." },
    { id:"s90", name:"Therapeutic · 90 min", dur:"90 min", price:150, unit:"session", blurb:"What most people want and few book. Enough time to work slowly and still cover ground." },
    { id:"s30", name:"Focused · 30 min", dur:"30 min", price:65, unit:"session", blurb:"Neck, shoulders, and jaw. For desk weeks. Fits in a lunch hour." },
    { id:"deep90", name:"Deep tissue · 90 min", dur:"90 min", price:160, unit:"session", blurb:"Slow, specific, and not the same as \"hard.\" We talk about pressure before and during." },
    { id:"pre60", name:"Prenatal · 60 min", dur:"60 min", price:115, unit:"session", blurb:"Side-lying with bolstering. Second and third trimester, with your provider's okay." }
  ],
  addons: [
    { name:"Add 15 minutes", price:28, per:"session" },
    { name:"Hot stones", price:20, per:"session" },
    { name:"Cupping", price:15, per:"session" },
    { name:"Outcall within 5 miles", price:25, per:"session" }
  ],
  addonNote: "Two sliding-scale slots open every week. Ask. There's no form and no explaining yourself.",
  hero: {
    eyebrow: "Colfax & Krameria · Suite 210",
    h: "Ninety minutes, one practitioner, and nobody trying to sell you a package on the way out.",
    lede: "Therapeutic and deep tissue bodywork in a single-room studio on east Colfax. You book the time, you tell me what hurts, and we spend the whole hour on it.",
    cta1: "See this week's openings", cta2: "Rates & sessions",
    trust: ["Licensed in Colorado", "10 years in practice", "Same practitioner every time", "Fragrance-free studio"]
  },
  stepsTitle: "What booking here is actually like",
  steps: [
    { n:"BEFORE", h:"Intake, at home", p:"A short form and a waiver, sent by link. Fill it out on your couch instead of on a clipboard five minutes before your session." },
    { n:"THE SESSION", h:"Five minutes of talking first", p:"What's going on, what you've tried, what pressure works. Then we get to it and I stop narrating." },
    { n:"AFTER", h:"A note you can actually use", p:"What we worked on and one or two things to do between sessions. No treatment plan you didn't ask for." },
    { n:"ONGOING", h:"Rebook or don't", p:"I'll tell you honestly whether coming back in two weeks would help. Sometimes the answer is no." }
  ],
  areaTitle: "One room on east Colfax",
  quote: {
    text: "I've been to places where the ninety minutes includes changing, chatting, and a hard sell for a membership. Here ninety minutes is ninety minutes on the table. It sounds small and it isn't.",
    cite: "Nadia B. · client since 2022"
  },
  faq: [
    ["What if I've never had a massage before?", "Say so when you book and I'll leave extra time. Nothing about the session requires you to already know what you want. \"My whole back is unhappy\" is a complete answer."],
    ["Do you take insurance?", "No. I'm not set up to bill insurance and I'd rather be honest about that than have you fight a claim. HSA and FSA cards work, and I can give you an itemized receipt."],
    ["What's the cancellation policy?", "24 hours. Inside that it's the full session fee, because the room and the hour are held for you and it's usually too late to fill. Life happens. Tell me and we'll figure it out."],
    ["Is this medical treatment?", "No. I'm a licensed massage therapist, not a physician or a physical therapist. If something looks like it needs a diagnosis, I'll say so and tell you to go see somebody who can give you one."]
  ],
  book: {
    title: "Book a session",
    who: "Nadia B. · returning client",
    step2: "Add anything?",
    subjects: [
      { id:"base", name:"Standard session", sub:"Table, bolsters, unscented oil", fee:0, mode:"perVisit" },
      { id:"extra", name:"Add 15 minutes", sub:"+$28 per session", fee:28, mode:"perVisit" },
      { id:"stones", name:"Hot stones", sub:"+$20 per session", fee:20, mode:"perVisit" },
      { id:"cupping", name:"Cupping", sub:"+$15 per session", fee:15, mode:"perVisit" }
    ],
    subjectNote: "Your file is on record: medium-firm pressure, focus on left shoulder and upper back, avoid the right knee, face cradle low, no music.",
    addLabel: "+ Ask about something",
    step3: "One session or a package?",
    freq: [
      { id:"once", label:"Single session", visits:1 },
      { id:"pack5", label:"5-session package", visits:5, discount:0.09, discountLabel:"Package rate, 9% off" }
    ],
    surcharge: { label:"Evening or weekend", fee:15, count:1,
      note:"Evenings after 6 and Saturdays run +$15. Those are the slots everyone wants, and the surcharge is what keeps them available instead of booked out three weeks." },
    fields: [["Preferred date","Sep 11, 2026"],["Time","2:00 PM"],["Practitioner","Iris (only)"]],
    noteLabel: "What's going on?",
    noteValue: "Lower back has been rough since we moved apartments two weekends ago. A lot of stairs with boxes. Left shoulder is the usual. Nothing sharp, just tired and tight everywhere.",
    billNote: "paid at the session, or on the package"
  },
  portal: {
    who: "Nadia B. · signed in",
    tabs: [["visits","Appointments"],["subject","My file"],["invoices","Packages & receipts"]],
    nextLabel: "Next session", nextValue: "Thu Sep 11, 2:00 PM<br>Therapeutic · 90 min",
    upcomingTag: "3 sessions left on your package",
    upcoming: [
      { d:"Thu Sep 11", t:"2:00 PM", what:"Therapeutic · 90 min", sub:"Confirmed · uses package session 3 of 5" },
      { d:"Thu Sep 25", t:"2:00 PM", what:"Therapeutic · 90 min", sub:"Held · confirm by Sep 22" },
      { d:"Thu Oct 9", t:"2:00 PM", what:"Therapeutic · 90 min", sub:"Held · final package session" }
    ],
    historyHint: "Tap a session to see what we worked on",
    history: [
      { d:"Aug 28", t:"2:00 PM", what:"Therapeutic · 90 min", snip:"Left shoulder and upper back. Homework: doorway stretch, twice a day." },
      { d:"Aug 14", t:"2:00 PM", what:"Deep tissue · 90 min", snip:"Slower than usual through the hips. Pressure dialed back a notch." },
      { d:"Jul 24", t:"6:00 PM", what:"Therapeutic · 60 min", snip:"Evening slot. Neck and jaw, mostly. You'd been grinding again." }
    ],
    report: {
      time:"2:00 PM", label:"Session summary",
      checks:[["Left shoulder",true],["Upper back",true],["Neck",true],["Hips",false],["Right knee",false]],
      note:"Most of the ninety went into the left shoulder and the upper back around the scapula, which was noticeably better than two weeks ago. Neck got the last fifteen. We left the hips alone this time at your request. Homework is the same doorway stretch, twice a day. And if the shoulder starts waking you up at night again, tell me, because that's a different conversation.",
      privacy: "Intake answers and health history stay on the practitioner's side. This portal only shows what was worked on."
    },
    profile: {
      title:"Nadia B.", sub:"Client since 2022 · 31 sessions · intake current", badge:"Waiver on file",
      rows:[["Pressure","Medium-firm. Will not ask you to ease up. Check in around the shoulder blade."],
            ["Focus areas","<b>Left shoulder, upper back, neck. Jaw when she's been grinding.</b>"],
            ["Avoid","Right knee. Old surgery, no direct work."]],
      rows2:[["Table setup","Face cradle low, bolster under ankles, extra blanket"],
             ["Room","No music. Lights at half."],
             ["Products","Unscented jojoba only. Reacts to lavender"],
             ["Intake","Updated Jun 2026 · waiver signed"]],
      listTitle:"Notes for next time",
      list:["Ask how the move went. She was carrying boxes up three flights",
            "Shoulder was better on Aug 28 than Aug 14. Keep the doorway stretch homework.",
            "Prefers the 2pm Thursday slot and will take it standing if offered",
            "Does not want to be upsold. Do not mention packages unless she asks."],
      ok:["Cupping","Hot stones","Silence"],
      no:["Right knee","Scented oil","Package pitches"],
      addLabel:"Update my intake",
      privacy: "Practitioner view. Health history and intake answers never appear in the client's portal."
    },
    invoices: [
      { id:"CS-0455", per:"5-session package", count:"2 of 5 used", amt:500, status:"Paid", when:"paid Aug 6" },
      { id:"CS-0501", per:"Sep 11 session", count:"90 min", amt:0, status:"Open", when:"covered by package" },
      { id:"CS-0398", per:"Jul 24 session", count:"60 min + evening", amt:125, status:"Paid", when:"paid Jul 24" }
    ],
    invoiceDetail: {
      id:"CS-0455", per:"5-session package · purchased Aug 6",
      lines:[["5 × Therapeutic 90 min @ $150",750],["Package rate, 9% off",-68],["Sessions used (Aug 14, Aug 28)",-273],["Remaining balance, 3 sessions",409]],
      total:409, dueLabel:"Value remaining",
      note:"Packages don't expire and are refundable for the unused portion. Itemized receipts for HSA/FSA on request."
    }
  },
  ops: {
    who: "Iris · practitioner",
    url: "day",
    dateLabel: "Thursday, September 11",
    title: "Today's book",
    badge: "Gap at 3:30. Waitlist has 4",
    stat: ["Thu Sep 11", "<b>4 sessions · 2 done</b><br>5.5 hrs on the table · 1 gap"],
    weekTitle: "This week", week:[0,4,5,4,5,3,2], weekToday:4, weekNote:"23 sessions · 81% booked",
    nav: ["Day","Calendar","Clients","Packages"],
    navBadge: ["Requests", 3],
    stops: [
      { t:"9:00 AM", win:"9:00–10:30", title:"Marcus V. · Deep tissue, 90 min", sub:"Room reset by 10:45", status:"done", drive:null,
        note:"Went lighter through the low back than he asked for and told him why. He was fine with it. Rebooked for the 25th." },
      { t:"11:00 AM", win:"11:00–12:00", title:"Joan P. · Focused, 30 min", sub:"Ran to 11:40", status:"done", drive:"20 min turnover",
        note:"Neck and jaw. First session since March. Intake was out of date, she updated it on her phone before we started." },
      { t:"2:00 PM", win:"2:00–3:30", title:"Nadia B. · Therapeutic, 90 min", sub:"Package session 3 of 5", status:"next", drive:"2 hr break",
        alert:"<b>Before she's on the table:</b> Left shoulder and upper back, medium-firm, no direct work on the right knee. Unscented jojoba only. Reacts to lavender. No music, lights at half." },
      { t:"5:30 PM", win:"5:30–6:30", title:"New client · Therapeutic, 60 min", sub:"Evening rate · intake pending", status:"upcoming", drive:"2 hr gap · waitlist" }
    ],
    composer: {
      eyebrow:"Up next · 2:00 PM", title:"Session note: Nadia B.", meta:"Therapeutic · 90 min · package 3 of 5",
      togglesLabel:"Worked on",
      toggles:[["shoulder","Left shoulder",true],["upper","Upper back",true],["neck","Neck",true],["hips","Hips",false],["knee","Right knee",false]],
      warnKey:"knee", warnWhen:"on", warn:"<b>Right knee is on her avoid list.</b> Old surgery, no direct work. Checking this will flag the note for review.",
      noteLabel:"What she'll see in her portal",
      noteValue:"Most of the ninety went into the left shoulder and the upper back around the scapula, which was noticeably better than two weeks ago. Neck got the last fifteen. We left the hips alone this time at your request. Homework is the same doorway stretch, twice a day.",
      sendLabel:"Send summary to Nadia", sentLabel:"Summary sent",
      sent:"<b>Sent at 3:34 PM.</b> Nadia got the summary in her portal. Package session 3 of 5 marked used; two remain.",
      extra:["Private note (not shared)","Flag for follow-up"],
      sidebarTitle:"Client file",
      sidebar:[["Pressure","Medium-firm. Check in around the shoulder blade."],
               ["Avoid","<b>Right knee. Old surgery, no direct work.</b>"],
               ["Setup","Face cradle low, bolster under ankles, no music"],
               ["Products","Unscented jojoba. Reacts to lavender"]],
      noTitle:"Do not", no:["Right knee","Scented oil","Mention packages"]
    }
  },
  ai: {
    inboxNote: "Nothing sends on its own. No draft gives medical advice.",
    inquiries: {
      i1: {
        from:"Elena Marchetti", via:"Website contact form", when:"Today, 7:18 AM", unread:true,
        preview:"Do you have anything this week? My lower back has been…",
        raw:"Do you have anything this week? My lower back has been killing me since we moved apartments. Three flights of stairs with boxes, over and over. It's been about five days. I've never been to you before. Should I get a 60 or a 90?",
        extract:[["Service","Therapeutic · 60 or 90 min"],["Timing","This week · new client"],["Presenting","Lower back, ~5 days, after moving"],["History","No file. First session"],["Source","Website form"]],
        flags:[
          { k:"warn", t:"New client: intake required first", d:"Intake form and waiver must be signed before the session, not in the room. Send the link with the booking confirmation." },
          { k:"ok", t:"Two openings this week", d:"Thu Sep 11 at 3:30 (the gap after Nadia) and Fri Sep 12 at 10:00. Neither carries the evening surcharge." },
          { k:"crit", t:"Draft avoids clinical language", d:"She asked an implicit medical question. The draft recommends a session length and declines to diagnose. That boundary is built into your reply rules, not left to chance." }
        ],
        quote:[["Therapeutic 90 min (recommended)",150],["or Therapeutic 60 min",110]],
        drafts:{
          warm:"Hi Elena, I have two openings this week: Thursday at 3:30 or Friday at 10:00. Either is yours.\n\nOn 60 versus 90: for something that's been going five days and involves everything from your legs up, I'd take the 90. Not because more is always better, but because an hour on a whole tired back turns into a rushed hour, and you'd leave feeling like we almost got there. The 90 is $150, the 60 is $110.\n\nI'll say the obvious thing: I'm a massage therapist, not a doctor, so if anything about this is sharp, shooting down a leg, or getting worse instead of better, see somebody who can actually diagnose it. Assuming it's the ordinary kind of moving-day misery, bodywork is a reasonable place to start.\n\nIf you want one of those slots, I'll send the intake form and waiver. They take about four minutes and I'd rather you do them at home than on a clipboard.\n\nIris, Cedar & Salt Bodywork",
          brief:"Hi Elena,\n\nThursday 3:30 or Friday 10:00. Both open.\n\nI'd take the 90 ($150) over the 60 ($110) for something that's been going five days across your whole back.\n\nOne note: I'm not a physician. If it's sharp, shooting down a leg, or getting worse, see someone who can diagnose it.\n\nSay which slot and I'll send the intake form and waiver to do at home.\n\nIris, Cedar & Salt Bodywork"
        }
      },
      i2: {
        from:"Ray Okada", via:"Text · (720) 555-0164", when:"Today, 6:02 AM", unread:true,
        preview:"gotta cancel today, kid's got a fever. sorry for the…",
        raw:"gotta cancel today, kid's got a fever. sorry for the short notice, i know its inside 24 hours",
        extract:[["Action","Cancellation · today 3:30 PM"],["Notice","~9 hours · inside policy window"],["Client","Existing · 12 sessions, never cancelled"],["Slot","3:30 PM Thursday · high demand"],["Source","Existing client · text"]],
        flags:[
          { k:"warn", t:"Inside the 24-hour window", d:"Policy is the full session fee. He's had 12 sessions and has never cancelled once. This is the case the policy wasn't written for." },
          { k:"ok", t:"Waitlist can fill it", d:"Four people are on the waitlist for a Thursday afternoon. If one takes it, there's no loss and no reason to charge." },
          { k:"ok", t:"Rebooking suggestion", d:"His usual cadence is every three weeks. Sep 25 at 3:30 is open." }
        ],
        quote:[],
        drafts:{
          warm:"No apology needed. Sick kid beats a massage every time.\n\nI'm not charging you. You've been coming for two years and never once done this, which is exactly why I don't run the policy like a parking meter. I'll offer the slot to the waitlist and it'll probably go.\n\nSep 25 at 3:30 is open if you want to just slide over to that. Hope the kid's better fast.\n\nIris",
          brief:"No charge. You've never cancelled once in two years. I'll offer the slot to the waitlist.\n\nSep 25 at 3:30 is open if you want to move to that.\n\nHope the kid's better fast.\n\nIris"
        }
      },
      i3: {
        from:"Preston Vaile", via:"Website contact form", when:"Yesterday, 9:31 PM", unread:false,
        preview:"I run a wellness collective and I'm building a roster of…",
        raw:"I run a wellness collective and I'm building a roster of practitioners for corporate on-site events. Chair massage, 10-15 min per person, high volume. We'd book you for 4-hour blocks and pay $45/hour. Interested? We have events most weekends.",
        extract:[["Service","Chair massage · on-site events"],["Terms","4-hour blocks · $45/hr offered"],["Timing","Most weekends"],["Rate check","$45/hr vs. your $100–110/hr effective"],["Source","Website form"]],
        flags:[
          { k:"crit", t:"Rate is less than half your floor", d:"$45/hr against an effective $100–110/hr on the table. Four hours there costs you a Saturday that reliably books at the evening rate." },
          { k:"warn", t:"Weekends are your premium slots", d:"Saturdays carry the +$15 surcharge specifically because they're scarce. Selling them at $45 is the opposite trade." },
          { k:"ok", t:"Not a bad-faith ask", d:"Chair massage genuinely does pay less than table work. A clean decline with your real number is the right reply." }
        ],
        quote:[],
        drafts:{
          warm:"Hi Preston, thanks for thinking of me. I'm going to pass at that rate, but I'll tell you my actual number in case it's useful.\n\nChair work legitimately pays less than table work, so I'm not offended by $45. But Saturdays are the slots I can reliably fill at $110–150, and a four-hour block at $45 is a $180 day against a $400 one. That math doesn't work no matter how much I like the idea.\n\nIf you ever have weekday events, or if the rate gets to $85–90 an hour for a four-hour minimum plus travel, I'd genuinely look at it. Chair massage is fun and I don't mind doing it. It just has to not cost me a weekend.\n\nIris, Cedar & Salt Bodywork",
          brief:"Hi Preston,\n\nPassing at $45/hr. Saturdays fill reliably at $110–150 here, so a four-hour block at $45 is a $180 day against a $400 one.\n\nWeekday events, or $85–90/hr with a four-hour minimum plus travel, and I'd look at it seriously.\n\nIris, Cedar & Salt Bodywork"
        }
      }
    }
  }
};

const VERTICALS = [PET, CLEAN, BODY];

/* Demo dates: the sample data was written around the week of Sep 8, 2026.
   Shift every date in it by a whole number of weeks so the demo always shows
   the current week instead of a frozen September. Weekday names are recomputed
   from the shifted date, so labels stay internally consistent. */
(function rebaseDemoDates() {
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const MON = {}; MONTHS.forEach((m, i) => { MON[m] = i; MON[m.slice(0, 3)] = i; }); MON["Sept"] = 8;
  const WD = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], WDF = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const DAY = 864e5, anchor = Date.UTC(2026, 8, 8), n = new Date();
  const today = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
  const shift = Math.round((today - anchor) / (7 * DAY)) * 7;
  if (!shift) return;
  const a2 = new Date(anchor + shift * DAY);
  const monthShift = (a2.getUTCFullYear() * 12 + a2.getUTCMonth()) - (2026 * 12 + 8);
  const MALT = "January|February|March|April|May|June|July|August|September|Sept|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec";
  const dateRe = new RegExp("\\b((?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\\s+)?(" + MALT + ")\\s+(\\d{1,2})(?:\\s*,\\s*(\\d{4}))?(\\s*[-–]\\s*(\\d{1,2})\\b)?", "g");
  const monOnlyRe = new RegExp("\\b(" + MALT + ")\\b(?!\\s+\\d)", "g");
  function fmtDate(dt, mon, d, y) {
    const full = mon.length > 3 && mon !== "Sept";
    let day = String(dt.getUTCDate());
    if (d && d[0] === "0" && day.length === 1) day = "0" + day;
    return (full ? MONTHS[dt.getUTCMonth()] : MONTHS[dt.getUTCMonth()].slice(0, 3)) + " " + day + (y ? ", " + dt.getUTCFullYear() : "");
  }
  function shiftStr(s) {
    s = s.replace(dateRe, (m, wd, mon, d, y, tail, tailDay) => {
      const start = new Date(Date.UTC(y ? +y : 2026, MON[mon], +d) + shift * DAY);
      const full = mon.length > 3 && mon !== "Sept";
      let out = fmtDate(start, mon, d, y);
      if (wd) { const w = wd.replace(/[,\s]+$/, ""); out = (w.length > 3 ? WDF[start.getUTCDay()] : WD[start.getUTCDay()]) + (w.length > 3 && full ? ", " : " ") + out; }
      if (tail) {
        const end = new Date(start.getTime() + (+tailDay - +d) * DAY);
        if (end.getUTCMonth() === start.getUTCMonth()) { const cut = tail.search(/[0-9]/); out += tail.slice(0, cut) + end.getUTCDate(); }
        else out += " – " + fmtDate(end, mon, null, null);
      }
      return out;
    });
    s = s.replace(monOnlyRe, (m) => {
      const idx2 = ((MON[m] + monthShift) % 12 + 12) % 12;
      return (m.length > 3 && m !== "Sept") ? MONTHS[idx2] : MONTHS[idx2].slice(0, 3);
    });
    return s;
  }
  (function walk(o) {
    if (Array.isArray(o)) { for (let i = 0; i < o.length; i++) { if (typeof o[i] === "string") o[i] = shiftStr(o[i]); else walk(o[i]); } }
    else if (o && typeof o === "object") { for (const k of Object.keys(o)) { if (typeof o[k] === "string") o[k] = shiftStr(o[k]); else walk(o[k]); } }
  })(VERTICALS);
})();

/* ============================================================
   MHWP PRICING PANEL — the close
   ============================================================ */
const PRICING = {
  eyebrow: "What this costs",
  title: "Three ways in, priced by what you actually get",
  lede: "Everything above is one connected system. What changes per client is the content, the rates, and how much of the system you turn on.",
  tiers: [
    { name:"Starter", price:"$900+", when:"You need to exist online, properly",
      time:"About a week",
      includes:["1–3 page site, written for your service area","Your domain, connected and secured properly","Professional email on your own domain","Contact form that reaches you reliably","One round of revisions"],
      not:"No booking flow, no client accounts." },
    { name:"Full Setup", price:"$1,800+", when:"Most small businesses land here", featured:true,
      time:"Two to three weeks",
      includes:["Everything in Starter, up to 5 pages","Domain + hosting setup","Professional email","Booking flow that prices itself","Basic SEO + analytics","One Automated Lead or Triage Flow included","Two revision rounds"],
      not:"Client portal and the operations view are the next tier." },
    { name:"Client System", price:"$3,500+", when:"You're running the business out of texts and a notebook",
      time:"Five to eight weeks",
      includes:["Everything in Full Setup","Client accounts with profiles and history","Report or check-in flow your clients receive","The operations view: your day, your route, your jobs","Invoicing generated from completed work","Checked against your calendar"],
      not:"This is the tier that matches the demo above." }
  ],
  addons: [
    { name:"AI intake add-on", price:"$500 – $1,500", body:"Inbound inquiries parsed against your calendar, your rates, and your service area, with a reply drafted in your voice. It never sends on its own. Priced by how many rules your business actually has. A flat rate table is cheap, holiday tiers and crew capacity are not." },
    { name:"Installable phone app add-on (PWA)", price:"$450+", body:"Turn your website into an app clients can install. Native app-like experience, loads even with no cell signal, install to home screen, works on all devices. Applies to any tier." },
    { name:"Phone app + push add-on", price:"$700+", body:"Everything in the installable phone app, plus push notifications your clients opt into. Send rebooking reminders, schedule openings, and updates straight to their home screens." }
  ],
  care: [
    { name:"Basic care", price:"$115/mo", body:"Site & domain management, light monthly updates, uptime and security checks, email support." },
    { name:"Care + Automation", price:"$275/mo", body:"Everything in Basic care, plus monthly edits, up to 2 hours/mo of hands-on updates & support, Automation maintenance as your rates and policies change, priority response." }
  ],
  terms: [
    ["Payment", "Half up front, the balance in two monthly payments. The site goes live on its quoted timeline either way; the payments run on their own schedule."],
    ["Third-party costs", "Domain, email, and any platform fees are yours and billed to you directly at cost. Never marked up through me. Your site's hosting itself runs on Cloudflare at $0/mo."],
    ["Ownership", "You own the domain, the content, and the code. If you leave, it comes with you. I'll hand off the files and the DNS."],
    ["Founding client rate", "Early clients who let their launch be featured as a case study qualify for a founding rate. Ask when you reach out."]
  ]
};

const EXPLAINER = [
  { h:"It's one system, not five pages",
    p:"The website, the booking flow, the client portal, your day view, and the inquiry inbox all read from the same data. A rate change on your site changes the estimate a customer sees and the quote the AI drafts. Nothing gets out of sync because there's nothing to sync." },
  { h:"Your customers see a real portal",
    p:"Not a PDF emailed after the fact. They log in, see what's scheduled, read the report from the last visit, and pay the invoice. That's the difference a customer feels between you and the competitor with a link-in-bio page." },
  { h:"The operations view is for you",
    p:"Your day, in order, with the thing you need to remember before you walk in the door already on screen. The report you fill out becomes the client's report and the line on their invoice. One entry, three jobs done." }
];

/* ============================================================
   MILE HIGH WEB PLUG — demo renderer
   ------------------------------------------------------------
   Nothing in this file knows what industry it's rendering.
   Everything it draws comes from the objects in data.js.
   That's the whole point of the demo: one system, three businesses.
   ============================================================ */

const SURFACES = [
  ["site", "Website"],
  ["book", "Booking"],
  ["portal", "Client portal"],
  ["ops", "Their day"],
  ["ai", "AI intake"]
];

const SURFACE_TIER = {
  site:   ["Starter · $900+", "The foundation: a fast 1–3 page custom site. Tap the tabs above to watch it add live booking, a client portal, and AI."],
  book:   ["Full Setup · $1,800+", "Adds an interactive booking flow that calculates live estimates automatically, plus up to 5 pages and one Automated Lead or Triage Flow."],
  portal: ["Client System · $3,500+", "Adds client logins for upcoming visits, service reports, and invoices, with zero per-booking platform cut."],
  ops:    ["Client System · $3,500+", "Your operator dashboard, synced live with your client portal, schedule, and visit notes."],
  ai:     ["AI Intake Add-on · $500–$1,500", "Reads inquiries and drafts replies from your rates and policies. Add it to Starter, or get one Automated Lead or Triage Flow included with Full Setup and up."]
};


const state = {
  vert: "pet",
  surface: "site",
  bookStep: 2,
  bookSvc: null,
  bookSubjects: [],
  bookFreq: null,
  surcharge: false,
  portalTab: "visits",
  openVisit: null,
  checkin: {},
  sent: false,
  bookDone: null,
  inq: null,
  tone: "warm"
};

const cur = () => VERTICALS.find(v => v.id === state.vert);
const money = n => (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function resetForVertical() {
  const V = cur();
  state.bookSvc = V.services[Math.min(2, V.services.length - 1)].id;
  state.bookSubjects = [V.book.subjects[0].id];
  state.bookFreq = (V.book.freq[1] || V.book.freq[0]).id;
  state.surcharge = false;
  state.bookStep = 2;
  state.portalTab = "visits";
  state.openVisit = null;
  state.checkin = {};
  V.ops.composer.toggles.forEach(([k, , def]) => { state.checkin[k] = !!def; });
  state.sent = false;
  state.bookDone = null;
  state.inq = Object.keys(V.ai.inquiries)[0];
  state.tone = "warm";
}

/* ---------- shared chrome ---------- */
function frame(url, who, inner) {
  return `<div class="frame">
    <div class="chrome">
      <span class="dots"><i></i><i></i><i></i></span>
      <span class="urlbar">${url}</span>
      <span class="who">${who}</span>
    </div>${inner}
  </div>`;
}

function sideNav(V, items, active, badge, footCards) {
  return `<div class="side">
    <div class="logo" style="font-size:15px;padding:0 6px 4px">
      <span class="mark" style="width:22px;height:22px;font-size:12px" aria-hidden="true">${V.brand.mark}</span>${V.brand.short}
    </div>
    <div class="navlist">${items.map(i =>
      `<button class="navitem ${i[0] === active ? "on" : ""}" ${i[2] || ""}>${i[1]}</button>`).join("")}
      ${badge ? `<button class="navitem">${badge[0]} <span class="pill warn" style="margin-left:4px">${badge[1]}</span></button>` : ""}
    </div>
    ${footCards || ""}
  </div>`;
}

/* ============================================================
   SURFACE 1 — public website
   ============================================================ */
function viewSite() {
  const V = cur(), B = V.brand;
  return frame(B.domain, "Visitor · not signed in", `
  <div class="sitenav">
    <div class="logo"><span class="mark" aria-hidden="true">${B.mark}</span>${B.name}</div>
    <nav><span>Services</span><span>Rates</span><span>Service area</span><span>About</span><span>FAQ</span></nav>
    <span class="btn sm" role="button" tabindex="0" data-goto="book">${V.hero.cta1}</span>
  </div>

  <div class="hero">
    <div>
      <span class="eyebrow">${V.hero.eyebrow}</span>
      <h2>${V.hero.h}</h2>
      <p class="lede">${V.hero.lede}</p>
      <div class="herocta"><span class="btn" role="button" tabindex="0" data-goto="book">${V.hero.cta1}</span><span class="btn ghost" role="button" tabindex="0" data-goto="rates">${V.hero.cta2}</span></div>
      <div class="trustrow">${V.hero.trust.map(t => `<span><b class="tick">✓</b> ${t}</span>`).join("")}</div>
    </div>
    <div class="heroshot"><div class="photo"><span>${B.short}</span></div></div>
  </div>

  <div class="section">
    <span class="eyebrow">Services &amp; rates</span>
    <h3>Straightforward pricing, posted publicly</h3>
    <div class="svcgrid">
      ${V.services.map(s => `<div class="svc">
        <h4>${s.name}</h4>
        <div class="price">${money(s.price)} <small>/ ${s.unit}</small></div>
        <p>${s.blurb}</p>
      </div>`).join("")}
      <div class="svc" style="background:var(--surface-2)">
        <h4>Add-ons</h4>
        <p style="margin-top:2px">${V.addons.map(a => `${a.name} <b>+${money(a.price)}</b> per ${a.per}`).join("<br>")}</p>
        <p class="small" style="margin-top:6px">${V.addonNote}</p>
      </div>
    </div>
  </div>

  <div class="section">
    <span class="eyebrow">How it works</span>
    <h3>${V.stepsTitle}</h3>
    <div class="steps">${V.steps.map(s =>
      `<div class="step"><div class="n">${s.n}</div><h4>${s.h}</h4><p>${s.p}</p></div>`).join("")}</div>
  </div>

  <div class="section">
    <div class="areagrid">
      <div>
        <span class="eyebrow">Service area</span>
        <h3>${V.areaTitle}</h3>
        <p class="muted" style="margin-top:10px;max-width:56ch">${V.area.copy}</p>
        <div class="hoods">
          ${V.area.core.map(h => `<span class="hood core">${h}</span>`).join("")}
          ${V.area.edge.map(h => `<span class="hood">${h} <span class="muted small">+${money(V.area.fee)}</span></span>`).join("")}
        </div>
      </div>
      <div class="quote"><p>“${V.quote.text}”</p><cite>${V.quote.cite}</cite></div>
    </div>
  </div>

  <div class="section">
    <span class="eyebrow">Questions</span>
    <h3>Before you ask</h3>
    <div class="faq">${V.faq.map(([q, a], i) =>
      `<details ${i === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
  </div>

  <div class="sitefoot">
    <div>${B.name} · ${B.phone} · hello@${B.domain}</div>
    <div>Licensed, insured &amp; bonded in Colorado</div>
  </div>`);
}

/* ============================================================
   SURFACE 2 — booking / quote request
   ============================================================ */
function estimate() {
  const V = cur();
  const s = V.services.find(x => x.id === state.bookSvc);
  const f = V.book.freq.find(x => x.id === state.bookFreq);
  const visits = f.visits;
  const unit = visits > 1 ? `${visits} × ` : "";
  const lines = [[`${unit}${s.name} @ ${money(s.price)}`, visits * s.price]];

  V.book.subjects.forEach(sub => {
    if (!state.bookSubjects.includes(sub.id) || !sub.fee) return;
    lines.push([`${sub.name}${visits > 1 ? ` · ${visits} × ${money(sub.fee)}` : ""}`, sub.fee * visits]);
  });

  if (state.surcharge) {
    const sc = V.book.surcharge;
    lines.push([`${sc.label}${sc.count > 1 ? ` · ${sc.count} × ${money(sc.fee)}` : ""}`, sc.fee * sc.count]);
  }

  let total = lines.reduce((a, l) => a + l[1], 0);
  if (f.discount) {
    const d = Math.round(total * f.discount);
    lines.push([f.discountLabel, -d]);
    total -= d;
  }
  return { lines, total, visits, unitWord: s.unit };
}

function viewBook() {
  const V = cur(), B = V.brand, bk = V.book;
  const { lines, total, visits, unitWord } = estimate();
  const steps = ["Service", "Details", "When", "Confirm"];

  return frame(B.domain + "/book", bk.who, `
  <div class="pad">
    <div class="head2" style="margin-bottom:16px">
      <div><span class="eyebrow">Step ${state.bookStep} of 4</span><h3>${bk.title}</h3></div>
      <span class="pill flat">Returning client · profile on file</span>
    </div>

    <div class="stepbar" style="margin-bottom:20px">
      ${steps.map((s, i) => {
        const n = i + 1;
        return `<button class="${n === state.bookStep ? "on" : n < state.bookStep ? "done" : ""}" data-bookstep="${n}">${n}. ${s}</button>`;
      }).join("")}
    </div>

    <div class="book">
      <div class="stack" style="gap:22px">
        <div class="stack" style="gap:9px">
          <span class="eyebrow">What do you need?</span>
          ${V.services.map(s => `<button class="choice ${state.bookSvc === s.id ? "on" : ""}" data-svc="${s.id}">
            <span><span class="t">${s.name}</span> <span class="muted small">· ${s.dur}</span><br>
            <span class="d">${s.blurb.split(".")[0]}.</span></span>
            <span class="p">${money(s.price)}</span></button>`).join("")}
        </div>

        <div class="stack" style="gap:9px">
          <span class="eyebrow">${bk.step2}</span>
          <div class="toggles">
            ${bk.subjects.map(s => `<button class="tog ${state.bookSubjects.includes(s.id) ? "on" : ""}" data-subject="${s.id}">${s.name} · ${s.sub}</button>`).join("")}
            <button class="tog">${bk.addLabel}</button>
          </div>
          <p class="small muted">${bk.subjectNote}</p>
        </div>

        <div class="stack" style="gap:9px">
          <span class="eyebrow">${bk.step3}</span>
          <div class="toggles">
            ${bk.freq.map(f => `<button class="tog ${state.bookFreq === f.id ? "on" : ""}" data-freq="${f.id}">${f.label}</button>`).join("")}
            <button class="tog ${state.surcharge ? "on" : ""}" data-surcharge="1">${bk.surcharge.label}</button>
          </div>
          <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(170px,1fr));margin-top:6px">
            ${bk.fields.map(([l, v]) => `<div class="field"><label>${l}</label><div class="box mono">${v}</div></div>`).join("")}
          </div>
          ${state.surcharge ? `<div class="flag warn"><span aria-hidden="true">▲</span><div>${bk.surcharge.note}</div></div>` : ""}
        </div>

        <div class="stack" style="gap:9px">
          <span class="eyebrow">${bk.noteLabel}</span>
          <div class="field"><div class="box ta">${bk.noteValue}</div></div>
        </div>
      </div>

      <aside class="summary">
        <span class="eyebrow">Estimate</span>
        <div class="stack" style="gap:7px">
          ${lines.map(l => `<div class="lineitem"><span class="l">${l[0]}</span><span class="v">${money(l[1])}</span></div>`).join("")}
        </div>
        <hr class="divider">
        <div class="total"><span>Total</span><span class="num">${money(total)}</span></div>
        <p class="small muted">${visits} ${unitWord}${visits > 1 ? "s" : ""} · ${bk.billNote}. Estimate only. Confirmed once ${B.owner} accepts.</p>
        <hr class="divider">
        ${state.bookDone === "sent" ? `<div class="flag ok"><span aria-hidden="true">✓</span><div><strong>Request sent.</strong> ${B.owner} gets this exact summary, and the client gets a confirmation. In this demo nothing actually left the page. On a live site, it has.</div></div>` : state.bookDone === "draft" ? `<div class="flag"><span aria-hidden="true">✓</span><div><strong>Draft saved.</strong> It's kept on this device and waiting when you come back.</div></div>` : ""}
        <div class="stack" style="gap:6px">
          <button type="button" class="btn" data-booksend="1">${state.bookDone === "sent" ? "Send another request" : "Send request"}</button>
          <button type="button" class="btn ghost sm" data-bookdraft="1">Save as draft</button>
        </div>
        <p class="small muted">Free cancellation up to ${B.cancel} before.</p>
      </aside>
    </div>
  </div>`);
}

/* ============================================================
   SURFACE 3 — client portal
   ============================================================ */
function reportBlock(r) {
  const chip = ([l, v]) => `<span class="pill ${v ? "ok" : "flat"}">${v ? "✓" : "○"} ${l}</span>`;
  return `<div class="card" style="background:var(--surface-2);padding:14px;margin-top:10px">
    <div class="spread wrap-f" style="margin-bottom:10px">
      <span class="eyebrow">${r.label}</span>
      <span class="mono small muted">${r.time}</span>
    </div>
    <div class="row wrap-f" style="gap:6px;margin-bottom:12px">${r.checks.map(chip).join("")}</div>
    <div class="grid" style="grid-template-columns:150px 1fr;gap:14px;align-items:start">
      <div class="photo sq" style="border-radius:var(--r-s);border:1px solid var(--line)"><span>${r.time}</span></div>
      <div class="stack" style="gap:9px">
        <p class="small">${r.note}</p>
        ${r.privacy ? `<p class="privacy">${r.privacy}</p>` : ""}
      </div>
    </div>
  </div>`;
}

function profileCard(p) {
  return `<div class="card" style="padding:18px">
    <div class="spread" style="align-items:flex-start">
      <div><h4 style="font-size:19px">${p.title}</h4><p class="small muted">${p.sub}</p></div>
      <span class="pill ok">${p.badge}</span>
    </div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin-top:16px">
      <dl class="kv">${p.rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
      <dl class="kv">${p.rows2.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
    </div>
    <hr class="divider" style="margin:16px 0">
    <span class="eyebrow">${p.listTitle}</span>
    <ul style="margin:8px 0 0;padding-left:18px;font-size:13.5px;color:var(--ink-2);display:flex;flex-direction:column;gap:4px">
      ${p.list.map(x => `<li>${x}</li>`).join("")}
    </ul>
    <div class="row wrap-f" style="margin-top:14px;gap:7px">
      ${p.ok.map(x => `<span class="pill ok">${x}</span>`).join("")}
      ${p.no.map(x => `<span class="pill crit">No ${x.toLowerCase()}</span>`).join("")}
    </div>
    ${p.privacy ? `<p class="privacy" style="margin-top:14px">${p.privacy}</p>` : ""}
  </div>`;
}

function viewPortal() {
  const V = cur(), B = V.brand, P = V.portal;
  let body = "";

  if (state.portalTab === "visits") {
    body = `<div class="stack" style="gap:20px">
      <div>
        <div class="head2" style="margin-bottom:10px"><h3>Upcoming</h3><span class="pill info">${P.upcomingTag}</span></div>
        <div class="list">${P.upcoming.map(u => `<div class="item">
          <span class="when">${u.d}<br>${u.t}</span>
          <span><span class="what">${u.what}</span><br><span class="sub">${u.sub}</span></span>
          <span class="btn ghost sm">Change</span></div>`).join("")}</div>
      </div>
      <div>
        <div class="head2" style="margin-bottom:10px"><h3>Recent</h3><span class="small muted">${P.historyHint}</span></div>
        <div class="list">${P.history.map((h, i) => `
          <button class="item" data-visit="${i}">
            <span class="when">${h.d}<br>${h.t}</span>
            <span><span class="what">${h.what}</span><br><span class="sub">${h.snip}</span></span>
            <span class="pill flat">${state.openVisit === i ? "Hide" : "Report"}</span>
          </button>
          ${state.openVisit === i ? `<div style="padding:0 15px 15px;background:var(--surface)">${reportBlock(P.report)}</div>` : ""}
        `).join("")}</div>
      </div>
    </div>`;
  } else if (state.portalTab === "subject") {
    body = `<div class="stack" style="gap:16px">
      <div class="head2"><h3>${P.tabs[1][1]}</h3><span class="btn ghost sm">${P.profile.addLabel}</span></div>
      ${profileCard(P.profile)}
    </div>`;
  } else {
    const d = P.invoiceDetail;
    body = `<div class="stack" style="gap:16px">
      <div class="head2"><h3>${P.tabs[2][1]}</h3></div>
      <div class="list">${P.invoices.map(v => {
        const right = v.status === "Paid"
          ? `<span class="pill ok">Paid</span>`
          : v.amt > 0 ? `<span class="btn sm">Pay now</span>` : `<span class="pill info">Covered</span>`;
        return `<div class="item">
          <span class="when">${v.id}</span>
          <span><span class="what">${money(v.amt)} · ${v.count}</span><br><span class="sub">${v.per} · ${v.when}</span></span>
          ${right}</div>`;
      }).join("")}</div>
      <div class="card" style="padding:16px">
        <span class="eyebrow">${d.id} · ${d.per}</span>
        <div class="stack" style="gap:6px;margin-top:12px">
          ${d.lines.map(l => `<div class="lineitem"><span class="l">${l[0]}</span><span class="v">${money(l[1])}</span></div>`).join("")}
        </div>
        <hr class="divider" style="margin:12px 0">
        <div class="total"><span>${d.dueLabel}</span><span class="num">${money(d.total)}</span></div>
        <p class="small muted" style="margin-top:8px">${d.note}</p>
      </div>
    </div>`;
  }

  const nav = P.tabs.map(t => [t[0], t[1], `data-ptab="${t[0]}"`]);
  const foot = `<div class="card" style="padding:12px;margin-top:auto;background:var(--surface)">
      <span class="eyebrow">${P.nextLabel}</span>
      <p class="small" style="margin-top:5px">${P.nextValue}</p></div>`;

  return frame(B.domain + "/portal", P.who,
    `<div class="app">${sideNav(V, nav.concat([["m", "Messages", ""], ["a", "Account", ""]]), state.portalTab, null, foot)}
      <div class="main">${body}</div></div>`);
}

/* ============================================================
   SURFACE 4 — the operator's day
   ============================================================ */
function viewOps() {
  const V = cur(), B = V.brand, O = V.ops, C = O.composer;
  const warnWhen = C.warnWhen || "off";
  const showWarn = warnWhen === "on" ? !!state.checkin[C.warnKey] : !state.checkin[C.warnKey];

  const nav = O.nav.map((n, i) => [i === 0 ? "on" : n, n, ""]);
  const foot = `
    <div class="card" style="padding:12px;background:var(--surface)">
      <span class="eyebrow">${O.stat[0]}</span>
      <p class="small" style="margin-top:5px">${O.stat[1]}</p>
    </div>
    <div class="card" style="padding:12px;background:var(--surface)">
      <span class="eyebrow">${O.weekTitle}</span>
      <div class="weekbars">${O.week.map((n, i) =>
        `<div><b class="${i === (O.weekToday || 0) ? "hi" : ""}" style="height:${Math.max(n * 5, 2)}px"></b><span>${"SMTWTFS"[i]}</span></div>`).join("")}</div>
      <p class="small muted" style="margin-top:8px">${O.weekNote}</p>
    </div>`;

  return frame("app." + B.domain + "/" + O.url, O.who, `
  <div class="app">
    ${sideNav(V, nav, "on", O.navBadge, foot)}
    <div class="main">
      <div class="head2">
        <div><span class="eyebrow">${O.dateLabel}</span><h3>${O.title}</h3></div>
        <span class="pill warn">${O.badge}</span>
      </div>

      <div class="stack">
        ${O.stops.map(s => `
          ${s.drive ? `<div class="stop"><span class="t"></span><span class="rail"></span><span class="drive">↓ ${s.drive}</span></div>` : ""}
          <div class="stop ${s.status}">
            <span class="t">${s.t}</span>
            <span class="rail"><i></i></span>
            <div class="body">
              <div class="spread wrap-f" style="gap:8px">
                <div>
                  <span style="font-weight:600;font-size:14.5px">${s.title}</span>
                  <div class="small muted">${s.sub} · window ${s.win}</div>
                </div>
                <span class="pill ${s.status === "done" ? "ok" : s.status === "next" ? "warn" : "flat"}">${
                  s.status === "done" ? "Reported" : s.status === "next" ? "Up next" : "Later"}</span>
              </div>
              ${s.note ? `<p class="small muted" style="margin-top:6px">${s.note}</p>` : ""}
              ${s.alert ? `<div class="flag crit" style="margin-top:9px"><span aria-hidden="true">●</span><div>${s.alert}</div></div>` : ""}
            </div>
          </div>`).join("")}
      </div>

      <hr class="divider">

      <div>
        <div class="head2" style="margin-bottom:12px">
          <div><span class="eyebrow">${C.eyebrow}</span><h3>${C.title}</h3></div>
          <span class="mono small muted">${C.meta}</span>
        </div>

        <div class="grid checkin-grid">
          <div class="stack" style="gap:14px">
            <div class="stack" style="gap:8px">
              <span class="eyebrow">${C.togglesLabel}</span>
              <div class="toggles">${C.toggles.map(([k, l]) =>
                `<button class="tog ${state.checkin[k] ? "on" : ""}" data-check="${k}">${state.checkin[k] ? "✓" : "○"} ${l}</button>`).join("")}</div>
              ${showWarn ? `<div class="flag warn"><span aria-hidden="true">▲</span><div>${C.warn}</div></div>` : ""}
            </div>
            <div class="field">
              <label>${C.noteLabel}</label>
              <div class="box ta">${C.noteValue}</div>
            </div>
            <div class="row wrap-f" style="gap:8px">
              <button class="btn" data-send="1" ${state.sent ? "disabled" : ""}>${state.sent ? C.sentLabel : C.sendLabel}</button>
              ${C.extra.map(x => `<span class="btn ghost sm">${x}</span>`).join("")}
            </div>
            ${state.sent ? `<div class="flag ok"><span aria-hidden="true">✓</span><div>${C.sent}</div></div>` : ""}
          </div>

          <div class="card" style="padding:14px;background:var(--surface-2)">
            <span class="eyebrow">${C.sidebarTitle}</span>
            <dl class="kv one" style="margin-top:10px">
              ${C.sidebar.map(([k, v]) => `<dt>${k}</dt><dd class="small">${v}</dd>`).join("")}
            </dl>
            <hr class="divider" style="margin:12px 0">
            <span class="eyebrow">${C.noTitle}</span>
            <div class="row wrap-f" style="gap:6px;margin-top:8px">
              ${C.no.map(x => `<span class="pill crit">${x}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
}

/* ============================================================
   SURFACE 5 — AI intake
   ============================================================ */
function viewAI() {
  const V = cur(), B = V.brand, A = V.ai;
  const q = A.inquiries[state.inq];
  const quoteTotal = q.quote.reduce((a, l) => a + l[1], 0);
  const unread = Object.values(A.inquiries).filter(x => x.unread).length;

  return frame("app." + B.domain + "/inbox", V.ops.who, `
  <div class="ai">
    <div class="inbox">
      <div style="padding:13px 15px;border-bottom:1px solid var(--line)">
        <span class="eyebrow">Inquiries</span>
        <div class="spread" style="margin-top:3px"><b style="font-size:14px">${Object.keys(A.inquiries).length} open</b>
          ${unread ? `<span class="pill warn">${unread} new</span>` : `<span class="pill flat">All read</span>`}</div>
      </div>
      ${Object.entries(A.inquiries).map(([k, v]) => `
        <button class="msg ${state.inq === k ? "on" : ""}" data-inq="${k}">
          <div class="spread"><span class="f">${v.from}</span>${v.unread ? `<span class="pill info">New</span>` : ""}</div>
          <span class="p">${v.preview}</span>
          <span class="mono" style="font-size:10.5px;color:var(--ink-3)">${v.via} · ${v.when}</span>
        </button>`).join("")}
      <div style="padding:13px 15px;margin-top:auto;border-top:1px solid var(--line)">
        <p class="small muted">${A.inboxNote}</p>
      </div>
    </div>

    <div class="main">
      <div class="head2">
        <div><span class="eyebrow">${q.via} · ${q.when}</span><h3>${q.from}</h3></div>
        <div class="row"><span class="btn ghost sm">Archive</span><span class="btn sm">Open in calendar</span></div>
      </div>

      <div class="raw">${esc(q.raw)}</div>

      <div class="stack" style="gap:9px">
        <span class="eyebrow">What it's asking for</span>
        <div class="chips">${q.extract.map(e => `<span class="chip"><b>${e[0]}</b> ${e[1]}</span>`).join("")}</div>
      </div>

      <div class="stack" style="gap:8px">
        <span class="eyebrow">Checked against the calendar, the rate table, and the service area</span>
        ${q.flags.map(f => `<div class="flag ${f.k}">
          <span aria-hidden="true">${f.k === "crit" ? "●" : f.k === "warn" ? "▲" : "✓"}</span>
          <div><b>${f.t}.</b> ${f.d}</div></div>`).join("")}
      </div>

      ${q.quote.length ? `<div class="card" style="padding:14px">
        <span class="eyebrow">Priced from the rate table</span>
        <div class="stack" style="gap:6px;margin-top:10px">
          ${q.quote.map(l => `<div class="lineitem"><span class="l">${l[0]}</span><span class="v">${money(l[1])}</span></div>`).join("")}
        </div>
        <hr class="divider" style="margin:11px 0">
        <div class="total"><span>Quoted</span><span class="num">${money(quoteTotal)}</span></div>
      </div>` : ""}

      <div class="draft">
        <div class="dh">
          <span>Drafted reply · not sent</span>
          <span class="seg">
            <button class="${state.tone === "warm" ? "on" : ""}" data-tone="warm">Warm</button>
            <button class="${state.tone === "brief" ? "on" : ""}" data-tone="brief">Brief</button>
          </span>
        </div>
        <div class="db">${esc(q.drafts[state.tone])}</div>
      </div>

      <div class="row wrap-f" style="gap:8px">
        <span class="btn">Send reply</span>
        <span class="btn ghost">Edit first</span>
        <span class="btn ghost">Create the booking</span>
      </div>
      <p class="small muted">The draft uses ${B.owner}'s rates, service area, and calendar, not a generic template. ${B.owner} is always the one who hits send.</p>
    </div>
  </div>`);
}

/* ============================================================
   STATIC SECTIONS — also rendered from data
   ============================================================ */
function renderChrome() {
  document.getElementById("mhwp-name").textContent = MHWP.name;
  document.getElementById("mhwp-cta").textContent = MHWP.callCta;

  document.getElementById("vpick").innerHTML = VERTICALS.map(v => `
    <button class="vcard" data-vert="${v.id}" aria-pressed="${state.vert === v.id}">
      <span class="vi">${v.label}</span>
      <span class="vn">${v.brand.name}</span>
      <span class="vs">${v.switcherSub}</span>
    </button>`).join("");

  document.getElementById("explain").innerHTML = EXPLAINER.map(e =>
    `<div><h4>${e.h}</h4><p>${e.p}</p></div>`).join("");

  document.getElementById("pricing").innerHTML = `
    <span class="eyebrow">${PRICING.eyebrow}</span>
    <h2>${PRICING.title}</h2>
    <p class="lede">${PRICING.lede}</p>
    <div class="tiers">
      ${PRICING.tiers.map(t => `<div class="tier ${t.featured ? "feat" : ""}">
        <div class="spread" style="align-items:flex-start">
          <span class="tname">${t.name}</span>
        </div>
        <div class="tprice">${t.price}</div>
        <div class="twhen">${t.when}</div>
        <div class="ttime">${t.time}</div>
        <ul>${t.includes.map(i => `<li>${i}</li>`).join("")}</ul>
        <div class="tnot">${t.not}</div>
      </div>`).join("")}
    </div>

    ${PRICING.addons.map(a => `<div class="addon">
      <div class="spread wrap-f"><h4>${a.name}</h4><span class="ap">${a.price}</span></div>
      <p>${a.body}</p>
    </div>`).join("")}

    <div class="care">
      ${PRICING.care.map(c => `<div class="c">
        <div class="spread wrap-f"><h4>${c.name}</h4><span class="cp">${c.price}</span></div>
        <p>${c.body}</p></div>`).join("")}
    </div>

    <div class="terms">
      ${PRICING.terms.map(([h, p]) => `<div class="term"><h5>${h}</h5><p>${p}</p></div>`).join("")}
    </div>

    <div class="close">
      <div>
        <h3>Want to see your own business in this?</h3>
        <p>Fifteen minutes on the phone and I can tell you which tier fits and what it would take. No deck, no pitch.</p>
      </div>
      <a class="mcta" href="mailto:${MHWP.email}">${MHWP.callCta}</a>
    </div>

    <div class="foot">
      <span>${MHWP.name} · ${MHWP.city} · ${MHWP.email}</span>
      <span>All businesses shown are demonstrations. Any resemblance to a real Denver business is deliberate flattery.</span>
    </div>`;
}

function render() {
  const V = cur();
  document.getElementById("demo").setAttribute("data-vert", V.id);

  document.querySelectorAll("#vpick .vcard").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.vert === state.vert));

  document.getElementById("tabs").innerHTML = SURFACES.map(([id, label]) =>
    `<button class="tab" role="tab" aria-selected="${state.surface === id}" data-surface="${id}">${label}</button>`).join("");

  const views = { site: viewSite, book: viewBook, portal: viewPortal, ops: viewOps, ai: viewAI };
  let [tbadge, tblurb] = SURFACE_TIER[state.surface];
  document.getElementById("tierstrip").innerHTML =
    `<span class="tierbadge">${tbadge}</span><span>${tblurb}</span><a href="#pricing">See pricing ↓</a>`;
  document.getElementById("stage").innerHTML = views[state.surface]();

  document.getElementById("demonote").innerHTML =
    `<span aria-hidden="true">◆</span><div><strong>${V.brand.name} is a demonstration business.</strong>
     The rates, neighborhoods, clients, and policies are invented, but they're the kind a real ${V.label.toLowerCase()}
     operator would have, and every one of them is a value in a config file, not something hard-coded.</div>`;
}

document.addEventListener("click", e => {
  const t = e.target.closest("[data-vert],[data-surface],[data-bookstep],[data-svc],[data-subject],[data-freq],[data-surcharge],[data-ptab],[data-visit],[data-check],[data-send],[data-inq],[data-tone],[data-booksend],[data-bookdraft],[data-goto]");
  if (!t) return;
  const d = t.dataset;

  if (d.vert) {
    if (d.vert === state.vert) return;
    state.vert = d.vert;
    resetForVertical();
    setTimeout(syncHash, 0);
  }
  else if (d.surface) state.surface = d.surface;
  else if (d.bookstep) { state.bookStep = +d.bookstep; state.bookDone = null; }
  else if (d.booksend) state.bookDone = "sent";
  else if (d.bookdraft) state.bookDone = "draft";
  else if (d.goto) {
    if (d.goto === "book") state.surface = "book";
    else if (d.goto === "rates") {
      state.surface = "site";
      setTimeout(() => { const el = document.querySelector("#stage .svcgrid"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 40);
    }
  }
  else if (d.svc) { state.bookSvc = d.svc; state.bookDone = null; }
  else if (d.subject) {
    const i = state.bookSubjects.indexOf(d.subject);
    if (i > -1) { if (state.bookSubjects.length > 1) state.bookSubjects.splice(i, 1); }
    else { state.bookSubjects.push(d.subject); state.bookDone = null; }
  }
  else if (d.freq) { state.bookFreq = d.freq; state.bookDone = null; }
  else if (d.surcharge) { state.surcharge = !state.surcharge; state.bookDone = null; }
  else if (d.ptab) { state.portalTab = d.ptab; state.openVisit = null; }
  else if (d.visit !== undefined) state.openVisit = state.openVisit === +d.visit ? null : +d.visit;
  else if (d.check) state.checkin[d.check] = !state.checkin[d.check];
  else if (d.send) state.sent = true;
  else if (d.inq) { state.inq = d.inq; cur().ai.inquiries[d.inq].unread = false; }
  else if (d.tone) state.tone = d.tone;

  render();
});

/* ---- deep links: /demo.html#pet | #clean | #body ---- */
function vertFromHash() {
  const h = (location.hash || "").replace(/^#/, "").toLowerCase();
  const alias = { pet: "pet", petcare: "pet", "pet-care": "pet",
                  clean: "clean", cleaning: "clean", home: "clean",
                  body: "body", bodywork: "body", wellness: "body", massage: "body" };
  const id = alias[h];
  return VERTICALS.some(v => v.id === id) ? id : null;
}

function applyHash(scroll) {
  const id = vertFromHash();
  if (!id || id === state.vert) return false;
  state.vert = id;
  resetForVertical();
  render();
  if (scroll) {
    const el = document.getElementById("demo");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return true;
}

// keep the URL honest when the visitor switches by hand
const _origHash = history.replaceState.bind(history);
function syncHash() {
  const want = "#" + state.vert;
  if (location.hash !== want) _origHash(null, "", want);
}

window.addEventListener("hashchange", () => applyHash(true));

const startVert = vertFromHash();
if (startVert) state.vert = startVert;

resetForVertical();
renderChrome();
render();
syncHash();
