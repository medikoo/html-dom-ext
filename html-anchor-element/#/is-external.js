'use strict';

var anchor     = require('dom-ext/html-anchor-element/valid-html-anchor-element')
  , isExternal = require('../../lib/is-external');

module.exports = function (location) {
	return isExternal(location, anchor(this), this);
};
