(this["webpackJsonpemployee-directories"]=this["webpackJsonpemployee-directories"]||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),s=a.n(r),c=(a(25),a(6)),o=a.n(c),i=a(18),m=a(7),u=a(2),p=a(3),E=a(5),d=a(4);a(27);var h=function(){return l.a.createElement(l.a.Fragment,null)};a(28);var f=function(e){var t=e.children;return l.a.createElement("div",{className:"wrapper"},t," ")};a(29);var y=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("p",null,"Click on the Employee header or use the search box using the first two letters of a name"))};a(30),a(31);var v=function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"WATKINS ENTERPRISE | 5503 W.LAKE STREET DURHAM NC | \xa9",(new Date).getFullYear())))))},g=(a(32),a(33),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("tbody",null,this.props.isFetching?this.props.employees.map((function(e,t){return console.log("employee",e),l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.cell),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob.date))})):l.a.createElement("div",null))}}]),a}(n.Component));function b(e){return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",{id:"tableHeader"},l.a.createElement("th",{scope:"img"},"Image"),l.a.createElement("th",{id:"fname"},"First "),l.a.createElement("th",{id:"lname"},"Last "),l.a.createElement("th",{id:"phone"},"Phone"),l.a.createElement("th",{id:"email"},"Email"),l.a.createElement("th",{id:"dob"},"DOB"))),l.a.createElement(g,{isFetching:e.isFetching,employees:e.employees})))}var N=a(19),w=a.n(N),k=function(){return w.a.get("https://randomuser.me/api/?results=200&nat=us")},O=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",filteredEmployees:[],employees:[],isFetching:!0,userInput:""},e.handleInput=function(t){console.log("this state employees",e.state.employees),e.setState({userInput:t.target.value,filteredEmployees:Object(m.a)(e.state.employees).filter((function(a){console.log("filter",e.state.employees);var n=new RegExp(t.target.value,"gi");return a.name.last.match(n)}))}),console.log("employee",e.state.employees)},e.sortByName=function(){var t=Object(m.a)(e.state.employees).sort((function(e,t){return e.name.last>t.name.last?1:-1}));console.log(t,e.state.employees),e.setState({filteredEmployees:t})},e.resetBack=function(){e.setState({filteredEmployees:e.state.employees})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,console.log(t.data.results),this.setState({employees:t.data.results,isFetching:!0,filteredEmployees:t.data.results}),console.log(t.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("employees",this.state.employees),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(f,null,l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement("input",{value:this.state.userInput,placeholder:"Enter name to search for....",onChange:function(t){return e.handleInput(t)}})),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("button",{onClick:this.sortByName,className:"btn btn-warning ml-2 mr-2 mb-4"},"Sort Last Name"),l.a.createElement("button",{onClick:this.resetBack,className:"btn btn-warning ml-2 mr-2 mb-4"},"Reset")),l.a.createElement("br",null),l.a.createElement(b,{isFetching:this.state.isFetching,employees:this.state.filteredEmployees}),l.a.createElement(h,null))),l.a.createElement(v,null),l.a.createElement("div",null)))}}]),a}(n.Component);a(51);s.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.23bf306d.chunk.js.map