(function() {
  'use strict';

  angular
    .module('lights')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(lightsService) {
    var vm = this;

    vm.currentMessage = '';
    vm.data = lightsService.data;
    vm.sendMessage = sendMessage;
    vm.triggerPremade = triggerPremade;


    function sendMessage(message) {
      vm.currentMessage = '';
      lightsService.addMessage(message);
    }

    function triggerPremade(premadeId) {
      lightsService.triggerPremade(premadeId);
    }

  }
})();
