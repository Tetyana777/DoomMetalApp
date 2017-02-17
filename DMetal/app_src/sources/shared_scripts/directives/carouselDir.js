//slideCtrl.js, carousel.less 
angular
        .module('app')
         .directive('myCarousel', function(){
            return {
                 restrict: 'E',
                 replace: 'true',
                 controller: 'slideCtrl',
                  template: '<div><uib-carousel interval="myInterval" active="activeSlide">'+
                '<uib-slide ng-repeat="slide in slides" index="$index">'+
                '<img ng-src="{{slide.image}}" alt="DOOM METAL" style="width:100%; height:500px;">'+
                    '</uib-slide> </uib-carousel><div ng-transclude></div></div>',
                  transclude: true                  
            }                            
                
});

