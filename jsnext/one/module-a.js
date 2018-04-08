import Vue from 'vue';
import $ from 'jquery';
import 'libs/slick-1.8.1/slick';
import common from 'common';
import util from 'util';
import tmplHeader from '../../templates/header.html';

function start () {
    console.log(Vue.version);
    console.log($.fn.jquery);
    console.log(`slick=${typeof $.fn.slick}`);
    console.log(util.toUpperCase('start module a' + ',' + common.env));
    console.log(`tmplHeader=${tmplHeader}`);
    import('two/module-b').then(module => module.start());
}

export default {
    start
};
