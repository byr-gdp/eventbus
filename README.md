# EventBus

参考部分 EventEmitter API 实现，以及学习 ava 简单测试用例写法。

## API

实例方法：

- `on(type, cb)`(alias `addListener(type, cb)`)
- `once(type, cb)`
- `emit(type, ...args)`
- `removeListener(type, cb)`
- `removeAllListener()`

## Test

`npm test`

## Todo

- [ ] TypeScript 重写
- [x] Rollup 打包
