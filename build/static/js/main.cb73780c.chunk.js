(this.webpackJsonprupi=this.webpackJsonprupi||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(9),n(10),n(2)),u=(n(11),n(0));var o=Object(c.memo)((function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),r=(n[0],n[1]),a=Object(c.useState)(!1),s=Object(i.a)(a,2),o=s[0],j=s[1],l=Object(c.useState)([]),b=Object(i.a)(l,2),h=b[0],d=b[1];return Object(c.useEffect)((function(){fetch("https://api.quotable.io/random?minLength=10&maxLength=200").then((function(e){return e.json()})).then((function(t){404===t.statusCode&&(t.content="ugh this is way too difficult for a drunk man");var n=function(e){for(var t=(e=e.replace(/[^A-Za-z0-9\s!?]/g,"").toLowerCase()).split(" "),n=[];t.length>0;){for(var c="",r=8*Math.random();r>0&&t.length>0;)(c=t.pop()+" "+c).length>30&&(r=-1),r--;n.push(c)}return n.reverse()}(t.content);e.italics>2&&(n=function(e,t){for(var n=[],c="!?,~-;:\u2014\u2026",r=0;r<e.length;r++)10*Math.random()<t?n.push(e[r]+c.charAt(Math.random()*c.length-1)):n.push(e[r]);return n}(n,e.italics),e.italics>8&&(n=function(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t}(n))),j(!0),d(n)}),(function(e){j(!0),r(e)}))}),[e]),Object(u.jsxs)("div",{className:"poem",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:"https://picsum.photos/600/600?grayscale&random=".concat(e.randomSeed),alt:"some random thing"})}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("h3",{children:e.userInput}),o?h.map((function(t){return 10*Math.random()<e.italics?Object(u.jsx)("i",{children:Object(u.jsx)("p",{children:t})}):Object(u.jsx)("p",{children:t})})):"Loading..."]})]})}));var j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(i.a)(a,2),j=s[0],l=s[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),d=h[0],O=h[1],p=Object(c.useState)(0),f=Object(i.a)(p,2),v=f[0],m=f[1],x=Object(c.useState)(1),g=Object(i.a)(x,2),S=g[0],y=g[1],M=Object(c.useState)(-1),L=Object(i.a)(M,2),w=L[0],k=L[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:["Title:"," ",Object(u.jsx)("input",{value:n,onInput:function(e){return function(e){e.target.value!==n&&r(e.target.value)}(e)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Pretentiousness:"," ",Object(u.jsx)("input",{type:"range",min:"0",max:"10",value:S,onChange:function(e){return function(e){e.target.value!==S&&y(e.target.value)}(e)}})]}),Object(u.jsx)("br",{}),w>-1?"Level: "+function(e){switch(e){default:case"0":case"1":case"2":return"Sensible";case"3":case"4":case"5":return"Silly";case"6":return"Whimsical";case"7":return"Frivolous";case"8":return"Fragrantly Flippant";case"9":return"Preposterously Pretentious";case"10":return"Literally Ludicrous"}}(S)+"\n":null,Object(u.jsx)("input",{type:"button",value:"Generate!",onClick:function(){return(e=!0)!==j&&l(e),O(n),k(S),void m(1025*Math.random());var e}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),j&&(null===d||void 0===d?void 0:d.length)>0?Object(u.jsx)(o,{userInput:d,randomSeed:v,italics:w}):null]})};var l=function(){return Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Rupi Kaur Generator"}),Object(u.jsx)(j,{})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.cb73780c.chunk.js.map