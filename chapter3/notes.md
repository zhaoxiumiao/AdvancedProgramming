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
### 该方法决定一个构造器对象是否认可一个对象是它的实例。(Symbol.hasInstance)
   - 常用的`instanceof`就是调用的这个属性
### Symbol.isconcatSpreadable 这个是一个boolean值
   - Symbol.isConcatSpreadable 的两种值对应的情况:
      1. false: 被concat会被整个对象放进数组
      2. true: 被concat会有两种情况是类数组被踏平放入数组, 不是类数组会被忽略
   - Array: 默认情况下是 true
   - Object: 默认情况下是 false
   - otherObject: 默认是 false
### 迭代器(Symbol.iterator) 使用for of 遍历的时候就会调用这个属性（方法）

### 正则表达式方法(Symbol.match)
   - 可以在class 中重新定义 这个Symbol.match 以改变被当做match方法中的第一个值的默认行为

### 正则表达式方法(Symbol.replace)
   - 这个也是一个方法，可以改变 replace 方法中默认将第一个值变成RegExp匹配

### Symbol.search
   - 改变Symbol.search 属性方法可以进行更改默认。

### Symbol.species
   - 用来改变构造函数中的原型

### Symbol.split
   - 用来改变构造函数中的原型

### Symbol.toPrimitive
   - 当要被强制转换类型的时候改变返回值

### Symbol.toStringTag
   - 构造实例可以在使用toString 时自己定义一个名字 

### Symbol.unscopables
   - 和with相关不推荐使用with 所以不推荐使用unscopables

### 操作符
   - Incremental(递增) Decrement(递减):
      - `--` :递减
      - `++` :递增
      - 写在变量前是先运算再赋值, 写在变量后边是先赋值再运算
   - ruduce(-) : 数值变成负值，如果是字符串会进行转换
   - add(+) : 数值是不变的，如果是字符串会进行转换


