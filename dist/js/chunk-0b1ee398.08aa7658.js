(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1ee398"],{"10df":function(e,t,i){"use strict";i("78a3")},"78a3":function(e,t,i){},c3c6:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row login-page"},[i("div",{staticClass:"col s12 z-depth-6 card-panel"},[i("h4",{staticClass:"pageTitle"},[e._v("レビューを編集する")]),i("div",{staticClass:"login-form"},[i("div",[i("img",{staticClass:"iconChange",attrs:{src:e.videoDetail.thumbnailsUrl,alt:""}})]),i("div",{staticClass:"context"},[i("div",{staticClass:"stars hyouka"},[i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.evaluation,expression:"evaluation"}],attrs:{id:"review01",type:"radio",name:"review"},domProps:{value:5,checked:e._q(e.evaluation,5)},on:{change:function(t){e.evaluation=5}}}),i("label",{attrs:{for:"review01"}},[e._v("★")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.evaluation,expression:"evaluation"}],attrs:{id:"review02",type:"radio",name:"review",value:"4"},domProps:{checked:e._q(e.evaluation,"4")},on:{change:function(t){e.evaluation="4"}}}),i("label",{attrs:{for:"review02"}},[e._v("★")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.evaluation,expression:"evaluation"}],attrs:{id:"review03",type:"radio",name:"review",value:"3"},domProps:{checked:e._q(e.evaluation,"3")},on:{change:function(t){e.evaluation="3"}}}),i("label",{attrs:{for:"review03"}},[e._v("★")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.evaluation,expression:"evaluation"}],attrs:{id:"review04",type:"radio",name:"review",value:"2"},domProps:{checked:e._q(e.evaluation,"2")},on:{change:function(t){e.evaluation="2"}}}),i("label",{attrs:{for:"review04"}},[e._v("★")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.evaluation,expression:"evaluation"}],attrs:{id:"review05",type:"radio",name:"review",value:"1"},domProps:{checked:e._q(e.evaluation,"1")},on:{change:function(t){e.evaluation="1"}}}),i("label",{attrs:{for:"review05"}},[e._v("★")])])]),i("div",{staticClass:"row textarea"},[i("form",{staticClass:"col s12 offset-s1"},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"materialize-textarea",attrs:{id:"textarea1"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}}),i("label",{attrs:{for:"textarea1"}})])])])]),i("div",{staticClass:"row login-btn"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.editReview()}}},[i("span",[e._v("編集")])])])])])])])])])},n=[],r=i("b85c"),o=i("5530"),s=i("1da1"),v=i("d4ec"),l=i("bee2"),c=i("262e"),d=i("2caf"),u=(i("96cf"),i("d81d"),i("a9e3"),i("b0c0"),i("a4d3"),i("e01a"),i("99af"),i("9ab4")),p=i("1b40"),w=i("b166"),h=i("1519"),f=i("1c8c"),b=i("155d"),m=i("a88f"),y=i("bc3a"),C=i.n(y),g=i("dc59"),j=i("0829"),O=function(e){Object(c["a"])(i,e);var t=Object(d["a"])(i);function i(){var e;return Object(v["a"])(this,i),e=t.apply(this,arguments),e.evaluation=0,e.review="",e.reviewId=0,e.videoDetail=new h["a"](0,"","","","","",""),e.reviewVideosId="",e.accountList=Array(),e}return Object(l["a"])(i,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(j["a"])(g["a"],"アカウント一覧"),Object(j["d"])(t,function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,n,s,v,l,c,d,u,p,w,y,g,j,O,I,k,x,A,_,D,L,U,N,P,R;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.docs.map((function(e){return Object(o["a"])({},e.data())})),n=Object(r["a"])(a);try{for(n.s();!(s=n.n()).done;){v=s.value,l=Array(),c=Object(r["a"])(v.favoriteChannelList);try{for(c.s();!(d=c.n()).done;)u=d.value,l.push(new b["a"](u.id,u.title,u.description,u.publishedAt,u.thumbnailsUrl,u.viewCount,u.subscriberCount,u.videoCount))}catch(T){c.e(T)}finally{c.f()}p=Array(),w=Object(r["a"])(v.reviewList);try{for(w.s();!(y=w.n()).done;)g=y.value,p.push(new f["a"](g.reviewDate,g.reviewId,g.accountId,new h["a"](g.videos.id,g.videos.publishedAt,g.videos.title,g.videos.description,g.videos.thumbnailsUrl,g.videos.channelTitle,g.videos.viewCount),g.evaluation,g.review,g.favoriteCount))}catch(T){w.e(T)}finally{w.f()}i.accountList.push(new m["a"](v.id,v.name,v.introduction,v.img,v.mailaddless,v.telephone,v.password,l,p))}}catch(T){n.e(T)}finally{n.f()}j=Number(i.$route.params.id),O=Object(r["a"])(i.accountList);try{for(O.s();!(I=O.n()).done;){k=I.value,x=Object(r["a"])(k.reviewList);try{for(x.s();!(A=x.n()).done;)_=A.value,_.reviewId===j&&(i.evaluation=_.evaluation,i.review=_.review,i.reviewId=_.reviewId,i.reviewVideosId=String(_.videos.id))}catch(T){x.e(T)}finally{x.f()}}}catch(T){O.e(T)}finally{O.f()}D=i.$store.getters.getApiKey,L=Object(r["a"])(D),e.prev=8,L.s();case 10:if((U=L.n()).done){e.next=26;break}return N=U.value,e.prev=12,e.next=15,C.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=".concat(N,"&id=").concat(i.reviewVideosId));case 15:return P=e.sent,R=P.data.items[0],i.videoDetail=new h["a"](R.id,R.snippet.publishedAt,R.snippet.title,R.snippet.description,R.snippet.thumbnails.medium.url,R.snippet.channelTitle,R.statistics.viewCount),e.abrupt("return");case 21:e.prev=21,e.t0=e["catch"](12),console.log("APIerror");case 24:e.next=10;break;case 26:e.next=31;break;case 28:e.prev=28,e.t1=e["catch"](8),L.e(e.t1);case 31:return e.prev=31,L.f(),e.finish(31);case 34:case"end":return e.stop()}}),e,null,[[8,28,31,34],[12,21]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getDate",value:function(){var e=Object(w["a"])(new Date,"yyyy年MM月dd日");return e}},{key:"editReview",value:function(){var e,t=Object(r["a"])(this.accountList);try{for(t.s();!(e=t.n()).done;){var i,a=e.value,n=Object(r["a"])(a.reviewList);try{for(n.s();!(i=n.n()).done;){var o=i.value;if(o.reviewId===this.reviewId){o.evaluation=this.evaluation,o.review=this.review,o.reviewDate=this.getDate();try{var s,v=Array(),l=Object(r["a"])(a.reviewList);try{for(l.s();!(s=l.n()).done;){var c=s.value;void 0===c.favoriteCount?v.push({reviewDate:c.reviewDate,reviewId:c.reviewId,accountId:c.accountId,videos:{id:c.videos.id,publishedAt:c.videos.publishedAt,title:c.videos.title,description:c.videos.description,thumbnailsUrl:c.videos.thumbnailsUrl,channelTitle:c.videos.channelTitle,viewCount:c.videos.viewCount},evaluation:c.evaluation,review:c.review,favoriteCount:[]}):v.push({reviewDate:c.reviewDate,reviewId:c.reviewId,accountId:c.accountId,videos:{id:c.videos.id,publishedAt:c.videos.publishedAt,title:c.videos.title,description:c.videos.description,thumbnailsUrl:c.videos.thumbnailsUrl,channelTitle:c.videos.channelTitle,viewCount:c.videos.viewCount},evaluation:c.evaluation,review:c.review,favoriteCount:c.favoriteCount})}}catch(f){l.e(f)}finally{l.f()}var d,u=Array(),p=Object(r["a"])(a.favoriteChannelList);try{for(p.s();!(d=p.n()).done;){var w=d.value;u.push({id:w.id,title:w.title,description:w.description,publishedAt:w.publishedAt,thumbnailsUrl:w.thumbnailsUrl,viewCount:w.viewCount,subscriberCount:w.subscriberCount,videoCount:w.videoCount})}}catch(f){p.e(f)}finally{p.f()}var h=Object(j["e"])(Object(j["b"])(g["a"],"アカウント一覧",String(a.id)),{id:a.id,name:a.name,introduction:a.introduction,img:a.img,mailaddless:a.mailaddless,telephone:a.telephone,password:a.password,favoriteChannelList:u,reviewList:v});console.log(h)}catch(b){console.error("Error adding document: ",b),console.log("Error adding document: ")}}}}catch(f){n.e(f)}finally{n.f()}}}catch(f){t.e(f)}finally{t.f()}this.$router.push("/showReview/".concat(this.reviewId))}}]),i}(p["b"]);O=Object(u["a"])([p["a"]],O);var I=O,k=I,x=(i("10df"),i("2877")),A=Object(x["a"])(k,a,n,!1,null,"a059c8fe",null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-0b1ee398.08aa7658.js.map