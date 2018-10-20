<template>
    <div class="wrap">
        <div class="list">
            <ul class="forumList">
                <li>
                    <div class="top">
                        <img :src="forumList[0].header">
                        <div class="top-content">
                            <div class="username">{{forumList[0].username}}</div>
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span>{{forumList[0].currentTime}}</span>
                            </div> 
                        </div>
                    </div>
                    <div class="main">{{forumList[0].content}}</div>
                </li>
            </ul>
        </div>

        <div class="none">
            还没有数据   
        </div>

        <div class="bottom">
            <label for="">
                <input class="input" type="text" placeholder="评论内容">
                <div class="btn">评论</div>
            </label>
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
                this.$axios.get('forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res=> {
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
        position: absolute;
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
        width: 6.464rem;
        height: 1.7rem;
        padding: 0.32rem;
        border: 0.02rem solid #ddd;
        margin: 0.2rem;
        font-size: 0.32rem;

        .top {
            display: flex;

            img {
                width: 0.667rem;
                height: 0.667rem;
                margin-right: 0.2rem;
                border-radius: 50%;
            }

            .top-content {
                margin-right: 1.2rem;
                
                .username {
                    font-size: 0.36rem;
                    color: #333;
                }

                .time {
                    font-size: 0.24rem;
                    color: #666;

                    .iconfont {
                        font-size: 0.2rem;
                    }
                }
            }
        }

        .main {
            padding: 0.2rem 0;
        }
    }

    .none {
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: #666;
    }

    .bottom {
        position: relative;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.62rem;
        padding: 0.16rem;
        border: 1px solid #ddd;
        background: #fff;
        margin: -0.02rem;
        font-size: 0;

        .input {
            font-size: 0.28rem;
            color: #444;
            width: 6rem;
            line-height: 2;
            padding-left: 0.2rem;
            border: 1px solid #f00;
            border-radius: 0.1rem;
        }

        .btn {
            position: absolute;
            font-size: 0.28rem;
            text-align: center;
            line-height: 0.6rem;
            right: 0.2rem;
            bottom: 0.2rem;
            width: 0.7rem;
            height: 0.6rem;
            background: #f00;
            color: #fff;
            border-radius: 0.1rem;
        }
    }
</style>