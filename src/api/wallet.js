export default function(signinApi) {
    return {
        addMoney(payload){
            return signinApi.post('userwallet/addmoney', payload)
        },
        getMoney(){
            return signinApi.get('userwallet')
        }
    }
}