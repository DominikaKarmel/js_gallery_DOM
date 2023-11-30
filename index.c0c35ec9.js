document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("largeImg"),t=document.getElementById("thumbs");t.addEventListener("click",function(){("IMG"===event.target.tagName||"A"===event.target.tagName)&&(event.preventDefault(),t.querySelectorAll(".list-item").forEach(function(e){return e.classList.remove("active")}),event.target.closest(".list-item").classList.add("active"),e.src=event.target.closest("a").getAttribute("href"))})});//# sourceMappingURL=index.c0c35ec9.js.map

//# sourceMappingURL=index.c0c35ec9.js.map
