# miniprogram-custom-component

可自定义modal的title和body样式(有渐入渐出动画效果)


## 例子

1. 在需要用到的wxml页面上添加以下代码 

```
<base-modal class="base-modal"  bind:cancel="modalCancel" bind:confirm='modalConfirm'> 
  <view slot="header" class='modal-header'>
    <text>我是头部</text>
  </view>
  <view slot="body" class='modal-body'>
    <text>内容部分(添加class可自定义样式)</text>
  </view>
</base-modal>
```   

2. 在相应的小程序js文件添加以下代码 

```
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
```   
> ps: 请注意插入的 `<view />` 需要设置 `slot` 为`header`或`body`, 然后就可以在`class`写自己喜欢的样式了


3. 在相应的小程序json文件添加以下代码 

```
  "usingComponents": {
    "base-modal": "/path/component"
  }
```

## 开发 
  [可以看官方的文档](https://hst-sunday.github.io/react-motion-menu-button/)
