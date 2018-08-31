<template>
    <div class="login-box">
        <el-main v-if="isLogin" >
            <el-row>
                <el-col :span="8">
                     <h1>登录</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input type="text" v-model="userName" placeholder="请输入用户名" required autofocus>
                        <template slot="prepend">用户名</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input type="password" v-model="password"  placeholder="请输入密码" required>
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-col>
                
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-button round style="width:100%" type="primaryclass" @click="login" >登录</el-button>
                 </el-col>
            </el-row>
        </el-main>
        <router-view :class="main"></router-view>
    </div>
    
</template>

<script>
export default {
    name : 'Login',
    data : function(){
        return {
            userName : '',
            password : '',
            main : {
                width : '100%',
                height : '100%'
            }
        }
    },
    computed : {
        isLogin () {
            return window.localStorage.getItem('isLogin');
        }
    },
    methods : {
        login : function(){
            let me = this;
            if (!this.userName) {
                alert('用户名不能为空！');
                return;
            }
            if (!this.password) {
                alert('密码不能为空！');
                return;
            }
            this.$http.post('/login.mvc', {
                userName : this.userName,
                password : this.password
            }).then(res => {
                let result = res.data;
                window.localStorage.setItem('isLogin', true);
                console.log(result);
                me.$router.push('/main');
                // me.$destroy();
            }).catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
<style>
.el-row {
    margin-bottom: 20px;
  }
.login-box {
    margin-top:10%;
    margin-left:40%;
}
body {
    background-color: rgb(87, 94, 73);
}

</style>