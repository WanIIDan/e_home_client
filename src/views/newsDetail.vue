<template>
    <div class="news">
        <mt-header :title="this.title" fixed>
            <mt-button icon="back" @click="$router.back()" slot="left">
            </mt-button>
        </mt-header>

        <div class="content-wrap">
            <h3>{{newsContent.title}}</h3>
            <div class="content" v-html="newsContent.content"></div>
        </div>
         
    </div>
</template>

<script>

    export default {
        
        data() {
            return {
                newsContent: {},
                title: ''
            }
        },
        methods: {
            getNewsContent(id) {
                this.$axios.get(`/news/newsContent.do?newsId=${this.$route.params.id}`).then(res=> {
                    if(res.code == 1) {
                        this.newsContent = res.data;
                        switch (this.newsContent.type) {
                            case 0:
                                this.title = "信工新闻眼";
                                break;
                            case 3:
                                this.title = "党建一点通";
                                break;
                            case 6:
                                this.title = "随时随地学";
                                break;
                            case 4:
                                this.title = "制度建设";
                                break;
                            case 2:
                                this.title = "通知早知道";
                                break;
                            case 1:
                                this.title = "特色活动";
                                break;
                            case 8:
                                this.title = "政治学习";
                                break;
                            case 5:
                                this.title = "党员亮身份";
                                break;
                        }    
                    }
                })
            }
        },
        created() {
            this.getNewsContent()
        }
    }
</script>

<style>
    img {
        width: 100%;
    }
</style>

<style scoped lang="scss">

    .news {
        padding-top: 0.9rem;
    }

    .content-wrap {
        width: auto;
        height: auto;
        overflow: hidden;

        h3 {
            font-size: 0.48rem;
            margin-bottom: 0.2rem;
            font-weight: 500;
            line-height: 1.2;
            padding: 0.2rem;
        }
    }
    .title {
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        width: 100%;
    }

    .content {
        font-size: 14px;
        margin: 0.2rem 0.2rem;
        font-weight: normal;
        line-height: 2;
    }
</style>

