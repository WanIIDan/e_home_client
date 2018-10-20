<template>
    <div class="content">
        <div class="wrap" v-html="content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: {}
            }
        },
        methods: {
            getContent() {
                this.$axios.get('/proxy/proxy.do?url=http://cpc.people.com.cn/GB/64162/64165/70486/70505/index.html').then(res=> {
                    let str = res.split("<!--content-->")[1]
                    this.content = str.split("<!--p1 end-->")[0]
                })
            }
        },
        created() {
            this.getContent()
        }
    }
</script>

<style scoped lang="scss">

    .content {
        padding-top: 0.9rem;
        font-size: 0.28rem;
        font-weight: 300;

        .wrap {
            padding: 0.2rem;
            line-height: 2;
        }
    }

</style>