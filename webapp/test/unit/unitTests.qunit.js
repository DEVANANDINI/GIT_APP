/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Com/GITHUB/GIT_APP/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});