<!--
<ls-player-info role="" team="">
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-player-info>

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <div class="component-style">  <!-- Just one main element per template -->
        <div class="player=card">
            <div class="status-box">
                <label>Role:</label><span class="info right">{{ role }}</span>
            </div>
            <div class="status-box">
                <label>Team:</label><span class="info right">{{ team }}</span>
            </div>

            <!-- Put your HTML template here-->
            <div class="status-box">
                <label>Status:</label>
                <div v-if="role == $route.name">
                    <!-- show the green indicator -->
                    <span class="info right flash">Active</span>
                    <span class="active-light active right"></span>
                </div>
                <div v-if="role != $route.name">
                    <!-- show the green indicator -->
                    <span class="info right">Inactive</span>
                    <span class="active-light inactive right"></span>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class PlayerInfoController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
            }
            this.props = { // props are passed in when using this component
                role: String,
                team: String,
            }
        }
    }

    export default new PlayerInfoController('ls-player-info'/* , { subComponent, anotherComponent } */);

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        height: 20vh;
        background-color:darkslategray;
    }

    label {
        font-weight: 700;
        margin-right: 1em;
    }

    .info { color: white; font-size: 1.1em; }
    .left { float: left; }
    .right { float: right; }

    .active-light {
        float: right;
        width: 1px;
        border-radius: 30px;
    }

    .active { border: 15px solid green; }
    .inactive { border: 15px solid red; }

    .flash {
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
        animation-name: flash-font;
    }

    @keyframes flash-font {
        from { color: yellow; font-size: 1.4em; }
        to { color: white; font-size: 1.1em; }
    }

</style>