webpackJsonp([1],{"3tBt":function(e,t){},"7j0N":function(e,t){},"9IVL":function(e,t){},Iq1C:function(e,t){},NHnr:function(e,t,n){"use strict";function i(e){n("9IVL")}function s(e){n("3tBt")}function r(e){n("Iq1C")}function o(e){n("dgeC")}function a(e){n("vHXC")}function l(e){n("Xtzo")}function c(e){n("atIc")}function u(e){n("7j0N")}Object.defineProperty(t,"__esModule",{value:!0});var f=n("0tSy"),m=n("3cXf"),p=n.n(m),v={name:"MyDialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"dialogWrapper"},[n("div",{staticClass:"dialog"},[n("header",[e._v(e._s(e.title)+"\n      "),n("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),n("main",[e._t("default")],2)])])},_=[],h={render:d,staticRenderFns:_},g=h,b=n("/Xao"),w=i,y=b(v,g,!1,w,"data-v-553cc1cc",null),D=y.exports,k=n("UM2g"),I=n.n(k);I.a.init({appId:"XtBA9qy1k1W1Fd0yrYfvdXoS-gzGzoHsz",appKey:"UOmizdTmGeyJqFWSK3itRgRo"});var $=I.a,C={202:"用户名已被占用",217:"无效的用户名",210:"用户名和密码不匹配",211:"找不到该用户",unknown:"请求失败，请稍后再试"},U=function(e){var t=e.code;return C[t]||C.unknown},F=function(e){var t=e||$.User.current()||{attributes:{}},n=t.id,i=t.attributes.username;return{id:n||"",username:i||""}},x={name:"SignUpForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},created:function(){},methods:{signUp:function(){var e=this,t=this.formData,n=t.username,i=t.password,s=new $.User;s.setUsername(n),s.setPassword(i),s.signUp().then(function(){e.$emit("success",F())},function(t){e.errorMessage=U(t)})}}},R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"form",staticClass:"id-signin-form",attrs:{"label-position":"labelPosition","label-width":"50px"}},[n("el-form-item",{attrs:{label:"帐号"}},[n("el-input",{attrs:{required:""},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{required:"",type:"password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),e._v(" "),n("el-button",{staticClass:"id-signin-button",attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.signUp(t)}}},[e._v("注册")])],1)},E=[],P={render:R,staticRenderFns:E},T=P,M=n("/Xao"),S=M(x,T,!1,null,null,null),X=S.exports,V=(console.log.bind(console),{name:"SignInForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},methods:{signIn:function(){var e=this,t=this.formData,n=t.username,i=t.password;$.User.logIn(n,i).then(function(){e.$emit("success",F())},function(t){e.errorMessage=U(t)})}}}),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"form",staticClass:"id-signin-form",attrs:{"label-position":"labelPosition","label-width":"50px"}},[n("el-form-item",{attrs:{label:"帐号"}},[n("el-input",{attrs:{required:""},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{required:"",type:"password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),e._v(" "),n("el-button",{staticClass:"id-signin-button",attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.signIn(t)}}},[e._v("登录")])],1)},O=[],K={render:A,staticRenderFns:O},L=K,N=n("/Xao"),q=s,z=N(V,L,!1,q,null,null),j=z.exports,B=console.log.bind(console),H={components:{MyDialog:D,SignUpForm:X,SignInForm:j},methods:{preView:function(){this.$store.commit("switchPreview")},signIn:function(e){this.signUpDialogVisible=!1,this.signInDialogVisible=!1,this.getData(),B("signin"),this.$store.commit("setUser",e)},signOut:function(){$.User.logOut(),this.$store.commit("removeUser");var e=JSON.parse(this.emptyResume);this.$store.commit("setResume",e)},saveData:function(){var e=this,t=$.Object.extend("Todo"),n=p()(this.$store.state.resume);if(this.isFirstLogin){var i=$.Object.createWithoutData("Todo",this.todoId);i.set({data:n}),i.save().then(function(e){successFn&&successFn.call(null)},function(e){return B(e)})}else{var s=new t,r=new $.ACL;r.setPublicReadAccess(!1),r.setWriteAccess($.User.current(),!0),r.setReadAccess($.User.current(),!0),s.setACL(r),s.set({data:n}),this.isFirstLogin=!0,s.save().then(function(t){e.todoId=s.id},function(e){errorFn&&errorFn.call(null,e)})}},getCurrentUser:function(){var e=$.User.current();return{id:e.id,createdAt:e.createdAt,username:e.attributes.username}},getData:function(){var e=this;new $.Query("Todo").find().then(function(t){if(0==t.length)return e.isFirstLogin=!1,void e.saveData();var n=JSON.parse(t[0].attributes.data);e.$store.commit("setResume",n)},function(){B("error")})}},data:function(){return{signUpDialogVisible:!1,signInDialogVisible:!1,isFirstLogin:!0,todoId:"",emptyResume:""}},computed:{user:function(){return this.$store.state.user},logined:function(){return this.user.id}},created:function(){var e=p()(this.$store.state.resume);this.emptyResume=e}},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"wrap"},[e._m(0,!1,!1),e._v(" "),n("div",{staticClass:"action"},[e.logined?n("div",{staticClass:"userActions"},[n("span",{staticClass:"welcome"},[e._v("你好，"+e._s(e.user.username))]),e._v(" "),n("el-button",{on:{click:function(t){t.preventDefault(),e.signOut(t)}}},[e._v("注销")]),e._v(" "),n("el-button",{on:{click:function(t){t.preventDefault(),e.preView(t)}}},[e._v("预览")]),e._v(" "),n("el-button",{on:{click:function(t){t.preventDefault(),e.saveData(t)}}},[e._v("保存")])],1):n("div",{staticClass:"userActions"},[n("el-button",{on:{click:function(t){t.preventDefault(),e.signInDialogVisible=!0}}},[e._v("登录")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){t.preventDefault(),e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),n("MyDialog",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[n("SignUpForm",{on:{success:function(t){e.signIn(t)}}})],1)],1)]),e._v(" "),n("MyDialog",{attrs:{title:"登录",visible:e.signInDialogVisible},on:{close:function(t){e.signInDialogVisible=!1}}},[n("SignInForm",{on:{success:function(t){e.signIn(t)}}})],1),e._v(" "),n("MyDialog",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[n("SignUpForm",{on:{success:function(t){e.signIn(t)}}})],1)],1)])},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("h2",[e._v("Resume Editor")])])}],G={render:W,staticRenderFns:J},Y=G,Q=n("/Xao"),Z=r,ee=Q(H,Y,!1,Z,null,null),te=ee.exports,ne={props:["profile"],methods:{changeProfile:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}}},ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{attrs:{value:e.profile.name},on:{input:function(t){e.changeProfile("profile.name",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("el-select",{attrs:{value:e.profile.sex,placeholder:"请选择性别"},on:{input:function(t){e.changeProfile("profile.sex",t)}}},[n("el-option",{attrs:{label:"男",value:"男"}}),e._v(" "),n("el-option",{attrs:{label:"女",value:"女"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"城市"}},[n("el-input",{attrs:{value:e.profile.city},on:{input:function(t){e.changeProfile("profile.city",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"出生日期"}},[n("el-date-picker",{attrs:{value:e.profile.date,align:"right",type:"date",placeholder:"选择日期"},on:{input:function(t){e.changeProfile("profile.date",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系电话",prop:"number",rules:[{type:"number",message:"电话必须为数字值"}]}},[n("el-input",{attrs:{type:"number","auto-complete":"off"},on:{input:function(t){e.changeProfile("profile.phone",t)}},model:{value:e.profile.phone,callback:function(t){e.$set(e.profile,"phone",e._n(t))},expression:"profile.phone"}})],1)],1)},se=[],re={render:ie,staticRenderFns:se},oe=re,ae=n("/Xao"),le=o,ce=ae(ne,oe,!1,le,null,null),ue=ce.exports,fe=n("ZLEe"),me=n.n(fe),pe=(console.log.bind(console),{props:["items","labels","itemKey","title"],computed:{keys:function(){return me()(this.items[0])}},methods:{addItem:function(){var e={};this.keys.map(function(t){e[t]=""}),this.items.push(e)},removeItem:function(e){1!==this.items.length&&this.items.splice(e,1)},changeResume:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}}}),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.title))]),e._v(" "),n("el-form",{ref:"form",staticClass:"item-form",attrs:{"label-width":"80px"}},e._l(this.items,function(t,i){return n("div",{staticClass:"container"},[e._l(e.keys,function(s){return n("el-form-item",{key:s,attrs:{label:e.labels[s]||s}},[n("el-input",{attrs:{value:t[s]},on:{input:function(t){e.changeResume(e.itemKey+"."+i+"."+s,t)}}})],1)}),e._v(" "),n("i",{staticClass:"el-icon-circle-close-outline",on:{click:function(t){e.removeItem(i)}}}),e._v(" "),n("hr",{staticClass:"lines"})],2)})),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.addItem}},[e._v("添加")])],1)},de=[],_e={render:ve,staticRenderFns:de},he=_e,ge=n("/Xao"),be=a,we=ge(pe,he,!1,be,null,null),ye=we.exports,De={components:{ProfileEditor:ue,ItemEditor:ye},data:function(){return{colors:["red","blue","yellow","green","orange"]}},computed:{icon:function(){return this.$store.state.icon},currentTab:{get:function(){return this.$store.state.currentTab},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}}},ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[n("nav",[n("ul",{staticClass:"nav-bar"},e._l([0,1,2,3,4],function(t){return n("li",{class:{active:e.currentTab===t},on:{click:function(n){e.currentTab=t}}},[n("svg",{staticClass:"icon",staticStyle:{width:"50px",height:"50px"},style:{fill:e.colors[t]},attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-"+e.icon[t]}})])])}))]),e._v(" "),n("div",{staticClass:"edit-wrap"},[n("ul",{staticClass:"edit-content"},[n("li",{class:{active:0===e.currentTab}},[n("h2",[e._v("个人信息")]),e._v(" "),n("ProfileEditor",{attrs:{profile:e.resume.profile}})],1),e._v(" "),n("li",{class:{active:1===e.currentTab}},[n("ItemEditor",{attrs:{items:e.resume.study,labels:{school:"学校",degree:"学位",specialty:"专业"},itemKey:"study",title:"学业情况"}})],1),e._v(" "),n("li",{class:{active:2===e.currentTab}},[n("ItemEditor",{attrs:{items:e.resume.skill,labels:{type:"技能名称",level:"熟练程度"},itemKey:"skill",title:"职业技能"}})],1),e._v(" "),n("li",{class:{active:3===e.currentTab}},[n("ItemEditor",{attrs:{items:e.resume.work,labels:{company:"公司名称",position:"职位",content:"工作内容"},itemKey:"work",title:"工作经验"}})],1),e._v(" "),n("li",{class:{active:4===e.currentTab}},[n("ItemEditor",{attrs:{items:e.resume.fav,labels:{item:"项目"},title:"兴趣爱好",itemKey:"fav"}})],1)])])])},Ie=[],$e={render:ke,staticRenderFns:Ie},Ce=$e,Ue=n("/Xao"),Fe=l,xe=Ue(De,Ce,!1,Fe,null,null),Re=xe.exports,Ee={methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var n in e)if(e[n]){t=!1;break}return t},resume:function(){return this.$store.state.resume}}},Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"preview"}},[n("h1",[e._v(e._s(e.resume().profile.name))]),e._v(" "),n("p",[e._v("城市："+e._s(e.resume().profile.city))]),e._v(" "),n("p",[e._v("性别："+e._s(e.resume().profile.sex))]),e._v(" "),n("p",[e._v("生日："+e._s(e.resume().profile.date))]),e._v(" "),n("p",[e._v("电话："+e._s(e.resume().profile.phone))]),e._v(" "),e.filter(e.resume().study).length>0?n("section",[n("h2",[e._v("学习经历")]),e._v(" "),n("hr"),e._v(" "),n("ul",e._l(e.resume().study,function(t){return n("li",[e._v("\n        "+e._s(t.school)+"\n        "+e._s(t.degree)+"\n        "+e._s(t.specialty)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume().skill).length>0?n("section",[n("h2",[e._v("技能掌握")]),e._v(" "),n("hr"),e._v(" "),n("ul",e._l(e.resume().skill,function(t){return n("li",[e._v("\n        "+e._s(t.type)+"\n        "+e._s(t.level)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume().work).length>0?n("section",[n("h2",[e._v("工作经验")]),e._v(" "),n("hr"),e._v(" "),n("ul",e._l(e.resume().work,function(t){return n("li",[e._v("\n        "+e._s(t.company)+"\n        "+e._s(t.position)+"\n        "+e._s(t.content)+"\n      ")])}))]):e._e(),e._v(" "),e.filter(e.resume().fav).length>0?n("section",[n("h2",[e._v("兴趣爱好")]),e._v(" "),n("hr"),e._v(" "),n("ul",e._l(e.resume().fav,function(t){return n("li",[e._v("\n        "+e._s(t.item)+"\n\n      ")])}))]):e._e()])},Te=[],Me={render:Pe,staticRenderFns:Te},Se=Me,Xe=n("/Xao"),Ve=c,Ae=Xe(Ee,Se,!1,Ve,null,null),Oe=Ae.exports,Ke=n("aA9S"),Le=n.n(Ke),Ne=n("9rMa"),qe=n("lk51"),ze=n.n(qe);f.default.use(Ne.a);var je=new Ne.a.Store({state:{resume:{profile:{name:"",sex:"",date:void 0,city:"",phone:""},study:[{school:"",degree:"",specialty:""}],skill:[{type:"",level:""}],work:[{company:"",position:"",content:""}],fav:[{item:""}]},user:{id:"",username:""},currentTab:0,icon:["credential","xueli","skill","work","fav"],previewMode:!1},mutations:{switchTab:function(e,t){e.currentTab=t,localStorage.setItem("state",p()(e))},switchPreview:function(e){e.previewMode=!0},updateResume:function(e,t){var n=t.path,i=t.value;console.log(i instanceof Date),i instanceof Date&&(i=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()),ze.a.set(e.resume,n,i)},initState:function(e,t){Le()(e,t)},setUser:function(e,t){Le()(e.user,t),console.log(e.user)},setResume:function(e,t){Le()(e.resume,t)},removeUser:function(e){e.user.id=""}}}),Be=(console.log.bind(console),{store:je,components:{Topbar:te,Editor:Re,Preview:Oe},methods:{preview:function(){return this.$store.commit("switchPreview")}},computed:{previewMode:function(){return this.$store.state.previewMode}},created:function(){}}),He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[n("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),n("main",[n("Editor",{staticClass:"editor"}),e._v(" "),n("Preview")],1)],1)},We=[],Je={render:He,staticRenderFns:We},Ge=Je,Ye=n("/Xao"),Qe=u,Ze=Ye(Be,Ge,!1,Qe,null,null),et=Ze.exports,tt=(n("OBsF"),n("NcP2"),n("z5U/")),nt=n.n(tt);n("rK6t");f.default.use(nt.a),f.default.config.productionTip=!1,new f.default({el:"#app",template:"<App/>",components:{App:et}})},NcP2:function(e,t){},OBsF:function(e,t){},Xtzo:function(e,t){},atIc:function(e,t){},dgeC:function(e,t){},rK6t:function(e,t){},vHXC:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e0406f9ca052752d8794.js.map