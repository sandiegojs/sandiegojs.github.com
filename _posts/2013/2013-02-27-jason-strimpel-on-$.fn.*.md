---
layout: post
category : news
tags : [sandiegojs, github, jQuery, jQuery plugin]
title : $.fn.* Comes Last if at All
author : jstrimpel
---

{% include JB/setup %}

I love jQuery. It has made cross browser web development a breeze by abstracting away quirks and
differing APIs amongst browsers. It is the most accepted [library dependency](https://github.com/mattdiamond/fuckitjs#installation) the web has ever known. However,
my love for jQuery is not unconditional. There are plenty of things I dislike about jQuery.

For example, sometimes I wish it would fail noisily when I have an empty result set, so I could catch
errors earlier on in development. This, however, is a trivial issue.

A not so trivial complaint I
have about jQuery, which apparently
[others](http://www.netmagazine.com/opinions/write-another-jquery-plug-kill-unicorn) have, is that
it completely consumes one’s development psyche to the point that when one goes to create a piece
of reusable code it begins with `$.fn.*`. I used to write code like that until recently. Now, `$.fn.*` is
the very last thing I write if at all. `$.fn.*` has become more of an afterthought in the way routers
should be an afterthought when writing a Backbone application (I am paraphrasing Derrick Bailey re:
the router; I cannot find the exact quote). What changed your mind Jason? I am glad you
asked...

1. Do you remember prototype.js, webrings, or the Roman empire? All these things have
gone the way of the Dodo. Yes prototype is still around, but do you know anyone who uses it when
building a new application? It is like trying to find someone who writes Haskell for a living. My
point is that eventually jQuery will join the list and if you tie your module, widget, etc. to
jQuery then you could have possibly shortened its lifespan.

2. Does your code even require
jQuery? Sometimes using jQuery does not provide a significant benefit, so why would you want to
limit your audience and create overhead? For example, take a tooltip widget. To position the tooltip
I would use
[`el.getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/DOM/element.getBoundingClientRect),
which is not even available directly in jQuery. In order to access the method I have to get a direct
reference to the DOM element, so involving jQuery just adds overhead without providing a real
benefit. 

3. Piggybacking off item 2 what if I wanted to reuse a DOM element level piece of code
I have written? Wouldn’t it be nice if I could just include that code? If it is a jQuery plugin
then I have to include jQuery. What if jQuery cannot be listed as a dependency? Then I cannot reuse
the code.

4. But what about chaining? F@#! chaining. Sometimes your code does not need to be
chainable. Even jQuery does not chain everything. Have you ever tried to chain a method after
`$(‘selector’).width()`? It bombs because it returns a value not a reference to a DOM element,
which makes complete sense. I beg of you, please do not unnecessarily succumb to the chaining
argument.

5. Is the command pattern the correct API for your code? Please tell me another
library/module that uses this pattern for its first class API. The pattern maybe be used within
libraries, I use it myself, but I have never seen a library in which you call a first class method
in such a fashion.

I am sure some strong counter arguments could be made to the points above. I
am also certain that there are gaps in my analysis. However, I would like to end with this thought.
You can convert just about any DOM manipulation related code into a jQuery plugin, so why not create
a solid API first free from the blinders of that $.fn.* imposes? You are always free to wrap it as
jQuery plugin later. 

*To be continued...*

### About Jason Strimpel

Jason Strimpel is a Staff Software Engineer [@WalmartLabs](http://www.walmartlabs.com/) in Carlsbad, CA. 
Jason is a right picture, big brain developer. Jason is mostly harmless. In his free time he 
enjoys frequently losing board games to his wife, Lasca.
