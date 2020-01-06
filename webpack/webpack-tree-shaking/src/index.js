import { add, reduce } from "./math.js";
console.log(add(1,2));

// import { includes } from "lodash";
//babel-plugin-import element-ui
//将上述语法转为以下形式
import includes from 'lodash/includes';
console.log(add(1,2));
console.log(reduce(3,2));
console.log(includes([1,2],1));