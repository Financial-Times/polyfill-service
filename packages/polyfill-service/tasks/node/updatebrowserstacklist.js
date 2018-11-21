"use strict";

const path = require("path");
const fs = require("fs");
const BrowserStack = require("browserstack");
const dotenv = require("dotenv");
dotenv.config({
	path: path.join(__dirname, "../../.env")
});
const browserStackCredentials = {
	username: process.env.BROWSERSTACK_USERNAME,
	password: process.env.BROWSERSTACK_ACCESS_KEY
};

if (!process.env.BROWSERSTACK_USERNAME || !process.env.BROWSERSTACK_ACCESS_KEY) {
	throw new Error("BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY must be set in the environment to run this script.");
}

const automateClient = BrowserStack.createAutomateClient(browserStackCredentials);

automateClient.getBrowsers(function(error, browsers) {
	console.log("Updated the browser list for automated testing via BrowserStack.");
	fs.writeFileSync(path.join(__dirname, "browserstackBrowsers.json"), JSON.stringify(browsers, null, 4));
	fs.writeFileSync(
		path.join(__dirname, "browsers.json"),
		JSON.stringify(Array.from(new Set(browsers.map(b => (b.browser_version ? `${b.browser}/${b.browser_version}` : `${b.os}/${b.os_version}`)))).sort(), null, 4)
	);
});
