<template>
    <div class="wrap">
        <div>
            <div class="upload">
                <input type="file">
                <img src="../assets/upload.png" alt="">
            </div>
            <div class="button">
                <div class="btn">提交审核</div>
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;

        .upload {
            input {
                position: absolute;
                opacity: 0;
                width: 2.5rem;
                height: 2.5rem;
                padding: 0.2rem;
                
            }
            img {
                width: 2.5rem;
                height: 2.5rem;
                padding: 0.2rem;
            }
        }

        .button {
            position: absolute;
            bottom: 1.5rem;
            width: 100%;
            text-align: center;
            
            .btn {
                background: #ef473a;
                color: #fff;
                font-size: 0.32rem;
                border-radius: 0.1rem;
                padding: 0.26rem;
            }
        }
    }
</style>