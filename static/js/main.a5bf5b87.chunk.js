(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(53)},,,,,,,,,function(e,a,t){var r={"./dc-arrow.jpg":20,"./dc-batman.jpg":21,"./dc-black.jpg":22,"./dc-blue.jpg":23,"./dc-flash.jpg":24,"./dc-green.jpg":25,"./dc-martian.jpg":26,"./dc-robin.jpg":27,"./dc-superman.jpg":28,"./dc-wonder.jpg":29,"./marvel-captain.jpg":30,"./marvel-cyclops.jpg":31,"./marvel-daredevil.jpg":32,"./marvel-hawkeye.jpg":33,"./marvel-hulk.jpg":34,"./marvel-iron.jpg":35,"./marvel-silver.jpg":36,"./marvel-spider.jpg":37,"./marvel-thor.jpg":38,"./marvel-wolverine.jpg":39};function n(e){var a=c(e);return t(a)}function c(e){var a=r[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=19},function(e,a,t){e.exports=t.p+"static/media/dc-arrow.a179d871.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-batman.8efedfa7.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-black.5d203be2.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-blue.871a00dd.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-flash.d22cd5d0.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-green.dae0db0a.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-martian.9629381c.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-robin.3b3b7dd1.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-superman.ad88dd85.jpg"},function(e,a,t){e.exports=t.p+"static/media/dc-wonder.b0117200.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-captain.71c5a519.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-cyclops.017af60c.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-daredevil.3d4c3df8.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-hawkeye.df41e28c.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-hulk.8f5cd939.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-iron.8f307eef.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-silver.c055e4a0.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-spider.9967f816.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-thor.9f1b74e5.jpg"},function(e,a,t){e.exports=t.p+"static/media/marvel-wolverine.a1a41d9a.jpg"},,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(8),l=t.n(c),i=t(4),s=Object(r.createContext)(),o=t(5),m="[auth] Login",u="[auth] Logout",p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(o.a)({},a.payload,{logged:!0});case u:return{logged:!1};default:return e}},d=t(3),h=t(0),v=function(){var e=Object(h.g)(),a=Object(r.useContext)(s).dispatch;return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"LoginScreen"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){a({type:m,payload:{name:"Jaime"}});var t=localStorage.getItem("lastPath")||"/marvel";e(t,{replace:!0})}},"Login"))},f=function(){var e=Object(h.g)(),a=Object(r.useContext)(s),t=a.user,c=a.dispatch;return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive?" active":"")},to:"/marvel"},"Marvel"),n.a.createElement(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive?" active":"")},to:"/dc"},"DC"),n.a.createElement(d.c,{className:function(e){return"nav-item nav-link "+(e.isActive?" active":"")},to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},t.name),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){c({type:u}),e("/login",{replace:!0})}},"Logout"))))},g=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],b=t(19),E=function(e){var a=e.id,t=e.superhero,r=(e.publisher,e.alter_ego),c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"col animate__animated animate__fadeIn"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:b("./".concat(a,".jpg")),className:"card-img",alt:t})),n.a.createElement("div",{className:"col-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},t),n.a.createElement("p",{className:"card-text"},r),r!==l&&n.a.createElement("p",{className:"text-muted"},l),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},c)),n.a.createElement(d.b,{to:"/hero/".concat(a)},"More..."))))))},j=function(e){var a=e.publisher,t=Object(r.useMemo)(function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher"));return g.filter(function(a){return a.publisher===e})}(a)},[a]);return n.a.createElement("div",{className:"row rows-cols-1 row-cols-md-3 g-3  animate__animated animate__fadeIn"},t.map(function(e){return n.a.createElement(E,Object.assign({key:e.id},e))}))},C=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"DC Screen"),n.a.createElement("hr",null),n.a.createElement(j,{publisher:"DC Comics"}))},_=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"MarvelScreen"),n.a.createElement("hr",null),n.a.createElement(j,{publisher:"Marvel Comics"}))},N=t(9),y=t.n(N),k=t(6),w=function(){var e=Object(h.g)(),a=Object(h.f)(),t=y.a.parse(a.search).q,c=void 0===t?"":t,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(i.a)(a,2),n=t[0],c=t[1];return[n,function(e){var a=e.target;c(Object(o.a)({},n,Object(k.a)({},a.name,a.value)))},function(){c(e)}]}({searchText:c}),s=Object(i.a)(l,2),m=s[0],u=s[1],p=m.searchText,d=Object(r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===e.length?[]:(e=e.toLowerCase(),g.filter(function(a){return a.superhero.toLowerCase().includes(e)}))}(c)},[c]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Search"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e("?q=".concat(p))}},n.a.createElement("input",{type:"text",placeholder:"Search a hero",className:"form-control",name:"searchText",autoComplete:"off",value:p,onChange:u}),n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary mt-1"},"Search"))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Results"),n.a.createElement("hr",null),""===c?n.a.createElement("div",{className:"alert alert-info"},"No hero searched"):0===d.length&&n.a.createElement("div",{className:"alert alert-danger"},"No results founded for: ",c),d.map(function(e){return n.a.createElement(E,Object.assign({key:e.id},e))}))))},x=function(){var e=Object(h.h)().heroId,a=Object(r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.find(function(a){return a.id===e})}(e)},[e]),t=Object(h.g)(),c=a.id,l=a.superhero,i=a.publisher,s=a.alter_ego,o=a.first_appearance,m=a.characters;return a?n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:b("./".concat(c,".jpg")),alt:l,className:"img-thumbnail animate__animated animate__fadeInLeft"})),n.a.createElement("div",{className:"col-8 animate__animated animate__fadeIn"},n.a.createElement("h3",null,l),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Alter ego:")," ",s),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Publisher:")," ",i),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"First Appearance:")," ",o)),n.a.createElement("h5",{className:"mt-3"},"Characters"),n.a.createElement("p",null,m),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){t(-1)}},"Return"))):n.a.createElement(h.a,{to:"/"})},M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement("div",{className:"container"},n.a.createElement(h.d,null,n.a.createElement(h.b,{path:"marvel",element:n.a.createElement(_,null)}),n.a.createElement(h.b,{path:"dc",element:n.a.createElement(C,null)}),n.a.createElement(h.b,{path:"search",element:n.a.createElement(w,null)}),n.a.createElement(h.b,{path:"hero/:heroId",element:n.a.createElement(x,null)}),n.a.createElement(h.b,{path:"/",element:n.a.createElement(_,null)}))))},O=function(e){var a=e.children,t=Object(r.useContext)(s).user,c=Object(h.f)(),l=c.pathname,i=c.search;return localStorage.setItem("lastPath",l+i),t.logged?a:n.a.createElement(h.a,{to:"/login"})},S=function(e){var a=e.children;return Object(r.useContext)(s).user.logged?n.a.createElement(h.a,{to:"/marvel"}):a},D=function(){return n.a.createElement(d.a,null,n.a.createElement(h.d,null,n.a.createElement(h.b,{path:"/login",element:n.a.createElement(S,null,n.a.createElement(v,null))}),n.a.createElement(h.b,{path:"/*",element:n.a.createElement(O,null,n.a.createElement(M,null))})))},A=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},B=function(){var e=Object(r.useReducer)(p,{},A),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)(function(){t&&localStorage.setItem("user",JSON.stringify(t))},[t]),n.a.createElement(s.Provider,{value:{user:t,dispatch:c}},n.a.createElement(D,null))};l.a.createRoot(document.getElementById("root")).render(n.a.createElement(B,null))}],[[10,2,1]]]);
//# sourceMappingURL=main.a5bf5b87.chunk.js.map