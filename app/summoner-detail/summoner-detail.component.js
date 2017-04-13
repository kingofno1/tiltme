'use strict';

angular
   .module('summonerDetail')
      .component('summonerDetail', 
      {
         templateUrl: 'summoner-detail/summoner-detail.template.html',
         controller: ['Summoner','$routeParams', function SummonerDetailController(Summoner,$routeParams)
            {
               console.log(this);
               this.summonername = $routeParams.summonername;
               console.log(Summoner.getSummoner(this.summonername));
               var s = Summoner.getSummoner(this.summonername);
               this.summoner = s;
               console.log(this);  
            }
         ]
       });
   
