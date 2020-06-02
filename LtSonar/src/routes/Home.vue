<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class="home">
            <div>Welcome to your {{ name }} {{ playerName }}</div>
            <div class="dialog">
                <form class="sample-form">
                    <label>Sample field
                        <input name="s1" v-model="formData.sampleOne">
                    </label><br/>
                    <label>Number field:
                        <input name="s2" v-model="formData.sampleTwo">
                    </label><br/>
                    <button value="Submit" class="">Submit</button>
                </form>

                Lobby here:
                <form class="sample-form" @submit.prevent="login( nickname )">
                    <label>Nickname: </label><input name="nick" v-model="nickname" :placeholder="playerName">
                </form>

            </div>
        </div>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    sampleOne:"",
                    sampleTwo:42,
                },
                nickname: ""
            }
            this.props = {
                name: String,
            }
            this.injectActions(['setName']);
            this.injectGetters(['playerName']);
        }

        login( nickname ) {

            this.setName( nickname );
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }
</style>
