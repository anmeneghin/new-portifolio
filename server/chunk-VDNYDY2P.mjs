import './polyfills.server.mjs';
import{a as N,b as l,c as h,d as n,e as f,f as p,g as r,h as P,k as x}from"./chunk-MYF3I22A.mjs";import{A as V,B as D,C as b,E as A,Q as M,W as E,X as u,ba as F,ca as w,d as s,e as d,g as c,h as v,ha as I,i as a,ia as S,ja as O,ka as k,l as _,la as G,pa as T,z as C}from"./chunk-KRJXAUP6.mjs";import{a as m,b as y}from"./chunk-VVCT4QZE.mjs";var j=N("routeAnimations",[f("HomePage => SkillsPage, SkillsPage => AboutPage",[n({position:"relative",top:"50%"}),r(":enter, :leave",[n({position:"absolute",top:"50%",right:0,width:"100%"})]),r(":enter",[n({right:"-100%"})],{optional:!0}),r(":leave",p(),{optional:!0}),h([r(":leave",[l("800ms ease-out",n({right:"100%"}))],{optional:!0}),r(":enter",[l("800ms ease-out",n({right:"0%"}))],{optional:!0})])]),f("SkillsPage => HomePage, AboutPage => SkillsPage",[n({position:"relative",top:"50%"}),r(":enter, :leave",[n({position:"absolute",top:"50%",left:0,width:"100%"})]),r(":enter",[n({left:"-100%"})],{optional:!0}),r(":leave",p(),{optional:!0}),h([r(":leave",[l("800ms ease-out",n({left:"100%"}))],{optional:!0}),r(":enter",[l("800ms ease-out",n({left:"0%"}))],{optional:!0})])])]);var B=(()=>{let e=class e{constructor(){this.title="portifolio",this.contexts=c(k)}getRouteAnimationData(){return this.contexts.getContext("primary")?.route?.snapshot?.data?.animation}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=v({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:2,vars:1,consts:[[1,"conteudo"]],template:function(i,z){i&1&&(V(0,"div",0),b(1,"router-outlet"),D()),i&2&&C("@routeAnimations",z.getRouteAnimationData())},dependencies:[u,G],styles:[".conteudo[_ngcontent-%COMP%]   app-navbar[_ngcontent-%COMP%]{position:absolute;z-index:10}"],data:{animation:[j]}});let t=e;return t})();var U=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-QER2QUVW.mjs").then(t=>t.HomeComponent),data:{animation:"HomePage"}},{path:"skills",loadComponent:()=>import("./chunk-PTNVRGEW.mjs").then(t=>t.SkillsComponent),data:{animation:"SkillsPage"}},{path:"about",loadComponent:()=>import("./chunk-NB3UAWWS.mjs").then(t=>t.AboutComponent),data:{animation:"AboutPage"}}];var X={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},He=y(m({},X),{"[class.ng-submitted]":"isSubmitted"});var R=new d("CallSetDisabledState",{providedIn:"root",factory:()=>g}),g="always";var Y=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=s({});let t=e;return t})();var K=new d("NgModelWithFormControlWarning");var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=s({imports:[Y]});let t=e;return t})();var L=(()=>{let e=class e{static withConfig(o){return{ngModule:e,providers:[{provide:R,useValue:o.callSetDisabledState??g}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=s({imports:[H]});let t=e;return t})(),$=(()=>{let e=class e{static withConfig(o){return{ngModule:e,providers:[{provide:K,useValue:o.warnOnNgModelWithFormControl??"always"},{provide:R,useValue:o.callSetDisabledState??g}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a({type:e}),e.\u0275inj=s({imports:[H]});let t=e;return t})();var W={providers:[_(S,L,$,u,P),E,F(w()),T(U),O()]};var J={providers:[x()]},q=M(W,J);var Q=()=>I(B,q),at=Q;export{at as a};
