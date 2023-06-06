export default function(signinApi) {
    return {
        signUp(payload){
            return signinApi.post('user/registration', payload)
        },
        login(payload){
            return signinApi.post('user/login', payload)
        },
        auth(){
            return signinApi.get('user/auth' )
        },
        addMoney(payload){
            return signinApi.post('user/addmoney', payload)
        }
    }
}