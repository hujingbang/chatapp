import axios from 'axios';

export default {

    state:{
       token:localStorage.getItem("currentUser_token"),
        user:localStorage.getItem("currentUser_name")
    },
    mutations:{
        setUser(state,{user_name,user_token,client_id}){
            // 在这里把用户名和token保存起来
            state.token = user_token
            state.user = user_name
            localStorage.setItem("currentUser_name",user_name);
            localStorage.setItem("currentUser_token",user_token);
            localStorage.setItem("client_id",client_id)
        },closeUser(state) {
            //清除token和用户名
            localStorage.removeItem("currentUser_name");
            localStorage.removeItem("currentUser_token");
            localStorage.removeItem("client_id");
        }
    },
    actions:{
        userLogin(context,{username,password}){
            // 发送get请求做权限认证(真实开发建议用post的方式)
            return new Promise((resolve, reject) => {
                let url = "index.php/chatapi/Login/index";
                axios.post(url,{
                    username:username,
                    password:password
                }).then((response)=>{

                    if(response.data.code == "200") {
                        let username = response.data.data.client_username
                        let clientid = response.data.data.client_id
                        let token = response.data.access_token
                        context.commit("setUser",
                            {
                                "user_name":username,
                                "user_token":token,
                                "client_id":clientid
                            }
                        );
                        resolve();
                    }else{
                        reject(response.data.msg);
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            } )

        }
    }

}