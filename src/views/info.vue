<template>
    <div class="wrap">
        <mt-header :title="title" fixed>
            <mt-button icon="back" @click="$router.push('/user')" slot="left">
            </mt-button>
            <mt-button @click="$router.push('/updateInfo')" slot="right">编辑</mt-button>
        </mt-header>

        <div class="main">
        <div class="tiao1">
            <div class="text">头像</div>
            <img :src="userInfo.header" class="img">
        </div>
        <div class="tiao1">
            <div class="text">姓名</div>
            <div class="text">{{userInfo.username}}</div>
        </div>
        <div class="tiao1">
            <div class="text">身份证</div>
            <div class="text">{{userInfo.idCard}}</div>
        </div>
        <div class="tiao1">
            <div class="text">家庭住址</div>
            <div class="text">{{userInfo.hometown}}</div>
        </div>
        <div class="tiao1">
            <div class="text">工作</div>
            <div class="text">{{userInfo.address}}</div>
        </div>
        <div class="tiao1">
            <div class="text">民族</div>
            <div class="text">{{userInfo.nation}}</div>
        </div>
        <div class="tiao1">
            <div class="text">微信</div>
            <div class="text">{{userInfo.wxNum}}</div>
        </div>
        <div class="tiao1">
            <div class="text">qq</div>
            <div class="text">{{userInfo.qqNum}}</div>
        </div>
        <div class="tiao1">
            <div class="text">性别</div>
             <div class="text">{{userInfo.sex==1 ? '男':'女'}}</div>
        </div>
        <div class="tiao1">
            <div class="text">学历</div>
            <div class="text">{{userInfo.education}}</div>
        </div>
        <div class="tiao1">
            <div class="text">职称</div>
            <div class="text">{{userInfo.jobRank}}</div>
        </div>
        <div class="tiao1">
            <div class="text">薪资水平</div>
            <div class="text">{{userInfo.salary}}</div>
        </div>
        <div class="tiao1">
            <div class="text">入党时间</div>
            <div class="text">{{userInfo.joinPartyTime}}</div>
        </div>
        <div class="tiao1">
            <div class="text">党费最后缴纳时间</div>
            <div class="text">{{userInfo.lastPayTime}}</div>
        </div>
        <div class="tiao1">
            <div class="text">当前身份</div>
            <div class="text">{{userInfo.partyIdentity}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    // import {mapState} from 'vuex'

    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        methods:{
            getUser(){
                this.$axios.get('/user/userInfo.do').then(res=>{
                    if(res.code == 1){
                        this.userInfo=res.data
                    }
                })
            }
        },
        created() {
            this.getUser()
        },
        computed: {
            title() {
                return this.$route.meta.title;
            },
            // ...mapState(['token','userInfo'])
        }
    }
</script>

<style scoped lang='scss'>
    .wrap {
        padding-top: 0.9rem;
    }

    .main {
        display: flex;
        flex-direction: column;

        .tiao1{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            height: 1rem;
            padding: 0.2rem 0.2rem;
            box-sizing: border-box;
            align-items: center;

            .img{
                display: block;
                width: 0.6rem;
                height: 0.6rem;
            }

            .text{
                font-size: 0.3rem;
            }
        }
    }
</style>