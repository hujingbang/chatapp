<template>
    <div class="container">
        <van-row>
            <van-nav-bar
                title="注册系统"
                right-text="登陆"
                @click-right="onClickLogin()"
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
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                 <van-field
                    v-model="confirmpassword"
                    type="password"
                    label="确认密码"
                    placeholder="请确认密码"
                    required
                />
            </van-cell-group>
        </van-row>
        <van-row type="flex" justify="center" class="loginBlock">
            <van-button size="large" class="register-btn" @click="onSubmitFormInfo()">注册</van-button>
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
           password:"",
           confirmpassword:""
        }
    },
    methods: {
        onClickLogin() {
                this.$router.push({path:"/login"})
        },onUserToast() {
           this.$toast('用户名必须以英文开头，不少于6个字符');
        },onSubmitFormInfo() {
            if(this.username == "") {
                console.log(this)
                Toast("用户名不能为空")
            }else if(this.password == ""){
                Toast("密码不能为空")
            }else if(this.password != this.confirmpassword){
                Toast("两次密码不一致")
            }else{
                     this.$Axios.post('https://www.hujingbang.cn/index.php/chatapi/Register/registerUserAccount',{
                        username:this.username,
                        password:this.password
                    }).
                    then(response => {
                        if(response.data.code == 200) {
                            this.$toast.success({
                                message:response.data.msg,
                                duration:2000
                            });
                            let that = this
                            let second = 2;
                            const timer = setInterval(() => {
                                second--;
                                if (second == 0) {
                                    clearInterval(timer);
                                    Toast.clear();
                                    that.$router.push({path:'/login'})
                                }
                            }, 1000);
                           
                        }else{
                          let msg =response.data.msg
                            Toast(msg)
                        }
                      
                    }).catch(error => {
                        console.log(error)
                         Toast(error)

                    }) 

            }

            
        }

    },
}
</script>
<style scoped>
    .register-btn {
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

