import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) //

export default new Vuex.Store({
  state: {
    resume: {
      profile: {
        name: '',
        region: '',
        date: '',
        city: '',
      },
      study: [{
        school: '',
        degree: '',
        specialty: '',
      },],
      skill: [{
        type: '',
        level: '',
      },],
      work: [{
        company: '',
        position: '',
        content: '',
      },],
      fav: [{
        item: '',
      },],
    },
    currentTab: 0,
    icon: ['credential', 'xueli', 'skill', 'work', 'fav'],
  },
  mutations: {
    switchTab(state, payload) {
      state.currentTab = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
    },
  },
})
