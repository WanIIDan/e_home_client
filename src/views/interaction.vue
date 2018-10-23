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
                        <div @click="handleClick(item)">
                            <i class="iconfont icon-xiaoxi1"></i>
                            <span>回复</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="img" @click="upload" >
            <i class="iconfont icon-xinzeng"></i>
        </div>

        <div v-show="isShowing"  class="show">
            <div class="mask" @click="mask"></div>
            <div class="pinglun">
                <form enctype="multipart/form-data" @submit.prevent>
                    <textarea class="text" v-model="fabuData.content"></textarea>
                    <div class="button">
                        <div class="btn btn1" @click="fabu">发布</div>
                        <div class="btn btn2" @click="mask">取消</div>    
                    </div>
                </form>
            </div>
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
                isShowing: false,
                forumList: [],
                page: 1,
                fabuData: {
                    content: ''
                }
            }
        },
        methods: {
            getForumList() {
                this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`).then(res=> {
                    this.forumList = [...this.forumList, ...res.rows]
                    if(!res.rows.length == 0) {
                        // this.page = this.page + 1
                        // this.getForumList()
                    }
                })
            },
            handleClick(item) {
                this.$router.push({
                    path: `/interactionDetail/${item.forumId}`,
                    query: {
                        header: item.header,
                        username: item.username,
                        currentTime: item.currentTime,
                        content: item.content
                    }
                })
            },
            upload() {
                this.isShowing = true;
            },
            mask() {
                this.isShowing = false;
            },
            fabu() {
                let fabu = new FormData()
                fabu.append('content',this.fabuData.content)
                this.$axios.post('/forum/saveForum.do', fabu).then(res=>{
                    if(res.code == 1) {
                        this.isShowing = false
                        this.fabuData.content = ''
                        this.forumList = [res.data, ...this.forumList]
                    }
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
        // height: 2.148rem;
        padding: 0.32rem;
        border: 0.02rem solid #ddd;
        margin: -0.02rem -0.02rem 0.2rem;
        font-size: 0.32rem;
        color: #333;

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
                }

                .time {
                    font-size: 0.24rem;

                    .iconfont {
                        font-size: 0.2rem;
                    }
                }
            }

            .right {
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0.24rem;
                padding: 0.04rem 0.16rem;
                border: 0.02rem solid #f00;
                color: #f00;
                border-radius: 15%/50%;
            }
        }

        .main {
            // text-overflow: -o-ellipsis-lastline;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // display: -webkit-box;
            // -webkit-line-clamp: 2;
            // -webkit-box-orient: vertical;
            padding: 0.2rem 0;
            line-height: 1.5;
            font-style: 0.32rem;
            color: #444;
        }

        .bottom {
            text-align: right;

            .iconfont {
                font-size: 0.36rem;
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

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;
    }

    .pinglun {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 998;
        padding: 0.2rem;
        height: 2.8rem;
        width: 7.1rem;
        background: #eee;

        .text {
            height: 1.84rem;
            width: 6.9rem;
            padding: 0.08rem;
            border: none;
            border-radius: 0.1rem;
            margin-bottom: 0.2rem;
        }

        .button {
            height: 0.8rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.24rem;

            .btn {
                width: 0.7rem;
                height: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                border-radius: 0.1rem;
            }

            .btn1 {
                background: #ef473a;
                color: #fff;
            }

            .btn2 {
                background: #f8f8f8;
                color: #444;
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
</style>