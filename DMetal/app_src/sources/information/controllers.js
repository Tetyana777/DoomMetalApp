
//information_view.tmpl.html
  angular
        .module('app')
        .controller('informCtrl', ['$scope', function($scope) {
            $scope.informs = [
  {
  title: 'GET TO KNOW',
 state: 'information.learn' 
   },
      {
   title: 'LISTEN',
 state: 'information.listen'
     },
    {
    title: 'FIND AND BUY',
 state: 'information.purchase'
      }
 ]      ; 
        }]);
          


//information/**.html
angular
      .module('app')
      .controller( 'dataCtrl', ['$scope', '$http', function($scope, $http) {
       $http.get('data/links.json').
    success(function(data) {
      $scope.learns =  $scope.listens = $scope.purchases = data;
          });    
    }]); 

