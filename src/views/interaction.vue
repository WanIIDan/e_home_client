<template>
    <div class="wrap">
        <div class="list">
            <ul class="forumList" v-for="(item, index) in forumList" :key="index">
                <li>
                    <div class="top">
                        <img :src="item.header">
                        <div class="top-content">
                            <div class="username" v-text="item.username"></div>
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span v-text="item.currentTime"></span>
                                <i class="iconfont icon-tongzhi"></i>
                                <span>公开</span>
                            </div> 
                        </div>
                        <div class="right">
                            党员互动
                        </div>
                    </div>
                    <div class="main" v-text="item.content"></div>
                    <div class="bottom">
                        <div @click="$router.push('/interactionDetail')">
                            <i class="iconfont icon-xiaoxi1"></i>
                            <span>回复</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="img">
            <i class="iconfont icon-xinzeng"></i>
        </div>

        <div class="none">
            没有更多数据了    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                forumList: []
            }
        },
        methods: {
            getForumList() {
                this.$axios.get('/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res=> {
                    this.forumList = res.rows
                })
            }
        },
        created() {
            this.getForumList()
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #eee;
    }

    .list {
        padding-top: 0.9rem;
    }

    li {
        display: flex;
        background: #fff;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: none;
        width: 6.864rem;
        height: 2.148rem;
        padding: 16px;
        border: 1px solid #ddd;
        margin: -1px -1px 10px;
        font-size: 16px;
        color: #333;

        .top {
            display: flex;

            img {
                width: 0.667rem;
                height: 0.667rem;
                margin-right: 10px;
                border-radius: 50%;
            }

            .top-content {
                margin-right: 1.2rem;
                
                .username {
                    font-size: 18px;
                }

                .time {
                    font-size: 12px;

                    .iconfont {
                        font-size: 10px;
                    }
                }
            }

            .right {
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 12px;
                padding: 2px 8px;
                border: 1px solid #f00;
                color: #f00;
                border-radius: 15%/50%;
            }
        }

        .bottom {
            text-align: right;

            .iconfont {
                font-size: 18px;
            }
        }
    }

    .img {
        position: fixed;
        bottom: 1rem;
        right: 0.2rem;

        .iconfont {
            font-size: 1.3rem;
            color: #f00;
        }
    }

    .none {
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 14px;
        color: #666;
    }
</style>