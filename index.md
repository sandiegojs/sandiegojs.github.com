---
layout: page
---
{% include JB/setup %}

<h2 class="center"> Join us every month!</h2>

<div class="row">
  <div class="span6">
  <h4>Every First Tuesday</h4>
  <p>
  Every first Tuesday is our official meetup where we get together at <a href="https://www.commnexus.org/incubator/">EvoNexus</a>* for
  presentations from the community and then chat at a local bar. Talks generally range
  from 30 to 90 minutes and are of any web or JavaScript related topic.<br><br>
  * <strong>always</strong> check <a href="http://www.meetup.com/sandiegojs/">meetup.com</a> to rsvp and verify the venue!
  </p>
  </div>
  <div class="span6">
  <h4>Every Third Tuesday</h4>
  <p>
  Every third Tuesday is our informal Hacknight at <a href="https://www.fanpics.com/">Fanpics</a> where we get together for beer, pizza, chat,
  and code. Members of all skill levels are welcome and it's a good time for questions
  and discussion. If you have a particular topic, post on the <a href="http://www.meetup.com/sandiegojs/">meetup board</a> to gain interest.<br><br>
  Check out <a href="{{BASE_PATH}}/hacknight.html">this page</a> for more info on <b>parking</b>!
  </p>
  </div>
</div>

<div class="row">
  <div class="span6">
   <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.903190390947!2d-117.16459374999997!3d32.715200099999954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954a8332298fb%3A0x6cc354fb420c0140!2sEvoNexus+Downtown+Incubator!5e0!3m2!1sen!2sus!4v1393870861070" style="color:#0000FF;text-align:left">ignore</iframe><br /><small><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.903190390947!2d-117.16459374999997!3d32.715200099999954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954a8332298fb%3A0x6cc354fb420c0140!2sEvoNexus+Downtown+Incubator!5e0!3m2!1sen!2sus!4v1393870861070" style="color:#0000FF;text-align:left" style="color:#0000FF;text-align:left">View Larger Map</a></small>
  </div>
  <div class="span6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3355.905228814077!2d-117.1836484!3d32.741707100000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deab2fc24b6337%3A0x2a9f5ed8e91c0508!2s2150+Washington+St!5e0!3m2!1sen!2sus!4v1401393363679" width="100%" height="250" frameborder="0" style="border:0"></iframe><br /><small><a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3355.905228814077!2d-117.1836484!3d32.741707100000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deab2fc24b6337%3A0x2a9f5ed8e91c0508!2s2150+Washington+St!5e0!3m2!1sen!2sus!4v1401393363679">View Larger Map</a></small>
  </div>
</div>

<hr>

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

<hr>

### Sponsored and supported by

<div class="b-sponsors">
  <div class="row">
    <div class="span4">
      <a href="http://www.walmartlabs.com/"><img src="{{ASSET_PATH}}/img/brands/walmartlabs.png" alt="@WalmartLabs" class="logo logo-walmartlabs"></a>
    </div>
    <div class="span4">
      <a href="http://github.com/onehealth/"><img src="{{ASSET_PATH}}/img/brands/fashioningchange.png" alt="OneHealth" class="logo logo-fc"></a>
    </div>
    <div class="span4">
      <!--<a href="http://3rdspace.co/"><img src="{{ASSET_PATH}}/img/brands/3rdspace.png" alt="3rdSpace" class="logo logo-3rdspace"></a>-->
      <a href="http://jetbrains.com/"><img src="{{ASSET_PATH}}/img/brands/jetbrains.gif" alt="JetBrains" class="logo logo-jetbrains"></a>
    </div>
  </div>
  <div class="row">
    <div class="span4">&nbsp;</div>
    <div class="span4">
      <a href="http://geekgirlcamp.com/"><img src="{{ASSET_PATH}}/img/brands/geekgirl.png" alt="Geek Girl" class="logo"></a>
    </div>
    <div class="span4">&nbsp;</div>
  </div>
</div>

[meetup]: http://www.meetup.com/sandiegojs/ "Meetup.com page"
[github]: https://github.com/sandiegojs/sandiegojs.github.com "Sandiego.js Github site"
[issues]: https://github.com/sandiegojs/sandiegojs.github.com/issues "Sandiego.js issue tracker"
[3rdspace]: http://3rdspace.co/ "3rdSpace"
