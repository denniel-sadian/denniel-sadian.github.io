(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{233:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("193079f2",content,!0,{sourceMap:!1})},234:function(t,e,n){var content=n(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("022d8fd5",content,!0,{sourceMap:!1})},235:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("a2b0be0a",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";var r=n(233);n.n(r).a},246:function(t,e,n){(e=n(6)(!1)).push([t.i,".w3-modal[data-v-61e22038]{display:block}textarea[data-v-61e22038]{width:100%;height:150px;padding:10px}",""]),t.exports=e},247:function(t,e,n){"use strict";var r=n(234);n.n(r).a},248:function(t,e,n){(e=n(6)(!1)).push([t.i,"a[data-v-3fd024b2]{text-decoration:none}",""]),t.exports=e},249:function(t,e,n){"use strict";var r=n(235);n.n(r).a},250:function(t,e,n){var r=n(6),o=n(47),c=n(49);e=r(!1);var l=o(c);e.push([t.i,"header[data-v-ecaa901c]{padding-top:50px!important;padding-bottom:50px!important}#header-nav[data-v-ecaa901c]{background:url("+l+");background-attachment:fixed;background-size:cover;background-repeat:no-repeat}header h1[data-v-ecaa901c]{font-size:60px;line-height:1}.light-gray-opacity[data-v-ecaa901c]{background:hsla(0,0%,82.7%,.3);margin-left:2px;margin-right:2px}.entry-image[data-v-ecaa901c]{height:300px;-o-object-fit:cover;object-fit:cover;width:100%}@media (max-width:768px){header[data-v-ecaa901c]{padding-top:90px!important;padding-bottom:40px!important}header h1[data-v-ecaa901c]{font-size:40px}}@media (max-width:425px){header h1[data-v-ecaa901c]{font-size:30px}header[data-v-ecaa901c]{padding-top:80px!important;padding-bottom:30px!important}#content[data-v-ecaa901c]{font-size:15px!important}.entry-image[data-v-ecaa901c]{height:180px}.ar-cont[data-v-ecaa901c]{padding-left:0;padding-right:0}}",""]),t.exports=e},257:function(t,e,n){"use strict";n.r(e);n(17);var r=n(3),o=n(14),c=n.n(o),l=n(132),m=n(133),h=(n(27),{props:["show"],data:function(){return{name:"",email:"",message:""}},computed:{id:function(){return this.$route.params.id}},methods:{comment:function(){var t=this;this.$emit("hide-comment"),c.a.post("https://denniel.herokuapp.com/blog/api/entries/"+this.id+"/comments/",{email:this.email,full_name:this.name,content:this.message}).then((function(e){200==e.status&&(t.$router.push({path:"/blog/article/"+t.id,query:{reload:t.$route.query.reload+1}}),t.clear())}))},clear:function(){this.email="",this.name="",this.message=""}}}),d=(n(245),n(2)),w=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition-group",{attrs:{name:"contact","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],key:"comment-form",staticClass:"w3-modal",attrs:{id:"commentForm"}},[n("div",{staticClass:"w3-modal-content"},[n("form",{staticClass:"w3-container w3-light-grey w3-padding",on:{submit:function(e){return e.preventDefault(),t.comment()}}},[n("h4",[n("i",{staticClass:"fa fa-commenting"}),t._v(" Comment\n          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w3-input w3-margin-bottom w3-margin-top w3-border-gray w3-hover-border-purple",attrs:{placeholder:"Full Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w3-input w3-margin-bottom w3-border-gray w3-hover-border-purple",attrs:{placeholder:"Email",type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"w3-border w3-hover-border-purple w3-margin-bottom",attrs:{placeholder:"Comment...",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("button",{staticClass:"w3-button w3-round-xxlarge w3-purple w3-right w3-margin-bottom w3-margin-left",attrs:{type:"submit"}},[n("b",[n("i",{staticClass:"fab fa-telegram-plane"}),t._v(" Submit\n            ")])]),t._v(" "),n("button",{staticClass:"w3-button w3-round-xxlarge w3-red w3-right w3-margin-bottom",attrs:{type:"reset"},on:{click:function(e){t.$emit("hide-comment"),t.clear()}}},[n("b",[n("i",{staticClass:"fa fa-trash"}),t._v(" Cancel\n            ")])])])])])])],1)}),[],!1,null,"61e22038",null).exports,v=(n(95),{props:{actualNumber:{type:Number},pageNumber:{type:Number,default:0}},data:function(){return{q:""}},computed:{max:function(){var t=this.actualNumber/5;return t%1!=0&&(t+=1),Math.floor(t)},id:function(){return this.$route.params.id},previousLink:function(){return{query:{page:this.pageNumber-1,reload:this.$route.query.reload}}},nextLink:function(){return{query:{page:this.pageNumber+1,reload:this.$route.query.reload}}}},methods:{goBack:function(){this.$scrollTo("#article-comments",0,{force:!0}),this.$router.push(this.previousLink)},goNext:function(){this.$scrollTo("#article-comments",0,{force:!0}),this.$router.push(this.nextLink)}}}),f=(n(247),{components:{BlogCommentsPaginator:Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.actualNumber>5,expression:"actualNumber > 5"}]},[n("div",{staticClass:"w3-container w3-center w3-margin-bottom"},[n("span",{staticClass:"step-links"},[0!=t.pageNumber?n("button",{staticClass:"w3-button w3-purple w3-hover-pink w3-round-xxlarge",on:{click:function(e){return t.goBack()}}},[n("i",{staticClass:"fa fa-chevron-left"}),t._v("￼\n      ")]):n("span",{staticClass:"w3-button w3-gray w3-hover-pink w3-round-xxlarge"},[n("i",{staticClass:"fa fa-chevron-left"}),t._v("￼\n      ")]),t._v(" "),n("span",[t._v(t._s(t.pageNumber+1)+" of "+t._s(t.max))]),t._v(" "),t.pageNumber+1!=t.max?n("button",{staticClass:"w3-button w3-purple w3-hover-pink w3-round-xxlarge",staticStyle:{"text-decoration":"none"},on:{click:function(e){return t.goNext()}}},[n("i",{staticClass:"fa fa-chevron-right"})]):n("span",{staticClass:"w3-button w3-gray w3-hover-pink w3-round-xxlarge"},[n("i",{staticClass:"fa fa-chevron-right"}),t._v("￼\n      ")])])])])}),[],!1,null,"3fd024b2",null).exports},data:function(){return{comments:[],size:5,pageCount:0}},computed:{page:function(){var t=0;return this.$route.query.page&&(t=Number(this.$route.query.page)),t},pagedComments:function(){var t=this.page*this.size,e=t+this.size;return this.comments.slice(t,e)}},watch:{$route:function(t){this.getComments(t.params.id)}},methods:{getComments:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var link;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return link="https://denniel.herokuapp.com/blog/api/entries/"+t,n.next=3,c.a.get(link+"/comments").then((function(t){e.comments=t.data,e.pageCount=Math.ceil(e.comments.length/e.size)}));case 3:case"end":return n.stop()}}),n)})))()}},created:function(){this.getComments(this.$route.params.id)}}),x=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.comments.length?n("div",{staticClass:"w3-container w3-margin-bottom",staticStyle:{"padding-left":"0px","padding-right":"0px"},attrs:{id:"commentSection"}},[n("div",{staticClass:"w3-container w3-light-gray",attrs:{id:"article-comments"}},[n("h4",[t._v("\n        There\n        "),t.comments.length>1?n("span",[t._v("\n          are\n          "),n("b",{staticClass:"w3-text-red"},[t._v(t._s(t.comments.length))]),t._v("\n          comments\n        ")]):n("span",[t._v("\n          is\n          "),n("b",{staticClass:"w3-text-red"},[t._v(t._s(t.comments.length))]),t._v("\n          comment\n        ")])]),t._v(" "),t._l(t.pagedComments,(function(i){return n("div",{staticClass:"w3-container w3-white w3-margin-bottom w3-border-purple w3-leftbar"},[n("p",[n("i",{staticClass:"fa fa-user-circle"}),t._v(" "),n("span",{staticClass:"w3-large"},[t._v(t._s(i.full_name))]),t._v(" "),n("br"),t._v(" "),n("i",{staticClass:"fa fa-calendar"}),t._v(" "),n("span",{staticClass:"w3-small"},[t._v(t._s(new Date(i.when).toDateString()))])]),t._v(" "),n("p",[n("i",{staticClass:"fa fa-long-arrow-right"}),t._v("\n          "+t._s(i.content)+"\n        ")])])})),t._v(" "),n("div",{staticClass:"w3-center w3-margin-bottom"},[n("span",{staticClass:"step-links"}),t._v(" "),n("BlogCommentsPaginator",{attrs:{actualNumber:t.comments.length,pageNumber:t.page}})],1)],2)]):t._e()])}),[],!1,null,"3eb4c514",null).exports,_=n(79),C=n(64),y={transition:"bounce",components:{BlogArchive:l.a,BlogSmallNav:m.a,BlogCommentForm:w,BlogComments:x,Footer:_.a,Contact:C.a},data:function(){return{article:{},comments:[],navShow:!1,contactShow:!1,archiveShow:!1,commentShow:!1,q:""}},computed:{art:function(){return this.article},id:function(){return this.$route.params.id}},watch:{$route:function(t){this.getArticle(t.params.id),this.getComments(t.params.id)}},methods:{getArticle:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var link;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return link="https://denniel.herokuapp.com/blog/api/entries/".concat(t),n.next=3,c.a.get(link).then((function(t){e.article=t.data}));case 3:case"end":return n.stop()}}),n)})))()},getComments:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var link;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return link="https://denniel.herokuapp.com/blog/api/entries/".concat(t,"/comments"),n.next=3,c.a.get(link).then((function(t){e.comments=t.data}));case 3:case"end":return n.stop()}}),n)})))()},search:function(){this.$router.push({name:"blog",query:{q:this.q}})}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,c.a.get("https://denniel.herokuapp.com/blog/api/entries/".concat(n.id));case 3:return r=e.sent,data=r.data,e.abrupt("return",{article:data});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.headline,meta:[{hid:"description",name:"description",content:this.article.preview_content},{hid:"twitter-title",name:"twitter:title",content:this.article.headline},{hid:"twitter-desc",name:"twitter:description",content:this.article.preview_content},{hid:"preview_img",property:"og:image",content:this.article.image},{hid:"twitter-preview_img",name:"twitter:image",content:this.article.image}]}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)}},k=(n(249),Object(d.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.article.id},[r("BlogSmallNav",{attrs:{show:t.navShow},on:{"hide-small-nav":function(e){t.navShow=!t.navShow},"show-contact":function(e){t.contactShow=!t.contactShow,t.navShow=!1}}}),t._v(" "),r("button",{staticClass:"w3-button w3-hide-large w3-hide-medium w3-left w3-large w3-text-white",staticStyle:{background:"none"},on:{click:function(e){t.navShow=!t.navShow,t.archiveShow=!1}}},[r("i",{staticClass:"fa fa-bars"})]),t._v(" "),r("button",{staticClass:"w3-margin-top w3-margin-right light-gray-opacity w3-hide-large w3-hide-medium w3-button w3-display-topright w3-text-white w3-round-xxlarge w3-large light-gray-opac",on:{click:function(e){t.navShow=!1,t.archiveShow=!t.archiveShow}}},[r("i",{staticClass:"fa fa-list-ul"}),t._v(" Archive\n  ")]),t._v(" "),r("div",{attrs:{id:"header-nav"}},[r("nav",{staticClass:"w3-bar w3-large w3-padding w3-text-white w3-hide-small"},[r("nuxt-link",{staticClass:"w3-bar-item light-gray-opacity w3-round-xxlarge w3-button",attrs:{to:"/blog"}},[r("img",{attrs:{src:n(96),width:"25"}}),t._v(" "),r("span",{staticClass:"w3-hide-small w3-hide-medium"},[t._v("Code Philosophy")])]),t._v(" "),r("nuxt-link",{staticClass:"w3-bar-item light-gray-opacity w3-round-xxlarge w3-button",attrs:{to:"/"}},[r("span",{staticClass:"w3-hide-small"},[r("i",{staticClass:"fa fa-home"})])]),t._v(" "),r("nuxt-link",{staticClass:"light-gray-opacity w3-bar-item w3-round-xxlarge w3-button",attrs:{to:"/portfolio"}},[r("i",{staticClass:"fa fa-coffee"})]),t._v(" "),r("button",{staticClass:"light-gray-opacity w3-bar-item w3-round-xxlarge w3-button",on:{click:function(e){t.contactShow=!t.contactShow}}},[r("i",{staticClass:"fa fa-envelope"})]),t._v(" "),r("nuxt-link",{staticClass:"light-gray-opacity w3-bar-item w3-round-xxlarge w3-button",attrs:{to:{name:"portfolio-about"}}},[r("i",{staticClass:"fa fa-info-circle"})]),t._v(" "),r("button",{staticClass:"w3-bar-item w3-button w3-right w3-text-white w3-round-xxlarge w3-large light-gray-opacity",on:{click:function(e){t.navShow=!1,t.archiveShow=!t.archiveShow}}},[r("i",{staticClass:"fa fa-list-ul"}),t._v(" "),r("span",{staticClass:"w3-hide-medium"},[t._v("Archive")])]),t._v(" "),r("form",{staticClass:"w3-bar-item",staticStyle:{float:"right",padding:"0px 5px 0px 0px",width:"35%"},on:{submit:function(e){return e.preventDefault(),t.search()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"w3-input w3-hover-light-gray w3-light-white w3-col s10",staticStyle:{border:"0px",padding:"8px","border-radius":"32px 0px 0px 32px"},attrs:{type:"search",placeholder:"Search...",required:""},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}}),t._v(" "),t._m(0)])],1),t._v(" "),r("header",{staticClass:"w3-container w3-text-white w3-center w3-border-purple w3-bottombar"},[r("h1",{staticClass:"animated fadeIn w3-padding",attrs:{id:"headline"}},[t._v(t._s(t.article.headline))]),t._v(" "),r("p",{staticClass:"w3-large animated fadeIn"},[t._v(t._s(new Date(t.article.pub_date).toDateString()))])])]),t._v(" "),r("div",{staticClass:"w3-container ar-cont w3-margin"},[r("div",{staticClass:"w3-content"},[r("img",{staticClass:"w3-image entry-image",staticStyle:{background:"rgba(211, 211, 211, 0.9)"},attrs:{src:t.article.image}}),t._v(" "),r("div",{staticClass:"w3-large",attrs:{id:"content"},domProps:{innerHTML:t._s(t.article.content)}}),t._v(" "),t.article.can_comment?r("button",{staticClass:"w3-button w3-round-xxlarge w3-purple w3-right w3-margin-bottom",on:{click:function(e){t.commentShow=!t.commentShow}}},[t._m(1)]):r("p",{staticClass:"w3-opacity w3-right"},[t._v("Commenting was turned off")]),t._v(" "),r("BlogComments")],1)]),t._v(" "),r("BlogCommentForm",{attrs:{show:t.commentShow},on:{"hide-comment":function(e){t.commentShow=!t.commentShow}}}),t._v(" "),r("BlogArchive",{attrs:{show:t.archiveShow},on:{"hide-archive":function(e){t.archiveShow=!t.archiveShow,t.navshow=!1}}}),t._v(" "),r("Contact",{key:"contact",attrs:{show:t.contactShow},on:{"hide-contact-modal":function(e){t.contactShow=!t.contactShow}}}),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"w3-button w3-purple w3-hover-gray w3-col s2",staticStyle:{padding:"8px","border-radius":"0px 32px 32px 0px"},attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("i",{staticClass:"fa fa-commenting"}),this._v("\n          Comment\n        ")])}],!1,null,"ecaa901c",null));e.default=k.exports}}]);