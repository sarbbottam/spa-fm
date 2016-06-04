spa-fm: Single Page Application - Focus Management
---

Safari & VoiceOver combination in El Capitan seems to intelligently setting the focus to web page.
The focus jumps automatically between updated content and the existing content in SPA.

For detailed context, please refer [github.com/ember-a11y/ember-a11y/issue - focus jumping](https://github.com/ember-a11y/ember-a11y/issues/2).

I created a stripped down version of the [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/), at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/)
However, I could not reproduce the focus jumping issue at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/).

The dynamic content management strategy at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/). is different from [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/).

My guess, the **focus jumping behavior** mentioned at [github.com/ember-a11y/ember-a11y/issues/2](https://github.com/ember-a11y/ember-a11y/issues/2). behavior seems to be related to `window.location.hash`.

---

There are two implementation of [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/) in this repo,
both the implementations are in [Vanilla JavaScript](http://vanilla-js.com/), with out using any framework.

* [hash-change](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/hash-change)
* [data-ref](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/data-ref)

To see the implementation in action, please visit
* hash-change - http://sarbbottam.github.io/spa-fm/?type=hash-change
* data-ref http://sarbbottam.github.io/spa-fm/?type=data-ref

Please note the `query-param`, `type=hash-change` and `type=data-ref`. Without any `query-param`, it will default to `hash-change` behavior.

## Why there is no jumping focus in `data-ref` implementation in Safari & VoiceOver combination in El Capitan?

My guess, Safari & VoiceOver combination in El Capitan, is trying to set focus intelligently by referring the current URL and the `hash` fragment.

## Want to play around?

>Prerequisites
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/), will be installed by default with [node](https://nodejs.org/en/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- clone the repository `git clone git@github.com:sarbbottam/spa-fm.git`
- `cd` into the cloned directory `cd spa-fm`
- install dependencies `npm i`
- build the implemetations `npm run build`
- open index.html
- pass `query-param` `type=hash-change` or `type=data-ref` or `type=data-ref-hash-change` to the url of the index.html, default is `hash-change` behavior.
- make changes, reload the page
