'use strict'

angular
   .module('core.summoner')
      .service('Summoner', function()
      {
         var summonerhash = {};

         this.setSummoner = function( key, value)
         {
            summonerhash[key] = value;
         }
         
         this.getSummoner = function (key)
         {
            return summonerhash[key];
         }
      });
      
