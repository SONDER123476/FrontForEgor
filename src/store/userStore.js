import signinApi from '../api/index'

export default {
    namespaced: true,
    state() { 
        return {
            count: 69,
        }
    },
    mutations: {},
    actions: {
        async signUp(form) {
			try {
				const data = (await signinApi.auth.signUp( {
									name: form.name,
									email: form.email,
									password: form.password,
								}))
				localStorage.setItem('user', JSON.stringify(data))
			} catch(error) {
				console.log(error.response.data)
			}
			console.log("хуйня не тут")
			
		}
  }
}