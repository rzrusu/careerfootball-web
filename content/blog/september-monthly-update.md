---
title: "September Monthly Update"
description: "A candid look at our recent pace, core system rewrites, and what's coming, including a roadmap and beta sign-ups."
date: "September 15, 2025"
author: "Football Career Team"
type: "Update"
image: "/blog/september-monthly.png"
---

![Fixture calendar (WIP)](/blog/september-monthly.png)


## A quick, honest update

Progress on the game has been slower than planned over the past few months. We’ve had some personal life constraints and scheduling conflicts on the development side that impacted velocity. Thank you for your patience and continued support while we balance real life responsibilities with building something great.

## Introducing monthly updates

This is the first post in our new Monthly Updates series. Every month we’ll share a transparent status update covering what we worked on, what changed, and what’s next. Expect clear summaries, visuals where possible, and links to deeper dives.

<Carousel :images='[{"src":"/blog/time-feature@2x.png","alt":"Placeholder 1"},{"src":"/blog/time-feature@2x.png","alt":"Placeholder 2"},{"src":"/blog/time-feature@2x.png","alt":"Placeholder 3"}]' :show-indicators="true" :show-arrows="true"></Carousel>



## Public roadmap on Trello

We’ve launched a Trello page so you can follow progress at a glance: what’s in progress, what’s up next, and what’s shipped. We’ll keep it updated alongside these monthly posts.

[View the public Trello board](https://trello.com/b/vUHhPEiJ/my-football-career)

## Reworking core systems

Over the last sprint we rebuilt several core systems to improve simulation fidelity and long term maintainability:

- **Daily time simulation**: The game now advances on a day by day tick rather than in weekly blocks. Every calendar day is simulated independently, enabling finer control over training load, injuries and recovery, scouting and contracts, and deadline day logic.
- **Fixture scheduler v2**: Our season planner now generates fixtures with real world constraints: minimum rest windows between matches, weekend-first placement where possible, and automatic conflict resolution across leagues and cups with intelligent rescheduling. The result is fewer fixture pile-ups and a more authentic calendar.

![Fixture calendar (WIP)](/blog/time-feature@2x.png)
<small>Each icon represents an event, whether it's a life event, a romantic event, a training session, or a match.</small>

These changes also lay the groundwork for a more realistic transfer system, covered in the next section.

## Transfer system improvements (preview)

We’ve built a deeper, more believable transfer market that models how clubs behave financially and strategically, then lets negotiations play out over time.

### Club profiles and strategy

Every club now has a financial state (Bankrupt, Middling, Secure, Wealthy), a live transfer budget, a wage budget, and a transfer strategy. Strategies include directions like “buy stars,” “develop prospects,” “reinforce squad,” or “sell to survive.” These inputs drive how clubs act each window.

### Window flow, at a glance

1) Squad audit: At the start of a window, each club assesses strengths, gaps, and surpluses.
2) Action plan: Based on finances and strategy, clubs decide whether to buy, loan, hold, or sell.
3) Listing phase: Players are marked as transfer-listed, loan-listed, or held.
4) Market matching: Clubs search targets that fit role, price, and wage models.
5) Offers and counter-offers: Bids go back and forth with rejections, improved terms, add-ons, or clauses.
6) Outcome: Deals close or collapse based on time, competition, and valuation drift.

Because we now simulate day by day, negotiations, medicals, paperwork, and deadline pressure evolve naturally across the window instead of jumping weekly.

### Player character vs NPCs

This system governs NPC transfers. Your player’s experience is more guided: during each window you’ll see clubs that have made concrete offers, track which clubs are interested during the season, and receive objectives to boost the likelihood of specific teams making a move for you.

![Transfer menus (WIP)](/blog/transfer-feature@2x.png)
<small>A small sneak peek at the player transfer menus indicating which clubs are interested in you and what objectives you need to achieve in order to increase your chances of receiving an offer. </small>

## Expect more activity

- More frequent development updates
- Increased marketing and community interaction
- Sneak peeks and behind the scenes looks at new features

## Beta tester applications

Applications for beta testers are set to open soon. Note that the beta itself won’t be live for a while. We’re first gathering a list of interested players so we can roll out invites in waves when the time comes. If you’re interested, keep an eye out; we’ll share sign-up details shortly.

Thanks for sticking with us. We’re excited to show you more.

