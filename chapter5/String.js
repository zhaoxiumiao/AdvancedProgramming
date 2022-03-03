// let s1 = new String('some text')
// s1.color = 'red'
// console.log(s1.color); // red

// let s1 = 'some text'
// s1.color = 'red'
// console.log(s1.color); // undefined

// 16位
// let message = 'abcde'

// console.log(message.length); // 5
// console.log(message.charAt(2));// c
// console.log(message.charCodeAt(2));// 99 
// console.log(String.fromCharCode(97, 98, 99, 100, 101)); // abcde

// 32位
// let message = 'ab😊de'

// console.log(message.length); // 6
// console.log(message.charAt(2)); // <?>
// console.log(message.charCodeAt(2)); // 55357
// console.log(message.charCodeAt(3)); // 56842
// console.log([...message]);
// const arr = [...message].map(item => item.codePointAt())
// console.log(arr);
// console.log(String.fromCodePoint(128522));// 😊

// let a1 = String.fromCharCode(0x00c5),
//     a2 = String.fromCharCode(0x212b),
//     a3 = String.fromCharCode(0x0041, 0x030a)

// 使用 normalize 进行规范化
// console.log(a1 === a2); // false
// console.log(a1.normalize("NFC") === a2.normalize("NFC")); // true
// console.log(a1, a2, a3);

// 操作方法
// let StringValue = 'hello '
// StringValue = StringValue.concat('world', '!')

// console.log(StringValue);
// console.log(StringValue.slice(3, 7));
// console.log(StringValue.substring(3, 7));
// console.log(StringValue.substr(3, 7));
// console.log(StringValue.slice(3, -4));
// console.log(StringValue.substring(3, -4));
// console.log(StringValue.substr(3, -4));

// 字符串位置的方法
// let stringValue = 'hello world'

// console.log(stringValue.indexOf('o')); // 4
// console.log(stringValue.lastIndexOf('o')); // 6

// stringValue = 'Lorem ipsum dolor sit amet consectetur a dipisicing elit'
// let positions = new Array()
// let ops = stringValue.lastIndexOf('e')

// while(ops > -1){
//   positions.push(ops)
//   ops = stringValue.lastIndexOf('e', ops - 1)
// }

// console.log(positions);

// let message = 'foobarbaz'

// console.log(message.startsWith('foo')); // true
// console.log(message.startsWith('bar')) // false
// console.log(message.endsWith('baz')); // true
// console.log(message.endsWith('bar')) // false
// console.log(message.includes('bar')) // true
// console.log(message.includes('qux')) // false

// console.log(message.startsWith('foo', 1)); // false
// console.log(message.startsWith('bar', 3)); // true

// console.log(message.includes('foo', 3)); // false
// console.log(message.includes('bar', 3)); // true

// console.log(message.endsWith('bar', 6)); // true

// 去前后空格
// let stringValue = ' hello world  '
// let trimmedStringValue = stringValue.trim()

// console.log(trimmedStringValue);
// console.log(stringValue)
// console.log(stringValue.trimEnd());
// console.log(stringValue.trimStart());

// repeat 复制

// stringValue = 'na '

// console.log(stringValue.repeat(16) + 'batman');

// padStart() and padEnd()

// let stringValue = 'foo'

// console.log(stringValue.padStart(6));
// console.log(stringValue.padStart(6, '.'));
// console.log(stringValue.padEnd(6) + '1');
// console.log(stringValue.padEnd(6, 'bar'));
// console.log(stringValue);

// let message = 'abc'

// let stringIterator = message[Symbol.iterator]()

// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());
// console.log(stringIterator.next());

// message = 'abcde'

// for (let c of message){
//   console.log(c);
// }

// console.log([...message]);

