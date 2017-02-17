describe("backImage", function(){
    beforeEach(module('app'));
    var compile, scope, element;
    beforeEach(inject(function($rootScope, $compile) { 
         compile = $compile;
         scope = $rootScope.$new();
         element = angular.element('<img ng-src="{{image.src}}" alt="DOOM METAL WORLD">');
          scope.image = { src: 'img/image_4.jpg' };
         element = $compile(element)(scope);
        scope.$digest();
    }));
        
    it("should display image", function(){
        expect(element).toBeDefined();
         });
    it("should display src image", function(){
        expect(scope.image.src).toEqual('img/image_4.jpg');
        
    });
    
        
});