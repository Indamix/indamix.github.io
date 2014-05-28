---
layout: post
title:  "React-CommonJS"
tags: github CommonJS React JSX
---

[GitHub repo](https://github.com/Indamix/React-CommonJS)

In-browser CommonJS loader supporting React JSX syntax

React-CommonJS
==============

In-browser CommonJS loader supporting React JSX syntax

**No need to compile modules!** (for development)

## Installation

Download [react-common.js](https://raw.github.com/Indamix/React-CommonJS/master/react-common.js) to your project or use Bower:

```
bower install react-commonjs
```

If React-CommonJS was installed via Bower, you don't need to download React itself as it has been already installed as a dependency.

## Usage

Add ```react-common.js``` to ```index.html``` and specify the path to the main (entry) module as ```data-main``` property:
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <div id="container"></div>
    <script src="bower_components/react-commonjs/react-common.js" data-main="js/main.js"></script>
</body>
</html>
{% endhighlight %}

Your main module (```main.js``` in this example) can have the JSX syntax, as well as any module it requires:

{% highlight javascript %}
/** @jsx React.DOM */

var List = require('list');

var description = [
  'In-browser CommonJS loader supporting React JSX syntax',
  'No need to compile modules (for development)'
];

React.renderComponent(
  <div>
    <h2>Description</h2>
    <List items={description}/>
  </div>,
  document.getElementById('container')
);
{% endhighlight %}

Consider the [example](https://github.com/Indamix/React-CommonJS/tree/master/example).

Start a webserver (if you haven't started it yet), for example:

```
python -m SimpleHTTPServer
```

And visit [0.0.0.0:8000](http://0.0.0.0:8000)


Do not forget to put ```/** @jsx React.DOM */``` as the first comment for files with JSX syntax.