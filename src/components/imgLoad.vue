<template>
  <div class="file_container">
    <label for="file" class="file_select">
      <span v-show="!imgUrl">+</span>
      <img v-show="imgUrl" :src="imgUrl">
    </label>
    <input id="file" name="file" type="file" @change="imgChange" style="display: none">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'img_upload',
  props: {
    value: '',
    img: ''
  },
  data () {
    return {
      imgUrl: this.value,
      token: '',
      file: {}
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
        })
      }
      render.readAsDataURL(this.file)
    },
    getToken () {
      axios.get('http://upload.yaojunrong.com/getToken').then(res => {
        this.token = res.data.data
      })
    }
  },
  created () {
    console.log(this.img)
    this.getToken()
  }
}
</script>

<style scoped>
.file_container{
  position: relative;
  text-align: center;
  height: 30px;
}
.file_select {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  font-size: 12px;
  font-weight: lighter;
  color: #e1e1e1;
  border: 1px dashed #e1e1e1;
  border-radius: 2px;
}
.file_select:hover {
  border-color: aqua;
  color: aqua;
}
img{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 2px;
}
</style>
