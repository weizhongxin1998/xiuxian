(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{177:function(e,t,a){var s=a(240);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(22)(s,n);s.locals&&(e.exports=s.locals)},196:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return!e.hideEmpty||e.avail.length>0?a("div",[e.title?a("span",[e._v(e._s(e.title)+":")]):e._e(),e._v(" "),e.avail.length>0?a("button",{staticClass:"task-btn",on:{"!mouseenter":function(t){return t.stopPropagation(),e.itemOver(t,e.cur)},click:e.select}},[e._v(e._s(e.cur?e.cur.name:"None"))]):e._e()]):e._e()};s._withStripped=!0;var n=a(2),i=a(17),o=a(4),c={props:["pick","title","choices","pickEvent","hideEmpty","mustPay"],mixins:[i.a],data(){return{pEvent:this.pickEvent||o.C,cur:n.c.state.getSlot(this.pick)}},methods:{toggleChange(){this.changing=!this.changing},select(){this.emit("choice",this.avail,{cb:e=>{e&&(this.emit(this.pEvent,e),this.cur=n.c.state.getSlot(this.pick))},elm:this.$el,title:this.title||this.pick,mustPay:this.mustPay})}},computed:{avail(){return this.choices?this.choices:n.c.state.filterItems(e=>e.slot===this.pick&&!e.disabled&&!e.locks&&!e.locked&&(e.owned||!e.buy))}}},l=a(7),r=Object(l.a)(c,s,[],!1,null,null,null);r.options.__file="src/ui/components/slotpick.vue";t.a=r.exports},239:function(e,t,a){"use strict";var s=a(177);a.n(s).a},240:function(e,t,a){(t=a(21)(!1)).push([e.i,"\nspan.space[data-v-1cd7013e] {\n\ttext-align: center;\n\tmargin: 0px var(--lg-gap);\n}\nspan.sm[data-v-1cd7013e] {\n\tmargin: var(--sm-gap);\n}\ndiv.home-view[data-v-1cd7013e] {\n\tdisplay: flex;\n\theight:100%;\n\tflex-flow: column nowrap;\n\tpadding-left:1rem;\n\tpadding-right:1rem;\n}\ndiv.home-view .content[data-v-1cd7013e] {\n\tdisplay: flex;\n\toverflow-y: hidden;\n\theight:100%;\n\tflex-direction: row;\n\twidth: 100%;\n\tpadding-top: var(--tiny-gap);\n}\ndiv.pick-slots[data-v-1cd7013e] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\n\tmargin-top:0.9em;\n\tmargin-right: 1rem;\n\tflex-basis: 5rem;\n}\ndiv.pick-obstacles[data-v-1cd7013e] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tmargin-right: 1rem;\n}\ndiv.nospace[data-v-1cd7013e] {\n\tcolor: red;\n}\ndiv.furniture[data-v-1cd7013e] {\n\twidth: auto;\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom:var(--md-gap);\n}\ndiv.home-view .furniture table[data-v-1cd7013e] {\n\t text-transform: capitalize;\n\t flex-grow: 1;\n\t border-spacing: 0;\n     flex: 1; min-height: 0; width: 100%; max-width: 20rem;\n     display: flex; flex-direction: column;\n}\ndiv.home-view .furniture table tr[data-v-1cd7013e] { display: flex; padding: var(--sm-gap);\n}\ndiv.home-view .furniture table tr[data-v-1cd7013e]:first-child {\n        position: sticky; top: 0; background: var(--header-background-color); z-index: 1;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(1) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(2) { flex-basis: 40%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(3) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr button[data-v-1cd7013e] { margin: 0; font-size: 0.75em;\n}\ntable .count[data-v-1cd7013e], table .space[data-v-1cd7013e] {\n\ttext-align: center;\n}\ntable .name[data-v-1cd7013e] {\n\tpadding: 0 var(--md-gap) 0 0.9rem;\n\tmin-width:10em;\n\ttext-align: left;\n}\ntable tr[data-v-1cd7013e]:nth-child(2n) {\n\tbackground: var( --odd-list-color );\n}\n\n",""]),e.exports=t},300:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-view"},[a("div",{staticClass:"top separate"},[a("span",[a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowMax,expression:"chkShowMax"}],attrs:{id:e.elmId("showMax"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowMax)?e._i(e.chkShowMax,null)>-1:e.chkShowMax},on:{change:function(t){var a=e.chkShowMax,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.chkShowMax=a.concat([null])):i>-1&&(e.chkShowMax=a.slice(0,i).concat(a.slice(i+1)))}else e.chkShowMax=n}}}),a("label",{attrs:{for:e.elmId("showMax")}},[e._v("达上限")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowOwned,expression:"chkShowOwned"}],attrs:{id:e.elmId("showOwn"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowOwned)?e._i(e.chkShowOwned,null)>-1:e.chkShowOwned},on:{change:function(t){var a=e.chkShowOwned,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.chkShowOwned=a.concat([null])):i>-1&&(e.chkShowOwned=a.slice(0,i).concat(a.slice(i+1)))}else e.chkShowOwned=n}}}),a("label",{attrs:{for:e.elmId("showOwn")}},[e._v("已拥有")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowUnowned,expression:"chkShowUnowned"}],attrs:{id:e.elmId("showUnowned"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowUnowned)?e._i(e.chkShowUnowned,null)>-1:e.chkShowUnowned},on:{change:function(t){var a=e.chkShowUnowned,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.chkShowUnowned=a.concat([null])):i>-1&&(e.chkShowUnowned=a.slice(0,i).concat(a.slice(i+1)))}else e.chkShowUnowned=n}}}),a("label",{attrs:{for:e.elmId("showUnowned")}},[e._v("未拥有")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowBlocked,expression:"chkShowBlocked"}],attrs:{id:e.elmId("showBlock"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowBlocked)?e._i(e.chkShowBlocked,null)>-1:e.chkShowBlocked},on:{change:function(t){var a=e.chkShowBlocked,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.chkShowBlocked=a.concat([null])):i>-1&&(e.chkShowBlocked=a.slice(0,i).concat(a.slice(i+1)))}else e.chkShowBlocked=n}}}),a("label",{attrs:{for:e.elmId("showBlock")}},[e._v("未满足")])]),e._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.chkShowHided,expression:"chkShowHided"}],attrs:{id:e.elmId("showHide"),type:"checkbox"},domProps:{checked:Array.isArray(e.chkShowHided)?e._i(e.chkShowHided,null)>-1:e.chkShowHided},on:{change:function(t){var a=e.chkShowHided,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&(e.chkShowHided=a.concat([null])):i>-1&&(e.chkShowHided=a.slice(0,i).concat(a.slice(i+1)))}else e.chkShowHided=n}}}),a("label",{attrs:{for:e.elmId("showHide")}},[e._v("隐藏")])])]),e._v(" "),a("filterbox",{staticClass:"inline",attrs:{prop:e.searchIt,items:e.viewable},model:{value:e.filtered,callback:function(t){e.filtered=t},expression:"filtered"}}),e._v(" "),a("span",{staticClass:"space"},[e._v("空间: "+e._s(Math.floor(e.space.free()))+" / "+e._s(Math.floor(e.space.max.value)))])],1),e._v(" "),a("div",{staticClass:"content"},[e.hallOpen?a("hall",{on:{close:e.closeHall}}):e._e(),e._v(" "),a("div",{staticClass:"pick-slots"},[e.hallUnlocked?a("button",{staticClass:"task-btn",on:{click:e.openHall}},[e._v(e._s(e.hallName))]):e._e(),e._v(" "),a("slotpick",{attrs:{title:"居所",pick:"home","must-pay":"true"}}),e._v(" "),a("slotpick",{attrs:{title:"阵法","hide-empty":"true",pick:"front"}}),e._v(" "),a("slotpick",{attrs:{title:"位面","hide-empty":"true",pick:"werry"}}),e._v(" "),a("slotpick",{attrs:{title:"封地","hide-empty":"true",pick:"fief"}})],1),e._v(" "),a("div",{staticClass:"furniture"},[e.state.items.space.empty()?a("div",{staticClass:"warn-text",staticStyle:{"text-align":"center"}},[e._v("没有多余的空间(如果是刚刚更换房子,尝试刷新一下)\n\t\t\t"),e.homesAvail.length>0?a("span"):e._e()]):e._e(),e._v(" "),a("table",{staticClass:"furniture"},[e._m(0),e._v(" "),e._l(e.filtered,(function(t){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!it.hide"}],key:t.id,on:{"!mouseenter":function(a){return a.stopPropagation(),e.itemOver(a,t)}}},[a("td",{staticClass:"space"},[e._v(e._s(t.cost.space||t.mod.space))]),e._v(" "),void 0!==t.max?[a("td",{staticClass:"name"},[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.fhideb(t)}}},[e._v("👁")]),e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10)+"/"+e._s(t.max.valueOf()))])]:1==t.repeat?[a("td",{staticClass:"name"},[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.fhideb(t)}}},[e._v("👁")]),e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10))])]:[a("td",{staticClass:"name"},[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.fhideb(t)}}},[e._v("👁")]),e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10)+"/1")])],e._v(" "),a("td",[t.maxed()?a("span",{staticClass:"sm"},[e._v("Max")]):a("button",{staticClass:"buy-btn",attrs:{type:"button",disabled:!t.canUse()},on:{click:function(a){return e.emit("upgrade",t)}}},[e._v("购买")])]),e._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:t.value<=0},on:{click:function(a){return e.emit("sell",t)}}},[e._v("售卖")])])],2)}))],2)]),e._v(" "),a("div",{staticClass:"pick-obstacles"},[a("div",{staticClass:"furniture"},[a("table",{staticClass:"furniture"},[a("tr",{on:{"!mouseenter":function(t){return t.stopPropagation(),e.itemOver(t,e.obstacles_info)}}},[a("th",[e._v("占地")]),e._v(" "),a("th",{staticClass:"name"},[e._v("障碍")]),e._v(" "),a("th",[e._v("数量")]),e._v(" "),a("th"),a("th")]),e._v(" "),e._l(e.obstacles,(function(t){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!t.hide,expression:"!it.hide"}],key:t.id,on:{"!mouseenter":function(a){return a.stopPropagation(),e.itemOver(a,t)}}},[a("td",{staticClass:"space"},[e._v(e._s(Math.abs(t.mod.space.max)))]),e._v(" "),[a("td",{staticClass:"name"},[e._v(e._s(t.name)+"("+e._s(e.useam(t.clean_need))+")")]),e._v(" "),a("td",{staticClass:"count"},[e._v(e._s(Math.round(10*t.value.valueOf())/10))])],e._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:!t.canclean()||t.value.valueOf()<1},on:{click:function(a){return e.emit("cleanobs",t)}}},[e._v("清理")])])],2)}))],2)])])],1)])};s._withStripped=!0;var n=a(2),i=a(23),o=a(26),c=a(19),l=a(17),r=a(32),h=a(196),d=a(42),u=a(3),v={props:["state"],mixins:[l.a,r.a],components:{slotpick:h.a,filterbox:d.a,hall:()=>a.e(8).then(a.bind(null,285))},data(){let e=i.a.getSubVars(u.l),t=i.a.getSubVars("furniture");return t.hide||(t.hide={}),{hide:t.hide,hallOpen:!1,showMaxed:!e.hasOwnProperty("showMaxed")||e.showMaxed,showOwned:!e.hasOwnProperty("showOwned")||e.showOwned,showUnowned:!e.hasOwnProperty("showUnowned")||e.showUnowned,showBlocked:!e.hasOwnProperty("showBlocked")||e.showBlocked,showHided:!e.hasOwnProperty("showHided")||e.showHided,filtered:null}},methods:{openHall(){this.hallOpen=!0},closeHall(){this.hallOpen=!1},useam:e=>Math.round(10*game.state.getData(e).valueOf())/10,searchIt(e,t){if(e.name.includes(t))return!0;if(e.tags){let a=e.tags;for(let e=a.length-1;e>=0;e--)if(a[e].includes(t))return!0}if(e.mod&&"object"==typeof e.mod)for(let a in e.mod)if(game.state.getData(a)&&"object"==typeof game.state.getData(a)&&game.state.getData(a).name.includes(t))return!0;return!1},fhideb(e){"true"!=e.fhide?e.fhide="true":e.fhide="false"}},computed:{obstacles(){return n.c.state.obstacles.filter(e=>!this.alocked(e))},obstacles_info:()=>n.c.state.getData("obstacles_info"),hallUnlocked:()=>n.c.state.getData("evt_hall")>0,hallName:()=>c.a.hall.name,chkShowMax:{get(){return this.showMaxed},set(e){this.showMaxed=i.a.setSubVar(u.l,"showMaxed",e)}},chkShowOwned:{get(){return this.showOwned},set(e){this.showOwned=i.a.setSubVar(u.l,"showOwned",e)}},chkShowUnowned:{get(){return this.showUnowned},set(e){this.showUnowned=i.a.setSubVar(u.l,"showUnowned",e)}},chkShowBlocked:{get(){return this.showBlocked},set(e){this.showBlocked=i.a.setSubVar(u.l,"showBlocked",e)}},chkShowHided:{get(){return this.showHided},set(e){this.showHided=i.a.setSubVar(u.l,"showHided",e)}},space(){return this.state.getData("space")},homesAvail(){return this.state.homes.filter(e=>!this.locked(e))},furniture(){let e=this.state;return e.filterItems(t=>"furniture"===t.type||e.typeCost(t.cost,"space")>0||e.typeCost(t.mod,"space")>0).sort(o.a)},viewable(){let e=this.showOwned,t=this.showUnowned,a=this.showBlocked,s=this.showMaxed,i=this.showHided;return this.furniture.filter(o=>!this.reslocked(o)&&(e||0==o.value)&&(a||o.canUse(n.c))&&(s||!o.maxed())&&(t||o.value>0)&&(i||"true"!=o.fhide))}}},w=(a(239),a(7)),p=Object(w.a)(v,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("空间")]),this._v(" "),t("th",{staticClass:"name"},[this._v("设施")]),this._v(" "),t("th",[this._v("已拥有")]),this._v(" "),t("th"),t("th")])}],!1,null,"1cd7013e",null);p.options.__file="src/ui/sections/home.vue";t.default=p.exports}}]);