(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{178:function(n,t,a){var o=a(234);"string"==typeof o&&(o=[[n.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};a(21)(o,e);o.locals&&(n.exports=o.locals)},233:function(n,t,a){"use strict";var o=a(178);a.n(o).a},234:function(n,t,a){(t=a(20)(!1)).push([n.i,"\ndiv.command[data-v-55fb2884]{\n\tmargin: 10px;\n    border: 7px solid #ccc;\n    border-radius: 4px;\n    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    transition: 0.5s;\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\n}\n.commandh2[data-v-55fb2884]{\n\tmargin-top: 2px;\n\ttext-align: center;\n    color: rgb(144, 144, 144);\n    font-weight: 600;\n    font-size: 23px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.job[data-v-55fb2884]{\n\tdisplay: flex;\n\tjustify-content: space-between;\n    padding: 4px 10px;\n\tmargin: 8px 7px 0px 7px;\n    border-bottom: 1px solid #CCC;\n    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    transition: 0.5s;\n    box-shadow: inset 0 -4px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.25), 0 4px rgba(0,0,0,0.1);\n}\n.job .jobicon[data-v-55fb2884]{\n\twidth: 60px;\n    margin-top: 8px;\n    margin-right: 20px;\n}\n.job .title-job[data-v-55fb2884] {\n    width: 22rem;\n    margin-right: 15px;\n    padding: 10px 0 0;\n}\n.job .jobinfo[data-v-55fb2884] {\n\twidth: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.jobs .job[data-v-55fb2884]:last-child {\n    border-bottom: 0;\n}\n.job .title-job h2[data-v-55fb2884] {\n    margin: 0;\n    font-size: 15px;\n    font-weight: normal;\n}\n.job .title-job span[data-v-55fb2884] {\n    color: #5a5a5a;\n    font-size: 12px;\n    font-weight: bold;\n}\n.job .title-job span.deliver[data-v-55fb2884] {\n    color: #8c8484;\n    font-size: 12px;\n}\n.jobinfo i[data-v-55fb2884] {\n    margin-top: 8px;\n}\n.jobinfo span[data-v-55fb2884] {\n    font-size: 14px;\n}\n.operate[data-v-55fb2884] {\n\tdisplay: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.operate h3[data-v-55fb2884] {\n\tcursor: pointer;\n    margin: 0;\n\tmargin-bottom: 2px;\n    width: 175px;\n    border-radius: 4px;\n    font-size: 12px;\n    text-transform: uppercase;\n    text-align: center;\n\tdisplay: block;\n    border: 2px solid #5BBC2E;\n    font-weight: bold;\n    color: #5BBC2E;\n    transition: 0.5s;\n    background-color: transparent;\n}\n.operate h3[data-v-55fb2884]:hover {\n\tbackground: #525252;\n}\n",""]),n.exports=t},301:function(n,t,a){"use strict";a.r(t);var o=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"humanr"},[a("div",[a("h2",{staticClass:"commandh2"},[a("i",{staticClass:"fa-solid fa-briefcase",staticStyle:{margin:"5px 3px 0px 0px"}}),n._v("\n\t\t\t指令容量:"+n._s(n.toLarge(Math.round(n.command_code.valueOf())))+"/"+n._s(n.toLarge(Math.round(n.command_code.max.valueOf())))+"\n\t\t\t"),a("filterbox",{attrs:{items:n.humanr,"min-items":"10"},model:{value:n.filtered,callback:function(t){n.filtered=t},expression:"filtered"}})],1),n._v(" "),a("div",{staticClass:"command"},n._l(n.filtered,(function(t){return a("div",{key:t.id,staticClass:"job",on:{"!mouseenter":function(a){return a.stopPropagation(),n.itemOver(a,t)}}},[a("div",{staticClass:"title-job"},[a("h2",[n._v("["+n._s(n.toLarge(t.mod.command_code))+"级]"+n._s(t.name))]),n._v(" "),a("span",[n._v(n._s(t.desc))])]),n._v(" "),a("div",{staticClass:"jobinfo"},[a("i",{staticClass:"fa-solid fa-power-off",staticStyle:{color:"#2ed30d"}},[a("span",[n._v(" 启动数量:"+n._s(Math.floor(t.val))+"/"+n._s(Math.floor(t.max)))])]),n._v(" "),a("i",{staticClass:"fa-solid fa-chart-simple",staticStyle:{color:"#0d8ad3"}},[a("span",[n._v(" 占用容量:"+n._s(n.toLarge(t.val*t.mod.command_code)))])])]),n._v(" "),a("div",{staticClass:"operate"},[a("h3",{attrs:{disabled:!t.canpaddzl(n.game)||n.command_code.valueOf()>=n.command_code.max.valueOf()||t.val*t.mod.command_code+t.mod.command_code>n.command_code.max.valueOf()},on:{click:function(a){return n.emit("addzl",t)}}},[n._v("执行指令")]),n._v(" "),a("h3",{staticStyle:{border:"2px solid #bc352e",color:"#bc352e"},attrs:{disabled:0==t.val},on:{click:function(n){return t.amount(-1)}}},[n._v("撤销指令")])])])})),0)])])};o._withStripped=!0;var e=a(43),r=a(92),i=(a(18),a(42)),s=(a(23),a(2)),d=a(32),c={props:["state"],mixins:[a(17).a,d.a],components:{progbar:e.a,running:r.a},data:()=>({filtered:null}),components:{inv:()=>a.e(13).then(a.bind(null,294)),filterbox:i.a},computed:{humanr(){return s.c.state.humanr.filter(n=>!this.alocked(n))},human_power:()=>s.c.state.getData("human_power"),command_code:()=>s.c.state.getData("command_code"),BUY:()=>TRY_BUY},methods:{fhumanr(){return s.c.state.humanr.filter(n=>!this.alocked(n))},toLarge(n){if(n>=1){const t=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(n<0&&(a=-1,n=-n),n<=1)return a;let o=Math.floor((Math.log10(n)-1)/3);return o<1?a*n:a*Math.round(n/Math.pow(10,3*o))+t[o]}return n}}},l=(a(233),a(7)),p=Object(l.a)(c,o,[],!1,null,"55fb2884",null);p.options.__file="src/ui/sections/humanr.vue";t.default=p.exports}}]);