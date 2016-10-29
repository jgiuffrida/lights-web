(function() {
  'use strict';

  angular
    .module('lights')
    .controller('DebugController', DebugController);

  /** @ngInject */
  function DebugController(lightsService) {
    var vm = this;
    vm.data = lightsService.data;
    vm.toggleOutlet = toggleOutlet;


    function toggleOutlet(outletid, status) {
      lightsService.setOutlet(outletid,status);
    }
  }
})();
