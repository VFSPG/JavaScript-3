<!--
VFS VUE Single File Component

<pg-header></pg-header>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <header id="header-wrapper" class="grid-header area vue-component">
        <div id="header-container" class="header flexbox">
            <div class="logo flexitem" @click="goHome( event )"></div>
            <slot class="flexitem"></slot>
            <div class="title flexitem">
                <h1>{{ title }}</h1>
                <h3>{{ subtitle }}</h3>
            </div>
        </div>
    </header>

</template>
<script>
    import Controller from '@/../lib/controller'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                //title: "Demo Vue App",
                subtitle: "VFS Programming for Games",
            }
            this.props = {
                title: String
            }
        }

        goHome( event ) {
            // do some router magic here to actualy change the URL
            console.log("Going home now!");
            location.href = "./index.html";
        }
    }

    export default new HeaderController('pgHeader');
/*
Below is the exact data structure Vue expects to take as input
when it creates a new component, and registers it.
This is what the Controller base class returns from the constructor

export default {
    name: 'pgHeader',
    data() {
        return {
            vm: {
                title:    "VUE Template Title",
                subtitle: "A Beggining",
            }
        }
    },
    props:   [],
    methods: {
        $ctrl: {
            goHome( event ) {
                console.log("Going home now!");
                location.href = "./index.html";
            }
        }
    },
    filters: {},
    watches: {}
}
*/
</script>
<style scoped>
    .title h1, .title h3 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }
</style>