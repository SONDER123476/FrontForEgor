import requestCategory from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
            categorys:[]
        }
    },
    getters: {
        getAllCategorys: (state) => {
            return state.categorys
        },
        getCategoryById: (state) => (id) => {   
            return (state.categorys.find((category) => category.id === id)) || id;
          }
    },
    mutations: {
        SET_CATEGORY(state, categorysList){
            state.categorys = categorysList.data
        }
    },
    actions: {
        async getCategorys({ commit }){
            try {
                const payload = (await requestCategory.loadCat.loadCategorys())
                commit('SET_CATEGORY', payload)
            } catch (error) {
                console.log(error.response.data)
            }
            
        }
  }
}