<template>
    <div class="user">
        <div class="user-info">
            <div class="user-img">
                <img v-if="!token" src="../assets/bt_bg.png" alt="">
                <img v-else :src="userInfo.header" alt="">
            </div>
            <div class="username">
                <div v-if="!token" @click="$router.push('/login')">你还没有登录，请登录</div>
                <div v-else>{{userInfo.username}}</div>
            </div>
        </div>

        <div class="row-wrap">
            <router-link :to="token ? '/info' : '/login'" style="dispaly: block">
                <img src="../assets/person.png" class="icon1">
                个人信息
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link :to="token ? '/score' : '/login'" style="dispaly: block">
                <img src="../assets/lxjf.png" class="icon1">
                个人量化积分
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link :to="token ? '/uppass' : '/login'" style="dispaly: block">
                <img src="../assets/xgmm.png" class="icon1">
                修改密码
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link :to="token ? '/pay' : '/login'" style="dispaly: block">
                <img src="../assets/icon3.png" class="icon1">
                党费缴纳
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>

        <div class="btn" v-if="token">
            <button @click="logout">退出登录</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import { mapMutations } from 'vuex'

    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        methods: {
            ...mapMutations(['setUser','setToken']),
            getUser(){
                this.$axios.get('/user/userInfo.do').then(res=>{
                    if(res.code == 1){
                        this.userInfo=res.data
                    }
                })
            },
            logout() {
                this.setToken('')
                this.$router.push('/login')
            }
        },
        created() {
            this.getUser()
        },
        computed: {
            ...mapState(['token'])
        }
    }
</script>

<style scoped lang="scss">
    .user-info {
        width: 100%;
        padding-top: 0.9rem;
        height: 2.8rem;
        background: #c50206;

        .user-img {
            margin: 0.7rem auto 0.16rem;
            width: 1.25rem;
            height: 1.25rem;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .username {
            text-align: center;
            font-size: 0.24rem;
            font-weight: 400;
            color: #fff;
        }
    }

    .row-wrap {
        height: 1.08rem;
        font-size: 0.28rem;
        padding: 0 0.2rem;
        border-bottom: 0.02rem solid #ccc;

        a {
            display: block;
            height: 0.72rem;
            line-height: 0.72rem;
            padding: 0.18rem 0;
            margin: 0 auto;
            text-decoration: none;
            color: #666;
            font-size: 0.32rem;

            .icon1 {
                float: left;
                width: 0.64rem;
                margin-right: 0.2rem;
            }

            .icon2 {
                margin: 0.24rem 0;
                float: right;
                width: 0.1536rem;
            }
        }
    }

    .btn {
        text-align: center;
        margin: 0.2rem auto;

        button {
            width: 7.1rem;
            height: 0.9rem;
            background: #ef473a;
            color: #fff;
            border: none;
            border-radius: 0.1rem;
            font-size: 0.32rem;
        }
    }

</style>