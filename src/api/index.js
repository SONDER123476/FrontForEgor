import requestForm from "./requestForm"
import authModule from "./auth"
import loadCategorys from "./loadCategorys"
import loadModels from "./loadModels"

export default {
    auth: authModule(requestForm),
    loadCat: loadCategorys(requestForm),
    loadMod: loadModels(requestForm)
}