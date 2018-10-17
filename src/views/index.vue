<template>
    <div class="container">
        <div class="header-main">
            <div class="header-left">
                <img class="header-img" src="../assets/logo.png">
            </div>
            <router-link to="/login" class="header-right">
                登录
            </router-link>
        </div>

        <div class="silder">
            <mt-swipe :show-indicators="false">
                <mt-swipe-item v-for="(item, index) in swiperData" :key="index">
                    <router-link to="/newsDetail">
                        <img :src="item.imgUrl">
                        <div class="desc" v-text="item.title"></div>  
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="menu-main">
            <div class="menu-row">
                <router-link to="./newseye" class="table-row">
                    <img src="../assets/icon_01.png">
                    <div>信工新闻眼</div>
                </router-link>
                <router-link to="./life" class="table-row">
                    <img src="../assets/icon_03.png">
                    <div>掌上组织生活</div>
                </router-link>
                <router-link to="./interaction" class="table-row">
                    <img src="../assets/icon_05.png">
                    <div>党员云互动</div>
                </router-link>
            </div>
            <div class="menu-row">
                <router-link to="./oneclick" class="table-row">
                    <img src="../assets/icon_04.png">
                    <div>党建一点通</div>
                </router-link>
                <router-link to="./showidentity" class="table-row">
                    <img src="../assets/icon_06.png">
                    <div>党员亮身份</div>
                </router-link>
                <router-link to="./newseye" class="table-row">
                    <img src="../assets/icon_02.png">
                    <div>党史上的今天</div>
                </router-link>
            </div>
        </div>

        <div class="image">
            <img src="../assets/banner01.png" alt="">
        </div>

        <div class="foot-menu">
            <div class="cell-left"></div>
            <div class="cell-right">
                <div class="cell-row">
                    <router-link to="/anytimestudy"></router-link>
                    <router-link to="/anytimephoto"></router-link>
                </div>
                <div class="cell-row">
                    <router-link to="/System"></router-link>
                    <router-link to="/activity"></router-link>
                </div>    
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperData: []
            }
        },
        methods: {
            getSwiper() {
                this.$axios.get('/carousel/carouselList.do?type=0').then(res=> {
                    this.swiperData = res.rows
                })
            }
        },
        created() {
            this.getSwiper()
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/index.scss";
</style>