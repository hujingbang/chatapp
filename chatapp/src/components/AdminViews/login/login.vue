
<template>
	<div class="container">
		 <canvas id="canvas">
		 </canvas>	
	 	 <div id="Form-box">
	 	 	<Row class="subject-title">
	 	 		<Col span="16" offset="4" >
	 	 			<h1 class="text-center">后台登录系统</h1>
	 	 		</Col>
	 	 	</Row>
	 	 	<Row class="Form">
	 	 		<Col span="16" offset="4">
	 	 			  <Form ref="formInline" :model="formInline" :rules="ruleInline" >
				        <FormItem prop="user">
				            <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
				                <Icon type="ios-person-outline" slot="prepend" size="22"></Icon>
				            </Input>
				        </FormItem>
				        <FormItem prop="password">
				            <Input type="password" v-model="formInline.password" placeholder="密码"  size="large">
				                <Icon type="ios-locked-outline" slot="prepend" size="22"></Icon>
				            </Input>
				        </FormItem>
				        <FormItem>
				           
				             <Button type="primary" size="large" @click="handleSubmit('formInline')" long>登录</Button>
				        </FormItem>
				    </Form>
	 	 		</Col>
	 	 	</Row>
      </div>
	
	</div>
</template>
<script> 
	import {animationSky} from './sky.js' ;
	
    export default {
       data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.$router.push({path:"/admin"});
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        },mounted:function (){
   
        	animationSky();
        }
    }
</script>
<style >
	@import url("login.css");
</style>
