(this["webpackJsonpreact-base"]=this["webpackJsonpreact-base"]||[]).push([[0],{183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=n(28),u=n(6),s=n(14),l=n(69),p=n(37),d=n(21),b=n(77),m=n(70),f=n.n(m),g=n(25),h=n(71),E=n.n(h).a.create({baseURL:"http://34.95.204.4"}),v={isLoggedIn:!1,token:!1,user:{},isLoading:!1},x=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":var n=Object(g.a)({},e);return n.isLoggedIn=!0,n.token=t.payload.token,n.user=t.payload.user,n.isLoading=!1,n;case"LOGIN_FAILURE":delete E.defaults.headers.Authorization;var a=Object(g.a)({},v);return a;case"LOGIN_REQUEST":var r=Object(g.a)({},e);return r.isLoading=!0,r;case"REGISTER_UPDATE_SUCCESS":var o=Object(g.a)({},e);return o.user.nome=t.payload.nome,o.user.email=t.payload.email,o.isLoading=!1,o;case"REGISTER_CREATED_SUCCESS":var c=Object(g.a)({},e);return c.isLoading=!1,c;case"REGISTER_FAILURE":var i=Object(g.a)({},e);return i.isLoading=!1,i;case"REGISTER_REQUEST":var u=Object(g.a)({},e);return u.isLoading=!0,u;default:return e}}}),O=n(8),j=n.n(O),y=n(16),S=n(13);function C(e){return{type:"LOGIN_SUCCESS",payload:e}}function k(e){return{type:"LOGIN_FAILURE",payload:e}}function w(e){return{type:"REGISTER_REQUEST",payload:e}}function L(e){return{type:"REGISTER_FAILURE",payload:e}}function R(e){return{type:"REGISTER_UPDATE_SUCCESS",payload:e}}function I(e){return{type:"REGISTER_CREATED_SUCCESS",payload:e}}var T=n(19),_=Object(T.a)(),A=j.a.mark(z),F=j.a.mark(U);function z(e){var t,n;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(y.b)(E.post,"/tokens",t);case 4:return n=a.sent,a.next=7,Object(y.c)(C(Object(g.a)({},n.data)));case 7:u.b.success("Voc\xea fez login"),E.defaults.headers.Authorization="Bearer ".concat(n.data.token),_.push(t.prevPath),a.next=17;break;case 12:return a.prev=12,a.t0=a.catch(1),u.b.error("Usu\xe1rio ou senha inv\xe1lidos"),a.next=17,Object(y.c)(k());case 17:case"end":return a.stop()}}),A,null,[[1,12]])}function U(e){var t,n,a,r,o,c;return j.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.payload,n=t.id,a=t.nome,r=t.email,o=t.password,i.prev=2,!n){i.next=11;break}return i.next=6,Object(y.b)(E.put,"/users",{email:r,nome:a,password:o||void 0});case 6:return u.b.success("Conta alterada com sucesso"),i.next=9,Object(y.c)(R({nome:a,email:r,password:o}));case 9:i.next=17;break;case 11:return i.next=13,Object(y.b)(E.post,"/users",{email:r,nome:a,password:o});case 13:return u.b.success("Conta criada  com sucesso"),i.next=16,Object(y.c)(I({nome:a,email:r,password:o}));case 16:_.push("/login");case 17:i.next=31;break;case 19:if(i.prev=19,i.t0=i.catch(2),c=Object(S.get)(i.t0,"response.data.error",[]),401!==Object(S.get)(i.t0,"response.status",0)){i.next=28;break}return u.b.error("Voc\xea precisa fazer login novamente."),i.next=27,Object(y.c)(k());case 27:return i.abrupt("return",_.push("/login"));case 28:return c.length>0?c.map((function(e){return u.b.error(e)})):u.b.error("Erro desconhecido"),i.next=31,Object(y.c)(L());case 31:case"end":return i.stop()}}),F,null,[[2,19]])}var G=Object(y.a)([Object(y.d)("LOGIN_REQUEST",z),Object(y.d)("persist/REHYDRATE",(function(e){var t=e.payload,n=Object(S.get)(t,"auth.token","");n&&(E.defaults.headers.Authorization="Bearer ".concat(n))})),Object(y.d)("REGISTER_REQUEST",U)]),N=j.a.mark(D);function D(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([G]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),N)}var P,Q=Object(b.a)(),B=Object(d.e)((P=x,Object(p.a)({key:"COMSUMO-API",storage:f.a,whitelist:["auth"]},P)),Object(d.a)(Q));Q.run(D);var V=Object(p.b)(B),J=B,M=n(10),H=n(11);n(108);function Y(){var e=Object(M.a)(["\n  max-width: 480px;\n  background: #fff;\n  margin: 30px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n"]);return Y=function(){return e},e}function q(){var e=Object(M.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    outline: none;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: sans-serif;\n    background: ",";\n    color: ",";\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  button {\n    cursor: pointer;\n    background: ",";\n    border: none;\n    color: #fff;\n    padding: 10px 20px;\n    border-radius: 4px;\n    font-weight: 700;\n    transition: all 300ms;\n  }\n\n  button:hover {\n    filter: brightness(85%);\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n\n  ul {\n    list-style:  none;\n  }\n\n  body .Toastify .Toastify__toast-container .Toastify__toast--success {\n    background: ",";\n  }\n  body .Toastify .Toastify__toast-container .Toastify__toast--error {\n    background: ",";\n  }\n"]);return q=function(){return e},e}var K=Object(H.a)(q(),"#1A1A1D","#1A1A1D","#C3073F","#C3073F","#0197F6","#F2AF29"),W=H.b.section(Y()),X=n(18),Z=n(17);function $(){var e=Object(M.a)(["\n  background: ",";\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  a {\n    color: #fff;\n    margin: 0 10px 0 0;\n    font-weight: bold;\n  }\n"]);return $=function(){return e},e}var ee=H.b.nav($(),"#C3073F");function te(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.isLoggedIn}));return r.a.createElement(ee,null,r.a.createElement(Z.a,{to:"/"},r.a.createElement(X.d,{size:24})),r.a.createElement(Z.a,{to:"/register"},r.a.createElement(X.g,{size:24})),t?r.a.createElement(Z.a,{onClick:function(t){t.preventDefault(),e(k()),_.push("/")},to:"/logout"},r.a.createElement(X.e,{size:24})):r.a.createElement(Z.a,{to:"/login"},r.a.createElement(X.f,{size:24})),t&&r.a.createElement(X.a,{size:24,color:"#66ff33"}))}var ne=n(78);function ae(e){var t=e.component,n=e.isClosed,a=Object(ne.a)(e,["component","isClosed"]),o=Object(s.c)((function(e){return e.auth.isLoggedIn}));return n&&!o?r.a.createElement(i.a,{to:{pathname:"/login",state:{prevPath:a.location.pathname}}}):r.a.createElement(i.b,Object.assign({},a,{component:t}))}ae.defaultProps={isClosed:!1};var re=n(23),oe=n(12),ce=n(26);function ie(){var e=Object(M.a)(["\n  text-align: center;\n"]);return ie=function(){return e},e}function ue(){var e=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 0 0 20px;\n  position: relative;\n  margin-top: 20px;\n\n  img {\n    width: 180px;\n    height: 180px;\n    border-radius: 50%;\n  }\n\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    position: absolute;\n    bottom: 0;\n    color: #fff;\n    background: ",";\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(M.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  input {\n    height: 40px;\n    margin-bottom: 20px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    padding: 0 10px;\n  }\n"]);return se=function(){return e},e}var le=H.b.form(se()),pe=H.b.div(ue(),"#C3073F"),de=H.b.h1(ie());function be(){var e=Object(M.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 30px;\n  div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background: rgba(0, 0, 0, 0.8);\n  }\n  span {\n    z-index: 2;\n  }\n"]);return be=function(){return e},e}var me=H.b.div(be());function fe(e){return e.isLoading?r.a.createElement(me,null,r.a.createElement("div",null),r.a.createElement("span",null,"Carregando ...")):r.a.createElement(r.a.Fragment,null)}function ge(e){var t=e.match,n=Object(s.b)(),o=Object(S.get)(t,"params.id",""),c=Object(a.useState)(""),i=Object(oe.a)(c,2),l=i[0],p=i[1],d=Object(a.useState)(""),b=Object(oe.a)(d,2),m=b[0],f=b[1],g=Object(a.useState)(""),h=Object(oe.a)(g,2),v=h[0],x=h[1],O=Object(a.useState)(""),y=Object(oe.a)(O,2),C=y[0],w=y[1],L=Object(a.useState)(""),R=Object(oe.a)(L,2),I=R[0],T=R[1],A=Object(a.useState)(""),F=Object(oe.a)(A,2),z=F[0],U=F[1],G=Object(a.useState)(""),N=Object(oe.a)(G,2),D=N[0],P=N[1],Q=Object(a.useState)(!1),B=Object(oe.a)(Q,2),V=B[0],J=B[1];Object(a.useEffect)((function(){function e(){return(e=Object(re.a)(j.a.mark((function e(){var t,n,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,J(!0),e.next=4,E.get("/alunos/".concat(o));case 4:t=e.sent,n=t.data,a=Object(S.get)(n,"Fotos[0].url",""),P(a),p(n.nome),f(n.sobrenome),x(n.email),w(n.idade),T(n.peso),U(n.altura),J(!1),e.next=24;break;case 17:e.prev=17,e.t0=e.catch(0),J(!1),r=Object(S.get)(e.t0,"response.status",0),c=Object(S.get)(e.t0,"response.data.errors",[]),400===r&&c.map((function(e){return u.b.error(e)})),_.push("/");case 24:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}o&&function(){e.apply(this,arguments)}()}),[o]);var M=function(){var e=Object(re.a)(j.a.mark((function e(t){var a,r,c,i,s,p;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=!1,(l.length<3||l.length>255)&&(u.b.error("Nome precisa ter entre 3 e 255 caracteres."),a=!0),(m.length<3||m.length>255)&&(u.b.error("Sobrenome precisa ter entre 3 e 255 caracteres."),a=!0),Object(ce.isEmail)(v)||(u.b.error("E-mail inv\xe1lido"),a=!0),Object(ce.isInt)(String(C))||(u.b.error("Idade inv\xe1lida"),a=!0),Object(ce.isFloat)(String(I))||(u.b.error("Peso inv\xe1lida"),a=!0),Object(ce.isFloat)(String(z))||(u.b.error("Altura inv\xe1lida"),a=!0),!a){e.next=10;break}return e.abrupt("return");case 10:if(e.prev=10,J(!0),!o){e.next=18;break}return e.next=15,E.put("/alunos/".concat(o),{nome:l,sobrenome:m,email:v,idade:C,peso:I,altura:z});case 15:u.b.success("Aluno(a) editado(a) com sucesso!"),e.next=24;break;case 18:return e.next=20,E.post("/alunos/",{nome:l,sobrenome:m,email:v,idade:C,peso:I,altura:z});case 20:r=e.sent,c=r.data,u.b.success("Aluno(a) criado(a) com sucesso!"),_.push("/aluno/".concat(c.id,"/edit"));case 24:J(!1),e.next=34;break;case 27:e.prev=27,e.t0=e.catch(10),i=Object(S.get)(e.t0,"response.status",0),s=Object(S.get)(e.t0,"response.data",{}),(p=Object(S.get)(s,"errors",[])).length>0?p.map((function(e){return u.b.error(e)})):u.b.error("Erro desconhecido"),401===i&&n(k());case 34:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(fe,{isLoading:V}),r.a.createElement(de,null,o?"Editar Aluno":"Novo Aluno"),o&&r.a.createElement(pe,null,D?r.a.createElement("img",{src:D,alt:l}):r.a.createElement(X.h,{size:180}),r.a.createElement(Z.a,{to:"/fotos/".concat(o)},r.a.createElement(X.b,{size:24}))),r.a.createElement(le,{onSubmit:M},r.a.createElement("input",{type:"text",value:l,onChange:function(e){return p(e.target.value)},placeholder:"Nome"}),r.a.createElement("input",{type:"text",value:m,onChange:function(e){return f(e.target.value)},placeholder:"Sobrenome"}),r.a.createElement("input",{type:"email",value:v,onChange:function(e){return x(e.target.value)},placeholder:"Email"}),r.a.createElement("input",{type:"number",value:C,onChange:function(e){return w(e.target.value)},placeholder:"Idade"}),r.a.createElement("input",{type:"text",value:I,onChange:function(e){return T(e.target.value)},placeholder:"Peso"}),r.a.createElement("input",{type:"text",value:z,onChange:function(e){return U(e.target.value)},placeholder:"Altura"}),r.a.createElement("button",{type:"submit"},"Enviar")))}fe.defaultProps={isLoading:!1};var he=n(76);function Ee(){var e=Object(M.a)(["\n  display: block;\n  padding: 20px 0 10px 0;\n"]);return Ee=function(){return e},e}function ve(){var e=Object(M.a)(["\n  img {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n  }\n"]);return ve=function(){return e},e}function xe(){var e=Object(M.a)(["\n  margin-top: 20px;\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 0;\n  }\n\n  div + div {\n    border-top: 1px solod #eee;\n  }\n"]);return xe=function(){return e},e}var Oe=H.b.div(xe()),je=H.b.div(ve()),ye=Object(H.b)(Z.a)(Ee());function Se(){var e=Object(a.useState)([]),t=Object(oe.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),i=Object(oe.a)(c,2),s=i[0],l=i[1];Object(a.useEffect)((function(){function e(){return(e=Object(re.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,E.get("/alunos");case 3:t=e.sent,o(t.data),l(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=function(e){e.preventDefault(),e.currentTarget.nextSibling.setAttribute("display","block"),e.currentTarget.remove()},d=function(){var e=Object(re.a)(j.a.mark((function e(t,a,r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),e.prev=1,l(!0),e.next=5,E.delete("/alunos/".concat(a));case 5:(c=Object(he.a)(n)).splice(r,1),o(c),l(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),401===Object(S.get)(e.t0,"response.status",0)?u.b.error("Voc\xea precisa fazer login"):u.b.error("Ocorreu um erro ao excluir aluno"),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n,a){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(fe,{isLoading:s}),r.a.createElement("h1",null,"Alunos"),r.a.createElement(ye,{to:"/aluno/"},"Novo Aluno"),r.a.createElement(Oe,null,n.map((function(e,t){return r.a.createElement("div",{key:String(e.id)},r.a.createElement(je,null,Object(S.get)(e,"Fotos[0].url",!1)?r.a.createElement("img",{src:e.Fotos[0].url,alt:""}):r.a.createElement(X.h,{size:36})),r.a.createElement("span",null,e.nome),r.a.createElement("span",null,e.email),r.a.createElement(Z.a,{to:"/aluno/".concat(e.id,"/edit")},r.a.createElement(X.b,{size:16})),r.a.createElement(Z.a,{onClick:p,to:"/aluno/".concat(e.id,"/delete")},r.a.createElement(X.i,{size:16})),r.a.createElement(X.c,{size:16,display:"none",cursor:"pointer",onClick:function(n){return d(n,e.id,t)}}))}))))}function Ce(){var e=Object(M.a)(["\n  label {\n    width: 180px;\n    height: 180px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #eee;\n    border: 5px dashed ",";\n    margin: 30px auto;\n    cursor: pointer;\n    border-radius: 50%;\n    overflow: hidden;\n\n    img {\n      width: 180px;\n      height: 180px;\n    }\n  }\n\n  input {\n    display: none;\n  }\n"]);return Ce=function(){return e},e}function ke(){var e=Object(M.a)(["\n  text-align: center;\n"]);return ke=function(){return e},e}var we=H.b.h1(ke()),Le=H.b.form(Ce(),"#C3073F");function Re(e){var t=e.match,n=Object(s.b)(),a=Object(S.get)(t,"params.id",""),o=r.a.useState(!1),c=Object(oe.a)(o,2),i=c[0],l=c[1],p=r.a.useState(""),d=Object(oe.a)(p,2),b=d[0],m=d[1];r.a.useEffect((function(){(function(){var e=Object(re.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,E.get("/alunos/".concat(a));case 4:t=e.sent,n=t.data,m(Object(S.get)(n,"Fotos[0].url","")),l(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),u.b.error("Erro ao obter imagem"),l(!1),_.push("/");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);var f=function(){var e=Object(re.a)(j.a.mark((function e(t){var r,o,c,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],o=URL.createObjectURL(r),m(o),(c=new FormData).append("aluno_id",a),c.append("foto",r),e.prev=6,l(!0),e.next=10,E.post("/fotos/",c,{headers:{"Content-Type":"multipart/form-data"}});case 10:u.b.success("Foto enviada com sucesso!"),l(!1),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(6),l(!1),i=Object(S.get)(e.t0,"response",""),s=i.status,u.b.error("Erro ao enviar foto."),401===s&&n(k());case 20:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(W,null,r.a.createElement(fe,{isLoading:i}),r.a.createElement(we,null,"Fotos"),r.a.createElement(Le,null,r.a.createElement("label",{htmlFor:"foto"},b?r.a.createElement("img",{src:b,alt:"Foto"}):"Selecionar",r.a.createElement("input",{type:"file",id:"foto",onChange:f}))))}function Ie(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n  label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n\n  input {\n    height: 40px;\n    font-size: 18px;\n    border: 1px solid #ddd;\n    padding: 0 10px;\n    border-radius: 4px;\n    margin-top: 5px;\n\n    &:focus {\n      border: 1px solid ",";\n    }\n  }\n"]);return Ie=function(){return e},e}var Te=H.b.form(Ie(),"#C3073F");function _e(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth.user.id})),n=Object(s.c)((function(e){return e.auth.user.nome})),o=Object(s.c)((function(e){return e.auth.user.email})),c=Object(s.c)((function(e){return e.auth.isLoading})),i=Object(a.useState)(""),l=Object(oe.a)(i,2),p=l[0],d=l[1],b=Object(a.useState)(""),m=Object(oe.a)(b,2),f=m[0],g=m[1],h=Object(a.useState)(""),E=Object(oe.a)(h,2),v=E[0],x=E[1];function O(){return(O=Object(re.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),r=!1,(p.length<3||p.length>255)&&(r=!0,u.b.error("Nome deve ter entre 3 e 255 caracteres")),Object(ce.isEmail)(f)||(r=!0,u.b.error("E-mail inv\xe1lido")),!t&&(v.length<6||v.length>50)&&(r=!0,u.b.error("Senha deve ter entre 6 e 50 caracteres")),!r){n.next=7;break}return n.abrupt("return");case 7:e(w({nome:p,email:f,password:v,id:t}));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.useEffect((function(){t&&(d(n),g(o))}),[o,t,n]),r.a.createElement(W,null,r.a.createElement(fe,{isLoading:c}),r.a.createElement("h1",null,t?"Editar dados":"Crie sua conta"),r.a.createElement(Te,{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement("label",{htmlFor:"nome"},"Nome:",r.a.createElement("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Seu nome"})),r.a.createElement("label",{htmlFor:"email"},"E-mail:",r.a.createElement("input",{type:"email",value:f,onChange:function(e){return g(e.target.value)},placeholder:"Seu email"})),r.a.createElement("label",{htmlFor:"senha"},"Senha:",r.a.createElement("input",{type:"password",value:v,onChange:function(e){return x(e.target.value)},placeholder:"Sua senha"})),r.a.createElement("button",{type:"submit"},t?"Salvar":"Criar conta")))}function Ae(){var e=Object(M.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-bottom: 20px;\n    height: 40px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid #ddd;\n  }\n"]);return Ae=function(){return e},e}var Fe=H.b.form(Ae());function ze(e){var t=Object(s.b)(),n=Object(S.get)(e,"location.state.prevPath","/"),a=Object(s.c)((function(e){return e.auth.isLoading})),o=r.a.useState(""),c=Object(oe.a)(o,2),i=c[0],l=c[1],p=r.a.useState(""),d=Object(oe.a)(p,2),b=d[0],m=d[1];return r.a.createElement(W,null,r.a.createElement(fe,{isLoading:a}),r.a.createElement("h1",null,"Login"),r.a.createElement(Fe,{onSubmit:function(e){e.preventDefault();var a=!1;(Object(ce.isEmail)(i)||(a=!0,u.b.error("E-mail inv\xe1lido")),(b.length<6||b.length>50)&&(a=!0,u.b.error("Senha inv\xe1lida")),a)||t({type:"LOGIN_REQUEST",payload:{email:i,password:b,prevPath:n}})}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Seu e-mail"}),r.a.createElement("input",{type:"password",value:b,onChange:function(e){return m(e.target.value)},placeholder:"Sua senha"}),r.a.createElement("button",{type:"submit"},"Acessar")))}function Ue(){return r.a.createElement(W,null,r.a.createElement("h1",null,"Essa p\xe1gina n\xe3o existe"))}function Ge(){return r.a.createElement(i.d,null,r.a.createElement(ae,{exact:!0,path:"/",component:Se,isClosed:!1}),r.a.createElement(ae,{exact:!0,path:"/aluno/:id/edit",component:ge,isClosed:!0}),r.a.createElement(ae,{exact:!0,path:"/aluno/",component:ge,isClosed:!0}),r.a.createElement(ae,{exact:!0,path:"/fotos/:id",component:Re,isClosed:!0}),r.a.createElement(ae,{exact:!0,path:"/login/",component:ze,isClosed:!1}),r.a.createElement(ae,{exact:!0,path:"/register/",component:_e,isClosed:!1}),r.a.createElement(ae,{path:"*",component:Ue}))}var Ne=function(){return r.a.createElement(s.a,{store:J},r.a.createElement(l.a,{persistor:V},r.a.createElement(i.c,{history:_},r.a.createElement(te,null),r.a.createElement(Ge,null),r.a.createElement(K,null),r.a.createElement(u.a,{autoClose:3e3,className:"toast-container"}))))};c.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},79:function(e,t,n){e.exports=n(183)}},[[79,1,2]]]);
//# sourceMappingURL=main.1b4948b6.chunk.js.map