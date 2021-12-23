(this["webpackJsonpchristmas-task"]=this["webpackJsonpchristmas-task"]||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),i=(n(43),n(44),n(45),n(1)),c=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("a",{href:"https://rs.school/js/",className:"rs-icon"}),Object(i.jsxs)("div",{className:"author-info",children:["App developer:",Object(i.jsxs)("a",{href:"https://github.com/AnnaIgnatova",className:"author-name",children:[" ","Anna Ignatova"," "]}),Object(i.jsx)("span",{className:"dev-year",children:"2021"})]})]})})},l=n(5),u=n(7),m=n(8),d=n(10),h=n(9),b=o.a.createContext(),f=b.Provider,j=b.Consumer,v={sortingRule:{byNameAcs:!0,byNameDesc:!1,byYearAcs:!1,byYearDesc:!1},favorite:!1,sizes:{small:!1,medium:!1,big:!1},colors:{white:!1,yellow:!1,red:!1,blue:!1,green:!1},forms:{ball:!1,bell:!1,pine:!1,snowflake:!1,figure:!1},savedToys:[],slotsModal:!1,years:[1940,2020],count:[1,12],searchText:""},g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).searchToy=function(t){e.setState((function(e){return{searchText:t}}))},e.resetFilters=function(){e.setState((function(e){var t=Object(l.a)(e.years),n=Object(l.a)(e.count),a=Object.assign({},e.sizes),o=Object.assign({},e.colors),r=Object.assign({},e.forms);for(var s in a)a[s]=!1;for(var i in o)o[i]=!1;for(var c in r)r[c]=!1;return n=[1,12],t[0]=1940,t[1]=2020,{years:t,count:n,favorite:!1,sizes:a,colors:o,forms:r}}))},e.getColors=function(){return e.state.colors},e.chooseYear=function(t,n){e.setState((function(e){var a=Object(l.a)(e.years);return a[0]=t,a[1]=n,{years:a}}))},e.chooseCount=function(t,n){e.setState((function(e){var a=Object(l.a)(e.count);return a[0]=t,a[1]=n,{count:a}}))},e.toggleSlotsModal=function(){e.setState((function(e){return{slotsModal:!e.slotsModal}}))},e.toggleFavorite=function(){e.setState((function(e){return{favorite:!e.favorite}}))},e.chooseSortingRule=function(t){e.setState((function(e){var n=Object.assign({},e.sortingRule);for(var a in n)n[a]=!1;return n[t]=!0,{sortingRule:n}}))},e.chooseSize=function(t){e.setState((function(e){var n=Object.assign({},e.sizes);return n[t]=!n[t],{sizes:n}}))},e.chooseColor=function(t){return e.setState((function(e){var n=Object.assign({},e.colors);return n[t]=!n[t],{colors:n}})),e.state.colors},e.chooseForm=function(t){e.setState((function(e){var n=Object.assign({},e.forms);return n[t]=!n[t],{forms:n}}))},e.addToSaved=function(t){e.setState((function(e){var n=Object(l.a)(e.savedToys);return n.push(t),{savedToys:n}}))},e.removeFromSaved=function(t){e.setState((function(e){var n=Object(l.a)(e.savedToys);return n.splice(n.indexOf(t),1),{savedToys:n}}))},e.state=v,e}return Object(m.a)(n,[{key:"render",value:function(){return Object(i.jsx)(f,{value:{sizes:this.state.sizes,colors:this.state.colors,forms:this.state.forms,sortingRule:this.state.sortingRule,savedToys:this.state.savedToys,slotsModal:this.state.slotsModal,favorite:this.state.favorite,years:this.state.years,count:this.state.count,searchText:this.state.searchText,chooseSize:this.chooseSize,chooseColor:this.chooseColor,chooseForm:this.chooseForm,chooseSortingRule:this.chooseSortingRule,addToSaved:this.addToSaved,removeFromSaved:this.removeFromSaved,toggleSlotsModal:this.toggleSlotsModal,toggleFavorite:this.toggleFavorite,getColors:this.getColors,chooseYear:this.chooseYear,chooseCount:this.chooseCount,resetFilters:this.resetFilters,searchToy:this.searchToy},children:this.props.children})}}]),n}(a.Component),p=(n(47),function(e){var t=e.title;return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"header-icon sound-icon"}),Object(i.jsx)("div",{className:"header-icon snow-icon"}),Object(i.jsx)("input",{type:"search",className:"header-search",placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(t){e.searchToy(t.target.value)}}),Object(i.jsx)("div",{className:"header-title",children:t}),Object(i.jsx)("div",{className:"favorite-count",children:e.savedToys.length})]})})}})}),y=(n(48),function(e){return Object(i.jsx)(j,{children:function(t){return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-title",children:e.info.name}),Object(i.jsx)("div",{className:"card-img",style:{backgroundImage:"url(/toys/".concat(e.info.num,".png)")}}),Object(i.jsxs)("div",{className:"card-info",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Count:"})," ",e.info.count]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Year of purchase:"})," ",e.info.year]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Shape:"})," ",e.info.shape]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Color:"})," ",e.info.color]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Size:"})," ",e.info.size]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Favorite:"})," ",e.info.favorite?"yes":"no"]})]}),Object(i.jsx)("div",{id:e.info.num,className:"favorite-toy ".concat(t.savedToys.includes(e.info.num)?"":"not-favorite-toy"),onClick:function(e){var n,a;(console.log(t.savedToys),e.target.classList.contains("not-favorite-toy"))?t.savedToys.length+1>20?t.toggleSlotsModal():t.addToSaved(null===(n=e.target)||void 0===n?void 0:n.id):t.removeFromSaved(null===(a=e.target)||void 0===a?void 0:a.id)}})]})}})}),O=(n(49),[{num:"1",name:"big ball with a picture",count:"2",year:"1960",shape:"ball",color:"yellow",size:"big",favorite:!1},{num:"2",name:"Green ball with flowers",count:"5",year:"2000",shape:"ball",color:"green",size:"big",favorite:!1},{num:"3",name:"Red matte ball",count:"3",year:"1990",shape:"ball",color:"red",size:"big",favorite:!1},{num:"4",name:"Red Icicle",count:"2",year:"1980",shape:"figure",color:"red",size:"big",favorite:!1},{num:"5",name:"Red grapes",count:"4",year:"1980",shape:"figure",color:"red",size:"medium",favorite:!0},{num:"6",name:"Red ball with a picture",count:"6",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"7",name:"Milky white ball",count:"12",year:"1960",shape:"ball",color:"white",size:"medium",favorite:!0},{num:"8",name:"Red ball",count:"10",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"9",name:"Old bell",count:"2",year:"1950",shape:"bell",color:"white",size:"big",favorite:!1},{num:"10",name:"White ball retro",count:"7",year:"1960",shape:"ball",color:"white",size:"big",favorite:!1},{num:"11",name:"White spruce pine",count:"11",year:"1960",shape:"pine",color:"white",size:"small",favorite:!1},{num:"12",name:"White ball with flowers",count:"5",year:"1980",shape:"ball",color:"white",size:"big",favorite:!1},{num:"13",name:"Ball Painted River",count:"3",year:"1970",shape:"ball",color:"blue",size:"big",favorite:!0},{num:"14",name:"Ball Painted Village",count:"4",year:"1970",shape:"ball",color:"blue",size:"big",favorite:!0},{num:"15",name:"Painted bell",count:"3",year:"1970",shape:"bell",color:"blue",size:"medium",favorite:!1},{num:"16",name:"Painted pine cone Landscape",count:"3",year:"1970",shape:"pine",color:"blue",size:"medium",favorite:!0},{num:"17",name:"Painted pine cone",count:"7",year:"1970",shape:"pine",color:"red",size:"medium",favorite:!1},{num:"18",name:"Yellow ball with a bow",count:"2",year:"2010",shape:"ball",color:"yellow",size:"big",favorite:!1},{num:"19",name:"Yellow ball with sequins",count:"12",year:"1980",shape:"ball",color:"yellow",size:"big",favorite:!1},{num:"20",name:"Red ball with a bow",count:"8",year:"1950",shape:"ball",color:"red",size:"medium",favorite:!0},{num:"21",name:"Red ball with stars",count:"4",year:"1970",shape:"ball",color:"red",size:"big",favorite:!0},{num:"22",name:"Golden spruce pine",count:"11",year:"1990",shape:"pine",color:"yellow",size:"small",favorite:!1},{num:"23",name:"Old bell",count:"9",year:"1950",shape:"bell",color:"yellow",size:"big",favorite:!1},{num:"24",name:"Graceful snowflake",count:"1",year:"1940",shape:"snowflake",color:"white",size:"big",favorite:!1},{num:"25",name:"Pink ball with sequins",count:"12",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"26",name:"Ruby-gold ball",count:"8",year:"1960",shape:"ball",color:"yellow",size:"big",favorite:!1},{num:"27",name:"Red ball with pattern",count:"4",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"28",name:"Burgundy ball with a pattern",count:"10",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"29",name:"Old ball with flowers",count:"5",year:"1950",shape:"ball",color:"yellow",size:"big",favorite:!0},{num:"30",name:"Antique ball with a pattern",count:"8",year:"1950",shape:"ball",color:"yellow",size:"big",favorite:!0},{num:"31",name:"Red ball with sparkles",count:"8",year:"2010",shape:"ball",color:"red",size:"big",favorite:!1},{num:"32",name:"Blue Ball Universe",count:"11",year:"1970",shape:"ball",color:"blue",size:"big",favorite:!1},{num:"33",name:"Blue ball with snowflake",count:"6",year:"2010",shape:"ball",color:"blue",size:"medium",favorite:!1},{num:"34",name:"Green ball with a pattern",count:"8",year:"2010",shape:"ball",color:"green",size:"big",favorite:!1},{num:"35",name:"Figurine of a Fox in a scarf",count:"8",year:"1950",shape:"figure",color:"yellow",size:"medium",favorite:!0},{num:"36",name:"Lilac Ball Blizzard",count:"1",year:"2000",shape:"ball",color:"blue",size:"big",favorite:!1},{num:"37",name:"Green Ball Blizzard",count:"6",year:"2000",shape:"ball",color:"green",size:"big",favorite:!1},{num:"38",name:"Blue Ball Blizzard",count:"6",year:"2000",shape:"ball",color:"blue",size:"big",favorite:!1},{num:"39",name:"Red Snowflake",count:"6",year:"1990",shape:"snowflake",color:"red",size:"big",favorite:!1},{num:"40",name:"Golden snowflake",count:"12",year:"2020",shape:"snowflake",color:"yellow",size:"big",favorite:!1},{num:"41",name:"Arctic Snowflake",count:"11",year:"2020",shape:"snowflake",color:"white",size:"big",favorite:!1},{num:"42",name:"Green ball",count:"10",year:"1980",shape:"ball",color:"green",size:"medium",favorite:!1},{num:"43",name:"Two-color snowflake",count:"6",year:"1960",shape:"snowflake",color:"red",size:"big",favorite:!1},{num:"44",name:"Angel Figurine",count:"11",year:"1940",shape:"figure",color:"red",size:"medium",favorite:!0},{num:"45",name:"New Year's snowflake",count:"1",year:"1980",shape:"snowflake",color:"white",size:"big",favorite:!1},{num:"46",name:"Amanita figurine",count:"10",year:"1950",shape:"figure",color:"red",size:"small",favorite:!1},{num:"47",name:"Figurine Well",count:"6",year:"1950",shape:"figure",color:"red",size:"small",favorite:!1},{num:"48",name:"Yellow ball with a bow",count:"6",year:"1960",shape:"ball",color:"yellow",size:"big",favorite:!1},{num:"49",name:"Snowflake with turquoise",count:"4",year:"1980",shape:"snowflake",color:"yellow",size:"big",favorite:!1},{num:"50",name:"Big bell",count:"3",year:"2020",shape:"bell",color:"red",size:"big",favorite:!1},{num:"51",name:"Pine cone with frost",count:"12",year:"1970",shape:"pine",color:"red",size:"small",favorite:!1},{num:"52",name:"Red ball with an inscription",count:"12",year:"1990",shape:"ball",color:"red",size:"big",favorite:!0},{num:"53",name:"Silver snowflake",count:"6",year:"2020",shape:"snowflake",color:"white",size:"big",favorite:!1},{num:"54",name:"Green ball with a picture",count:"6",year:"2010",shape:"ball",color:"green",size:"big",favorite:!1},{num:"55",name:"Gingerbread House",count:"1",year:"1940",shape:"figure",color:"yellow",size:"big",favorite:!1},{num:"56",name:"Gingerbread House",count:"1",year:"1940",shape:"figure",color:"yellow",size:"small",favorite:!1},{num:"57",name:"Gingerbread House",count:"1",year:"1940",shape:"figure",color:"yellow",size:"medium",favorite:!1},{num:"58",name:"Polar bear figurine",count:"2",year:"1980",shape:"figure",color:"white",size:"medium",favorite:!1},{num:"59",name:"Yellow ball with an inscription",count:"10",year:"1990",shape:"ball",color:"yellow",size:"medium",favorite:!1},{num:"60",name:"Figurine Dove",count:"12",year:"1940",shape:"figure",color:"white",size:"medium",favorite:!0}]),x=["small","medium","big"],w=["ball","bell","pine","snowflake","figure"],z=["white","yellow","red","blue","green"];function N(e,t){var n=[];return Object.values(e).filter((function(e){return e})).length?Object.values(e).forEach((function(e,a){e&&n.push(t[a])})):n=t,n}var k=function(e,t,n,a,o,r,s,c){var l,u=a.byYearAcs?"byYearAcs":a.byYearDesc?"byYearDesc":a.byNameAcs?"byNameAcs":a.byNameDesc?"byNameDesc":"",m=N(e,x),d=N(n,w),h=N(t,z),b=o?[!0]:[!0,!1];return null===(l=function(e){var t=O.slice(0);switch(e){case"byNameAcs":return t.sort((function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n<a?-1:n>a?1:0}));case"byNameDesc":return t.sort((function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n>a?-1:n<a?1:0}));case"byYearAcs":return t.sort((function(e,t){return+e.year-+t.year}));case"byYearDesc":return t.sort((function(e,t){return+t.year-+e.year}));default:return}}(u))||void 0===l?void 0:l.map((function(e){if(m.includes(e.size)&&d.includes(e.shape)&&h.includes(e.color)&&b.includes(e.favorite)&&Number(e.year)>=r[0]&&Number(e.year)<=r[1]&&Number(e.count)>=s[0]&&Number(e.count)<=s[1]&&e.name.toLowerCase().includes(c.toLowerCase()))return Object(i.jsx)(y,{info:e})}))},C=function(){return Object(i.jsx)(j,{children:function(e){var t=k(e.sizes,e.colors,e.forms,e.sortingRule,e.favorite,e.years,e.count,e.searchText);return Object(i.jsx)("div",{className:"cards",children:0===(null===t||void 0===t?void 0:t.filter((function(e){return e})).length)?Object(i.jsx)("div",{className:"no-toy",children:"no one toy \ud83e\udd7a"}):t})}})},S=(n(50),['By name from "A" to "Z"','By name from "Z" to "A"',"By year ascending","By year descending"]),T=["byNameAcs","byNameDesc","byYearAcs","byYearDesc"],F=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsxs)("div",{className:"sorting-select",children:[Object(i.jsxs)("div",{className:"sorting-select-default",onClick:function(){var e;null===(e=document.querySelector(".select-choose"))||void 0===e||e.classList.toggle("hidden")},children:[Object(i.jsxs)("span",{className:"default-text",children:[" ",S[0]]}),Object(i.jsx)("div",{className:"arrow-select"})]}),Object(i.jsx)("div",{className:"select-choose hidden",children:S.map((function(t,n){return Object(i.jsx)("div",{className:"select-item",id:T[n],onClick:function(t){var a,o=t.target;e.chooseSortingRule(o.id),document.querySelector(".default-text").textContent=S[n],null===(a=document.querySelector(".select-choose"))||void 0===a||a.classList.add("hidden")},children:t})}))})]})}})},R=(n(51),n(52),n(53),["ball","bell","pine","snowflake","figure"]),Y=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)("div",{className:"all-forms",children:R.map((function(t){return Object(i.jsxs)("div",{className:"form-wrapper",id:t,onClick:function(t){var n;e.chooseForm(t.currentTarget.id),null===(n=t.currentTarget.querySelector(".form-img"))||void 0===n||n.classList.toggle("select-form")},children:[Object(i.jsx)("div",{className:"form-img form-img-".concat(t," ").concat(e.forms[t]?"select-form":"")}),Object(i.jsx)("div",{className:"form-title",children:t})]})}))})}})},A=(n(54),n(17)),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){e.props.changeCount(t[0],t[1])},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(A.a,{min:this.props.min,max:this.props.max,onChange:this.handleChange,value:[this.props.count[0],this.props.count[1]]}),Object(i.jsxs)("div",{className:"count-ranges",children:[Object(i.jsx)("div",{className:"range-min",children:this.props.count[0]}),Object(i.jsx)("div",{className:"range-max",children:this.props.count[1]})]})]})}}]),n}(o.a.Component),L=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(B,{min:1,max:12,changeCount:e.chooseCount,count:e.count})})}})},M=(n(124),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){e.props.changeYear(t[0],t[1])},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(A.a,{min:this.props.min,max:this.props.max,onChange:this.handleChange,value:[this.props.years[0],this.props.years[1]]}),Object(i.jsxs)("div",{className:"count-ranges",children:[Object(i.jsx)("div",{className:"year-min",children:this.props.years[0]}),Object(i.jsxs)("div",{className:"year-max",children:[this.props.years[1]," "]})]})]})}}]),n}(o.a.Component)),D=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(M,{min:1940,max:2020,changeYear:e.chooseYear,years:e.years})})}})},G=(n(125),["white","yellow","red","blue","green"]),P=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)("div",{className:"all-forms",children:G.map((function(t){return Object(i.jsx)("div",{className:"color",id:t,style:{backgroundColor:t},onClick:function(t){var n,a;null===(n=t.currentTarget)||void 0===n||null===(a=n.querySelector(".line"))||void 0===a||a.classList.toggle("hidden"),e.chooseColor(t.currentTarget.id)},children:Object(i.jsx)("div",{className:"line ".concat(e.colors[t]?"":"hidden")})})}))})}})},q=(n(126),["small","medium","big"]),I=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)("div",{className:"sizes",children:q.map((function(t){return Object(i.jsxs)("label",{className:"size-item",children:[Object(i.jsx)("input",{type:"checkbox",name:"".concat(t),id:"",className:"size-checkbox",onChange:function(t){e.chooseSize(t.target.name)},checked:e.sizes[t]}),t]})}))})}})},W=(n(127),function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsxs)("label",{className:"favorite",children:[Object(i.jsx)("input",{type:"checkbox",name:"",id:"",className:"favorite-checkbox",onChange:function(){e.toggleFavorite()},checked:e.favorite}),"Only favorite"]})}})}),E=[{title:"Forms",component:Object(i.jsx)(Y,{})},{title:"Number of examples",component:Object(i.jsx)(L,{})},{title:"Year of purchase",component:Object(i.jsx)(D,{})},{title:"Color",component:Object(i.jsx)(P,{})},{title:"Size",component:Object(i.jsx)(I,{})},{title:"",component:Object(i.jsx)(W,{})}],H=function(){return Object(i.jsx)(i.Fragment,{children:E.map((function(e){return function(e,t){return Object(i.jsxs)("div",{className:"categories-block",children:[Object(i.jsx)("span",{className:"categories-title",children:e}),t]})}(e.title,e.component)}))})},J=[{name:"sorting",component:Object(i.jsx)(F,{})},{name:"categories",component:Object(i.jsx)(H,{})}],Z=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsx)("div",{className:"settings",children:Object(i.jsxs)("div",{className:"settings-content",children:[J.map((function(e){return function(e,t){return Object(i.jsxs)("div",{className:"settings-block ".concat(e),children:[Object(i.jsx)("span",{className:"settings-block-title",children:e}),t]})}(e.name,e.component)})),Object(i.jsxs)("div",{className:"settings-btns",children:[Object(i.jsx)("button",{children:"Save"}),Object(i.jsx)("button",{onClick:function(){e.resetFilters()},children:"Reset"})]})]})})}})},K=(n(128),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{title:"Toys"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"toys",children:[Object(i.jsx)(Z,{}),Object(i.jsx)(C,{})]})}),Object(i.jsx)(c,{})]})}),U=function(e){return Object(i.jsx)(j,{children:function(t){document.documentElement.scrollTop;return Object(i.jsx)("div",{className:"modal-wrapper ".concat(e.show?"":"hidden"),children:Object(i.jsxs)("div",{className:"modal",children:["No more free slots \ud83e\udd7a",Object(i.jsx)("div",{className:"ok-btn",onClick:t.toggleSlotsModal,children:"OK"})]})})}})},V=function(){return Object(i.jsx)(j,{children:function(e){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(U,{show:e.slotsModal}),Object(i.jsx)(K,{})]})}})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(g,{children:Object(i.jsx)(V,{})})}),document.getElementById("root")),Q()},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.7edb809d.chunk.js.map