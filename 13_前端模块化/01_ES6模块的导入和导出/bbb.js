//1.第一种导入方式
import {flag,sum,Person} from "./aaa.js";

if (flag) {
  console.log(sum(10, 20));
  new Person().run();
}

//2.导入默认值的导出的数据(只能导入一个)
import show from './aaa.js';

console.log(show);

//3.将导出的东西全部导入
import * as aaa from "./aaa.js";

import {student} from "./ccc.js";

console.log(student);