import { createRouter, createWebHashHistory } from "vue-router"
import mainPage from "../components/mainPage.vue"
import modelsList from "../components/models.vue"
import mainprofile from "../components/mainprofile.vue"
import modelPage from "../components/modelPage.vue"
import erorrPage from "../components/erorr404.vue"
import uploadPage from "../components/uploadModels.vue"


export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {  
            path: '/', 
            name: 'mainPage',
            component: mainPage, 
            alias: '/'},
        {
            path: '/models/:categoryID', 
            name: 'modelsList',
            component: modelsList,
        },
        {
            path: '/profile',
            name: 'profile',
            component: mainprofile,
        },
        {
            path: '/model/:modelID',
            name: 'modelPage',
            component: modelPage,
        },
        {
            path: '/upload-model',
            name: 'uploadPage',
            component: uploadPage,
        },
        {
            path: '/404',
            name: 'erorr404Page',
            component: erorrPage,
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404'
        }
    ],
    scrollBehavior() {
        return { top: null }
    }
})
