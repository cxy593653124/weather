(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M348.557319 408.155203m-312.43739 0a312.43739 312.43739 0 1 0 624.87478 0 312.43739 312.43739 0 1 0-624.87478 0Z" fill="#BAE1EA" ></path><path d="M348.557319 729.622575c-176.987654 0-321.467372-144.479718-321.467372-321.467372s144.479718-321.467372 321.467372-321.467372 321.467372 144.479718 321.467372 321.467372-144.479718 321.467372-321.467372 321.467372z m0-624.87478C180.599647 104.747795 45.149912 240.197531 45.149912 408.155203S180.599647 711.56261 348.557319 711.56261s303.407407-135.449735 303.407408-303.407407S516.514991 104.747795 348.557319 104.747795z" fill="#333333" ></path><path d="M574.306878 624.87478l335.915344 287.153439" fill="#BAE1EA" ></path><path d="M910.222222 921.058201c-1.805996 0-3.611993 0-5.417989-1.805996l-335.915344-288.959436c-3.611993-3.611993-3.611993-9.029982-1.805997-12.641975 3.611993-3.611993 9.029982-3.611993 12.641976-1.805997l335.915344 288.959436c3.611993 3.611993 3.611993 9.029982 1.805996 12.641975-3.611993 3.611993-5.417989 3.611993-7.223986 3.611993z" fill="#333333" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)