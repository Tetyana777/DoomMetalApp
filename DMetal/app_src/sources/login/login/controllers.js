angular
        .module('app')
        .controller('logInCtrl', ['$scope', function($scope){
                $scope.loginForm = {};
                $scope.saveData = function(){
                $scope.usernameRequired = '';
                $scope.emailRequired = '';
                $scope.passwordRequired = '';
                  if(!$scope.loginForm.username){
                      $scope.usernameRequired = 'Username is required!';
                      
                  };
                  if(!$scope.loginForm.email){
                      $scope.emailRequired = 'Valid email address is required!';
                      
                  };
                   if(!$scope.loginForm.password){
                      $scope.passwordRequired = 'Password is required!';
                      
                  };
                                     
                };
               
}])

