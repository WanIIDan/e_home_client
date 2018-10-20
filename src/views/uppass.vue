<template>
    <div class="wrap">
        <form action="" class="form" enctype="multipart/form-data">
            旧密码：<br>
            <input type="password" v-model="password.newPwd"><br>
            新密码：<br>
            <input type="password" v-model="password.oldPwd1"><br>
            确认密码：<br>
            <input type="password" v-model="password.oldPwd2"><br>
            <div class="btn" @click="editPwd">确定</div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                password: {
                    newPwd: '',
                    oldPwd1: '',
                    oldPwd2: ''
                }
            }
        },
        methods: {
            editPwd() {
                if(this.password.oldPwd1 == this.password.oldPwd2) {
                    let password = new FormData()
                    password.append('newPwd',this.password.newPwd)
                    password.append('oldPwd',this.password.oldPwd1)
                    this.$axios.get(`/user/updatePwd.do?newPwd=${this.password.newPwd}&oldPwd=${this.password.oldPwd1}`).then(res=>{
                        if(res.code == 1){
                            this.$router.push('/user')
                        }
                    })    
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;

        .form {
            width: 6rem;
            height: 6rem;
            margin: 50px auto 0;
            font-size: 0.32rem;
            color: #666;
            line-height: 1.5;

            input {
                width: 5.8rem;
                padding: 0.1rem;
                margin: 0.2rem auto;
                border-radius: 0.1rem;
                border: 0.02rem solid #999;
                height: 0.6rem;
            }

            .btn {
                margin-top: 0.2rem;
                width: 100%;
                height: 0.9rem;
                color: #fff;
                text-align: center;
                background: #ef473a;
                line-height: 0.9rem;
                border-radius: 0.1rem;
            }
        }
    }
</style>