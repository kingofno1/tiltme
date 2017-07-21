'use strict'

/*
        lolapi 
            - a bunch of resource objects that request information from riot severs 
*/
angular
   .module('core.lol-api')
      .factory('lolapi', lolapi);
      
      function lolapi($resource, API_KEY)
      {
         var service = 
         {
            gimmeSummary: gimmeSummary,
            gimmeLeague: gimmeLeague,
            putSummoner: putSummoner
         };
         
         return service;

         ////////////////////////////////////////////////////////////////////////////////////////      

// TODO: these requests must hide api key
 
         function gimmeSummary() // get Summary infromation for a specified summonerName 
         {  
            return $resource('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/:summonerName?api_key='+API_KEY,{summonerName: '@summonerName'});
         }
         
         function gimmeLeague() // get League information for a specified summonerId
         {
            return $resource('https://na.api.riotgames.com/api/lol/NA/v2.5/league/by-summoner/:summonerId/entry?api_key=' + API_KEY,{summonerId: '@summonerId'});
         }
         
         function putSummoner() // this resource object is communicating with a database server in local network..
         { //TODO: refactor this out to another local api interface                     
            return $resource('http://IP_ADDRES:PORT#');
         }

         function gimmeRealms()
         {
            return $resource('https://na1.api.riotgames.com/lol/static-data/v3/realms', {});
         }
      }//END////   
