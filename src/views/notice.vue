<template>
    <div class="notice">
        <div class="wrap">
            <div class="main" @click="handleClick(item.newsId)" v-for="(item, index) in newsList" :key="index">
                <div class="notice-left">
                    <img src="../assets/iconfont_gonggaotongzhi.png">
                </div>
                <div class="notice-right">
                    <div class="notice-title" v-text="item.title">
                    </div>
                    <div class="notice-time" v-text="item.currentTime">
                    </div>
                </div>
            </div>    
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
            },
            handleClick(id) {
                this.$router.push(`/newsDetail/${id}`)
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
        font-size: 0.3rem;

        .main {
            padding: 0.2rem;
            height: 1.5rem;
            border-bottom: 0.02rem solid #ccc;
            color: #333;
            display: flex;
            justify-content: space-between;

            .notice-left {
                width: 1.4rem;

                img {
                    height: 0.72rem;
                    margin: 0.4rem;
                }
            }

            .notice-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0.1rem;

                .notice-time {
                    font-size: 0.24rem;
                    color: #666;
                }
            }
        }

        .none {
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            font-size: 0.28rem;
            color: #666;
        }
    }
</style>