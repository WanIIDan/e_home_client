<template>
    <div class="wrap">
        <div>
            <div class="main">
                <div class="upload" enctype="multipart/form-data">
                    <input type="file" :v-model="fileData.myFile" @click="file">
                    <img v-if="isShow" src="../assets/upload.png">
                    <img v-else :src="this.fileData.myFile">
                </div>
                <!-- <div class="upload" enctype="multipart/form-data">
                    <input type="file" :v-model="fileData.myFile" @click="file">
                    <img src="../assets/upload.png" alt="">
                </div> -->
            </div>
            <div class="button">
                <div class="btn" @click="submit">提交审核</div>
            </div>    
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                fileData: {
                    myFile: null,
                    comment_id: '',
                    user_id: '',
                    url: ''
                },
                isShow: true
            }
        },
        methods: {
            file() {
                let file = new FormData()
                file.append('myFile',this.fileData.myFile)
                this.$axios.post('/image/uploadBase64.do',file).then(res=>{
                    this.$router.push('/personalsummary')
                    this.url = res.url
                    this.isShow = false
                })
            },
            submit() {
                let fileList = new FormData()
                let token = token
                fileList.append('pic_list',this.fileData.myFile)
                fileList.append('comment_id','CEBBD1A4FF2147C8B9ED0CEA6AE90BCF')
                fileList.append('user_id',token)
                this.$axios.post('/nationComment/submitSummary.do',fileList).then(res=>{
                    if(res.code == 1){
                        this.$router.push('/personalsummary')
                    }
                })
            }
        },
        computed: {
            ...mapState(['token','userInfo'])
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;

        .upload {
            input {
                position: absolute;
                opacity: 0;
                width: 2.1rem;
                height: 2.1rem;
                padding: 0.2rem;
                
            }
            img {
                width: 2.1rem;
                height: 2.1rem;
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

    .main {
        display: flex;
        flex-wrap: wrap;
    }
</style>