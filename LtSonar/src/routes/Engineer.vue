<!--
VFS VUE Single File Component
Copyright (c) 2020. Scott Henshaw, Kibble Online Inc. All Rights Reserved.

usage: <ls-engineer user="username" />
-->
<template>

    <section class="engineer-container">

        <div class="about">
            <h1 class="title">{{ name }} ({{ player.name }})</h1>
            <ls-player-info ls-icon="weapons" class="player-info" :role="player.role" :team="player.team">
                {{ captainsLog }}
            </ls-player-info>
            <ls-chat :user="user" :team="player.team" />
        </div>

    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    import lsChat from '@/components/Chat.vue'
    import lsPlayerInfo from '@/components/PlayerInfo.vue'

    class EngineerController extends Controller {

        constructor( name, subComponentList = []) {

            super( name, subComponentList );

            this.vm = {
                name: 'Engineer Control Panel',
            }
            this.props = {
                user: String,
            }

            this.injectGetters(['player']);
        }

        on_someUpdate() {
            // whenver there is an update
        }

        vue_beforeCreated() {

        }

        myMethod() {
            // do something
        }



        /*
        This object is what the Controller constructor creates

        {
            this.data() {
                return {
                    name: 'Engineer Control Panel';
                }
            }
            this.computed = {
                SomeUpdate() {}

            }
            this.methods = {

                myMethod() {}
            }

            // Lifecycle hooks
            this.beforeCreated() {}

            this.beforeUpdate() {}
            this.updated() {}
        }
        */
    }

    export default new EngineerController('lsEngineer', { lsChat, lsPlayerInfo });

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

    .player-info {
        width: 40vw;
    }
</style>
