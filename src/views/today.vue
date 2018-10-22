<template>
    <div class="content">
        <div class="wrap" v-html="newData.content"></div>
    </div>
</template>

<script>
    import getUrl from '../util/geturl.js'
    import cheerio from 'cheerio'

    export default {
        data() {
            return {
                newData: {},
                content: ''
            }
        },
        methods: {
            getTodayData() {
                let date = new Date()
                let month = date.getMonth()+1
                month = month > 9 ? '' + month : '0' + month
                let day = date.getDate()
                day = day > 9 ? '' + day : '0' + day
                let url = getUrl(month, day)
                this.$axios.get(`/proxy/proxy.do?url=${url}`).then(res => {
                    const $ = cheerio.load(res)
                    let content = $(".p1_02").html()
                    this.newData = { content: content }
                })
            }
        },
        created() {
            this.getTodayData()
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