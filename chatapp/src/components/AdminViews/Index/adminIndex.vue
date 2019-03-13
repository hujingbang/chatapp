<style scoped>
  @import url("adminIndex.css");
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                      		  个人设置
                    </template>
                    <MenuItem name="1-1">添加管理员</MenuItem>
                    <MenuItem name="1-2">修改密码</MenuItem>
                    <MenuItem name="1-3">管理员权限</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        		页面管理
                    </template>
                    <MenuItem name="2-1">轮播图管理</MenuItem>
                    <MenuItem name="2-2"></MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
               
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">Content</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
	import axios from 'axios'
    export default {
        data() {
        	return {
        		
        	}
        },methods:{
        	
        	
        },
        created:function () {
        	
        	axios.post(
        		"http://127.0.0.1/response.php"
        	).then((response) => {
        		
        		console.log(response)
        		
        	}).catch((error) => {
        		
        	})
        	
        }
    }
</script>
