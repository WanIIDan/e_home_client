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
                newsList: [],
                type: '',
                page: 1,
            }
        },
        methods: {
            getNewsList() {
                this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${this.type}`).then(res=> {
                    this.newsList = [...this.newsList, ...res.rows]
                    if(!res.rows.length == 0) {
                        this.page = this.page + 1
                        this.getNewsList()
                    }
                })
            }
        },
        created() {
            switch (this.$route.name) {
                case 'newseye':
                    this.type = 0;
                    break;
                case 'oneClick':
                    this.type = 3 ;
                    break
                case 'anytimestudy':
                    this.type = 6 ;
                    break
                case 'System':
                    this.type = 4 ;
                    break;  
                case 'activity':
                    this.type = 1 ;
                    break;  
                case 'study':
                    this.type = 8 ;
                    break;  
                case 'showidentity':
                    this.type = 5 ;
                    break;
            }
            this.getNewsList()
        }
    }
</script>

<style scoped>
    .none {
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: #666;
    }
</style>