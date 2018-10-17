<template>
    <div class="list">
        <listItem :newsList="newsList"></listItem>
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
                this.$axios.get('/news/newsList.do?page=1&rows=10&type=3').then(res=> {
                    this.newsList = res.rows
                })
            }
        },
        created() {
            this.getNewsList()
        }
    }
</script>

<style scoped>
    .none {
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 14px;
        color: #666;
    }
</style>