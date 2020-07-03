/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use( Vuex, Axios )

// Modules
import ModelStore from '@/store/modelStore'
import PlayerStore from '@/store/playerStore'

// Store with modules
const store = new Vuex.Store({
    modules: {
        PlayerStore,
        ModelStore,
    }
});

//      OR

// Store with local definitions
//const store = new Vuex.Store({ state, mutations, actions, getters });

export default store;