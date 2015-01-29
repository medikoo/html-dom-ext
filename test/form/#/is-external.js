'use strict';

var location = require('../../__playground/get-location')();

module.exports = function (t, a) {
	var form = document.createElement('form');
	form.action = location.href;
	a(t.call(form, location), false);
	form.setAttribute('target', '_blank');
	a(t.call(form, location), true);
	form.removeAttribute('target');
	a(t.call(form, location), false);
	form.setAttribute('rel', 'nofollow external');
	a(t.call(form, location), true);
	form.removeAttribute('rel');
	a(t.call(form, location), false);
	form.action = 'https://onejs.org';
	a(t.call(form, location), true);
	form.action = 'http://onejs.org';
	a(t.call(form, location), true);
};
