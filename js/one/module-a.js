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

    function start() {
        console.log(_vue2.default.version);
        console.log(_jquery2.default.fn.jquery);
        console.log('slick=' + _typeof(_jquery2.default.fn.slick));
        console.log(_util2.default.toUpperCase('start module a' + ',' + _common2.default.env));
        new Promise(function (resolve) {
            return require(['two/module-b'], resolve);
        }).then(function (module) {
            return module.start();
        });
    }

    exports.default = {
        start: start
    };
    module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzbmV4dC9vbmUvbW9kdWxlLWEuanMiXSwibmFtZXMiOlsic3RhcnQiLCJjb25zb2xlIiwibG9nIiwidmVyc2lvbiIsImZuIiwianF1ZXJ5Iiwic2xpY2siLCJ0b1VwcGVyQ2FzZSIsImVudiIsInRoZW4iLCJtb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLGFBQVNBLEtBQVQsR0FBa0I7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWSxjQUFJQyxPQUFoQjtBQUNBRixnQkFBUUMsR0FBUixDQUFZLGlCQUFFRSxFQUFGLENBQUtDLE1BQWpCO0FBQ0FKLGdCQUFRQyxHQUFSLG9CQUE0QixpQkFBRUUsRUFBRixDQUFLRSxLQUFqQztBQUNBTCxnQkFBUUMsR0FBUixDQUFZLGVBQUtLLFdBQUwsQ0FBaUIsbUJBQW1CLEdBQW5CLEdBQXlCLGlCQUFPQyxHQUFqRCxDQUFaO0FBQ0E7QUFBQSw0QkFBTyxjQUFQO0FBQUEsV0FBdUJDLElBQXZCLENBQTRCO0FBQUEsbUJBQVVDLE9BQU9WLEtBQVAsRUFBVjtBQUFBLFNBQTVCO0FBQ0g7O3NCQUVjO0FBQ1hBO0FBRFcsSyIsImZpbGUiOiJtb2R1bGUtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2xpYnMvc2xpY2stMS44LjEvc2xpY2snO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdjb21tb24nO1xuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmZ1bmN0aW9uIHN0YXJ0ICgpIHtcbiAgICBjb25zb2xlLmxvZyhWdWUudmVyc2lvbik7XG4gICAgY29uc29sZS5sb2coJC5mbi5qcXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKGBzbGljaz0ke3R5cGVvZiAkLmZuLnNsaWNrfWApO1xuICAgIGNvbnNvbGUubG9nKHV0aWwudG9VcHBlckNhc2UoJ3N0YXJ0IG1vZHVsZSBhJyArICcsJyArIGNvbW1vbi5lbnYpKTtcbiAgICBpbXBvcnQoJ3R3by9tb2R1bGUtYicpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0XG59O1xuIl19