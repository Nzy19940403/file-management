webpackJsonp([1],{"1uuo":function(n,t){},"7zck":function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW");e("ixpg");function i(n){var t,e=(t=n,{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[Object.prototype.toString.call(t)]),o=void 0;if("array"===e)o=[];else{if("object"!==e)return n;o={}}if("array"===e)for(var a=0;a<n.length;a++)o.push(i(n[a]));else if("object"===e)for(var r in n)o[r]=i(n[r]);return o}function a(n,t){for(var e=null,o=0;o<n.length;o++)if(null!=n[o]){if(null!=e)return e;if(n[o].cardinfo.name==t)return n[o];n[o].cardinfo.children&&(e=a(n[o].cardinfo.children,t))}return e}var r=e("DAYN"),c=e.n(r),d={name:"iconbox",props:{data:Object},computed:{info:function(){return this.data}}},s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{staticClass:"card-icon-wrapper"},[t("i",{class:this.info.icon})]),this._v(" "),t("div",{staticClass:"card-title-wrapper"},[this._v(this._s(this.info.name))])])},staticRenderFns:[]};var l=e("VU/8")(d,s,!1,function(n){e("wMId")},"data-v-e9eef844",null).exports,f={name:"dndbox",components:{draggable:c.a,box:l},data:function(){return{isexist:!0,dropnum:"",dragnum:""}},props:{data:Object,index:Number},computed:{info:{get:function(){return[this.data]},set:function(){}}},methods:{handleadd:function(n){n.item.__vue__.$children[0];this.dropnum=n.target.parentElement.__vue__.index,this.$emit("mydrop",this.dropnum)},handleremove:function(n){this.dragnum=n.target.parentElement.__vue__.index,this.$emit("mydrag",this.dragnum),this.isexist=!1},allowMoveAndDrop:function(n,t){return 1==n.to.parentElement.__vue__.data.cardinfo.allowdrop}}},u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isexist?e("div",{staticClass:"box"},[e("draggable",{attrs:{options:{group:{name:"people",pull:!0,put:!0},sort:!1},move:n.allowMoveAndDrop},on:{add:n.handleadd,remove:n.handleremove},model:{value:n.info,callback:function(t){n.info=t},expression:"info"}},[e("el-card",{attrs:{shadow:"hover"}},[e("box",{attrs:{data:n.data.cardinfo}})],1)],1)],1):n._e()},staticRenderFns:[]};var h={name:"dndwrap",components:{dndbox:e("VU/8")(f,u,!1,function(n){e("TOkP")},"data-v-08c4ae10",null).exports},data:function(){return{isboxexist:!0,dragnum:"",dropnum:"",currentMovingItem:0,envData:null}},props:{data:[Object,Array]},mounted:function(){this.envData=i(this.data)},methods:{catchdragnum:function(n){this.dragnum=n},catchdropnum:function(n){var t=this;this.$nextTick(function(){t.mydata[n].cardinfo.children.push(t.mydata[t.dragnum]),t.mydata.splice(t.dragnum,1,null)}),this.dropnum=n},openDetail:function(n){var t=n;this.$emit("opendetail",this.mydata[this.dropnum],this.mydata[this.dragnum],t,this.envData)}},computed:{mydata:{get:function(){return this.data},set:function(){}},itemexist:function(n){return function(n){return!!n}}},watch:{}},p={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card-wrap"},n._l(n.mydata,function(t,o){return n.itemexist(t)?e("dndbox",{key:o+1,attrs:{index:o,data:t},on:{mydrag:n.catchdragnum,mydrop:n.catchdropnum},nativeOn:{dblclick:function(t){n.openDetail(o)}}}):n._e()}))},staticRenderFns:[]};var m={name:"dnd",components:{dndwrap:e("VU/8")(h,p,!1,function(n){e("aRJ2")},"data-v-da4078a4",null).exports},props:{data:[Object,Array]},data:function(){return{isshow:!1,currentData:this.data,detailDialog:null,envdata:null,navbtn:["文件管理"],activebtn:"文件管理",testfunc:null}},mounted:function(){this.envdata=i(this.data)},computed:{},methods:{openDetailDialog:function(n,t,e,o){this.isshow=!0;var i=this.currentData[e].cardinfo.name;this.activebtn=i,this.navbtn.indexOf(this.activebtn)<0&&this.navbtn.push(i),2==this.navbtn.length&&(this.testfunc=this.currentData[e]),this.currentData=this.currentData[e].cardinfo.children},back:function(){var n=this.navbtn.indexOf(this.activebtn);if(n>0&&this.navbtn.splice(n,1),this.activebtn=this.navbtn[n-1],1==n||0==n)this.navbtn=["文件管理"],this.activeindex=0,this.activebtn="文件管理",this.currentData=this.data,this.testfunc=null,this.testfunc=null;else{console.log(this.data);var t=a([this.testfunc],this.activebtn);this.currentData=t.cardinfo.children}},handleclick:function(n){var t=this.navbtn.indexOf(n.item);0==t?(this.navbtn=["文件管理"],this.activeindex=0,this.activebtn="文件管理",this.currentData=this.data,this.testfunc=null):(this.activebtn=this.navbtn[t],t!=this.navbtn.length&&this.navbtn.splice(t+1,this.navbtn.length-t-1),this.handleactiveByName(this.activebtn))},handleactiveByName:function(n){var t=a([this.testfunc],n);this.currentData=t.cardinfo.children}}},v={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"card-toolbar"},[e("div",[e("v-breadcrumbs",{attrs:{items:n.navbtn},scopedSlots:n._u([{key:"item",fn:function(t){return[e("v-btn",{attrs:{round:""},on:{click:function(e){n.handleclick(t)}}},[n._v(n._s(t.item))])]}}])})],1)]),n._v(" "),e("dndwrap",{attrs:{data:n.currentData},on:{opendetail:n.openDetailDialog}}),n._v(" "),e("v-btn",{attrs:{block:"",color:"secondary",dark:""},on:{click:n.back}},[n._v("后退")])],1)},staticRenderFns:[]};var b={name:"App",components:{dnd:e("VU/8")(m,v,!1,function(n){e("s901")},"data-v-3ac0234a",null).exports},data:function(){return{mydata:[{cardinfo:{name:"卫勤保障",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"卫勤保障",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"军医职责",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"军医职责",editdate:"2018-10-11",type:"文件夹",size:"393k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"舰艇军医(卫生主任)职责",icon:"iconfont icon-doc",allowdrop:!1,children:[]},tableinfo:{name:"舰艇军医(卫生主任)职责",editdate:"2018-10-07",type:"word",size:"73k",keywords:"卫勤保障、军医职责",icon:"iconfont icon-doc"}},{cardinfo:{name:"门诊伤病员登记",icon:"iconfont icon-excel1",allowdrop:!1,children:[]},tableinfo:{name:"门诊伤病员登记",editdate:"2018-10-07",type:"excel",size:"63k",keywords:"门诊伤病、病员登记",icon:"iconfont icon-excel1"}},{cardinfo:{name:"海上卫生防疫方案",icon:"iconfont icon-pdf",allowdrop:!1,children:[]},tableinfo:{name:"海上卫生防疫方案",editdate:"2018-10-07",type:"pdf",size:"573k",keywords:"",icon:"iconfont icon-pdf"}},{cardinfo:{name:"测试1",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"测试1",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"测试2",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"测试2",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"测试3",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"测试3",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"成都",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"成都",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"上海",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"上海",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"北京",icon:"iconfont icon-doc",allowdrop:!1,children:[]},tableinfo:{name:"北京",editdate:"2018-10-07",type:"word",size:"73k",keywords:"卫勤保障、军医职责",icon:"iconfont icon-doc"}},{cardinfo:{name:"启东",icon:"iconfont icon-excel1",allowdrop:!1,children:[]},tableinfo:{name:"启东",editdate:"2018-10-07",type:"excel",size:"63k",keywords:"门诊伤病、病员登记",icon:"iconfont icon-excel1"}},{cardinfo:{name:"天津",icon:"iconfont icon-pdf",allowdrop:!1,children:[]},tableinfo:{name:"天津",editdate:"2018-10-07",type:"pdf",size:"573k",keywords:"",icon:"iconfont icon-pdf"}},{cardinfo:{name:"杭州",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"杭州",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"杨浦区",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"杨浦区",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"闵行区",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"闵行区",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"虹口区",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"虹口区",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"黄浦区",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"黄浦区",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"扬州",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"扬州",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}},{cardinfo:{name:"微信",icon:"iconfont icon-floder",allowdrop:!0,children:[]},tableinfo:{name:"微信",editdate:"2018-10-11",type:"文件夹",size:"293k",keywords:"",icon:"iconfont icon-floder"}}]}}},_={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("v-app",[t("dnd",{attrs:{data:this.mydata}})],1)],1)},staticRenderFns:[]};var k=e("VU/8")(b,_,!1,function(n){e("VuXq")},null,null).exports,y=e("/ocq"),w={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[n._v(n._s(n.msg))]),n._v(" "),e("h2",[n._v("Essential Links")]),n._v(" "),n._m(0),n._v(" "),e("h2",[n._v("Ecosystem")]),n._v(" "),n._m(1)])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[n._v("\n        Core Docs\n      ")])]),n._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[n._v("\n        Forum\n      ")])]),n._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[n._v("\n        Community Chat\n      ")])]),n._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[n._v("\n        Twitter\n      ")])]),n._v(" "),e("br"),n._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[n._v("\n        Docs for This Template\n      ")])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var g=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},w,!1,function(n){e("1uuo")},"data-v-d8ec41bc",null).exports;o.default.use(y.a);new y.a({routes:[{path:"/",name:"HelloWorld",component:g}]});var x=e("3EgV"),j=e.n(x),D=(e("7zck"),e("zL8q")),z=e.n(D);e("tvR6");o.default.use(z.a),o.default.use(j.a),o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:k},template:"<App/>"})},TOkP:function(n,t){},VuXq:function(n,t){},aRJ2:function(n,t){},ixpg:function(n,t){},s901:function(n,t){},tvR6:function(n,t){},wMId:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.4e476defee6b188b3f4d.js.map