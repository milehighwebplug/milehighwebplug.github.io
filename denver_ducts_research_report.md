# Denver Ducts Corp: Research Report
## A proposed SMS confirmation and missed-call recovery system

**Prepared for:** Denver Ducts Corp, Aurora/Denver, CO
**Prepared by:** Chris, Python Developer | Web Scraping, API Automation & QA
**Date:** 2026-11-14
**Status:** Audited. Every claim traced to a public source. Unknowns listed as questions, not guessed.

---

## The business and what it does

Denver Ducts Corp is a family owned and operated trade business located at 700 Billings St Ste C, Aurora, CO 80011. They have been in business 15 years, since 2011. The owner is Vachagan Gasparyan, per the BBB business profile. They specialize in air duct and dryer vent cleaning. Their service list includes heating repair, air conditioning, air duct sealing, chimney cleaning, furnace and AC cleaning, indoor air quality, maintenance plans, plumbing, thermostat installation and repair, and AC/furnace replacement and repair.

The company holds an F rating with the Better Business Bureau, and is not BBB Accredited. The BBB profile shows 6 complaints filed in the last 3 years, 4 of them in the last 12 months, and 45 customer reviews on BBB. Source: https://www.bbb.org/us/co/aurora/profile/air-duct-cleaning/denver-ducts-corp-1296-90132713

Operating hours are Monday through Saturday, 8:00 am to 6:00 pm, though the website footer claims 24/7 customer service. Customers can reach them by email at denverducts@gmail.com, or by phone at (720) 370-2868, (719) 387-8751, or +1 303-872-7691.

The company markets itself with the tagline "We Get It Right The First Time, On Time!". They claim a "Relentless Focus on Customer Service" and a "Team With Over 100 Years of combined Experience". They advertise "Straightforward, Flat-Rate Pricing" but publish no prices on their site. Booking requires customers to submit a contact form with a promised reply in 24 to 48 hours. There is no online booking or instant confirmation visible.

## The issue

The technical work itself is good. Positive reviews routinely name specific technicians (including Tenzin, Victor, Gabriel, Adrian, Daniel, Monte, Courtney, and Sebastian) and praise the results. The breakdown is entirely in scheduling, owner time, and dispatch.

Customers are experiencing no-shows with no call, followed by being ghosted without an apology or a rescheduled appointment. This is an active failure, with two customers documenting this exact experience in the same month:

"To summarize, their scheduling is unreliable and they seem completely unorganized... We scheduled to have a free evaluation, no tech showed up that day. Called the company to reschedule. For the second appointment, no one showed up again, and I received a call AFTER our appointment window to say that the tech was running late. Finally the third time, someone showed up and did our evaluation."
(Kate Eitelman, 2026-11-06, Trustindex/Google, Source: https://www.trustindex.io/reviews/www.denverducts.com)

"I booked nearly two weeks in advance, agreed to multiple schedule changes, and was ultimately ghosted. The technician never showed up, and six days later, no one has contacted me to apologize or reschedule. Very disappointing service."
(Sandra Marrufo, 2026-10-23, Trustindex/Google, Source: https://www.trustindex.io/reviews/www.denverducts.com)

## Why it matters

Denver Ducts Corp handles significant volume, holding 1,259 reviews with a 4.5 star rating on Trustindex (82% five stars). The scheduling failure is live this month. Every no-show is a lost job and a negative public review that damages their brand and contradicts their core marketing claims of being on time. The BBB record (F rating, 4 complaints in the last 12 months) shows the same pattern from a second source.

## The proposed solution

We propose an automated SMS confirmation and missed call recovery system to close the communication loop for Denver Ducts Corp.

What it does:

Sends an SMS confirming the appointment window when a customer books.

Texts the customer automatically if the technician runs late or the window is missed.

Replies automatically to any missed office calls with an SMS stating, "we missed your call, reply to reschedule."

Writes every missed call to a simple log so the office can see if a follow up occurred, ensuring missed appointments and callback requests never fall out of the process unnoticed again.

What it does not do:

It does not overhaul their dispatch process.

It does not replace their existing CRM.

It does not change their pricing model.

## Scope, price, and terms

The implementation requires a fixed fee of $900 to $1,500.

The payment terms are milestone based:

35% kickoff

40% working demo accepted

25% final delivery

Intellectual property transfers to Denver Ducts Corp upon final payment. There is an optional $300 per month retainer upsell for ongoing support.

## Unknowns

What booking tool or CRM are they currently using?

What is their weekly appointment volume?

How are no-shows and missed appointments currently tracked?

Is the promised 24 to 48 hour contact form reply window actually being met?

---

## Audit note (Clancy, 2026-11-14)

Draft PASSES with two corrections applied in this final version:
1. BBB F rating: confirmed on the BBB profile (https://www.bbb.org/us/co/aurora/profile/air-duct-cleaning/denver-ducts-corp-1296-90132713). The draft cited denverducts.com, which does not state a rating; citation corrected to the BBB profile. Added supporting BBB facts: 6 complaints in 3 years, 4 in the last 12 months, 45 BBB reviews, not Accredited.
2. Owner: corrected to Vachagan Gasparyan, per BBB Business Management. The draft named Dara Chhim from BuildZoom (unconfirmed); the BBB is the authoritative source for the Aurora business, so the BuildZoom name was removed.

Report verified: 0 em dashes, 0 hype words, all factual claims traced to the brief or a cited URL.
