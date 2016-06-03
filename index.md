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
      Every first Tuesday is our official meetup where we get together at <a href="http://zeeto.io//">Zeeto</a>* for presentations from the community and then chat at a local bar. Talks generally range from 5 minute lightning talks to 45 minute full-length and are of any web or JavaScript related topic.<br><br>
      * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
    </p>
  </div>
  <div class="span6">
    <h4>Every Second Wednesday</h4>
    <p>
      Every second Wednesday is our official Ember meetup where we get together primarily at <a href="https://www.learnacademy.org/">LEARN Academy</a>* for presentations, workshops, or casual discussion. <br><br>
      * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
    </p>
  </div>
</div><br><br>

<div class="row">
  <div class="span6">
    <h4>Every Third Tuesday</h4>
    <p>
      Every third Tuesday is our informal BYOP (Bring Your Own Project) Night at <a href="https://devbootcamp.com/">Dev Bootcamp</a> where we get together for food, drink, chats, and codes. Members of all skill levels are welcome and it's a good time for questions and discussion. If you have a particular topic, post on the <a href="http://www.meetup.com/sandiegojs/">meetup board</a> to gain interest. <br><br>
      * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
    </p>
  </div>
  <div class="span6">
    <h4>Every Third Thursday</h4>
    <p>
      Every third Thursday is our Node.js Social Hour where we get together at <a href="http://www.zesty.io/">Zesty.io</a> downtown. This is an informal hangout so feel free to stop by bring your laptop have a cold beverage and chat about problems or solutions you're dealing with in Node.<br><br>
      * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue
    </p>
  </div>
</div><br><br>

<div class="row">
  <div class="span8 offset2">
    <iframe src="https://www.google.com/maps/d/embed?mid=1cXpBF27EjERp_kyt1UCX0K-Ucwk" width="640" height="480"></iframe>
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
  <div class="row">
    <div class="span4">
      <a href="https://www.accelebrate.com/training/reactjs-es6">
        <img src="{{ASSET_PATH}}/img/sponsors/accelebrate.jpg" alt="Accelebrate" class="logo logo-accelebrate"></a>
    </div>
    <div class="span4">
      <a href="//integratedassociatesinc.com">
        <img src="/assets/themes/twitter/img/sponsors/integrated-associates.jpg" alt="Integrated Associates" class="logo logo-integrated-associates"></a>
    </div>
  </div>
</div>

[meetup]: http://www.meetup.com/sandiegojs/ "Meetup.com page"
[github]: https://github.com/sandiegojs/sandiegojs.github.com "Sandiego.js Github site"
[issues]: https://github.com/sandiegojs/sandiegojs.github.com/issues "Sandiego.js issue tracker"
[3rdspace]: http://3rdspace.co/ "3rdSpace"
