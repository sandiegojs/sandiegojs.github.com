---
layout: post
title: "Coffeescript list comprehensions vs Undescore.js"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Since Coffeescript is 100% compatible with Javascript libraries it is 
possible to use the JS libraries that you know and love like [Jquery](http://jquery.org) and
[Underscore.js](http://underscorejs.org). However, some of the popular 
functional programming methods in Underscore.js and JQuery can also be 
done using CoffeeScript's list comprehensions. 

Here are three brief examples using Underscore's functional
programming methods and the equivalent CoffeeScript. I have generalized them from our codebase to protect the guilty:


### 1. The Map Method

```coffeescript
elves = _.chain(array_of_attributes)
  .map((attributes) -> new Elf(attributes))
  .value()
```

can be rewritten as


```coffeescript
elves = new Elf(attributes) for attributes in array_of_attibutes
```

### 2. The Filter Method
```coffeescript
elves = _.chain(array_of_attributes).
  .filter((attributes) ->
    attributes.height < 4 
  .map(attributes) ->
    new Elf(attributes) 
  value()
```

can be rewritten as

```coffeescript
elves = for attributes in array_of_attibutes when attributes.height < 4
  new Elf(attributes)
```

### 3. The Contains Method
```coffeescript
is_hobbit_there = _.contains(['elf', 'hobbit', 'magi'], 'hobbit')
```

can be rewritten as

```coffeescript
is_hobbit_there = 'hobbit' in ['elf', 'hobbit', 'magi']
```


### Finally 
There are some performances considerations when using CoffeeScript list
comprehensions. Read about them at [Beware of CoffeeScript
Comprehensions](http://awardwinningfjords.com/2012/05/08/beware-coffeescript-comprehensions.html)

Another awesome reference if you are learning CoffeeScript is [The Little Book on CoffeeScript](http://arcturo.github.com/library/coffeescript/index.html)



## About Kevin English
Kevin English is a San Diego based Ruby/Javascript developer. He
currently works with [Nulu](http://nulu.com) and you can check out his [github](http://github.com/kenglishhi)

