import requestForm from "./requestForm"
import authModule from "./auth"
import loadCategorys from "./loadCategorys"

export default {
    auth: authModule(requestForm),
    loadCat: loadCategorys(requestForm)
}