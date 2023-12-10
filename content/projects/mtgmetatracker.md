---
title: "MTGMetaTracker"
description: "Using data from mtggoldfish.com to create a website that tracks the popularity of decks within competitive Magic The Gathering."
draft: false
date: 2023-08-14
tags: ["Full Stack", "Express", "MongoDB", "D3.js"]
imgurl: "/M.png"
links: ["https://github.com/NickGroveSE/MTGMetaTracker"]
linkimgurls: ["/github-mark.svg"]
---

For my return to Software Development, I wanted a project that was straightforward in its concept but something that exposes me to a lot of new technologies. MTGMetaTracker was ultimately a great fit since I got to work with MongoDB, Express.js, EJS, parse5, and axios for the first time while also expanding my knowledge on CSS, JavaScript, and D3.js. What MTGMetaTracker is, is a web app that fetches data from competitive events for the card game Magic The Gathering from MTGGoldfish, then storing and visualizing this data over time. I loved this idea because from being in the competitive Magic The Gathering scene, it is interesting to see how strategies rise, fall, and evolve as time goes on. 

My overall process for this site was Functionality first, obviously the Frontend and the Design were important, but the data would dictate what this site would become. Starting after I initialized my Express environment with a simple Frontend, I dove into working with axios and parse5 to create my Web Scraper. Axios was a pretty standard setup, but challenges came with implementing parse5, and it came down to some reading of the docs and printing of the axios response to produce some functions to traverse the html. 

From here it was time to set up MongoDB which went pretty well, it was just about learning to how to save the data and query. For creating my schemas I was only going to need one call Archetypes which is what the strategies or deck types are called in Magic The Gathering. Originally for this schema I started out with just storing the name, the format (a format is the style of Magic that is played in a competition, for example Vintage is a very old format where you can play cards all the way back to the 90s and Pioneer is a MTG format for more recent cards dating back to 2012), and a data array that saves a date, popularity statistic (meta), and price statistic. Later on I added more vital variables to the schema and this taught me a lot about the importance of putting a good amount of time into planning out your schemas. 

With all of this out of the way, I turned to the Frontend which came down to a lot of formatting of the pages and D3.js. The Frontend is the main part of this project that is still a work in progress, everything is graphing well with D3 and the buttons for each archetype are looking great (Figure 1), but currently making this Frontend pop is my big end goal, eventually looking to get to the design shown in Figure 2 with my buttons. Before I get into anything magor with the Front I can do some tweaks to it and start hosting the site because everything is pretty much ready to go, so that will be my next step.

<div id="fig-1" style="display: block; max-width: 740px; margin-left: auto; margin-right: auto;">
    <div style="display: inline; font-size: 18px; font-weight: 900; color: #42b883;">Figure 1:</div>
    <div style=" font-size: 14px;">List of the top Archetypes. This is shown after the user selects a Format, for example in this screenshot they chose Modern.</div>
    <img  src="/example-format-page.png" style="width: 100%; margin: 10px 0 50px 0">
</div>

<div id="fig-2" style="display: block; max-width: 740px; margin-left: auto; margin-right: auto;">
    <div style="font-size: 18px; font-weight: 900; color: #42b883;">Figure 2:</div>
    <img src="/Panel-Mock-Ups.jpg" style="display: block; width: 60%; margin: 10px auto 50px auto;">
</div>
