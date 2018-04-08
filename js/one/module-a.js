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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzbmV4dC9vbmUvbW9kdWxlLWEuanMiXSwibmFtZXMiOlsic3RhcnQiLCJjb25zb2xlIiwibG9nIiwidmVyc2lvbiIsImZuIiwianF1ZXJ5Iiwic2xpY2siLCJ0b1VwcGVyQ2FzZSIsImVudiIsInRtcGxIZWFkZXIiLCJ0aGVuIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxhQUFTQSxLQUFULEdBQWtCO0FBQ2RDLGdCQUFRQyxHQUFSLENBQVksY0FBSUMsT0FBaEI7QUFDQUYsZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBRUUsRUFBRixDQUFLQyxNQUFqQjtBQUNBSixnQkFBUUMsR0FBUixvQkFBNEIsaUJBQUVFLEVBQUYsQ0FBS0UsS0FBakM7QUFDQUwsZ0JBQVFDLEdBQVIsQ0FBWSxlQUFLSyxXQUFMLENBQWlCLG1CQUFtQixHQUFuQixHQUF5QixpQkFBT0MsR0FBakQsQ0FBWjtBQUNBUCxnQkFBUUMsR0FBUixpQkFBMEJPLFVBQTFCO0FBQ0E7QUFBQSw0QkFBTyxjQUFQO0FBQUEsV0FBdUJDLElBQXZCLENBQTRCO0FBQUEsbUJBQVVDLE9BQU9YLEtBQVAsRUFBVjtBQUFBLFNBQTVCO0FBQ0g7O3NCQUVjO0FBQ1hBO0FBRFcsSyIsImZpbGUiOiJtb2R1bGUtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2xpYnMvc2xpY2stMS44LjEvc2xpY2snO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdjb21tb24nO1xuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgdG1wbEhlYWRlciBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvaGVhZGVyLmh0bWwnO1xuXG5mdW5jdGlvbiBzdGFydCAoKSB7XG4gICAgY29uc29sZS5sb2coVnVlLnZlcnNpb24pO1xuICAgIGNvbnNvbGUubG9nKCQuZm4uanF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhgc2xpY2s9JHt0eXBlb2YgJC5mbi5zbGlja31gKTtcbiAgICBjb25zb2xlLmxvZyh1dGlsLnRvVXBwZXJDYXNlKCdzdGFydCBtb2R1bGUgYScgKyAnLCcgKyBjb21tb24uZW52KSk7XG4gICAgY29uc29sZS5sb2coYHRtcGxIZWFkZXI9JHt0bXBsSGVhZGVyfWApO1xuICAgIGltcG9ydCgndHdvL21vZHVsZS1iJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLnN0YXJ0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnRcbn07XG4iXX0=