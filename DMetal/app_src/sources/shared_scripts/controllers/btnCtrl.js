//submitTetx.js
angular.module('app')
        .controller ('btnCtrl', ['$scope', 'submitButton', function($scope, submitButton){
                  $scope.submitted = function() {
                 submitButton.submitInfo("Submitted successfully!");
             };
              $scope.loggedin = function() {
                  submitButton.submitInfo("Logged in!");
             };
             $scope.registered = function() {
                 submitButton.submitInfo("Registered successfully!");
             };
             
}])
