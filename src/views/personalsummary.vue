<template>
    <div class="wrap">
        <div class="list">
            <div class="main">
                <div class="upload" enctype="multipart/form-data">
                    <input type="file" :v-model="fileData.myFile" @change="imgChange">
                    <img v-if="isShow" src="../assets/upload.png">
                    <img v-else :src="this.imgUrl">
                </div>
            </div>
            <div class="main" v-if="!isShow">
                <div class="upload">
                    <input type="file">
                    <img src="../assets/upload.png">
                </div>
            </div>
            <div class="button">
                <div class="btn" @click="submit">提交审核</div>
            </div>    
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                fileData: {
                    myFile: null,
                    comment_id: '',
                    user_id: '',
                    url: ''
                },
                isShow: true,
                imgUrl: this.value
            }
        },
        methods: {
            imgChange (event) {
                this.file = event.target.files[0]
                let img = event.target.value
                let render = new FileReader()
                let base64 = ''
                render.onload = () => {
                    let base = render.result
                    base64 = base.split(',')[1]
                    let form = new FormData()
                    form.append('myFile', base64)
                    this.$axios.post('/image/uploadBase64.do', form).then(res => {
                        this.imgUrl = base
                        this.$emit('input', res.url)
                        this.$emit('upLoad', true)
                        this.isShow = false
                    })
                }
                render.readAsDataURL(this.file)
            },
            submit() {
                if (this.isShow) {
                    let fileList = new FormData()
                    fileList.append('pic_list','')
                    fileList.append('comment_id',0)
                    fileList.append('user_id',this.token)
                    this.$axios.post('/nationComment/submitSummary.do',fileList).then(res=>{
                        Toast({
                            message: res.msg,
                            position: 'middle',
                            duration: 1000
                        });
                    })
                }else {
                    let fileList = new FormData()
                    fileList.append('pic_list',this.imgUrl)
                    fileList.append('comment_id','CEBBD1A4FF2147C8B9ED0CEA6AE90BCF')
                    fileList.append('user_id',this.token)
                    this.$axios.post('/nationComment/submitSummary.do',fileList).then(res=>{
                        Toast({
                            message: res.msg,
                            position: 'middle',
                            duration: 1000
                        });
                    })    
                }
                
            }
        },
        computed: {
            ...mapState(['token'])
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
                
            }
            img {
                width: 2.1rem;
                height: 2.1rem;
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
        width: 2.1rem;
        height: 2.1rem;
        padding: 0.2rem;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
</style>