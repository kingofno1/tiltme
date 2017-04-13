'use strict';

angular.module('view2', ['ngRoute']).
   component('view2',
   {
         templateUrl:'view2/view2.html',
         controller: ['$routeParams',
            function View2Controller($routeParams)
            { 
               this.summonerName = $routeParams.summonerName;
            }  
   ]});
