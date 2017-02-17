'use strict';  

module.exports = {
       
    loginData:{
        username: element(by.model('loginForm.username')),
        email: element(by.model('loginForm.email')),
        password: element(by.model('loginForm.password')),
        checkbox: element(by.id('mybox')),
        form: element(by.tagName('form')),
        currentUrl: element(by.id('registPart')),
        redirectUrl: browser.get('http://localhost:8383/myapp/index.html#/login/register')
        },
    
    required:{
    userNameRequired: element(by.css('#usernameRequired')),
    emailRequired: element(by.css('#emailRequired')),
    passwordRequired: element(by.css('#passwordRequired'))
    },        
       
    login: function(username, email, password) {
            var credentials = this.loginData;
            credentials.username.sendKeys(username),
            credentials.email.sendKeys(email),
            credentials.password.sendKeys(password);
    },
    
   isRequired: function() {
        var requiredData = this.required;
        requiredData.userNameRequired.isPresent(),
        requiredData.passwordRequired.isPresent();
        requiredData.emailRequired.isPresent();
    },
    
    submitForm: function(username, email, password){
        var loginForm = this.loginData;
        loginForm.form.submit();
         },
    
     redirectPage: function(){
     var redirect = this.loginData;
     redirect.currentUrl.click();
     redirect.redirectUrl;
     },
     
    setCheckBox: function(value){
          var checkboxSelected = this.loginData;
          browser.wait(function() {
           var deferred = protractor.promise.defer();
             checkboxSelected.checkbox.isSelected().then(function(isSelected){
            if(isSelected !== value){
             checkboxSelected.checkbox.click();
             deferred.fulfill(isSelected);
                      
        }
    });
   return deferred.promise;
}, 5000);
 }
 };

     
     

