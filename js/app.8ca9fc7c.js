(function(){"use strict";var e={203:function(e,t,o){var a=o(9963),i=o(6252);function n(e,t,o,n,r,s){const d=(0,i.up)("the-header"),l=(0,i.up)("router-view"),u=(0,i.up)("the-layout");return(0,i.wg)(),(0,i.j4)(u,null,{header:(0,i.w5)((()=>[(0,i.Wm)(d)])),default:(0,i.w5)((()=>[(0,i.Wm)(a.uT,{name:"content"},{default:(0,i.w5)((()=>[(0,i.Wm)(l)])),_:1})])),_:1})}var r=o(3577);const s={id:"components-layout-demo-fixed-sider"},d=(0,i._)("div",{class:"logo"},null,-1),l=(0,i._)("span",{class:"nav-text"},"Home",-1),u=(0,i._)("span",{class:"nav-text"},"About Me",-1),c=(0,i._)("span",{class:"nav-text"},"Experience",-1),p=(0,i._)("span",{class:"nav-text"},"Skills",-1),m=(0,i._)("span",{class:"nav-text"},"Certificates",-1),v=(0,i._)("span",{class:"nav-text"},"Projects",-1),g={id:"a-content-style"};function f(e,t,o,a,n,f){const h=(0,i.up)("home-outlined"),_=(0,i.up)("router-link"),w=(0,i.up)("a-menu-item"),y=(0,i.up)("user-outlined"),b=(0,i.up)("upload-outlined"),k=(0,i.up)("bar-chart-outlined"),I=(0,i.up)("cloud-outlined"),C=(0,i.up)("appstore-outlined"),S=(0,i.up)("a-menu"),W=(0,i.up)("a-layout-sider"),P=(0,i.up)("a-layout-content"),D=(0,i.up)("a-layout-footer"),j=(0,i.up)("a-layout");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(j,{"has-sider":""},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{collapsed:a.collapsed,"onUpdate:collapsed":t[1]||(t[1]=e=>a.collapsed=e),id:"a-layout-sider-style",onMouseover:t[2]||(t[2]=e=>a.setCollapsed(!1)),onMouseleave:t[3]||(t[3]=e=>a.setCollapsed(!0)),style:(0,r.j5)({height:"100vh",position:"fixed",left:0,top:0,bottom:0,borderRadius:"0.2857rem",zIndex:"99"})},{default:(0,i.w5)((()=>[d,(0,i.Wm)(S,{selectedKeys:a.selectedKeys,"onUpdate:selectedKeys":t[0]||(t[0]=e=>a.selectedKeys=e),theme:"dark",mode:"inline"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{key:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Wm)(h),l])),_:1})])),_:1}),(0,i.Wm)(w,{key:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Wm)(y),u])),_:1})])),_:1}),(0,i.Wm)(w,{key:"3"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/experience"},{default:(0,i.w5)((()=>[(0,i.Wm)(b),c])),_:1})])),_:1}),(0,i.Wm)(w,{key:"4"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/skills"},{default:(0,i.w5)((()=>[(0,i.Wm)(k),p])),_:1})])),_:1}),(0,i.Wm)(w,{key:"5"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/certificates"},{default:(0,i.w5)((()=>[(0,i.Wm)(I),m])),_:1})])),_:1}),(0,i.Wm)(w,{key:"6"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{to:"/projects"},{default:(0,i.w5)((()=>[(0,i.Wm)(C),v])),_:1})])),_:1})])),_:1},8,["selectedKeys"])])),_:1},8,["collapsed","style"]),(0,i.Wm)(j,null,{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"header"),(0,i.Wm)(P,{id:"a-layout-content-style"},{default:(0,i.w5)((()=>[(0,i._)("div",g,[(0,i.WI)(e.$slots,"default")])])),_:3}),(0,i.Wm)(D,{id:"a-footer-style"})])),_:3})])),_:3})])}var h=o(4924),_=o(8699),w=o(2202),y=o(8068),b=o(2684),k=o(7991),I=o(2262),C=o(3907),S={components:{UserOutlined:h.Z,HomeOutlined:_.Z,UploadOutlined:w.Z,BarChartOutlined:y.Z,CloudOutlined:b.Z,AppstoreOutlined:k.Z},setup(){const e=(0,C.oR)();let t=(0,I.iH)(!0);const o=e=>t.value=e,a=(0,i.Fl)((()=>e.getters["nav/activeNav"]));return{collapsed:t,selectedKeys:(0,I.iH)(a),setCollapsed:o}}},W=o(3744);const P=(0,W.Z)(S,[["render",f]]);var D=P;const j=e=>((0,i.dD)("data-v-e46183d8"),e=e(),(0,i.Cn)(),e),A={id:"header-style"},U=j((()=>(0,i._)("div",{id:"header-text"},null,-1))),x=[U];function T(e,t){return(0,i.wg)(),(0,i.iD)("header",A,x)}const O={},L=(0,W.Z)(O,[["render",T],["__scopeId","data-v-e46183d8"]]);var E=L,q={components:{TheLayout:D,TheHeader:E}};const F=(0,W.Z)(q,[["render",n]]);var Z=F,R={addProduct(e,t){e.products.push(t)},setProducts(e,t){e.products=t}},M=(o(1703),{async editProduct(e,t){const o=e.rootGetters.token,a={image:t.image,title:t.title,description:t.description,price:t.price},i=await fetch(`https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products/${t.id}.json?auth=`+o,{method:"PATCH",body:JSON.stringify(a)}),n=await i.json();if(console.log(n),!i.ok){const e=new Error(n.message||"[EDIT] Failed to send request.");throw e}return e.dispatch("loadProducts")},async removeProduct(e,t){const o=e.rootGetters.token,a=await fetch(`https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products/${t.id}.json?auth=`+o,{method:"DELETE"}),i=await a.json();if(console.log(i),!a.ok){const e=new Error(i.message||"[DELETE] Failed to send request.");throw e}return e.dispatch("loadProducts")},async addProduct(e,t){const o=e.rootGetters.token,a={image:t.image,title:t.title,description:t.description,price:t.price},i=await fetch("https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth="+o,{method:"POST",body:JSON.stringify(a)}),n=await i.json();if(!i.ok){const e=new Error(n.message||"[ADD] Failed to send request.");throw e}e.commit("addProduct",{...a})},async loadProducts(e){const t=await fetch("https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"),o=await t.json();if(!t.ok){const e=new Error(o.message||"Failed to fetch!");throw e}const a=[];for(const i in o){const e={id:i,image:o[i].image,title:o[i].title,description:o[i].description,price:o[i].price};a.push(e)}e.commit("setProducts",a)}}),H={products(e){return e.products}},N={namespaced:!0,state(){return{products:[]}},mutations:R,actions:M,getters:H},z={addProductToCart(e,t){const o=t,a=e.items.findIndex((e=>e.productId===o.id));if(a>=0)e.items[a].qty++;else{const t={productId:o.id,title:o.title,image:o.image,price:o.price,qty:1};e.items.push(t)}e.qty++,e.total+=o.price},removeProductFromCart(e,t){const o=t.productId,a=e.items.findIndex((e=>e.productId===o)),i=e.items[a];e.items.splice(a,1),e.qty-=i.qty,e.total-=i.price*i.qty}},V={addToCart(e,t){const o=t.id,a=e.rootGetters["products/products"],i=a.find((e=>e.id===o));e.commit("addProductToCart",i)},removeFromCart(e,t){e.commit("removeProductFromCart",t)}},B={products(e){return e.items},totalSum(e){return e.total},quantity(e){return e.qty}},J={namespaced:!0,state(){return{items:[],total:0,qty:0}},mutations:z,actions:V,getters:B},K={setUser(e,t){e.token=t.token,e.userId=t.userId,e.didAutoLogout=!1},setAutoLogout(e){e.didAutoLogout=!0}};let $;var G={async login(e,t){return e.dispatch("auth",{...t,mode:"login"})},async signup(e,t){return e.dispatch("auth",{...t,mode:"signup"})},async auth(e,t){const o=t.mode;let a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrzQfDs1M2i5jtcUCj_xyAUe5dZLbSsIA";"signup"===o&&(a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrzQfDs1M2i5jtcUCj_xyAUe5dZLbSsIA");const i=await fetch(a,{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})}),n=await i.json();if(!i.ok){const e=new Error(n.message||"Failed to authenticate. Check your login data.");throw e}const r=1e3*+n.expiresIn,s=(new Date).getTime()+r;localStorage.setItem("token",n.idToken),localStorage.setItem("userId",n.localId),localStorage.setItem("tokenExpiration",s),$=setTimeout((function(){e.dispatch("autoLogout")}),r),e.commit("setUser",{token:n.idToken,userId:n.localId})},tryLogin(e){const t=localStorage.getItem("token"),o=localStorage.getItem("userId"),a=localStorage.getItem("tokenExpiration"),i=+a-(new Date).getTime();i<0||($=setTimeout((function(){e.dispatch("autoLogout")}),i),t&&o&&e.commit("setUser",{token:t,userId:o}))},logout(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("tokenExpiration"),clearTimeout($),e.commit("setUser",{token:null,userId:null})},autoLogout(e){e.dispatch("logout"),e.commit("setAutoLogout")}},Q={userId(e){return e.userId},token(e){return e.token},isAuthenticated(e){return!!e.token},didAutoLogout(e){return e.didAutoLogout}},Y={state(){return{userId:null,token:null,didAutoLogout:!1}},mutations:K,actions:G,getters:Q},X={setActiveNav(e,t){e.activeNav=t}},ee={setActiveNav(e,t){e.commit("setActiveNav",t.key)}},te={activeNav(e){return e.activeNav}},oe={namespaced:!0,state(){return{activeNav:["1"]}},mutations:X,actions:ee,getters:te};const ae=(0,C.MT)({modules:{nav:oe,products:N,cart:J,auth:Y}});var ie=ae,ne=o(2119);const re=e=>((0,i.dD)("data-v-aeb273da"),e=e(),(0,i.Cn)(),e),se={id:"content-style"},de=re((()=>(0,i._)("div",{id:"title"},"HELLO",-1))),le=re((()=>(0,i._)("p",null,"I am Adiel Caw, aspiring for the role of VueJS developer. I created this porfolio for the sole purpose of showcasing my skills on VueJS, HTML, CSS and Javascript. In this website there will be a Project page which there I will demonstrate my knowledge on VueJS in a form of a Sample Project that I prepared. I also included a short introductory of myself in this website with the work experiences I have attained throughout my career. ",-1))),ue=re((()=>(0,i._)("br",null,null,-1))),ce=re((()=>(0,i._)("p",null,' To know more about me, Kindly click the button "Go to About Me" to redirect you to the ABOUT ME page or simply use the navigation slider on your left.',-1))),pe=(0,i.Uk)("Go to About Me");function me(e,t,o,a,n,r){const s=(0,i.up)("base-button"),d=(0,i.up)("a-col"),l=(0,i.up)("base-image-card"),u=(0,i.up)("a-row");return(0,i.wg)(),(0,i.j4)(u,{id:"container-style",type:"flex"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{flex:"3"},{default:(0,i.w5)((()=>[(0,i._)("div",se,[de,le,ue,ce,(0,i.Wm)(s,{class:"outline",link:"",to:"/about"},{default:(0,i.w5)((()=>[pe])),_:1})])])),_:1}),(0,i.Wm)(d,{flex:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(l)])),_:1})])),_:1})}var ve={setup(){const e=(0,C.oR)(),t=t=>{e.dispatch("nav/setActiveNav",{key:t})};(0,i.bv)((()=>t(["1"])))}};const ge=(0,W.Z)(ve,[["render",me],["__scopeId","data-v-aeb273da"]]);var fe=ge;const he=e=>((0,i.dD)("data-v-563e0d06"),e=e(),(0,i.Cn)(),e),_e={id:"container-style"},we=he((()=>(0,i._)("div",{id:"title"},"ABOUT ME",-1))),ye=he((()=>(0,i._)("div",{id:"divider"},null,-1))),be=he((()=>(0,i._)("p",null," I describe myself as someone who is hungry for knowledge and experience when it comes to programming. I enjoy work that challenges me to learn something new at the direction of my desired career path. I am adaptable to change, a team player and a fast learner. ",-1))),ke=he((()=>(0,i._)("br",null,null,-1))),Ie=he((()=>(0,i._)("p",null," I previously worked at PCCW for 3 and half months as an Assistant Systems Specialist which mainly focuses on Oracle EBS and PL/SQL programming language and before that, I worked with Super 8 Retail Systems as a Systems Programmer where I worked for about 4 years and used Oracle Database, C# programming and VueJS. I have used VueJS for about a year in the company as part of an internal project we worked on. Upon leaving my previous company, I have decided to further my career as a Frontend Developer and took up a Online Course to gain more knowledge on VueJS and also refresh my skills on it. ",-1))),Ce=[we,ye,be,ke,Ie];function Se(e,t,o,a,n,r){return(0,i.wg)(),(0,i.iD)("div",_e,Ce)}var We={setup(){const e=(0,C.oR)(),t=t=>{e.dispatch("nav/setActiveNav",{key:t})};(0,i.bv)((()=>t(["2"])))}};const Pe=(0,W.Z)(We,[["render",Se],["__scopeId","data-v-563e0d06"]]);var De=Pe;const je=e=>((0,i.dD)("data-v-88edf23e"),e=e(),(0,i.Cn)(),e),Ae={id:"container-style"},Ue=je((()=>(0,i._)("div",{id:"title"},"SKILLS",-1))),xe=je((()=>(0,i._)("div",{id:"divider"},null,-1))),Te={id:"skills-list"},Oe=je((()=>(0,i._)("div",null,"HTML",-1))),Le=je((()=>(0,i._)("div",null,"VUE.JS",-1))),Ee=je((()=>(0,i._)("div",null,"JAVASCRIPT",-1))),qe=je((()=>(0,i._)("div",null,"NODE.JS",-1))),Fe=je((()=>(0,i._)("div",null,"FIREBASE",-1))),Ze=je((()=>(0,i._)("div",null,"ORACLE DATABASE",-1))),Re=je((()=>(0,i._)("div",null,"PL/SQL",-1))),Me=je((()=>(0,i._)("div",null,"ORACLE FORMS",-1))),He=je((()=>(0,i._)("div",null,"ORACLE REPORTS",-1)));function Ne(e,t,o,a,n,r){const s=(0,i.up)("a-progress");return(0,i.wg)(),(0,i.iD)("div",Ae,[Ue,xe,(0,i._)("div",Te,[Oe,(0,i.Wm)(s,{percent:90,status:"active",strokeColor:"#005C53"}),Le,(0,i.Wm)(s,{percent:70,status:"active",strokeColor:"#005C53"}),Ee,(0,i.Wm)(s,{percent:60,status:"active",strokeColor:"#005C53"}),qe,(0,i.Wm)(s,{percent:60,status:"active",strokeColor:"#005C53"}),Fe,(0,i.Wm)(s,{percent:30,status:"active",strokeColor:"#005C53"}),Ze,(0,i.Wm)(s,{percent:80,status:"active",strokeColor:"#005C53"}),Re,(0,i.Wm)(s,{percent:80,status:"active",strokeColor:"#005C53"}),Me,(0,i.Wm)(s,{percent:80,status:"active",strokeColor:"#005C53"}),He,(0,i.Wm)(s,{percent:70,status:"active",strokeColor:"#005C53"})])])}var ze={setup(){const e=(0,C.oR)(),t=t=>{e.dispatch("nav/setActiveNav",{key:t})};(0,i.bv)((()=>t(["4"])))}};const Ve=(0,W.Z)(ze,[["render",Ne],["__scopeId","data-v-88edf23e"]]);var Be=Ve;const Je=e=>((0,i.dD)("data-v-7b2dae2a"),e=e(),(0,i.Cn)(),e),Ke={id:"container-style"},$e=Je((()=>(0,i._)("div",{id:"title"},"EXPERIENCE",-1))),Ge=Je((()=>(0,i._)("div",{id:"divider"},null,-1))),Qe=Je((()=>(0,i._)("p",null,"Position: Systems Programmer",-1))),Ye=Je((()=>(0,i._)("p",null,"September 2017 - February 2022 ",-1))),Xe=Je((()=>(0,i._)("p",null,"Position: Systems Programmer",-1))),et=Je((()=>(0,i._)("p",null,"February 2022 - June 2022 ",-1)));function tt(e,t,o,a,n,r){const s=(0,i.up)("a-card"),d=(0,i.up)("a-col"),l=(0,i.up)("a-row");return(0,i.wg)(),(0,i.iD)("div",Ke,[$e,Ge,(0,i.Wm)(l,{gutter:16},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{span:12},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{id:"border-style",title:"Super 8 Retail Systems",bordered:!1,hoverable:""},{default:(0,i.w5)((()=>[Qe,Ye])),_:1})])),_:1}),(0,i.Wm)(d,{span:12},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{id:"border-style",title:"PCCW Solutions Limited",bordered:!1,hoverable:""},{default:(0,i.w5)((()=>[Xe,et])),_:1})])),_:1})])),_:1})])}var ot={setup(){const e=(0,C.oR)(),t=t=>{e.dispatch("nav/setActiveNav",{key:t})};(0,i.bv)((()=>t(["3"])))}};const at=(0,W.Z)(ot,[["render",tt],["__scopeId","data-v-7b2dae2a"]]);var it=at;const nt=e=>((0,i.dD)("data-v-62d03fc7"),e=e(),(0,i.Cn)(),e),rt={id:"container-style"},st=nt((()=>(0,i._)("div",{id:"title"},"CERTIFICATES",-1))),dt=nt((()=>(0,i._)("div",{id:"divider"},null,-1))),lt={id:"cert-container"},ut=(0,i.Uk)("https://www.udemy.com/certificate/UC-6815dfe8-8969-4a12-99bb-c19bfaae3c8b/"),ct=nt((()=>(0,i._)("img",{src:"https://udemy-certificate.s3.amazonaws.com/image/UC-6815dfe8-8969-4a12-99bb-c19bfaae3c8b.jpg?v=1656478248000"},null,-1)));function pt(e,t,o,a,n,r){const s=(0,i.up)("a-card-meta"),d=(0,i.up)("a-card");return(0,i.wg)(),(0,i.iD)("div",rt,[st,dt,(0,i._)("div",lt,[(0,i.Wm)(d,{hoverable:""},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{title:"Vue - The Complete Guide (incl. Router & Composition API)"},{description:(0,i.w5)((()=>[ut])),_:1}),ct])),_:1})])])}var mt={setup(){const e=(0,C.oR)(),t=t=>{e.dispatch("nav/setActiveNav",{key:t})};(0,i.bv)((()=>t(["5"])))}};const vt=(0,W.Z)(mt,[["render",pt],["__scopeId","data-v-62d03fc7"]]);var gt=vt;const ft=e=>((0,i.dD)("data-v-7598bdb9"),e=e(),(0,i.Cn)(),e),ht={id:"container-style"},_t=ft((()=>(0,i._)("section",null,[(0,i._)("div",{id:"title"},"PROJECTS"),(0,i._)("div",{id:"divider"})],-1)));function wt(e,t,o,a,n,r){const s=(0,i.up)("project-filled"),d=(0,i.up)("projects-item");return(0,i.wg)(),(0,i.iD)("div",ht,[_t,(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(d,{onClick:a.viewProject},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"])])])])}const yt={id:"icon-style"};function bt(e,t){const o=(0,i.up)("a-card-meta"),a=(0,i.up)("a-card");return(0,i.wg)(),(0,i.j4)(a,{id:"border-style",hoverable:"",style:{width:"300px"}},{default:(0,i.w5)((()=>[(0,i._)("div",yt,[(0,i.WI)(e.$slots,"default",{},void 0,!0)]),(0,i.Wm)(o,{title:"Sample Vue Project",description:"These are some of the things I can do with VUE!"})])),_:3})}const kt={},It=(0,W.Z)(kt,[["render",bt],["__scopeId","data-v-61e9411c"]]);var Ct=It,St=o(3117),Wt={components:{ProjectFilled:St.Z,ProjectsItem:Ct},setup(){const e=(0,ne.tv)(),t=()=>e.push("/projects/SampleProject"),o=(0,C.oR)(),a=e=>{o.dispatch("nav/setActiveNav",{key:e})};return(0,i.bv)((()=>a(["6"]))),{viewProject:t}}};const Pt=(0,W.Z)(Wt,[["render",wt],["__scopeId","data-v-7598bdb9"]]);var Dt=Pt;const jt={id:"sample-project-container"},At={id:"product-container"};function Ut(e,t,o,a,n,r){const s=(0,i.up)("sample-project-header"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",jt,[(0,i._)("section",null,[(0,i.Wm)(s)]),(0,i._)("section",At,[(0,i.Wm)(d)])])}const xt=e=>((0,i.dD)("data-v-3c8f24e6"),e=e(),(0,i.Cn)(),e),Tt=(0,i.Uk)("Buy & Shop"),Ot=(0,i.Uk)("Products"),Lt=(0,i.Uk)("Cart"),Et=(0,i.Uk)("Admin"),qt={id:"auth-actions"},Ft=(0,i.Uk)("Login"),Zt={key:1},Rt=xt((()=>(0,i._)("span",{style:{"margin-right":"5px"}},"User",-1))),Mt=(0,i.Uk)("Logout");function Ht(e,t,o,a,n,s){const d=(0,i.up)("router-link"),l=(0,i.up)("base-badge"),u=(0,i.up)("base-button"),c=(0,i.up)("UserOutlined"),p=(0,i.up)("a-avatar");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("h1",null,[(0,i.Wm)(d,{to:"/projects/SampleProject"},{default:(0,i.w5)((()=>[Tt])),_:1})]),(0,i._)("nav",null,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(d,{to:"/projects/SampleProject"},{default:(0,i.w5)((()=>[Ot])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(d,{to:{name:"cart"}},{default:(0,i.w5)((()=>[Lt])),_:1}),(0,i.Wm)(l,{mode:"elegant"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(a.qty),1)])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(d,{to:{name:"admin"}},{default:(0,i.w5)((()=>[Et])),_:1})])])]),(0,i._)("div",qt,[a.isLoggedIn?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,class:"outline",link:"",to:{name:"auth"}},{default:(0,i.w5)((()=>[Ft])),_:1})),a.isLoggedIn?((0,i.wg)(),(0,i.iD)("div",Zt,[Rt,(0,i.Wm)(p,{style:{"margin-right":"10px"}},{icon:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1}),(0,i.Wm)(u,{class:"flat",onClick:a.logout},{default:(0,i.w5)((()=>[Mt])),_:1},8,["onClick"])])):(0,i.kq)("",!0)])])}var Nt={components:{UserOutlined:h.Z},setup(){const e=(0,C.oR)(),t=(0,i.Fl)((()=>e.getters.isAuthenticated)),o=(0,i.Fl)((()=>e.getters["cart/quantity"])),a=()=>e.dispatch("logout");return{isLoggedIn:t,qty:o,logout:a}}};const zt=(0,W.Z)(Nt,[["render",Ht],["__scopeId","data-v-3c8f24e6"]]);var Vt=zt,Bt={components:{SampleProjectHeader:Vt},setup(){const e=(0,C.oR)(),t=(0,ne.tv)(),o=(0,i.Fl)((()=>e.getters.didAutoLogout));(0,i.bv)((()=>e.dispatch("auth/tryLogin"))),(0,i.YP)(o,((e,o)=>{e&&e!==o&&t.replace("/projects/SampleProject")}))}};const Jt=(0,W.Z)(Bt,[["render",Ut],["__scopeId","data-v-14fbc94f"]]);var Kt=Jt;const $t=e=>((0,i.dD)("data-v-6abb9e05"),e=e(),(0,i.Cn)(),e),Gt={class:"form-control"},Qt=$t((()=>(0,i._)("label",{for:"email"},"E-Mail",-1))),Yt={class:"form-control"},Xt=$t((()=>(0,i._)("label",{for:"password"},"Password",-1))),eo={key:0};function to(e,t,o,n,s,d){const l=(0,i.up)("a-modal"),u=(0,i.up)("base-button"),c=(0,i.up)("a-card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=t=>e.visible=t),title:"Error Message",onOk:n.handleOk},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,r.zw)(n.errorMessage),1)])),_:1},8,["visible","onOk"]),(0,i.Wm)(c,{style:{width:"500px","margin-left":"30%"}},{default:(0,i.w5)((()=>[(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,i._)("div",Gt,[Qt,(0,i.wy)((0,i._)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.authData.email=e)},null,512),[[a.nr,n.authData.email,void 0,{trim:!0}]])]),(0,i._)("div",Yt,[Xt,(0,i.wy)((0,i._)("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.authData.password=e)},null,512),[[a.nr,n.authData.password,void 0,{trim:!0}]])]),n.formIsValid?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",eo,"Please enter a valid email and password (must be at least 6 characters long).")),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(n.submitButtonCaption),1)])),_:1}),(0,i.Wm)(u,{mode:"flat",onClick:n.switchAuthMode},{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(n.switchModeButtonCaption),1)])),_:1},8,["onClick"])],32)])),_:1})])}o(6699);var oo={setup(){const e=(0,C.oR)(),t=(0,ne.tv)(),o=(0,I.qj)({email:"",password:""}),a=(0,I.iH)(!1),n=(0,I.iH)("login"),r=(0,I.iH)(!0),s=(0,I.iH)(null),d=(0,i.Fl)((()=>"login"===n.value?"Login":"Signup")),l=(0,i.Fl)((()=>"login"===n.value?"Signup instead":"Login instead")),u=async()=>{if(r.value=!0,""===o.email||!o.email.includes("@")||o.password.length<6)return console.log(o.email),console.log(o.password),void(r.value=!1);const a={email:o.email,password:o.password};try{"login"===n.value?await e.dispatch("login",a):await e.dispatch("signup",a),t.replace("/projects/SampleProject")}catch(i){s.value=i.message||"Failed to authenticate, try later."}},c=()=>{"login"===n.value?n.value="signup":n.value="login"},p=()=>a.value=!0,m=e=>{console.log(e),a.value=!1};return{authData:o,mode:n,formIsValid:r,errorMessage:s,submitButtonCaption:d,switchModeButtonCaption:l,submitForm:u,switchAuthMode:c,showModal:p,handleOk:m}}};const ao=(0,W.Z)(oo,[["render",to],["__scopeId","data-v-6abb9e05"]]);var io=ao;const no=e=>((0,i.dD)("data-v-46a58fc8"),e=e(),(0,i.Cn)(),e),ro=no((()=>(0,i._)("h2",null,"Your Cart",-1))),so=(0,i.Uk)("Total Amount: ");function lo(e,t,o,a,n,s){const d=(0,i.up)("base-badge"),l=(0,i.up)("cart-item");return(0,i.wg)(),(0,i.iD)("section",null,[ro,(0,i._)("h3",null,[so,(0,i.Wm)(d,{mode:"elegant"},{default:(0,i.w5)((()=>[(0,i.Uk)("₱"+(0,r.zw)(a.itemTotal),1)])),_:1})]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.cartItems,(e=>((0,i.wg)(),(0,i.j4)(l,{key:e.productId,"prod-id":e.productId,title:e.title,image:e.image,price:e.price,qty:e.qty},null,8,["prod-id","title","image","price","qty"])))),128))])])}const uo=["src","alt"],co={class:"item__data"},po=(0,i.Uk)(" Price per Item: "),mo=(0,i.Uk)(" Quantity: "),vo={class:"item__total"};function go(e,t,o,a,n,s){return(0,i.wg)(),(0,i.iD)("li",null,[(0,i._)("div",null,[(0,i._)("img",{src:o.image,alt:o.title},null,8,uo)]),(0,i._)("div",null,[(0,i._)("h3",null,(0,r.zw)(o.title),1),(0,i._)("div",co,[(0,i._)("div",null,[po,(0,i._)("strong",null,"$"+(0,r.zw)(o.price),1)]),(0,i._)("div",null,[mo,(0,i._)("strong",null,(0,r.zw)(o.qty),1)])]),(0,i._)("div",vo,"Total: $"+(0,r.zw)(a.itemTotal),1),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>a.removeItem&&a.removeItem(...e))},"Remove")])])}var fo={props:["prodId","title","image","price","qty"],setup(e){const t=(0,C.oR)(),o=(0,i.Fl)((()=>(e.price*e.qty).toFixed(2))),a=()=>t.dispatch("cart/removeFromCart",{productId:e.prodId});return{itemTotal:o,removeItem:a}}};const ho=(0,W.Z)(fo,[["render",go],["__scopeId","data-v-9889eb02"]]);var _o=ho,wo={components:{CartItem:_o},setup(){const e=(0,C.oR)(),t=(0,i.Fl)((()=>e.getters["cart/totalSum"])),o=(0,i.Fl)((()=>e.getters["cart/products"]));return{itemTotal:t,cartItems:o}}};const yo=(0,W.Z)(wo,[["render",lo],["__scopeId","data-v-46a58fc8"]]);var bo=yo;const ko={key:0},Io={key:1};function Co(e,t,o,a,n,r){const s=(0,i.up)("product-table"),d=(0,i.up)("product-item");return"table"===a.type?((0,i.wg)(),(0,i.iD)("section",ko,[(0,i.Wm)(s,{dataColumns:a.products},null,8,["dataColumns"])])):((0,i.wg)(),(0,i.iD)("ul",Io,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.products,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.id,id:e.id,title:e.title,image:e.image,description:e.description,price:e.price},null,8,["id","title","image","description","price"])))),128))]))}const So={class:"product"},Wo={class:"product__data"},Po={class:"product__image"},Do=["src","alt"],jo={class:"product__text"},Ao={class:"product__actions"},Uo=(0,i.Uk)("Add to Cart");function xo(e,t,o,a,n,s){const d=(0,i.up)("base-badge"),l=(0,i.up)("base-button");return(0,i.wg)(),(0,i.iD)("li",So,[(0,i._)("div",Wo,[(0,i._)("div",Po,[(0,i._)("img",{src:o.image,alt:o.title},null,8,Do)]),(0,i._)("div",jo,[(0,i._)("h3",null,(0,r.zw)(o.title),1),(0,i.Wm)(d,{mode:"highlight","no-margin-left":!0},{default:(0,i.w5)((()=>[(0,i._)("h4",null,"₱"+(0,r.zw)(o.price),1)])),_:1}),(0,i._)("p",null,(0,r.zw)(o.description),1)])]),(0,i._)("div",Ao,[(0,i.Wm)(l,{mode:"outline",onClick:a.addToCart},{default:(0,i.w5)((()=>[Uo])),_:1},8,["onClick"])])])}var To={props:["id","image","title","price","description"],setup(e){const t=(0,C.oR)(),o=()=>t.dispatch("cart/addToCart",{id:e.id});return{addToCart:o}}};const Oo=(0,W.Z)(To,[["render",xo],["__scopeId","data-v-d52187b6"]]);var Lo=Oo;const Eo=e=>((0,i.dD)("data-v-a8140ae0"),e=e(),(0,i.Cn)(),e),qo={key:0},Fo={key:1,class:"editable-row-operations"},Zo={key:0},Ro=(0,i.Uk)("Save"),Mo=Eo((()=>(0,i._)("a",null,"Cancel",-1))),Ho={key:1},No=["onClick"],zo=Eo((()=>(0,i._)("span",null," | ",-1))),Vo=["onClick"];function Bo(e,t,o,a,n,s){const d=(0,i.up)("a-input"),l=(0,i.up)("a-typography-link"),u=(0,i.up)("a-popconfirm"),c=(0,i.up)("a-table");return(0,i.wg)(),(0,i.j4)(c,{columns:a.columns,"data-source":a.dataSource,pagination:{pageSize:10},scroll:{y:240},bordered:""},{bodyCell:(0,i.w5)((({column:e,text:t,record:o})=>[["title","price","description","image"].includes(e.dataIndex)?((0,i.wg)(),(0,i.iD)("div",qo,[a.editableData[o.id]?((0,i.wg)(),(0,i.j4)(d,{key:0,value:a.editableData[o.id][e.dataIndex],"onUpdate:value":t=>a.editableData[o.id][e.dataIndex]=t,style:{margin:"-5px 0"}},null,8,["value","onUpdate:value"])):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,r.zw)(t),1)],64))])):"actions"===e.dataIndex?((0,i.wg)(),(0,i.iD)("div",Fo,[a.editableData[o.id]?((0,i.wg)(),(0,i.iD)("span",Zo,[(0,i.Wm)(l,{onClick:e=>a.save(o.id)},{default:(0,i.w5)((()=>[Ro])),_:2},1032,["onClick"]),(0,i.Wm)(u,{title:"Sure to cancel?",onConfirm:e=>a.cancel(o.id)},{default:(0,i.w5)((()=>[Mo])),_:2},1032,["onConfirm"])])):((0,i.wg)(),(0,i.iD)("span",Ho,[(0,i._)("a",{onClick:e=>a.edit(o.id)},"Edit",8,No),zo,(0,i._)("a",{onClick:e=>a.deleteProduct(o.id)},"Delete",8,Vo)]))])):(0,i.kq)("",!0)])),_:1},8,["columns","data-source"])}var Jo=o(8652);const Ko=[{title:"Product Name",dataIndex:"title",width:"15%"},{title:"Price",dataIndex:"price",width:"8%"},{title:"Description",dataIndex:"description",width:"32%"},{title:"Image URL",dataIndex:"image",width:"30%"},{title:"actions",dataIndex:"actions",width:"15%"}];var $o={props:["dataColumns"],setup(e){const t=(0,C.oR)(),o=(0,I.iH)(e.dataColumns),a=(0,I.qj)({}),i=e=>{a[e]=(0,Jo.Z)(o.value.filter((t=>e===t.id))[0])},n=e=>{Object.assign(o.value.filter((t=>e===t.id))[0],a[e]),console.log(a[e]),s(a[e]),delete a[e]},r=e=>{delete a[e]};async function s(e){try{await t.dispatch("products/editProduct",{id:e.id,title:e.title,price:e.price,description:e.description,image:e.image})}catch(o){console.log(o)}}async function d(e){try{await t.dispatch("products/removeProduct",{id:e});const a=o.value.findIndex((t=>t.id===e));o.value.splice(a,1)}catch(a){console.log(a)}}return{dataSource:o,columns:Ko,editingKey:"",editableData:a,edit:i,save:n,cancel:r,deleteProduct:d}}};const Go=(0,W.Z)($o,[["render",Bo],["__scopeId","data-v-a8140ae0"]]);var Qo=Go,Yo={components:{ProductItem:Lo,ProductTable:Qo},props:["listType"],setup(e){const t=(0,C.oR)(),o=(0,i.Fl)((()=>t.getters["products/products"])),a=async()=>await t.dispatch("products/loadProducts");return(0,i.bv)((()=>a())),{products:o,type:e.listType}}};const Xo=(0,W.Z)(Yo,[["render",Co],["__scopeId","data-v-0f728646"]]);var ea=Xo;const ta=e=>((0,i.dD)("data-v-44b92840"),e=e(),(0,i.Cn)(),e),oa=ta((()=>(0,i._)("div",{id:"title-style"},[(0,i._)("h1",null,"Add new Product")],-1))),aa={class:"form-control"},ia=ta((()=>(0,i._)("label",{for:"producttName"},"Product Name",-1))),na={class:"form-control"},ra=ta((()=>(0,i._)("label",{for:"price"},"Price",-1))),sa={class:"form-control"},da=ta((()=>(0,i._)("label",{for:"description"},"Description",-1))),la={class:"form-control"},ua=ta((()=>(0,i._)("label",{for:"image"},"Image URL",-1))),ca={key:0,class:"errors"},pa={class:"actions"},ma=(0,i.Uk)("Submit");function va(e,t,o,n,s,d){const l=(0,i.up)("a-modal"),u=(0,i.up)("base-button"),c=(0,i.up)("a-card"),p=(0,i.up)("product-list");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{visible:n.visible,"onUpdate:visible":t[0]||(t[0]=e=>n.visible=e),title:"Error Message",onOk:n.handleOk},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,r.zw)(n.errorMessage),1)])),_:1},8,["visible","onOk"]),(0,i.Wm)(c,{style:{width:"800px","margin-left":"20%"}},{default:(0,i.w5)((()=>[oa,(0,i._)("form",{onSubmit:t[5]||(t[5]=(0,a.iM)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,i._)("div",aa,[ia,(0,i.wy)((0,i._)("input",{type:"text",id:"producttName","onUpdate:modelValue":t[1]||(t[1]=e=>n.product.title=e)},null,512),[[a.nr,n.product.title,void 0,{trim:!0}]])]),(0,i._)("div",na,[ra,(0,i.wy)((0,i._)("input",{type:"number",id:"price","onUpdate:modelValue":t[2]||(t[2]=e=>n.product.price=e)},null,512),[[a.nr,n.product.price,void 0,{number:!0}]])]),(0,i._)("div",sa,[da,(0,i.wy)((0,i._)("textarea",{rows:"5",id:"description","onUpdate:modelValue":t[3]||(t[3]=e=>n.product.description=e)},null,512),[[a.nr,n.product.description,void 0,{trim:!0}]])]),(0,i._)("div",la,[ua,(0,i.wy)((0,i._)("input",{type:"url",id:"image","onUpdate:modelValue":t[4]||(t[4]=e=>n.product.image=e)},null,512),[[a.nr,n.product.image,void 0,{number:!0}]])]),n.formIsValid?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",ca,"Please enter a valid email and non-empty message.")),(0,i._)("div",pa,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[ma])),_:1})])],32)])),_:1}),(0,i.Wm)(p,{listType:"table"})],64)}var ga={components:{ProductList:ea},setup(){const e=(0,I.iH)({title:"",price:0,description:"",image:""}),t=(0,I.iH)(!0),o=(0,I.iH)(null),a=(0,I.iH)(!1),i=(0,C.oR)(),n=(0,ne.tv)(),r=async()=>{try{await i.dispatch("products/addProduct",{title:e.value.title,price:e.value.price,description:e.value.description,image:e.value.image}),n.replace("/projects/SampleProject")}catch(t){o.value=t.message||"Something failed!",s()}},s=()=>a.value=!0,d=e=>{console.log(e),a.value=!1};return{product:e,submitForm:r,formIsValid:t.value,errorMessage:o,visible:a,showModal:s,handleOk:d}}};const fa=(0,W.Z)(ga,[["render",va],["__scopeId","data-v-44b92840"]]);var ha=fa;const _a=(0,ne.p7)({history:(0,ne.PO)(),routes:[{path:"/",redirect:"/home"},{path:"/home",component:fe},{path:"/about",component:De},{path:"/experience",component:it},{path:"/skills",component:Be},{path:"/certificates",component:gt},{path:"/projects",component:Dt},{path:"/projects/SampleProject",component:Kt,children:[{path:"",component:ea},{path:"auth",name:"auth",meta:{requiresUnauth:!0},component:io},{path:"cart",name:"cart",meta:{requiresAuth:!0},component:bo},{path:"admin",name:"admin",meta:{requiresAuth:!0},component:ha}]}]});_a.beforeEach((function(e,t,o){e.meta.requiresAuth&&!ie.getters.isAuthenticated?o({name:"auth"}):e.meta.requiresUnauth&&ie.getters.isAuthenticated?o({name:"products"}):o()}));var wa=_a,ya=o(8810);o(2467);const ba=e=>((0,i.dD)("data-v-98be6d98"),e=e(),(0,i.Cn)(),e),ka=ba((()=>(0,i._)("img",{id:"img-style",alt:"example",src:"https://media-exp1.licdn.com/dms/image/C5103AQHSlhB4venPcQ/profile-displayphoto-shrink_800_800/0/1578227697148?e=1663804800&v=beta&t=q2fDIXGT7QcnHitOt7Zn9Tmc1Lssg_uSH-Fww1N325Y"},null,-1))),Ia=ba((()=>(0,i._)("h1",{id:"name-style"},"Adiel Caw",-1))),Ca=ba((()=>(0,i._)("div",{id:"divider-style"},null,-1))),Sa=ba((()=>(0,i._)("p",null,"Software Developer",-1)));function Wa(e,t){const o=(0,i.up)("a-card");return(0,i.wg)(),(0,i.j4)(o,{id:"a-card-style",hoverable:""},{cover:(0,i.w5)((()=>[ka])),default:(0,i.w5)((()=>[Ia,Ca,Sa])),_:1})}const Pa={},Da=(0,W.Z)(Pa,[["render",Wa],["__scopeId","data-v-98be6d98"]]);var ja=Da;function Aa(e,t,o,a,n,s){const d=(0,i.up)("router-link");return o.link?((0,i.wg)(),(0,i.j4)(d,{key:1,to:o.to,class:(0,r.C_)(o.mode)},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["to","class"])):((0,i.wg)(),(0,i.iD)("button",{key:0,class:(0,r.C_)(o.mode)},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],2))}var Ua={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};const xa=(0,W.Z)(Ua,[["render",Aa],["__scopeId","data-v-62d07aec"]]);var Ta=xa;function Oa(e,t,o,a,n,s){return(0,i.wg)(),(0,i.iD)("span",{class:(0,r.C_)(["badge",["badge-"+o.mode,{nml:o.noMarginLeft}]])},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],2)}var La={props:["mode","noMarginLeft"]};const Ea=(0,W.Z)(La,[["render",Oa],["__scopeId","data-v-093e80db"]]);var qa=Ea;const Fa=(0,a.ri)(Z);Fa.use(wa),Fa.use(ya.ZP),Fa.use(ie),Fa.component("base-image-card",ja),Fa.component("base-button",Ta),Fa.component("base-badge",qa),Fa.mount("#app")}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,i,n){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],n=e[u][2];for(var s=!0,d=0;d<a.length;d++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[d])}))?a.splice(d--,1):(s=!1,n<r&&(r=n));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,r=a[0],s=a[1],d=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var u=d(o)}for(t&&t(a);l<r.length;l++)n=r[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self["webpackChunkadielcaw_github_io"]=self["webpackChunkadielcaw_github_io"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(203)}));a=o.O(a)})();
//# sourceMappingURL=app.8ca9fc7c.js.map