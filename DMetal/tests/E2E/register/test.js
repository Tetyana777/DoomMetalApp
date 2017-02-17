var registerPage = require('./register.po.js');
describe('Register Page Tests', function() {
   beforeEach(function(){
   browser.get('http://localhost:8383/myapp/index.html#/login/register');
   browser.waitForAngular();  
    });
   
    it('should set correct values on register form input', function() {
          registerPage.register('Tania', 'Hendig Str', 'tania@tania.tania', '**123**', '**562**');
       });
  
    it('should confirm the password defined', function() {
   registerPage.isConfirmed(false);
      });
   
  
  it('should check if the checkbox is enabled', function() {
       registerPage.setCheckBox(false);
       });
  
   it('should check if all required input fields are defined', function() {
   registerPage.isRequired();
   });
   
   it('should check if option is selected', function() {
   registerPage.selectOptions(true);
      });
   
  it('should check if the desired option is selected', function() {
      registerPage.selectOption('Friends', '2');
        });
     
});