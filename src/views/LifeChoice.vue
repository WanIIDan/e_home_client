<template>
    <div class="wrap">
        <div class="main">
            <router-link to="/personalsummary">
                <div class="btn">个人总结</div>
            </router-link>
            <router-link to="/discuss">
                <div class="btn">民主评议</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .wrap {
        padding-top: 0.9rem;
    }

    .main {
        margin-top: 4rem;

        a {
            margin: 0.4rem auto;
            display: block;
            text-decoration: none;
            text-align: center;
            font-size: 0;
            width: 3.8rem;
            height: 1rem;
            line-height: 1rem;

            .btn {
                background: #ef473a;
                border-radius: 0.1rem;
                color: #fff;
                font-size: 0.32rem;
                font-weight: 400;
                width: 3.8rem;
                height: 1rem;
            }
        }
    }
</style>