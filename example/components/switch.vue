<template>
  <div class="iv-switch">
    <span class="iv-switch_core" @click="handleClick">
      <span class="iv-switch_button" ref="button"></span>
      <span :class="['iv-switch_ball', { 'is-checked': value }]"></span>
    </span>
    <input
      type="checkbox"
      class="iv-switch_input"
      :name="name"
      ref="input"
      style="display: none"
    />
  </div>
</template>

<script>
export default {
  name: "IvSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "red",
    }, //自定义激活颜色
    inactiveColor: {
      type: String,
      default: "blue",
    },
    name: {
      type: String,
      default: "",
    },
  },
  mounted() {
    // 修改开关颜色
    if (this.activeColor || this.inactiveColor) {
      let color = !this.value ? this.activeColor : this.inactiveColor;
      this.$refs.button.style.backgroundColor = color;
      this.$refs.button.style.borderColor = color;
    }
  },
  watch: {
    value: function (newValue) {
      console.log(this);

      if (this.activeColor || this.inactiveColor) {
        let color = !newValue ? this.activeColor : this.inactiveColor;
        this.$refs.button.style.borderColor = color;
        this.$refs.button.style.backgroundColor = color;
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value;
    },
  },
};
</script>

<style scoped lang="scss">
.iv-switch {
  position: absolute;
  &_core {
    display: inline-block;
  }
  &_button {
    display: inline-block;
    height: 30px;
    width: 70px;
    border-radius: 15px;
    transition: all 0.5s ease-in-out; /* 对 transform 进行过渡 */
  }
  .iv-switch_ball {
    position: absolute;
    // display: inline-block;
    left: 0;
    // right: 0;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateX(0); /* 初始位置 */
    transition: transform 0.5s ease-in-out; /* 对 transform 进行过渡 */
  }
  .is-checked {
    transform: translateX(40px);
    transition: all 0.5s ease-in-out;
  }
}
</style>