import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
    loadLength: true,
    toggleHide:true,
}
var getters = {
    getters_loadLength(state) { 
        return state.loadLength
    },
    getters_toggleHide(state) { 
        return state.toggleHide
    },  
}
var mutations = {
    mutations_loadLength(state, data) {
        state.loadLength = data 
    },
    mutations_toggleHide(state, data) {
        state.toggleHide = data 
    }
}
var actions = {
    actions_loadLength({ commit }, data) {
        commit('mutations_loadLength', data)
    },
    actions_toggleHide({ commit }, data) {
        commit('mutations_toggleHide', data)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})