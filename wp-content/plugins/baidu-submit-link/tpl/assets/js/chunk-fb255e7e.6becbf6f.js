(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb255e7e"],{e464:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_frankshe_xk_code_wb_products_wp_content_plugins_baidu_submit_link_src_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("53ca"),_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("365c"),_vue_echarts_vue_echarts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("67fc"),_vue_echarts_vue_echarts__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_vue_echarts_vue_echarts__WEBPACK_IMPORTED_MODULE_2__),_common_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("5e9c"),storageName="WB_BSL_BASE";__webpack_exports__["a"]={name:"StatsBase",components:{"v-chart":_vue_echarts_vue_echarts__WEBPACK_IMPORTED_MODULE_2___default.a},data:function(){var _=this;return{is_loaded:0,is_pro:_.$cnf.is_pro,overview:[],day:7,chart_cnf:{},wb_idx_data_updated:"-"}},created:function(){this.load_data()},mounted:function(){var _=this;_.collectionOverview(7)},methods:{load_data:function(){var _=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this;e.log_loading=wbui.loading();var t=Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["b"])(storageName,!0),a=t.data;if(!_&&!Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["e"])(t.ver)&&a)return e.overview=a.overview,e.wb_idx_data_updated=a.wb_idx_data_updated,e.is_loaded=1,void wbui.close(e.log_loading);Object(_api__WEBPACK_IMPORTED_MODULE_1__["b"])({action:e.$cnf.action.act,op:"get_stats"}).then((function(_){var t=_["data"];e.overview=t.base_overview,e.wb_idx_data_updated=t.wb_idx_data_updated,e.is_loaded=1,wbui.close(e.log_loading),a=Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["b"])(storageName)||{},a.overview=t.base_overview,a.wb_idx_data_updated=t.wb_idx_data_updated,Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["d"])(storageName,a)}))},aboutPro:function(){this.$router.push({path:"/pro"})},overviewData:function(_,e){var t=_||30,a=this,n=[[],[],[],[]],o=Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["b"])(storageName)||{};return o["overview_chart_"+t]?(e&&e(o["overview_chart_"+t]),o["overview_chart_"+t]):(Object(_api__WEBPACK_IMPORTED_MODULE_1__["a"])({action:a.$cnf.action.act,op:"index_stat",day:t}).then((function(_){n=_["data"]?_["data"]:n,e&&e(n),o=Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["b"])(storageName)||{},o["overview_chart_"+t]=n,Object(_common_base__WEBPACK_IMPORTED_MODULE_3__["d"])(storageName,o)})).catch((function(){n[0]=a.zeroData(t),n[1]=a.zeroData(t),n[2]=a.zeroData(t),n[3]=a.zeroData(t),e&&e(n)})),n)},collectionOverview:function(_){var e=this,t=_||7;e.day=_;var a=e.dateXAxis(t);e.overviewData(t,(function(_){if(e.is_pro)e.chart_cnf=Object.assign({},e.$echart_cnf),e.chart_cnf.grid={show:!0,left:"left",containLabel:!0,top:20,right:20,bottom:80,backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(255,255,255,0"},e.chart_cnf.xAxis.data=a,e.chart_cnf.series=[{name:"整站收录",data:_[0],type:"line",smooth:!0},{name:"新增收录",data:_[1],type:"line",smooth:!0},{name:"未收录文章",data:_[2],type:"line",smooth:!0},{name:"文章收录",data:_[3],type:"line",smooth:!0}];else{var n=e.zeroData(t);e.chart_cnf=Object.assign({},e.$echart_cnf),e.chart_cnf.xAxis.data=a,e.chart_cnf.grid={show:!0,left:"left",containLabel:!0,top:20,right:20,bottom:80,backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"rgba(255,255,255,0"},e.chart_cnf.series=[{name:"整站收录",data:_[0],type:"line",smooth:!0},{name:"新增收录",data:_[1],type:"line",smooth:!0},{name:"未收录文章 Pro",data:n,type:"line",smooth:!0},{name:"文章收录 Pro",data:n,type:"line",smooth:!0}]}}))},dataExtend:function dataExtend(obj,cnf){var vm=this,def_cnf=JSON.stringify(vm.$echart_cnf,(function(_,e){return"function"===typeof e?e+"":e}));def_cnf=JSON.parse(def_cnf,(function(k,v){return v.indexOf&&v.indexOf("function")>-1?eval("(function(){return "+v+" })()"):v}));var newobj=cnf&&"object"===Object(_Users_frankshe_xk_code_wb_products_wp_content_plugins_baidu_submit_link_src_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(cnf)?cnf:def_cnf;for(var i in obj)"object"===Object(_Users_frankshe_xk_code_wb_products_wp_content_plugins_baidu_submit_link_src_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(newobj[i])?newobj[i]=vm.dataExtend(obj[i],newobj[i]):newobj[i]=obj[i];return newobj},update_index_data:function(){var _=this;Object(_api__WEBPACK_IMPORTED_MODULE_1__["c"])({action:_.$cnf.action.act,op:"update_index_data"}).then((function(_){sessionStorage.clear(),window.location.reload()}))},dateXAxis:function(_){if(!_)return!1;for(var e=[],t=(new Date).getTime(),a=new Date,n="",o=0;o<_;o++)a.setTime(t-864e5*o),n=a.getMonth()<9?"0"+(a.getMonth()+1)+"-":a.getMonth()+1+"-",a.getDate()<10?n+="0"+a.getDate():n+=a.getDate(),e.unshift(n);return e},zeroData:function(_){for(var e=_||30,t=[],a=0;a<e;a++)t.push(0);return t}}}},e901:function(_,e,t){"use strict";t.r(e);var a=function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{staticClass:"sc-wp overview-with-charts wbs-main"},[t("h3",{staticClass:"sc-header ov-header"},[t("div",{staticClass:"ov-ctrl"},[t("span",[_._v("最后更新："+_._s(_.wb_idx_data_updated))]),_._v(" "),t("a",{staticClass:"btn-with-svg",attrs:{onclick:"this.classList.add('active');"},on:{click:function(e){return _.update_index_data()}}},[t("svg",{staticClass:"wb-icon sico-update"},[t("use",{attrs:{"xlink:href":"#sico-update"}})]),_._v(" "),t("span",[_._v("手动更新")])])]),t("strong",[_._v("收录概况")])]),t("div",{staticClass:"data-overview"},_._l(_.overview,(function(e){return t("div",{key:e.name,staticClass:"ao-it"},[t("dl",[t("dt",{staticClass:"it-name"},[_._v(_._s(e.name))]),t("dd",{staticClass:"it-value"},[_._v(_._s(e.value))])])])})),0),t("div",{staticClass:"overview-charts"},[t("div",{staticClass:"tab-nav"},[t("a",{staticClass:"tn-item",class:{current:7==_.day},on:{click:function(e){return _.collectionOverview(7)}}},[_._v("近7天")]),t("a",{staticClass:"tn-item",class:{current:30==_.day},on:{click:function(e){return _.collectionOverview(30)}}},[_._v("近30天")])]),t("v-chart",{staticClass:"charts-box",attrs:{options:_.chart_cnf}})],1),t("dl",{staticClass:"description mt"},[t("dt",[_._v("温馨提示：")]),_.is_pro?_._e():t("dd",[t("b",[_._v("文章收录数据统计")]),_._v("仅 "),t("a",{staticClass:"link",staticStyle:{cursor:"pointer"},on:{click:_.aboutPro}},[_._v("Pro版本")]),_._v("支持。")]),_._m(0),t("dd",[_._v("百度收录数据可能与百度搜索引擎查询有一定的差异，这跟不同地域不同客户端不同时间等因素搜索有关。")]),_._m(1)])])},n=[function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("dd",[t("b",[_._v("整站收录数据为估算值")]),_._v("，本地查询数据每6小时更新一次，API查询数据每天更新一次。网站管理员如需了解更准确的索引量，请使用百度站长平台。")])},function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("dd",[t("b",[_._v("整站收录概况查询提示“请求返回【没有找到数据】”或者数据异常")]),_._v("，这是由于百度防爬虫机制导致。")])}],o=t("e464"),i=o["a"],c=t("2877"),r=Object(c["a"])(i,a,n,!1,null,null,null);e["default"]=r.exports}}]);