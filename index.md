---
layout: page
---
{% include JB/setup %}

<h2 class="center"> Join us every month!</h2>

<div class="row">
  <div class="span6">
<iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=3rdspace&amp;hl=en&amp;sll=32.824552,-117.108978&amp;sspn=0.956677,1.783905&amp;hq=3rdspace&amp;t=m&amp;ie=UTF8&amp;hnear=&amp;ll=32.761366,-117.1452&amp;spn=0.014959,0.027874&amp;output=embed">ignore</iframe><br /><small><a href="https://maps.google.com/maps?q=3rdspace&amp;hl=en&amp;sll=32.824552,-117.108978&amp;sspn=0.956677,1.783905&amp;hq=3rdspace&amp;t=m&amp;ie=UTF8&amp;hnear=&amp;ll=32.761366,-117.1452&amp;spn=0.014959,0.027874&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small>
  </div>
  <div class="span6">
  <h4>Every First Tuesday</h4>
  <p>
  Every first Tuesday is our official meetup where we get together at <a href="http://3rdspace.co/">3rdSpace</a> for
  presentations from the community and then chat at a local bar. Talks generally range
  from 30 to 90 minutes and are of any web or JavaScript related topic.
  </p>
  <h4>Every Third Tuesday</h4>
  <p>
  Every third Tuesday is our informal Hacknight where we get together for beer, chat,
  and code. Members of all skill levels are welcome and it's a good time for questions
  and discussion. If you have a particular topic, post on the <a href="http://www.meetup.com/sandiegojs/">meetup board</a> to gain interest.
  </p>
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
          <small> - {{ post.date | date_to_string }} by {% if author %}{{author.name}}{% else %}{% if post.author %}{{post.author}}{%else%}by sandiego.js{%endif%}{% endif %}</small>
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
      <a href="http://geekgirlcamp.com/"><img src="{{ASSET_PATH}}/img/brands/geekgirl.png" alt="Geek Girl" class="logo"></a>
    </div>
    <div class="span4">
      <a href="http://github.com/onehealth/"><img src="{{ASSET_PATH}}/img/brands/onehealth.png" alt="OneHealth" class="logo logo-onehealth"></a>
    </div>
    <div class="span4">
      <!--<a href="http://3rdspace.co/"><img src="{{ASSET_PATH}}/img/brands/3rdspace.png" alt="3rdSpace" class="logo logo-3rdspace"></a>-->
      <a href="http://jetbrains.com/"><img src="{{ASSET_PATH}}/img/brands/jetbrains.gif" alt="JetBrains" class="logo logo-jetbrains"></a>
    </div>
  </div>
</div>

[meetup]: http://www.meetup.com/sandiegojs/ "Meetup.com page"
[github]: https://github.com/sandiegojs/sandiegojs.github.com "Sandiego.js Github site"
[issues]: https://github.com/sandiegojs/sandiegojs.github.com/issues "Sandiego.js issue tracker"
[3rdspace]: http://3rdspace.co/ "3rdSpace"