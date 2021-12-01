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

### 位操作符(bitOperator)
   - 按位非`~`
   - 按位与`&`
   - 按位或`|`
   - 按位异或`^`
   - 左移`<<`
   - 右移`>>`
   - 无符号右移`>>>`
   - notes: 位操作符是要比正常加减运算要快，但是我并没有遇到实际使用场景

### 布尔操作符
   - 逻辑非(!)
   - 逻辑与(&&)
   - 逻辑或(||)

### 乘性操作符
   - 乘法 (*)
   - 除法 (/)
   - 取模 (%)

### 指数操作符
   - **
   - Math.pow()

### 加性操作符
   - 加法操作符(+)
   - 减法操作符(-)

### 关系操作符
   - 操作数都是字符串则比较字符编码
   - 操作数有一个是数值，则转换数值进行比较
   - 操作数有一个是NaN ，都是false

### 相等操作符
   - 相等操作符分为 等于(==)和全等(===)
   - (==): 会进行类型转换 (===): 不会进行类型转换
   - NaN 不等于 NaN

### 条件操作符(又称三元运算符)
   - 例如: `variable = boolean_expressing ? true_value : false_value`

### 赋值操作符(=)
   - 也可以使用符合例如: `+=`

### 逗号操作符
   - `let num1 = 1, num2 = num2, num3 = 3`
   - `let num = (5, 1, 4, 8, 0)` num == 0

### if 语句
   - `if` `else if` `else`

### do-while 语句
   - 后测试循环体
   - `do {} while(condition)`

### while 语句
   - 先测试循环体
   - `while(condition){}`

### for 语句
   - 先测试循环体
   - `for(initialization, expression, post-loop-expression) statement`
   - `for(let i = 0; i < 10; i++;) {}` 这个是通常写法

### for-in 语句
   - 迭代语句，用于枚举对象中的非符号键属性
   - `for(property in expression) statement`

### for-of 语句
   - 用于遍历可迭代对象的元素
   - `for(property of expression) statement`

### 标签语句
   - `label:statement`

### break && continue
   - 都是循环控制语句
   - 后面可以跟标签`break label`

### with语句
   - 不推荐使用

### switch 语句
```js 
switch (expression){
   case value1:
      statement
      break;
   case value2:
      statement
      break;
   default:
      statement
}
```
   - switch 比较使用的全等操作符
   - 不写break 会从第一个匹配为true的地方向下执行

### 函数
   - `function functionName(arg0, arg1, ..., argN){}`
   - 函数中遇到return 会停止执行
   - 函数的最佳实践是要么有返回值，要么没有返回值