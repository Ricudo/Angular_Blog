"use strict";(self.webpackChunkPractic_Blog=self.webpackChunkPractic_Blog||[]).push([[317],{7317:(it,f,l)=>{l.r(f),l.d(f,{AdminModule:()=>et});var s=l(6895),u=l(5823),r=l(433),t=l(4650),p=l(6331),b=l(7579);let c=(()=>{class n{constructor(){this.alert$=new b.x}success(e){this.alert$.next({type:"success",text:e})}warning(e){this.alert$.next({type:"warning",text:e})}danger(e){this.alert$.next({type:"danger",text:e})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const Z=function(n,o,e){return{"alert-success":n,"alert-warning":o,"alert-danger":e}};function x(n,o){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2)(2,"p"),t._uU(3),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.kEZ(2,Z,"success"===e.type,"warning"===e.type,"danger"===e.type)),t.xp6(2),t.Oqu(e.text)}}let C=(()=>{class n{constructor(e){this.alertService=e,this.delay=5e3,this.text="",this.type="success"}ngOnInit(){this.aSub=this.alertService.alert$.subscribe(e=>{this.text=e.text,this.type=e.type;const i=setTimeout(()=>{clearTimeout(i),this.text=""},this.delay)})}ngOnDestroy(){this.aSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{delay:"delay"},decls:1,vars:1,consts:[["class","alert-wrap",4,"ngIf"],[1,"alert-wrap"],[1,"alert",3,"ngClass"]],template:function(e,i){1&e&&t.YNc(0,x,4,6,"div",0),2&e&&t.Q6J("ngIf",i.text)},dependencies:[s.mk,s.O5],styles:[".alert-wrap[_ngcontent-%COMP%]{position:fixed;top:50px;right:40px;max-width:200px}"]}),n})();const A=function(){return["/admin","dashboard"]},T=function(){return["/admin","create"]};function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ul")(1,"li",4)(2,"a",5),t._uU(3,"Main"),t.qZA()(),t.TgZ(4,"li",4)(5,"a",5),t._uU(6,"Create"),t.qZA()(),t.TgZ(7,"li")(8,"a",6),t.NdJ("click",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.logout(a))}),t._uU(9,"Logout"),t.qZA()()()}2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,A)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,T)))}let P=(()=>{class n{constructor(e,i){this.router=e,this.auth=i}ngOnInit(){}logout(e){e.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(p.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-layout"]],decls:8,vars:1,consts:[[1,"navbar","bg-primary"],["routerLink","/"],[4,"ngIf"],[1,"container"],["routerLinkActive","active"],[1,"bottom-border",3,"routerLink"],["href","#",1,"bottom-border",3,"click"]],template:function(e,i){1&e&&(t._UZ(0,"app-alert"),t.TgZ(1,"nav",0)(2,"h1")(3,"a",1),t._uU(4,"Angular Admin"),t.qZA()(),t.YNc(5,q,10,4,"ul",2),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"router-outlet"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",i.auth.isAuthenticated()))},dependencies:[s.O5,u.lC,u.yS,u.Od,C],styles:[".bottom-border[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;border-bottom:none;transition:border-bottom .3s ease-in-out}.bottom-border[_ngcontent-%COMP%]:hover{border-bottom:2px solid var(--success-color)}"]}),n})();function y(n,o){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const e=o.ngIf;t.xp6(1),t.hij(" ",e," ")}}function w(n,o){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.message," ")}}function I(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Email is required."),t.qZA())}function J(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Email should be correct."),t.qZA())}function S(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,I,2,0,"small",13),t.YNc(2,J,2,0,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.email.errors.required),t.xp6(1),t.Q6J("ngIf",e.email.errors.email)}}function U(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Password is required."),t.qZA())}function L(n,o){if(1&n&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.AsE("Password should have at least ",e.pass.errors.minlength.requiredLength," symbols now it has ",e.pass.errors.minlength.actualLength," symbols.")}}function N(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,U,2,0,"small",13),t.YNc(2,L,2,2,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.pass.errors.required),t.xp6(1),t.Q6J("ngIf",e.pass.errors.minlength)}}const h=function(n){return{invalid:n}};let Y=(()=>{class n{constructor(e,i,a){this.auth=e,this.router=i,this.route=a,this.submitted=!1,this.message=""}ngOnInit(){this.route.queryParams.subscribe(e=>{e.loginAgain?this.message="Login please first.":e.authFailed&&(this.message="Session time is out. Login again")}),this.form=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email]),password:new r.NI(null,[r.kI.required,r.kI.minLength(6)])})}get email(){return this.form.get("email")}get pass(){return this.form.get("password")}submit(){this.form.invalid||(this.submitted=!0,this.auth.login({email:this.form.value.email,password:this.form.value.password}).subscribe(()=>{this.form.reset(),this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.e),t.Y36(u.F0),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],decls:18,vars:14,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-info",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-danger"],[1,"alert","alert-info"],[1,"validation"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(1,"h2"),t._uU(2,"Enter the admin panel"),t.qZA(),t.YNc(3,y,2,1,"div",1),t.ALo(4,"async"),t.YNc(5,w,2,1,"div",2),t.TgZ(6,"div",3)(7,"label",4),t._uU(8,"Email:"),t.qZA(),t._UZ(9,"input",5),t.YNc(10,S,3,2,"div",6),t.qZA(),t.TgZ(11,"div",3)(12,"label",7),t._uU(13,"Password:"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,N,3,2,"div",6),t.qZA(),t.TgZ(16,"button",9),t._uU(17,"Submit"),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("ngIf",t.lcZ(4,8,i.auth.error$)),t.xp6(2),t.Q6J("ngIf",i.message),t.xp6(1),t.Q6J("ngClass",t.VKq(10,h,i.email.touched&&i.email.invalid)),t.xp6(4),t.Q6J("ngIf",i.email.touched&&i.email.invalid),t.xp6(1),t.Q6J("ngClass",t.VKq(12,h,i.pass.touched&&i.pass.invalid)),t.xp6(4),t.Q6J("ngIf",i.pass.touched&&i.pass.invalid),t.xp6(1),t.Q6J("disabled",i.form.invalid||i.submitted))},dependencies:[s.mk,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,s.Ov],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var g=l(6750);let O=(()=>{class n{transform(e,i=""){return i.trim()?e.filter(a=>a.title.toLowerCase().includes(i.toLowerCase())):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"searchPosts",type:n,pure:!0}),n})();const Q=function(n){return["/admin","post",n,"edit"]};function M(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",6)(11,"button",7),t._uU(12," Open "),t.qZA(),t.TgZ(13,"a",8),t.NdJ("click",function(){const m=t.CHM(e).$implicit,nt=t.oxw(2);return t.KtG(nt.remove(m.id))}),t._uU(14,"Delete"),t.qZA()()()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.author),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.xi3(9,5,e.date,"medium")),t.xp6(3),t.Q6J("routerLink",t.VKq(8,Q,e.id))}}function F(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",2)(2,"input",3),t.NdJ("ngModelChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.searchStr=a)}),t.qZA()(),t.TgZ(3,"table")(4,"thead")(5,"tr")(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th",4),t._uU(9,"Author"),t.qZA(),t.TgZ(10,"th",4),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th",4),t._uU(13,"Date"),t.qZA(),t.TgZ(14,"th",4),t._uU(15,"Actions"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,M,15,10,"tr",5),t.ALo(18,"searchPosts"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.searchStr),t.xp6(15),t.Q6J("ngForOf",t.xi3(18,2,e.posts,e.searchStr))}}function k(n,o){1&n&&(t.TgZ(0,"p",4),t._uU(1,"Loading..."),t.qZA())}let E=(()=>{class n{constructor(e,i){this.postsService=e,this.alertService=i,this.posts=[],this.searchStr=""}ngOnInit(){this.pSub=this.postsService.getAll().subscribe(e=>{this.posts=e})}remove(e){this.dSub=this.postsService.remove(e).subscribe(()=>{this.posts=this.posts.filter(i=>i.id!==e),this.alertService.warning("Post was deleted!")})}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.dSub&&this.dSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.P),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"form-control"],["type","text","placeholder","Find Post",3,"ngModel","ngModelChange"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"actions"],[1,"btn","btn-link","open",3,"routerLink"],[3,"click"]],template:function(e,i){if(1&e&&(t.YNc(0,F,19,5,"div",0),t.YNc(1,k,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.posts.length)("ngIfElse",a)}},dependencies:[s.sg,s.O5,r.Fj,r.JJ,r.On,u.rH,s.uU,O],styles:[".open[_ngcontent-%COMP%]{margin-right:10px;display:inline-block;max-width:70px}a[_ngcontent-%COMP%]{display:inline-block;max-width:70px}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid var(--shadow-color)}"]}),n})();var _=l(7125);function D(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Enter post title."),t.qZA())}function G(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,D,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.title.errors.required)}}function K(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Enter post author."),t.qZA())}function j(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,K,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.author.errors.required)}}const v=function(n){return{invalid:n}};let $=(()=>{class n{constructor(e,i){this.postsService=e,this.alertService=i}ngOnInit(){this.form=new r.cw({title:new r.NI(null,r.kI.required),text:new r.NI(null,r.kI.required),author:new r.NI(null,r.kI.required)})}get title(){return this.form.get("title")}get author(){return this.form.get("author")}submit(){if(this.form.invalid)return;const e={author:this.form.value.author,text:this.form.value.text,title:this.form.value.title,date:new Date};this.postsService.create(e).subscribe(()=>{this.form.reset(),this.alertService.success("Post was created!")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.P),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-page"]],decls:19,vars:10,consts:[[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["for","author"],["id","author","type","text","formControlName","author"],["type","submit",1,"btn","btn-block","btn-dark",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(1,"h1"),t._uU(2,"Creating new post"),t.qZA(),t.TgZ(3,"div",1)(4,"label",2),t._uU(5,"Title:"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,G,2,1,"div",4),t.qZA(),t.TgZ(8,"div",5)(9,"label"),t._uU(10,"Post Content:"),t.qZA(),t._UZ(11,"quill-editor",6),t.qZA(),t.TgZ(12,"div",1)(13,"label",7),t._uU(14,"Post Author:"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,j,2,1,"div",4),t.qZA(),t.TgZ(17,"button",9),t._uU(18,"Create post"),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("ngClass",t.VKq(6,v,i.title.touched&&i.title.invalid)),t.xp6(4),t.Q6J("ngIf",i.title.touched&&i.title.invalid),t.xp6(5),t.Q6J("ngClass",t.VKq(8,v,i.author.touched&&i.author.invalid)),t.xp6(4),t.Q6J("ngIf",i.author.touched&&i.author.invalid),t.xp6(1),t.Q6J("disabled",i.form.invalid))},dependencies:[s.mk,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,_.g6],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var z=l(3900);function X(n,o){1&n&&(t.TgZ(0,"small"),t._uU(1,"Enter post title."),t.qZA())}function B(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,X,2,0,"small",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.title.errors.required)}}const V=function(n){return{invalid:n}};function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submit())}),t.TgZ(2,"div",3)(3,"label",4),t._uU(4,"Title:"),t.qZA(),t._UZ(5,"input",5),t.YNc(6,B,2,1,"div",6),t.qZA(),t.TgZ(7,"div",7)(8,"label"),t._uU(9,"Post Content:"),t.qZA(),t._UZ(10,"quill-editor",8),t.qZA(),t.TgZ(11,"button",9),t._uU(12," Update "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(1),t.Q6J("ngClass",t.VKq(4,V,e.title.touched&&e.title.invalid)),t.xp6(4),t.Q6J("ngIf",e.title.touched&&e.title.invalid),t.xp6(5),t.Q6J("disabled",e.form.invalid||e.submited)}}function W(n,o){1&n&&(t.TgZ(0,"p",12),t._uU(1,"Loading..."),t.qZA())}let R=(()=>{class n{constructor(e,i,a){this.route=e,this.postsService=i,this.alertService=a,this.submited=!1}ngOnInit(){this.route.params.pipe((0,z.w)((e,i)=>this.postsService.getById(e.id))).subscribe(e=>{this.post=e,this.form=new r.cw({title:new r.NI(e.title,r.kI.required),text:new r.NI(e.text,r.kI.required)})})}get title(){return this.form.get("title")}submit(){this.form.invalid||(this.submited=!0,this.uSub=this.postsService.update({...this.post,text:this.form.value.text,title:this.form.value.title}).subscribe(()=>{this.submited=!1,this.alertService.success("Post was updated!")}))}ngOnDestroy(){this.uSub&&this.uSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(g.P),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"text-center"]],template:function(e,i){if(1&e&&(t.YNc(0,H,13,6,"div",0),t.YNc(1,W,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",i.form)("ngIfElse",a)}},dependencies:[s.mk,s.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,_.g6]}),n})();var tt=l(4466);let d=(()=>{class n{constructor(e,i){this.auth=e,this.router=i}canActivate(e,i){return!!this.auth.isAuthenticated()||(this.auth.logout(),this.router.navigate(["/admin","login"],{queryParams:{loginAgain:!0}}),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.e),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[d,c],imports:[s.ez,r.u5,r.UX,tt.m,u.Bz.forChild([{path:"",component:P,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:Y},{path:"dashboard",component:E,canActivate:[d]},{path:"create",component:$,canActivate:[d]},{path:"post/:id/edit",component:R,canActivate:[d]}]}]),u.Bz]}),n})()}}]);