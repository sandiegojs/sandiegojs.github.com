---
layout: post
category : meetups
tags : [presentation, meetup, gnu, readline, cli, navigation timing api]
title : Meetup - Browser Based CLI & Navigation Timing API
speaker : Arne Claassen & James Andrew Vaughn
meetupDate : 2013-08-06
topic : Josh.js & Navigation Timing API
details : CLI support for the browser and debugging end-to-end latencies
---
{% include JB/setup %}

Join us on Tuesday to hear Arne Claassen speak about josh.js, a browser implementation of GNU Readline support,
and James Andrew Vaughn speak about capturing data from the browser's navigation timing api. More details about
the topics and the speakers are listed below.

#### [RSVP at Meetup.com](http://www.meetup.com/sandiegojs/events/125056732/)

### About Arne Claassen

Arne Claassen is a senior software developer at MindTouch and the lead developer for Dream, MindTouch's open source
REST framework, and MindTouch Clacks, MindTouch's open source RPC toolkit. Arne has been involved with large scale
web applications and distributed systems for over 12 years and enjoys writing client and server code in C#, javascript,
perl and scala. His particular areas of interest building distributed and asynchronous system and making the design
and development of systems that scale over multiple processors and servers more accessible and intuitive.

#### Arne's Topic

Josh provides a browser implementation of GNU Readline support, i.e. a hook for keystrokes for line editing,
command history, killring (clipboard with circular buffer) and completion. Readline is the defacto input library
used by linux command line tools, whether it's bash or mysql shell, or any other tool that deals with a CLI
interface. Having seen many half-hearted attempts to bringing CLI-ish support to browser apps (almost every single
one fails at even capturing TAB for completions), Arne decided to write a library that isn't yet another webshell,
but a toolkit to let anyone write input prompt that behaves like a CLI.


### About James Andrew Vaughn (Andy)

James Andrew Vaughn (Andy), is a senior engineer at MindTouch Inc. where he has served as a technical lead for
partner integrations with HTC, SAP, and Salesforce.com. Andy's current professional interests are increasing frontend
and backend performance for a faster and more successful user experience with MindTouch's cloud delivered software.
Outside of work, he has a personal interest in functional programming as well as 20 years of martial arts training.

#### Andy' Topic

Andy will speak about capturing data from the browser's navigation timing api from network latency, to time to first
byte from the web server, to the end of the request, and sending it back to your web server to capture the experience
for your actual site users.
