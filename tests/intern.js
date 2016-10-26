// Learn more about configuring this file at 
// <https://theintern.github.io/intern/#configuration>.
define({

	capabilities: {
		'browserstack.selenium_version': '2.45.0'
	},

	environments: [
		{ browserName: 'internet explorer', version: '11', platform: 'WIN8' },
		{ browserName: 'internet explorer', version: '10', platform: 'WIN8' },
		{ browserName: 'internet explorer', version: '9', platform: 'WINDOWS' },
		{ browserName: 'firefox', version: '37', platform: [ 'WINDOWS', 'MAC' ] },
		{ browserName: 'chrome', version: '39', platform: [ 'WINDOWS', 'MAC' ] },
		{ browserName: 'safari', version: '8', platform: 'MAC' }
	],

	maxConcurrency: 2,

	tunnel: 'BrowserStackTunnel',

	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'myPackage', location: '.' } ]
	},

	// Unit test suite(s) to run in each browser
	suites: [ /* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],

	// Functional test suite(s) to execute against each browser once unit tests are completed
	functionalSuites: [ /* 'myPackage/tests/functional' */ ],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
