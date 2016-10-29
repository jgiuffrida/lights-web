(function() {
  'use strict';

  angular
    .module('lights')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.html5Mode(true);
  }

})();
