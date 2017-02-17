angular
        .module('app')
         .directive('myButton', function(){
            return {
                scope: {
                title:'@',
                action:'&'
                        },
               link: function ($scope, element)
                 {
                       element.css({color: 'red'});
                      },
            template: '<button ng-click="action()"><i><b>{{title}}</b></i></button>'
                           
                    }
            
})