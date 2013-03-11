---
layout: post
category : blog
tags : [grunt, grunt-contrib-jasmine, istanbul, jasmine]
title : JavaScript unit testing on steroids
tagline : Automation and code coverage with grunt, jasmine, and istanbul
author : jsoverson
---

{% include JB/setup %}

I started writing this post expecting it to span multiple pages and need nights of editing,
but this has gotten so easy now that this topic needs little more than a bullet point list. This is such a fun
time to be working with JavaScript.

### 1. [Install grunt](http://gruntjs.com/)

You should really read the getting started guide linked above but, if you're impatient, this should get you started.

```bash
$ sudo npm install -g grunt-cli
$ npm install --save-dev grunt
```

### 2. [Install grunt-contrib-jasmine](http://github.com/gruntjs/grunt-contrib-jasmine/)

```bash
$ npm install --save-dev grunt-contrib-jasmine
```

### 3. [Install grunt-template-jasmine-istanbul](https://github.com/maenu/grunt-template-jasmine-istanbul)

```bash
$ npm install --save-dev grunt-template-jasmine-istanbul
```

### 4. Configure grunt

If you're new to grunt, then the configuration below is all you need to get started.
If you're familiar with it and have your own setup then you'll know what parts are important.

The file paths can be configured to your liking. I'm using grunt-contrib-jasmine's [example project](https://github.com/jsoverson/grunt-contrib-jasmine-example)
 which you can use too to see this happen in your own environment. Just replace the `Gruntfile.js` contents with
 the configuration below.

```js
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js',
        template : require('grunt-template-jasmine-istanbul'),
        templateOptions: {
          coverage: 'reports/coverage.json',
          report: 'reports/coverage'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine']);
};
```

### 5. Get excited

Because you're done.

### 6. Run grunt

```bash
$ grunt
Running "jasmine:src" (jasmine) task
Testing jasmine specs via phantom
.....
5 specs in 0.037s.
>> 0 failures

Done, without errors.
```

Now you'll have coverage report lovingly stored in the `reports/coverage` directory awaiting your perusal.

[<img src="{{ASSET_PATH}}/img/posts/grunt-jasmine-istanbul.png">]({{ASSET_PATH}}/img/posts/grunt-jasmine-istanbul.png)

### 7. Whaaaat?

I know, I'm surprised, too (and I wrote some of the tooling).

To run down what you've got if you followed these steps, you have:

1. A start to a task chain with grunt
2. Headless browser testing via phantomjs
3. Code coverage reporting through istanbul
4. All on the jasmine setup you know, love, and possibly already use

If the simplicity wasn't enough, the added benefit of incorporating these tools into your workflow can be
astronomical. Having grunt be a part of your build or testing process will enable you to wire in
automated tasks to
[lint your code](http://github.com/gruntjs/grunt-contrib-jshint),
[generate complexity reports](http://github.com/jsoverson/grunt-plato),
[concatenate](http://github.com/gruntjs/grunt-contrib-concat) and
[minify](http://github.com/gruntjs/grunt-contrib-uglify) your javascript,
[preprocess](http://github.com/gruntjs/grunt-contrib-sass) your stylesheets,
and [loads more](http://gruntjs.com/plugins). Using phantom, you could also use [casperjs](http://casperjs.org/) via
[grunt-casper](https://github.com/iamchrismiller/grunt-casper)
to automatically run headless integration tests.

The possiblities are staggering and combining the work that everyone has already put forth allows for insanely
powerful combinations like above in a ridiculously simple setup.

Have fun, [write a plugin](https://github.com/gruntjs/grunt-init-gruntplugin)!

## About Jarrod Overson

Jarrod Overson is a self professed web addict who loves the numbers, silly green checkmarks, and positive reinforcement that
unit tests provide. You can find him developing at [OneHealth](http://github.com/onehealth),
twiddling bits on [github](http://github.com/jsoverson), and writing at [jarrodoverson.com](http://jarrodoverson.com).
