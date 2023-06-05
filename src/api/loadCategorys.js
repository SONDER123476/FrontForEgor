export default function(signinApi) {
    return {
        loadCategorys(){
            return signinApi.get('type')
        }
    }
}