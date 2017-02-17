describe("informCtrl", function() {
       beforeEach(module('app'));
       var informCtrl, scope;
  beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        scope = {};
        var mockService = function InformationService() {
	 	return [{title: 'GET TO KNOW', state: 'information.learn'},
                        {title: 'LISTEN', state: 'information.listen'},
                        {title: 'FIND AND BUY', state: 'information.purchase'}]};
        informCtrl = $controller('informCtrl', {$scope:scope, InformationService: mockService});
          }));
          
          it("should check if the controller is defined", function(){
        expect(informCtrl).toBeDefined();
           });
            it("should check if scope is defined", function(){
        expect(scope).toBeDefined();
            });
             it("should bind corresponding data to display in .html view", function(){
        expect(scope.informs.inform).toEqual(scope.inform);
           });
         it("should return binding data on load", function() {
            expect(scope.informs).toEqual([{title: 'GET TO KNOW', state: 'information.learn'},
                        {title: 'LISTEN', state: 'information.listen'},
                        {title: 'FIND AND BUY', state: 'information.purchase'}]);
    
  });
});

  //"dataCtrl" test -> /tests/dataCtrl.spec.js         