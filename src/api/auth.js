export default function(signinApi) {
    return {
        signUp(payload){
            return signinApi.post('user/registration', payload)
        },
        login(payload){
            return signinApi.post('user/login', payload)
        }
    }
}