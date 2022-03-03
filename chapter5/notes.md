# chapter5 基本数据类型

### Date
  - `Date.now()` 可以返回当前时间戳
  - 一些获取时间到常见方法可以访问Date.js文件

### RegExp
  - js 中正则表达式定义的两种形式:
    - 字面量定义: `const reg = /cat/ig`
    - 构造函数定义: `const reg = new RegExp('cat', 'ig')`
  - 六大表示匹配模式的字符:

    <table>
      <tr>
        <td>i</td>
        <td>忽略大小写</td>
      </tr>
      <tr>
        <td>g</td>
        <td>全局匹配找出所有匹配项</td>
      </tr>
      <tr>
        <td>u</td>
        <td>开启unicode编码匹配</td>
      </tr>
      <tr>
        <td>m</td>
        <td>多行匹配</td>
      </tr>
      <tr>
        <td>y</td>
        <td>粘附模式表示只查找lastIndex开始及之后的字符串</td>
      </tr>
      <tr>
        <td>s</td>
        <td>dotAll模式表示元字符</td>
      </tr>
    </table>
  - 元字符转义
    - 元字符具有特殊功能，要想匹配本身必须转义。
    - 元字符有: `( [ { \ ^ $ | ) ] } ? * + .`
    - 字面量转义: `const reg = /\./`
    - 构造函数转义: `const reg = new RegExp('\\.')`
  - 属性
    - `global` 判断有没有g标识符
    - `ignoreCase` 判断有没有i标识符
    - `unicode` 判断有没有u标识符
    - `sticky` 有没有y标识符
    - `lastIndex` 下一次搜索的开始位置
    - `multiline` 有没有m标识符
    - `dotAll` 有没有s标识符
    - `source` 就是正则表达式的字面量形式
    - `flags` 标识符
  - 方法
    - exec
      - 返回起始位置`index` 
      - 要匹配的字符串`input`
      - 有匹配到了是一个数组，没有匹配到是null
    - test
      - 有匹配值就是true 没有匹配值就是false
  - RegExp 构造函数属性

    <table>
      <thead>
        <th>全名</td>
        <th>简写</th>
        <th>说明</th>
      </thead>
      <tr>
        <td>input</td>
        <td>$_</td>
        <td>最后搜索的字符串</td>
      </tr>
      <tr>
        <td>lastMatch</td>
        <td>$&</td>
        <td>最后匹配的文本</td>
      </tr>
      <tr>
        <td>lastParen</td>
        <td>$+</td>
        <td>最后匹配的捕获组</td>
      </tr>
      <tr>
        <td>leftContext</td>
        <td>$`</td>
        <td>input 中出现在lastMatch前边的文本</td>
      </tr>
      <tr>
        <td>rightContext</td>
        <td>$'</td>
        <td>input 中出现在lastMatch后边的文本</td>
      </tr>
    </table>

    - 可以使用$1-9 来顺时针表示捕获组

### 原石值包装类型
  - 原始值类型有:
    - String
    - Boolean
    - Number
  - Boolean
    - 理解原始值和BooleanObject 的区别很重要
    - 不要去使用BooleanObject
  - Number
    - 不建议使用构造函数的方式进行初始化
    - 几个常用方法:
      - toString 用来把数字转换成字符串
      - toFixed 用来控制保存几位小数点
      - toExponential 用来格式化成科学计数法
      - toPrecision 这个会根据传入的长度来自动调用上边两个方法中的其中一个
      - Number.isSafeInteger 判断是不是安全整数
      - Number.isInteger 这个可以判断是不是整数
  - String
    - JavaScript 字符串使用 ucs-2 和 UTF-16 编码
    - 通常使用16位码元 表示一个字符
    - 每个String 都有一个length属性 表示有几个16位码元
    - 常用方法有
      - charAt 根据索引获取字符
      - charCodeAt 获取字符编码
      - fromCharCode 把编码转换成字符
      - codePointAt 用来解决32位编码的问题
      - fromCodePoint 把码点转化为字符串
    - 有一些字符可能有多种编码形式
      - 这个时候可能会出现明明长得一样的字符但是因为编码不同所以不全等
      - 使用normalize 可以解决这个问题
    - 操作字符串的方法:
      - concat: 把参数拼接返回不影响源字符串
      - substring
        - 第一个参数是开始，第二个是结束，截取不包含结束 
        - 对负值的处理
          - 参数是负值则变为0
        - 不影响源字符串
      - substr
        - 第一个参数是开始，第二个是长度.
        - 对负值的处理
          - 第一个参数如果是负值则是字符长度加上负值，第二个参数是负值则变为0
        - 不影响源字符串
      - slice
        - 第一个参数是开始，第二个是结束，截取不包含结束 
        - 对负值的处理
          - 参数如果是负值则是字符长度加上负值.
        - 不影响源字符串
    - 字符串位置的方法
      - indexOf
        - 从左到右找，找到了就返回位置
      - lastIndexOf
        - 从右到左找，找到了就返回位置
      - 两个方法共同的特性
        - 找不到就返回-1
        - 第二个参数定义开始寻找的位置
    - 字符串包含方法
      - startsWith()
        - 从索引为零的地方开始找
      - endsWith()
        - 从(string.length - substring.length) 的位置开始找
      - includes()
        - 从全局查找
      - 关于这三个方法的第二个参数的含义
        - startsWith and endsWith 是一样的都是从参数索引开始向后查找前边的不管
        - endsWith 参数表示这个就好像是字符串的长度了
    - trim() 方法
      - 去除两边空格不影响源字符串
      - trimStart() and trimEnd()
    - padStart() and padEnd()
      - padStart 第一个参数是字符串的长度，如果真实长度小于这个参数就根据第二个参数从开头进行补全
      - 如果小于真实长度就返回原字符串
      - 不改变原字符串
    - 字符串迭代与结构
      - 字符原型中暴漏出Iterator 使得字符串可以结构，以及被for of 循环