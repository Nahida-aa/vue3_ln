"use strict";const t=require("../common/vendor.js"),e=t.index.getSystemInfoSync(),n=()=>e.statusBarHeight||15,r=()=>{let{top:e,height:r}=t.index.getMenuButtonBoundingClientRect();return r+2*(e-n())};exports.getLeftIconLeft=()=>0,exports.getNavBarHeight=()=>n()+r(),exports.getStatusBarHeight=n,exports.getTitleBarHeight=r;
