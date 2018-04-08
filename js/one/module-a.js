define(['module', 'exports', 'vue', 'jquery', 'common', 'util', 'libs/slick-1.8.1/slick'], function (module, exports, _vue, _jquery, _common, _util) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _vue2 = _interopRequireDefault(_vue);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _common2 = _interopRequireDefault(_common);

    var _util2 = _interopRequireDefault(_util);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var tmplHeader = '<header><h1>mytitle</h1></header>';


    function start() {
        console.log(_vue2.default.version);
        console.log(_jquery2.default.fn.jquery);
        console.log('slick=' + _typeof(_jquery2.default.fn.slick));
        console.log(_util2.default.toUpperCase('start module a' + ',' + _common2.default.env));
        console.log('tmplHeader=' + tmplHeader);
        setTimeout(function () {
            new Promise(function (resolve) {
                return require(['two/module-b'], resolve);
            }).then(function (module) {
                return module.start();
            });
        }, 3000);
    }

    exports.default = {
        start: start
    };
    module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzbmV4dC9vbmUvbW9kdWxlLWEuanMiXSwibmFtZXMiOlsic3RhcnQiLCJjb25zb2xlIiwibG9nIiwidmVyc2lvbiIsImZuIiwianF1ZXJ5Iiwic2xpY2siLCJ0b1VwcGVyQ2FzZSIsImVudiIsInRtcGxIZWFkZXIiLCJzZXRUaW1lb3V0IiwidGhlbiIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsYUFBU0EsS0FBVCxHQUFrQjtBQUNkQyxnQkFBUUMsR0FBUixDQUFZLGNBQUlDLE9BQWhCO0FBQ0FGLGdCQUFRQyxHQUFSLENBQVksaUJBQUVFLEVBQUYsQ0FBS0MsTUFBakI7QUFDQUosZ0JBQVFDLEdBQVIsb0JBQTRCLGlCQUFFRSxFQUFGLENBQUtFLEtBQWpDO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVksZUFBS0ssV0FBTCxDQUFpQixtQkFBbUIsR0FBbkIsR0FBeUIsaUJBQU9DLEdBQWpELENBQVo7QUFDQVAsZ0JBQVFDLEdBQVIsaUJBQTBCTyxVQUExQjtBQUNBQyxtQkFBVyxZQUFNO0FBQ2I7QUFBQSxnQ0FBTyxjQUFQO0FBQUEsZUFBdUJDLElBQXZCLENBQTRCO0FBQUEsdUJBQVVDLE9BQU9aLEtBQVAsRUFBVjtBQUFBLGFBQTVCO0FBQ0gsU0FGRCxFQUVHLElBRkg7QUFHSDs7c0JBRWM7QUFDWEE7QUFEVyxLIiwiZmlsZSI6Im1vZHVsZS1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnbGlicy9zbGljay0xLjguMS9zbGljayc7XG5pbXBvcnQgY29tbW9uIGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCB0bXBsSGVhZGVyIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9oZWFkZXIuaHRtbCc7XG5cbmZ1bmN0aW9uIHN0YXJ0ICgpIHtcbiAgICBjb25zb2xlLmxvZyhWdWUudmVyc2lvbik7XG4gICAgY29uc29sZS5sb2coJC5mbi5qcXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKGBzbGljaz0ke3R5cGVvZiAkLmZuLnNsaWNrfWApO1xuICAgIGNvbnNvbGUubG9nKHV0aWwudG9VcHBlckNhc2UoJ3N0YXJ0IG1vZHVsZSBhJyArICcsJyArIGNvbW1vbi5lbnYpKTtcbiAgICBjb25zb2xlLmxvZyhgdG1wbEhlYWRlcj0ke3RtcGxIZWFkZXJ9YCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGltcG9ydCgndHdvL21vZHVsZS1iJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLnN0YXJ0KCkpO1xuICAgIH0sIDMwMDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnRcbn07XG4iXX0=