<template>
		<div class="container">
			<navbar></navbar>
			<van-row class="chat-window-line" v-for="index in [10,1,2,5,6]" :key="index" > 
				<router-link  to="/chat">
				 <van-col span="6" >
					 <img :src="headimg" alt="" class="headimg">
				 </van-col>
				 <van-col span="12" class="chat-message">
					 <van-row class="chat-name">
						 Vue牛逼
					 </van-row>
					 <van-row class="last-message" >
						 消息。。。。。。。
					 </van-row>
				 </van-col>
				 <van-col span="6" class="last-time">8：30PM</van-col>
				</router-link>
			</van-row>
			
			<tabber :actives="active"></tabber>
		</div>
		
</template>

<script>

import tabber from './tabber/tabber.vue'
import navbar from './navbar/navbar.vue'


export default {
  data() {
    return {
	  active: 0,
	  headimg:require("../assets/logo.png")
    }
  },
  components:{
	  tabber,navbar
  }
}
				
		

</script>

<style scoped>
.chat-window-line {
	border-bottom:1px solid #eeeeee;
	position: relative;
}
.chat-window-line .chat-message{
	position: relative;
	top:10px;
	font-size:15px;
}
.chat-window-line .chat-name {
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 1em;
	color:black;
}
.chat-window-line .last-message {
	color:rgba(182, 173, 173, 0.63);;
}
.chat-window-line .last-time {
	position: relative;
	top:10px;
	text-align: right;
	right: 10px;
	color:rgba(182, 173, 173, 0.63);
}
.headimg {
	width:50px;
	height:50px;
	margin:15px;
	
}
</style>
