'use strict'

angular.
   module('summonerSearch').
      component('summonerSearch', 
      {
         templateUrl: 'summoner-search/summoner-search.template.html',
         controller: ['Summoner','GetSummoner','$scope', function SummonerSearchController(Summoner,GetSummoner, $scope) 
         {
            var self = this;
            self.orderProp = 'name';
            $scope.list = [];
            self.summonerList = [];
            
            
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
            }
      /******************************************************************************************
       *    lolRequestlist(  )
       *    *  grabs the last summoner name of `$scope.list`
       *    *  then sends lol api a request for summoner information 
       *    *  it also sets the profile id icon form static api within `get().$promise.then()`
     \**/            
            $scope.lolRequestlist = function()
            {  
               var lastelement = $scope.list[$scope.list.length-1];
               var s = GetSummoner.get({summonerName: lastelement})
                        .$promise.then(function (response)
               {
                  self.summ = response[lastelement];
                  
                  var url = 'http://ddragon.leagueoflegends.com/cdn/7.1.1/img/profileicon/'
                         +self.summ.profileIconId+'.png';
                         
                  self.summ.imgUrl = url;
                  console.log(self.summ);
                  Summoner.setSummoner(self.summ.name, self.summ);
                  self.summ.summonername = self.summ.name;
                  self.summonerList.push(self.summ);
                  console.log(self);
               });
            }            
         }]      
      });
