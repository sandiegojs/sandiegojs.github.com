---
layout: page
title: Using Github to contribute to sandiego.js
description: Instruction on how members can contribute to the website using github.
---
{% include JB/setup %}

## How to submit a blog

If you are new to git and/or github, please consider reading the
[Fork a Repo](https://help.github.com/articles/fork-a-repo) guide from github.

If you are new to Jekyll, please skim the [Jekyll Docs](https://github.com/mojombo/jekyll)

1. Fork the [sandiegojs.github.com][] repository to your account
  > <img src="{{ASSET_PATH}}/img/gh-fork.png" class="thumbnail">
2. Create a new file in the `_posts` directory following the same style as the other posts (this is important!).
   If it is January 5th, 2013 and you wanted to name your post "Everything I love about closures", your file name would be
   `2013-01-05-everything-I-love-about-closures.md`
3. Use the [example post](./examples/2013-01-31-example-post.md) as a guide for the [YAML Front Matter](https://github.com/mojombo/jekyll/wiki/yaml-front-matter)
   (a fancy name for YAML configuration at the top of the file).
4. Commit your post, push to your local fork, and submit a pull request

"Whoa whoa whoa, what?" - If that's what is running through your head, it looks like you need to submit
 a presentation request on git and github or come to a hacknight!

[sandiegojs.github.com]: https://github.com/sandiegojs/sandiegojs.github.com "Sandiego.js Github site"
[issues]: https://github.com/sandiegojs/sandiegojs.github.com/issues "Sandiego.js issue tracker"
