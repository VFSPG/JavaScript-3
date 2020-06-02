<!--
VFS VUE Single File Component
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

usage: <ls-engineer user="username" />
-->
<template>

    <section class="engineer-container">
        <div class="about">
            <h1 class="title">{{ name }} ({{ playerName }})</h1>

            <ls-chat :user="user" team="Team A"/>

        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import lsChat from '@/components/Chat.vue'

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'Engineer Control Panel',
            }
            this.props = {
                user: String,
            }
            this.injectGetters(['playerName']);
        }
    }

    export default new EngineerController('lsEngineer', { lsChat });

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
