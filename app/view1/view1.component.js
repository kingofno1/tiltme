'use strict';

angular.module('view1').
   component('view1',
   {
         templateUrl:'view1/view1.template.html',
         controller: ['$http', function View1Controller($http) 
         {
            var self = this;
            self.orderProp = 'name';
            
            /*
            $http.get('champs/champs.json').then(function(response)
            {
               self.champs =  response.data;
            });*/
         }]
   });
