'use strict'

describe('summonerSearch', function() 
{
   beforeEach(module('summonerSearch'));
   
   describe('controller', function()
   {
      var $httpBackend, ctrl;
      
      beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/kingofno1?api_key=24624199-5731-4305-bd77-b049bb86b5d7')
                  .respond([{"kingofno1":{"id":45189340,"name":"kingofno1","profileIconId":23,"summonerLevel":30,"revisionDate":1481010712000}}]);

      ctrl = $componentController('summmonerSearch');
      
   }));
   
   it('should fetch summoner `kingofno1` with `http`',function()
   { 
      expect(ctrl.champs).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.champs).toEqual([{"kingofno1":{"id":45189340,"name":"kingofno1","profileIconId":23,"summonerLevel":30,"revisionDate":1481010712000}}]);
   });
   });
});
