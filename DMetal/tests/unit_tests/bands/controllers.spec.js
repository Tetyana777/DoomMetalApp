//searchCtrl
describe("searchCtrl", function() {
     var searchCtrl, scope;
      beforeEach(module('app'));
  beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        searchCtrl = $controller('searchCtrl', {$scope:scope});
  }));
    it("should bind corresponding data to display in the .html view", function() {
         expect(searchCtrl).toBeDefined();
         expect(scope).toBeDefined();
    expect(scope.genres).toEqual(scope.data);
     expect(scope.locations).toEqual(scope.data);
      });
  });

//bandsCtrl filter
describe("filterFilter", function(){
    beforeEach(module('app'));
    var filterFilter, scope;
    beforeEach(inject(function($filter, $rootScope) {
        scope = $rootScope.$new();
        filterFilter = $filter('filter', {$scope:scope});
            }));
        
    it("should display filtered data by genre parameter", function(){
        expect(scope.slides).toEqual(scope.filteredSlides);
         });
    
});