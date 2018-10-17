<template>
    <div class="user">
        <div class="user-info">
            <div class="user-img">
                <img src="../assets/bt_bg.png" alt="">
            </div>
            <div class="username">
                <router-link to="/login">你还没有登录，请登录</router-link>
            </div>
        </div>

        <div class="row-wrap">
            <router-link to="/login" style="dispaly: block">
                <img src="../assets/person.png" class="icon1">
                个人信息
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link to="/login" style="dispaly: block">
                <img src="../assets/lxjf.png" class="icon1">
                个人量化积分
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link to="/login" style="dispaly: block">
                <img src="../assets/xgmm.png" class="icon1">
                修改密码
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
        <div class="row-wrap">
            <router-link to="/login" style="dispaly: block">
                <img src="../assets/icon3.png" class="icon1">
                党费缴纳
                <img src="../assets/right.png" class="icon2">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .user-info {
        width: 100%;
        padding-top: 0.9rem;
        height: 2.8rem;
        background: #c50206;

        .user-img {
            margin: 0.58rem auto 0.15rem;
            width: 1.35rem;
            height: 1.35rem;

            img {
                width: 1.35rem;
                height: 1.35rem;
                border-radius: 50%;
            }
        }

        .username {
            text-align: center;
            font-size: 12px;
            font-weight: 400;
            color: #fff;

            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }

    .row-wrap {
        height: 1.08rem;
        font-size: 14px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;

        a {
            display: block;
            height: 0.72rem;
            line-height: 0.72rem;
            padding: 9px 0;
            margin: 0 auto;
            text-decoration: none;
            color: #666;
            font-size: 16px;

            .icon1 {
                float: left;
                width: 0.64rem;
                margin-right: 10px;
            }

            .icon2 {
                margin: 12px 0;
                float: right;
                width: 0.1536rem;
            }
        }
    }


</style>