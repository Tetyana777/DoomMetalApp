module.exports = {
    
    currentState: function() {
        return browser.executeAsyncScript(function(cb){
         var el = angular.element(document).find('body');    
         var service = angular.element(el).injector().get('$state');
         cb(service.current.name);
          });
    },
    
    getElement: function(locator) {
        var el = element(by.css(locator));
        return el;
           }, 
    
    nestedLink: function(locator1, locator2) {
        var option = element(by.css(locator1)).$$(locator2);
        return option;
        
    }
        
    }


 
  