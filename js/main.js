

writeCode('', result, ()=>{  // writeCode call the function
    createPaper(()=>{
        writeCode(result, result2, ()=>{
            writeMarkDown(md)
        })
    })
})
// 把 code 写到 #code 和 style 标签里
function writeCode (prefix, code, fn) {
    let domCode = document.querySelector('#code')
    document.innerHTML = prefix || ''
    let n = 0
    var id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight // 解决代码看不见的问题
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    },10)
}
// 创建一张白纸
function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
// 写入 markdown 语法的 html
function writeMarkDown(markdown, fn){
    let domPaper = document.querySelector('#paper > .content')
    let div = document.createElement('div')
    div.className = 'content'
    let n = 0
    var id = setInterval(()=>{
        n += 1
        div.innerHTML = marked(markdown).substring(0, n)
        domPaper.replaceWith(div)
        domPaper.scrollTop = domPaper.scrollHeight // 解决代码看不见的问题
        if (n >= markdown.length+1000) {
            window.clearInterval(id)
            fn.call()
        }
    },10)
}


