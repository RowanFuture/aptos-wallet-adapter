(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{930:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(1856)}])},1856:function(e,t,l){"use strict";l.r(t),l.d(t,{DEVNET_NODE_URL:function(){return d},default:function(){return x}});var n=l(7458),s=l(234),r=l(3341),a=l(2983);function o(e){let{text:t}=e;return(0,n.jsxs)("div",{className:"bg-teal-100 border border-teal-400 text-teal-900 px-4 py-3 rounded relative",role:"alert",children:[(0,n.jsx)("span",{className:"block sm:inline break-all right-3",children:t}),(0,n.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,n.jsxs)("svg",{className:"fill-current h-6 w-6 text-teal-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,n.jsx)("title",{children:"Close"}),(0,n.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}function i(e){let{text:t}=e;return(0,n.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,n.jsx)("span",{className:"block sm:inline break-all",children:t}),(0,n.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,n.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,n.jsx)("title",{children:"Close"}),(0,n.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})}let d="https://fullnode.devnet.aptoslabs.com/v1",c=new s.gK(d,{WITH_CREDENTIALS:!1});function x(){let{connect:e,disconnect:t,account:l,network:s,wallet:d,wallets:x,signAndSubmitTransaction:h,signTransaction:p,signMessage:u}=(0,r.O)(),[b,m]=(0,a.useState)(""),[j,g]=(0,a.useState)(""),y=t=>{e(t)},w=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==l?void 0:l.address,1]};try{let t=await h(e);await c.waitForTransaction((null==t?void 0:t.hash)||""),m("https://explorer.devnet.aptos.dev/txn/".concat(null==t?void 0:t.hash))}catch(n){console.log("error",n),g(n)}},N=async()=>{let e={type:"entry_function_payload",function:"0x1::coin::transfer",type_arguments:["0x1::aptos_coin::AptosCoin"],arguments:[null==l?void 0:l.address,1]};try{let t=await p(e);console.log("response",t)}catch(n){console.log("error",n),g(n)}},f=async()=>{try{let e=await u({message:"Hello from Aptos Wallet Adapter",nonce:"random_string"});m(JSON.stringify(e)),console.log("response",e)}catch(t){console.log("error",t),g(t)}};return(0,n.jsxs)("div",{children:[b.length>0&&(0,n.jsx)(o,{text:b}),j.length>0&&(0,n.jsx)(i,{text:j}),(0,n.jsx)("table",{className:"table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 w-1/4",children:(0,n.jsx)("h3",{children:"Connect a Wallet"})}),(0,n.jsx)("td",{className:"px-8 py-4 w-3/4",children:(0,n.jsx)("div",{children:null==x?void 0:x.map(e=>(0,n.jsx)("button",{className:"bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ".concat("Installed"!==e.readyState?"opacity-50 cursor-not-allowed":"hover:bg-blue-700"),disabled:"Installed"!==e.readyState,onClick:()=>y(e.name),children:e.name},e.name))})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,n.jsx)("h3",{children:"Actions"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t break-all w-3/4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:t,children:"Disconnect"}),(0,n.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:w,children:"Sign and submit transaction"}),(0,n.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:N,children:"Sign transaction"}),(0,n.jsx)("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4",onClick:f,children:"Sign Message"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t w-1/4",children:(0,n.jsx)("h3",{children:"Wallet Name"})}),(0,n.jsxs)("td",{className:"px-8 py-4 border-t w-3/4",children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("img",{style:{width:"25px",marginRight:"20px"},src:null==d?void 0:d.icon}),JSON.stringify(null==d?void 0:d.name)]}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{target:"_blank",href:null==d?void 0:d.url,children:null==d?void 0:d.url})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("h3",{children:"Account"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t break-all",children:(0,n.jsx)("div",{children:JSON.stringify(l)})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("h3",{children:"Network"})}),(0,n.jsx)("td",{className:"px-8 py-4 border-t",children:(0,n.jsx)("div",{children:JSON.stringify(s)})})]})]})})]})}},3938:function(){}},function(e){e.O(0,[680,940,774,888,179],function(){return e(e.s=930)}),_N_E=e.O()}]);