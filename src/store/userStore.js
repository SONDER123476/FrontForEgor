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
        },
        DELETE_USER(state){
            state.user = null
        }
    },
    actions: {
        async signUp(context, form) {
			try {
				const payload = (await signinApi.auth.signUp(form))
				localStorage.setItem('user', JSON.stringify(payload.data.token))
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
        // async auth({commit, dispatch}){
        //         try {
        //           const payload = await fetch('http://localhost:5000/api/user/auth', {
        //             method: 'GET',
        //             headers: {
        //                 'Authorization': 'Bearer ' + localStorage.getItem('user'),
        //             },
        //             body: {}
        //           })  
        //           console.log(payload.data.token)
        //           localStorage.setItem('user', payload.data.token)
        //           commit('SET_USER', payload)
        //         } catch (error) {
        //           if (error.response && error.response.status === 401) {
        //             // Обработка ошибки 401 здесь
        //             console.log('Ошибка авторизации', error)
        //             dispatch('logOut')
        //           } else {
        //             // Обработка других ошибок здесь
        //             console.log('Произошла ошибка', error)
        //             dispatch('logOut')
        //           }
        //         }
        //     //   jwtDecode(token) {
        //     //     // Ваш код декодирования JWT токена
        //     //   }
        // }
    
    }
}