<template>
    <div>
        <div class="image">
            <img src="../assets/timg.jpg">
        </div>

        <div class="menu-main">
            <div class="menu-row">
                <router-link to="/study" class="table-row">
                    <img src="../assets/icon1.png">
                    <div>政治学习</div>
                </router-link>
                <router-link :to="token ? '/auditStatus/0/0' : '/login'" class="table-row">
                    <img src="../assets/icon2.png">
                    <div>思想汇报</div>
                </router-link>
                <router-link :to="token ? '/auditStatus/0/1' : '/login'" class="table-row">
                    <img src="../assets/icon3.png">
                    <div>心得总结</div>
                </router-link>
                <router-link :to="token ? '/LifeChoice' : '/login'" class="table-row">
                    <img src="../assets/icon4.png">
                    <div>民主评议</div>
                </router-link>
                <router-link to="/findorg" class="table-row">
                    <img src="../assets/icon5.png">
                    <div>流动党员找组织</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['token','userInfo'])
        }
    }
</script>

<style scoped lang="scss">
    .image {
        padding-top: 0.9rem;
        height: 3.75rem;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .menu-main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 6rem;
        width: 100%;
        background-size: 100%;

        .menu-row {
            display: flex;
            flex-wrap: wrap;

            a {
                width: 1.7rem;
                height: 2.28rem;
                display: block;
                padding: 0.3rem 0.4rem;
                text-align: center;
                font-size: 0.28rem;
                text-decoration: none;
                color: #666;
            }

            img {
                width: 1.7rem;
                height: 1.7rem;
                margin-bottom: 0.1rem;
            }
        }
    }
</style>