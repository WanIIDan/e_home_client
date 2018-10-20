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
                this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html').then(res=> {
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