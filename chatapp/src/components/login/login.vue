<template>
    <div class="container">
        <van-row>
            <van-nav-bar
                title="登陆系统"
                right-text="注册"
                @click-right="onClickRegister()"
                />
        </van-row>
        <van-row>
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    icon="question-o"
                    placeholder="请输入用户名"
                    @click-icon="onUserToast()"
                />

                <van-field
                    v-model="password"
                    label="密码"
                    type='password'
                    placeholder="请输入密码"
                    required
                />

            </van-cell-group>
        </van-row>
        <van-row type="flex" justify="center" class="loginBlock">
            <van-button size="large" class="login-btn" @click="onLoginSubmit()">登陆</van-button>
        </van-row>
        <van-row class="copyright" >
            <van-row class="copyright-inside">
                <van-row type="flex" justify="center">
                    https://www.hujingbang.cn
                </van-row>
                <van-row type="flex" justify="center">
                    2018-2019  &copy;copyright 归hujingbang所有
                </van-row>
            </van-row>

        </van-row>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    
    data() {
        return {
           username:"",
           password:"" 
        }
    },
    methods: {
        onClickRegister() {
                this.$router.push({path:"/register"})
        },onUserToast() {
           this.$toast('用户名必须以英文开头，不少于6个字符');
        },onLoginSubmit() {
            let that =this
            let username =this.username
           this.$store.dispatch("userLogin",{"username":username,"password":this.password}).then(()=>{
               this.$router.push({path:"/"})
           }).catch((error)=>{
             Toast.fail(error);
            
           })


        }

    },
}
</script>
<style scoped>
    .login-btn {
        margin-top:50px;
        background-color:#03A9F4;
        color:white;
        font-size:20px;
    }
    .loginBlock {
        height:200px;
    }
    .copyright {
        height: 200px;
        position: relative;
    }
    .copyright-inside {
        position: absolute;
        bottom:20%;
        left:0;
        right:0;
        font-size:14px;
        color:#2196f3;
    }
</style>

