(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{38:function(e,t,n){e.exports={comments:"Comments_comments__2SsXl"}},39:function(e,t,n){e.exports={form:"NewCommentForm_form__UxnDZ",loading:"NewCommentForm_loading__3YF9s",control:"NewCommentForm_control__2BCEF",actions:"NewCommentForm_actions__27MAu"}},40:function(e,t,n){e.exports={item:"CommentItem_item__Fm4dH"}},41:function(e,t,n){e.exports={comments:"CommentsList_comments__1er6K"}},42:function(e,t,n){"use strict";n.r(t);var c=n(37),o=n(0),s=n(2),m=n(38),a=n.n(m),r=n(15),i=n(35),d=n(36),l=n(39),j=n.n(l),u=n(1),b=function(e){var t=Object(o.useRef)(),n=Object(i.a)(d.a),c=n.sendRequest,s=n.status,m=n.error,a=e.onAddedComment,l=e.quoteId;Object(o.useEffect)((function(){"completed"!==s||m||(console.log("test"),a())}),[s,m,a]);var b=function(e){e.preventDefault();var n=t.current.value;console.log(n),c({commentData:{text:n},quoteId:l})};return Object(u.jsxs)("form",{className:j.a.form,onSubmit:b,children:["pending"===s&&Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{})}),Object(u.jsxs)("div",{className:j.a.control,onSubmit:b,children:[Object(u.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(u.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Comment"})})]})},x=n(40),O=n.n(x),f=function(e){return Object(u.jsx)("li",{className:O.a.item,children:Object(u.jsx)("p",{children:e.text})})},h=n(41),_=n.n(h),p=function(e){return Object(u.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(u.jsx)(f,{text:e.text},e.id)}))})};t.default=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),n=t[0],m=t[1],l=Object(s.j)(),j=l.quoteId,x=Object(i.a)(d.c),O=x.sendRequest,f=x.status,h=x.data;Object(o.useEffect)((function(){O(j)}),[j,O]);var _,C=Object(o.useCallback)((function(){O(j)}),[O,j]);return"pending"===f&&(_=Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(r.a,{})})),"completed"===f&&h&&h.length>0&&(_=Object(u.jsx)(p,{comments:h})),"completed"!==f||h&&0!==h.length||(_=Object(u.jsx)("p",{className:"centered",children:"No Comments were added yet."})),Object(u.jsxs)("section",{className:a.a.comments,children:[Object(u.jsx)("h2",{children:"User Comments"}),!n&&Object(u.jsx)("button",{className:"btn",onClick:function(){m(!0)},children:"Add a Comment"}),n&&Object(u.jsx)(b,{quoteId:l.quoteId,onAddedComment:C}),_]})}}}]);
//# sourceMappingURL=5.dabb3313.chunk.js.map