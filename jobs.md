---
layout: page
title: The Jobs Page
tagline: Where Opportunity and Talent Intersect
---
{% include JB/setup %}

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
	
If you're not familiar with how to post, or just don't have time for all that right now, you can just [send me a completed job or talent template](mailto:jeffery.brewer@gmail.com) and I'll submit it when I get a chance. 