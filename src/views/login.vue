<template>
    <div>
        <div class="login">
            <div class="wrap">
                <div class="logo-wrap">
                    <img src="../assets/logo.png">
                </div>

                <form action="/" class="form" @submit.prevent>
                    <div class="input-wrap">
                        <input type="text" placeholder="身份证号" v-model="formData.id_card">
                    </div>
                    <div class="input-wrap">
                        <input type="password" placeholder="密码" v-model="formData.password">
                    </div>
                    <div class="input-wrap">
                        <mt-button @click="login" type="danger" size="large" style="fontSize: 14px">登录</mt-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import comHeader from "../components/com-header.vue"

    export default {
        components: {
            comHeader
        },
        data() {
            return {
                formData: {
                    id_card: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$axios.post("/user/userLogin.do",this.formData).then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/login.scss"
</style>