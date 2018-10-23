<template>
    <div class="wrap">
        <div class="list">
            <ul class="userInfo">
                <li>
                    <div class="top">
                        <img :src="userInfo.header">
                        <div class="top-content">
                            <div class="username">{{userInfo.username}}</div>
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span>{{userInfo.currentTime}}</span>
                            </div> 
                        </div>
                    </div>
                    <div class="main">{{userInfo.content}}</div>
                </li>
            </ul>
        </div>

        <div class="pinglun">
            <ul v-for="(item, index) in forumList" :key="index">
                <li class="forumList">
                    <div class="top">
                        <img :src="item.header">
                        <div class="top-content">
                            <div class="username">{{item.username}}</div>
                            <div class="time">
                                <i class="iconfont icon-shijian"></i>
                                <span>{{item.timeFormat}}</span>
                            </div> 
                        </div>
                    </div>
                    <div class="main">{{item.comment}}</div>
                </li>
            </ul>
        </div>

        <div class="none">
            还没有数据   
        </div>

        <div class="bottom">
            <form enctype="multipart/form-data" @submit.prevent>
                <input class="input" type="text" placeholder="评论内容" v-model="pinglunData.comment">
                <div class="btn" @click="handleClick">评论</div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {},
                forumList: [],
                pinglunData: {
                    comment: '',
                    forum_id: ''
                },
                page: 1
            }
        },
        methods: {
            getForumList(id) {
                this.$axios.get(`/forum/forumCommentList.do?page=${this.page}&rows=10&forum_id=${id}`).then(res=> {
                    this.forumList = [...this.forumList, ...res.rows]
                    if(!res.rows.length == 0) {
                        this.page = this.page + 1
                        this.getForumList(id)
                    }
                })
            },
            handleClick() {
                let id = this.$route.params.id
                let pinglun = new FormData()
                pinglun.append('comment', this.pinglunData.comment)
                pinglun.append('forum_id', id)
                this.$axios.post('forum/addComment.do', pinglun).then(res=> {
                    this.$router.push({
                        path: `/interactionDetail/${id}`,
                        query: {
                            header: this.userInfo.header,
                            username: this.userInfo.username,
                            currentTime: this.userInfo.currentTime,
                            content: this.userInfo.content
                        }
                    })
                    this.pinglunData.comment = ''
                    this.forumList = [res.data, ...this.forumList]
                })
            }
        },
        created() {
            let id = this.$route.params.id
            this.userInfo = this.$route.query
            this.getForumList(id)
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
        // height: 1.7rem;
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

    .forumList {
        margin: 0 -0.02rem;
        width: 100%;
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