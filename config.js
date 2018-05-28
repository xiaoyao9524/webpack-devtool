module.exports = [
    {
        entryName: "index",
        entryPath: "./src/index.main.js", 
        filename: "index.html", // html文件名
        template: "./src/index.html"// ,// 模板
    },
    {
        entryName: "test",
        entryPath: "./src/test.main.js",
        filename: "test.html", // html文件名
        template: "./src/test.html"// ,// 模板
    }
];

/*
{
    filename: "home.html", // html文件名
    template: "./src/home.html",// 模板
    inject: true,
    chunks: ['home'] // 入口文件(看entry)
}
*/