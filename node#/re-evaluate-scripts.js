// Re-evaluate scripts found in DOM
// Main use case is to run it on DOM nodes for which content was injected via innerHTML
// (as in such case browsers intercepts evaluation of injected scripts)

'use strict';

var aFrom            = require('es5-ext/array/from')
  , ensureParentNode = require('dom-ext/parent-node/ensure')

  , forEach = Array.prototype.forEach, push = Array.prototype.push;

var reload = function (oldScript) {
	var nuScript = oldScript.ownerDocument.createElement('script');
	forEach.call(oldScript.attributes, function (attr) {
		nuScript.setAttribute(attr.name, attr.value);
	});
	forEach.call(oldScript.childNodes, function (node) {
		nuScript.appendChild(node.cloneNode(true));
	});
	oldScript.parentNode.insertBefore(nuScript, oldScript);
	oldScript.parentNode.removeChild(oldScript);
};

var getScripts = function (node) {
	if (node.getElementsByTagName) return aFrom(node.getElementsByTagName('script'));
	var result = [];
	forEach.call(node.childNodes, function (node) {
		if (node.nodeType !== 1) return;
		if (node.nodeName.toLowerCase() === 'script') result.push(node);
		else push.apply(result, getScripts(node));
	});
	return result;
};

module.exports = exports = function (node) { getScripts(ensureParentNode(node)).forEach(reload); };
