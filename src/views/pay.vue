<template>
    <div class="wrap">
        <div class="zf">请选择支付方式</div>
        <div class="top" @click="wx(0)">
            <div class="left">
                <i class="iconfont icon-weixin"></i>
                <div class="text">微信</div>    
            </div>
            <img src="../assets/right.png" alt="" class="arrow">
        </div>
        <div class="bottom" @click="wx(1)">
            <div class="left">
                <i class="iconfont icon-zhifubao"></i>
                <div class="text">支付宝</div>    
            </div>
            <img src="../assets/right.png" alt="" class="arrow">
        </div>
        <div v-show="isShowing" class="show">
            <div class="mask" @click="mask"></div>
            <img src="../assets/微信.png" alt="">
        </div>
        <div v-show="isShow" class="show">
            <div class="mask"  @click="mask"></div>
            <img src="../assets/支付宝.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShowing: false,
      isShow: false
    };
  },
  methods: {
    wx(type) {
      if (type === 0) {
        this.isShowing = true;
      } else {
        this.isShow = true;
      }
    },
    mask() {
      this.isShowing = false;
      this.isShow = false;
    }
  }
}
</script>

<style scoped lang="scss">
    .wrap {
        padding-top: 0.9rem;
    }

    .zf {
        width: 7.5rem;
        height: 1.24rem;
        padding: 0.4rem 0.1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        font-size: 0.3rem;
    }

    .top, .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 7.5rem;
        height: 1.24rem;
        line-height: 1.24rem;
        padding: 0.5rem 0.3rem 0.5rem 0.1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        font-size: 0;
    }

    .left {
        display: flex;
        width: 2.4rem;

        .iconfont {
            font-size: 0.8rem;
        }

        .text {
            font-size: 0.3rem;
        }
    }

    .icon-weixin {
        color: #1afa29;
    }

    .icon-zhifubao {
        color: #1296db;
    }

    .arrow {
        width: 0.2rem;
        height: 0.3rem;
    }

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;
    }

    .show {
        img {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 5rem;
            z-index: 998;
        }
    }
</style>