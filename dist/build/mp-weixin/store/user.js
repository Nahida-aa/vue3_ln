"use strict";const o=require("../common/vendor.js").defineStore("user",{state:()=>({score_count:0,download_count:0}),actions:{updateScoreCount(o){this.score_count=o},updateDownloadCount(o){this.download_count=o}}});exports.useUserStore=o;
