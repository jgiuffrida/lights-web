(function() {
  'use strict';

  describe('lights.DebugController', function(){
    var vm;

    beforeEach(module('lights'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('DebugController');
    }));

    it('should initialize', function() {
      expect(vm).toBeDefined();
    });
  });
})();
