var J=Object.defineProperty,Y=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var P=(t,n,r)=>n in t?J(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,v=(t,n)=>{for(var r in n||(n={}))K.call(n,r)&&P(t,r,n[r]);if($)for(var r of $(n))_.call(n,r)&&P(t,r,n[r]);return t},j=(t,n)=>Y(t,q(n));import{j as I,r as m,u as T,R as D,a as W,b as Q}from"./vendor.b898bcdb.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}};U();const b=new Set;function A(t){b.add(t),b.forEach(n=>{let r=n*t;if(!b.has(r))for(;r<2e3;)b.add(r),r=r*t})}A(2);A(3);A(5);const M=[];b.forEach(t=>{const n=Math.floor(t/10);M[n]||(M[n]=[]),M[n].push(t)});M.forEach((t,n)=>{M[n].sort((r,l)=>r-l)});const o=I.exports.jsx,d=I.exports.jsxs,F=I.exports.Fragment,B=150,C=t=>{const{horizontal:n,color:r}=t;return o("div",{style:{position:"absolute",transform:`translate${n?"Y":"X"}(-50%)`,[n?"bottom":"left"]:"50%",[n?"right":"bottom"]:-B/2,[n?"height":"width"]:"2px",[n?"width":"height"]:B,backgroundColor:r,zIndex:2}})},V=t=>{var c;const[n,r]=m.exports.useState(!1),{estimations:l,data:e,setEstimation:i}=t,s=(c=l[e.i])==null?void 0:c[e.j],g=s?s/parseFloat(e.number):null,[h=6,L=5,w=4,N=3]=t.gridDimensions;return d("td",{style:{position:"relative"},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:`row${e.i} column${e.j} data${e.i}-${e.j}`,onClick:()=>i(j(v({},e),{estimation:s?String(s):""})),children:[t.gridLines&&e.i<w&&(e.j%4==0&&o(C,{color:"#060"})||e.j%2==0&&o(C,{color:"#404040"})),t.gridLines&&e.j<h-1&&(e.i%4==0&&o(C,{color:"#060",horizontal:!0})||e.i%2==0&&o(C,{color:"#404040",horizontal:!0})),d("span",{style:{zIndex:4,position:"relative"},children:[e.number,s&&g?d(F,{children:[o("br",{}),o("span",{style:{marginLeft:8,fontSize:12},children:s}),o("span",{style:{marginLeft:8,fontSize:12},children:z(g)})]}):null]})]})},Z=t=>{const n=T(t.open,{from:{opacity:0},enter:{opacity:.5},leave:{opacity:0}}),r=T(t.open,{from:{opacity:0,top:-1e3},enter:{opacity:1,top:50},leave:{opacity:0,top:-1e3}}),l=document.querySelector("#modalRoot");return l?D.createPortal(d(F,{children:[n((e,i)=>i?o(W.div,{style:j(v({},e),{position:"fixed",top:"0px",left:"0px",width:"100vw",height:"100vh",backgroundColor:"black",zIndex:"100"}),onClick:t.close}):null),r((e,i)=>i?d(W.div,{className:"modal",style:j(v({zIndex:"100",position:"fixed"},e),{maxWidth:"80vw",minWidth:"min(80vw, 500px)",margin:"auto",minHeight:"240px",left:"50vw",transform:"translateX(-50%)",borderRadius:"8px"}),children:[t.title&&d("div",{style:{display:"flex",height:80,padding:28,borderBottom:"solid grey 1px",justifyContent:"space-between",alignItems:"center"},children:[o("h1",{children:t.title}),o("button",{style:{fontSize:24},onClick:t.close,children:"\xD7"})]}),t.children]}):null)]}),l):"failed to find modalRoot"};var X={"4":{"4":1300},"-1":{"-1":.17},"-2":{"0":.11,"-4":.007}};const z=t=>{const n=""+parseFloat(String(t)).toPrecision(12);if(n.length<6)return n;const r=n.indexOf("0000"),e=n.slice(0,r).slice(0,5);return e.endsWith(".")?e.slice(0,-1):e},ee=t=>{if(t>5||t<=0)return"#000";const n=Math.abs(t-1)*12+.2,r=Math.max(0,Math.min(1,n)),l=[50,255,50],e=[255,50,50],i=l.map((g,h)=>g*(1-r)+r*e[h]),s=t===1?l:i;return`rgba(${s[0]}, ${s[1]}, ${s[2]}, 0.25)`};function te(){const[t,n]=m.exports.useState(10),[r,l]=m.exports.useState(2),[e,i]=m.exports.useState(3),[s,g]=m.exports.useState([6,5,4,3]),[h,L]=m.exports.useState(!0),[w,N]=m.exports.useState(!1),[c,S]=m.exports.useState(),[p,E]=m.exports.useState(()=>{const a=localStorage.getItem("estimations");return a?JSON.parse(a):X});m.exports.useEffect(()=>{localStorage.setItem("estimations",JSON.stringify(p))});const[G=6,R=5,O=4,H=3]=s,k=[];for(let a=0;a<O+H-1;a++){k[a]=[];for(let u=0;u<G+R-1;u++){const y=O-1-a,f=u-R+1,x=Math.pow(e,y)*Math.pow(r,f);k[a][u]={number:x.toString(t).slice(0,10),i:y,j:f}}}return d("div",{className:"App",children:[o("table",{style:{width:"100vw",textAlign:"center",overflow:"hidden"},children:o("tbody",{children:k.map((a,u,y)=>o("tr",{children:a.map((f,x,re)=>o(V,{data:f,estimations:p,setEstimation:S,gridDimensions:s,gridLines:w},x))},u))})}),o(Z,{open:!!c,close:()=>S(void 0),children:d("div",{style:{paddingLeft:"24px"},children:[o("h2",{children:"Add estimation"}),"Estimate ",c==null?void 0:c.number," as"," ",o("input",{type:"text",autoFocus:!0,value:(c==null?void 0:c.estimation)||"",onChange:a=>c&&S(j(v({},c),{estimation:a.target.value})),onKeyDown:a=>{if(a.key!=="Enter"||!c)return;S(null);const{i:u,j:y,estimation:f}=c,x=v({},p);x[u]=p[u]?v({},p[u]):[],x[u][y]=parseFloat(f),E(x)}})]})}),o("br",{}),d("div",{className:"wrapper",children:[d("div",{className:"controls",children:[o("div",{className:"control",style:{marginRight:8},onClick:()=>E({}),children:"Clear"}),o("div",{className:"control",onClick:()=>E(X),children:"Reset"}),d("div",{children:[o("input",{id:"gridLines",type:"checkbox",checked:w,onChange:a=>N(u=>!u)}),o("label",{style:{verticalAlign:"top",textAlign:"left",marginLeft:8,marginTop:8},htmlFor:"gridLines",children:"Grid lines"})]}),d("div",{children:[o("input",{id:"percentage",type:"checkbox",checked:h,onChange:a=>L(u=>!u)}),o("label",{style:{verticalAlign:"top",textAlign:"left",marginLeft:8,marginTop:8},htmlFor:"percentage",children:"Percentage error"})]}),d("div",{children:[o("label",{children:"Table widths:"}),o("input",{type:"text",value:s.join(" "),onChange:a=>{const y=a.target.value.split(" ");g(y.flatMap(f=>f===""?[void 0]:[parseInt(f)]))}})]}),d("div",{children:[o("label",{children:"X-axis:"}),o("input",{type:"text",value:r,onChange:a=>l(parseInt(a.target.value))})]}),d("div",{children:[o("label",{children:"Y-axis:"}),o("input",{type:"text",value:e,onChange:a=>i(parseInt(a.target.value))})]}),d("div",{children:[o("label",{children:"Base:"}),o("input",{type:"text",value:t,onChange:a=>n(parseInt(a.target.value))})]})]}),o(oe,{estimations:p,percentageError:h})]})]})}const ne=t=>{let n=-5;for(;n<50;){if(t*Math.pow(10,n)>1)return n;n+=1}return console.error("uh oh",t),t},oe=t=>{const n={};for(let r in t.estimations){const l=parseInt(r),e=t.estimations[l];for(let i in e){const s=parseInt(i),g=Math.pow(2,s)*Math.pow(3,l),h=e[s];if(h===null)continue;const L=z(h/g),w={estimation:String(h),error:L},N=Math.pow(10,ne(h)),c=S=>{const p=h*S*N;Math.abs(p-Math.round(p))>1e-4||(n[Math.round(p)]=w)};c(1),b.forEach(c)}}return o("div",{className:"summary",children:new Array(100).fill(null).map((r,l)=>{const e=l+1,i=n[e],s=i?(parseFloat(i.error)-1)*100:null;return o("div",{style:{display:"flex",justifyContent:"space-around"},children:o("span",{className:"summaryNumber",style:{backgroundColor:ee(parseFloat(i==null?void 0:i.error)||(b.has(e)||e===1?1:0))},children:i&&s?d(F,{children:[o("span",{style:{marginLeft:8}}),o("span",{children:i==null?void 0:i.estimation}),o("span",{style:{marginLeft:8}}),o("span",{children:t.percentageError?z(s)+"%":i==null?void 0:i.error.slice(0,7)})]}):o("span",{children:e})},e)},e)})})};D.render(o(Q.StrictMode,{children:o(te,{})}),document.getElementById("root"));