routerObject = require('./router.po.js');
describe("Route navigation in the navigation menu", function () {
    beforeEach(function () {
        browser.get('http://localhost:8383/myapp/index.html#/');
    });
    
    /* it('should get the window page current state', function (){
         // browser.get('http://localhost:8383/myapp/index.html#/bands'); // to check other pages current state
         routerObject.currentState();
         expect(routerObject.currentState()).toEqual('home');   
        // expect(routerObject.currentState()).toEqual('bands');           
    });
   */
      it('should navigate to the selected path on element click', function() {
           routerObject.getElement('[ui-sref="bands"]');
           
           browser.get('http://localhost:8383/myapp/index.html#/bands');
           expect(browser.getCurrentUrl()).toBe('http://localhost:8383/myapp/index.html#/bands');
      });
    
     it('should navigate to the selected path of the nested/dropdown menu element on click', function() {
           routerObject.getElement('[ui-sref="information"]').click();
           routerObject.nestedLink('[ui-sref="information"]', '[ui-sref="information.purchase"]').click();
           browser.get('http://localhost:8383/myapp/index.html#/information/purchase');
           expect(browser.getLocationAbsUrl()).toContain('/information/purchase');
      
      });
    
    
});

