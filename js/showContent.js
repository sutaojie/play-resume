var result = `
    /*
    * 面试官你好，我是 苏赵勇
    * 我将以动画的形式来介绍自己
    * 只用文字介绍太单调了...
    * 我就用代码来介绍吧
    * 首先准备一些样式
    */
    
    * {
        transition: all 1s;
    }
    html {
        background: rgb(63, 82, 99);
        font-size: 16px;
    }
    html {
        color: white;
    }
    .token.selector,
    .token.property,
    .token.function {
        color:white;
    }
    #code,
    #paper {
        width: 100%;
        padding: 16px;
        font-size: 14px;
        font-family: monospace;
        background: rgb(48, 48, 48);
        overflow: auto;
        border: 1px solid #ccc;
        box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
        white-space: pre-wrap;
        outline: 0;  
    }
    
    /* 我需要一点代码高亮 */
    
    .token.selector {
        color: #690;
    }
    .token.property {
        color: #258ab5;
    }
    .token.function {
        color: #DD4A68;
    }
    
    
    /* 我来介绍以下我自己吧 */
    /* 我需要一张白纸 */
    body {
        perspective: 1000px;
    }
    #code {
        position:fixed;
        top:20px;
        right:0;
        width: 50%;
        
        transform: rotateY(-10deg);
        transform-origin: right;
    }
    `
var result2 = `
    #paper {
        width: 50%;
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        left:0;
        top:20px;
    }  
    #paper {
        transform: rotateY(10deg);
        transform-origin: left;
    }
    #paper > .content {
        width:100%;
        height:100%;
        background: white;
        color: black;
        padding-left:20px;
        overflow:auto;
        
    }
    
    /*
    * 接下来使用 markdown 语法写 html
    *
    * 这就是我的会动的简历
    * 谢谢观看
    */
    
    `
var md = `
# 自我介绍

我叫 苏赵勇
1995 年 8 月 出生
安徽财贸学院学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS jQuery 

# 项目介绍

    1. 网易云播放器 - a Netease cloud player
        基于 jQuery 技术栈，以 LeanCloud 和 QiNiu 为数据库，完成一个移动端网易云播放器
    2. 小黄人 - code a Minion for you
        基于 jQuery，动态向 style 标签添加样式以及 pre 标签添加文本，模拟css绘制小黄人的过程
    3. 会动的简历 - make your resume active
        基于原生 JavaScript 和 CCS 3，动态向 style 标签添加样式以及 pre 标签添加文本，
        利用 prism.js 实现代码高亮,使简历生动起来。
    4. smart 在线画板 - Draw anything your want
        基于原生 JavaScript 与 canvas 实现的在线画板
    
# 联系方式

QQ 1522006120
Email sutaojie@163.com
手机 17682488600
`