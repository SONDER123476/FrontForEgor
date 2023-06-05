import { createStore } from 'vuex'
import storeCategorys from './storeCategorys.js'
import userStore from './userStore.js'
import storeModels from './storeModels.js'


export default createStore({
  modules: { storeCategorys, userStore,  storeModels},
}) 


