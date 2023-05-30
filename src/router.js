import { createRouter, createWebHashHistory } from "vue-router"
import mainPage from "./components/mainPage.vue"
import modelsList from "./components/models.vue"
import mainprofile from "./components/mainprofile.vue"


export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {  
            path: '/', 
            name: 'mainPage',
            component: mainPage, 
            alias: '/'},
        {
            path: '/models', 
            name: 'modelsList',
            component: modelsList,
        },
        {
            path: '/profile',
            name: 'profile',
            component: mainprofile,
        }
    ]
})
