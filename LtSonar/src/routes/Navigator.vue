<!--
VFS VUE Single File Component
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="navigator-container">
        <div class="about">
            <h1 class="title">{{ name }}</h1>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class NavigatorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Navigator Control Panel',
            }
        }
    }

    export default new NavigatorController('lsNavigator');

</script>
<style scoped>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
