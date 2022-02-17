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