!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{s(r.next(e))}catch(e){c(e)}}function o(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,c,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){if(e.hub&&e.hub.actions&&e.hub.actions[1].uri){var t=document.querySelector(".song-list"),n=this.createCard(e.title,e.subtitle,e.share.image||"https://place-hold.it/50x50.4?text=");t.append(n),n.addEventListener("click",(function(){var t=document.querySelector("audio");t.src===e.hub.actions[1].uri?t.paused?t.play():t.pause():(t.src=e.hub.actions[1].uri,t.load(),t.play())}))}}return e.prototype.createCard=function(e,t,n){var r=document.createElement("div");r.classList.add("card");var a=document.createElement("div");a.classList.add("songs");var c=document.createElement("img");c.setAttribute("src",n);var i=document.createElement("div");i.classList.add("middle");var o=document.createElement("span");o.classList.add("play","glyphicon","glyphicon-play"),i.append(o);var s=document.createElement("div");s.classList.add("content","ml-1");var u=document.createElement("div");u.classList.add("songTitle"),u.innerText=e;var l=document.createElement("span");return l.classList.add("subTitle"),l.innerText=t,s.append(u,l),a.append(c,i,s),r.append(a),r},e}(),i=new(function(){function e(){var e=this;this.top=document.getElementById("top"),this.recommend=document.getElementById("recommend"),this.search=document.querySelector("input#search"),this.active=this.top,this.search.addEventListener("click",(function(){e.active!==e.search&&(e.refreshContainer(),e.changeActive(e.search))})),this.search.addEventListener("keyup",(function(t){if("Enter"===t.key){var n=e.search.value.replace(" ","%20");e.searchSong("search","offset=0&limit=5&term="+n)}})),this.top.addEventListener("click",(function(){e.active!==e.top&&(e.refreshContainer(),e.changeActive(e.top),e.searchSong("songs/list-artist-top-tracks","id=40008598"))})),this.recommend.addEventListener("click",(function(){e.active!==e.recommend&&(e.refreshContainer(),e.changeActive(e.recommend),e.searchSong("songs/list-recommendations","key=484129036"))}))}return e.prototype.changeActive=function(e){this.active.classList.remove("active"),e.classList.add("active"),this.active=e},e.prototype.refreshContainer=function(){var e=document.getElementById("song-container");e.children.length&&e.removeChild(e.firstElementChild);var t=document.createElement("div");t.classList.add("song-list"),e.append(t),document.querySelector("audio").src=""},e.prototype.searchSong=function(e,t){return r(this,void 0,void 0,(function(){var n;return a(this,(function(r){switch(r.label){case 0:return[4,fetch("https://shazam.p.rapidapi.com/"+e+"?locale=en-US&"+t,{method:"GET",headers:{"x-rapidapi-host":"shazam.p.rapidapi.com","x-rapidapi-key":"6c91e531b2msh0a6966523182885p1d7c7fjsnc723900fd7b5"}})];case 1:return[4,r.sent().json()];case 2:return n=r.sent(),console.log(n),"search"==e&&(n={tracks:n.tracks.hits.reduce((function(e,t){return e.push(t.track),e}),[])}),n.tracks.forEach((function(e){new c(e)})),[2]}}))}))},e}());i.refreshContainer(),i.searchSong("songs/list-artist-top-tracks","id=40008598")}]);