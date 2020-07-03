<!--
Directive: ls-icon="weapon|sonar|special"

-->
<template></template>
<script>
'use strict';
import Vue from 'vue'

export default Vue.directive('lsIcon', {

    bind( el, binding, vnode ) {

        el.innerHTML = `<span class="icon ${binding.value}"></span>`;

        //el.addEventListener('click', event => {});
    }

});

</script>
<style>
    .icon {
        width: 32px;
        height: 32px;
    }
    .weapon { background-image: url('../assets/vfs_logo.png'); }
    .sonar { background-image: url('../assets/vfs_logo.png'); }
    .special { background-image: url('../assets/vfs_logo.png'); }

</style>