"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[68],{9068:function(e,t,n){n.r(t),n.d(t,{getCacheFor:function(){return f},mount:function(){return _}});var r=n(1601),i=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=function(e){return[...e.querySelectorAll("[data-items] > [data-id]")].filter((function(e){return-1===e.dataset.id.indexOf("menu")})).reduce((function(e,t){let n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))}),0)},c=function(e){let t=window.getComputedStyle(e);return f(e.__id).itemsWidth.reduce((function(e,t){return e+t}),0)+(parseInt(t.getPropertyValue("margin-left"))+parseInt(t.getPropertyValue("margin-right")))},s=function(e){let t=function(e){let t=e.closest('[class*="ct-container"]');const n=window.getComputedStyle(t);let r=t.getBoundingClientRect().width;r-=parseInt(n.getPropertyValue("padding-left"))+parseInt(n.getPropertyValue("padding-right"));let i=e.closest("[data-column]").dataset.column,o="start"===i||"end"===i?"side":"middle"===i?"middle":"secondary",a=t.querySelector('[data-column="middle"]');if("side"===o&&!a){let n=t.querySelectorAll('[data-id*="menu"]'),i=r-l(t);if(n.length>1){const t=c(e),r=[...n].reduce((function(e,t){return e+c(t)}),0);i*=100*t/r/100}return i}return"middle"===o?r-2*Math.max(t.querySelector('[data-column="start"]')?l(t.querySelector('[data-column="start"]')):0,t.querySelector('[data-column="end"]')?l(t.querySelector('[data-column="end"]')):0):(r-(t.querySelector('[data-column="middle"]')?l(t.querySelector('[data-column="middle"]')):0))/2-l(e.closest("[data-column]"))}(e),n=e.closest('[class*="ct-container"]'),r=window.getComputedStyle(e);const i=c(e),o=parseInt(r.getPropertyValue("margin-left"))+parseInt(r.getPropertyValue("margin-right"));if(!(i>t-o))return{fit:f(e.__id).children,notFit:[]};n.querySelectorAll('[data-id*="menu"]');const u=f(e.__id).itemsWidth,s=t-o,d=f(e.__id).moreItemWidth,m=f(e.__id).children.map((function(e,t){return{el:e,width:u[t]}})).reduce((function(e,t){return 0===e.length?[t]:[...e,a(a({},t),{},{width:t.width+e[e.length-1].width})]}),[]).filter((function(e){return e.width+d<s})).map((function(e){let{el:t}=e;return t}));return{fit:m,notFit:f(e.__id).children.filter((function(e){return!m.includes(e)}))}};var d=n(6130);let m={};const f=function(e){return m[e]},p=function(e){return Array.from(e.children).filter((function(e){return!e.matches("link")&&!e.matches("style")}))[0]},h=function(e,t){if(e.querySelector(".more-items-container"))return void t(e.querySelector(".more-items-container"));const n=document.createElement("li");n.classList.add("menu-item-has-children"),n.classList.add("more-items-container"),n.classList.add("animated-submenu-block"),n.classList.add("menu-item"),n.insertAdjacentHTML("afterbegin",`<a href="#" class="ct-menu-link">\n      ${ct_localizations.more_text}\n      <span class="ct-toggle-dropdown-desktop">\n        <svg class="ct-icon" width="8" height="8" viewBox="0 0 15 15">\n            <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>\n        </svg>\n      </span>\n    </a>\n    <button class="ct-toggle-dropdown-desktop-ghost" aria-expanded="false" aria-label="${ct_localizations.expand_submenu}"></button>\n    <ul class="sub-menu"></ul>`),p(e).appendChild(n),t&&t(n)},g=function(e){if(e.firstElementChild.matches("a")&&!e.querySelector("svg")){const t=e.firstElementChild;t.innerHTML=`<span>${t.innerHTML}</span>`;const n=window.getComputedStyle(t,null);let r=0,i=window.getComputedStyle(e.parentNode,null);"normal"!==i.gap&&(r=parseFloat(i.gap),e.parentNode.firstElementChild!==e&&e!==e.parentNode.lastElementChild||(r/=2));let o=t.firstElementChild.getBoundingClientRect().width+parseInt(n.getPropertyValue("padding-left"),10)+parseInt(n.getPropertyValue("padding-right"),10)+(t.querySelector(".ct-toggle-dropdown-desktop")?13:0)+r;return t.innerHTML=t.firstElementChild.innerHTML,o}return e.firstElementChild.getBoundingClientRect().width},y=function(e){let t=null,n=!!e.querySelector(".more-items-container");return h(e,(function(e){t=g(e),n||e.remove()})),t},b=function(e){return Array.from(p(e).children).filter((function(e){return!e.classList.contains(".more-items-container")&&e.firstElementChild})).map((function(e){return g(e)}))};new ResizeObserver((function(){[...document.querySelectorAll('header [data-device="desktop"] [data-id^="menu"][data-responsive]')].map((function(e){return _(e)}))})).observe(document.body);const _=function(e){if(!p(e))return;if(function(e){[...e.closest('[class*="ct-container"]').querySelectorAll('[data-id*="menu"]')].map((function(e){e.__id||(e.__id=Math.random()),m[e.__id]||p(e)&&(m[e.__id]={el:e,previousRenderedWidth:null,children:[...Array.from(p(e).children).filter((function(e){return!e.classList.contains("more-items-container")})),...p(e).querySelector(".more-items-container")?[...p(e).querySelector(".more-items-container .sub-menu").children]:[]],itemsWidth:b(e),moreItemWidth:y(e)},e.dataset.responsive="yes")}))}(e),m[e.__id].previousRenderedWidth&&m[e.__id].previousRenderedWidth===window.innerWidth)return;if(m[e.__id].previousRenderedWidth=window.innerWidth,"desktop"!==(0,d.C)())return;let{fit:t,notFit:n}=s(e);if(0===n.length)return e.querySelector(".more-items-container")&&(t.map((function(t){p(e).insertBefore(t,e.querySelector(".more-items-container")),t.matches(".menu-item-has-children, .page_item_has_children")&&(t.classList.remove("animated-submenu-inline"),t.classList.add("animated-submenu-block")),Array.from(t.querySelectorAll(".menu-item-has-children, .page_item_has_children")).filter((function(e){return!!e.closest('[class*="ct-mega-menu"]')})).map((function(e){e.classList.remove("animated-submenu-block","animated-submenu-inline")}))})),e.querySelector(".more-items-container").remove()),S(),void i().trigger("ct:header:refresh-menu-submenus");document.querySelector('header [data-device="desktop"]')&&h(e,(function(){n.map((function(t){e.querySelector(".more-items-container .sub-menu").appendChild(t),t.matches(".menu-item-has-children, .page_item_has_children")&&(t.classList.add("animated-submenu-inline"),t.classList.remove("animated-submenu-block"))})),t.map((function(t){p(e).insertBefore(t,e.querySelector(".more-items-container")),t.matches(".menu-item-has-children, .page_item_has_children")&&(t.classList.remove("animated-submenu-inline"),t.classList.add("animated-submenu-block")),Array.from(t.querySelectorAll(".menu-item-has-children, .page_item_has_children")).filter((function(e){return!!e.closest('[class*="ct-mega-menu"]')})).map((function(e){e.classList.remove("animated-submenu-block","animated-submenu-inline")}))})),S(),i().trigger("ct:header:refresh-menu-submenus")}))},S=function(){[...document.querySelectorAll('header [data-device="desktop"] [data-id*="menu"] > .menu')].map((function(e){[...e.children].filter((function(e){return e.querySelector(".sub-menu")})).filter((function(e){return function(e){return e.className.includes("animated-submenu")&&(!e.parentNode.classList.contains("menu")||-1===e.className.indexOf("ct-mega-menu")&&e.parentNode.classList.contains("menu"))}(e)})).map((function(e){return e.querySelector(".sub-menu")})).map((function(e){[...e.querySelectorAll("[data-submenu]")].map((function(e){e.removeAttribute("data-submenu")})),e._popper&&(e._popper.destroy(),e._popper=null)}))}))}}}]);