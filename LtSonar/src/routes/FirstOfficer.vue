<!--
VFS VUE Single File Component
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="first-officer-container">
        <div class="about">
            <h1 class="title">{{ name }} ({{ playerName }})</h1>
            <!--
                OR
            <ls-title :game="name" :player="playerName"></ls-title>
                OR
            <div class="title" :v-page-title="name playerName"></div>
            -->
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class FirstOfficerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'First Officer Control Panel',
            }
        }
    }

    export default new FirstOfficerController('lsXO');

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
