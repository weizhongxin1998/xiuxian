(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[4],{172:function(t,a,e){var n=e(229);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(22)(n,o);n.locals&&(t.exports=n.locals)},228:function(t,a,e){"use strict";var n=e(172);e.n(n).a},229:function(t,a,e){(a=e(21)(!1)).push([t.i,"\ndiv.process[data-v-394b28c4]{\n\tbackground:#999; \n\theight:28px;\n\twidth:200px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.caa[data-v-394b28c4] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\n.imgname[data-v-394b28c4]{\n    display: flex;    \n    height: 40px;\n    width: 40px;\n    justify-content: center;\n}\n.factimg[data-v-394b28c4] {\n  filter: drop-shadow(0 0 2px black);\n}\n.sec_name[data-v-394b28c4]{\n\twidth: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.sec_name[data-v-394b28c4]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\n",""]),t.exports=a},297:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",["location"==t.map?e("div",[e("span",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[e("button",{on:{click:function(a){return t.emit("openConquer")}}},[t._v("打开指示器")]),t._v(" "),e("span",[t._v("进攻需要首先满足战斗评级大于目标防御,征服上限随计算力动态变化")]),t._v(" "),e("filterbox",{attrs:{items:t.conquer,"min-items":"10"},model:{value:t.filtered,callback:function(a){t.filtered=a},expression:"filtered"}})],1),t._v(" "),e("div",t._l(t.filtered,(function(a){return e("div",{key:a.id,staticClass:"separate",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[e("span",[t._v(t._s(a.name.toTitleCase())+" 【⚡防御:"+t._s(Math.floor(a.power))+"】【"+t._s(a.rate>0?"⬆获取速率:":"⬇获取速率:")+t._s(Math.floor(a.rate))+"/s】")]),t._v(" "),a.buy&&!a.owned?e("button",{attrs:{disabled:!a.acanBuy(t.Game)},on:{click:function(e){return t.emit(t.BUY,a)}}},[t._v("无宣战借口")]):e("span",[e("span",{staticStyle:{float:"left","padding-top":"6px"}},[t._v("成功率:"+t._s(t.cgl(a))+"%")]),t._v(" "),e("div",{staticStyle:{float:"left",position:"relative",border:"1px #CCC solid",height:"28px",width:"200px",margin:"5px auto",padding:"1px"}},[e("div",{staticClass:"process",style:{width:200*(a.val/Math.floor(a.max)>=1?1:a.val/Math.floor(a.max))+"px"}}),t._v(" "),e("strong",{staticStyle:{position:"absolute",width:"200px",top:"4px","text-align":"center",overflow:"hidden"}},[t._v(t._s(t.toLarge(Math.floor(a.val)))+" / "+t._s(t.toLarge(Math.floor(a.max))))])]),t._v(" "),e("div",{staticStyle:{float:"left"}},[e("button",{attrs:{disabled:!a.canpa(t.game)||a.val>=Math.floor(a.max)||t.f_power<a.power},on:{click:function(e){t.emit("attack",a,t.cgl_attack(a))}}},[t._v("\n\t\t\t\t\t\t\t\t攻击")])])])])})),0)]):t._e(),t._v(" "),"planet"==t.map?e("div",[e("div",[e("img",{staticStyle:{width:"100%"},attrs:{src:t.g_c.map_planet_1}})])]):t._e()])])};n._withStripped=!0;var o=e(44),r=e(90),i=(e(17),e(43)),s=(e(23),e(2)),c=e(37),l=e(19),p=e(4),d={props:["state"],mixins:[l.a,c.a],components:{progbar:o.a,running:r.a},data:()=>({filtered:null,map:"location"}),components:{inv:()=>e.e(13).then(e.bind(null,292)),filterbox:i.a},computed:{yanzhandu:()=>s.c.state.getData("yanzhandu"),shiqi:()=>s.c.state.getData("shiqi"),zhuzhidu:()=>s.c.state.getData("zhuzhidu"),g_c:()=>s.c.state.getData("g_c"),alculation:()=>s.c.state.getData("alculation"),f_power:()=>s.c.state.getData("f_power"),f_stress:()=>s.c.state.getData("f_stress"),f_area:()=>s.c.state.getData("f_area"),human_power:()=>s.c.state.getData("human_power"),conquer(){return s.c.state.conquer.filter(t=>!this.alocked(t))},BUY:()=>p.J},methods:{fconquer(){return s.c.state.conquer.filter(t=>!this.alocked(t))},zdxn:()=>Math.round(2.5*s.c.state.getData("f_power").valueOf()+s.c.state.getData("f_power").valueOf()*(.65*s.c.state.getData("shiqi").valueOf()+.75*s.c.state.getData("zhuzhidu").valueOf()-s.c.state.getData("yanzhandu").valueOf()/s.c.state.getData("alculation").valueOf()*s.c.state.getData("yanzhandu").valueOf())/100*10)/10,cgl(t){let a=this.zdxn();return a>=6*t.power?100:Math.round(t.power>a?1e3*(a/t.power-.2):1e3*(1-t.power/2/a))/10},cgl_attack(t){let a=this.zdxn();return a>=6*t.power?100:t.power>a?a/t.power-.2:1-t.power/2/a},toLarge(t){if(t>=1){const a=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let e=1;if(t<0&&(e=-1,t=-t),t<=1)return e;let n=Math.floor((Math.log10(t)-1)/3);return n<1?e*t:e*Math.round(t/Math.pow(10,3*n))+a[n]}return t}}},u=(e(228),e(7)),f=Object(u.a)(d,n,[],!1,null,"394b28c4",null);f.options.__file="src/ui/sections/conquer.vue";a.default=f.exports}}]);