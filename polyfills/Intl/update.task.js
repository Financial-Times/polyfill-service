/*
 * This module will copy all of the localisation language files from the Intl
 * module and install them within a folder in this directory named ~locale.
 *
 * The detect.js file used for Intl is copied into every ~locale polyfill for
 * use on detecting whether that locale needs to be polyfilled.
 *
 * The config.json file for each locale polyfill is based off of the one for
 * Intl. The changes made ot it are:
 *  - Removing the "install" section
 *  - Adding Intl as a dependency
 */

'use strict';

const fs = require('fs');
const path = require('path');
const LocalesPath = path.dirname(require.resolve('intl/locale-data/jsonp/en.js'));
const IntlPolyfillOutput = path.resolve('polyfills/Intl');
const LocalesPolyfillOutput = path.resolve('polyfills/Intl/~locale');
const crypto = require('crypto');
const existsSync = require('exists-sync');
const mkdirp = require('mkdirp');

function md5 (contents) {
	return crypto.createHash('md5').update(contents).digest('hex');
}

function writeFileIfChanged (filePath, newFile) {
	if (existsSync(filePath)) {
		const currentFile = fs.readFileSync(filePath);
		const currentFileHash = md5(currentFile);
		const newFileHash = md5(newFile);

		if (newFileHash !== currentFileHash) {
			fs.writeFileSync(filePath, newFile);
		}
  } else {
		fs.writeFileSync(filePath, newFile);
	}
}

// this is not really a grunt task, but a function that is suppose
// to be sync, and receive access to grunt instance for convenience.
module.exports = function(grunt) {
	const detectFileSource = fs.readFileSync(path.join(IntlPolyfillOutput, 'detect.js'));
	const configSource = require(path.join(IntlPolyfillOutput, 'config.json'));
	delete configSource.install;

	if (!existsSync(LocalesPolyfillOutput)) {
		mkdirp.sync(LocalesPolyfillOutput);
	}

	// customizing the config to add intl as a dependency
	configSource.dependencies.push('Intl');

	// don't test every single locale - it will be too slow
	configSource.test = { ci: false };

	const configFileSource = JSON.stringify(configSource, null, 4);

	grunt.log.writeln('Importing Intl.~locale.* polyfill from ' + LocalesPath);
	const locales = fs.readdirSync(LocalesPath);
	locales.forEach(function (file) {
		const locale = file.slice(0, file.indexOf('.'));
		const localeOutputPath = path.join(LocalesPolyfillOutput, locale);

		if (!existsSync(localeOutputPath)) {
			mkdirp.sync(localeOutputPath);
		}

		const localePolyfillSource = fs.readFileSync(path.join(LocalesPath, file));
		const polyfillOutputPath = path.join(localeOutputPath, 'polyfill.js');
		const detectOutputPath = path.join(localeOutputPath, 'detect.js');
		const configOutputPath = path.join(localeOutputPath, 'config.json');

		writeFileIfChanged(polyfillOutputPath, localePolyfillSource);
		writeFileIfChanged(detectOutputPath, detectFileSource);
		writeFileIfChanged(configOutputPath, configFileSource);
	});


	grunt.log.writeln(locales.length + ' imported locales');
	grunt.log.writeln('Intl polyfill imported successfully');
};
