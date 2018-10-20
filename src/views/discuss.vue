<template>
    <div class="wrap">
        <p class="title">评议须知</p>
        <div class="content">
            <p>在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p>
            <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
            <p>2、参加“两学一做”学习教育情况；</p>
            <p>3、参加党的组织生活、按要求交纳党费；</p>
            <p>4、学习情况、业务能力提高情况；</p>
            <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
            <p>6、联系群众、关心群众、服务群众情况；</p>
            <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
        </div>

        <div class="bottom">
            <select class="select" id="test">
                <option value ="0">请选择</option>
                <option value ="07FCB6332A644529AD727C8FC6F97E6B">信息工程学院教工第一党支部</option>
                <option value ="28D653AAAD1241128D8C6F30ABD95A27">信息工程学院教工第二党支部</option>
                <option value="29A1C8A892B84B1AA81C877499F7497F">信息工程学院学生党支部</option>
                <option value="2EB3C14ACAA54EABBF7D8D0D6C37BFEF">信息工程学院学生流动党支部（北京）</option>
            </select>
            <div class="btn" @click="next">下一步</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                listData: {}
            }
        },
        methods: {
            next(value) {
                var myselect = document.getElementById("test"); // 拿到select对象
                var index = myselect.selectedIndex ; // 拿到选中项的索引
                var value = myselect.options[index].value; // 拿到选中项options的value
                this.$router.push({
                    path: '/Members',
                    query: {value: value}
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
        padding-top: 1.2rem;
        font-size: 0.28rem;
        color: #666;
        line-height: 1.5;

        .title {
            text-align: center;
            font-size: 0.32rem;
            color: #000;
            margin-bottom: 0.1rem;
        }

        .content {
            padding: 0.2rem;
            margin-bottom: 1.6rem;

            p {
                margin-bottom: 0.2rem;
            }
        }
    }

    .bottom {
        display: flex;
        padding: 0 0.8rem;
        justify-content: space-between;

        .select {
            padding-left: 0.2rem;
            height: 0.9rem;
            width: 3.8rem;
            font-size: 0.28rem;
            font-weight: 400;
            line-height: 0.9rem;
            background: #c50206;
            color: #fff;
            border: none;
            border-radius: 0.1rem;

            option {
                background: #fff;
                color: #000;
            }
        }

        .btn {
            width: 1.8rem;
            height: 0.9rem;
            line-height: 0.9rem;
            background: #c50206;
            color: #fff;
            font-size: 0.24rem;
            text-align: center;
            border-radius: 0.1rem;
        }
    }

</style>