angular.module('lights')
    .service('lightsService', LightsService);

/** @mgInject */
function LightsService(LightSocket, $q, $http) {
    var self = this;
    this.socket = LightSocket;
    this.data = {
        outlets: [],
        messages: [],
        messageProgress: 0
    };

    this.listen();
}

_.assign(LightsService.prototype, {
    listen: function() {
        var self = this;
        this.socket.on('lights:outlet:status', this.updateOutlets.bind(this));
        this.socket.on('lights:error', this.error.bind(this));
        this.socket.on('lights:message:status', this.updateMessages.bind(this));
        this.socket.on('lights:message:progress', this.updateProgress.bind(this));
    },
    updateOutlets: function(status) {
        this.data.outlets = status;
    },
    updateMessages: function(messages) {
        console.log('messages',messages);
        this.data.messages = messages;
    },
    updateProgress: function(status) {
        console.log('progress', status);
        this.data.messageProgress = status.progress;
        if(status.progress === 100) {
            this.data.messageProgress = 0;
        }
    },
    error: function(err) {
        console.log(err);
    },
    addMessage: function(msg) {
        this.socket.emit('lights:add:message', { message: msg });
    },
    setOutlet: function(outlet, status) {
        this.socket.emit('lights:set:outlet', {id: outlet, status: status});
    },

    getStatus: function(resetCache) {
        if(resetCache) {
            return $http.get('/api/lights/status')
                .then(function(res) {
                    this.data.outlets = res.data;
                    return this.outlets;
                });
        }else{
            return $q.when(this.outlets);
        }
    }
});