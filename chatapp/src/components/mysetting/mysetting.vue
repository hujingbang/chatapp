<template>
	<div class="container">
		<div class="header">
			<div class="upload-img">
				<img :src="headPortrait" alt="">
			</div>
			<div class="user-info">
				<div class="my-username">
					{{username}}
				</div>
			</div>

		</div>

		<tabber :actives="active"></tabber>
	</div>

</template>

<script>
    import tabber from '../tabber/tabber.vue'
    export default {
        name: "contacts",
        data(){
            return {
                active: 3,
				username:"",
                headPortrait:""
            }
        },components:{
            tabber
        },
		mounted:function () {

                let url = ""
            this.$toast("asdsa")
                this.$Axios.get(url).then((res)=> {
                    if(res.data.code == 200){
                        this.username= res.data.cilentUsername
                        this.headPortrait =res.data.clienHeadPortait
                    }
                }).catch((error)=> {


                })
            }



    }

</script>
<style lang="css" >
@import "mysetting.css";
</style>