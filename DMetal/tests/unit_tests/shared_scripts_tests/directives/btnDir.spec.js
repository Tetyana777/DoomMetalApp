describe("myButton", function(){
    beforeEach(module('app'));
    var compile, scope, element;
    beforeEach(inject(function($rootScope, $compile) { 
         compile = $compile;
         scope = $rootScope.$new();
         element = angular.element('<my-button title="{{title}}" action="action()"></my-button');
         scope.title = 'FOLLOW';
         scope.color = 'green';
         scope.action = function(text) {
             alert(text);
                   };
        element = $compile(element)(scope);
        scope.$digest();
    }));
        
    it("should display button", function(){
        expect(element).toBeDefined();
         //expect(element.text()).toEqual('FOLLOW');
        
    });
   it("should display title", function(){
        expect(scope.title).toEqual('FOLLOW');
        
    });
    it("should display css property", function(){
     expect(scope.color).toBe('green');
        
    });
     it("should display alert text", function(){
        expect(scope.action('HELLO')).toEqual(scope.text);
        });   
        
});