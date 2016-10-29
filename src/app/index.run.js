(function() {
  'use strict';

  angular
    .module('lights')
    .run(runBlock);

  /** @ngInject */
  function runBlock(
    $log,
    LightSocket
  ) {
    $log.debug('runBlock end');
  }

})();

angular.module('lights')
  .factory('LightSocket',LightSocket);

/** @ngInject */
function LightSocket(socketFactory) {
  console.log('running');
  return socketFactory(io.connect('localhost:3000/api'));
}
