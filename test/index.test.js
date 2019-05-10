const _ = require('./utils')

test('render', async () => {
  const componentId = _.load('index', 'base-modal')
  const component = _.render(componentId, {prop: 'index.test.properties'})

  const parent = document.createElement('parent-wrapper')
  component.attach(parent)

  expect(_.match(component.dom, '<base-modal class="base-modal" ' +
  ' bind:cancel="modalCancel" bind:confirm="modalConfirm"> ' +
  ' <view slot="header" class="modal-header"><text>我是头部</text> ' +
  ' </view> <view slot="body" class="modal-body"><text>内容部分(添加class可自定义样式)</text></view></base-modal>')).toBe(true)
})
