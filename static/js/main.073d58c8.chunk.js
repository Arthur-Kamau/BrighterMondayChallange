(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),s=r(28),n=r.n(s),i=r(2),o=r(8),l=r(9),d=r(11),p=r(10),u=r(12),j=r.n(u),b=r(0),h=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={errror:"",name:"",units:0,price:0,category:"",categories:[]},e.randomInteger=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.submitForm=function(t){t.preventDefault(),j()({method:"post",url:"http://192.248.161.160/products",data:{productId:e.randomInteger(99,292929),productName:e.state.name,productUnits:e.state.units,productPrice:e.state.price,productCategory:e.state.category,productHasVariants:!1,productsVariants:[],productAttributes:[]}}).then((function(e){window.location.href="/"})).catch((function(r){console.log("======================================="),console.log("error "+t),console.log("======================================="),e.setState({errror:"errror occured"+t})}))},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;j()({method:"get",url:"http://192.248.161.160/productCategories",data:{}}).then((function(t){console.log("Data "),console.log(t.data),e.setState({categories:t.data})})).catch((function(t){e.setState({errror:"errror getting categories "})}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{className:"navbar  navbar-dark bg-dark",children:[Object(b.jsx)("span",{className:"navbar-brand",children:"Brightor Monday Store"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)("div",{className:"border-end bg-white",id:"sidebar-wrapper",children:Object(b.jsxs)("div",{className:"list-group list-group-flush",children:[Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/",children:"Home"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create",children:"Create Product"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create/variant",children:"Create Product Variant"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/categories",children:"Categories"})]})}),Object(b.jsxs)("div",{id:"page-content-wrapper",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),this.state.errror.length>0?Object(b.jsxs)("div",{className:"badge badge-danger",children:["  ",this.state.errror," "]}):Object(b.jsx)(c.a.Fragment,{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{marginTop:"100px"},className:"container-fluid row",children:[Object(b.jsx)("h2",{children:"Create a product"}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputName",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"exampleInputName","aria-describedby":"nameHelp",onChange:function(t){e.setState({name:t.target.value})},placeholder:"Enter Name"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"amountInputAmount",children:"Number of units"}),Object(b.jsx)("input",{onChange:function(t){try{var r=parseInt(t.target.value);e.setState({units:r,errror:""})}catch(a){e.setState({errror:"Number of units error"})}},type:"text",className:"form-control",id:"amountInputAmount","aria-describedby":"amountHelp",placeholder:"Enter Amount in Ksh"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"unitsInputAmount",children:"Units"}),Object(b.jsx)("input",{onChange:function(t){try{var r=parseInt(t.target.value);e.setState({units:r,errror:""})}catch(a){e.setState({errror:"Number of units error"})}},type:"text",className:"form-control",id:"amountInputAmount","aria-describedby":"amountHelp",placeholder:"Enter Units"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"unitsInputAmount",children:"Category"}),Object(b.jsx)("select",{onChange:function(t){e.setState({category:t.target.value})},id:"inputState",className:"form-control mx-5",children:this.state.categories.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.submitForm,children:"Submit"})]})})]})]})]})]})})}}]),r}(c.a.Component),m=(r(53),function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={error:"",products:[]},e.updateItem=function(e){},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;j()({method:"get",url:"http://192.248.161.160/products",data:{}}).then((function(t){console.log("response "),console.log(JSON.stringify(t.data));for(var r=t.data,a=[],c=0;c<r.length;c++){var s=r[c];console.error("Holla"+s.productId),a.push({id:s.productId,name:s.productName,units:s.productUnits,price:s.productPrice,category:s.productCategory,color:"none"})}e.setState({products:a})})).catch((function(t){console.log("======================================="),console.log("error "+t),console.log("======================================="),e.setState({error:"errror occured"})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{className:"navbar  navbar-dark bg-dark",children:[Object(b.jsx)("span",{className:"navbar-brand",children:"Brightor Monday Store"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)("div",{className:"border-end bg-white",id:"sidebar-wrapper",children:Object(b.jsxs)("div",{className:"list-group list-group-flush",children:[Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/",children:"Home"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create",children:"Create Product"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create/variant",children:"Create Product Variant"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/categories",children:"Categories"})]})}),Object(b.jsxs)("div",{id:"page-content-wrapper",children:[Object(b.jsx)("br",{}),Object(b.jsx)("div",{style:{marginTop:"10px",color:"black"},className:"container-fluid",children:this.state.products.map((function(t,r){return Object(b.jsxs)("div",{className:"card",style:{marginTop:"10px",marginBottom:"10px",width:"18rem"},children:[Object(b.jsx)("img",{className:"card-img-top",src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17aecd5a2d8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17aecd5a2d8%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:["Name: ",t.name]}),Object(b.jsxs)("p",{className:"card-text",children:["Price : Ksh ",t.price,"."]}),Object(b.jsxs)("p",{className:"card-text",children:["Category : ",t.category,"."]}),Object(b.jsxs)("p",{className:"card-text",children:["Units : ",t.units,"."]}),Object(b.jsx)("a",{href:"#",className:"btn btn-danger bi  bi-pen",onClick:function(r){e.updateItem(t.id)}})]})]},r)}))})]})]})]})}}]),r}(c.a.Component)),g=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:null},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("h1",{children:"To be done"})})}}]),r}(c.a.Component),x=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={error:"",newCategory:"",categories:[]},e.submitForm=function(t){t.preventDefault(),j()({method:"post",url:"http://192.248.161.160/productCategories",data:{data:e.state.newCategory}}).then((function(t){var r=e.state.categories;r.push(e.state.newCategory),e.setState({categories:r,newCategory:""})})).catch((function(t){e.setState({error:"errror "})}))},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;j()({method:"get",url:"http://192.248.161.160/productCategories",data:{}}).then((function(t){e.setState({categories:t.data})})).catch((function(t){e.setState({error:"errror "})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("nav",{className:"navbar  navbar-dark bg-dark",children:[Object(b.jsx)("span",{className:"navbar-brand",children:"Brightor Monday Store"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})})]}),Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)("div",{className:"border-end bg-white",id:"sidebar-wrapper",children:Object(b.jsxs)("div",{className:"list-group list-group-flush",children:[Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/",children:"Home"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create",children:"Create Product"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/create/variant",children:"Create Product Variant"}),Object(b.jsx)("a",{className:"list-group-item list-group-item-action list-group-item-light p-3",href:"/categories",children:"Categories"})]})}),Object(b.jsxs)("div",{id:"page-content-wrapper",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{marginTop:"100px",color:"black"},className:"container-fluid",children:[0==this.state.categories.length?Object(b.jsx)("h4",{children:"No cateores available"}):Object(b.jsx)("h6",{children:"Catgories"}),this.state.categories.map((function(e,t){return Object(b.jsx)("div",{className:"card",style:{width:"1rem"},children:e},t)})),Object(b.jsxs)("div",{style:{marginTop:"100px"},children:[Object(b.jsx)("h2",{children:"Create a category"}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputName",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"exampleInputName","aria-describedby":"nameHelp",onChange:function(t){e.setState({newCategory:t.target.value})},placeholder:"Enter Name"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.submitForm,children:"Submit"})]})})]})]})]})]})]})}}]),r}(c.a.Component);var O=function(){return Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/categories",children:Object(b.jsx)(x,{})}),Object(b.jsx)(i.a,{path:"/create",children:Object(b.jsx)(h,{})}),Object(b.jsx)(i.a,{path:"/create/variant",children:Object(b.jsx)(g,{})}),Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(m,{})})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,63)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))},f=r(17);n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f.a,{children:Object(b.jsx)(O,{})})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.073d58c8.chunk.js.map