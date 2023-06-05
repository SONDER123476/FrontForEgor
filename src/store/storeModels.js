import requestCategory from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
            models:[]
        }
    },
    getters: {
        getAllModels: (state) => {
            console.log(state.models)
            return state.models
        },
        getModelById: (state) => (id) => {   
            return (state.models.find((model) => model.id === id)) || id;
          }
    },
    mutations: {
        SET_MODEL(state, modelsList){
            state.models = modelsList.data.rows
        }
    },
    actions: {
        async getModels({ commit }){
            console.log('adasd')
            try {
                const payload = (await requestCategory.loadMod.loadModels())
                console.log(payload)
                commit('SET_MODEL', payload)
            } catch (error) {
                console.log(error.response.data)
            }
            
        }
  }
}