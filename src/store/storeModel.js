import requestCategory from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
            model:[]
        }
    },
    getters: {
        getModel: (state) => {
            return state.model
        },
    },
    mutations: {
        SET_MODEL(state, modelsList){
            state.model = modelsList.data
        }
    },
    actions: {
        async loadModel(context, id){
            console.log(id)
            try {
                const payload = (await requestCategory.loadMod.loadModel(id))
                console.log(payload)
                context.commit('SET_MODEL', payload)
            } catch (error) {
                console.log(error.response.data)
            }
            
        }
  }
}