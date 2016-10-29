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


    function sendMessage(message) {
      vm.currentMessage = '';
      lightsService.addMessage(message);
    }

  }
})();
