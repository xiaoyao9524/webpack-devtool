import fns from './fn';
console.log("about.js 加载成功");
let test = document.getElementById("btn");
test.addEventListener("click", ev => {
    alert('im about.js');
});

setTimeout(() => {
    console.log("about加载成功...");
}, 20)
fns.fn();