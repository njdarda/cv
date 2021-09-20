(function(){var e={842:function(e,n,t){"use strict";var o=t(860),i=t(99);function a(e,n){const t=(0,i.up)("metainfo"),o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(t,null,{title:(0,i.w5)((({content:e})=>[])),_:1}),(0,i.Wm)(o)],64)}const s={};s.render=a;var r=s,l=t(276);(0,l.z)("/cv/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=t(229);const u={id:"app"},m={class:"container"},d={class:"header"},p={class:"left-column"},h={class:"right-column"},f=(0,i._)("footer",{id:"footer"},"Footer",-1),g=(0,i._)("div",{class:"background"},null,-1);function v(e,n,t,o,a,s){const r=(0,i.up)("CssVariablesComponent"),l=(0,i.up)("HeaderComponent"),c=(0,i.up)("ColumnComponent");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",m,[(0,i.Wm)(r,{cssVariables:e.cvData.cssVariables},null,8,["cssVariables"]),(0,i._)("div",d,[(0,i.Wm)(l,{ref:"headerComponent",header:e.cvData.header},null,8,["header"])]),(0,i._)("div",p,[(0,i.Wm)(c,{sections:e.getSections("leftColumn")},null,8,["sections"])]),(0,i._)("div",h,[(0,i.Wm)(c,{sections:e.getSections("rightColumn")},null,8,["sections"])]),f]),g])}var b=t(996),w=t(870),y=t(641),k=t(317);const A={class:"header-component"},C={class:"header-wrapper",ref:"headerWrapper"},D=(0,i._)("div",{class:"photo"},[(0,i._)("div",{class:"image"}),(0,i._)("div",{class:"shine"})],-1),P={class:"header-bar"},O={class:"name"},j={class:"mb-2"},x=["href","aria-label"],S=(0,i.Uk)();function V(e,n,t,o,a,s){const r=(0,i.up)("svg-icon");return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",C,[D,(0,i._)("div",P,[(0,i._)("h1",O,(0,k.zw)(e.header.name),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.header.links,(e=>((0,i.wg)(),(0,i.iD)("h2",j,[(0,i._)("a",{href:e.url,"aria-label":e.name,target:"_blank"},[(0,i.Wm)(r,{icon:e.icon},null,8,["icon"]),S,(0,i._)("span",null,(0,k.zw)(e.value),1)],8,x)])))),256))])],512)])}var M=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let z=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"header",void 0)}};z=M([(0,w.Ei)({props:["header"]})],z);var R=z;R.render=V;var E=R;const H={class:"column-component"},I={key:1,class:"section-name mb-2"},T={key:2,class:"contacts-container"},L={class:"contact"},q=["href","aria-label","target"],F={class:"badge has-link me-2 mb-2 align-middle"},U={key:1,class:"badge me-2 mb-2 align-middle"},Z={key:3,class:"text no-indent"},W={class:"language-name"},Y={class:"subsection-name mb-1"},B={class:"position"},_=(0,i._)("br",null,null,-1),G={class:"time"},K={class:"text"},J={class:"subsection-name mb-1"},N={class:"position"},X={class:"time"},Q=(0,i._)("h4",{class:"mt-2"},"Responsibilities:",-1),$={key:0},ee=(0,i._)("h4",null,"Key accomplishments:",-1),ne={key:1,class:"text"};function te(e,n,t,o,a,s){const r=(0,i.up)("svg-icon"),l=(0,i.up)("ListComponent");return(0,i.wg)(),(0,i.iD)("div",H,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.sections,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.break?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,k.C_)("break-"+e.break)},null,2)):(0,i.kq)("",!0),e.name?((0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("h2",null,(0,k.zw)(e.name),1)])):(0,i.kq)("",!0),e.contacts?((0,i.wg)(),(0,i.iD)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.contacts,(e=>((0,i.wg)(),(0,i.iD)("div",L,[e.link?((0,i.wg)(),(0,i.iD)("a",{key:0,href:e.link,"aria-label":e.name,target:e.link.startsWith("https")?"_blank":""},[(0,i._)("span",F,[(0,i.Wm)(r,{icon:e.icon},null,8,["icon"])])],8,q)):((0,i.wg)(),(0,i.iD)("span",U,[(0,i.Wm)(r,{icon:e.icon},null,8,["icon"])])),(0,i._)("h3",null,(0,k.zw)(e.value),1)])))),256))])):e.languages?((0,i.wg)(),(0,i.iD)("ul",Z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.languages,(e=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i._)("strong",W,(0,k.zw)(e.name)+": ",1),(0,i._)("span",null,(0,k.zw)(e.level),1)])))),256))])):e.list?((0,i.wg)(),(0,i.j4)(l,{key:4,class:(0,k.C_)(["text",e.class]),list:e.list},null,8,["list","class"])):e.items?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:5},(0,i.Ko)(e.items,(e=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.break?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,k.C_)("break-"+e.break)},null,2)):(0,i.kq)("",!0),e.degree?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",Y,[(0,i._)("h3",null,[(0,i._)("span",B,(0,k.zw)(e.course),1),_,(0,i.Uk)((0,k.zw)(e.place),1)])]),(0,i._)("h3",G,(0,k.zw)(e.time),1),(0,i._)("h4",null,(0,k.zw)(e.degree)+":",1),(0,i._)("span",K,(0,k.zw)(e.specialisation),1)],64)):e.position?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i._)("div",J,[(0,i._)("h3",null,[(0,i._)("span",N,(0,k.zw)(e.position),1),(0,i._)("span",null," • "+(0,k.zw)(e.place),1)])]),(0,i._)("h3",X,(0,k.zw)(e.time),1),Q,(0,i.Wm)(l,{class:"text",list:e.responsibilities},null,8,["list"]),e.keyAccomplishments?((0,i.wg)(),(0,i.iD)("div",$,[ee,e.keyAccomplishments instanceof Array?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"text",list:e.keyAccomplishments},null,8,["list"])):((0,i.wg)(),(0,i.iD)("p",ne,(0,k.zw)(e.keyAccomplishments),1))])):(0,i.kq)("",!0)],64)):(0,i.kq)("",!0)],64)))),256)):(0,i.kq)("",!0)],64)))),256))])}const oe={class:"list-item"},ie={key:0},ae={key:0,class:"item-note"};function se(e,n,t,o,a,s){const r=(0,i.up)("recursive-list",!0);return(0,i.wg)(),(0,i.iD)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,((e,n)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.break?((0,i.wg)(),(0,i.iD)("li",{key:0,class:(0,k.C_)("break-"+e.break)},null,2)):(0,i.kq)("",!0),(0,i._)("li",oe,["string"===typeof e?((0,i.wg)(),(0,i.iD)("span",ie,(0,k.zw)(e),1)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("span",{class:(0,k.C_)(["item-name",e.professional?"professional":""])},[(0,i.Uk)((0,k.zw)(e.name)+" ",1),e.note?((0,i.wg)(),(0,i.iD)("span",ae,(0,k.zw)(e.note),1)):(0,i.kq)("",!0)],2),e.children?((0,i.wg)(),(0,i.j4)(r,{key:0,class:"children-item",list:e.children},null,8,["list"])):(0,i.kq)("",!0)],64))])],64)))),256))])}var re=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let le=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"list",void 0)}};le=re([(0,w.Ei)({name:"recursive-list",props:["list"]})],le);var ce=le;ce.render=se;var ue=ce,me=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let de=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"contacts",void 0),(0,b.Z)(this,"sections",void 0)}};de=me([(0,w.Ei)({components:{ListComponent:ue},props:["contacts","sections"]})],de);var pe=de;pe.render=te;var he=pe,fe=t(106),ge=t.n(fe),ve=t(424),be=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let we=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"cssVariables",void 0)}render(){let e="";for(const[n,t]of Object.entries(this.cssVariables)){let o="--"+(0,ve.o)(n);if(e+=`${o}: ${t};`,o.endsWith("color")){let n=ge()(t);e+=`${o}-h: ${Math.round(100*n.hue())/100};`,e+=`${o}-s: ${Math.round(100*n.saturationl())/100}%;`,e+=`${o}-l: ${Math.round(100*n.lightness())/100}%;`}}return(0,i.h)("style",`:root {${e}}`)}};we=be([(0,w.Ei)({props:["cssVariables"]})],we);var ye=we,ke=ye,Ae=t(75),Ce=JSON.parse('{"themeColors":["#90be6d","#43aa8b","#3976ac","#c2535e","#f3722c","#f8961e","#f9c74f"],"cssVariables":{"themeColor":"hsl(0, 0%, 80%)","baseAnimationTime":"0.8s","colorAnimationTime":"0.8s"},"header":{"name":"Jędrzej Darda","photo":"njd.webp","links":[{"name":"Website","icon":"bookmark-check-fill","url":"https://njdarda.github.io/cv/","value":"njdarda.github.io"}]},"contentGroups":{"leftColumn":["contacts","skills","languages","education","courses","meetings","hobbies"],"rightColumn":["experience","technicalSkills","tools"]},"content":{"contacts":{"contacts":[{"name":"Email","value":"njdarda@gmail.com","icon":"envelope-fill","link":"mailto:njdarda@gmail.com"},{"name":"Phone","value":"+48 609 888 864","icon":"telephone-fill","link":"tel:+48609888864"},{"name":"Github","value":"/njdarda","icon":"github","link":"https://github.com/njdarda"},{"name":"Location","value":"Kraków","icon":"geo-alt-fill"}]},"experience":{"name":"Experience","items":[{"position":"PHP Developer / PHP Tech Lead","place":"Printbox","time":"07-2016 - 04-2020","responsibilities":[{"name":"leading a 5-person PHP team","children":["organising the workflow of the team - organising meetings, trainings, developing good practices","onboarding new members of the team, preparing onboarding materials and procedures","interviewing new candidates","working with other teams to improve and evolve our entire product offer"]},{"name":"development and maintenance of a Prestashop1.6 based e-commerce application for over 100 clients  - each with their own instance of application","children":["creating modules and customisations","profiling, optimising application","improving deployment process"]},{"name":"development and maintenance of Silex (later Symfony 3) based REST API for mobile applications","children":["integration with e-commerce application","testing against mobile application","developing new features based on mobile team\'s needs"]},"development of a unified financial reporting system","development of a meme generator for slack"],"keyAccomplishments":["integrated Symfony 2 and Doctrine within Prestashop","Pioneered and developed gitlab-CI based CI/CD system for development, testing and deployment of ecommerce application and its subprojects resulting in zero downtime upgrade and ability for other teams to instantly make changes without jeopardising applications\' integrity","Created a unified, watertight error reporting system, resulting in a dramatically more stable application","Developed a complex, extensible voucher system integrated with Prestashop, financial reporting system and multiple APIs","Created a unified developer environment as a response to 3 teams with different knowledge levels having to work on a single, complex project. Docker was chosen as it offers a (more or less) consistent behaviour across multiple operating systems. Created a documentation and organised training for all team members, which resulted in significantly more frictionless development across all 3 teams."]},{"position":"PHP Developer","place":"Boostcom","time":"01-2016 - 04-2016","responsibilities":["maintenance of an undocumented legacy information service integrated with multiple external APIs","checking the correctness of accounting entries","general accounting related work such as preparation of documentations, record keeping and accounting transactions"],"keyAccomplishments":"The loyalty application used to only support one language. Its frontend and backend had separate sources of localised strings, none of which were available to the translation team - they had to be manually prepared and sent by developers. Updating translations required a new release of application.\\nI successfully pitched to the management, developed and implemented a multilanguage system where translations would be readily available to the translation team and would update immediately after their changes."},{"position":"Junior PHP Developer","place":"Quatronet","time":"09.2015 - 01-2016","responsibilities":["development of a Prestashop based e-commerce website based on specification and design","adding functionalities to REST API based administration panel of a loyalty application"],"keyAccomplishments":"Created a heavily customised Prestashop theme with complex animations."}]},"tools":{"name":"Tools","class":"two-column-list no-indent","list":[{"name":"Testing","children":[{"name":"phpunit","professional":true},{"name":"pytest","professional":true},{"name":"selenium","professional":true},{"name":"Postman","professional":true},{"name":"browserstack","professional":true}]},{"name":"Error logging and profiling","children":[{"name":"New Relic","professional":true},{"name":"Sentry","professional":true},{"name":"ELK stack","professional":true}]},{"name":"IDE","children":[{"name":"PHPStorm, PyCharm","professional":true},{"name":"VScode","professional":true},"VIM","Visual Studio"]},{"name":"Application deployment and maintenance","children":[{"name":"GitlabCI","professional":true},{"name":"Docker, Vagrant [unison, wsl, winnfsd]","professional":true},{"name":"Jenkins","professional":true},{"name":"teamcity","professional":true},{"name":"ansible","professional":true},"terraform, kubernetes, helm","Google Cloud Platform","Apache, nginx"]},{"break":"section","name":"Team organisation and workflow","children":[{"name":"Git","professional":true},{"name":"Upsource","professional":true},{"name":"Slack","professional":true},{"name":"youtrack","professional":true},{"name":"asana","professional":true},{"name":"redmine","professional":true}]},{"name":"Operating systems","children":["Windows","Linux"]},{"name":"Other","children":["Google Console, Google Analytics","Adobe Photoshop, Adobe Illustrator","Corel Draw, Corel Photopaint","3DsMax","Microsoft Office Suite (Word, Excel, PowerPoint, Access) and Web Services"]}]},"skills":{"class":"no-indent","name":"Skills","list":["Comprehensive knowledge about e-commerce applications and the business context","Knowledge of Google Analytics from both the programmer\'s and business\' perspective","Ability to work within and lead a team of programmers",{"name":"Experience with every stage of creating web applications","children":["UI/UX design","Concept work, development and implementation, testing","Deployment, maintenance of complex applications"]},"Vast experience with legacy code","Solidity in applying good practices, dedication to creating readable, maintainable code","Openness and eagerness to learn new technologies, skills and techniques","Dedication to designing accessible applications (knowledge of WAI-ARIA and good practices)","Dedication to automatisation, process effectiveness optimisation"]},"education":{"name":"Education","items":[{"degree":"Bachelor\'s degree","place":"UEK","time":"2009 - 2014","course":"Finances & Accounting","specialisation":"Financial Markets"}]},"courses":{"class":"no-indent","name":"Courses","list":[{"name":"Od zera do webdeva","children":["1 month intensive PHP training course"]},{"name":"British Council Poland","children":["CAE English (C Level)"]},{"name":"Data Workshop","children":["MATRIX  - 5 Day Machine Learning Challenge"]}]},"meetings":{"class":"no-indent","name":"Conferences","list":["PHPers Kraków","pykonik","What the Hack 2018","PHPERS SUMMIT 2019"]},"languages":{"name":"Languages","languages":[{"name":"Polish","level":"Native"},{"name":"English","level":"C1 - Proficient"},{"name":"Spanish","level":"A1 - Communicative"},{"name":"German, Russian","level":"Basic"}]},"hobbies":{"class":"no-indent","name":"Hobbies","list":["computer games - history, development, industry and esports","organising, cataloguing, presenting information","interface and utility design","maps","stock market (mathematical and psychological aspect)","European cinema","deleting code"]},"technicalSkills":{"name":"Technical skills","class":"two-column-list no-indent","list":[{"name":"Programming languages and related technologies","children":[{"name":"PHP [5.6, 7, excited for 8]","children":[{"name":"Symfony2, Symfony3","professional":true},{"name":"Prestashop","professional":true},{"name":"Doctrine 2","professional":true},{"name":"Propel","professional":true},{"name":"Zend 2","professional":true},{"name":"Smarty","professional":true},{"name":"Twig","professional":true},{"name":"XDebug","professional":true},{"name":"Composer","professional":true},{"name":"OPcache","professional":true},{"name":"Resque (Redis)","professional":true}]},{"name":"JS [ES5, ES6]","children":[{"name":"vue2","children":["vue-bootstrap"]},{"name":"jQuery","professional":true},{"name":"NodeJS/npm","professional":true,"children":["express"]},{"name":"AngularJS 1.5","professional":true},"Mithril",{"name":"Gulp","professional":true},"Webpack"]},{"break":"section","name":"Python","children":["asyncio","sqlAlchemy, alembic","Flask","jinja"]},{"name":"SQL","children":[{"name":"MySQL","professional":true},{"name":"PostreSQL","professional":true}]},{"name":"HTML5","children":["jade/pug"]},{"name":"CSS3","children":[{"name":"Bootstrap 4","professional":true},"Foundation","SCSS, Sass, Compass"]},{"name":"Bash","professional":true},"Markdown","VBA",{"name":"WSDL","professional":true}]}]}}}'),De=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let Pe=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"cvData",Ce),(0,b.Z)(this,"themeColorIndex",void 0),(0,b.Z)(this,"meta",(0,w.cY)((()=>(0,Ae.jq)((0,y.Fl)((()=>({title:`CV - ${this.cvData.header.name}`??0,description:`${this.cvData.header.name}'s Curriculum vitae`})))))))}created(){Ce.cssVariables.photo=`url('${t(671)(`./${this.cvData.header.photo}`).default}')`}mounted(){null!==window.sessionStorage.getItem("lastThemeColorIndex")?this.setThemeColor(parseInt(window.sessionStorage.getItem("lastThemeColorIndex"))):this.getPrefersReducedMotion()||this.initAnimation(0,1e3*parseFloat(this.cvData.cssVariables.baseAnimationTime)),this.cvData.themeColors.length>1&&!this.getPrefersReducedMotion()&&this.scrollAnimation(1e3*parseFloat(this.cvData.cssVariables.colorAnimationTime))}initAnimation(e,n){let t=this.$refs.headerComponent.$refs.headerWrapper;setTimeout((()=>{t.classList.add("init-animation")}),e+n),setTimeout((()=>{t.classList.remove("init-animation")}),1.5*n)}scrollAnimation(e){let n=document.documentElement,t=document.body;setInterval((()=>{let e=(n.scrollTop||t.scrollTop)/((n.scrollHeight||t.scrollHeight)-n.clientHeight)*100,o=Math.ceil(e*(this.cvData.themeColors.length-1)/100);this.setThemeColor(o)}),e)}setThemeColor(e){e!==this.themeColorIndex&&(e>=this.cvData.themeColors.length&&(e=0),this.themeColorIndex=e,this.cvData.cssVariables.themeColor=this.cvData.themeColors[e],window.sessionStorage.setItem("lastThemeColorIndex",e.toString()))}getPrefersReducedMotion(){const e=window.matchMedia("(prefers-reduced-motion: no-preference)");return!e.matches}getSections(e){let n=[];for(const t of Ce.contentGroups[e])Ce.content[t]&&n.push(Ce.content[t]);return n}};Pe=De([(0,w.Ei)({components:{HeaderComponent:E,ColumnComponent:he,CssVariablesComponent:ke}})],Pe);var Oe=Pe;Oe.render=v;var je=Oe;const xe=[{path:"/",name:"Home",component:je},{path:"/about",name:"About",component:()=>t.e(443).then(t.bind(t,529))}],Se=(0,c.p7)({history:(0,c.PO)("/cv/"),routes:xe});var Ve=Se,Me=t(867),ze=(0,Me.MT)({state:{},mutations:{},actions:{},modules:{}});t(972);const Re=["innerHTML"];function Ee(e,n,t,o,a,s){return(0,i.wg)(),(0,i.iD)("span",{class:"svg-icon",innerHTML:e.getIcon(e.icon)},null,8,Re)}var He=function(e,n,t,o){var i,a=arguments.length,s=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(a<3?i(s):a>3?i(n,t,s):i(n,t))||s);return a>3&&s&&Object.defineProperty(n,t,s),s};let Ie=class extends w.w3{constructor(...e){super(...e),(0,b.Z)(this,"icon",void 0)}getIcon(e){return t(254)("./"+e+".svg")}};Ie=He([(0,w.Ei)({name:"svg-icon",props:["icon"]})],Ie);var Te=Ie;Te.render=Ee;var Le=Te;const qe=(0,o.ri)(r);qe.use(ze),qe.use(Ve),qe.use((0,Ae.Bg)()),qe.component("SvgIcon",Le),qe.mount("#app")},207:function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path></svg>'},76:function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path></svg>'},348:function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>'},585:function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>'},539:function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg>'},949:function(e,n,t){"use strict";t.r(n),n["default"]=t.p+"img/njd.26bd867d.png"},831:function(e,n,t){"use strict";t.r(n),n["default"]="data:image/webp;base64,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"},254:function(e,n,t){var o={"./bookmark-check-fill.svg":207,"./envelope-fill.svg":76,"./geo-alt-fill.svg":348,"./github.svg":585,"./telephone-fill.svg":539};function i(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=254},671:function(e,n,t){var o={"./njd.png":949,"./njd.webp":831};function i(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=671}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.e9a6b82a.js"}}(),function(){t.miniCssF=function(e){return"css/app.3faca534.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cv:";t.l=function(o,i,a,s){if(e[o])e[o].push(i);else{var r,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==n+a){r=m;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+a),r.src=o),e[o]=[i];var d=function(n,t){r.onerror=r.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/cv/"}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=a);var s=t.p+t.u(n),r=new Error,l=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;r.message="Loading chunk "+n+" failed.\n("+a+": "+s+")",r.name="ChunkLoadError",r.type=a,r.request=s,i[1](r)}};t.l(s,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(l)var u=l(t)}for(n&&n(o);c<s.length;c++)a=s[c],t.o(e,a)&&e[a]&&e[a][0](),e[s[c]]=0;return t.O(u)},o=self["webpackChunkcv"]=self["webpackChunkcv"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(842)}));o=t.O(o)})();