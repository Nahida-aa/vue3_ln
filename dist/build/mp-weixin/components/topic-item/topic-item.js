"use strict";const e=require("../../common/vendor.js"),t=require("../../common/assets.js"),i=require("../../utils/common.js");if(!Array){e.resolveComponent("uni-icons")()}Math;const m={__name:"topic-item",props:{isMore:{type:Boolean,default:!1},item:{type:Object,default:()=>({name:"明星美女",pic_url:"/static/images/classify1.jpg",update_time:Date.now()-1728e5})}},setup:m=>(r,o)=>e.e({a:!m.isMore},m.isMore?{}:e.e({b:m.item.pic_url,c:e.unref(i.formatTimeDifference)(m.item.update_time)},e.unref(i.formatTimeDifference)(m.item.update_time)?{d:e.t(e.unref(i.formatTimeDifference)(m.item.update_time))}:{},{e:e.t(m.item.name),f:"/pages/wallpaperList/wallpaperList?id="+m.item._id+"&name="+m.item.name}),{g:m.isMore},m.isMore?{h:t._imports_0,i:e.p({type:"more-filled",size:"34",color:"#fff"})}:{})},r=e._export_sfc(m,[["__scopeId","data-v-716a579e"]]);wx.createComponent(r);
