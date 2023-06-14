import requestForm from "./requestForm"
import authModule from "./auth"
import loadCategorys from "./loadCategorys"
import loadModels from "./loadModels"
import walletModul from "./wallet"
import sellModel from "./sellModel"

export default {
    auth: authModule(requestForm),
    wallet: walletModul(requestForm),
    loadCat: loadCategorys(requestForm),
    loadMod: loadModels(requestForm),
    uploadModel: sellModel(requestForm)
}