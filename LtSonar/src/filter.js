/**
@name:  PGFilter - for rendering text the certain way with filters
@usage: {{ myText | vuefilter | anothervuefilter }}

Created June 2018.

@author: Clinton Ramonida
@sources: "truncate" code is by Bryan Kizer, source is here: https://gist.github.com/belsrc/672b75d1f89a9a5c192c

Copyright (c) 2018. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'

Vue.filter("uppercase", value => (!value ? '' : value.toUpperCase()));
Vue.filter("lowercase", value => (!value ? '' : value.toLowerCase()));

Vue.filter("capitalize", ( value ) => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter("camelcase", ( value ) => {
    if (!value) return ''
    return value.split(' ').map( (item) => {
        return item.charAt(0).toUpperCase() + item.substring(1);
    }).join(' ');
});


/** Vue filter to truncate a string to the specified length.
 * @param {String} value The value string.
 */
Vue.filter('truncate', function(value, length) {
    if(value.length < length) {
        return value;
    }
    length = length - 3;
    return value.substring(0, length) + '...';
});
