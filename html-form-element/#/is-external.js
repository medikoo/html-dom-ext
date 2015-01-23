'use strict';

var object     = require('es5-ext/object/valid-object')
  , memoize    = require('memoizee/plain')
  , htmlForm   = require('dom-ext/html-form-element/valid-html-form-element')
  , isExternal = require('../../lib/is-external');

var getAhref = memoize(function (document) {
	return document.createElement('a');
}, { length: 0 });

module.exports = function (location) {
	var ahref = getAhref(htmlForm(this).ownerDocument);
	ahref.href = this.getAttribute('action');
	return isExternal(object(location), ahref, this);
};
