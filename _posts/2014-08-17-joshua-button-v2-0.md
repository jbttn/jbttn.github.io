---
layout: post
title: Joshua Button v2.0
categories: posts
---

I've been meaning to give my site a much needed update for some time and I've finally
gotten around to doing so this weekend.  I think it's
fitting that my first blog post deals with how I've gone about developing, configuring, and
deploying this new version.  Now begins my first foray into
[blogging like a hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html).

First, I'll list off some of the problems with the old version (which I'll call v1 from here on).

* There were a lot of unnecessary files committed to the repository.  The Bootstrap LESS source files are one such example of that.
Not only were they pushed to github, but they were also being compiled via the viewers browser using the LESS JavaScript library.
* My resume was its own separate HTML file which was not easily modifiable
* No good way to handle dependencies
* The design wasn't very good, both visually and functionally.

I decided to scrap everything and start fresh.  My first stops were to the [Bootstrap](http://getbootstrap.com/) and
[Jekyll](http://jekyllrb.com/) websites (because both projects are still *amazing*).  I learned that there was now native support
for [SASS](http://sass-lang.com/) built into Jekyll.  Bootstrap itself now has an official
SASS port as well. *Perfect*, the two together would be my solution to the [LESS](http://lesscss.org/) build problem.

While browsing the Bootstrap documentation I saw a mention of something new to me called...

# Bower

[Bower](http://bower.io/) bills itself as a "package manager for the web". Here is an excerpt from their website:

> Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading,
> and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json.
> How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows.

Using Bower, I am now able to install a dependency, for example jQuery, like so: `bower install jquery`.
The package is then stored in `/bower_components`.

***Neat***

I now have a better way to manage my front-end dependencies, I use this to install both jQuery
and the official Bootstrap SASS port.

# JSON Resume

When it came time to update the resume I decided to check out a project I heard about a while back called [JSON Resume](http://jsonresume.org/).
The idea is to have a standard [JSON Schema](http://json-schema.org/) for resumes defined so that the community can come together
and easily build themes.  This would allow you to quickly modify the appearance.  I liked the idea, so I gave it a shot.

When you break it down, it's just a schema and a [Handlebars](http://handlebarsjs.com/) template along with a CLI tool.
I liked it, but there were a couple of problems.

#### Problem 1

As of now there is no way to use the `resume-cli` utility on a theme stored locally, everything works through their
theme server.  This didn't really work for me as I had created a custom resume theme specific to myself and did
not wish to post it to their service (which is just NPM by the way).  I was able to write a [script](/resume/export.js)
which would generate a themed HTML resume locally, but that led me into another problem.

#### Problem 2

I would now need to be sure to run this export script whenever I updated my resume.  On top of that, I needed to be sure
that my dependencies installed with Bower could be copied over on a deploy.  This led me to the next tool I learned about
called...

# Grunt

[Grunt](http://gruntjs.com/) is a Javascript based task runner.  There are a bunch of [plugins](http://gruntjs.com/plugins)
which help make it easy to take care of any task our Jekyll site needs.
After reviewing the [documentation](http://gruntjs.com/getting-started),
I created a Gruntfile along with my required tasks.  These tasks include:

* Copying the minified version of jQuery from the Bower directory into my Jekyll assets directory
* Running my resume export script

Now with one simple command I am able to automate all of my required build tasks before I deploy.  I could
even make deployment a one command process with this tool.

# Conclusion

I'm very happy with how this turned out.  I now have a more solid base to build off of and everything looks
so *spiffy* and *clean*.  Compare it to the old version for yourself

![Version 1 of joshuabutton.com](/assets/img/v1.png)

![Version 1 of resume](/assets/img/v1_resume.png)
