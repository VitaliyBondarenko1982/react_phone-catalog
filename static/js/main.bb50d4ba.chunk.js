(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{34:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){"use strict";t.r(c);var s,n,a=t(29),i=t.n(a),o=t(7),r=t(3);!function(e){e.HOME="/",e.PHONES="phones",e.TABLETS="tablets",e.ACCESSORIES="accessories",e.CART="cart",e.FAVORITES="favorites"}(s||(s={})),function(e){e.LOGO="logo-icon",e.HEART="heart-icon",e.HEART_FILL="heart-fill-icon",e.CART="cart-icon",e.ARROW_LEFT="arrow-left-icon",e.ARROW_RIGHT="arrow-right-icon",e.ARROW_BOTTOM="arrow-bottom-icon",e.ARROW_TOP="arrow-top-icon",e.HOME="home-icon",e.SEARCH="search-icon",e.MINUS="minus-icon",e.PLUS="plus-icon",e.CLOSE="close-icon"}(n||(n={}));var l,j=[{to:s.HOME,title:"Home"},{to:s.PHONES,title:"People"},{to:s.TABLETS,title:"Tablets"},{to:s.ACCESSORIES,title:"Accessories"}],d=[{to:s.FAVORITES,icon:n.HEART},{to:s.CART,icon:n.CART}];!function(e){e.PHONES="phones",e.TABLETS="tablets",e.ACCESSORIES="accessories"}(l||(l={}));var b=[{id:l.PHONES,to:s.PHONES,image:"img/category-phones.png",category:"Mobile phones"},{id:l.TABLETS,to:s.TABLETS,image:"img/category-tablets.png",category:"Tablets"},{id:l.ACCESSORIES,to:s.ACCESSORIES,image:"img/category-accessories.png",category:"Accessories"}],O={dots:!0,infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1},h={dots:!1,infinite:!0,speed:500,responsive:[{breakpoint:9999,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]},m=["img/banner-1.png","img/banner-2.png","img/banner-3.png","img/banner-4.png","img/banner-5.png"],p=t(8),u=t.n(p),x=(t(34),t(1)),_=function(e){var c=e.type,t=void 0===c?"primary":c,s=e.onClick,n=e.isDisabled,a=void 0!==n&&n,i=e.children,o=e.className;return Object(x.jsx)("button",{type:"button",disabled:a,onClick:s,className:u()("button",o,t,{"is-disabled":a}),children:i})},N=(t(36),function(e){var c=e.iconId;return Object(x.jsx)("svg",{className:u()("icon","__app-icon"),children:Object(x.jsx)("use",{href:"img/sprite.svg#".concat(c)})})}),f=function(e){var c=e.onClick,t=e.icon,s=e.className;return Object(x.jsx)(_,{onClick:c,type:"secondary",className:s,children:Object(x.jsx)(N,{iconId:t})})},g=(t(37),function(e){var c=e.title,t=e.tag,s=e.className,n=t||"h2";return Object(x.jsx)(n,{className:u()("heading",s),children:c})}),v=(t(38),function(){return Object(x.jsx)(o.c,{to:s.HOME,className:"logo __app-logo",children:Object(x.jsx)(N,{iconId:n.LOGO})})}),S=(t(40),function(){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("div",{className:"footer__container",children:[Object(x.jsx)(v,{}),Object(x.jsxs)("ul",{className:"footer__list",children:[Object(x.jsx)("li",{className:"footer__item",children:Object(x.jsx)(o.b,{to:"https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/",className:"footer__link",children:"Github"})}),Object(x.jsx)("li",{className:"footer__item",children:Object(x.jsx)(o.b,{to:"https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/",className:"footer__link",children:"Contacts"})})]}),Object(x.jsxs)("div",{className:"footer__on-top",children:[Object(x.jsx)("p",{className:"footer__on-top-text",children:"Back to top"}),Object(x.jsx)(_,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},type:"secondary",children:Object(x.jsx)(N,{iconId:n.ARROW_TOP})})]})]})})}),T=(t(41),function(){return Object(x.jsxs)("nav",{className:"navbar",children:[Object(x.jsx)("ul",{className:"navbar__main-list",children:j.map((function(e){var c=e.to,t=e.title;return Object(x.jsx)("li",{className:"navbar__main-item",children:Object(x.jsx)(o.c,{to:c,className:function(e){var c=e.isActive;return u()("navbar__main-link",{"is-active":c})},children:t})})}))}),Object(x.jsx)("ul",{className:"navbar__side-list",children:d.map((function(e){var c=e.to,t=e.icon;return Object(x.jsx)("li",{className:"navbar__side-item",children:Object(x.jsx)(o.c,{to:c,className:function(e){var c=e.isActive;return u()("navbar__side-link",{"is-active":c})},children:Object(x.jsx)(N,{iconId:t})})})}))})]})}),E=(t(42),function(){return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)(v,{}),Object(x.jsx)(T,{})]})}),A=t(15),R=t(25),y=t.n(R),C=function(){},k=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"".concat(e.slice(0,-c)," ").concat(e.slice(-c))},w=(t(58),t(59),t(60),function(){return Object(x.jsx)(y.a,Object(A.a)(Object(A.a)({},O),{},{className:"slider",prevArrow:Object(x.jsx)(f,{onClick:C,icon:n.ARROW_LEFT,className:""}),nextArrow:Object(x.jsx)(f,{onClick:C,icon:n.ARROW_RIGHT,className:""}),children:m.map((function(e){return Object(x.jsx)("div",{className:"slider__item",children:Object(x.jsx)("img",{className:"slider__image",src:e,alt:e})})}))}))}),H=(t(61),function(e){var c=e.phone,t=c.phoneId,a=c.image,i=c.name,r=c.price,l=c.fullPrice,j=c.screen,d=c.capacity,b=c.ram,O="".concat(s.PHONES,"/").concat(t);return Object(x.jsxs)("div",{className:"phone-card",children:[Object(x.jsx)(o.b,{to:O,className:"phone-card__link",children:Object(x.jsx)("img",{className:"phone-card__image",src:a,alt:i})}),Object(x.jsx)(o.b,{to:O,className:"phone-card__name",children:i}),Object(x.jsxs)("div",{className:"phone-card__price",children:[Object(x.jsx)("span",{className:"phone-card__current-price",children:r}),Object(x.jsx)("span",{className:"phone-card__full-price",children:l})]}),Object(x.jsxs)("ul",{className:"phone-card__details-list",children:[Object(x.jsxs)("li",{className:"phone-card__details-item",children:[Object(x.jsx)("span",{className:"phone-card__details-title",children:"Screen"}),Object(x.jsx)("span",{className:"phone-card__details-value",children:j})]}),Object(x.jsxs)("li",{className:"phone-card__details-item",children:[Object(x.jsx)("span",{className:"phone-card__details-title",children:"Capacity"}),Object(x.jsx)("span",{className:"phone-card__details-value",children:k(d)})]}),Object(x.jsxs)("li",{className:"phone-card__details-item",children:[Object(x.jsx)("span",{className:"phone-card__details-title",children:"RAM"}),Object(x.jsx)("span",{className:"phone-card__details-value",children:k(b)})]})]}),Object(x.jsxs)("div",{className:"phone-card__buttons",children:[Object(x.jsx)(_,{onClick:C,className:"phone-card__add-to-card",children:"Add to cart"}),Object(x.jsx)(_,{onClick:C,type:"secondary",className:"phone-card__add-to-favorite",children:Object(x.jsx)(N,{iconId:n.HEART})})]})]})}),I=(t(62),function(e){var c=e.products,t=e.title;return Object(x.jsxs)("div",{className:"products-slider",children:[Object(x.jsx)(g,{title:t,className:"products-slider__title"}),Object(x.jsx)(y.a,Object(A.a)(Object(A.a)({},h),{},{prevArrow:Object(x.jsx)(f,{onClick:C,icon:n.ARROW_LEFT,className:""}),nextArrow:Object(x.jsx)(f,{onClick:C,icon:n.ARROW_RIGHT,className:""}),children:c.map((function(e){return Object(x.jsx)(H,{phone:e})}))}))]})}),P=(t(63),function(e){var c=e.amount;return Object(x.jsxs)("div",{className:"shop-by-category",children:[Object(x.jsx)(g,{title:"Shop by category",className:"shop-by-category__title"}),Object(x.jsx)("ul",{className:"shop-by-category__list",children:b.map((function(e){var t=e.id,s=e.to,n=e.category,a=e.image;return Object(x.jsxs)("li",{className:"shop-by-category__item",children:[Object(x.jsx)(o.b,{to:s,className:"shop-by-category__image-link",children:Object(x.jsx)("img",{className:"shop-by-category__image",src:a,alt:n})}),Object(x.jsx)(o.b,{to:s,className:"shop-by-category__category",children:n}),Object(x.jsx)("p",{className:"shop-by-category__amount",children:"".concat(c[t]||0," models")})]},t)}))})]})}),L=(t(64),function(){return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(E,{}),Object(x.jsx)("div",{className:"app__content",children:Object(x.jsx)(r.a,{})}),Object(x.jsx)(S,{})]})}),B=function(){return Object(x.jsx)("div",{children:"Accessories page"})},M=function(){return Object(x.jsx)("div",{children:"Cart page"})},F=function(){return Object(x.jsx)("div",{children:"Favorites page"})},W=t(6),G=t(5),V=t(0),D=(t(65),function(e){return fetch("https://mate-academy.github.io/react_phone-catalog/_new"+e).then((function(e){if(!e.ok)throw new Error;return e.json()}))}),J=function(){var e=Object(V.useState)([]),c=Object(G.a)(e,2),t=c[0],s=c[1];Object(V.useEffect)((function(){var e;e=s,D("/products.json").then((function(c){return e(c)}))}),[]);var n=t.slice(0,12),a=Object(W.a)({},l.PHONES,t.length);return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:"home__section",children:Object(x.jsx)(I,{products:n,title:"Hot prices"})}),Object(x.jsx)("div",{className:"home__section",children:Object(x.jsx)(P,{amount:a})}),Object(x.jsx)("div",{className:"home__section",children:Object(x.jsx)(I,{products:n,title:"Brand new models"})})]})},U=function(){return Object(x.jsx)("div",{children:"Not Found Page"})},q=function(){return Object(x.jsx)("div",{children:"Phones page"})},z=function(){return Object(x.jsx)("div",{children:"Phones Details page"})},K=function(){return Object(x.jsx)("div",{children:"Tablets page"})},Q=function(){return Object(x.jsx)(r.d,{children:Object(x.jsxs)(r.b,{path:s.HOME,element:Object(x.jsx)(L,{}),children:[Object(x.jsx)(r.b,{path:s.HOME,element:Object(x.jsx)(J,{})}),Object(x.jsxs)(r.b,{path:s.PHONES,children:[Object(x.jsx)(r.b,{index:!0,element:Object(x.jsx)(q,{})}),Object(x.jsx)(r.b,{path:":slug",element:Object(x.jsx)(z,{})})]}),Object(x.jsx)(r.b,{path:s.TABLETS,element:Object(x.jsx)(K,{})}),Object(x.jsx)(r.b,{path:s.ACCESSORIES,element:Object(x.jsx)(B,{})}),Object(x.jsx)(r.b,{path:s.CART,element:Object(x.jsx)(M,{})}),Object(x.jsx)(r.b,{path:s.FAVORITES,element:Object(x.jsx)(F,{})}),Object(x.jsx)(r.b,{}),Object(x.jsx)(r.b,{path:"*",element:Object(x.jsx)(U,{})})]})})};i.a.render(Object(x.jsx)(o.a,{children:Object(x.jsx)(Q,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.bb50d4ba.chunk.js.map