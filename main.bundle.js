(()=>{"use strict";var n={426:(n,e,a)=>{a.d(e,{Z:()=>s});var t=a(537),i=a.n(t),r=a(645),o=a.n(r)()(i());o.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n  height: 100%;\n  width: 100%;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  perspective: 1000px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  gap: 12px;\n  width: 400px;\n  height: 400px;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n.row label {\n}\n\n.row input, .row select {\n    height: 22.3px;\n    padding-left: 6px;\n}\n\n.row select {\n}\n\ninput[type='text'] {\n}\n\ninput:invalid,\nselect:invalid {\n  border: 2px solid red;\n}\n\ninput:invalid:focus,\nselect:invalid:focus {\n  outline: none;\n}\n\n.success-msg {\n  /* transform: translateZ(-120px);\n     */\n  display: none;\n  flex-direction: column;\n}\n\n.btn-group {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  justify-self: end;\n}\n\n.btn-group button {\n  outline: none;\n  border: 2px solid;\n  font-size: 19px;\n  padding: 12px;\n}\n\nform.hide {\n  display: none;\n}\n\nform.hide ~ .success-msg {\n  display: flex;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;AACA;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;AACA;;AAEA;AACA;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE;MACI;EACJ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n  height: 100%;\n  width: 100%;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  perspective: 1000px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  gap: 12px;\n  width: 400px;\n  height: 400px;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n.row label {\n}\n\n.row input, .row select {\n    height: 22.3px;\n    padding-left: 6px;\n}\n\n.row select {\n}\n\ninput[type='text'] {\n}\n\ninput:invalid,\nselect:invalid {\n  border: 2px solid red;\n}\n\ninput:invalid:focus,\nselect:invalid:focus {\n  outline: none;\n}\n\n.success-msg {\n  /* transform: translateZ(-120px);\n     */\n  display: none;\n  flex-direction: column;\n}\n\n.btn-group {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  justify-self: end;\n}\n\n.btn-group button {\n  outline: none;\n  border: 2px solid;\n  font-size: 19px;\n  padding: 12px;\n}\n\nform.hide {\n  display: none;\n}\n\nform.hide ~ .success-msg {\n  display: flex;\n}\n"],sourceRoot:""}]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a="",t=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),t&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=n(e),t&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(n,a,t,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);t&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],a=n[3];if(!a)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function a(n){for(var a=-1,t=0;t<e.length;t++)if(e[t].identifier===n){a=t;break}return a}function t(n,t){for(var r={},o=[],s=0;s<n.length;s++){var l=n[s],u=t.base?l[0]+t.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var A=a(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)e[A].references++,e[A].updater(p);else{var m=i(p,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(n,e){var a=e.domAPI(e);return a.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;a.update(n=e)}else a.remove()}}n.exports=function(n,i){var r=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var s=a(r[o]);e[s].references--}for(var l=t(n,i),u=0;u<r.length;u++){var c=a(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:n=>{var e={};n.exports=function(n,a){var t=function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}e[n]=a}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(a)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,a)=>{n.exports=function(n){var e=a.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(a){!function(n,e,a){var t="";a.supports&&(t+="@supports (".concat(a.supports,") {")),a.media&&(t+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(t+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),t+=a.css,i&&(t+="}"),a.media&&(t+="}"),a.supports&&(t+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,a)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function a(t){var i=e[t];if(void 0!==i)return i.exports;var r=e[t]={id:t,exports:{}};return n[t](r,r.exports,a),r.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),a.nc=void 0,(()=>{var n=a(379),e=a.n(n),t=a(795),i=a.n(t),r=a(569),o=a.n(r),s=a(565),l=a.n(s),u=a(216),c=a.n(u),d=a(589),A=a.n(d),p=a(426),m={};m.styleTagTransform=A(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const f=["Afghanistan-AF","Aland-AX","Albania-AL","Algeria-DZ","American Samoa-AS","Andorra-AD","Angola-AO","Anguilla-AI","Antarctica-AQ","Antigua and Barbuda-AG","Argentina-AR","Armenia-AM","Aruba-AW","Australia-AU","Austria-AT","Azerbaijan-AZ","Bahamas-BS","Bahrain-BH","Bangladesh-BD","Barbados-BB","Belarus-BY","Belgium-BE","Belize-BZ","Benin-BJ","Bermuda-BM","Bhutan-BT","Bolivia-BO","Bonaire-BQ","Bosnia and Herzegovina-BA","Botswana-BW","Bouvet Island-BV","Brazil-BR","British Indian Ocean Territory-IO","British Virgin Islands-VG","Brunei-BN","Bulgaria-BG","Burkina Faso-BF","Burundi-BI","Cambodia-KH","Cameroon-CM","Canada-CA","Cape Verde-CV","Cayman Islands-KY","Central African Republic-CF","Chad-TD","Chile-CL","China-CN","Christmas Island-CX","Cocos (Keeling) Islands-CC","Colombia-CO","Comoros-KM","Cook Islands-CK","Costa Rica-CR","Croatia-HR","Cuba-CU","Curacao-CW","Cyprus-CY","Czech Republic-CZ","Democratic Republic of the Congo-CD","Denmark-DK","Djibouti-DJ","Dominica-DM","Dominican Republic-DO","East Timor-TL","Ecuador-EC","Egypt-EG","El Salvador-SV","Equatorial Guinea-GQ","Eritrea-ER","Estonia-EE","Eswatini-SZ","Ethiopia-ET","Falkland Islands-FK","Faroe Islands-FO","Fiji-FJ","Finland-FI","France-FR","French Guiana-GF","French Polynesia-PF","French Southern Territories-TF","Gabon-GA","Gambia-GM","Georgia-GE","Germany-DE","Ghana-GH","Gibraltar-GI","Greece-GR","Greenland-GL","Grenada-GD","Guadeloupe-GP","Guam-GU","Guatemala-GT","Guernsey-GG","Guinea-Bissau-GW","Guinea-GN","Guyana-GY","Haiti-HT","Heard Island and McDonald Islands-HM","Honduras-HN","Hong Kong-HK","Hungary-HU","Iceland-IS","India-IN","Indonesia-ID","Iran-IR","Iraq-IQ","Ireland-IE","Isle of Man-IM","Israel-IL","Italy-IT","Ivory Coast-CI","Jamaica-JM","Japan-JP","Jersey-JE","Jordan-JO","Kazakhstan-KZ","Kenya-KE","Kiribati-KI","Kosovo-XK","Kuwait-KW","Kyrgyzstan-KG","Laos-LA","Latvia-LV","Lebanon-LB","Lesotho-LS","Liberia-LR","Libya-LY","Liechtenstein-LI","Lithuania-LT","Luxembourg-LU","Macao-MO","Madagascar-MG","Malawi-MW","Malaysia-MY","Maldives-MV","Mali-ML","Malta-MT","Marshall Islands-MH","Martinique-MQ","Mauritania-MR","Mauritius-MU","Mayotte-YT","Mexico-MX","Micronesia-FM","Moldova-MD","Monaco-MC","Mongolia-MN","Montenegro-ME","Montserrat-MS","Morocco-MA","Mozambique-MZ","Myanmar (Burma)-MM","Namibia-NA","Nauru-NR","Nepal-NP","Netherlands-NL","New Caledonia-NC","New Zealand-NZ","Nicaragua-NI","Niger-NE","Nigeria-NG","Niue-NU","Norfolk Island-NF","North Korea-KP","North Macedonia-MK","Northern Mariana Islands-MP","Norway-NO","Oman-OM","Pakistan-PK","Palau-PW","Palestine-PS","Panama-PA","Papua New Guinea-PG","Paraguay-PY","Peru-PE","Philippines-PH","Pitcairn Islands-PN","Poland-PL","Portugal-PT","Puerto Rico-PR","Qatar-QA","Republic of the Congo-CG","Reunion-RE","Romania-RO","Russia-RU","Rwanda-RW","Saint Barthelemy-BL","Saint Helena-SH","Saint Kitts and Nevis-KN","Saint Lucia-LC","Saint Martin-MF","Saint Pierre and Miquelon-PM","Saint Vincent and the Grenadines-VC","Samoa-WS","San Marino-SM","Sao Tome and Principe-ST","Saudi Arabia-SA","Senegal-SN","Serbia-RS","Seychelles-SC","Sierra Leone-SL","Singapore-SG","Sint Maarten-SX","Slovakia-SK","Slovenia-SI","Solomon Islands-SB","Somalia-SO","South Africa-ZA","South Georgia and the South Sandwich Islands-GS","South Korea-KR","South Sudan-SS","Spain-ES","Sri Lanka-LK","Sudan-SD","Suriname-SR","Svalbard and Jan Mayen-SJ","Sweden-SE","Switzerland-CH","Syria-SY","Taiwan-TW","Tajikistan-TJ","Tanzania-TZ","Thailand-TH","Togo-TG","Tokelau-TK","Tonga-TO","Trinidad and Tobago-TT","Tunisia-TN","Turkey-TR","Turkmenistan-TM","Turks and Caicos Islands-TC","Tuvalu-TV","U.S. Minor Outlying Islands-UM","U.S. Virgin Islands-VI","Uganda-UG","Ukraine-UA","United Arab Emirates-AE","United Kingdom-GB","United States-US","Uruguay-UY","Uzbekistan-UZ","Vanuatu-VU","Vatican City-VA","Venezuela-VE","Vietnam-VN","Wallis and Futuna-WF","Western Sahara-EH","Yemen-YE","Zambia-ZM","Zimbabwe-ZW"];function C(){const n=document.querySelector("form select");n.textContent="";let e=!1;f.forEach((a=>{const t=document.createElement("option");e||(t.selected=!0,e=!0);const[i,r]=a.split("-");i&&r||console.log("empty"),t.value=r,t.textContent=i,n.appendChild(t)}))}C();const g=document.querySelector("form"),{email:h,country:y,zipCode:E,password:v,confirmPassword:B}=g.elements,b=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;h.addEventListener("input",(()=>{const{value:n}=h;""!==n.trim()||b.test(h.value)?h.setCustomValidity(""):h.setCustomValidity("Please input a valid email"),h.reportValidity()}));const S={CH:["^(CH-)?\\d{4}$","Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950"],FR:["^(F-)?\\d{5}$","France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012"],DE:["^(D-)?\\d{5}$","Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345"],NL:["^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$","Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS"]};function M(n,e=16){const a={lowercaseLetters:/[a-z]/.test(n),uppercaseLetters:/[A-Z]/.test(n),numbers:/[0-9]/.test(n),length:n.length>=e};let t=0;const i=Object.keys(a),r=i.length;return i.forEach((n=>{a[n]&&(t+=1)})),{strengthPercentage:t/r*100,criteria:a}}function x(n){let e="";return Object.keys(n).forEach((a=>{if(!n[a])switch(a){case"length":e+="Password must be at least 16 characters long.\n";break;case"lowercaseLetters":e+="Password must contain lower case letters.\n";break;case"uppercaseLetters":e+="Password must contain upper case letters.\n";break;case"numbers":e+="Password must contain numbers.\n"}})),e}E.addEventListener("input",(()=>{const n=y.value,e=S[n],{value:a}=E;e&&(new RegExp(e[0]).test(a)?E.setCustomValidity(""):E.setCustomValidity(S[n][1]),E.reportValidity())})),v.addEventListener("input",(()=>{const{value:n}=v,{strengthPercentage:e,criteria:a}=M(n);if(e<100){const n=x(a);v.setCustomValidity(n)}else v.setCustomValidity("");v.reportValidity()})),B.addEventListener("input",(()=>{v.value!==B.value?B.setCustomValidity("Passwords do not match"):B.setCustomValidity(""),B.reportValidity()})),g.addEventListener("submit",(n=>{if(n.preventDefault(),""===h.value.trim()&&!b.test(h.value))return h.setCustomValidity("Please input a valid email"),void h.reportValidity();const e=y.value,a=S[e],t=E.value;if(a&&!new RegExp(a[0]).test(t))return E.setCustomValidity(S[e][1]),void E.reportValidity();const i=v.value,{strengthPercentage:r,criteria:o}=M(i);if(r<100){const n=x(o);return v.setCustomValidity(n),void v.reportValidity()}if(i!==B.value)return B.setCustomValidity("Passwords do not match"),void B.reportValidity();g.classList.add("hide")})),document.querySelector("button.restart").addEventListener("click",(()=>{h.value="",C(),v.value="",B.value="",g.classList.remove("hide")}))})()})();
//# sourceMappingURL=main.bundle.js.map