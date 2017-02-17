'use strict';
angular
  .module('app', ['ui.router', 'ui.bootstrap'])
   .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
 
     $stateProvider
     .state('home', {
       url: '/',
      templateUrl: 'sources/home/home.tmpl.html'
             })
     .state('information', {
      url: '/information',
      abstract: true,
       templateUrl: 'sources/information/information_view.tmpl.html',
      controller: 'informCtrl' 
          })
       .state('information.learn', {
            url: '/learn',
            templateUrl: 'sources/information/templates/learn.tmpl.html',
            controller:'dataCtrl as learns'
                })
            .state('information.listen', {
            url: '/listen',
            templateUrl: 'sources/information/templates/listen.tmpl.html',
            controller:'dataCtrl as listens'
                  })
        .state('information.purchase', {
            url: '/purchase',
            templateUrl: 'sources/information/templates/purchase.tmpl.html',
            controller:'dataCtrl as purchases'
                  })
        .state('bands', {
      url: '/bands',
      templateUrl: 'sources/bands/bands.tmpl.html',
      controller: 'bandsCtrl'
         })
      .state('contact', {
      url: '/contact',
      templateUrl: 'sources/contact/contact.tmpl.html'
    })
     .state('login', {
      url: '/login',
      abstract: true,
      templateUrl: 'sources/login/login_view.tmpl.html'
    })
     .state('login.login', {
      url: '',
      templateUrl: 'sources/login/login/login.tmpl.html',
      controller:'btnCtrl'
    })
     .state('login.register', {
      url: '/register',
      templateUrl: 'sources/login/register/register.tmpl.html',
      controller:'btnCtrl'
    })
    }])
   
  
  
 

 


 


 
