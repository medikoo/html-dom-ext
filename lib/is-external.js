'use strict';

var hasExternal = RegExp.prototype.test.bind(/(^|\s)external(\s|$)/);

module.exports = function (currentLocation, targetLocation, target) {
	if (target.getAttribute('target') === '_blank') return true;
	if (hasExternal(target.getAttribute('rel'))) return true;
	if (targetLocation.protocol && (targetLocation.protocol !== ':') &&
			(targetLocation.protocol !== currentLocation.protocol)) {
		return true;
	}
	if (targetLocation.host && (targetLocation.host !== currentLocation.host)) return true;
	return false;
};
