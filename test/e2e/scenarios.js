'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('My sandbox application', function() {

	beforeEach(function() {
    	browser().navigateTo('../../build/index.html');
  	});

  	it('should automatically redirect to /home when location hash/fragment is empty', function() {
    	expect(browser().location().url()).toBe("/home");
  	});

});