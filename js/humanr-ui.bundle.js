(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{165:function(t,a,e){var o=e(219);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(24)(o,n);o.locals&&(t.exports=o.locals)},218:function(t,a,e){"use strict";var o=e(165);e.n(o).a},219:function(t,a,e){(a=e(23)(!1)).push([t.i,"\ndiv.process[data-v-55fb2884]{\n\tbackground:#999; \n\theight:28px;\n\twidth:200px;\n\tmargin-left: -2px;\n    margin-top: -2px;\n}\ndiv.caa[data-v-55fb2884] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\ndiv.conquer[data-v-55fb2884] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\n",""]),t.exports=a},275:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"humanr"},[e("div",[e("filterbox",{attrs:{items:t.humanr,"min-items":"10"},model:{value:t.filtered,callback:function(a){t.filtered=a},expression:"filtered"}}),t._v(" "),e("div",{staticClass:"caa",attrs:{"data-key":"command_code"}},[t._v("指令容量: "+t._s(t.toLarge(Math.round(t.command_code.valueOf())))+"/"+t._s(t.toLarge(Math.round(t.command_code.max.valueOf()))))]),t._v(" "),t._l(t.filtered,(function(a){return e("div",{key:a.id,staticClass:"separate",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,a)}}},[e("div",{staticStyle:{float:"left"}},[e("span",[t._v("["+t._s(t.toLarge(a.clevel))+"级]"+t._s(a.name.toTitleCase()))])]),t._v(" "),e("div",{staticStyle:{float:"right"}},[e("div",{staticStyle:{float:"left",position:"relative",border:"1px #CCC solid",height:"28px",width:"200px",margin:"5px auto",padding:"1px"}},[e("div",{staticClass:"process",style:{width:200*(a.val/Math.floor(a.max)>=1?1:a.val/Math.floor(a.max))+"px"}}),t._v(" "),e("strong",{staticStyle:{position:"absolute",width:"200px",top:"4px","text-align":"center",overflow:"hidden"}},[t._v(t._s(t.toLarge(a.val))+" ("+t._s(t.toLarge(a.val*a.clevel))+") / "+t._s(t.toLarge(Math.floor(a.max))))])]),t._v(" "),e("button",{staticStyle:{float:"left"},attrs:{disabled:0==a.val},on:{click:function(t){return a.amount(-1)}}},[t._v("撤销指令")]),t._v(" "),e("button",{staticStyle:{float:"left"},attrs:{disabled:!a.canpaddzl(t.game)||t.command_code.valueOf()>=t.command_code.max.valueOf()||a.val*a.clevel+a.clevel>t.command_code.max.valueOf()},on:{click:function(e){return t.emit("addzl",a)}}},[t._v("执行指令")])])])}))],2)])};o._withStripped=!0;var n=e(45),r=e(87),i=(e(17),e(57)),l=(e(21),e(4)),s=e(38),c={props:["state"],mixins:[e(19).a,s.a],components:{progbar:n.a,running:r.a},data:()=>({filtered:null}),components:{inv:()=>e.e(11).then(e.bind(null,269)),filterbox:i.a},computed:{humanr(){return l.c.state.humanr.filter(t=>!this.alocked(t))},human_power:()=>l.c.state.getData("human_power"),command_code:()=>l.c.state.getData("command_code"),BUY:()=>TRY_BUY},methods:{fhumanr(){return l.c.state.humanr.filter(t=>!this.alocked(t))},toLarge(t){if(t>=1){const a=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let e=1;if(t<0&&(e=-1,t=-t),t<=1)return e;let o=Math.floor((Math.log10(t)-1)/3);return o<1?e*t:e*Math.round(t/Math.pow(10,3*o))+a[o]}return t}}},d=(e(218),e(7)),u=Object(d.a)(c,o,[],!1,null,"55fb2884",null);u.options.__file="src/ui/sections/humanr.vue";a.default=u.exports}}]);