describe("homePageCtrl", function(){
    beforeEach(module('app'));
    var homePageCtrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        scope = {};
        var mockService = function homePageService() {
	 	return [{heading: 'LEARN MORE', paragraph: 'Get to know more about the history, nature, genres  of doom metal music',
                          buttonName: 'START', link: 'http://localhost:8383/myapp/index.html#/information/learn'},
                          {heading: 'LISTEN', paragraph: 'Get the spirit of real doom metal music through listening to their highlights and not only',
                           buttonName: 'ENJOY', link: 'http://localhost:8383/myapp/index.html#/bands'},
                         {heading: 'PARTICIPATE', paragraph: 'Create your own world of doom metal music and share it with others',
                           buttonName: 'JOIN US', link: 'http://localhost:8383/myapp/index.html#/contact'}]};
         homePageCtrl = $controller('homePageCtrl', {$scope: scope, homePageService: mockService});
         }));
   
     it("should check if the controller is defined", function(){
        expect(homePageCtrl).toBeDefined();
           });
         it("should check if scope is defined", function(){
        expect(scope).toBeDefined();
            });
         it("should bind corresponding data to display in .html view", function(){
        expect(scope.intros.intro).toEqual(scope.intro);
           });
         it("should return binding data on load", function(){
         expect(scope.intros).toEqual([{heading: 'LEARN MORE', paragraph: 'Get to know more about the history, nature, genres  of doom metal music',
                          buttonName: 'START', link: 'http://localhost:8383/myapp/index.html#/information/learn'},
                          {heading: 'LISTEN', paragraph: 'Get the spirit of real doom metal music through listening to their highlights and not only',
                           buttonName: 'ENJOY', link: 'http://localhost:8383/myapp/index.html#/bands'},
                         {heading: 'PARTICIPATE', paragraph: 'Create your own world of doom metal music and share it with others',
                           buttonName: 'JOIN US', link: 'http://localhost:8383/myapp/index.html#/contact'}]);
            });
});

 
 