<template>
  <div class="input">
    <input type="text" v-model="inputText"/>
    <button type="button" @click="getData">輸入</button>
  </div>
  <div class="output">
    <textarea name="" id="" cols="30" rows="10" v-model="outputText"></textarea>
  </div>
</template>

<script>
export default {
  components: {
    // HelloWorld
  },
  data() {
    return {
      inputText:"",
      outputText:""
    };
  },
  methods: {
    getData() {
      //this.outputText = this.inputText
      let api = "http://127.0.0.1:8888/"
      this.axios.get(api).then(res=>{
        console.log(res)
        this.outputText = res.data.message
      })
    },
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
