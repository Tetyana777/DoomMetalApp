//carouselDir.js
angular.module('app')
 .controller('slideCtrl', [ '$scope', function($scope){
   $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
   $scope.activeSlide = 0;
  $scope.slides = [
      {
        image:'assets/img/image_4.jpg'
     },
     {
  image: 'assets/img/image_6.jpg'
  },
  {
  image: 'assets/img/image_1.jpg'
       },
  {
  image: 'assets/img/image_5.jpg'
     },
  {
  image: 'assets/img/image_2.jpg'
     }
  ];
  
          }]);

