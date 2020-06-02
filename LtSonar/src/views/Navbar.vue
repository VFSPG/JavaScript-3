<!--
VFS VUE Single File Component

<pg-navbar></pg-navbar>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <nav id="navigation-wrapper" class="grid-nav area vue-component">
        <div id="menu-container" class="menu flexbox">
            <div class="navbar flexitem">
                <ul id="ul-sidenav">
                    <li id="li-sidenav" v-for="(item, index) in navMenu" :key="index">
                        <router-link :to="{ name:item.section }">{{ item.section }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script>
    import Controller from '@/../lib/controller'

    class NavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                navMenu:[
                    { section: "Lobby" },
                    { section: "Navigator" },
                    { section: "Captain" },
                    { section: "FirstOfficer" },
                    { section: "Engineer" },
                    { section: "Home" },
                ]
            };
        }
    }

    export default new NavbarController('pgNavbar');

</script>

<style>
</style>