spa-fm: Single Page Application - Focus Management
---

## Safari & VoiceOver combination in El Capitan

Safari & VoiceOver combination in El Capitan seems to intelligently setting the focus to web page.
The focus jumps automatically between updated content and the existing content in SPA.

For detailed context, please refer [github.com/ember-a11y/ember-a11y/issue - focus jumping](https://github.com/ember-a11y/ember-a11y/issues/2).

I created a stripped down version of the [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/), at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/)
However, I could not reproduce the focus jumping issue at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/).

The dynamic content management strategy at [SPA: Focus Management - CodePen](http://codepen.io/sarbbottam/full/OXPwdQ/). is different from [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/).

My guess, the **focus jumping behavior** mentioned at [github.com/ember-a11y/ember-a11y/issues/2](https://github.com/ember-a11y/ember-a11y/issues/2). behavior seems to be related to `window.location.hash`.

---

### Implementation

There are three implementations of [github.com/ember-a11y/ember-a11y/ - demo](http://ember-a11y.github.io/ember-a11y/) in this repo,
all the implementations are in [Vanilla JavaScript](http://vanilla-js.com/), with out using any framework.

- [on-hash-change](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-hash-change) -
router looks for change in `window.location.hash` and updates the view
- [on-click-prevent-default](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default) -
router looks for `href` attribute in the clicked `link`, _prevents the default behavior_, and updates the view
- [on-click-prevent-default-change-hash](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default-change-hash) -
router looks for `href` attribute in the clicked `link`, _prevents the default behavior_, updates the view and `window.location.hash`
- [on-click-prevent-default-change-location](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default-change-location) -
router looks for `href` attribute in the clicked `link`, _prevents the default behavior_, updates the view and `window.history`

Please note the `query-param`
* `type=on-hash-change`
* `type=on-click-prevent-default`
* `type=on-click-prevent-default-change-hash`.
* `type=on-click-prevent-default-change-location`.

Without any `query-param`, it will default to `on-click-prevent-default-change-location` behavior.

### Observation

- [on-hash-change](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-hash-change) -
jumping focus behavior in Safari & VoiceOver combination in El Capitan
- [on-click-prevent-default](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default) -
**no jumping focus behavior in Safari & VoiceOver combination in El Capitan**
- [on-click-prevent-default-change-hash](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default-change-hash) -
jumping focus behavior in Safari & VoiceOver combination in El Capitan
- [on-click-prevent-default-change-location](https://github.com/sarbbottam/spa-fm/tree/master/lib/vanilla/on-click-prevent-default-change-location) -
**no jumping focus behavior in Safari & VoiceOver combination in El Capitan**

### Screencast

[![Jumping focus in Safari/El Capitan with Voice Over ](http://i.imgur.com/TUHX3GJ.png)](https://www.youtube.com/watch?v=hYIX24nA8qI)

### Why there is no jumping focus in `on-click-prevent-default` & `on-click-prevent-default-change-location` implementation in Safari & VoiceOver combination in El Capitan?

My guess, Safari & VoiceOver combination in El Capitan, is trying to set focus intelligently by referring the current URL and the `hash` fragment.

### Want to play around?

>Prerequisites
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/), will be installed by default with [node](https://nodejs.org/en/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- clone the repository `git clone git@github.com:sarbbottam/spa-fm.git`
- `cd` into the cloned directory `cd spa-fm`
- install dependencies `npm i`
- build the implementations `npm run build`
- run webpack-dev-server - `npm start`
- pass `query-param` `type=on-hash-change` or `type=on-click-prevent-default` or `type=on-click-prevent-default-change-hash` to the url of the index.html, default is `on-hash-change` behavior.
- make changes, reload the page

## NVDA and focus management

### Observation

In either of the implementation, when line item links in message-list is activated, everything is as desired, other than NVDA does not announce the updated content.
Same is true for when 'Back to message list' link, the container is updated with new content, and the container receives focus.
However the content is not announced.

My guess, when the container of the activated link is updated, NVDA does not readout the content.
Please refer [this CodePen](http://codepen.io/sarbbottam/full/yJeQLa/).

```html
<div id="app">
  <a href="#foo">foo</a>
  <a href="#bar">bar</a>
  <a href="#baz">baz</a>
  <div id="outlet" tabindex="-1">
    loaded foo
    <a href="#bar">load bar</a>
    <a href="#baz">load baz</a>
  </div>
</div>
```

When the links outside `outlet` container is activated, outlet container is updated and focused, and NVDA reads out the content of `outlet` container.
However, when the links within the `outlet` container is activated, outlet container is updated and focused, but NVDA does not readout the content of `outlet` container.
