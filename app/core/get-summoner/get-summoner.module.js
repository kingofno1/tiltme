'use strict'
angular
   .module('core.get-summoner',['ngResource'])
      .value('API_KEY', '24624199-5731-4305-bd77-b049bb86b5d7');
                        // put lol api key here! ^  
/*
* *
*    basiclly this summoner service sends out a GET 
*    request to the LoL api and grabs summary of  
*    a given summoner name. 
*    next: 
*          it should 
*
*   https://developer.riotgames.com/api/methods#!/1221/4746
* *
*/
