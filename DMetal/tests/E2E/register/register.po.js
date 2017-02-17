'use strict';  

module.exports = {
       
    registerData:{
        username: element(by.model('registerForm.username')),
        street: element(by.id('street')),
        email: element(by.model('registerForm.email')),
        password: element(by.model('registerForm.password')),//confirm
        password2:element(by.model('registerForm.password2')),
        option: element(by.repeater('option in options')),
        options: element.all(by.repeater('option in options')),
        checkbox: element(by.tagName('check-box'))
        },
     
        
    required:{
    userNameRequired: element(by.css('#usernameRequired')),
    emailRequired: element(by.css('#emailRequired')),
    passwordRequired: element(by.css('#passwordRequired'))
    }, 
    
    
    register: function(username,street, email, password) {
            var credentials = this.registerData;
            credentials.username.sendKeys(username);
            credentials.street.sendKeys(street);
            credentials.email.sendKeys(email);
            credentials.password.sendKeys(password);
                },
    
     isConfirmed: function(value){
        var confirmed = this.registerData;
        confirmed.password.equals(confirmed.password2).then(function(confirmed){
            if(confirmed !== value){
                console.log('Passwords do not match!');
            }
        });
       
    },
       
  
   isRequired: function() {
        var requiredData = this.required;
        requiredData.userNameRequired.isPresent(),
        requiredData.passwordRequired.isPresent();
        requiredData.emailRequired.isPresent();
    },
    
      setCheckBox: function(value){
         var checkboxSelected = this.registerData;
         checkboxSelected.checkbox.isSelected().then(function(selected){
        if(selected !== value){
            checkboxSelected.checkbox.click();
        }
    });

 },
 
 selectOptions: function(value) {
     var selectOptions = this.registerData;
     selectOptions.options.isSelected().then(function(selected){
         if(selected !== value){
             selectOptions.options.click();
         }
     });
     
 },
 
    selectOption: function(option, index) {
    var selectDropDown = this.registerData;
    var index = 0;
    if(index) {
        selectDropDown.options.then(function(option) {
         if(index >= 0) {
             return selectDropDown.options[index].click();
         }
         
     });
    }
     
     
 }
     
 };





