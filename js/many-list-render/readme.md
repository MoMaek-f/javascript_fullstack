document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);
//先看到 red  再看到blue  说明在settimeOut 之前会发生一次样式计算 浏览器渲染它