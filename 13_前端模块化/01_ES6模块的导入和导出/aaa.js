/*let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

class Person {
  run() {
    console.log('啦啦啦');
  }
}

//1.第一种导出方式
export {flag, sum, Person};*/

//2.第二种导出方式
export let flag = true;

export function sum(num1, num2) {
  return num1 + num2;
}

export class Person {
  run() {
    console.log('啦啦啦');
  }
}

//3.以默认值的方式导出，这样导入者可以自己对变量进行命名（注意：这样的导出的变量，方法或函数只能是一个）
const message= '哒哒哒哒';
export default message;