<template>
    <div class="list">
        <div class="item" v-for="(item, index) in listData" :key="index">
            <div class="left">
                <div class="title" v-text="item.typeName"></div>
                <div class="time" v-text="item.timeFormat"></div>
            </div>
            <div class="right">+{{item.singleDesc}}</div>
        </div>

        <div class="none">
            没有数据了    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listData: {},
                page: 1
            }
        },
        methods: {
            getList() {
                this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res=>{
                    this.listData = [...this.listData, ...res.rows]
                    if(!res.rows.length == 0) {
                        this.page = this.page + 1
                        this.getList()
                    }
                })
            }
        },
        created() {
            this.getList()
        }
    }
</script>

<style scoped lang="scss">
    .list {
        padding-top: 0.9rem;
    }

    .item {
        display: flex;
        justify-content: space-between;
        height: 0.9rem;
        padding: 0.32rem;
        border-bottom: 1px solid #ddd;

        .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
                font-size: 0.36rem;
                color: #333;
                margin-bottom: 0.1rem;
            }

            .time {
                font-size: 0.28rem;
                color: #444;
            }
        }
        

        .right {
            font-size: 0.32rem;
            color: #f00;
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