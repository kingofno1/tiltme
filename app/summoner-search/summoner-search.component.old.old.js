'use strict'

angular.
   module('summonerSearch').
      component('summonerSearch', 
      {
         templateUrl: 'summoner-search/summoner-search.template.html',
         controller: ['$http','$scope', function SummonerSearchController($http, $scope) 
         {
            var self = this;
            self.orderProp = 'name';
            $scope.list = [];
            self.champs = [];
            
            
      /**
       *    submitsummoner(  )
            *  verifies the summoner name sent over is !null    
            *  saves the name in a array `$scope.list`
            *  then calls `lolRequestlist()` and `getSumIcon()`
      **/
            $scope.submitsummoner = function()
            {
               if($scope.query) 
               {
                  $scope.list.push($scope.query);
                  $scope.query = '';
               }
               $scope.lolRequestlist();
               $scope.getSummIcon();
            }
      /**
       *    lolRequestlist(  )
            *  grabs the last summoner name of `$scope.list`
            *  then sends lol api a request for summoner information 
            *  it also sets the profile id icon form static api within `get.().then()` statement
      **/            
            $scope.lolRequestlist = function()
            {  
               var lastelement = $scope.list[$scope.list.length-1];            
               var url = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'
                         +lastelement+'?api_key=24624199-5731-4305-bd77-b049bb86b5d7';
            
               $http.get(url).then(function(response)
               {
                  var obj ={};
                  obj =  response.data[lastelement];
                  var url = 'http://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/'
                         +obj.profileIconId+'.png';
                  obj.imgUrl = url;
                  self.champs.push(obj);
               });
            }
            
            $scope.getSummIcon = function()
            {
               var lastelement = $scope.list[$scope.list.length-1];    
               var summs = {};
               
            }
         }]      
      });
