(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),i=n(4),o=n.n(i),r=(n(17),n(5)),d=n(6),l=n(7),b=n(11),j=n(10),u=n(2),h=n.n(u),p=function(t){var e=t.good,n=t.neutral,c=t.bad,s=t.total,i=t.positivePercentage;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:h.a.statistic,children:["Good: ",e]}),Object(a.jsxs)("p",{className:h.a.statistic,children:["Neutral: ",n]}),Object(a.jsxs)("p",{className:h.a.statistic,children:["Bad: ",c]}),Object(a.jsxs)("p",{className:h.a.total,children:["Total: ",s]}),Object(a.jsxs)("p",{className:h.a.positive,children:["Positive feedback: ",i," %"]})]})},v=n(8),O=n.n(v),x=function(t){t.options;var e=t.onLeaveFeedback;return Object(a.jsxs)("div",{className:O.a.options,children:[Object(a.jsx)("button",{type:"button",name:"good",onClick:e,children:"Good"}),Object(a.jsx)("button",{type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(a.jsx)("button",{type:"button",name:"bad",onClick:e,children:"Bad"})]})},f=n(9),g=n.n(f),k=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:g.a.section,children:[Object(a.jsx)("h2",{children:e}),Object(a.jsx)("div",{children:n})]})},m=function(t){var e=t.message;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{style:{textAlign:"center",fontSize:"28px"},children:e})})},_=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),n=100*t.state.good/e;return Math.round(n)},t.onLeaveFeedback=function(e){var n=e.target.name;t.setState((function(t){return Object(r.a)({},n,t[n]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,s=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();Object.keys(this.state);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k,{title:"Please leave feedback",children:Object(a.jsx)(x,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),0===s?Object(a.jsx)(m,{message:"No feedback given"}):Object(a.jsx)(k,{title:"Statistics",children:Object(a.jsx)(p,{good:e,neutral:n,bad:c,total:s,positivePercentage:i})})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={statistic:"Statistics_statistic__1OlcQ",total:"Statistics_total__2nCw9",positive:"Statistics_positive__XrxBV"}},8:function(t,e,n){t.exports={options:"FeedbackOptions_options__2Xqtb"}},9:function(t,e,n){t.exports={section:"Section_section__1wiwG"}}},[[18,1,2]]]);
//# sourceMappingURL=main.3fc75b17.chunk.js.map