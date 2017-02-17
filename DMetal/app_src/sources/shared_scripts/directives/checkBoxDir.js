angular
        .module('app')
        .directive('checkBox', function(){
            return {
                restrict:'E',
        scope: {
            text:'@'            
        },
        template: '<label><input type="checkbox">{{text}}</label>'
            }
})

