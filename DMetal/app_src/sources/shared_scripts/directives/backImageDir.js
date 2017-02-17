angular
        .module('app')
          .directive('backImage', function(){
            return {
                restrict: 'E',
             scope: {
              image: '='
                },
                transclude: 'true',
                template: '<img ng-src="{{image.src}}" alt="DOOM METAL WORLD">'        
            }               
                
});


