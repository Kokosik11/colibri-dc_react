import{j as e,a as i,S as A,A as l,b as a,M as s,c,d as r,N as n,r as d,R as t,e as o}from"./vendor.8d47c00e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver((e=>{for(const A of e)if("childList"===A.type)for(const e of A.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&i(e)})).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const i=function(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?i.credentials="include":"anonymous"===e.crossorigin?i.credentials="omit":i.credentials="same-origin",i}(e);fetch(e.href,i)}}();const m=A=>e("header",{className:"header",children:i("div",{className:"header-content",children:[i("div",{className:"logo",children:[e("img",{src:"data:image/png;base64,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",alt:"Colibri DC logo"}),e("h2",{children:"Colibri Development Company"})]}),i("div",{onClick:A.onClickFunction,className:"burger-btn",children:[e("div",{}),e("div",{}),e("div",{})]})]})});const h=A=>i("div",{className:"burger",children:[e("div",{className:"burger-content_left",children:e("header",{children:i("div",{className:"logo",children:[e("img",{src:"./assets/colibri-logo_burger.aebdd0a8.png",alt:"Colibri DC logo"}),e("h2",{children:"Colibri Development Company"})]})})}),e("div",{className:"burger-content_right",children:i("header",{children:[i("div",{className:"phone",children:[e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgBnVZNUhpREO5+DxKX5AAKnCBjIlQqm+AN9ATKCRwXkZgsgBVQWYgnEE+gNxB3KaHi3GBAU9mGbFJRmNfpfjA6ITNE7aqpeczrfl//fg+EiOwV/Q1NqSoBOUDYpdSk3PqSH0CMfChcbfPriAA9AOqCDg6TdFW4qBSHNUX6BIhyCOQBUgkCffm+4DvxhgEfDl3WdRDAxUD7DHxUeePn5nVx6tWwzcsd9mhAY7Pe8vKD/bWhS4gHBDBiL1eTvLT2rzgqDVVe5ti5ASk+I6KP92GTd8MAbS8/uk+Jz3v6KM4wFqw4rHKaa/P6Cm0ELGOzGQUQafbyHTaosWEOJwwWEalfpXB9GU1R8yJbR6Jd0YdAnYS6alpk6EqK4ryzhlJchFL0u5rojOL68XJbarf32t+Q741+ts014Aed/eJwaxYJjBgoAwuEkDK2NlHwryudRn/lBQRQlu5RSp9U1vyS7D0bB3U51xC4s0jAQ0THdfxYoI+FbxIpdxycxu0LmKFgU9YIWooPdUk7Ylei+fT2e1YpQGu8lErtxB1iAmNbGI3qQoK0+vkuO3oqKQ1bHrkE1v7GlFR6PDm2KUNyk6KxympxSpWhDh88Upim6Rc8n76D2ZwUr7n1qEZE7VY/uxs1rjLwTVr/kLb8fWtW5zvwIWInvnmxXJcp55DdsEtCkfxKt0hbLqX1ATxB7mjF8JxI2lDpf6ih0VvZtVTD7SpzAY8UjP5YNOGSttu0OmNCdGRfkWqbgH4ynbzjQza4EJkkUsV51JAa4mgmuj9nNpg9pVjughjZL1wJMbpJQBXHz6VS+qUhleFJGzR6y+d/O8iDCMH6517eSwSZpm7Y4e2tJKBku2nKo+ytkpSbvSwr07FM7XOuRdw9EW/HpApBmb3PhKSqFhtkt0Oy44l/FFCUVNX/DKR9Q7oXtg2ZdZGIM8LuPNzeg0CsZ7N7QpSJsJN0zYq4JT+DRp/Zw4mHGBYUPtZD7ipM2wPsNcvGNaPMediuAvD8lzpD4llimmr2s/VHg4Qyu/93LJhEZ/+xSFooZ4cSoNPsrZRD/SeB3EWldIknfovZ1yG0hw+4Fu1WL3sY1f0DdCnLiZj61BYAAAAASUVORK5CYII=",alt:"Phone icon"}),e("a",{href:"tel:+375295448533",className:"number",children:"375 29 544 85 33"})]}),e("div",{className:"close",onClick:A.onClickFunction,children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB5djhDcIgEAVg4gQdoSM4ihvYDeoGdQNGcpSO0BFOqm2ClFI43usfX0JM5IQvGD1SY/45ItLMIzbRuvGSb+bX1pDi1n64MS172XByRawZGRi35lO2ufsFsUAxO4jfU4mcCBSTQGxOpF02hWMOEEPsA3BMMYKBUSOQmGoEAgND1GDgCA2GhijB0BGZmOkURCbmHIQCw0MEmNTXYTXrXkx5OjeaxPxNiPeZTyT96/Az0jAFCB7mAGGFdIUoQQxLDe0+k43wajkYUfxtwzFS0TtgGAE0sGqMALuoGiOEVl6McW90aEQuJiy2DEQm5uoXdixEBqYJC9dTmVt8bwiJYPq9wvhzCzzoesY+qrwBAj/HPOjzbKwAAAAASUVORK5CYII=",alt:"Close icon"})})]})})]});const g=()=>i("section",{className:"main",children:[e("img",{className:"triangle",src:"./assets/bg-item-1.01abd6d9.png",alt:"Background element"}),i("h1",{className:"tagline",children:["CОВЕРШЕНСТВО, РОЖДЕННОЕ ",e("span",{className:"purple",children:"СТРАСТЬЮ"})]}),e("div",{className:"jobs",children:i("div",{className:"jobs-content",children:[e("div",{className:"jobs-title",children:"Смотреть наши работы"}),e("div",{className:"line",children:e("div",{className:"active-line"})})]})})]});var p="./assets/Noise.2a8e31e6.png";const N=e=>{let i="";for(let A=0;A<e;A++)i+="$";return i},B=A=>A.title?e("div",{className:A.cardClass?`card ${A.cardClass}`:"card",children:i("div",{className:"card-content",children:[e("img",{className:"card-noise",src:p,alt:"Background noise"}),i("div",{className:"card-wrapper",children:[e("div",{className:"card-description",children:A.description?A.description:"This text about this card"}),e("h3",{className:"card-title",children:A.title?A.title:"This text is title"}),e("div",{className:"card-term",children:A.term?A.term:"This text is term"})]}),A.priceLevel?i("div",{className:"card-price",children:[e("div",{className:"card-price_level",children:N(A.priceLevel)}),e("div",{className:"card-price_bg",children:N(A.priceLevel)})]}):""]})}):e("div",{className:A.cardClass?`card ${A.cardClass}`:"card",children:e("div",{className:"card-content",children:e("img",{className:"card-noise",src:p,alt:"Background noise"})})}),U=e=>{let i="";for(let A=0;A<e;A++)i+="$";return i},v=A=>A.title?e("div",{className:A.cardClass?`card-firefox ${A.cardClass}`:"card-firefox",children:i("div",{className:"card-content",children:[e("img",{className:"card-noise",src:p,alt:"Background noise"}),i("div",{className:"card-wrapper",children:[e("div",{className:"card-description",children:A.description?A.description:"This text about this card"}),e("h3",{className:"card-title",children:A.title?A.title:"This text is title"}),e("div",{className:"card-term",children:A.term?A.term:"This text is term"})]}),A.priceLevel?i("div",{className:"card-price",children:[e("div",{className:"card-price_level",children:U(A.priceLevel)}),e("div",{className:"card-price_bg",children:U(A.priceLevel)})]}):""]})}):e("div",{className:A.cardClass?`card-firefox ${A.cardClass}`:"card-firefox",children:e("div",{className:"card-content",children:e("img",{className:"card-noise",src:p,alt:"Background noise"})})});A.use([l,a,s]);const E=()=>{let A="undefined"!=typeof InstallTrigger?v:B;return i("section",{className:"service",children:[i("div",{className:"service-title",children:[e("div",{className:"prefix"}),e("h2",{children:"Мы предлагаем"})]}),e("div",{className:"cards-content",children:i(c,{slidesPerView:4,spaceBetween:93,loop:!0,autoplay:{delay:6e3,disableOnInteraction:!1},speed:500,scrollbar:{hide:!1,draggable:!0},effect:"fade",centeredSlides:!0,loopFillGroupWithBlank:!0,className:"mySwiper",mousewheel:!0,children:[e(r,{children:e(A,{})}),e(r,{children:e(A,{})}),e(r,{children:e(A,{})}),e(r,{children:e(A,{})}),e(r,{children:e(A,{title:"Landing page",description:"Разработка сайта одностраничника",term:"от 7 дней",cardClass:"card-bg-1",priceLevel:1})}),e(r,{children:e(A,{title:"ECOMMERCE",description:"Разработка интернет магазина",term:"от 21 дней",cardClass:"card-bg-2",priceLevel:3})}),e(r,{children:e(A,{})})]})})]})};const u=i=>e("div",{className:i.className,children:i.children}),f=A=>i("div",{className:A.className,children:[e("img",{src:"./assets/list.90ff9022.png",alt:"List icon"}),A.children]}),R=()=>i("section",{className:"why-us",children:[i("div",{className:"why-us_title",children:[e("div",{className:"prefix"}),e("h2",{children:"Почему колибри"})]}),i("div",{className:"why-us_content",children:[e("div",{className:"why-us_text",children:"Мы проектируем и создаем digital решения, которые нужны клиентам."}),e("div",{className:"why-us_pink",children:"И мы весьма хороши в своем деле"}),i(u,{className:"why-us_list",children:[e(f,{children:"Скорость разработки"}),e(f,{children:"Индивидуальность"}),e(f,{children:"Поддержка"})]})]}),e("img",{className:"sphere-small",src:"./assets/bg-circle-s.337f61a2.png",alt:"Background circle"}),e("img",{className:"sphere",src:"./assets/gb-circle.b46dc639.png",alt:"Background circle"})]});const S=A=>i("a",{href:A.href?A.href:"",target:"_blank",className:"project",children:[e("div",{className:"card-img",children:A.img?e("img",{src:A.img,alt:A.alt}):""}),A.title?e("div",{className:"project-card_title",children:A.title}):""]});A.use([l,s,n]);const Y=()=>{const[A,l]=d.exports.useState(window.innerWidth);return d.exports.useEffect((()=>{l(window.innerHeight)})),i("section",{className:"projects",children:[i("div",{className:"projects-title",children:[e("div",{className:"prefix"}),e("h2",{children:"Витрина проектов"})]}),e("div",{className:"projects-content",children:i(c,{slidesPerView:3,spaceBetween:93,loop:!0,autoplay:{delay:6e3,disableOnInteraction:!1},speed:500,effect:"fade",centeredSlides:!0,loopFillGroupWithBlank:!0,className:"mySwiper-project",mousewheel:!0,navigation:!0,children:[e(r,{children:e(S,{img:"./assets/ohl.510eb09a.png",alt:"OHL website",title:"OHL website",href:"http://ohl.by/"})}),e(r,{children:e(S,{img:"./assets/REU-career.4aef3088.png",alt:"REU Career website"})}),e(r,{children:e(S,{img:"./assets/REU-enrollee.3c06e2f6.png",alt:"REU enrollee website"})})]})})]})};const C=()=>e("section",{className:"partners",children:i("div",{className:"partners-title",children:[e("div",{className:"prefix"}),e("h2",{children:"Наши партнеры"})]})});const I=i=>e("li",{children:e("a",{href:i.href,children:i.children})}),b=A=>i("div",{className:A.className,children:[e("h3",{className:"links-title",children:A.title}),e("div",{className:"links-list",children:e("nav",{children:e("ul",{children:A.children})})})]}),k=()=>e("section",{className:"footer",children:i("div",{className:"footer-content",children:[i("div",{className:"colibri-info",children:[i("div",{className:"colibri-logo",children:[e("img",{src:"data:image/png;base64,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",alt:"Colibri DC logo"}),e("h2",{children:"Colibri Development Company"})]}),e("div",{className:"colibri-social",children:i("ul",{children:[e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgBnVTLccJADJW0PvO55WAyTgVJCaYDOjBUQFIBdECowHEFIRXgDkIH7Aw55IYxuWGvojVxxjAYBt6M7V2t9ulZqxWCwAvXLT1oJ3AG1idHNUKEPgO0mDF2OBvIPu2GW58hS9A6GVKfZPKuXagju4/SpZB4R+Zk/zCsguYDZeA8WSchnAuxd4qoE6b9E0QWLSsaEBdutBmSA5m2Vuuck1q64WZs1R5sIQzgHAzrr6A5xSJylM7l45drYtSMEGc5fBCQJmVGEq1Xx7U1eTuRnBc5y0H5SBDyXvbVWAWNQhQV/03wDjeDdTmivxOMb1UFjIt/MvvamXxQjXANDMKsHGM5kOPvSd4mNSVQJ0vb+jpQVrA6+HgdkagCHFfnWJ103tKJWJ7hBlUHyixW/cYLI/oSI75EtDOme2x1qhN7YRHYVrt/iej7xD1GN1z7qNQQGfzz5cGJrL/+GDNNajpMkbM7ueBK1BApUcWemL1ShbQaDcgzIYmSC23qF10Wpu3k4YTnAAAAAElFTkSuQmCC",alt:"Twitter icon"})})}),e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG4SURBVHgBnZS7SwNBEMa/2TsfCAbT+UBQWxuDndUdpNfOUm2sBcWAf4CgVtYWaqkiaGdnBLELXqOlBB/4AqMRVNTdcffyIJcz8eIHx93N7PxuZm52Cb+oM/XqADQBKH1Hn7Exk0fEnmLsPyzH9qpjKAjI6SB7XYc5qK8sIN27pXg2BOpZyA0paR0y0IEIYsazYuk+rsS9MshkQrBOa0FGBiwMdgvEWgnXOcZW5qsMI5IJk5ldWFo7k7lkC2aTzQFbCURkYizdCrh213x+jIsNrVZvXAQg+Q/GyztXL3N0RY7NhFHUkCmpMouZnY8aK60JQaAhRNDJxXc9tyMYHAn0h/qoM5UPFb073RYoq1JntxLJ1beQXcAfrui6fAp9V48Be+b3p/U1Wek4OP/CVU76f21koDAhJxfStx2cyRCIiAxIbuquB0Brx4U5GR9uKoO2Mp/YzvzecJ3jntBTmS5m9U9x9n4pti8KL3JK75VnNCgC6xjlmmcfZPaKsKTbCMxAhKXKJ4AoOW4W4x5DJkyqEThphkqYmJLBrvQW6f3dqfyoAsb0QWaG1R/Yb0XGl4aijbuV9qNq8g+yd634x7YRdgAAAABJRU5ErkJggg==",alt:"Facebook icon"})})}),e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL3SURBVHgBjVS9b9NQEL87PzdO+HL/AJBZQEhIpAgkWEpKhYCpAcRSCcWVkBAsFAYWkEJZmFBhACaUmpGhLQNiQg1dQEiICIYiBmjFBqJ1+pHYif2O50cbuQWJXhQ/+779u98ZYVUeFr7k45jKTFRgZhsAtR6Tg9UPAZlh9ZB1Yp402+2Ry2/3zWq/5PL4yDsXUVR0JNMCE8ypUB8RWauYEdLCcICQu3UBiIcuvT3kYSX/0gGyvqqU9dgwhi6+652ETciTw9MuyXhU3doQt3uEFQdlkIEqTcOD7wf+m2SiMOEIFqMsf3jLvjFEiOOSuSwyUb2oGlw4+9n10gEfihVb2NkSE+eTZ4q4uv/poJddaQxIYBXD9uCnC33j+zwfJB8TmVbdVgBU1yUpjDocNqdaP0NnDRQFp/v+9KPbQd0/01ik25EAXTgT+nMKlrywWv4fzFISzC9PAa44ZBr30czo15Wt0OUodg3J42L518ETs/d9nai94KtJgjB5cV2S6Z3X3fa87yjbWO/3e9dSptfTu274yPKqQLOknh8kyi65lFCECbMBoBV2vMkKj5EVMBitsY1AY1fjOWSaiGYj39HlAoBsgIKywTqaYK6leYME+NfItqqiCgUC4rS/CgABuRApnchq1pJWJeIAbBiC6raUAI+SXneU2WZSkQXmQmXAToUwK7wMNoYR5PCb/nN2hOgJoTzbWEQOSsD47ejUsw5VjGyoh6VeLWQJ0L1m6KuO+VOFYp+Vk2py4Jrqrzs19KbNckzH1+G2paW3Txg74rrycdLGvurkrDp2vzl/yjWIejmZi8Sa2V7yel5U/bSvsT3KK4zqWLt8ckIxc4ApPtvz+NWm9mxNPlw55aLkimp1jDgjR8xuieY2qMzc7C9tNsnHW/1Fc1s0au6IGKxwRI9r5k7BJQEV/bUB9JFkTS/FPxIoZtggwVEAJ6vFHMHQ3nLV6/jO3C04XVu4TAaosbPNqTyoZ67pkjAjoVmdmapxE0b23KjWEp/fD5FZ/6ExumYAAAAASUVORK5CYII=",alt:"Instagram icon"})})}),e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBpVM9S8NQFD0JKujQZig4VYM4FESsqxQaBxEVNbooOthBBLf+g9YfILWjUzcXhwZKJ5EMFgexky5OSevQkg7RVFyfL68lTVKibT1w3yfv3MM79wKDwDIIygoLFQkJI+O1SujI4g4rJkaGiyiO8D9UuYi6oUHejGNo9BMRzEQJ8pdmJnEqjUQkYNxDqGHNnsH3PWq3JOpSDl9GAe2G5L+uIvmxgWldxFRAVlMTKImKl2eC8zMm/VpImgT7s25FBLsa2GY71cR6ke5VvxIVlXuCcMh5VMAyCSLyY4yNlpGCXpOwtQd8WsgihiWEQK3GcLDVHB2wjJSEZaXSk879wIoIEVF5ZMsTROnIrXIo6RgCPdfq72zS8Q0Oiu6cmw0RA6BLxCn0k9nqAm/IINZ7zPNZ1OpsKSHSyRUI04jj+NDbAk8PKqyWiXKxU8WOizs5/Irbm7Tben/0TJBF/IX5uYU0rVgPgd0SV1i0SWhxyoGNyvkP7IwlNDOT4OUIJgRaSzo9Vehn5T0m+PAD9JrP8m6UJ8wAAAAASUVORK5CYII=",alt:"Tiktok icon"})})}),e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgBpZPPSxtBFMe/bzbahNqol3oQSnqpWigYaHvqIUt768FI70qPLZ6FxLsRz3qOevCq/gEaBU8quCBo/HFYBA96ivFXYsw+Z2bdmKxRI35hmbdv5n34zpsZQh11p85iDsQgATH5G1E5Zlgg+XF5YS8ZnvfXUC3gKsLgtCyL4UmRTSAzmwjZD0Cfx897y2XKyLANDUg6zDGzuT/SYlVArhNns1FINUyQiCpnQifADTupFhHaGOW0jj+N5uNExhxeIYJjBkBGX3Wys9Vt29Epo6eD0P3ekLGDtUMH794QwkEgXwDOilypUScsZFlvNWjwWxMW/4Uw9KNJF6R+NyPxs1nPJX+5c2qsdYSY6lENaHq9pMeBrwEN8vT9g4H+LwHtbmK15N9dRPgzaktqYThIWPof1LmeDoHJP64rNafW+KVAtj85s3GD7InbE0+eO7Vlr4/3YktI9rIflC8wBmaLmNu60U3dOXbQny5oJ52tQvastkcMski9K4bI4DUixLXHrtRl5vn39ajs3cTbj8IFFv/KIYcXi3OEa1NFGpRNtNuGwebLYJwzjJKpaisgpe3hFkvSo6hzinUgy4RSdHu43fIyVG9Z19hFn3zZ8btb711YW52ww2LqIBla8dfcAga/teIS6UM0AAAAAElFTkSuQmCC",alt:"vk icon"})})}),e("li",{children:e("a",{href:"#",children:e("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB3VS7DcIwFLzHr6GhAYkum5AR2ACYAJD4lEANRTbAIzACTMAIhAqJUKREAmGeHT4BERSTVFwR3TnO+d6LbUJ/7wBoIwkIDrGRRArIvCgJlU7gB+RCXGBW6Wo28HxI2YEBMqE0/pPLEgzx3iOhDQlGaRTCpXE5ZAX04vIaFutlsJxOyFr1j1Rym8dsRCQSmFZamvX3c342WVOgvRpO5y2cqvv4sueN2Gx8l69/LQrT8go4+ujsrMfYrDzRVRgZDdmgUFwjn91gcGiE3izMjM451R9Lc3mxP02JZxQDf2z03EcElxu6vHH71lwRaCrxsal/mYcUrxEiB0nB188VvUFVuv4CZBoAAAAASUVORK5CYII=",alt:"Linkening icon"})})})]})})]}),i("div",{className:"footer-links",children:[i(b,{title:"Colibri",className:"links-group",children:[e(I,{href:"#",children:"Наши услуги"}),e(I,{href:"#",children:"Принципы"}),e(I,{href:"#",children:"Партнеры"}),e(I,{href:"#",children:"Проекты"})]}),i(b,{title:"Соискатели",className:"links-group",children:[e(I,{href:"#",children:"Вакансии"}),e(I,{href:"#",children:"О компании"})]}),i(b,{title:"Документы",className:"links-group",children:[e(I,{href:"#",children:"Публичная оферта"}),e(I,{href:"#",children:"Политика конфиденциальности"}),e(I,{href:"#",children:"Регистрация"})]})]}),i("div",{className:"mailing",children:[e("h3",{children:"Рассылка"}),e("button",{children:"Подписаться"})]})]})});function Q(){const[A,l]=d.exports.useState(!1),a=()=>{l(!A)};return i("main",{className:"App",children:[e(m,{onClickFunction:a}),A?e(h,{onClickFunction:a}):null,e(g,{}),e(E,{}),e(R,{}),e(Y,{}),e(C,{}),e(k,{})]})}t.render(e(o.StrictMode,{children:e(Q,{})}),document.getElementById("root"));