<!--
<ls-error>
    -- user can add their own HTML code here, replaces 'slot' component --
</ls-error>

@copyright (c) 2020. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="error-dialog">  <!-- Just one main element per template -->
        <div>{{ title }}</div>
        <div>
            <!-- Put your HTML template here-->
            <slot></slot>
        </div>
        <button @click="doOK( event )">OK</button>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...
    class ErrorController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                title: "Error"
            }

            this.injectActions(['clearError']);
        }

        doOK( event ) {
            // A method that does something to the props or viewModel, or global state
            this.clearError();
        }
    }

    export default new ErrorController('lsError');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .error-dialog {
        position: absolute;
        top: 10em;
        display: flex;
        height: 20vh;
        width: 60vw;
        border: 3px solid red;
        background-color: darkcyan;
        padding: 0.25em;
        z-index: 10000;
    }

</style>