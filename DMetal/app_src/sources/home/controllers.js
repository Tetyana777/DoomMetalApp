//introCtrl(introduction section)
angular
        .module('app')
        .controller('homePageCtrl', ['$scope', function($scope) {
            $scope.intros = [
  {
 heading: 'LEARN MORE',
 paragraph: 'Get to know more about the history, nature, genres  of doom metal music',
 buttonName: 'START',
 link: 'http://localhost:8383/myapp/index.html#/information/learn'
  },
      {
   heading: 'LISTEN',
 paragraph: 'Get the spirit of real doom metal music through listening to their highlights and not only',
 buttonName: 'ENJOY',
 link: 'http://localhost:8383/myapp/index.html#/bands'
     },
    {
    heading: 'PARTICIPATE',
 paragraph: 'Create your own world of doom metal music and share it with others',
 buttonName: 'JOIN US',
 link: 'http://localhost:8383/myapp/index.html#/contact'
      }
 ];
 
         }]);
    

