'use strict'
angular
   .module('core.lol-api',['ngResource'])
      .value('API_KEY', '################################3');
                        // put lol api key here! ^  
/*
* *
*    basiclly this summoner service sends out a GET 
*    requests to LoL api and grabs information for a given summoner name or summoner id. 
* *
*/
