<template>
  <div class="iv-input">
    <input
      :value="value"
      @input="handleInput"
      class="iv-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
    />

    <span class="iv-input_suffix">
      <i
        class="iconfont iv-icon-icon_cancle"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="iconfont iv-icon-invisible"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "IvInput",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: "",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    clear() {
      this.$emit("input", "");
      console.log(111);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.iv-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .iv-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.iv-input_suffix {
  position: absolute;
  right: 10px;
  height: 100%;
  top: 0;
  line-height: 40px;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  z-index: 900;
  i {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>