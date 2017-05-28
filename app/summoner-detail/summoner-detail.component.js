'use strict';

angular
   .module('summonerDetail')
      .component('summonerDetail', 
      {
         templateUrl: 'summoner-detail/summoner-detail.template.html',
         controller: ['Summoner','GetSummoner','$routeParams', function SummonerDetailController(Summoner,GetSummoner,$routeParams)
               {
               var self = this;
               console.log(this);
               this.summonername = $routeParams.summonername;
               console.log(Summoner.getSummoner(this.summonername));
               var s = Summoner.getSummoner(this.summonername);
               this.summoner = s;
               self.l = {};
               self.solo = {};
               var k = GetSummoner.gimmeLeague().get({summonerId: s.id})
                           .$promise.then(function (response)
                          {
                             self.solo = {};
                             self.l = response[s.id];  
                             self.solo = self.l[0];
                             self.flex = self.l[1];
                             console.log(self.solo);
                          });
                    
            }
         ]
       });
   
