'use strict';

module.exports = function (t, a) {
	var element;
	a.throws(function () { t({}); }, TypeError);
	if (typeof document === 'undefined') return;
	element = document.createElement('button');
	a(t(element), element);
};
