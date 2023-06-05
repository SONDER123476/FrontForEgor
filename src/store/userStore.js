import signinApi from '../api/index'
import jwt_decode from "jwt-decode"

export default {
    namespaced: true,
    state() { 
        return {
            user: null,
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = jwt_decode(payload.data.token)
        }
    },
    actions: {
        async signUp(context, form) {
            console.log(form)
			try {
				const payload = (await signinApi.auth.signUp(form))
				localStorage.setItem('user', JSON.stringify(payload.data.token))
                context.commit('SET_USER', payload)
			} catch(error) {
				console.log(error.response.payload)
               
			}
		}
  }
}