<template>
    <div class="list">
        <div class="wrap" @click="handleClick(item.newsId)" v-for="(item, index) in newsList" :key="index">
            <div class="img">
                <img :src="item.pic">
            </div>
            <div class="content">
                <p v-text="item.title"></p>
                <div class="bottom">
                    <span v-text="item.currentTime"></span>                
                    <span class="counter">
                        <i class="iconfont icon-chakan"></i>
                        <span v-text="item.count"></span>
                    </span> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            newsList: {
                type: Array,
                required: true
            }
        },
        methods: {
            handleClick(id) {
                this.$router.push(`/newsDetail/${id}`)
            }    
        }
    }
</script>

<style scoped lang="scss">
    .list {
        padding-top: 0.9rem;
    }

    .wrap {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        height: 1.6rem;
        padding: 0.2rem;
        color: #666;
        border-bottom: 0.02rem solid #aaa;

        .img {
            display: inline-block;
            height: 1.6rem;
            width: 1.6rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 5.3rem;
            height: 1.6rem;

            p {
                font-size: 0.32rem;
                line-height: 1.5;
            }

            .bottom {
                font-size: 0px;
                display: flex;
                justify-content: space-between;

                .iconfont {
                    font-size: 0.2rem;
                }

                span {
                    font-size: 0.2rem;
                }  
            }      
        }     
    }
</style>