'use strict'

/*
        soon to be lolapi
        lolapi
*/
angular
   .module('core.get-summoner')
      .factory('GetSummoner',['$resource', 'API_KEY', function($resource, API_KEY)
      {
        return $resource('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/:summonerName?api_key=' + API_KEY,{summonerName: '@summonerName'});                                                           
      }]);
      
      
      
