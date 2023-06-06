import signinApi from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
        }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async uploadModelFile(context, form) {
            console.log(form)
			try {
                
				await signinApi.uploadModel.sellModel(form)
			} catch(error) {
				console.log(error.response)
			}
		},
        
    }
}