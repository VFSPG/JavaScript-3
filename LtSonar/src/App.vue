<!--
<pg-app></pg-app>
@copyright (c) 2018. Scott Henshaw, Clinton Jay Ramonida. All Rights Reserved.
-->
<template>

    <main class="grid-frame vue-main-rootcomponent">
        <pg-header :title="title"></pg-header>
        <pg-sidebar></pg-sidebar>

        <!-- TODO:have this dynamically change and generate appropriate info for different sections -->
        <router-view />

        <div class="dialog-container">
            <!-- dialogs instanciate within this container -->
        </div>
        <div class="loader">
            <svg viewBox="0 0 32 32" width="32" height="32">
                <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
            </svg>
        </div>
    </main>

</template>
<script>
    // typical Vue component controller defined and registered here
    import Controller from '@/../lib/controller'

    import pgHeader  from '@/views/Header.vue'
    import pgNavbar from '@/views/Navbar.vue'
    import pgSidebar from '@/views/Sidebar.vue'

    class AppController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title: 'Lt Sonar',
                subtitle: ''
            }
        }

        doIt() {
            this.title = 'A new title'; // refers to viewModel.title (or it will)
        }
    }

    // export a definition for this view
    export default new AppController('pgApp', { pgHeader, pgSidebar, pgNavbar });

</script>
<style>
    /**
    * CSS Styles for VFS Demo App
    *
    * @Copyright 2014-2015, Vancouver Film School, In cooperation with Kibble Games Inc.
    * @author: Scott Henshaw
    * @Contributor: Clinton Ramonida
    */

    /* DEFAULTS */
    *, *::before, *::after { box-sizing: border-box; }
    html { font-size: 100%; }
    * { margin: 0; padding: 0; }

    body {
        background-color: rgb(194, 193, 193);
        font-family: 'Maven Pro', Helvetica, sans-serif;
        overflow: hidden;
    }

    label {
        color: white;
        font-weight: 600;
        text-shadow: 2px 2px #777;
    }

    input {
        background-color: white;
        color: black;
        font-family: 'Maven Pro', Helvetica, sans-serif;
        font-size: 17px;
    }

    input[type=button] {
        background-color: black;
        margin: 3px;
        padding: 3px 8px;
        border: 1px solid black;
    }

    input[type=button]:hover {
        background-color: gray;
    }

    input[type=button]:focus {
        background-color: #D10034;
        border: 1px solid black;
    }

    /* GRID FRAME/CONTAINER (PARENT) */
    .grid-frame {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-rows: auto;
        grid-template-areas:
        "headbar headbar headbar headbar headbar headbar headbar headbar headbar headbar"
        "sidecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent thecontent"
        "footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent footcontent" ;
        justify-items: start;
    }

    .grid-header {
        grid-area: headbar;
        z-index: 1000;
        width: 100vw;
        height: 120px;
    }

    .grid-nav {
        grid-area: navbar;
    }

    .grid-content {
        grid-area: thecontent;
        width: 100%;
        height: 82vh;
    }

    .grid-side {
        grid-area: sidecontent;
        width: 12vw;
        height: 82vh;
    }

    .grid-foot {
        grid-area: footcontent;
        width: 100vw;
        height: 100px;
    }

    /* GRID CONTAINER CHILD (CHILD BUT A CONTAINER) */
    .grid-frame-child {
        display: grid;
        background: #FFFFFF;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(15, 1fr);
        height: 100%;
        width: 100%;
    }

    .grid-intro{
        grid-column: 2/9;
        grid-row: 2/3;
    }

    .grid-filter{
        grid-column: 9/15;
        grid-row: 2/3;
        text-align: end;
    }

    .grid-tile{
        grid-column: 2/15;
        grid-row: 3/15;
    }

    /* FLEX CONTAINER (PARENT) */
    .flexbox {
        display: flex;
        background-color: rgb(241, 244, 247);
        height: 100%;
    }

    /* FLEX ITEMS (CHILDREN) */
    .flexitem{
        align-self: center;
    }

    /* header */
    .header {
        background: #D10034;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 5px -5px #222;
    }

    .logo {
    background-image:url("assets/vfs_logo.png");
    background-size:100% 100%;
    height: 6em;
    width: 8em;
    max-width: 8em;
    margin-left: 1em;
    cursor: pointer;
    }

    .title {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
    }

    .search-bar{
        color: white;
        margin-right: 5em;
        margin-top: 5em;
        cursor: pointer;
        visibility: hidden;
    }

    /* sidebar */
    .sidebar {
        flex-direction: column;
        background: #4c4c4c;
        box-shadow: inset -1px 0 2px 1px #222;
    }

    .side-item {
        margin-top: 2em;
        padding: 1em;
    }

    /* navigation bar */
    .menu { background: rgba(0, 0, 0, 0); }

    .navbar{
        margin-top: 2em;
        width: 100%;
        height: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        list-style-type: none;
        overflow: hidden;
    }

    li {
        background: #D10034;
        float: left;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    li:hover {
        background-color: #111;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 5px 5px rgba(0,0,0,0.22);
    }

    li a {
        display: block;
        color: white;
        text-align: start;
        text-decoration: none;
        padding: 0.7em;
    }

    /* content */
    .content {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-x: hidden;
        /* overflow-y: scroll; */
        justify-content: space-evenly;
        background: #FFFFFF;
    }
    .content-intro {
        font-weight:bold;
    }

    /* content form*/
    .edit-form {
        display: grid;
        grid-template-areas: ".form.";
        overflow: hidden;
        width: 65vw;
    }

    .edit-form-child {
        grid-area: form;
        overflow: auto;
    }

    .formitems{
        margin: 15px 10px 15px 10px;
    }

    .description-box{
        margin: 40px 10px 40px 10px;
    }

    #review-button{
        width: 95%;
        margin: 10px;
    }

    /* Button Styles */
    .buttons {
        justify-content: center;
        align-items: center;
    }

    .btn{
        background-color: white;
        color: black;
        height: 40px;
        width: 80px;
        margin: 2px;
        border: 2px solid black;
    }

    .btn:hover {
        background-color: #555555;
        color: white;
    }



    /* Heading Styles */
    h1 {
        color: white;
    }

    h2 {
        color: white;
        font-family: 'Roboto', Helvetica, sans-serif;
        margin: 3px 0px 3px 0px;
    }

    h3{
        color: white;
        font-family: 'Raleway', Helvetica, sans-serif;
    }

    h4{
        color: white;
        font-family: 'Raleway', Helvetica, sans-serif;
    }



    /* Vue components Styles */
    .vue-main-rootcomponent{
        /* border: 2px solid black; */
    }

    .vue-component{
        /* border: 2px solid black;  */
    }

    .vue-sub-component{
        /* border: 2px solid black; */
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .control-panel {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>
