(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');
    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({
            message: 'pow!'
        });
        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcYXBwLmpzIiwiYXBwXFxzY3JpcHRzXFxzcmNcXG1haW4uanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFDTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSx1QkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQzdCLFlBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0I7QUFDMUIscUJBQVM7QUFEaUIsU0FBaEIsQ0FBZDtBQUdBLDJCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0gsS0FMRDtBQU1BLHVCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3BDLGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsS0FGRDtBQUdILEM7O0lBR0MsVztBQUNGLCtCQUlHO0FBQUEsWUFIVSxDQUdWLFFBSEMsT0FHRDtBQUFBLDZCQUZDLElBRUQ7QUFBQSxZQUZPLENBRVAsNkJBRlcsUUFFWDtBQUFBLGtDQURDLFNBQ0Q7QUFBQSxZQURZLENBQ1osa0NBRGlCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNoQjs7QUFBQTs7QUFDQyxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNIOzs7O29DQUNXO0FBQ1IsbUJBQU87QUFDSCxzQkFBTSxLQUFLLElBRFI7QUFFSCx5QkFBUyxLQUFLLE9BRlg7QUFHSCwyQkFBVyxLQUFLO0FBSGIsYUFBUDtBQUtIOzs7Ozs7a0JBRVUsTzs7Ozs7QUNsQ2Y7Ozs7OztBQUNBOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2YsYUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUMxQyxXQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0gsS0FIRDtBQUlIOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDN0MsV0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEVBQUUsSUFBekI7QUFDQSxZQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7QUFDQSx3QkFBZ0IsSUFBaEI7QUFDSCxLQUpEO0FBS0g7O0FBRUQsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFdBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FBWjtBQUNIOztrQkFFYztBQUNYLGNBRFc7QUFFWCw0Q0FGVztBQUdYLGtEQUhXO0FBSVg7QUFKVyxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xyXG5jbGFzcyBDaGF0QXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XHJcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncG93ISdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIG1lc3NhZ2U6IG0sXHJcbiAgICAgICAgdXNlcjogdSA9ICdiYXRtYW4nLFxyXG4gICAgICAgIHRpbWVzdGFtcDogdCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICB9XHJcbiAgICBzZXJpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XHJcbiIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcclxubmV3IENoYXRBcHAoKTtcclxuIiwibGV0IHNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXQodXJsKSB7XHJcbiAgICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZS5kYXRhKTtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XHJcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQsXHJcbiAgICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcclxuICAgIHNlbmRNZXNzYWdlXHJcbn1cclxuIl19
