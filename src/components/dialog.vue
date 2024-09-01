<template>
  <transition name="dialog-fade">
    <div class="iv-dialog_wrapper" v-show="visible">
      <div class="iv-dialog" :style="{ width: width, marginTop: top }">
        <div class="iv-dialog_header">
          <span class="iv-dialog_title">
            <slot name="title"></slot>
          </span>
          <button class="iv-dialog_headerbtn" @click="handleClose">
            <i class="iconfont iv-icon-close"></i>
          </button>
        </div>
        <div class="iv-dialog_body">
          <span>
            <slot name="content"></slot>
          </span>
        </div>
        <div class="iv-dialog_footer">
          <slot name="footer" v-if="$slots.footer"> </slot>
          <template v-else>
            <iv-button>取消</iv-button>
            <iv-button type="primary" @click="handleClose">确定</iv-button>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "IvDialog",
  props: {
    top: {
      type: String,
      default: 20,
    },
    width: {
      type: String,
      default: "200",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.iv-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .iv-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .iv-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .iv-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .iv-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .iv-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: scaleDialog 0.3s;
}
.dialog-fade-leave-active {
  animation: scaleDialog 0.3s reverse;
}

@keyframes scaleDialog {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>