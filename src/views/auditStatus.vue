<template>
    <div class="wrap">
        <div class="img">
            <img src="../assets/reviewing.png" alt="">
        </div>
        <div class="text">正在审核中</div>
        <div class="button" @click="$router.go(-1)">关闭</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;

        .img {
            height: 1.94rem;
            margin-top: 1rem;
            text-align: center;
            
            img {
                height: 1.83rem;
                height: 1.83rem;
            }
        }

        .text {
            text-align: center;
            margin: 5px auto;
            font-size: 14px;
            color: #666;
        }

        .button {
            height: 0.8rem;
            line-height: 0.8rem;
            width: 4.5rem;
            margin: 2rem 1.5rem 0;
            text-align: center;
            background: #c50206;
            color: #fff;
            font-size: 16px;
            border-radius: 10px;
        }
    }
</style>