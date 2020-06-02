<!--
VFS VUE Single File Component
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

Usage:  <ls-captain user="username" />
-->
<template>

    <section class="captain-container">
        <div class="control-panel">
            <h1 class="title">{{ name }} ({{ playerName }})</h1>

            <div class="map panel-main">
                <table class="captain-map">
                    <tr v-for="(row, i) in mapData" :key="i" :class="row">
                        <td v-for="(col, j) in row" :key="j" class="cell"></td>
                    </tr>
                </table>
            </div>

            <ls-chat :user="user" team="Team A"/>

            <div class="status panel-status">Sub is not sunk</div>
            <div class="controls panel-control">Buttons here</div>

        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'

    class CaptainController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Captain Control Panel',
                mapData: [
                    ["water", "water",   "island", "island", "water", "water"],
                    ["island", "island", "water", "water", "water", "water"],
                    ["water", "water",   "water", "water",  "water", "water"],
                    ["water", "water", "water", "water",  "water", "water"],
                    ["water", "water", "water", "water", "island", "water"],
                    ["water", "water", "island", "water", "water", "water"],
                ],
            }
            this.props = {
                user: String,
            }
            this.injectGetters(['playerName']);
        }
    }

    export default new CaptainController('lsCaptain', { lsChat });

</script>
<style scoped>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }


    .title {
        text-shadow: 2px 2px #777;
    }

    .cell {
        width: 4em;
        height: 4em;
        border: 1px solid blue;
    }

    .water {
        background-color: blue;
    }

    .island {
        background-color: green;
    }
</style>
