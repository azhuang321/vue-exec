import Vue from 'vue';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from "vue-lazyload";
import VueCookie from 'vue-cookie';
import App from './App.vue';

// 根据前端跨域方式做调整
axios.defaults.baseURL = '/api';

// import env from './env'
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;


// mock开关
const mock = false;
if(mock){
    require('./mock/api');
}



//返回值接口拦截
axios.interceptors.response.use(function (response) {
    let res = response.data
    if ( res.status == 0 ) {
        return res.data
    }else if ( res.status == 10 ) { //未登录
        window.location.href('/#/login')
    }else {
        alert(res.msg)
    }
    let path = location.hash;
    if ( res.status == 0 ) {
        return res.data
    }else if ( res.status == 10 ) { //未登录
        if ( path != '#/index') {
            window.location.href('/#/login')
        }
    }else {
        alert(res.msg);
        return Promise.reject(res);
    }
})


Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyload,{
    loading:'/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

