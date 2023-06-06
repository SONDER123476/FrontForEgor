import signinApi from '../api/index'
import jwt_decode from "jwt-decode"
import Cookies from 'js-cookie'

export default {
    namespaced: true,
    state() { 
        return {
            user: null,
            token: localStorage.getItem('user') || null,
            wallet: 0,
        }
    },
    
    getters: {
        getUser: (state) => {
            return state.user
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = jwt_decode(payload.data.token),
            state.token = payload.data.token
            
        },
        DELETE_USER(state){
            state.user = null
            state.token = null
            Cookies.remove('user')
        },
        UPDATE_USER: (state) => {
            try{
                state.user = jwt_decode(localStorage.getItem('user'))
            }
            catch{
                state.user = null
            }
        }
    },
    actions: {
        async signUp(context, form) {
			try {
				const payload = (await signinApi.auth.signUp(form))
				localStorage.setItem('user', JSON.stringify(payload.data.token))
                Cookies.set('token', payload.data.token, { expires: 1, path: '/' })
                context.commit('SET_USER', payload)
			} catch(error) {
				console.log(error.response.payload)
			}
		},
        async logIn(context, form) {
			try {
				const payload = (await signinApi.auth.login(form))
				localStorage.setItem('user', JSON.stringify(payload.data.token))
                context.commit('SET_USER', payload)
			} catch(error) {
				console.log(error.response.payload)
               
			}
		},
        logOut({commit}) {
            commit('DELETE_USER')
			localStorage.removeItem('user')
		},
        async walletUpdate(context, count) {

            try{
                console.log(count)
                await signinApi.wallet.addMoney({ money: count, UserId : 3 });
            } catch(error) {
                console.log('dsfsd')
                console.log(error.response)
            }
            
        }
    
    }
}