---
layout: page
title: The Jobs Page
tagline: Where Opportunity and Talent Intersect
description: JavaScript job opportunities and resumes posted by our members.
---
{% include JB/setup %}

Need help with a job posting? [Email the SanDiego.js Organizers Group](mailto:sandiegojs-organizers@googlegroups.com) with the posting information. One of us will take care of posting the job description for a small donation to our beer fund! (suggested donation of $25)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="U5U2LC55686LG">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


##Jobs
{% assign job_count = 0 %}
{% assign talent_count = 0 %}
{% for post in site.categories.jobs %}
   {% capture job_count %} {{ job_count | plus: 1 }} {% endcapture %}
{% endfor %}

{% for post in site.categories.talent %}
   {% capture talent_count %} {{ talent_count | plus: 1 }} {% endcapture %}
{% endfor %}

<ul class="posts">
{% case job_count %}
{% when 0 %}
	<li>No jobs posted.</li>
{% else %}
	{% for post in site.posts %}
    	{% if post.categories contains 'jobs' %}
        	<li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> (posted: {{ post.date | date: "%m/%d/%Y" }})</li>
    	{% endif %}
	{% endfor %}
{% endcase %}
</ul>

##Talent

<ul class="posts">
{% case talent_count %}
{% when 0 %}
	<li>No talent posted.</li>
{% else %}
	{% for post in site.posts %}
	    {% if post.categories contains 'talent' %}
	        <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> (posted: {{ post.date | date: "%m/%d/%Y" }})</li>
	    {% endif %}
	{% endfor %}
{% endcase %}	
</ul>
<hr />

##How to Post

Check out 'How to submit a blog' on the <a href="github.html">How to Contribute</a> page. 'Job' and 'Talent' postings are simple blog posts with the category set to "job" or "talent".

>[Example Job Page](examples/2013-12-10-job-example.html) | [Job Template](examples/2013-12-10-job-template.md)

>[Example Talent Page](examples/2013-12-10-talent-example.html) | [Talent Template](examples/2013-12-10-talent-template.md)
	