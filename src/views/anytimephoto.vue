<template>
    <div>
        <div class="list">
            <div class="wrap" @click="handleClick(item.newsId)" v-for="(item, index) in newsList" :key="index">
                <div class="img">
                    <img :src="item.pic">
                </div>
                <div class="content" v-text="item.title"></div>
            </div>
        </div>
        <div class="none">
            没有更多数据了    
        </div>
    </div>  
</template>

<script>
    import listItem from '@/components/listItem'
    export default {
        components: {
            listItem
        },
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getNewsList() {
                this.$axios.get('/news/newsList.do?page=1&rows=10&type=7').then(res=> {
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
    .list {
        padding-top: 0.9rem;
        font-size: 0.26rem;
        display: flex;
        flex-wrap: wrap;

    }

    .wrap {
        display: flex;
        flex-direction: column;
        width: 3.112rem;
        height: 3.15rem;
        padding: 15px;
        color: #666;

        .img {
            display: inline-block;
            height: 2.334rem;
            width: 3.112rem;

            img {
                display: block;
                width: 100%;
                height: 100%;
                
            }
        }

        .content {
            line-height: 1.5;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
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