(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{232:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("0acb3ef4",content,!0,{sourceMap:!1})},242:function(t,e,r){"use strict";var n=r(232);r.n(n).a},243:function(t,e,r){var n=r(6),o=r(47),d=r(244);e=n(!1);var c=o(d);e.push([t.i,"#about-header[data-v-36ad573f]{background:url("+c+');background-size:cover;background-position:50%;border-radius:4px 32px 0 0}.timeline[data-v-36ad573f]{position:relative;max-width:1200px;margin:0 auto}.timeline[data-v-36ad573f]:after{content:"";position:absolute;width:6px;background-color:#9c27b0;top:0;bottom:0;left:50%;margin-left:-3px}.timeline-container[data-v-36ad573f]{padding:10px 40px;position:relative;background-color:inherit;width:50%}.timeline-container[data-v-36ad573f]:after{content:"";position:absolute;width:25px;height:25px;right:-12px;background-color:#fff;border:6px solid #9c27b0;top:18px;border-radius:50%;z-index:1}.left[data-v-36ad573f]{left:0}.right[data-v-36ad573f]{left:50%}.left[data-v-36ad573f]:before{right:30px;border:solid transparent;border-left:solid #9c27b0;border-width:10px 0 10px 10px}.left[data-v-36ad573f]:before,.right[data-v-36ad573f]:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1}.right[data-v-36ad573f]:before{left:30px;border:solid transparent;border-right:solid #9c27b0;border-width:10px 10px 10px 0}.right[data-v-36ad573f]:after{left:-13px}.timeline-content[data-v-36ad573f]{padding:10px;background-color:#fff;position:relative;border-radius:8px;text-align:justify}.timeline-content img[data-v-36ad573f]{min-height:250px;max-height:250px;-o-object-fit:cover;object-fit:cover;width:100%}@media screen and (max-width:700px){.timeline[data-v-36ad573f]:after{left:28px}.timeline-container[data-v-36ad573f]{width:100%;padding-left:70px;padding-right:5px}.timeline-content img[data-v-36ad573f]{min-height:150px;max-height:150px}.timeline-container[data-v-36ad573f]:before{left:60px;border:solid transparent;border-right:solid #9c27b0;border-width:10px 10px 10px 0}.left[data-v-36ad573f]:after,.right[data-v-36ad573f]:after{left:15px}.right[data-v-36ad573f]{left:0}}.image-holder[data-v-36ad573f]{background:linear-gradient(#9c27b0,#111);border-radius:8px 8px 0 0}',""]),t.exports=e},244:function(t,e,r){t.exports=r.p+"img/891d80e.jpg"},263:function(t,e,r){"use strict";r.r(e);r(17);var n=r(3),o=r(14),d=r.n(o),c={layout:"portfolio",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,d.a.get("https://denniel.herokuapp.com/api/about/").then((function(t){a=t.data}));case 3:return e.next=5,d.a.get("https://denniel.herokuapp.com/api/timeline/").then((function(t){n=t.data}));case 5:return e.abrupt("return",{about:a,timelines:n,photo:r.getters.photo});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"About Denniel Luis Sadian",meta:[{hid:"description",name:"description",content:"He is a human being who codes."},{hid:"twitter-title",name:"twitter:title",content:"Denniel Luis Sadian"},{hid:"twitter-desc",name:"twitter:description",content:"He is a human being who codes."}]}}},l=(r(242),r(2)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"w3-container w3-margin-top w3-center w3-border-purple w3-bottombar",attrs:{id:"about-header"}},[r("img",{staticClass:"face w3-circle w3-image w3-card-4",staticStyle:{border:"6px solid #9c27b0",position:"relative",top:"70px"},attrs:{src:t.photo,width:"150"}})]),t._v(" "),r("div",{staticClass:"w3-container w3-border w3-border-purple w3-white",staticStyle:{"border-radius":"0px 0px 4px 32px"}},[r("br"),t._v(" "),r("br"),t._v(" "),r("h1",{staticClass:"w3-margin-top w3-center"},[t._v("Denniel Luis S. Sadian")]),t._v(" "),t._l(t.about,(function(p){return r("div",{key:p.id,domProps:{innerHTML:t._s(p.text)}})})),t._v(" "),t._m(0),t._v(" "),t._l(t.timelines,(function(e){return r("div",{key:e.date,staticClass:"timeline"},[r("div",{staticClass:"timeline-container",class:{left:e.left,right:!e.left}},[r("div",{staticClass:"timeline-content w3-border w3-border-purple w3-card-4"},[e.image?r("div",{staticClass:"image-holder"},[r("img",{staticClass:"w3-image",staticStyle:{"border-radius":"8px 8px 0px 0px"},attrs:{src:e.image}})]):t._e(),t._v(" "),r("h2",{staticClass:"w3-center w3-text-purple"},[e.image?t._e():r("i",{staticClass:"fa fa-calendar"}),t._v(" "),r("br"),t._v("\n            "+t._s(new Date(e.date).getFullYear())+"\n          ")]),t._v(" "),r("h5",{staticClass:"w3-center w3-text-purple"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.desc))])])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"w3-center w3-text-purple"},[e("i",{staticClass:"fa fa-calendar"}),this._v(" My Life Events\n    ")])}],!1,null,"36ad573f",null);e.default=component.exports}}]);