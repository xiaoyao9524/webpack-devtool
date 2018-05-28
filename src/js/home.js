import fns from './fn';
console.log("home.js 加载成功");
let btn = document.getElementById("btn");

btn.addEventListener("click", ev => {
    alert('im home.js!');
});

setTimeout(() => {
    console.log("home加载成功...");
}, 20);
// console.log(fns);
fns.fn(); // 暂未做"Tree Shaking"（移除 JavaScript 上下文中的未引用代码）；
