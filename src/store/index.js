import { createStore } from 'vuex'
import storeCategorys from './storeCategorys.js'
import userStore from './userStore.js'


export default createStore({
  modules: { storeCategorys, userStore },
}) 


