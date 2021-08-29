(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09720c65"],{"0b6e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sc-wp wbs-main"},[e("div",{staticClass:"log-box"},[e("el-table",{staticClass:"wbs-table",staticStyle:{width:"100%"},attrs:{data:t.sp_404_url},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{label:"URL地址","class-name":"w35"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"url"},[e("a",{attrs:{"data-label":"URL: ",href:a.row.url,target:"_blank"}},[e("span",[t._v(t._s(a.row.url))])])])]}}])}),e("el-table-column",{attrs:{label:"响应码状态","class-name":"w15"},scopedSlots:t._u([{key:"header",fn:function(a){return[e("span",{staticClass:"ib"},[t._v("响应码状态")]),e("el-tooltip",{staticClass:"wbui-tooltip",attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("列表404状态URL为蜘蛛分析插件数据，对伪蜘蛛访问数据应该标记为忽略。")]),e("div",{staticClass:"wbui-tooltip"},[e("svg",{staticClass:"wb-icon sico-qa"},[e("use",{attrs:{"xlink:href":"#sico-qa"}})])])])]}},{key:"default",fn:function(a){return[e("div",{staticClass:"data-label",attrs:{"data-label":"响应码: "}},[t._v(t._s(a.row.code))])]}}])}),e("el-table-column",{attrs:{label:"检测时间","class-name":"w15"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"data-label",attrs:{"data-label":"检测时间: "}},[t._v(t._s(a.row.visit_date))])]}}])}),e("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{plain:"",size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:function(e){return t.check_404_url(a.row)}}},[t._v("刷新状态")]),e("el-button",{attrs:{size:"mini",type:"danger",plain:"",icon:"el-icon-remove"},on:{click:function(e){return t.del_404_url(a.row)}}},[t._v("忽略")])]}}])})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"btns-bar with-ctrl-area"},[e("div",{staticClass:"wb-ctrl-area"},[e("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.batch_op,callback:function(a){t.batch_op=a},expression:"batch_op"}},[e("el-option",{attrs:{label:"刷新状态",value:"check"}}),e("el-option",{attrs:{label:"忽略",value:"del"}})],1),e("el-button",{staticClass:"ml-s",attrs:{type:"info",plain:"",size:"small"},on:{click:t.batch_apply}},[t._v("应用")])],1),e("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-size":t.num,"page-sizes":[10,30,50,100],total:1*t.total},on:{"size-change":t.handleSizeChange,"current-change":t.nav_page}})],1),t.is_loaded&&t.total?e("div",{staticClass:"mt"},[e("input",{staticClass:"wbs-input",staticStyle:{opacity:"0"},attrs:{id:"wb_bdsl_404-url","data-max":"180",type:"text",placeholder:""},domProps:{value:t.home_url("/404-list.txt")}}),e("span",{staticClass:"ib vam"},[e("b",[t._v("清单文件")]),t._v("："+t._s(t.home_url("/404-list.txt")))]),e("el-button",{staticClass:"ml",attrs:{icon:"el-icon-copy-document",plain:"",size:"mini"},on:{click:t.copy_list}},[t._v("复制")])],1):t._e(),t._m(0),t.bsl_data.spider_install&&t.bsl_data.spider_active?t._e():e("div",{staticClass:"getpro-mask"},[e("div",{staticClass:"mask-inner"},[t.bsl_data.spider_install?t._e():e("div",{staticClass:"tips"},[e("p",[t._v("* 当前功能依赖Spider Analyser-蜘蛛分析插件。")]),e("div",{staticClass:"wb-hl mt"},[e("svg",{staticClass:"wb-icon wbsico-notice"},[e("use",{attrs:{"xlink:href":"#wbsico-notice"}})]),e("span",{staticClass:"ml"},[t._v("未检测到安装，去")]),e("a",{staticClass:"link",attrs:{href:t.bsl_data.spider_setup_url}},[t._v("安装")])])]),t.bsl_data.spider_active?t._e():e("div",{staticClass:"tips"},[e("p",[t._v("* 当前功能依赖Spider Analyser-蜘蛛分析插件。")]),e("div",{staticClass:"wb-hl mt"},[e("svg",{staticClass:"wb-icon wbsico-notice"},[e("use",{attrs:{"xlink:href":"#wbsico-notice"}})]),e("span",[t._v("检测到未启用，去")]),e("a",{staticClass:"link",attrs:{href:t.bsl_data.spider_setup_url}},[t._v("启用")])])])])])],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("dl",{staticClass:"description mt"},[e("dt",[t._v("温馨提示：")]),e("dd",[t._v("网站存在大量死链，将影响网站的站点评级，应及时处理网站死链。")]),e("dd",[t._v("如死链有可替代页面内容，建议采用301永久跳转方式对死链进行处理，"),e("a",{staticClass:"link",attrs:{target:"_blank","data-wba-campaign":"Setting-Des-txt",href:"https://www.wbolt.com/how-to-fix-404-error-in-wordpress.html"}},[t._v("参考教程")]),t._v("。")]),e("dd",[t._v("如死链无可替代页面内容，则应复制死链清单链接，然后登录"),e("a",{staticClass:"link",attrs:{target:"_blank",href:"https://ziyuan.baidu.com/"}},[t._v("百度搜索资源平台")]),t._v("进行死链提交。")]),e("dd",[e("a",{staticClass:"link",attrs:{target:"_blank",href:"http://zhanzhang.so.com/"}},[t._v("360站长平台")]),t._v("、"),e("a",{staticClass:"link",attrs:{target:"_blank",href:"https://zhanzhang.toutiao.com/"}},[t._v("头条搜索站长平台")]),t._v("和"),e("a",{staticClass:"link",attrs:{target:"_blank",href:"https://zhanzhang.sm.cn/"}},[t._v("神马站长平台")]),t._v("也提供死链提交支持。")]),e("dd",[t._v("此死链检测仅检测网站内部链接。")])])}],l=(e("a15b"),e("159b"),e("365c")),n=e("5e9c"),o="WB_BSL_USER_OPT_"+window.uid,c={name:"Stats404",data:function(){var t=this;return{is_loaded:0,bsl_data:t.$cnf.bsl_data,sp_404_url:[],loadmore:1,loading_data:-1,list:[],num:10,total:0,page:1,batch_op:""}},created:function(){},mounted:function(){var t=this,a=Object(n["a"])(o)||{};t.num=a["PAGE_SIZE"]||10,t.load_data()},computed:{},filters:{},methods:{load_data:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this,e=a.num||10;a.showLoading();var s="WB_BSL_STATS_404",i=Object(n["b"])(s,!0),o=i.data;if(!t&&!Object(n["e"])(i.ver)&&o&&o.num==a.num&&o.sp_404_url[a.page])return a.sp_404_url=o.sp_404_url[a.page],a.total=o.total,a.closeLoading(),void(a.is_loaded=1);Object(l["b"])({action:a.$cnf.action.act,op:"sp_404_url",num:e,page:a.page}).then((function(t){a.sp_404_url=t.data,a.total=t.total,a.closeLoading(),a.is_loaded=1,o=Object(n["b"])(s)||{sp_404_url:{}},o.sp_404_url[a.page]=a.sp_404_url,o.total=a.total,o.num=e,Object(n["d"])(s,o)})).catch((function(){a.closeLoading()}))},chk_selectable:function(t,a){return a%2},handleSizeChange:function(t){var a=Object(n["a"])(o)||{},e=this;e.page=1,e.num=t,a["PAGE_SIZE"]=t,Object(n["c"])(o,a),sessionStorage.clear(),e.load_data()},handleSelectionChange:function(t){this.multipleSelection=t},p_bd:function(){var t=h(".check-column :checkbox:checked");if(t.length<1)return!1;var a=[];t.each((function(t,e){a.push(e.value)})),h.post(ajaxurl,{action:"wb_baidu_push_url",op:"batch_bd",post_id:a.join(",")},(function(t){alert("推送成功")}))},batch_apply:function(){var t=this;if(!t.batch_op)return!1;if(t.multipleSelection.length<1)return wbui.toast("未选择项目"),!1;if("del"==t.batch_op){var a=[];if(t.multipleSelection.forEach((function(t){a.push(t.url)})),a.length<1)return;wbui.confirm("确认忽略所选？",(function(){Object(l["b"])({action:t.$cnf.action.act,op:"del_404_url",url:a}).then((function(a){wbui.toast("已忽略"),t.sp_404_url=[],t.loadmore=1,sessionStorage.removeItem("WB_BSL_STATS_404"),t.load_data(!0)}))}))}else if("check"==t.batch_op){var e=[],s=[],i=[];if(t.multipleSelection.forEach((function(t){e.push(t.url),s.push(t.id),i.push(t)})),e.length<1)return;Object(l["b"])({action:t.$cnf.action.act,op:"check_404_url",url:e,id:s}).then((function(t){wbui.toast(t.desc),t.code||t.result&&(sessionStorage.removeItem("WB_BSL_STATS_404"),t.result.forEach((function(t,a){t.code||(i[a].code=t.data.code,i[a].visit_date=t.data.visit_date)})))}))}return!1},aboutPro:function(){this.$router.push({path:"/pro"})},showLoading:function(){var t=this;wbui.close(t.loading_data),t.loading_data=wbui.loading()},closeLoading:function(){var t=this;wbui.close(t.loading_data),t.loading_data=-1},check_404_url:function(t){var a=this;Object(l["b"])({action:a.$cnf.action.act,op:"check_404_url",url:t.url,id:t.id}).then((function(a){wbui.toast(a.desc),a.code||(sessionStorage.removeItem("WB_BSL_STATS_404"),t.code=a.data.code,t.visit_date=a.data.visit_date)}))},del_404_url:function(t){var a=this;wbui.confirm("确认忽略？",(function(){Object(l["b"])({action:a.$cnf.action.act,op:"del_404_url",url:t.url,id:t.id}).then((function(t){wbui.toast("已忽略"),a.sp_404_url=[],a.loadmore=1,sessionStorage.removeItem("WB_BSL_STATS_404"),a.load_data(!0)}))}))},home_url:function(t){return this.$cnf.home_url+t},copy_list:function(){var t=this.$el.querySelector("#wb_bdsl_404-url");t.focus(),t.select(),document.execCommand("Copy"),wbui.toast("已复制")},nav_page:function(t){var a=this;a.page=t,a.load_data()}}},r=c,u=e("2877"),_=Object(u["a"])(r,s,i,!1,null,null,null);a["default"]=_.exports},a15b:function(t,a,e){"use strict";var s=e("23e7"),i=e("44ad"),l=e("fc6a"),n=e("a640"),o=[].join,c=i!=Object,r=n("join",",");s({target:"Array",proto:!0,forced:c||!r},{join:function(t){return o.call(l(this),void 0===t?",":t)}})}}]);