(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var c=n(37),i=n.n(c),r=n(91),a=n.n(r),o=n(9),s=n(14),u=n(102),l=n(103),d=n(0),j=n.n(d),b=n(104),f=n(56),m=n.n(f),p=n(219),O=n(227),h=n(106),x=n.n(h),g=n(108),v=n.n(g),w=n(109),S=n.n(w),k=n(110),y=n.n(k),C=n(218),I=n(209),T=n(217),E=n.p+"static/media/Leapfrog.c4844923.ogg",N=(n(98),n(1));function L(e){var t=e.expiryTimestamp,n=e.updateTimeoutSeconds,c=e.removeTimer,i=e.id,r=e.isHidden,a=i.substring(0,i.lastIndexOf(" "));function s(e,n){if(!e||null===e)return u();var c=new Date,i=e.getHours()*Math.pow(60,2)+60*e.getMinutes()+e.getSeconds();return n?i:i?(c.setSeconds(c.getSeconds()+i),t=c,c):null}function u(){var e=new Date;return e.setHours(0,0,0,0),e}var j=Object(b.useTimer)({autoStart:!1,expiryTimestamp:t,onExpire:function(){!function(){m.a.close();var e=new Audio(E);e.loop=!0,e.play(),m.a.fire({title:"".concat(a,"'s off"),icon:"warning"}).then((function(){e.loop=!1,e.pause()}))}()}}),f=j.seconds,h=j.minutes,g=j.hours,w=j.isRunning,k=j.pause,L=j.resume,A=j.restart,H=Object(d.useState)(function(){var e=localStorage.getItem("input ".concat(i));return"null"!==e&&e?new Date(JSON.parse(e.toString())):u()}()),R=Object(o.a)(H,2),D=R[0],J=R[1];return Object(d.useEffect)((function(){localStorage.setItem("input ".concat(i),JSON.stringify(D)),n(s(D,!0));var e=s(D);A(e),k()}),[D]),r?Object(N.jsx)(N.Fragment,{}):Object(N.jsxs)("section",{className:"wrapper",children:[Object(N.jsxs)("div",{className:"title-bar",children:[Object(N.jsx)("h2",{children:a}),Object(N.jsx)(O.a,{"aria-label":"delete",color:"default",onClick:function(){localStorage.removeItem("input ".concat(i)),c()},children:Object(N.jsx)(x.a,{})})]}),Object(N.jsx)(I.b,{dateAdapter:C.a,children:Object(N.jsx)(T.a,{ampm:!1,ampmInClock:!1,views:["hours","minutes","seconds"],inputFormat:"HH:mm:ss",mask:"__:__:__",label:"INSERT TIME HERE",value:D,onChange:function(e){J(e)},renderInput:function(e){return Object(N.jsx)(p.a,Object(l.a)({onKeyDown:function(e){if("Enter"===e.key){var t=s(D);A(t)}}},e))}})}),Object(N.jsxs)("div",{className:"clock buttons",children:[Object(N.jsx)("div",{className:"clock",children:Object(N.jsxs)("div",{className:"actual-timer",children:[Object(N.jsx)("div",{className:"hours",children:g}),":",Object(N.jsx)("div",{className:"minutes",children:h}),":",Object(N.jsx)("div",{className:"seconds",children:f})]})}),Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)(O.a,{onClick:function(){if(w)k();else if(g||h||f)L();else{var e=s(D);if(!e)return;A(e)}},children:w?Object(N.jsx)(S.a,{}):Object(N.jsx)(v.a,{})}),Object(N.jsx)(O.a,{onClick:function(){var e=s(D);A(e),k()},children:Object(N.jsx)(y.a,{})})]})]}),Object(N.jsx)("hr",{})]})}var A=n(5),H=n(206),R=n(225),D=n(224),J=n(226),Z=n(20),_=n(115),M=n(221),F=n(112),B=n.n(F),G=n(111),K=n.n(G),P=n(113),V=n.n(P),Y=Object(A.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(H.a)(t.palette.common.white,0),"&:hover":{backgroundColor:Object(H.a)(t.palette.common.white,0)},marginLeft:0,width:"100%"}})),q=Object(A.a)("div")((function(e){return{paddingRight:e.theme.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),z=Object(A.a)(Z.c)((function(e){var t=e.theme;return{color:"inherit",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"}}}));function Q(e){var t=e.createTimer,n=e.changeInputFilter,c=e.sortList,i=Object(d.useState)(""),r=Object(o.a)(i,2),a=r[0],s=r[1],u=j.a.useState(null),l=Object(o.a)(u,2),b=l[0],f=l[1],m=Boolean(b),p=function(e){f(null),"object"!==typeof e&&c(e)};return Object(d.useEffect)((function(){n(a)}),[a]),Object(N.jsx)(D.a,{sx:{flexGrow:1,width:"100%"},children:Object(N.jsx)(R.a,{position:"static",children:Object(N.jsxs)(J.a,{children:[Object(N.jsx)(O.a,{onClick:function(e){f(e.currentTarget)},children:Object(N.jsx)(K.a,{style:{color:"white",cursor:"pointer",paddingRight:".3em"}})}),Object(N.jsxs)(_.a,{id:"basic-menu",anchorEl:b,open:m,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(N.jsx)(M.a,{onClick:function(){return p("A-Z")},children:"A-Z"}),Object(N.jsx)(M.a,{onClick:function(){return p("Z-A")},children:"Z-A"}),Object(N.jsx)(M.a,{onClick:function(){return p("time-up")},children:"Time (ascending)"}),Object(N.jsx)(M.a,{onClick:function(){return p("time-down")},children:"Time (descendig)"})]}),Object(N.jsxs)(Y,{children:[Object(N.jsx)(q,{children:Object(N.jsx)(B.a,{})}),Object(N.jsx)(z,{onChange:function(e){return s(e.target.value)},placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onKeyDown:function(e){"Escape"===e.key&&(e.target.value="",s(""))}})]}),Object(N.jsx)(D.a,{sx:{flexGrow:1}}),Object(N.jsx)("div",{children:Object(N.jsx)(O.a,{onClick:function(){t()},children:Object(N.jsx)(V.a,{style:{color:"white"}})})})]})})})}function U(){function e(){return(e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.fire({title:"Enter timer's name",input:"text",inputValidator:function(e){if(!e)return"You need to write something!"}}).then((function(e){if(e.value){var t=new Date;t.setSeconds(t.getSeconds()+0),i((function(n){return[].concat(Object(s.a)(n),[{timeoutSeconds:0,id:"".concat(e.value," ").concat(n.length),expiryTimestamp:t}])}))}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=Object(d.useState)(function(){var e=localStorage.getItem("timerList");return e&&e!==[]?JSON.parse(e.toString()):[]}()),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(d.useState)(""),l=Object(o.a)(r,2),j=l[0],b=l[1];return Object(d.useEffect)((function(){localStorage.setItem("timerList",JSON.stringify(c))}),[c]),Object(N.jsxs)("div",{id:"main",children:[Object(N.jsx)(Q,{createTimer:function(){return function(){return e.apply(this,arguments)}()},changeInputFilter:function(e){return b(e)},sortList:function(e){return function(e){var t="";switch(e){case"A-Z":t=Object(s.a)(c).sort((function(e,t){return e.id.localeCompare(t.id)}));break;case"Z-A":t=Object(s.a)(c).sort((function(e,t){return t.id.localeCompare(e.id)}));break;case"time-up":t=Object(s.a)(c).sort((function(e,t){return e.timeoutSeconds-t.timeoutSeconds}));break;case"time-down":t=Object(s.a)(c).sort((function(e,t){return t.timeoutSeconds-e.timeoutSeconds}));break;default:return null}i(t)}(e)}}),c.map((function(e){return Object(N.jsx)(L,{id:e.id,isHidden:!e.id.substring(0,e.id.lastIndexOf(" ")).toLocaleLowerCase().includes(j.toLocaleLowerCase()),expiryTimestamp:e.expiryTimestamp,removeTimer:function(){return function(e){i((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},updateTimeoutSeconds:function(t){return function(e,t){var n=Object(s.a)(c),r=n.findIndex((function(t){return t.id===e.id}));n[r].timeoutSeconds=t,i(n)}(e,t)}},e.id)}))]})}i.a.render(Object(N.jsx)(U,{}),document.getElementById("root"))},98:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.502e836f.chunk.js.map