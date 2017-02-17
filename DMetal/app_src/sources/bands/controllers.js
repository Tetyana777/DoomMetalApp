//bands.html

//search section
 angular
        .module('app')
        .controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
                $http.get('data/bands.json').
                success(function(data) {
                    $scope.genres = $scope.locations = data;
                            });                    
                    }]);
                
//bands section                
angular
        .module('app')
        .controller('bandsCtrl', ['filterFilter', '$scope', function(filterFilter, $scope) {
    $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
   $scope.activeSlide = 0;
   $scope.slides = [{
 title: 'ÖRÖM',
 origin:'(Dark ambient/Gothic metal, Hungary)',
 image: 'assets/img/image_6.jpg',
 name: 'www.orom.org',
 website: 'http://www.orom.org',
 target:'#slideOrom',
 genre:'DOOM'
 },

 {
 title: 'UARAL',
 origin:'(Folk/Doom metal, Chile)',
 image: 'assets/img/image_4.jpg',
 name: 'www.uaral.com',
 website: 'http://www.uaral.com',
 target:'#slideUaral',
 genre:'DOOM'
 },
 {
 title: 'SHAPE OF DESPAIR',
 origin:'(Funeral doom, Finland)',
 image: 'assets/img/image_5.jpg',
 name: 'www.shapeofdespair.com',
 website: 'http://www.shapeofdespair.com',
 target:'#slideShape',
 genre:'DOOM'
 },
 {
 title: 'FEAR FACTORY',
 origin:'(Industrial metal, USA)',
 image: 'assets/img/image_3.jpg',
 name: 'www.fearfactory.com',
 website: 'http://fearfactory.com',
 target:'#slideFear',
 genre:'INDUSTRIAL'
 },
 {
 title: 'ROB ZOMBIE',
 origin:'(Industrial metal, USA)',
 image: 'assets/img/image_3.jpg',
 name: 'www.robzombie.com',
 website: 'http://robzombie.com',
 target:'#slideRob',
 genre:'INDUSTRIAL'
  },
 {
 title: 'EVOKEN',
 origin:'(Funeral doom, USA)',
 image: 'assets/img/image_2.jpg',
 name: 'www.evoken.bigcartel.com',
 website: 'http://www.evoken.bigcartel.com',
 target:'#slideEvoken',
 genre:'DOOM'
 },
 {
 title: 'LUSTRE',
 origin:'(Atmospheric Black, Sweden)',
 image: 'assets/img/image_1.jpg',
 name: '',
 target:'#slideLustre',
 genre:'DOOM'
 },
 {
 title: 'MOURNFUL CONGREGATION',
 origin:'(Funeral doom, Australia)',
 image: 'assets/img/image_6.jpg',
 name: 'www.mournfulcongregation.com',
 website: 'http://www.mournfulcongregation.com',
 target:'#slideMourn',
 genre:'DOOM'
 },
 {
 title: 'DREAMS AFTER DEATH',
 origin:'(Atmospheric funeral doom, Hungary)',
 image: 'assets/img/image_4.jpg',
 name: 'www.dreamsafterdeath.com',
 website: 'http://www.dreamsafterdeath.com',
 target:'#slideDreams',
 genre:'DOOM'
 },
 {
 title: 'FUNERAL MOURNING',
 origin:'(Black/funeral doom metal, Australia)',
 image: 'assets/img/image_5.jpg',
 name:'www.funeralmourning.bandcamp.com',
 website: 'https://funeralmourning.bandcamp.com',
 target:'#slideFun',
 genre:'DOOM'
 },
 {
 title: 'ANKHAGRAM',
 origin:'(Melodic/Funeral doom metal, Russia)',
 image: 'assets/img/image_2.jpg',
 name: 'www.ankhagram.bandcamp.com',
 website: 'https://ankhagram.bandcamp.com',
 target:'#slideAnkha',
 genre:'DOOM'
 },
 {
 title: 'SKEPTICISM',
 origin:'(Funeral doom metal, Finland)',
 image: 'assets/img/image_6.jpg',
 name: 'www.skepticism.fi',
 website: 'http://www.skepticism.fi/index.html',
 target:'#slideSkept',
 genre:'DOOM'
 }

 ];
 
 $scope.filteredSlides = filterFilter($scope.slides, {genre: 'DOOM'});

 }]);
 
 
