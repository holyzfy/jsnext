import Vue from 'vue';
import $ from 'jquery';
import 'libs/slick-1.8.1/slick';
import common from 'common';
import util from 'util';

function start () {
    console.log(Vue.version);
    console.log($.fn.jquery);
    console.log(`slick=${typeof $.fn.slick}`);
    console.log(util.toUpperCase('start module a' + ',' + common.env));
    import('two/module-b').then(module => module.start());
}

export default {
    start
};
