define(function (require) {

var Vue = require('vue');
var $ = require('jquery');
require('libs/slick-1.8.1/slick');
var common = require('common');
var util = require('util');

function start () {
    console.log(Vue.version);
    console.log($.fn.jquery);
    console.log('slick=', typeof $.fn.slick);
    console.log(util.toUpperCase('start module a' + ',' + common.env));
}

return {
    start: start
};

});
