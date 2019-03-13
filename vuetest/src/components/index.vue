<template>
		<div class="container">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-row class="vote-nav">
					<van-nav-bar id="boygirlTitle"
							  title="帅哥美女投票秀"
						/>
				
				</van-row>
				<van-row class="vote-notice">
					<van-notice-bar
				  			text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
				 			 left-icon="../../static/remind.png"
							/>		
				</van-row>
				<van-row class="vote-swipe">
						<van-swipe :autoplay="3000" id="swipe">
						  <van-swipe-item v-for="(item, index) in swipeImages" :key="index">
						    <img :src="item"/>
						  </van-swipe-item>
						</van-swipe>
				</van-row>
				<van-row class="vote-center">
					<van-col span='8' id="contestant">
						<van-row class="vote-contestant-name"> 
							参赛选手
						</van-row>  
						<van-row class="vote-contestant-number">	
							500人
						</van-row>
					</van-col>
					<van-col span='8' id="grandVote">
						<van-row id="vote-name">
							累计投票
						</van-row>
						<van-row id="vote-number">
							158票
						</van-row>
					</van-col>
					<van-col span='8' id="pv">
						<van-row class="vote-pv-name">
							访问量
						</van-row>
						<van-row class="vote-pv-number">
							10005人
						</van-row>
					</van-col>
				</van-row>
				<van-row class="vote-search">
						<van-search
						  v-model="searchKeyWord"
						  show-action
						  @search="onSearch"
						>
				  <div slot="action" @click="onSearch">搜索</div>
					</van-search>
				</van-row>
				
				<van-row class="vote-showImg">
					<van-list
						 v-model ="loading"
						  :finished="finished"
						  @load="onLoad"
						 
						>
						<van-row v-for="(img,index) in swipeImages" :key="index">
							<van-col span="20" offset="2">
								<img  v-lazy="img" v-on:click="imageShowPreview(img)" datasrc="img"> 
								
							</van-col> 
							<van-row class="voteMenu">
								<van-col span="6"  offset="2">
									静静
								</van-col>
								<van-col span="6"  >
									<span>票数:</span>
									<span><b>15689</b></span>
								</van-col>
								<van-col span="6"  offset="2">
									<van-button bottom-action class="vote-btn"><van-icon name="like-o" class="vote-like-icon"/>投票</van-button>
								</van-col>
							</van-row>
							
						</van-row>
						 
					</van-list>
				
				</van-row>
			</van-pull-refresh>
			<van-row id="vote-tabber">
					<van-tabbar v-model="active">
					  <van-tabbar-item icon="wap-home">主页</van-tabbar-item>
					  <van-tabbar-item icon="pending-orders" >排名</van-tabbar-item>
					  <van-tabbar-item icon="edit-data" >报名</van-tabbar-item>
					  <van-tabbar-item icon="contact" >我的</van-tabbar-item>
					</van-tabbar>
				</van-row>
		</div>
		
</template>

<script>
import { ImagePreview } from 'vant';

	export default {
		name:"index",
		data() {
			
			return  {
				
				   swipeImages: [
					        "../../static/sw.jpg",
					        "../../static/sw1.jpg",
					        "../../static/sw2.jpg",
					        "../../static/sw3.jpg"
     				 ],
     				 active:0,
     				 searchKeyWord:"",
     				 waterfallDisabled:false,
     				 list:[0,1,2,3,4,5,6,7,8,9,10],
     				  loading: false,
     				 isLoading:false,
     				 finished:false
     			
				   
			}
		},
		methods:{
			
			onSearch:function () {
				console.log(this.searchKeyWord)
			},
			loadMore:function () {
				
				    this.waterfallDisabled = true;
				      setTimeout(() => {
				        for (let i = 0; i < 5; i++) {
				          this.list.push(this.list.length);
				        }
				        
				        this.waterfallDisabled = false;
				      }, 5000);
				      
				    },
				     onRefresh() {
				     	
					      setTimeout(() => {
					        this.$toast('刷新成功');
					        this.isLoading = false;
					      
					      }, 2000);
					    },
					    onLoad(){
					    	
					    	   setTimeout(() => {
							        for (let i = 0; i < 10; i++) {
							          this.list.push(this.list.length + 1);
							        }
							   
							     	this.loading=false
							        if (this.list.length >= 40) {
							          this.finished = true;
							        }
							      }, 2000);
							 },
							 imageShowPreview(imageUrl) {
							 	ImagePreview([
								  imageUrl
								]);

							 }
						
					    }
				 }

								

			
		
	
</script>

<style>
	ul li {
		width:100%;
		height:200px;
		line-height: 200px;
		background-color:#FD860C;
		margin-top: 50px;
	}
	.vote-center {
		display: flex;
		align-items: center;
		height:150px;
		background-color: #FD860C;
		color:white;
		font-weight: 900;
	}
	.vote-center #contestant {
		border-right:1px solid white;	
	} 
	.vote-center #grandVote {
		border-right:1px solid white;	
	}
	.vote-showImg {
		margin-top:25px;
		margin-bottom: 52px;
	}
	.vote-showImg img {
		max-width: 100%;
		
	}
	.vote-showImg .voteMenu {
		height:100px;
		line-height: 100px;
	}
	.vote-showImg .vote-btn .vote-like-icon {
		top:2px;
		right:5px;
	}
	#boygirlTitle {
		color:#fd860c;+
		font-weight: 900;
	}
	#swipe img{
		width:100%;
		height:200px;
}
</style>