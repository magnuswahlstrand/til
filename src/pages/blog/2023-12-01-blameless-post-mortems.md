---
layout: "../../layouts/BlogPost.astro"
title: Blameless post mortems
datetime: "2023-12-01"
tags: [ engineering, facilitation ]
---

Last week we had a minor incident in production related to card payments, and our monitoring system did not alert us as we had expected. 
While the customer impact was minimal, our team would like to ensure that it doesn't happen again.

I remembered at a previous workplace, we had a really nice habit of doing simple post mortems for really any customer impacting incidents. They were a great way of learning from actual mistakes, without a huge time investment, and also building a culture of sharing, learning and transparency (We actually had an automated system that informed the C-suite and the board, after the post mortem was created). 

I wanted to bring that to my current workplace, so I created a simple template for future post mortems:

# `<Incident Title>`:
Date of post mortem: `<DATE>`
Attendees: `<ATTENDES>`

## 1. Summary of the Incident
> Briefly describe what happened, including the services or systems affected.

_

## 2. Impact Analysis
> Detail the extent of the impact, including affected users, business operations, and duration of the outage.

_

## 3. Timeline of Events
> Provide a timeline of key events during the incident, including detection, response, and resolution.

_

## 4. Root Cause Analysis
> Identify the primary cause of the incident and contributing factors.

_

## 5. Lessons Learned
> Highlight key takeaways and insights gained from the incident.

_

## 6. Corrective and Preventive Measures
> List the actions taken to resolve the incident and measures to prevent recurrence.

_

## 7. Action Items
> Specify tasks, responsible individuals or teams, and deadlines for each action item.

_

## 8. Additional Notes
> Any other relevant information or observations. PRs

_

So far, we've only used the template once, but I hope it will be useful in the future.

# 🪦