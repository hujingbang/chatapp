<template>
    <div class="container">
        <van-nav-bar  left-text="返回" title="静静"  left-arrow fixed>
            <van-icon name="ellipsis" slot="right" />
        </van-nav-bar>
        <van-row class="message-content">
                <van-list
                :finished="finished"
                finished-text="没有更多了"
                >
                    <van-row class="send-rows-msg-left"  type="flex" v-for="index in ['s','a']" :key="index">
                        <van-col :span="3" class="headimg-left">
                                <img :src="headimg.jj" alt="" >
                        </van-col>
                        <van-col :span="18" class="reply-msg-left">
                          .send {
                            position:relative;
                            width:150px;
                            height:35px;
                            background:#F8C301;
                            border-radius:5px; /* 圆角 */
                            margin:30px auto 0;
                            }

                         </van-col>
                    </van-row>
                    <van-row class="send-rows-msg-right" justify="end" type="flex" v-for="(value,index) in chatMessageList" :key="index">
                        <van-col :span="18" class="reply-msg-right">
                                {{value}}
                        </van-col>
                          <van-col :span="3" class="headimg-right">
                                <img :src="headimg.hjb" alt="">
                        </van-col>
                    </van-row>
                </van-list> 
        </van-row>
        <van-row class="bottom-import-msg">
          <van-row>
            <van-cell-group>
                    <van-field
                        v-model="message"
                        type="textarea"
                        label="输入"
                        icon="volume-o"
                        placeholder="发送信息"
                        :autosize="textautosize"
                    >
                    <van-button slot="button" size="small" type="primary" @click="sendChatMessage">发送</van-button>
                    </van-field>
                </van-cell-group>
              
            </van-row>    
        </van-row>
    </div>
</template>

<script>
 
import Axios from 'axios';

   

export default {
  
    data() {
        return {
            message:"",
            textautosize:{
                 maxHeight:20, minHeight:20
            },
            loading: false,
            finished: false,
            headimg:{
                jj:require("../../assets/jj.jpg"),
                hjb:require("../../assets/hjb.jpg")
            },
            chatMessageList:[]
            
        }
    },methods: {
        sendMessage() {

            console.log(this.message)
            this.message=""
        },
        bindAddCount() {

          this.$store.commit('increment')

        },sendChatMessage() {

            let prepareMsg = this.message


            if(prepareMsg != "") {

                this.ws.send(prepareMsg)

                   
                
            }
           
         
      }
    },created() {

         this.ws = new WebSocket('ws://www.hujingbang.cn:9502')

             this.ws.onopen = () => {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        
                        console.log("已连接")
                    }
            this.ws.onmessage = evt => {
                        
                        this.chatMessageList.push(evt.data)
                       
                        
            }
            this.ws.onclose = function () {
                        // 关闭 websocket
                        console.log('连接已关闭...')
            }
                    // 组件销毁时调用，中断websocket链接
            this.over = () => {
                        this.ws.close()
            }

    },computed:{
	  importBtnCount() {
        console.log(this.$store.state.count)
      }
    
    }
}
</script>

<style scoped>

.bottom-import-msg {
    position:fixed;
    bottom: 0px;
    left:0px;
    right:0px;
}
.message-content {
    margin-top:60px;
    margin-bottom:44px;
}
.send-rows-msg-left {
  max-height:400px;
  overflow: hidden;
}
.reply-msg-right::after {
    content: "";
    position: absolute;
    height:10px;
    width: 10px;
    top:10px;
    right:-20px;
    border:solid 10px;
    color:#f1f1f1;
    border-color:white white white #f1f1f1;
}
.reply-msg-left::before {
    content: "";
    position: absolute;
    height:10px;
    width: 10px;
    top:10px;
    left:-19px;
    border:solid 10px;
    color:#f1f1f1;
    border-color:white #f1f1f1 white white;
}
.reply-msg-right,.reply-msg-left{
    position:relative;
    max-height:400px;
    background:#f1f1f1;
    color:black;
    padding:10px;
    border-radius:5px; /* 圆角 */
    margin:20px auto 0;
}
.send-rows-msg-left img,.send-rows-msg-right img {
    position: relative;
    margin:5px;
    width:38px;
    height:38px;
}
    

</style>
