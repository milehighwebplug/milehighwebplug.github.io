# Mile-Hi Sprinklers: Research Report

## The business and what it does

Mile-Hi Sprinklers (Mile Hi Sprinkler, LLC) is a sprinkler and irrigation service business based in Denver, Colorado. The company handles sprinkler installation, repair, spring turn-ons, and fall blowouts and winterization.

The business has operated for 48 years, since 1978. The company website notes it is a third-generation, family and locally owned business with over 35 years of experience. The owner is Mike Hepp, and Delanie Eshima serves as the Office Manager. The main office is located at 2880 W 62nd Ave, Denver, CO 80221-2046, with a mailing address at 13937 Lexington Place, Westminster, CO 80023. Customers can reach the business by phone at (303) 450-2320 or via email at info@milehisprinklers.com. The BBB also lists an alternate phone, (720) 935-7842.

Public reputation signals are strong. The business holds an A+ rating with the Better Business Bureau, where it has been accredited since 1990 and shows zero complaints in the last three years. On Google Maps, the company holds a 4.8-star rating across 1,178 reviews.

## The issue

A documented instance shows a breakdown in scheduling where a booked blowout was never entered into the system. The following undated review from Birdeye details the failure:

"Called to schedule a sprinkler blow-out and spoke to a very nice lady who scheduled me for an 8am-10am service window. Friday came... No confirmation call, no 'im on my way call,' and finally no one showed. Wasn't until 2:30pm that I decided to call and see what happened. Woman who put me on the schedule stated I was entered wrong and my appointment was actually never scheduled. 3 Hours of work - not spent at work = no pay."

This single undated review is not a pattern of current daily failure. Recent signals indicate mostly positive scheduling and communication records. A Bestinhood summary from October 2026 notes that reviewers call the office team responsive. Other Birdeye reviews praise the office for keeping them updated with utility locates and scheduling, and for arriving earlier than scheduled. However, the missed appointment represents an exact-fit failure for a specific operational gap: an appointment that was booked but never entered, followed by zero proactive communication.

## Why it matters

A sprinkler company relies heavily on a seasonal repeat visit model. Services like spring turn-ons and fall blowouts are seasonal jobs performed for the same customers every year. A seasonal business lives on the booked visit happening on schedule, which requires the customer to know exactly when the crew is coming.

When a booked blowout is never entered in the schedule, the failure exists within the booking record itself. The customer waits at home for a visit that will never happen, resulting in severe frustration. In the case documented above, the customer lost three hours of paid work waiting for a technician who was not dispatched.

## The proposed solution

We propose implementing an automated communication and tracking loop consisting of an SMS booking confirmation, a day-before reminder, a morning "tech en route" text, and a missed-visit log.

What it does: When a customer books a blowout or a turn-on, the system immediately sends an SMS confirming the booking. The day before the appointment, a reminder text is sent. On the morning of the visit, the customer receives a "tech en route" message so they are never left waiting in silence. Additionally, a missed-visit log records every booked visit and every missed call. This ensures that a booked blowout can never again be entered incorrectly and forgotten.

What it does not do: This solution does not overhaul the current dispatch process. It does not replace the existing CRM, it does not change pricing, and it does not alter the actual sprinkler work performed by the technicians in the field.

## Scope, price, and terms

Price: $900 to $1,500 fixed fee.

Retainer: Optional $300 per month for ongoing support.

Terms: Payments are structured in 35/40/25 milestones (35% at kickoff, 40% upon accepted working demo, 25% on final delivery).

Intellectual property: All IP transfers to Mile-Hi Sprinklers upon final payment.

## Unknowns

To finalize implementation details, the following questions need to be answered:

What is the current booking and scheduling tool used for blowouts and turn-ons?

How many seasonal customers does the business serve?

How are blowout and turn-on visits currently scheduled and tracked by the office?

Who answers the phones while technicians are in the field?

How many customer calls go to voicemail in an average week?
