---
title: "Home"
layout: gridlay
excerpt: "Shuguang Dou"
sitemap: false
permalink: /friends.html
---

# News

{% for article in site.data.friends %}
<p>{{ article.name }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
