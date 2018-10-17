<template>
    <div class="tabs" >
        <router-link to="/" class="tab-item" :class="{active: $route.name === 'index'}">
            <i class="iconfont icon-dangwugongkai"></i>
            <div class="tab-title">
                首页
            </div>
        </router-link>
        <router-link to="/notice" class="tab-item" :class="{active: $route.name === 'notice'}">
            <i class="iconfont icon-xiaoxi"></i>
            <div class="tab-title">
                通知早知道
            </div>
        </router-link>
        <router-link to="/user" class="tab-item" :class="{active: $route.name === 'user'}">
            <i class="iconfont icon-wode"></i>
            <div class="tab-title">
                我的
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .tabs {
        position: fixed;
        display: flex;
        align-items: center;
        background: #fafbfe;
        // border-top: 1px solid #f1f1f1;
        width: 100%;
        height: 0.98rem;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 12px;

        a {
            display: block;
            text-align: center;
            font-size: 12px;
            text-decoration: none;
            color: #666;
        }

        .tab-item {
            flex: 1;
            height: 0.98rem;
            padding-top: 2px;

            .iconfont {
                font-size: 24px;
            }
        }

        .active {
            border-top: 2px solid #c7000a;
            color: #c7000a;
        }
    }
</style>