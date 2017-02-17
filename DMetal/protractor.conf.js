exports.config = {
  // The address of a running selenium server.
seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
 
 
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',
 
  // Spec patterns are relative to the current working directly when protractor is called.
  specs: [  'tests/E2E/login/test.js',
            'tests/E2E/register/test.js',
            'tests/E2E/ui-router/test.js'
             ],
  
  suites: {
     login: 'tests/e2e/login/test.js',
     register: 'tests/e2e/register/test.js',
     navigation: 'tests/e2e/ui-router/test.js'
  },
  
    directConnect: true,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000
  }
};



