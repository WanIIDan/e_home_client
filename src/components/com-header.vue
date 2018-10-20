<template>
    <div>
        <mt-header :title="title" fixed>
            <mt-button v-if="isShow" icon="back" @click="$router.back()" slot="left">
            </mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {
        computed: {
            title() {
                return this.$route.meta.title;
            },
            isShow() {
                if(this.$route.name === 'notice' || this.$route.name === 'user') {
                    return false
                }else {
                    return true
                }
            }
        }
    }
</script>

<style lang="scss">
    .mint-header {
        background: #c50206;
        height: 0.9rem;
        
        .mint-header-title {
            font-size: 0.36rem;
            font-weight: 400;
        }
    }

    a {
        display: block;
        color: #fff;
        font-size: 0.36rem;
        font-weight: 300;
    }
</style>