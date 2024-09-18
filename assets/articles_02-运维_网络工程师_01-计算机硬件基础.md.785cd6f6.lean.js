import{_ as t,c as n,a as s,b as a,t as i,d as e,o as r}from"./app.625f3316.js";const m="/assets/1.1_进制转换例子.ae70b891.jpg",p="/assets/1.2_进制转换例子.ce00678f.jpg",c="/assets/1.3_逻辑运算.2228e701.png",d="/assets/1.4_计算机结构.3049ddb4.png",h="/assets/1.5_寻址方式.b813cc7b.png",o="/assets/1.6_流水线的计算.ea5ed520.png",u="/assets/1.7_存储体系结构.48e505f7.png",_="/assets/1.8_主存储器的基础_组成示意.9bf6d83d.png",g="/assets/1.9_磁盘对比.e580a04e.png",b="/assets/2.1_计算机软件.9abbe3a8.png",f="/assets/2.2_进程的状态.9ca6820b.png",x="/assets/2.3_银行家算法例子.7dc64fb5.png",$=JSON.parse('{"title":"计算机硬件基础","description":"","frontmatter":{"title":"计算机硬件基础"},"headers":[{"level":2,"title":"数据的表示方法","slug":"数据的表示方法","link":"#数据的表示方法","children":[{"level":3,"title":"R进制的表示（R可为二、八、十、十六）","slug":"r进制的表示-r可为二、八、十、十六","link":"#r进制的表示-r可为二、八、十、十六","children":[]},{"level":3,"title":"计算机中的原码、反码和补码","slug":"计算机中的原码、反码和补码","link":"#计算机中的原码、反码和补码","children":[]}]},{"level":2,"title":"逻辑运算","slug":"逻辑运算","link":"#逻辑运算","children":[{"level":3,"title":"计算机系统的组成与体系结构","slug":"计算机系统的组成与体系结构","link":"#计算机系统的组成与体系结构","children":[]}]},{"level":2,"title":"计算机的结构","slug":"计算机的结构","link":"#计算机的结构","children":[]},{"level":2,"title":"指令系统的基础—寻址方式（寻找操作数）","slug":"指令系统的基础—寻址方式-寻找操作数","link":"#指令系统的基础—寻址方式-寻找操作数","children":[]},{"level":2,"title":"CISC与RISC","slug":"cisc与risc","link":"#cisc与risc","children":[]},{"level":2,"title":"流水线","slug":"流水线","link":"#流水线","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"存储系统","slug":"存储系统","link":"#存储系统","children":[]}]},{"level":2,"title":"存储系统结构","slug":"存储系统结构","link":"#存储系统结构","children":[]},{"level":2,"title":"存储系统的存取方式","slug":"存储系统的存取方式","link":"#存储系统的存取方式","children":[]},{"level":2,"title":"主存储器基础—组成","slug":"主存储器基础—组成","link":"#主存储器基础—组成","children":[]},{"level":2,"title":"Cache","slug":"cache","link":"#cache","children":[]},{"level":2,"title":"磁盘","slug":"磁盘","link":"#磁盘","children":[]},{"level":2,"title":"RAID 技术","slug":"raid-技术","link":"#raid-技术","children":[]},{"level":2,"title":"RAID 2.0优势","slug":"raid-2-0优势","link":"#raid-2-0优势","children":[{"level":3,"title":"系统的可靠性","slug":"系统的可靠性","link":"#系统的可靠性","children":[]}]},{"level":2,"title":"串联系统","slug":"串联系统","link":"#串联系统","children":[]},{"level":2,"title":"并联系统","slug":"并联系统","link":"#并联系统","children":[{"level":3,"title":"操作系统","slug":"操作系统","link":"#操作系统","children":[]}]},{"level":2,"title":"操作系统概述","slug":"操作系统概述","link":"#操作系统概述","children":[]},{"level":2,"title":"进程管理","slug":"进程管理","link":"#进程管理","children":[{"level":3,"title":"进程的状态","slug":"进程的状态","link":"#进程的状态","children":[]},{"level":3,"title":"死锁问题","slug":"死锁问题","link":"#死锁问题","children":[]},{"level":3,"title":"银行家算法—分配资源的原则","slug":"银行家算法—分配资源的原则","link":"#银行家算法—分配资源的原则","children":[]},{"level":3,"title":"进程的互斥和同步","slug":"进程的互斥和同步","link":"#进程的互斥和同步","children":[]},{"level":3,"title":"PV操作-用来解决互斥和同步的问题","slug":"pv操作-用来解决互斥和同步的问题","link":"#pv操作-用来解决互斥和同步的问题","children":[]}]},{"level":2,"title":"存储管理","slug":"存储管理","link":"#存储管理","children":[{"level":3,"title":"页式存储","slug":"页式存储","link":"#页式存储","children":[]},{"level":3,"title":"页面置换算法","slug":"页面置换算法","link":"#页面置换算法","children":[]}]},{"level":2,"title":"文件管理—树形目录结构","slug":"文件管理—树形目录结构","link":"#文件管理—树形目录结构","children":[]},{"level":2,"title":"设备管理","slug":"设备管理","link":"#设备管理","children":[]}],"relativePath":"articles/02-运维/网络工程师/01-计算机硬件基础.md","lastUpdated":null}'),y={name:"articles/02-运维/网络工程师/01-计算机硬件基础.md"},z={id:"frontmatter-title",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=e("",47),R=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"t"),s("mn",null,"3"),s("mo",null,"="),s("mi",null,"h"),s("mo",null,"×"),s("mi",null,"t"),s("mn",null,"1"),s("mo",null,"+"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"h"),s("mo",null,")"),s("mo",null,"×"),s("mi",null,"t"),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"t3 = h \\times t1 + (1 - h) \\times t2 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord mathit"},"t"),s("span",{class:"mord mathrm"},"3"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"h"),s("span",{class:"mbin"},"×"),s("span",{class:"mord mathit"},"t"),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"+"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord mathit"},"h"),s("span",{class:"mclose"},")"),s("span",{class:"mbin"},"×"),s("span",{class:"mord mathit"},"t"),s("span",{class:"mord mathrm"},"2")])])])])],-1),A=e("",13),S=s("p",null,[a("设系统各个子系统的可靠性分别用R_1、R_2，...,R_n表示，则系统的可靠性"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mo",null,"="),s("msub",null,[s("mi",null,"R"),s("mn",null,"1")]),s("mo",null,"×"),s("msub",null,[s("mi",null,"R"),s("mn",null,"2")]),s("mo",null,"×"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"×"),s("msub",null,[s("mi",null,"R"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"R=R_1\\times R_2\\times...\\times R_n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.68333em"}}),s("span",{class:"strut bottom",style:{height:"0.83333em","vertical-align":"-0.15em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mrel"},"="),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"×"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"×"),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mbin"},"×"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])])],-1),C=s("p",null,[a("如果系统的各个子系统的失效率分别用"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"λ"),s("mn",null,"1")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"λ"),s("mn",null,"2")]),s("mo",{separator:"true"},","),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("msub",null,[s("mi",null,"λ"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"\\lambda_1,\\lambda_2,...\\lambda_n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])]),a("来表示，则系统的失效率为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"λ"),s("mo",null,"="),s("msub",null,[s("mi",null,"λ"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"λ"),s("mn",null,"2")]),s("mo",null,"+"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("msub",null,[s("mi",null,"λ"),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"\\lambda=\\lambda_1+\\lambda_2+...\\lambda_n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.84444em","vertical-align":"-0.15em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"mrel"},"="),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"λ"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])])],-1),I=s("h2",{id:"并联系统",tabindex:"-1"},[a("并联系统 "),s("a",{class:"header-anchor",href:"#并联系统","aria-hidden":"true"},"#")],-1),T=s("p",null,"假如一个系统由n个子系统组成，只要有一个子系统能够正常工作，系统就能正常工作，如下图所示。",-1),D=s("p",null,[s("img",{src:"https://img-blog.csdnimg.cn/20190427170750483.png",alt:"并联系统"})],-1),B=s("p",null,"设系统各个子系统的可靠性分别用R_1、R_2，...,R_n表示，则系统的可靠性",-1),P=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"R"),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"−"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"R"),s("mn",null,"1")]),s("mo",null,")"),s("mo",null,"×"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"R"),s("mn",null,"2")]),s("mo",null,")"),s("mo",null,"×"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mo",null,"×"),s("mo",null,"("),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"R"),s("mi",null,"n")]),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"R=1-(1-R_1)\\times(1-R_2)\\times...\\times(1-R_n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mclose"},")"),s("span",{class:"mbin"},"×"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mclose"},")"),s("span",{class:"mbin"},"×"),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"."),s("span",{class:"mbin"},"×"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mbin"},"−"),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.00773em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"n")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mclose"},")")])])])],-1),V=e("",32);function F(l,w,O,N,U,E){return r(),n("div",null,[s("h1",z,[a(i(l.$frontmatter.title)+" ",1),v]),k,R,A,S,C,I,T,D,B,P,V])}const W=t(y,[["render",F]]);export{$ as __pageData,W as default};
