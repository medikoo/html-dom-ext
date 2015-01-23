'use strict';

var object     = require('es5-ext/object/valid-object')
  , anchor     = require('dom-ext/html-anchor-element/valid-html-anchor-element')
  , isExternal = require('../../lib/is-external');

module.exports = function (location) {
	return isExternal(object(location), anchor(this), this);
};
