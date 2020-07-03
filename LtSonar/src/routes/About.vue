<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="about-container">
        <div class="about">
            <h1 class="title">About</h1>
            <div class="dialog">
                <h3 class="title">Welcome to {{ name }}</h3>
                <p>This {{ name }} is your Vue.js App</p><br/>
                <p>
                VUE is a framework that allows us to break
                the front end into manageable and resusable components
                </p><br/>
                <p>
                There are a lot of moving parts to VUE, like other frameworks it provides the
                structure, you provide components and content.  Scalability and generating
                applications quickly is the goal.  A template like this one helps to quickstart
                your app.
                </p><br/>
                <p>
                This basic view is called a route edge or just a route.  This is the root edge.
                </p><br/>

                <ls-player-info :role="player.role" :team="player.team">
                    Special notes...
                </ls-player-info>

            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    import lsPlayerInfo from '@/components/PlayerInfo.vue'

    class AboutController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
            }

            this.injectGetters(['player']);
        }
    }

    export default new AboutController('pgAbout', { lsPlayerInfo });

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
        background-color: grey;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
