---
layout: page
title: San Diego JavaScript Users Group
description: San Diego's JavaScript users group featuring events, meet-ups, education, support and job postings.
---
{% include JB/setup %}

<h2 class="center"> Join us every month!</h2>

<div class="row">
  <div class="span6">
    <h4>Every First Tuesday</h4>
    <p>
      Every first Tuesday is our official meetup where we get together at <a href="https://www.commnexus.org/incubator/">EvoNexus</a>* for presentations from the community and then chat at a local bar. Talks generally range from 30 to 90 minutes and are of any web or JavaScript related topic.<br><br>
      * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
    </p>
  </div>
  <div class="span6">
    <h4>Every Second Wednesday</h4>
    <p>
      Every second Wednesday is our official Ember meetup where we get together primarily at <a href="https://www.commnexus.org/incubator/">EvoNexus</a>* for presentations, workshops, or casual discussion. We then carry our conversations to a local bar for some drinks. <br><br>
      * sometimes this won't be on Wednesday, or at EvoNexus so <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
    </p>
  </div>
</div><br><br>

<div class="row">
  <div class="span6">
    <h4>Every Third Tuesday</h4>
    <p>
      Every third Tuesday is our informal Hacknight at <a href="https://www.fanpics.com/">Fanpics</a> where we get together for beer, pizza, chat, and code. Members of all skill levels are welcome and it's a good time for questions and discussion. If you have a particular topic, post on the <a href="http://www.meetup.com/sandiegojs/">meetup board</a> to gain interest.<br><br>
      Check out <a href="{{BASE_PATH}}/hacknight.html">this page</a> for more info on <b>parking</b>!
    </p>
  </div>
  <div class="span6">
    <h4>Every Fourth Tuesday</h4>
    <p>
      Every fourth Tuesday is our North County meetup where we get together at <a href="http://www.walmartlabs.com/">WalmartLabs</a> in Carlsbad for a Javascript related talk and then head over to Pizza Port Bressi Ranch for continued socializing.<br><br>
      Check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and check out the topic for this month.
    </p>
  </div>
</div><br><br>

<div class="row">
  <div class="span8 offset2">
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=zlaLaBtLkfdE.kol3M-fO9JAA" width="640" height="480" frameborder="0" style="border:0;"></iframe>
  </div>
</div>

<div class="page-divider"></div>

<div class="row">
  <div class="span8">
    <h2>Recent Community Posts</h2>
    <ul class="posts">
      {% for post in site.posts limit:5 %}
      {% assign author = site.authors[post.author] %}
      <li>
      <div>
        <a href="{{ BASE_PATH }}{{ post.url }}"><h4>{{ post.title }}
          <small> - {{ post.date | date_to_string }} by {% if author %}{{author.name}}{% else %}{% if post.author %}{{post.author}}{%else%}sandiego.js{%endif%}{% endif %}</small>
          </h4>
        </a>
        <div class="post-content">
          <p>{{ post.content | strip_html | truncatewords:75}}</p>
        </div>
      </div>
      </li>
      {% endfor %}
    </ul>
  </div>
  <div class="span4">
    <div class="well">
      <h4>Fancy yourself a writer?</h4>
      <p>
        Anyone can submit a blog or article!
      </p>
      <p>
        You submit articles to sandiego.js through github just as you would any other open source project.
      </p>
      <p>
        <a href="github.html">Learn How!</a>
      </p>
    </div>
  </div>
</div>

<div class="page-divider"></div>

### Sponsored and supported by

<div class="b-sponsors">
  <div class="row">    +<!-- </div> -->
    <div class="span4">
      <a href="https://www.accelebrate.com/training/reactjs-es6">
        <img src="{{ASSET_PATH}}/img/sponsors/accelebrate.jpg" alt="Accelebrate" class="logo logo-accelebrate"></a>
    </div>
  </div>
</div>

[meetup]: http://www.meetup.com/sandiegojs/ "Meetup.com page"
[github]: https://github.com/sandiegojs/sandiegojs.github.com "Sandiego.js Github site"
[issues]: https://github.com/sandiegojs/sandiegojs.github.com/issues "Sandiego.js issue tracker"
[3rdspace]: http://3rdspace.co/ "3rdSpace"
