(this["webpackJsonpcultured-site"]=this["webpackJsonpcultured-site"]||[]).push([[0],{44:function(e,t,a){},51:function(e,t,a){e.exports=a(86)},58:function(e,t,a){},61:function(e,t,a){},80:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);a(52),a(53);var r=a(0),n=a.n(r),c=a(34),l=a.n(c),s=(a(58),a(2)),i=a(3),o=a(5),u=a(4),m=a(46),d=a(6),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-expand-lg bg-danger fixed-top"},n.a.createElement("a",{class:"navbar-brand logo text-dark",href:"/"},"CULTURED"),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo01"},n.a.createElement("ul",{class:"navbar-nav ml-auto mt-2 mt-lg-0 pr-5"},n.a.createElement("a",{class:"nav-item btn btn-outline-light btn-",href:"/Brazil"},"Visit Random")))))}}]),a}(n.a.Component),h=a(25),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handleFilterTextChange=r.handleFilterTextChange.bind(Object(h.a)(r)),r}return Object(i.a)(a,[{key:"handleFilterTextChange",value:function(e){this.props.onFilterTextChange(e.target.value)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container align-center text-center"},n.a.createElement("div",{className:"text-light"},"Type the name of a particular country, or hit the Visit Random button to get started!",n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"}),n.a.createElement("div",{className:"col col-md-6"},n.a.createElement("form",null,n.a.createElement("div",{class:"form-group"},n.a.createElement("label",null),n.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search Country by Name",value:this.props.filterText,onChange:this.handleFilterTextChange})))),n.a.createElement("div",{className:"col-md"})))))}}]),a}(n.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){void 0!==e.props.country.countryPage&&(window.location.href=e.props.country.countryPage)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("a",{class:"btn btn-outline-danger m-1",onClick:this.handleClick,role:"button"},this.props.country.countryName)}}]),a}(n.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"continent pt-4"},n.a.createElement("h5",null,this.props.country.location))}}]),a}(n.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-md p-2 m-2"},this.props.elements)}}]),a}(n.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.filterText,a=[],r=[],c=null;return this.props.countries.forEach((function(l){-1!==l.countryName.toLowerCase().indexOf(t.toLowerCase())&&(l.location!==c&&(r.length>0&&a.push(n.a.createElement(E,{elements:r})),(r=[]).push(n.a.createElement(f,{country:l,key:e.props.countries.location}))),r.push(n.a.createElement(b,{country:l,key:l.countryName})),c=l.location)})),a.push(n.a.createElement(E,{elements:r})),n.a.createElement("div",null,n.a.createElement("div",{className:"container bg-light rounded"},n.a.createElement("div",{className:"row"},a)))}}]),a}(n.a.Component),y=a(27),x=(a(61),[""]),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.countries.forEach((function(t){-1===t.countryName.toLowerCase().indexOf(e.props.filterText.toLowerCase())?x=x.filter((function(e){return e!==t.countryCode})):x.push(t.countryCode)})),n.a.createElement(y.ComposableMap,{projectionConfig:{rotate:[-10,0,0],scale:100},width:"600",height:"300",className:"worldMap"},n.a.createElement(y.Sphere,{stroke:"#DDD"}),n.a.createElement(y.Graticule,{stroke:"#DDD"}),n.a.createElement(y.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",stroke:"#FFF",strokeWidth:.5},(function(e){return e.geographies.map((function(e){var t=-1!==x.indexOf(e.properties.ISO_A3);return n.a.createElement(y.Geography,{key:e.rsmKey,geography:e,fill:t?"#eb3636":"#adaaa6",onClick:function(){return console.log(e.properties.ISO_A3)}})}))})))}}]),a}(n.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={filterText:""},r.handleFilterTextChange=r.handleFilterTextChange.bind(Object(h.a)(r)),r}return Object(i.a)(a,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,{filterText:this.state.filterText,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),n.a.createElement(w,{filterText:this.state.filterText,countries:this.props.countries}),n.a.createElement(v,{filterText:this.state.filterText,countries:this.props.countries}))}}]),a}(n.a.Component),C=[{location:"North America",countryName:"USA",countryCode:"USA",countryPage:"/United-States-of-America"},,{location:"North America",countryName:"Canada",countryCode:"CAN",countryPage:"/Canada"},{location:"North America",countryName:"Mexico",countryCode:"MEX",countryPage:"/Mexico"},{location:"Africa",countryName:"Nigeria",countryCode:"NGA",countryPage:"/Nigeria"},{location:"Africa",countryName:"Uganda",countryCode:"UGA",countryPage:"/Uganda"},{location:"South America",countryName:"Brazil",countryCode:"BRA",countryPage:"/Brazil"},{location:"Europe",countryName:"Romania",countryCode:"ROU",countryPage:"/Romania"},{location:"Asia",countryName:"Japan",countryCode:"JPN",countryPage:"/Japan"}],j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"colorlib-page"},n.a.createElement("div",{id:"container-wrap"},n.a.createElement("div",{id:"colorlib-main"},n.a.createElement(k,{countries:C}))))}}]),a}(r.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"pt-5 pt-3"},n.a.createElement("div",{className:"col text-light text-center"},n.a.createElement("h1",null,"Welcome to Cultured! "))),n.a.createElement("div",{className:"text-center"},n.a.createElement("a",{class:"btn btn-danger mt-3 mb-3",href:"/Nigeria",role:"button"},n.a.createElement("h4",null," Visit Random! "))),n.a.createElement("div",{className:"culture-red mr-5 ml-5 mb-4 mt-4"},n.a.createElement("div",{className:"flavor-line"})),n.a.createElement("div",{class:"container-xl"},n.a.createElement(j,null)),n.a.createElement("div",{className:"container-md  align-center text-center"},n.a.createElement("div",{className:"container mt-3 pb-3"},n.a.createElement("div",{className:"container pl-5 pr-5 pt-3 pb-3 bg-white rounded"},n.a.createElement("p",null,"Cultured is a virtual experience that immerses you in the culture of countries around the world."),n.a.createElement("p",null)))))}}]),a}(n.a.Component),O=a(1),U=a.n(O),N=a(8),T=(a(40),a(44),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).callNewsAPI=function(){var e=Object(N.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/newsAPI/"+t).then((function(e){return e.json()})).then((function(e){r.setState({newsData:{title:e.data.value[0].title,url:e.data.value[0].url,description:e.data.value[0].description,provider:e.data.value[0].provider.name,date:e.data.value[0].datePublished}}),r.callImgAPI()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.callRecipeAPI=function(){var e=Object(N.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/recipeAPI/"+t).then((function(e){return e.json()})).then((function(e){r.setState({recipeData:{image:e.data.recipes[0].image,sourceurl:e.data.recipes[0].sourceUrl,summary:e.data.recipes[0].summary,title:e.data.recipes[0].title,prepTime:e.data.recipes[0].readyInMinutes,servings:e.data.recipes[0].servings,image1:e.data.recipes[1].image,sourceurl1:e.data.recipes[1].sourceUrl,summary1:e.data.recipes[1].summary,title1:e.data.recipes[1].title,prepTime1:e.data.recipes[1].readyInMinutes,servings1:e.data.recipes[1].servings,image2:e.data.recipes[2].image,sourceurl2:e.data.recipes[2].sourceUrl,summary2:e.data.recipes[2].summary,title2:e.data.recipes[2].title,prepTime2:e.data.recipes[2].readyInMinutes,servings2:e.data.recipes[2].servings}})}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.callImgAPI=Object(N.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),r.callGeoAPI=function(){var e=Object(N.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/geoAPI/"+t).then((function(e){return e.json()})).then((function(e){r.setState({geoData:{lat:e.data.lat,lon:e.data.lon,timezone:e.data.timezone,population1:e.data.population,code:e.data.country}}),r.callPlaceAPI()}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.callPlaceAPI=Object(N.a)(U.a.mark((function e(){var t,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state.geoData.lat,a=r.state.geoData.lon,e.next=3,fetch("http://localhost:5000/placeAPI/"+t+"/"+a).then((function(e){return e.json()})).then((function(e){r.setState({placeData:{name:e.data[0].name,kinds:e.data[0].kinds,lat:e.data[0].point.lat,lon:e.data[0].point.lon,name1:e.data[1].name,kinds1:e.data[1].kinds,lat1:e.data[1].point.lat,lon1:e.data[1].point.lon,name2:e.data[2].name,kinds2:e.data[2].kinds,lat2:e.data[2].point.lat,lon2:e.data[2].point.lon}})}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),r.callYoutubeAPI=Object(N.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),r.callGeneralImgAPIFlag=function(){var e=Object(N.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.callGeneralImgAPILocation=Object(N.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),r.state={newsData:{title:null,url:null,description:null,provider:null,date:null},recipeData:{image:null,sourceurl:null,summary:null,title:null,prepTime:null,servings:null},imgData:{news:null},geoData:{lat:null,lon:null,timezone:null,population1:null,code:null},placeData:{name:null,kinds:null,lat:null,lon:null,name1:null,kinds1:null,lat1:null,lon1:null,name2:null,kinds2:null,lat2:null,lon2:null},youtubeData:{title:null,id:null},generalImgData:{flag:null,location:null}},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.callNewsAPI(this.props.title).catch((function(e){return console.log(e)})),this.callRecipeAPI(this.props.foodTag).catch((function(e){return console.log(e)})),this.callGeoAPI(this.props.capital).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{class:"container-fluid  mt-4 "},n.a.createElement("div",{class:"row "},n.a.createElement("div",{class:"col-xl"}),n.a.createElement("div",{class:"col-xl-6"},n.a.createElement("div",{class:"card m-2"},n.a.createElement("div",{class:"card-body"},n.a.createElement("h1",{class:"card-title"},this.props.title)))),n.a.createElement("div",{class:"col-xl"}))),n.a.createElement("div",{class:"card-columns col"},n.a.createElement("div",{class:""},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-6 col-2-md d-flex align-items-stretch"},n.a.createElement("div",{class:" card m-2"},n.a.createElement("div",{class:"card-body "},n.a.createElement("img",{class:"card-img-top border border-dark",src:this.props.flagUrl,alt:"Card image cap"})))),n.a.createElement("div",{class:"col-6 col-2-md d-flex align-items-stretch"},n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Timezone"),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},this.state.geoData.timezone)))))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Fast Facts"),n.a.createElement("div",{class:"card-body"},n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Country code:"),n.a.createElement("p",{class:"card-text text-left"},this.state.geoData.code)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Capital:"),n.a.createElement("p",{class:"card-text text-left"},this.props.capital)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Capital Population:"),n.a.createElement("p",{class:"card-text text-left"},this.state.geoData.population1)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Area:"),n.a.createElement("p",{class:"card-text text-left"},this.props.area," km",n.a.createElement("sup",null,"2"))),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Language:"),n.a.createElement("p",{class:"card-text text-left"},this.props.language)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Currency:"),n.a.createElement("p",{class:"card-text text-left"},this.props.currency)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Religion:"),n.a.createElement("p",{class:"card-text text-left"},this.props.religion)))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"News"),n.a.createElement("div",{class:"card-body"},n.a.createElement("div",{class:"card border-secondary mb-3"},n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.newsData.title),n.a.createElement("p",{class:"card-text text-left "},this.state.newsData.description),n.a.createElement("p",{class:"card-text text-left text-muted"},"Provided by ",this.state.newsData.provider," | ",this.state.newsData.date),n.a.createElement("a",{class:"btn btn-outline-danger",href:this.state.newsData.url},"Read More"))))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Culture"),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},this.props.culture),n.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{class:"embed-responsive-item",src:this.props.cultureUrl,allowfullscreen:!0})))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Clothes"),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},this.props.clothes),n.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{class:"embed-responsive-item",src:this.props.clothesUrl,allowfullscreen:!0})))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Food"),n.a.createElement("div",{class:"card-body"},n.a.createElement("div",{class:"card border-secondary mb-3"},n.a.createElement("img",{class:"card-img-top card-img-top-stretch",src:this.state.recipeData.image,alt:"Card image cap"}),n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.recipeData.title),n.a.createElement("p",{class:"card-text text-left"},"Prepare in ",this.state.recipeData.prepTime," minutes | Makes ",this.state.recipeData.servings," servings"),n.a.createElement("a",{class:"btn btn-outline-danger",href:this.state.recipeData.sourceurl},"Learn to Make It"))),n.a.createElement("div",{class:"card border-secondary mb-3"},n.a.createElement("img",{class:"card-img-top card-img-top-stretch",src:this.state.recipeData.image1,alt:"Card image cap"}),n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.recipeData.title1),n.a.createElement("p",{class:"card-text text-left"},"Prepare in ",this.state.recipeData.prepTime1," minutes | Makes ",this.state.recipeData.servings1," servings"),n.a.createElement("a",{class:"btn btn-outline-danger",href:this.state.recipeData.sourceurl1},"Learn to Make It"))),n.a.createElement("div",{class:"card border-secondary mb-3"},n.a.createElement("img",{class:"card-img-top card-img-top-stretch",src:this.state.recipeData.image2,alt:"Card image cap"}),n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.recipeData.title2),n.a.createElement("p",{class:"card-text text-left"},"Prepare in ",this.state.recipeData.prepTime2," minutes | Makes ",this.state.recipeData.servings2," servings"),n.a.createElement("a",{class:"btn btn-outline-danger",href:this.state.recipeData.sourceurl2},"Learn to Make It"))))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Music"),n.a.createElement("div",{class:"card-body"},n.a.createElement("h5",{class:"card-title"},this.props.music),n.a.createElement("div",{class:"embed-responsive embed-responsive-16by9"},n.a.createElement("iframe",{class:"embed-responsive-item",src:this.props.musicUrl,allowfullscreen:!0})))),n.a.createElement("div",{class:" card m-2"},n.a.createElement("h5",{class:"card-header"},"Interesting Locations"),n.a.createElement("div",{class:"card-body mb-0 mt-0"},n.a.createElement("div",{class:"card border-secondary"},n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.placeData.name),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Latitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lat)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Longitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lon)),n.a.createElement("p",{class:"card-text text-left text-muted"},"Tags: ",this.state.placeData.kinds)))),n.a.createElement("div",{class:"card-body mb-0 mt-0"},n.a.createElement("div",{class:"card border-secondary"},n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.placeData.name1),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Latitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lat1)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Longitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lon1)),n.a.createElement("p",{class:"card-text text-left text-muted"},"Tags: ",this.state.placeData.kinds1)))),n.a.createElement("div",{class:"card-body mb-0 mt-0"},n.a.createElement("div",{class:"card border-secondary"},n.a.createElement("div",{class:"card-body text-dark"},n.a.createElement("h4",{class:"card-title text-left"},this.state.placeData.name2),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Latitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lat2)),n.a.createElement("div",{class:"row"},n.a.createElement("h5",{class:"card-text text-left pr-2 pl-4"},"Longitude: "),n.a.createElement("p",{class:"card-text text-left"},this.state.placeData.lon2)),n.a.createElement("p",{class:"card-text text-left text-muted"},"Tags: ",this.state.placeData.kinds2)))))),n.a.createElement("div",{class:"row m-0 mt-4 pb-4"},n.a.createElement("div",{class:"col-6"},n.a.createElement("a",{class:"btn btn-outline-light",href:"/"},n.a.createElement("h3",null,"Previous"))),n.a.createElement("div",{class:"col-6"},n.a.createElement("a",{class:"btn btn-outline-light",href:"/Japan"},n.a.createElement("h3",null,"Next")))))}}]),a}(n.a.Component)),P=(n.a.Component,a(80),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"bg-color align-center full-height"},"ReactDOM.render(",n.a.createElement(p,null),", document.getElementById('root'));",n.a.createElement("div",{className:""},n.a.createElement(m.a,null,n.a.createElement("main",null,n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/",exact:!0,component:D}),n.a.createElement(d.b,{path:"/Country",exact:!0,component:T}),"//brazil",n.a.createElement(d.b,{path:"/Brazil",exact:!0,render:function(){return n.a.createElement(T,{title:"Brazil",capital:"Bras\xedlia",foodTag:"latin_american",area:"8,515,767",currency:"Real",language:"Portuguese",religion:"Christianity",clothes:"Learn about Samba Costumes",clothesUrl:"https://www.youtube.com/embed/vRnIWyEmIvM",music:"",musicUrl:"https://www.youtube.com/embed/MsksC_3Jr4M",culture:"",cultureUrl:"https://www.youtube.com/embed/rbkPcc1-SH4",flagUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/400px-Flag_of_Brazil.svg.png"})}}),"//canada",n.a.createElement(d.b,{path:"/Canada",exact:!0,render:function(){return n.a.createElement(T,{title:"Canada",capital:"Ottawa",foodTag:"american",area:"9,984,670",currency:"Canadian Dollar",language:"English, French",religion:"CHristianity",clothes:"Learn about Winter Clothing",clothesUrl:"https://www.youtube.com/embed/kfPjDACrVyU",music:"",musicUrl:"https://www.youtube.com/embed/fuEGV4Pju5M",culture:"",cultureUrl:"https://www.youtube.com/embed/vDYXbUrcT7k",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png"})}}),"//japan",n.a.createElement(d.b,{path:"/Japan",exact:!0,render:function(){return n.a.createElement(T,{title:"Japan",capital:"Tokyo",foodTag:"chinese",area:"377,916",currency:"yen",language:"Japanese",religion:"Shinto, Buddhism",clothes:"",clothesUrl:"https://www.youtube.com/embed/vCRjSLNHr44",music:"",musicUrl:"https://www.youtube.com/embed/TXvopa2MNPg",culture:"",cultureUrl:"https://www.youtube.com/embed/PksWHKLmf0o",flagUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/400px-Flag_of_Japan.svg.png"})}}),"//mexico",n.a.createElement(d.b,{path:"/Mexico",exact:!0,render:function(){return n.a.createElement(T,{title:"Mexico",capital:"Mexico City",foodTag:"mexican",area:"1,972,550",currency:"Peso",language:"Spanish",religion:"Christianity (Roman Catholicism)",clothes:"Learn about Mestizo Dresses",clothesUrl:"https://www.youtube.com/embed/SspJaxM-TbE",music:"Learn about types of Mexican Music",musicUrl:"https://www.youtube.com/embed/o8DXItxL4Qo",culture:"",cultureUrl:"https://www.youtube.com/embed/MXmo1yf6or4",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png"})}}),"//nigeria",n.a.createElement(d.b,{path:"/Nigeria",exact:!0,render:function(){return n.a.createElement(T,{title:"Nigeria",capital:"Abuja",foodTag:"mediterranean",area:"923,769",currency:"Naira",language:"Yoruba, Hausa, Igbo",religion:"Islam, Christianity",clothes:"",clothesUrl:"https://www.youtube.com/embed/pAioOlHmIvk",music:"Explore some traditional music",musicUrl:"https://www.youtube.com/embed/0O7_-_iA1cc",culture:"",cultureUrl:"https://www.youtube.com/embed/-dwzFtDQQqM",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png"})}}),"//romania",n.a.createElement(d.b,{path:"/Romania",exact:!0,render:function(){return n.a.createElement(T,{title:"Romania",capital:"Bucharest",foodTag:"eastern_european",area:"238,397",currency:"Romanian Leu",language:"Romanian",religion:"Romanian Orthodoxy",clothes:"Learn about traditional Romanian Blouses",clothesUrl:"https://www.youtube.com/embed/try51F0u04o",music:"",musicUrl:"https://www.youtube.com/embed/va5qp3w3YnI",culture:"",cultureUrl:"https://www.youtube.com/embed/zBBB6QgfydQ",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png"})}}),"//uganda",n.a.createElement(d.b,{path:"/Uganda",exact:!0,render:function(){return n.a.createElement(T,{title:"Uganda",capital:"Kampala",foodTag:"mediterranean",area:"241,038",currency:"Ugandan Shilling",language:"English, Swahili",religion:"Christianity, Islam",clothes:"Learn about the Gomesi",clothesUrl:"https://www.youtube.com/embed/SJucZbxmcMk",music:"",musicUrl:"https://www.youtube.com/embed/9DQRrYQw3SE",culture:"",cultureUrl:"https://www.youtube.com/embed/3QXKug2HWcM",flagUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png"})}}),"//usa",n.a.createElement(d.b,{path:"/United-States-of-America",exact:!0,render:function(){return n.a.createElement(T,{title:"United States of America",capital:"Washington D.C.",foodTag:"american",area:"9,833,520",currency:"United States Dollar",language:"English",religion:"Christianity",clothes:"",clothesUrl:"https://www.youtube.com/embed/h_A3HmegYJ0",music:"",musicUrl:"https://www.youtube.com/embed/Lvz6dcq80oU",culture:"",cultureUrl:"https://www.youtube.com/embed/tLTCXNqjiE8",flagUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"})}}),n.a.createElement(d.a,{to:"/"})))))))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.c508054e.chunk.js.map