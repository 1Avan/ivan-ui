<template >
  <div id="app">
    <IvButton>按钮</IvButton>
    <IvButton type="success">按钮</IvButton>
    <IvButton type="success" :plain="true">按钮</IvButton>
    <IvButton type="success" :plain="true" :round="true">按钮</IvButton>
    <IvButton type="success" :circle="true">按钮</IvButton>
    <IvButton type="primary" :circle="true" icon="shanchu" @click="Fn" :disable="true"></IvButton>
    <IvDialog top="200px" width="50%" :visible.sync="visible">
      <template #title>
        我是标题
      </template>
      <template #content>
        <!-- v-model实际上是v-bind -->
        <IvInput placeholder="我是一个输入框" type="password" v-model="data1"></IvInput>
      </template>
    </IvDialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible:false,
      data1:"",
    }
  },
  methods:{
    Fn(e){
      this.visible = true
      
    }
  },
};
</script>

<style lang="scss">
</style>