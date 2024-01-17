"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[88],{4088:function(e,o,t){t.r(o),t.d(o,{default:function(){return m}});var s=function(){var e=this,o=e._self._c;return o("div",{staticStyle:{height:"100vh"}},[o("div",{staticClass:"loginBox"},[o("div",{staticStyle:{width:"100%",height:"10vh",display:"flex","flex-direction":"row","justify-content":"center"}},[o("button",{staticClass:"catelog left",attrs:{id:"1"},on:{click:e.changeCatelog}},[e._v("学生登陆")]),o("button",{staticClass:"catelog right",attrs:{id:"2"},on:{click:e.changeCatelog}},[e._v("教师登录")])]),o("div",{staticStyle:{margin:"30px 0 30px 0","text-align":"center"}},[o("el-radio",{attrs:{label:"1"},on:{change:e.changeLoginway},model:{value:e.loginway,callback:function(o){e.loginway=o},expression:"loginway"}},[e._v("密码登录")]),o("el-radio",{attrs:{label:"2"},on:{change:e.changeLoginway},model:{value:e.loginway,callback:function(o){e.loginway=o},expression:"loginway"}},[e._v("短信登陆")])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:1==e.loginFormType,expression:"loginFormType == 1"}]},[o("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginForm,rules:e.pwdRules}},[o("el-form-item",{staticClass:"input_box",attrs:{prop:"username","label-width":"40px"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",type:"text",autocomplete:"off"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),o("el-form-item",{staticClass:"input_box",attrs:{prop:"pwd","label-width":"40px"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入密码",type:"password",autocomplete:"off","show-password":""},model:{value:e.loginForm.pwd,callback:function(o){e.$set(e.loginForm,"pwd",o)},expression:"loginForm.pwd"}})],1)],1),o("div",{staticClass:"submit_box"},[o("button",{staticClass:"submit",on:{click:function(o){return e.login("loginForm")}}},[e._v("登录")])]),o("div",{staticClass:"forgetPassword"},[o("router-link",{staticClass:"router-link register",attrs:{to:"/register"}}),o("router-link",{staticClass:"router-link forget",attrs:{to:"/forgetPassword"}},[e._v("忘记密码")])],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:2==e.loginFormType,expression:"loginFormType == 2"}]},[o("el-form",{ref:"loginFormByPhone",staticClass:"loginForm",attrs:{model:e.loginFormByPhone,rules:e.phoneRules},nativeOn:{submit:function(e){e.preventDefault()}}},[o("el-form-item",{staticClass:"input_box",attrs:{prop:"phone","label-width":"40px"}},[o("el-input",{staticClass:"input",staticStyle:{width:"180px"},attrs:{placeholder:"请输入手机号",type:"text",autocomplete:"off"},model:{value:e.loginFormByPhone.phone,callback:function(o){e.$set(e.loginFormByPhone,"phone",o)},expression:"loginFormByPhone.phone"}}),o("button",{staticClass:"get-code",attrs:{id:"get-code"},on:{click:e.getCode}},[e._v("获取验证码")])],1),o("el-form-item",{staticClass:"input_box",attrs:{prop:"code","label-width":"40px"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入验证码",type:"text",autocomplete:"off"},model:{value:e.loginFormByPhone.code,callback:function(o){e.$set(e.loginFormByPhone,"code",o)},expression:"loginFormByPhone.code"}})],1)],1),o("div",{staticClass:"submit_box"},[o("button",{staticClass:"submit",on:{click:function(o){return e.login("loginFormByPhone")}}},[e._v("登录")])]),o("div",{staticClass:"forgetPassword"},[o("router-link",{staticClass:"router-link register",attrs:{to:"/register"}}),o("router-link",{staticClass:"router-link forget",attrs:{to:"/forgetPassword"}},[e._v("忘记密码")])],1)],1)]),o("el-dialog",{attrs:{title:"选择角色",visible:e.chooseRoleFormVisible,width:"500px"},on:{"update:visible":function(o){e.chooseRoleFormVisible=o}}},[e._l(e.rolesList.simpleRoleList,(function(t,s){return o("el-radio",{key:t.roleid,staticStyle:{display:"block","margin-bottom":"30px"},attrs:{label:s},on:{change:e.chooseRoles},model:{value:e.roleNum,callback:function(o){e.roleNum=o},expression:"roleNum"}},[e._v(" "+e._s(t.rolename)+" ")])})),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(o){return e.close_chooseRoleForm()}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.confirmChooseRole()}}},[e._v("确 定")])],1)],2)],1)},l=[],i=(t(560),{data(){return{loginForm:{username:"",pwd:"",catelog:null,loginway:1},loginFormByPhone:{phone:"",code:"",catelog:null,loginway:1},pwdRules:{username:[{required:!0,message:"请输入用户名",trigger:"submit"}],pwd:[{required:!0,message:"请输入密码",trigger:"submit"}]},phoneRules:{phone:[{required:!0,message:"请输入手机号",trigger:"submit"},{pattern:/\d{11}$/,message:"请输入正确的手机号",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"submit"}]},user:{userid:"",catelog:"",rolename:"",roleid:"",homeurl:""},rolesList:{userid:"",catelog:"",simpleRoleList:[{rolename:"超级管理员",roleid:"1",homeurl:"homes/superadminhome"},{rolename:"教务处",roleid:"3",homeurl:"homes/eduhome"}]},userData:{id:1,obsId:1,username:"超级管理员",loginname:"超级管理员",mobile:"",pwd:"1",status:1,remark:"",catelog:2,headImage:""},loginway:"1",loginFormType:1,chooseRoleFormVisible:!1,roleNum:"",count:60,codeTimer:null}},methods:{clearLoginForm(){this.loginForm.username=this.loginForm.pwd="",this.loginForm.catelog=this.loginForm.loginway=-1},login(e){this.$refs[e].validate((e=>e?("超级管理员"===this.loginForm.username&&"1"===this.loginForm.pwd?"2"===this.loginForm.catelog?(this.chooseRoleFormVisible=!0,this.roleNum=""):"2"!==this.loginForm.catelog&&this.$message({message:"无可用角色",type:"error",duration:800}):this.$message({message:"账号或密码错误",type:"error",duration:800}),!0):(console.log("error submit!!"),!1)))},changeCatelog(e){let o=e.target.id;this.loginForm.catelog=this.loginFormByPhone.catelog=o;let t=document.getElementsByClassName("catelog");for(let s of t)s.style.borderBottom="none";document.getElementById(o).style.borderBottom="3px solid dodgerblue"},changeLoginway(e){this.loginForm.loginway=this.loginFormByPhone.loginway=this.loginFormType=e},chooseRoles(e){this.user.userid=this.rolesList.userid,this.user.catelog=this.rolesList.catelog,this.user=this.rolesList.simpleRoleList[e]},close_chooseRoleForm(){this.chooseRoleFormVisible=!1},confirmChooseRole(){this.$router.push(this.user.homeurl)},prompt(){this.$notify({title:"目前可用的账号",message:"教师登录√<br>密码登录√<br>用户名: 超级管理员<br>密码: 1",position:"top-left",duration:0,showClose:!1,dangerouslyUseHTMLString:!0})},getCode(e){this.$refs["loginFormByPhone"].validateField("phone",(o=>{if(o=!o,!o)return!1;{let o=e.target.id;document.getElementById(o).disabled=!0,document.getElementById(o).style.backgroundColor="silver",document.getElementById(o).style.cursor="not-allowed",document.getElementById(o).innerHTML="重新发送("+this.count+"s)",this.codeTimer=setInterval((()=>{this.count>0?(this.count--,document.getElementById(o).innerHTML="重新发送("+this.count+"s)"):(clearInterval(this.codeTimer),this.count=60,document.getElementById(o).disabled=!1,document.getElementById(o).innerHTML="获取验证码",document.getElementById(o).style.cursor="pointer",document.getElementById(o).style.backgroundColor="dodgerblue")}),1e3)}}))}},mounted(){this.prompt()},beforeDestroy(){this.$notify.closeAll()}}),r=i,n=t(1001),a=(0,n.Z)(r,s,l,!1,null,"4702e5e9",null),m=a.exports}}]);
//# sourceMappingURL=88.95143967.js.map