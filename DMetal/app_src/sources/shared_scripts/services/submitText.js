//show text on button click
angular.module('app')
        .service('submitButton', function(){
                  this.submitInfo = function(myText){
                         alert(myText);
                            };
});

