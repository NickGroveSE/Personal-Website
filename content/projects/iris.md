---
title: "Iris"
description: "Iris is a web app that visualizes the most prevalent colors from the album artwork of your favorite songs."
draft: false
date: 2023-12-28
tags: ["Full Stack", "Vue", "Golang", "Sass", "Spotify API", "ImageMagick"]
imgurl: "/irislogo.png"
links: ["https://github.com/NickGroveSE/IrisDemo"]
linkimgurls: ["/github-mark.svg"]
---

When I came up for the idea for Iris, I was at a point where I felt like I had learned so much and I wanted to show off something that was unique, creative, and overall professional and polished. Essentially what Iris is, is (for Spotify users) it takes the songs you listen to most, extracts the most common colors from their album artwork, and visualizes all these colors into what is called an Iris. The Iris is an ever changing collection of all these colors, and its a beautiful way to show similarities and contrast with the album art of the music you love.

<div id="fig-1" style="display: block; max-width: 740px; margin-left: auto; margin-right: auto;">
    <div style="display: inline; font-size: 18px; font-weight: 900; color: #42b883;">Figure 1:</div>
    <img  src="/irisdemoss.png" style="width: 100%; margin: 10px 0 50px 0">
</div>

The stack for this project includes Vue and Sass on the Frontend, and Golang with Spotify API and ImageMagick (for image analysis) on the Backend. For the Frontend, Vue is my favorite framework right now, and I want to continue to master it, and Sass was kind of game time decision, it came in handy for my animations of the different colors in the Iris. The Backend is pretty straight forward for using Spotify API and ImageMagick but for the language I chose Go because I really value performance with this app. When it comes to my Image Analysis, I feel like it could make the app clunky so I wanted a language that could comfortably analyze the images concurrently.

For this project, I put a lot of work into some true pen on paper planning. I outlined the System Design, drew out Mock-Ups, and created a road map towards my goal. All of this work really paid for my productivity and organization, it gave me the ability to code the Frontend Demo (Figure 1) very fast. Until I start working with the final repository for this project, I wanted to isolate the Front and Backend. I have not worked with a JAMstack for awhile so I wanted to go at this project thoroughly. 

Moving forward since most of my Frontend Demo is finished I am going to started my work with the Backend very soon.