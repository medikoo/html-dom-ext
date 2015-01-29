'use strict';

var location = require('../../__playground/get-location')();

module.exports = function (t, a) {
	var ahref = document.createElement('a');
	ahref.href = location.href;
	a(t.call(ahref, location), false);
	ahref.setAttribute('target', '_blank');
	a(t.call(ahref, location), true);
	ahref.removeAttribute('target');
	a(t.call(ahref, location), false);
	ahref.setAttribute('rel', 'nofollow external');
	a(t.call(ahref, location), true);
	ahref.removeAttribute('rel');
	a(t.call(ahref, location), false);
	ahref.href = 'https://onejs.org';
	a(t.call(ahref, location), true);
	ahref.href = 'http://onejs.org';
	a(t.call(ahref, location), true);
};
