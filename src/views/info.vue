

<template>
    <div class="wrap">
        <mt-header :title="isEdit ? '修改个人信息' : '个人信息'" fixed>
            <mt-button icon="back" @click="$router.back()" slot="left">
            </mt-button>
            <mt-button slot="right" v-if="!isEdit" @click="edit">编辑</mt-button>
            <mt-button slot="right" v-else @click="saveEdit">保存</mt-button>
        </mt-header>
        
        <div class="content">
        <div class="item">
          <div>头像</div>
          <div v-if="!isEdit" class="header">
            <img :src="userInfo.header">
          </div>
          <div v-else class="header">
            <imgLoad @upLoad="checkImg" v-model="editData.header"></imgLoad>
          </div>
        </div>
        <!---->
        <div class="item">
          <div>姓名</div>
          <div v-if="!isEdit" class="text">
            {{userInfo.username}}
          </div>
          <div class="edit_text" v-else>
            <input type="text" v-model="editData.username">
          </div>
        </div>
        <!---->
        <div class="item">
          <div>身份证</div>
          <div class="text">
           {{userInfo.idCard}}
          </div>
        </div>
      </div>
      <!---->
      <div class="item">
        <div>家庭住址</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.hometown}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.hometown">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>工作地址</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.address}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.address">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>民族</div>=
        <div v-if="!isEdit" class="text">
          {{userInfo.nation}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.nation">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>微信号</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.wxNum}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.wxNum">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>qq号</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.qqNum}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.qqNum">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>性别</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.sex==1 ? '男' : '女' }}
        </div>
        <div class="edit_text" v-else>
          <input type="radio" name="sex" value="1" v-model="editData.sex"> 男
          <input type="radio" name="sex" value="0" v-model="editData.sex"> 女
        </div>
      </div>
      <!---->
      <div class="item">
        <div>最高学历</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.education}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.education">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>职称</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.jobRank}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.jobRank">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>薪资水平</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.salary}}
        </div>
        <div class="edit_text" v-else>
          <input type="text" v-model="editData.salary">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>入党时间</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.joinPartyTime}}
        </div>
        <div class="edit_text" v-else>
          <input type="date" v-model="editData.joinPartyTime">
        </div>
      </div>
      <!---->
      <div class="item">
        <div>党费最后缴纳时间</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.lastPayTime}}
        </div>
        <div class="edit_text" v-else>
          <input type="date" v-model="editData.lastPayTime" pattern='yyyy-MM-dd '>
        </div>
      </div>
      <!---->
      <div class="item">
        <div>当前身份</div>
        <div v-if="!isEdit" class="text">
          {{userInfo.partyIdentity}}
        </div>
        <div class="edit_text" v-else>
          <select class="select" v-model="editData.partyStatus">
            <option value="0">积极分子</option>
            <option value="1">预备党员</option>
            <option value="2">党员</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapMutations } from "vuex";
import imgLoad from "../components/imgLoad";

export default {
  components: {
    imgLoad
  },
  data() {
    return {
      isImg: false,
      msg: "",
      isMsg: false,
      isEdit: false,
      userInfo: {},
      editData: {
        username: "",
        hometown: "",
        idCard: "",
        address: "",
        nation: "",
        wxNum: "",
        qqNum: "",
        sex: "",
        education: "",
        jobRank: "",
        salary: "",
        joinPartyTime: "",
        lastPayTime: "",
        partyStatus: "",
        header: ""
      }
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    edit() {
      this.editData.header = this.userInfo.header;
      this.isEdit = true;
    },
    getData() {
      this.$axios.get("/user/userInfo.do").then(res => {
        this.userInfo = res.data;
        this.isEdit = false;
        for (let item in res.data) {
          if (item in this.editData) {
            this.editData[item] = res.data[item];
          }
        }
        this.setUser(this.userInfo);
        this.header = this.editData.header;
      });
    },
    saveEdit() {
      let form = new FormData();
      if (!this.isImg) {
        delete this.editData.header;
      }
      for (let item in this.editData) {
        if (item != "idCard") {
          form.append(item, this.editData[item]);
        }
      }
      this.$axios.post("/user/modifyInfo.do", form).then(res => {
        this.isMsg = true;
        this.msg = res.msg;
        setTimeout(() => {
          this.isMsg = false;
        }, 1000);
        if (res.code == 1) {
          this.getData();
        }
      });
    },
    checkImg(value) {
      this.isImg = value;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.wrap {
  padding-top: 0.9rem;
}

.item {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  width: 100%;
  height: 1rem;
  line-height: 0.8rem;
  font-size: 0;
  padding: 0.1rem 0.3rem;
  color: #444;

  .header {
    width: 0.56rem;
    padding: 0.12rem 0;
    height: 100%;

    img {
      width: 0.56rem;
    }
  }

  div {
    font-size: 0.28rem;
  }

  .edit_text {
    input {
      outline: none;
      border: none;
      text-align: right;
      font-size: 0.28rem;
    }

    .select {
      outline: none;
      border: none;
      font-size: 0.28rem;
    }
  }
}
</style>