(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{230:function(t,e,r){var content=r(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("a9969dde",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("6a2ac015",content,!0,{sourceMap:!1})},238:function(t,e,r){"use strict";var o=r(230);r.n(o).a},239:function(t,e,r){(e=r(6)(!1)).push([t.i,"a[data-v-2d7b8c27]{text-decoration:none}",""]),t.exports=e},240:function(t,e,r){"use strict";var o=r(231);r.n(o).a},241:function(t,e,r){(e=r(6)(!1)).push([t.i,".fa-exclamation-triangle[data-v-ea96f2b2],.w3-spin[data-v-ea96f2b2]{font-size:80px!important}.views[data-v-ea96f2b2]{top:10px;right:10px;position:absolute;background:#9c27b0;color:#fff;padding-left:6px;padding-right:6px;border-radius:32px;text-align:center}.proj-image[data-v-ea96f2b2]{min-height:250px;max-height:250px;-o-object-fit:cover;object-fit:cover;width:100%}.container[data-v-ea96f2b2]{position:relative;max-width:800px;margin:0 auto;background:linear-gradient(#9c27b0,#111)}.container img[data-v-ea96f2b2]{vertical-align:middle;transition:.3s;width:100%;border-radius:15px}.container img[data-v-ea96f2b2]:hover{opacity:.5}.container .content[data-v-ea96f2b2]{position:absolute;bottom:0;background:#000;background:#9c27b0;color:#f1f1f1;width:100%;padding:5px;transition:.3s;border-radius:0 0 14px 14px}.container .content h4[data-v-ea96f2b2]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@media (max-width:425px){.w3-container[data-v-ea96f2b2]{padding:0!important}}",""]),t.exports=e},261:function(t,e,r){"use strict";r.r(e);r(17);var o=r(3),n=(r(27),r(34),r(48),r(95),{props:{actualNumber:{type:Number},pageNumber:{type:Number,default:0}},data:function(){return{q:""}},computed:{max:function(){var t=this.actualNumber/12;return Math.floor(t)},previousLink:function(){var link={query:{page:this.pageNumber-1}};return this.$route.query.q&&(link.query.q=this.$route.query.q),this.$route.query.category&&(link.query.category=this.$route.query.category),link},nextLink:function(){var link={query:{page:this.pageNumber+1}};return this.$route.query.q&&(link.query.q=this.$route.query.q),this.$route.query.category&&(link.query.category=this.$route.query.category),link}},methods:{goPrevious:function(){this.$scrollTo("#projects",0,{force:!0}),this.$router.push(this.previousLink)},goNext:function(){this.$scrollTo("#projects",0,{force:!0}),this.$router.push(this.nextLink)}}}),c=(r(238),r(2)),d={transition:"page",components:{ProjectsPaginator:Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.actualNumber>12,expression:"actualNumber > 12"}]},[r("div",{staticClass:"w3-container w3-center w3-margin-bottom"},[r("span",{staticClass:"step-links"},[0!=t.pageNumber?r("button",{staticClass:"w3-button w3-purple w3-hover-pink w3-round-xxlarge",on:{click:function(e){return t.goPrevious()}}},[r("i",{staticClass:"fa fa-chevron-left"})]):r("span",{staticClass:"w3-button w3-gray w3-hover-pink w3-round-xxlarge"},[r("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),r("span",[t._v(t._s(t.pageNumber+1)+" of "+t._s(t.max+1))]),t._v(" "),t.pageNumber!=t.max?r("button",{staticClass:"w3-button w3-purple w3-hover-pink w3-round-xxlarge",staticStyle:{"text-decoration":"none"},on:{click:function(e){return t.goNext()}}},[r("i",{staticClass:"fa fa-chevron-right"})]):r("span",{staticClass:"w3-button w3-gray w3-hover-pink w3-round-xxlarge"},[r("i",{staticClass:"fa fa-chevron-right"})])])])])}),[],!1,null,"2d7b8c27",null).exports},props:["projects"],data:function(){return{moddedProjects:[],size:12,pageCount:0,foundNone:!1}},computed:{title:function(){return this.$route.query.category?this.$route.query.category.toUpperCase()+"S of Denniel Luis Sadian":"Portfolio of Denniel Luis Sadian"},description:function(){return this.$route.query.category?"These are the ".concat(this.$route.query.category,"s of Denniel."):"He has created ".concat(this.projects.length," programs. Some of them are funny.")},page:function(){var t=0;return this.$route.query.page&&(t=Number(this.$route.query.page)),t},pagedProjects:function(){var t=this.page*this.size,e=t+this.size;return this.moddedProjects.slice(t,e)}},watch:{$route:function(t){this.moddedProjects=[],this.getProjects(t.query.category,t.query.q)}},methods:{getProjects:function(t,q){q?(this.moddedProjects=this.projects.filter((function(p){return p.name.toLowerCase().includes(q.toLowerCase())})),1==this.moddedProjects.length?this.$router.push({path:"/portfolio/project/"+this.moddedProjects[0].id,query:{category:this.moddedProjects[0].category}}):this.foundNone=!0):this.moddedProjects=t?this.projects.filter((function(p){return p.category==t})):this.projects}},mounted:function(){this.getProjects(this.$route.query.category,this.$route.query.q)},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter-title",name:"twitter:title",content:this.title},{hid:"twitter-desc",name:"twitter:description",content:this.description}]}}},l=(r(240),Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"projects"}},[t.moddedProjects.length?r("div",[r("h3",{staticClass:"w3-text-purple"},[t._v("\n      Total of\n      "),r("span",{staticClass:"w3-tag w3-round-xxlarge w3-purple w3-circle"},[t._v(t._s(t.moddedProjects.length))])]),t._v(" "),t._l(t.pagedProjects,(function(p){return r("div",{key:p.id,staticClass:"animated fadeIn w3-col l4 m6 w3-container w3-margin-top w3-margin-bottom"},[r("div",{staticClass:"container w3-hover-shadow w3-border w3-border-purple w3-round-xlarge",on:{click:function(e){return t.$router.push({path:"/portfolio/project/"+p.id,query:{category:p.category}})}}},[r("img",{staticClass:"w3-image proj-image",attrs:{src:p.image,alt:p.name}}),t._v(" "),r("div",{staticClass:"views w3-card-4"},[r("i",{staticClass:"fa fa-eye"}),t._v(" "+t._s(p.views)+"\n        ")]),t._v(" "),r("div",{staticClass:"content",attrs:{title:p.name}},[r("h4",[t._v(t._s(p.name))]),t._v(" "),r("p",{staticClass:"w3-small"},[t._v("\n            "+t._s(new Date(p.date_created).toDateString())+"\n          ")])])])])})),t._v(" "),r("projects-paginator",{attrs:{actualNumber:t.moddedProjects.length,pageNumber:t.page}})],2):r("div",{staticClass:"w3-center w3-text-red w3-padding w3-margin animated bounceIn"},[t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("i",{staticClass:"fa fa-exclamation-triangle"}),this._v(" "),e("br"),this._v("Sorry, I found none.\n    ")])}],!1,null,"ea96f2b2",null).exports),h=r(14),f=r.n(h),m={layout:"portfolio",components:{Projects:l},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://denniel.herokuapp.com/api/projects/");case 2:return e=t.sent,data=e.data,t.abrupt("return",{projects:data});case 5:case"end":return t.stop()}}),t)})))()}},v=Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Projects",{attrs:{projects:this.projects}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);