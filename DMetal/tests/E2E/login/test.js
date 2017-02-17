var loginPage = require('./login.po.js');
describe('Login Page Tests', function() {
   beforeEach(function(){
   browser.get('http://localhost:8383/myapp/index.html#/login');
   browser.waitForAngular();  
    });
   
    it('should set correct values on login form input', function() {
          loginPage.login('Tania', 'tania@tania.tania', '**123**');
          });
          
  it('should check if all required input fields are defined', function() {
   loginPage.isRequired();
   //expect(loginPage.isRequired()).toBe(loginPage.login);
      });
  
   it('should check if the form is submitted on button click', function() {
    loginPage.submitForm('Tania', 'tania@tania.tania', '**123**');        
 });
    
 it('should redirect to the Register page on REGISTER button click', function() {
     loginPage.redirectPage();
     });
   
  it('should check if the checkbox is enabled', function() {
       loginPage.setCheckBox(false);
   });
     
  
   });
     
   
    
   
  

 