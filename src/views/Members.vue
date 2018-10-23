<template>
    <div class="wrap">
        <div @click="handleClick(item.id)" class="main" v-for="(item, index) in listData" :key="index">
            <div class="tiao1">
                <div class="left">
                    <div class="img">
                        <img :src="item.header">
                    </div>
                    <div class="text">{{item.username}}</div>    
                </div>
                <div class="text">{{item.branchName}}</div>
            </div>
        </div>

        <div class="none">
            没有更多数据了    
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                listData: {},
                page: 1,
                value: ''
            }
        },
        methods: {
            getListData() {
                this.$axios.get(`/nationComment/userList.do?select_branch=${this.value}&user_id=${this.token}&page=${this.page}&rows=10`).then(res=>{
                    if(res.code == 1) {
                        this.listData = [...this.listData, ...res.rows]
                        if(!res.rows.length == 0) {
                            this.page = this.page + 1
                            this.getListData()
                        }
                    }
                })
            },
            handleClick(id) {
                this.$axios.get(`http://211.67.177.56:8080/hhdj/nationComment/isComment.do?user_id=${this.token}&other_user_id=${id}&id=CEBBD1A4FF2147C8B9ED0CEA6AE90BCF&comment_id=CEBBD1A4FF2147C8B9ED0CEA6AE90BCF`).then(res=>{
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1000
                    });
                })
            }
        },
        created() {
            this.value = this.$route.query.value
            this.getListData()
        },
        computed: {
            ...mapState(['token'])
        }
    }
</script>

<style scoped lang='scss'>
    .wrap {
        padding-top: 0.9rem;
    }

    .main {
        display: flex;
        flex-direction: column;

        .tiao1{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            height: 1rem;
            padding: 0.2rem;
            font-size: 0;
            box-sizing: border-box;
            align-items: center;

            .left {
                display: flex;

                .text {
                    padding-top: 0.1rem;
                }
            }

            .img{
                display: block;
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                margin-right: 0.2rem;

                img {
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }

            .text{
                font-size: 0.3rem;
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