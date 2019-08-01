import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
    loadLength: true
}
var getters = {
    getters_loadLength(state) { 
        return state.loadLength
    }, 
}
var mutations = {
    mutations_loadLength(state, data) {
        state.loadLength = data 
    }
}
var actions = {
    actions_loadLength({ commit }, data) {
        commit('mutations_loadLength', data)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})