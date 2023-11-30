---
title: "MTGMetaTracker"
description: "Using data from mtggoldfish.com to create a website that tracks the popularity of decks within competitive Magic The Gathering."
date: 2023-08-14
tags: ["Full Stack", "Express", "MongoDB", "D3.js"]
imgurl: "/M.png"
links: ["https://github.com/NickGroveSE/MTGMetaTracker"]
linkimgurls: ["../assets/content/github-mark.svg"]
---

For my return to Software Development, I wanted a project that was straightforward in its concept but something that exposes me to a lot of new technologies. MTGMetaTracker was ultimately a great fit since I got to work with MongoDB, Express, EJS, parse5, and axios for the first time while also expanding my knowledge on CSS, JavaScript, and D3.js. What MTGMetaTracker is, is a web app that fetches data from competitive events for the card game Magic The Gathering from [MTGGoldfish](https://www.mtggoldfish.com/), then storing and visualizing this data over time. I loved this idea because from being in the competitive Magic The Gathering scene, it is interesting to see how strategies rise, fall, and evolve as time goes on. 

My overall process for this site was Functionality first, obviously the Frontend and the Design were important, but the data would dictate what this site would become. Starting after I initialize my Express x MongoDB environment with a simple Frontend, I dove into working with axios and [parse5](https://parse5.js.org/modules/parse5.html) to create my Web Scraper. Axios was a pretty standard setup, but challenges came with learning parse5, and it came down to some reading of the docs and printing of the axios response to produce some functions to traverse the html. 
