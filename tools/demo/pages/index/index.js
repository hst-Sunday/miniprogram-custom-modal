
Page({
  onReady() {
    this.baseModal = this.selectComponent('.base-modal')
  },

  open() {
    this.baseModal.open()
    // eslint-disable-next-line no-console
    console.log('打开了modal')
  },

  modalCancel() {
    this.baseModal.close()
    // eslint-disable-next-line no-console
    console.log('点击了取消按钮')
  },

  modalConfirm() {
    this.baseModal.close()
    // eslint-disable-next-line no-console
    console.log('点击了确定按钮')
  }

})
