<template>
    <div class="notice">
        <div class="wrap">
            <router-link to="/newsDetail" v-for="(item, index) in newsList" :key="index">
                <div class="notice-left">
                    <img src="../assets/iconfont_gonggaotongzhi.png">
                </div>
                <div class="notice-right">
                    <div class="notice-title" v-text="item.title">
                    </div>
                    <div class="notice-time" v-text="item.currentTime">
                    </div>
                </div>
            </router-link>    
            <div class="none">
                没有更多数据了    
            </div> 
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getNewsList() {
                this.$axios.get('/news/newsList.do?page=1&rows=10&type=2').then(res=> {
                    this.newsList = res.rows
                })
            }
        },
        created() {
            this.getNewsList()
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;
        font-size: 15px;

        a {
            padding: 10px;
            height: 1.5rem;
            border-bottom: 1px solid #ccc;
            text-decoration: none;
            color: #333;
            display: flex;
            justify-content: space-between;

            .notice-left {
                width: 1.4rem;

                img {
                    height: 36px;
                    margin: 20px;
                }
            }

            .notice-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 5px;

                .notice-time {
                    font-size: 12px;
                    color: #666;
                }
            }
        }

        .none {
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
    }
</style>