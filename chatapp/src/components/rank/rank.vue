<template>
	<div class="container">
		<van-row class="vote-title">
			<van-nav-bar
				  title="排名榜"	
				  left-arrow
				  @click-left="onClickIndexLeft"
				/>
		</van-row>
		<van-row id="vote-rank-name" >
			<van-tag type="danger">TOP10</van-tag>
			<van-tag type="success">最帅最美</van-tag>
			<van-tag type="primary">最佳人气奖</van-tag>
		</van-row>
		<van-row id="vote-showRank-pirture">
			
			<van-col span="18" offset="3" v-for="(item,index) in list" :key="index" id="vote-showRow">
				<van-row>
					<van-tag v-bind:type="item.color" id="vote-rank-tag">第{{index+1}}名</van-tag>
				    <img src="../../../static/sw1.jpg" />
				</van-row>
				<van-row id="vote-suppost">
					<van-col span="8" id="vote-username">
						{{item.name}}
					</van-col>

					<van-col span="8" offset="8">
						<span id="vote-number-name">票数:</span>
						<span id="vote-rank-number">
							{{item.voteNumber}}
						</span>
					</van-col>
				</van-row>
			</van-col>
			
		</van-row>
		<tabber :actives="active"></tabber>
	</div>

</template>


<script type="text/javascript" src="rank.js"></script>
<script>
	import tabber from '../tabber/tabber.vue'
	
	export default {
		data() {
			
			return {
				active:1,
				list:[
				    {
					name:"hjb",voteNumber:2589,color:"danger"
				},{
					name:"hjb",voteNumber:2589,color:"success"
				},{
					name:"hjb",voteNumber:2589,color:"primary"
					
				},{
					name:"hjb",voteNumber:2589,color:""
				
				},{
					name:"hjb",voteNumber:2589,color:""
					
				},{
					name:"hjb",voteNumber:2589,color:""
					
				},{
					name:"hjb",voteNumber:2589,color:""
					
				},{
					name:"hjb",voteNumber:2589,color:""
					
				},{
					name:"hjb",voteNumber:2589,color:""
					
				},{
					name:"hjb",voteNumber:2589,color:""
					
				}]
			}
		},
		methods:{
			onClickIndexLeft:function () {
				
				
				this.$router.push({path:'/'})
			}
		
		},components:{
			tabber
		}
		
	}
</script>

<style>
	@import url("rank.css");
</style>