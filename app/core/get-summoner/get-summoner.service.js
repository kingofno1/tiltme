'use strict'

/*
        soon to be lolapi
        lolapi
*/
angular
   .module('core.get-summoner')
      .factory('GetSummoner', GetSummoner);
      
      function GetSummoner($resource, API_KEY)
      {
         var service = 
         {
            gimmeSummary: gimmeSummary,
            gimmeLeague: gimmeLeague
         };
         
         return service;

         ////////////////////////////////////////////////////////////////////////////////////////      

         function gimmeSummary()
         {
            return $resource('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/:summonerName?api_key=' + API_KEY,{summonerName: '@summonerName'});
         }
         
         function gimmeLeague()
         {
            return $resource('https://na.api.riotgames.com/api/lol/NA/v2.5/league/by-summoner/:summonerId/entry?api_key=' + API_KEY,{summonerId: '@summonerId'});
         }
      }//END// GetSummoner//   
