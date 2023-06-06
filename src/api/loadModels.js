export default function(signinApi) {
    return {
        loadModels(){
            return signinApi.get('model')
        },
        loadModelById(payload){
            return signinApi.get('model?typeId=' + payload)
        },
        loadModel(payload){
            return signinApi.get('model/info?id=' + payload)
        }
    }
}