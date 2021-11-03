# chapter3 notes
### defineProperties / defineProperty
   - 修改对象属性 或增加属性
   - 还可以进行对属性进行set get 监控
### Symbol 
   - 相当于加了唯一标识 为了防止属性命名冲突
   - Symbol.for() 注册一个全局的唯一标识
   - Symbol.keyFor(Symbol) 查找一个 
### Null
   - 当要未来要定义值，现在请先赋值为null
### 异步迭代(asynchronous iteration)
   - 要解决的问题是：
      - 使用同步迭代器迭代异步确定的值时，主线程会被堵塞，以等待异步操作完成