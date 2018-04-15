import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex) //

export default new Vuex.Store({
  state: {
    resume: {
      profile: {
        name: '',
        sex: '',
        date: undefined,
        city: '',
        phone:'',
      },
      study: [{
        school: '',
        degree: '',
        specialty: '',
      }],
      skill: [{
        type: '',
        level: '',
      }],
      work: [{
        company: '',
        position: '',
        content: '',
      }],
      fav: [{
        item: '',
      }],

    },
    user: {
      id: '',
      username: '',
    },
    currentTab: 0,
    icon: ['credential', 'xueli', 'skill', 'work', 'fav'],
    previewMode: false,
  },
  mutations: {
    switchTab(state, payload) {
      state.currentTab = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      localStorage.setItem('state', JSON.stringify(state))
    },
    switchPreview(state) {
      state.previewMode = true
    },
    updateResume(state, {path, value}) {
      if (value instanceof Date) {
        value = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()
      }
      objectPath.set(state.resume, path, value)
      // localStorage.setItem('state', JSON.stringify(state))
    },
    initState(state, payload) {
      Object.assign(state, payload)
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    setResume(state, payload) {
      Object.assign(state.resume, payload)
    },
    removeUser(state) {
      state.user.id = ''
    },
  },
})
