angular
        .module('app')
        .controller('optionsCtrl', ['$scope', function($scope){
                $scope.registerForm = {};
                $scope.registerData = function(){
                $scope.usernameRequired = '';
                $scope.emailRequired = '';
                $scope.passwordRequired = '';
                  if(!$scope.registerForm.username){
                      $scope.nameRequired = 'Please, provide your name!';
                      
                  };
                  if(!$scope.registerForm.email){
                      $scope.emailRequired = 'Email is required!';
                      
                  };
                   if(!$scope.registerForm.password){
                      $scope.passwordRequired = 'Password is required!';
                        };
                        
                     if($scope.registerForm.password !== $scope.registerForm.passwordRepeated){
                       $scope.passwordRequired = 'Password is required!';
                        };  
                   
                };
          //"How did you learn about us?" options
             $scope.options = [
            {option:'Advertisement'},
            {option:'Internet searching tools'},
            {option:'Friends'},
            {option:'Our website'},
            {option:'Other metal music websites'}            
                ];
                
}])
