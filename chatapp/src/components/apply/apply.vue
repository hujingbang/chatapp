<template>
	<div class="container">
		<van-row class="marginTop">
			<van-cell-group>
			  <van-field
			    label="姓名"
			    left-icon="contact"
			  />
			</van-cell-group>
		</van-row>
		<van-row class="marginTop">
			<van-cell-group>
			  <van-field
			    label="手机号码"
			    left-icon="phone"
			  />
			</van-cell-group>
		
		</van-row>
		<van-row class="marginTop">
			<van-radio-group v-model="radio">
				<van-col span="8">
					性别:
				</van-col>
				<van-col >
					  <van-radio name="1">男</van-radio>
				</van-col>
				<van-col span="8">
					  <van-radio name="2">女</van-radio>
				</van-col>
			
			
			</van-radio-group>
		</van-row>
		<van-row class="marginTop">
			<van-cell-group>
			  <van-field
			    v-model="message"
			    label="留言"
			    type="textarea"
			    placeholder="请输入留言"
			    rows="5"
			    autosize
			  />
			</van-cell-group>
		</van-row>
		<tabber :actives="active"></tabber>
	</div>
	
</template>

<script>
import tabber from '../tabber/tabber.vue'
	export default {
		
		data(){
			
			return {
				
				active:2,
				radio:'1'
			}
		},methods:{
			
			
		},components:{
			tabber
		}
	}
</script>

<style scoped>
	@import url("apply.css");
</style>