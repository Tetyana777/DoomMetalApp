describe("dataCtrl", function() {
     var $httpBackend;
     // beforeEach(module('app'));
      
  beforeEach(inject(function($injector) {
       $httpBackend = $injector.get('$httpBackend');
       jasmine.getJSONFixtures().fixturesPath = "base/tests/"
        var f = readJSONFixtures("links.json");
        json = JSON.parse(f);
       
    $httpBackend.whenGET(data).respond(
        getJSONFixtures('links.json')
    );
         }));
        afterEach(function() {
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
        });
  
    
    var dataCtrl, scope;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        dataCtrl = $controller('dataCtrl', {$scope:scope});
  }));
   
        
           it("should check .json file definition", function(){
               expect(json.title).toNotBe(null);
           });
           
           it("should bind corresponding data to display in .html view", function(){
               $httpBackend.expectGET(data);
              $httpBackend.flush();
               
  
           });
  });
  
 

