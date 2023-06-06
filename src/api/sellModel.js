export default function(signinApi) {
    return {
        sellModel(payload){
            return signinApi.post('model', payload)
        },
        
    }
}