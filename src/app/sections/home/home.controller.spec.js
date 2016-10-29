(function() {
  'use strict';

  describe('lights.HomeController', function(){
    var vm;

    beforeEach(module('lights'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('HomeController');
    }));

    it('should initialize', function() {
      expect(vm).toBeDefined();
    });
  });
})();
