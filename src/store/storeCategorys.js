import requestCategory from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
            count: 69,
        }
    },
    mutations: {},
    actions: {
        async getCategorys(){
            try {
                const data = (await requestCategory.loadCat.loadCategorys())
                console.log(data)
            } catch (error) {
                console.log(error.response.data)
            }
            
        }
  }
}