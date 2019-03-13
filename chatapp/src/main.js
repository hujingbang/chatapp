// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import { store } from './store'
import axios from 'axios'

   
import { Row, Col,Badge, BadgeGroup} from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { NoticeBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';
import { PullRefresh } from 'vant';

import { Loading } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Tag } from 'vant';
import { Field } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Card } from 'vant';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { type } from 'os';


Vue.use(Card);
Vue.use(VueRouter);
Vue.use(Row).use(Col);
Vue.use(Badge);
Vue.use(BadgeGroup);
Vue.use(Swipe).use(SwipeItem);
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Search);
Vue.use(PullRefresh);
Vue.use(Loading);
Vue.use(List);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Field);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(iView);


//时间是否过期
let isExpirtTime = (expirtTime) => {
    let nowTime = new Date().getTime()/1000
    return ((expirtTime-nowTime) <= 600)
}

axios.defaults.baseURL = "https://www.hujingbang.cn/"
/* eslint-disable no-new */

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

        let expirtTime =localStorage.getItem("expirt_time")
    // store.state.token
      config.headers.common = {
        "Authorization":"sadasdas",
        "Content-Type": "application/x-www-form-urlencode",
      }

   return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error.response.status)
  return Promise.reject(error);
});
// 在发送请求之后做些什么
axios.interceptors.response.use(response => {
    let code = response.data.code
    if(code == 401){
        localStorage.removeItem("currentUser_name");
        localStorage.removeItem("currentUser_token");
        localStorage.removeItem("client_id");
        router.push({path:"/login"})
    }else if(code == 200 && response.data.access_token){
            localStorage.setItem("currentUser_token",response.data.access_token)
            let expirt_time = parseInt(response.data.expirt_time)+(new Date().getTime())/1000
            localStorage.setItem("expirt_time",expirt_time)
    }
    return response

},error=> {
    return Promise.reject(error);
})

axios.post("index.php/chatapi/Test/index",{"client_id":17}).then((response) => {
    console.log(response)
}).catch((error)=> {
    console.log(error)
});
router.beforeEach((to, from, next) => {

    console.log(to.name)
  let token = window.localStorage.getItem('currentUser_token')
  if (to.name == null) {
    next({ path: '/notfound' });
  }else if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
      
  
})

Vue.prototype.$Axios = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
