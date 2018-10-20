<template>
    <div class="wrap">
        <div class="img">
            <div class="text">{{userInfo.totalScore}}</div>
        </div>
        <div class="text1" @click="scoredetail">
            <img src="../assets/lxjf.png" alt="" class="sipp">
            <div class="text2">积分明细</div>
            <img src="../assets/arrow.png" alt="" class="arrow">
        </div>
        <div class="guize">
            <span class="text">积分规则</span>
            <img src="../assets/wenhao.png" alt="">
        </div>
        <div class="shuz" v-for="(item,index) in scoreRules" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="score">{{item.score}}</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
       data() {
    return {
      scoreRules: [
        { name: "登录app", score: 5 },
        { name: "完善个人信息", score: 2 },
        { name: "查看积分", score: 1 },
        { name: "按时缴纳党费", score: 10 },
        { name: "查看通知", score: 2 },
        { name: "了解学院工作状态", score: 5 },
        { name: "上交思想汇报经审核通过", score: 5 },
        { name: "主动学习相关文件", score: 10 },
        { name: "认真撰写心得总结并上交，经审核通过", score: 5 },
        { name: "提交个人总结，并参与评议", score: 2 },
        { name: "积极参与互动", score: 5 },
        { name: "学习党建知识", score: 5 },
        { name: "学习党史", score: 10 },
        { name: "创先争优事迹", score: 10 },
        { name: "学党章，学习近平总书记系列讲话", score: 10 },
        { name: "用镜头记录两学一做过程中令人感动的人和事", score: 3 },
        { name: "关注并积极参与特色活动", score: 5 },
        { name: "制度化、常态化建设", score: 5 }
      ]
    };
  },
  methods: {
    scoredetail() {
      this.$router.push("/scoredetail");
    }
  },
  computed: {
    ...mapState(['token','userInfo'])
  }
};
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;
    }

    .img {
        background-image: url("../assets/jifen.png");
        background-size: 100% 100%;
        width: 7.5rem;
        height: 2.8956rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            font-size: 0.3rem;
            color: #fff;
        }
    }

    .text1 {
        display: flex;
        width: 7.54rem;
        height: 1.08rem;
        padding: 0.32rem 1.08rem;
        border: 0.02rem solid #ccc;
        margin: 0 -0.02rem;
        box-sizing: border-box;
        font-size: 0;
        position: relative;

        .text2 {
            font-size: 0.32rem;
            color: #666;
        }

        .sipp {
            width: 0.64rem;
            height: 1.04rem;
            padding: 0.2rem 0;
            box-sizing: border-box;
            position: absolute;
            left: 0.2rem;
            top: 0;
        }

        .arrow {
            width: 0.1534rem;
            height: 1.04rem;
            padding: 0.4rem 0;
            box-sizing: border-box;
            position: absolute;
            right: 0.2rem;
            top: 0;
        }
    }

    .guize {
        display: flex;
        justify-content: space-between;
        font-size: 0.28rem;
        color: #444;
        padding: 0.2rem 0.24rem;
        background: rgb(238, 238, 238);

        img {
            width: 0.36rem;
            height: 0.36rem;
        }
    }

    .shuz {
        display: flex;
        justify-content: space-between;
        width: 7.5rem;
        height: 0.7rem;
        box-sizing: border-box;
        padding: 0.1rem 0.2rem;
        border-bottom: 1px solid #ccc;

        .name {
            font-size: 0.28rem;
            color: rgb(153, 153, 153);
        }

        .score {
            font-size: 0.3rem;
            color: #f00;
        }
    }
</style>
