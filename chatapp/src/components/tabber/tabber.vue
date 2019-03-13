<template>
	
		<van-row id="vote-tabber">
				<van-tabbar v-model="active" >
				  <van-tabbar-item icon="chat-o" to="/">聊天</van-tabbar-item>
				  <van-tabbar-item icon="friends-o" to="/contacts">通讯录</van-tabbar-item>
				  <van-tabbar-item icon="eye-o" to="/apply">发现</van-tabbar-item>
				  <van-tabbar-item icon="contact" to="/mysetting">我的</van-tabbar-item>
				  
				</van-tabbar>
		 </van-row>
	
</template>

<script>
	
	export default {
		props:["actives"],
		data(){
			
			return {
				
				active:0
				
			}
		},created:function (){
		
	
		
		},mounted:function () {
				
				this.active = this.actives;
				console.log(this.active)
		},watch:{
			
		}
	}
</script>

<style>
</style>