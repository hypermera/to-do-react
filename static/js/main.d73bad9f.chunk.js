(window["webpackJsonpto-do"]=window["webpackJsonpto-do"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(15),n(1)),l=n(2),s=n(4),u=n(3),d=n(5),p=n(9),m=n(8);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=r.a.createContext(),h=function(e,t){switch(t.type){case"DELETE_TODO":return b({},e,{todos:e.todos.filter(function(e){return t.payload!==e.id})});case"ADD_TODO":return b({},e,{todos:[].concat(Object(p.a)(e.todos),[t.payload])});case"UPDATE_TODO":return b({},e,{todos:e.todos.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}},y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[{id:1,todo:"React ile bir app yap",finish:!0},{id:2,todo:"React \xf6\u011frenmeye devam et",finish:!1},{id:3,todo:"Firebase ile react ba\u011flant\u0131s\u0131 yapmaya \xe7al\u0131\u015f",finish:!1}],dispatch:function(e){n.setState(function(t){return h(t,e)})}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),j=O.Consumer,v=n(16),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).inputChange=function(e){var t=e.target.value;n.setState({todo:t})},n.addTodo=function(e,t){t.preventDefault();var a=n.state.todo,r={id:v(),todo:a,finish:!1};console.log(r),e({type:"ADD_TODO",payload:r})},n.state={id:"",todo:"",finish:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j,null,function(t){var n=t.dispatch;return r.a.createElement("div",{className:"col-12 mt-5"},r.a.createElement("form",{onSubmit:e.addTodo.bind(e,n)},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{className:"form-control",placeholder:"Add TO-DO","aria-label":"Add TO-DO","aria-describedby":"button-submit",name:"todo",type:"text",value:e.state.todo,onChange:e.inputChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("input",{className:"btn btn-dark",name:"submit",type:"submit",id:"button-submit"})))))})}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).DeleteTodo=function(e,t){e({type:"DELETE_TODO",payload:n.props.id})},n.updateTodo=function(e,t){e({type:"UPDATE_TODO",payload:{id:n.props.id,todo:n.props.job,finish:!n.props.finish}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j,null,function(t){var n=t.dispatch;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},e.props.finish?r.a.createElement("div",{style:{textDecoration:"line-through"}},e.props.job):r.a.createElement("div",null,e.props.job),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-check fa-2x",onClick:e.updateTodo.bind(e,n),style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times fa-2x ml-3",onClick:e.DeleteTodo.bind(e,n),style:{cursor:"pointer"}})))})}}]),t}(a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,function(e){var t=e.todos;return r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement(g,{key:e.id,job:e.todo,id:e.id,finish:e.finish})})))})}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(D,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d73bad9f.chunk.js.map