(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(10),n=s.n(c),a=s(5),i=s(2),r=s(4),l=s.n(r),o=s(1),d=s.n(o),j=(s(16),s(17),s(18),s(3)),u=s.n(j),m=s(0),b=d.a.memo((function(e){var t=e.posts,s=e.handlePostSelect,c=e.selectedPostId;return Object(m.jsxs)("div",{"data-cy":"PostsList",children:[Object(m.jsx)("p",{className:"title",children:"Posts:"}),Object(m.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"has-background-link-light",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.title;return Object(m.jsxs)("tr",{"data-cy":"Post",children:[Object(m.jsx)("td",{"data-cy":"PostId",children:t}),Object(m.jsx)("td",{"data-cy":"PostTitle",children:n}),Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:u()("button","is-link",{"is-light":c===t}),onClick:function(){return s(e)},children:c===t?"close":"open"})})]},t)}))})]})]})})),h=s(8),O=(s(20),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),x="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(x+e,c)})).then((function(e){return e.json()}))}var v=function(e){return p(e)},N=function(e,t){return p(e,"POST",t)},y=function(e){return p(e,"DELETE")},g=d.a.memo((function(e){var t=e.setComments,s=e.postId,c=Object(o.useState)(""),n=Object(i.a)(c,2),r=n[0],d=n[1],j=Object(o.useState)(""),b=Object(i.a)(j,2),O=b[0],x=b[1],f=Object(o.useState)(""),p=Object(i.a)(f,2),v=p[0],y=p[1],g=Object(o.useState)(!1),S=Object(i.a)(g,2),w=S[0],k=S[1],C=Object(o.useState)(!1),E=Object(i.a)(C,2),P=E[0],I=E[1],T=Object(o.useState)(!1),F=Object(i.a)(T,2),U=F[0],B=F[1],L=Object(o.useState)(!1),D=Object(i.a)(L,2),M=D[0],A=D[1],_=Object(o.useState)(""),J=Object(i.a)(_,2),q=J[0],W=J[1],G=function(){d(""),x(""),y(""),k(!1),I(!1),B(!1)};Object(o.useEffect)((function(){G()}),[s]);var Y=r.trim(),z=O.trim(),H=v.trim(),K=function(){var e=Object(a.a)(l.a.mark((function e(c){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===c||void 0===c||c.preventDefault(),k(!0),I(!0),B(!0),Y&&z&&H){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,A(!0),n={postId:s,name:r,email:O,body:v},e.next=11,N("/comments",n);case 11:a=e.sent,t((function(e){return e?[].concat(Object(h.a)(e),[a]):[a]})),B(!1),y(""),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),W("something went wrong"),setTimeout((function(){W("")}),3e3);case 20:A(!1);case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(e,t){switch(t){case"name":k(!1),d(e.target.value);break;case"email":I(!1),x(e.target.value);break;case"body":B(!1),y(e.target.value)}};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:q}),Object(m.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:K,children:[Object(m.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:u()("input",{"is-danger":!Y&&w}),value:r,onChange:function(e){Q(e,"name")}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-user"})}),!Y&&w&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!Y&&w&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:u()("input",{"is-danger":!z&&P}),value:O,onChange:function(e){Q(e,"email")}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-envelope"})}),!z&&P&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!z&&P&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:u()("input",{"is-danger":!H&&U}),value:v,onChange:function(e){Q(e,"body")}})}),!H&&U&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"submit",className:u()("button","is-link",{"is-loading":M}),children:"Add"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:G,children:"Clear"})})]})]})]})})),S=d.a.memo((function(e){var t=e.post,s=e.setIsError,c=e.error,n=Object(o.useState)(null),r=Object(i.a)(n,2),d=r[0],j=r[1],u=Object(o.useState)(!1),b=Object(i.a)(u,2),x=b[0],f=b[1],p=function(){var e=Object(a.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t.id,v("/comments?postId=".concat(c));case 2:s=e.sent,j(s);case 4:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){j(null),p(),f(!1)}),[t.id]);var N=function(e){s(!1);try{!function(e){y("/comments/".concat(e))}(e),j((function(t){return t?Object(h.a)(t.filter((function(t){return t.id!==e}))):[]}))}catch(t){s(!0)}};return Object(m.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(m.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("h2",{"data-cy":"PostTitle",children:null===t||void 0===t?void 0:t.title}),Object(m.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(m.jsxs)("div",{className:"block",children:[d?Object(m.jsxs)(m.Fragment,{children:[c&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),Object(m.jsx)("p",{className:"title is-4",children:"Comments:"}),null!==d&&void 0!==d&&d.length?null===d||void 0===d?void 0:d.map((function(e){var t=e.id,s=e.email,c=e.name,n=e.body;return Object(m.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(m.jsxs)("div",{className:"message-header",children:[Object(m.jsx)("a",{href:s,"data-cy":"CommentAuthor",children:c}),Object(m.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return N(t)},children:"delete button"})]}),Object(m.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:n})]},t)})):Object(m.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})]}):Object(m.jsx)(O,{}),!x&&Object(m.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){f(!0)},children:"Write a comment"})]}),x&&Object(m.jsx)(g,{setComments:j,postId:null===t||void 0===t?void 0:t.id})]})})})),w=d.a.memo((function(e){var t=e.users,s=e.choosenUser,c=e.handleUserSelect,n=Object(o.useState)(!1),a=Object(i.a)(n,2),r=a[0],l=a[1];return Object(m.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(m.jsx)("div",{className:"dropdown-trigger",children:Object(m.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){l((function(e){return!e}))},children:[s?Object(m.jsx)("span",{children:s.name}):Object(m.jsx)("span",{children:"Choose a user"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),r&&Object(m.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(m.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(m.jsx)("a",{href:"#user-1",className:u()("dropdown-item",{"is-active":e.name===(null===s||void 0===s?void 0:s.name)}),onClick:function(){!function(e){c(e),l(!1)}(e)},children:e.name},e.id)}))})})]})})),k=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(o.useState)(null),r=Object(i.a)(n,2),d=r[0],j=r[1],h=Object(o.useState)(!1),x=Object(i.a)(h,2),f=x[0],p=x[1],N=Object(o.useState)(null),y=Object(i.a)(N,2),g=y[0],k=y[1],C=Object(o.useState)(null),E=Object(i.a)(C,2),P=E[0],I=E[1],T=function(){var e=Object(a.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/users");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=5;break}return e.next=3,s=g.id,v("/posts?userId=".concat(s));case 3:t=e.sent,j(t);case 5:case"end":return e.stop()}var s}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){T()}),[]),Object(o.useEffect)((function(){j(null),p(!1),F()}),[g]);return Object(m.jsx)("main",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"tile is-ancestor",children:[Object(m.jsx)("div",{className:"tile is-parent",children:Object(m.jsxs)("div",{className:"tile is-child box is-success",children:[Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(w,{users:s,choosenUser:g,handleUserSelect:function(e){I(null),k(e)}})}),Object(m.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!g&&Object(m.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),!d&&g&&Object(m.jsx)(O,{}),f&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!(null!==d&&void 0!==d&&d.length)&&null!==d&&Object(m.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!(null===d||void 0===d||!d.length)&&Object(m.jsx)(b,{posts:d,handlePostSelect:function(e){(null===P||void 0===P?void 0:P.id)===e.id?I(null):I(e)},selectedPostId:(null===P||void 0===P?void 0:P.id)||0})]})]})}),Object(m.jsx)("div",{"data-cy":"Sidebar",className:u()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":null===P||void 0===P?void 0:P.id}),children:P&&Object(m.jsx)("div",{className:"tile is-child box is-success ",children:Object(m.jsx)(S,{post:P,setIsError:p,error:f})})})]})})})};n.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.89d51eeb.chunk.js.map