import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Mysetting from '@/components/mysetting/mysetting.vue'
import Contacts from '@/components/contacts/contacts.vue'
import adminlogin from '@/components/AdminViews/login/login.vue'
import admin from '@/components/AdminViews/Index/adminIndex.vue'
import chat from '@/components/chat/chat.vue'
import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import notfound from '@/components/notfound/notfound404.vue'

export default new Router({
  routes: [
	  {
	  	path:"/",
	  	name:"Index",
		component:Index,
		meta:{
			requiresAuth: true
		}
	  },
	  {
          path:"/contacts",
          name:"contacts",
          component:Contacts,
          meta:{
              requiresAuth: true
          }
	  },
      {
          path:"/mysetting",
          name:"mysetting",
          component:Mysetting,
          meta:{
              requiresAuth: true
          }
      },
	 {
	  	path:"/admin/login",
	  	name:"adminlogin",
	  	component:adminlogin
	  },{
	  	path:"/admin",
	  	name:"admin",
	  	component:admin
	  },{
		path:"/chat",
		name:"chat",
		component:chat,
		meta: {
			requiresAuth: true
		}
	   },{
			path: "/login",
			name: "login",
			component: login,
			meta:{
				requiresAuth: false
			}
		},
		{
			path: "/register",
			name: "register",
			component: register,
			meta: {
				requiresAuth: false
			}
		},{
			path: "*",
			name: "notfound",
			component: notfound

		}

  ]
})
