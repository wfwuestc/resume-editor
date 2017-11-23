import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样

Vue.use(Vuex) //

export default new Vuex.Store({
  state: {
    resume:{
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
        content:''
      },],
      fav: [{
        item: '',
      },]
    }
  },
  mutations: {

  },
})
