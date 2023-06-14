import { createStore } from 'vuex'
import storeCategorys from './storeCategorys.js'
import userStore from './userStore.js'
import storeModels from './storeModels.js'
import storeModel from './storeSellModel.js'
import storeModelById from './storeModel.js'

export default createStore({
  modules: { storeCategorys, userStore,  storeModels, storeModel, storeModelById},

}) 


