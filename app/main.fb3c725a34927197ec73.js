(()=>{"use strict";var e=document.querySelector(".todo-list"),t=document.querySelector(".todo-input"),n=document.querySelector(".todo-button"),o=document.querySelector(".search");n.addEventListener("click",(function(n){n.preventDefault();var o=function(e){var t=document.createElement("li");t.classList.add("todo-item");var n=document.createElement("span");n.innerText=e,n.classList.add("todo-text"),t.appendChild(n);var o=document.createElement("button");return o.innerHTML='<i class="fas fa-times"></i>',o.classList.add("todo-remove-button"),o.addEventListener("click",function(e){return function(t){t.preventDefault(),confirm("Are you shure?")&&(e.classList.add("todo-item_fall"),e.remove())}}(t)),t.appendChild(o),t}(t.value);e.appendChild(o),t.value=""})),o.addEventListener("input",(function(){e.childNodes.forEach((function(e){!function(e,t){var n=e.value.toLowerCase();return!!Array.from(t.childNodes).find((function(e){return e.classList.contains("todo-text")})).innerText.toLowerCase().includes(n)}(o,e)?e.style.display="none":e.style.display="flex"}))}))})();