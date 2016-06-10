(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["on-click-prevent-default-change-location"] = factory();
	else
		root["on-click-prevent-default-change-location"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _require = __webpack_require__(1);
	
	var renderer = _require.renderer;
	var routes = _require.routes;
	
	
	function router(e) {
	  var target = e && e.target;
	  if (target && target.tagName.toLowerCase() === 'a') {
	    e.preventDefault();
	    e.stopPropagation();
	    var href = target.getAttribute('href').substr(1);
	    window.history.pushState({}, '', window.location.pathname.replace(/\/.*/, '/' + href));
	    var resources = href.split('/');
	    var route = resources.shift();
	    if (route && routes[route]) {
	      renderer(route, resources);
	    } else {
	      renderer('home');
	    }
	  } else {
	    renderer('home');
	  }
	}
	
	document.addEventListener('click', router);
	
	router();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var app = __webpack_require__(2);
	
	var routes = {
	  home: __webpack_require__(4),
	  messages: __webpack_require__(5),
	  feed: __webpack_require__(7),
	  profile: __webpack_require__(8)
	};
	
	document.getElementById('app').innerHTML = app();
	
	var node = void 0;
	function renderer(route, resources) {
	  if (node) {
	    node.removeAttribute('tabindex');
	  }
	
	  var _routes$route = routes[route](resources);
	
	  var nodeId = _routes$route.nodeId;
	  var innerHTML = _routes$route.innerHTML;
	
	  node = document.getElementById(nodeId);
	  if (node) {
	    node.setAttribute('tabindex', '-1');
	    node.innerHTML = '';
	    node.innerHTML = innerHTML;
	    node.focus();
	  } else {
	    renderer(route);
	    renderer(route, resources);
	  }
	}
	
	module.exports = {
	  renderer: renderer,
	  routes: routes
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nav = __webpack_require__(3);
	
	function template() {
	  return '\n    <h1>Social Network Lite</h1>\n    ' + nav() + '\n    <div id="outlet"></div>\n  ';
	}
	
	module.exports = template;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var links = [{
	  href: 'home',
	  text: 'Home'
	}, {
	  href: 'messages',
	  text: 'Messages'
	}, {
	  href: 'feed',
	  text: 'Feed'
	}, {
	  href: 'profile',
	  text: 'Profile'
	}];
	
	function navs() {
	  return links.map(function (link) {
	    return '<li><a href="#' + link.href + '">' + link.text + '</a></li>';
	  }).join('');
	}
	
	function template() {
	  return '\n    <nav>\n      <ul>\n        ' + navs() + '\n      </ul>\n    </nav>\n  ';
	}
	
	module.exports = template;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	function home() {
	  return '\n    <h2>\n      Home\n    </h2>\n  ';
	}
	
	function template() {
	  return {
	    nodeId: 'outlet',
	    innerHTML: '\n      ' + home() + '\n    '
	  };
	}
	
	module.exports = template;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var message = __webpack_require__(6);
	
	var links = [{
	  href: 'messages/jimmy',
	  text: 'Conversation with Jimmy'
	}, {
	  href: 'messages/johnny',
	  text: 'Conversation with Johnny'
	}, {
	  href: 'messages/jeff',
	  text: 'Conversation with Jeff'
	}];
	
	function messageList() {
	  return links.map(function (link) {
	    return '<li><a href="#' + link.href + '">' + link.text + '</a></li>';
	  }).join('');
	}
	
	function messages(resources) {
	  if (resources && resources.length) {
	    return {
	      nodeId: 'outlet-message',
	      innerHTML: message(resources)
	    };
	  }
	  return {
	    nodeId: 'outlet',
	    innerHTML: '\n    <h2>\n      Messages\n    </h2>\n    <div id="outlet-message">\n      <h3>\n        Conversations\n      </h3>\n      <ul>\n        ' + messageList() + '\n      </ul>\n    </div>'
	  };
	}
	
	function template(resources) {
	  return messages(resources);
	}
	
	module.exports = template;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var messagesHash = {
	  jimmy: {
	    name: 'Jimmy',
	    messages: ['This is a message content', 'This is a message content', 'This is a message content']
	  },
	  johnny: {
	    name: 'Johnny',
	    messages: ['This is a message content', 'This is a message content', 'This is a message content']
	  },
	  jeff: {
	    name: 'Jeff',
	    messages: ['This is a message content', 'This is a message content', 'This is a message content']
	  }
	};
	
	function list(messages) {
	  return messages.map(function (message) {
	    return '<li>' + message + '</li>';
	  }).join('');
	}
	
	function message(sender) {
	  return '\n    <h3>\n      Thread with ' + messagesHash[sender].name + '\n    </h3>\n    <a href="#messages">Back to message list.</a>\n    <ul>\n      ' + list(messagesHash[sender].messages) + '\n    </ul>\n  ';
	}
	
	function template(resources) {
	  return message(resources[0]);
	}
	
	module.exports = template;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var lists = ['This is a feed item.', 'This is a feed item.', 'This is a feed item.'];
	
	function feeds() {
	  return lists.map(function (list) {
	    return '<li>' + list + '</li>';
	  }).join('');
	}
	
	function feed() {
	  return '\n    <h2>\n      Feed\n    </h2>\n    ' + feeds() + '\n  ';
	}
	
	function template() {
	  return {
	    nodeId: 'outlet',
	    innerHTML: '\n      ' + feed() + '\n    '
	  };
	}
	
	module.exports = template;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	var person = {
	  name: 'John Doe',
	  title: 'John Doe is a developer at BigCo',
	  company: 'BigCo',
	  details: ['this is a detail about John Doe', 'this is a detail about John Doe', 'this is a detail about John Doe'],
	  edudation: 'John Doe is well educated.',
	  skills: 'John Doe has no skills.'
	};
	
	function summary() {
	  return person.details.map(function (detail) {
	    return '<li>' + detail + '</li>';
	  }).join('');
	}
	
	function profile() {
	  return '\n    <h2>\n      ' + person.name + '\n    </h2>\n    <h3>Summary</h3>\n    <ul>\n      ' + summary() + '\n    </ul>\n    <h3>Education</h3>\n    ' + person.edudation + '\n    <h3>Skills</h3>\n    ' + person.skills + '\n    </ul>\n  ';
	}
	
	function template() {
	  return {
	    nodeId: 'outlet',
	    innerHTML: '\n      ' + profile() + '\n    '
	  };
	}
	
	module.exports = template;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=on-click-prevent-default-change-location.js.map