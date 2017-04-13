'use strict'

angular.
   module('myApp').
      config(['$locationProvider','$routeProvider',
         function config($locationProvider, $routeProvider)
         {
            $locationProvider.hashPrefix('!');
            
            $routeProvider. 
               when('/summonerSearch', 
                  {
                     template: '<summoner-search></summoner-search>'
                  }
               ).
               when('/summoner/:summonername',
                  {
                    template: '<summoner-detail></summoner-detail>'   
                  }
               ).               
               when('/view1',
                  {
                     template: '<view1></view1>'              
                  }
               ).
               when('/view2',
                  {
                    template: '<view2></view2>'   
                  }
               ).
               otherwise('/view1');
         }
      ]);
