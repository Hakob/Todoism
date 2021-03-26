webpackJsonp([1],{"+JuB":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("/5sW"),a=s("woOf"),i=s.n(a),o=s("mtWM"),r=s.n(o),l={name:"CreateTask",props:{value:{type:Array,required:!0}},data:function(){return{new_task:{status:"0",description:""}}},methods:{addTask:function(){var t=this;this.new_task.description&&(r()({method:"post",url:"https://"+window.location.hostname+"/tasks/",data:this.new_task}).then(function(e){var s={id:e.data.id,description:t.new_task.description,status:parseInt(t.new_task.status)};t.value.push(s),t.new_task.description="",t.new_task.status="0"}).catch(function(t){console.log(t)}),this.$emit("added"))},watch:{value:{handler:function(t,e){this.$emit("input",this.value)},deep:!0}}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-col",{attrs:{justify:"center"}},[s("el-row",[s("div",[t._v("Fill task's description and set the status")])]),t._v(" "),s("el-row",[s("el-input",{model:{value:t.new_task.description,callback:function(e){t.$set(t.new_task,"description",e)},expression:"new_task.description"}})],1),t._v(" "),s("el-row",[s("el-select",{attrs:{placeholder:"Select a status"},model:{value:t.new_task.status,callback:function(e){t.$set(t.new_task,"status",e)},expression:"new_task.status"}},[s("el-option",{attrs:{value:"0",label:"To Do"}}),t._v(" "),s("el-option",{attrs:{value:"1",label:"Done"}})],1)],1),t._v(" "),s("el-row",[s("el-button",{attrs:{icon:"el-icon-price-tag"},on:{click:t.addTask}})],1)],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(t){s("hkzf")},"data-v-b47f7518",null).exports,d={name:"ListTasks",props:{value:{type:Array,required:!0}},watch:{value:{handler:function(t,e){this.$emit("input",this.value)},deep:!0}},methods:{setStatus:function(t){for(var e="",s=0;s<this.value.length;s++)if(this.value[s].id===t){this.value[s].status=1,e=this.value[s].description;break}r()({method:"put",url:"https://"+window.location.hostname+"/tasks/"+t+"/",headers:{"Content-Type":"application/json"},data:{description:e,status:1}})},deleteByID:function(t){for(var e=0;e<this.value.length;e++){this.value[e].id===t&&this.value.splice(e,1)}},deleteTask:function(t){var e=this;r()({method:"delete",url:"https://"+window.location.hostname+"/tasks/"+t+"/",headers:{"Content-Type":"application/json"}}).then(function(s){204===s.status&&e.deleteByID(t)}).catch(function(t){console.log(t)})}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:12}},[s("h2",{staticClass:"subtitle"},[t._v("Todo")]),t._v(" "),s("div",{staticClass:"todo"},t._l(t.value,function(e){return 0===e.status?s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v("\n            "+t._s(e.description)+"\n          ")])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",on:{click:function(s){return t.setStatus(e.id)}}},[t._v("Done")])])]):t._e()}),0)]),t._v(" "),s("el-col",{attrs:{span:12}},[s("h2",{staticClass:"subtitle"},[t._v("Done")]),t._v(" "),s("div",{staticClass:"done"},t._l(t.value,function(e){return 1===e.status?s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v("\n            "+t._s(e.description)+"\n          ")]),t._v(" "),s("el-button",{attrs:{icon:"el-icon-delete-solid"},on:{click:function(s){return t.deleteTask(e.id)}}})],1)]):t._e()}),0)])],1)},staticRenderFns:[]};var v={name:"Main",components:{ListTasks:s("VU/8")(d,p,!1,function(t){s("+JuB")},"data-v-8496fb98",null).exports,CreateTask:u},data:function(){return{newTasks:!1,search:"",tasks:[],filteredTasks:[],description:"",status:0}},mounted:function(){this.getTasks()},methods:{getTasks:function(){var t=this;r()({method:"get",url:"https://"+window.location.hostname+"/tasks/"}).then(function(e){t.tasks=e.data,t.filteredTasks=i()([],t.tasks)})},updateTasks:function(t){this.tasks=t,this.reverseFin()},reverseFin:function(){this.newTasks=!this.newTasks},filterTasks:function(){var t=this;console.log(this.search),this.filteredTasks=i()([],this.tasks),this.filteredTasks=this.filteredTasks.filter(function(e){return!t.search||e.description.toLowerCase().includes(t.search.toLowerCase())}),console.log(this.filteredTasks)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-col",{attrs:{span:24}},[s("el-col",[s("el-row",[s("el-col",{attrs:{span:24,justify:"center"}},[s("h1",{staticClass:"title"},[t._v("Search It")])])],1),t._v(" "),s("el-row",[s("el-input",{attrs:{placeholder:"Type your keywords"},nativeOn:{keyup:function(e){return t.filterTasks(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),s("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:50}},[s("h3"),t._v(" "),s("hr"),t._v(" "),s("el-col",{attrs:{span:18}},[t.newTasks?t._e():s("div",[s("list-tasks",{attrs:{value:t.filteredTasks},on:{input:function(e){t.filteredTasks=e}}})],1),t._v(" "),t.newTasks?s("div",[s("create-task",{attrs:{value:t.tasks},on:{input:t.updateTasks,added:t.reverseFin}})],1):t._e()]),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{icon:t.newTasks?"el-icon-coin":"el-icon-plus",type:"success",plain:""},on:{click:t.reverseFin}})],1),t._v(" "),s("div")],1)],1)},staticRenderFns:[]};var f=s("VU/8")(v,h,!1,function(t){s("YPnW")},"data-v-3653529e",null).exports,k={components:{Main:f},name:"App"},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var w=s("VU/8")(k,_,!1,function(t){s("nfVk")},null,null).exports,m=s("/ocq");n.default.use(m.a);var T=new m.a({routes:[{path:"/",name:"Main",component:f},{path:"/add",name:"CreateTask",component:u}]}),C=s("zL8q"),y=s.n(C);n.default.use(y.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:T,render:function(t){return t(w)}})},YPnW:function(t,e){},hkzf:function(t,e){},nfVk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6daa764a9ffb2f643f1d.js.map