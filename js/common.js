define(['module', 'exports'], function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var devHost = ['127.0.0.1', 'localhost'];
    var env = devHost.includes(location.hostname) ? 'development' : 'production';

    exports.default = {
        env: env
    };
    module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzbmV4dC9jb21tb24uanMiXSwibmFtZXMiOlsiZGV2SG9zdCIsImVudiIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJob3N0bmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBSUEsVUFBVSxDQUNWLFdBRFUsRUFFVixXQUZVLENBQWQ7QUFJQSxRQUFJQyxNQUFNRCxRQUFRRSxRQUFSLENBQWlCQyxTQUFTQyxRQUExQixJQUFzQyxhQUF0QyxHQUFxRCxZQUEvRDs7c0JBRWU7QUFDWEg7QUFEVyxLIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZXZIb3N0ID0gW1xuICAgICcxMjcuMC4wLjEnLFxuICAgICdsb2NhbGhvc3QnXG5dO1xudmFyIGVudiA9IGRldkhvc3QuaW5jbHVkZXMobG9jYXRpb24uaG9zdG5hbWUpID8gJ2RldmVsb3BtZW50JzogJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZW52XG59O1xuXG4iXX0=