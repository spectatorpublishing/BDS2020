(this.webpackJsonpBDS=this.webpackJsonpBDS||[]).push([[0],{12:function(e,t,a){},17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),o=a.n(s),r=(a(22),a(7)),c=a(1),l=a(2),p=a(4),m=a(3),d=(a(12),a(23),a(24),a(5)),h=a(6);function u(){var e=Object(d.a)(["\n    position: absolute;\n    top: -15px;\n    @media (max-width: 992px){\n        top: 5px;\n    }\n    left: 5px;\n    width: 100%;\n    display: flex;\n"]);return u=function(){return e},e}function f(){var e=Object(d.a)(['\n    height: 30px;\n    width: 30px;\n    background: url("','");\n    background-size: cover;\n    background-position: center;\n    border-radius: 50%;\n    margin: 0 5px;\n    z-index: 20;\n']);return f=function(){return e},e}var g=h.a.div(f(),(function(e){return e.bgimage})),b=h.a.div(u()),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){console.log("oped"+this.props.icons);var e=[];if(null!=this.props.icons)for(var t=0;t<this.props.icons.length;t++){var a="";1===this.props.icons[t]&&(a="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/MFYJEBOIYNBJTNYGQHB3O6PAZY.png"),2===this.props.icons[t]&&(a="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/DQYXU4AKQFDTTGKN5LVPZ33774.png"),3===this.props.icons[t]&&(a="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OHLML5GTFVBC3NLCWJY6FZ6SYM.png "),4===this.props.icons[t]&&(a="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/YJCTG4CADVFV3NUQVONGVZ5YIY.png"),e.push(i.a.createElement(g,{bgimage:a}))}return i.a.createElement("a",{href:this.props.url},i.a.createElement("div",{className:"oped",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("+this.props.background+")"},id:this.props.id,onMouseOver:this.mousein},i.a.createElement(b,null,e),i.a.createElement("div",{className:"title",id:this.props.id+"title"},this.props.title),i.a.createElement("div",{className:"date",id:this.props.id+"date"},this.props.date),i.a.createElement("div",{className:"blurb",id:this.props.id+"blurb"},i.a.createElement("div",{className:"blurbtext"},this.props.blurb))))}}]),a}(n.Component),w=0,y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"checkOpac",value:function(){return window.innerWidth>992?w>=this.props.opeds.length-2?"0.33":"1":w>=this.props.opeds.length-1?"0.33":"1"}},{key:"handleClick",value:function(){0===window.pos&&(w=0,window.pos=1);var e=document.getElementById(this.props.year);if(window.innerWidth>992){if(w<this.props.opeds.length-2){var t=e.style.transform,a=parseInt(t.match(/-?[0-9]+/));a-=35,e.style.transform="translateX("+a+"vw)",w++,document.getElementById(this.props.year+"left").style.opacity="1"}if(w>=this.props.opeds.length-2)document.getElementById(this.props.year+"right").style.opacity="0.33"}else{if(w<this.props.opeds.length-1){var n=e.style.transform,i=parseInt(n.match(/-?[0-9]+/));i-=69,e.style.transform="translateX("+i+"vw)",w++,document.getElementById(this.props.year+"left").style.opacity="1"}if(w>=this.props.opeds.length-1)document.getElementById(this.props.year+"right").style.opacity="0.33"}}},{key:"render",value:function(){return i.a.createElement("div",{className:"rightArrow",id:this.props.year+"right",onClick:this.handleClick.bind(this),style:{opacity:this.checkOpac()}},i.a.createElement("img",{className:"rightArrowArrow",src:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png",style:{transform:"rotate(90deg)"}}))}}]),a}(n.Component),E=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"handleClick",value:function(){0===window.pos&&(w=0,window.pos=1);var e=document.getElementById(this.props.year);if(window.innerWidth>992){if(w>0){var t=e.style.transform,a=parseInt(t.match(/-?[0-9]+/));console.log(a),a+=35,e.style.transform="translateX("+a+"vw)",w--,document.getElementById(this.props.year+"right").style.opacity="1"}}else if(w>0){var n=e.style.transform,i=parseInt(n.match(/-?[0-9]+/));i+=69,e.style.transform="translateX("+i+"vw)",w--,document.getElementById(this.props.year+"right").style.opacity="1"}0===w&&(document.getElementById(this.props.year+"left").style.opacity="0.33")}},{key:"render",value:function(){return i.a.createElement("div",{className:"leftArrow",id:this.props.year+"left",onClick:this.handleClick.bind(this),style:{opacity:"0.5"}},i.a.createElement("img",{className:"leftArrowArrow",src:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png",style:{transform:"rotate(-90deg)"}}))}}]),a}(n.Component),I=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"makeOped",value:function(){for(var e=this.props.opeds,t=[],a=0;a<e.length;a++)t.push(i.a.createElement(v,{id:e[a][0],title:e[a][0],date:e[a][1],background:e[a][2],icons:e[a][3],url:e[a][4],blurb:e[a][5]}));return t}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"year"},i.a.createElement("h1",null,this.props.year)),i.a.createElement("div",{className:"containered"},i.a.createElement(E,{opeds:this.props.opeds,year:this.props.year}),i.a.createElement("div",{className:"oped-container"},i.a.createElement("div",{className:"contained",id:this.props.year,style:{transform:"translateX(0)"}},this.makeOped())),i.a.createElement(y,{opeds:this.props.opeds,year:this.props.year}))))}}]),a}(n.Component);function C(){var e=Object(d.a)(["\n    z-index: 10;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: ",";\n    top: ","px;\n    margin-top: -5px;\n    margin-left: -4px;\n    border-radius: 50%;\n"]);return C=function(){return e},e}function O(){var e=Object(d.a)(["\n    width: 2px;\n    background: white;\n    height: ",";\n    margin: 0 auto;\n"]);return O=function(){return e},e}function k(){var e=Object(d.a)(["\n    position: relative;\n    width: 5vw;\n    height: ",";\n    top:20vh;\n"]);return k=function(){return e},e}var A=h.a.div(k(),"100px"),j=h.a.div(O(),"100px"),N=h.a.div(C(),(function(e){return e.offset==e.active?"#cf4137":"white"}),(function(e){return 100*e.offset})),B=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this,t=this.props.activeItem,a=[],n=0;n<=1;n++){var s=2016+n;this.props.excludeYears.has(s)||a.push(i.a.createElement(N,{offset:n,active:t,onClick:function(){return console.log("test")||e.props.setActiveItem(t)}}))}return i.a.createElement(A,null,i.a.createElement(j,null,a))}}]),a}(n.Component);function S(){var e=Object(d.a)(["\n    position: fixed;\n    top: 0;\n    width: calc(100vw - 5rem);\n    background: rgba(0,0,0,0.7);\n    z-index: 100;\n    height: 50px;\n    padding: 0 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    @media(max-width: 992px){\n        justify-content: center;\n    }\n    font-family: 'Whitney', sans-serif;\n    color: white;\n    & .eyeLogo {\n        width: 40px;\n        margin-right: 1rem;\n    }\n    & .cdsLogo {\n        height: 20px;\n    }\n    &>a>div {\n        display: inline;\n        margin: 0 1rem;\n    }\n    & a{\n        color: inherit;\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n    }\n\n    & .verticalLink {\n        border-top: 3px solid transparent;\n        border-bottom: 3px solid transparent;\n        transition: border-bottom 0.4s;\n        @media(max-width: 992px){\n            display: none;\n        }\n    }\n\n    & .verticalLink:hover {\n        border-bottom: 3px solid white;\n    }\n"]);return S=function(){return e},e}var P,x=h.a.div(S()),U=["news","opinion","A&E","sports","multimedia","spectrum","the eye"],T=["news","opinion","arts-and-entertainment","sports","multimedia","spectrum","eye"],Y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<U.length;t++){var a=i.a.createElement("a",{className:"verticalLink",href:"https://www.columbiaspectator.com/"+T[t]},U[t].toUpperCase());e.push(a)}return i.a.createElement(x,null,i.a.createElement("a",{href:"https://www.columbiaspectator.com/"},i.a.createElement("div",{className:"mastheadWrap"},i.a.createElement("img",{className:"cdsLogo",src:"https://www.columbiaspectator.com/pb/resources/img/CDSwhitemasthead.png"}))),e)}}]),a}(n.Component),H=0,M=[],D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"handleClick",value:function(){var e=document.getElementById("allcontain");if(H<1){H++;var t=e.style.transform,a=parseInt(t.match(/-?[0-9]+/));window.innerWidth>992?a-=60:a-=46,e.style.transform="translateY("+a+"vh)"}M=document.getElementsByClassName("contained");for(var n=0;n<M.length;n++){(P=M[n]).style.transform="translateX(0vw)",document.getElementById(P.id+"left").style.opacity="0.33"}window.pos=0,this.props.updateActive()}},{key:"render",value:function(){return i.a.createElement("div",{className:"downArrow",onClick:this.handleClick.bind(this)},i.a.createElement("img",{className:"downArrowArrow",src:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png",style:{transform:"rotate(180deg)"}}))}}]),a}(n.Component),J=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"handleClick",value:function(){var e=document.getElementById("allcontain");if(H>0){H--;var t=e.style.transform,a=parseInt(t.match(/-?[0-9]+/));window.innerWidth>992?a+=60:a+=46,e.style.transform="translateY("+a+"vh)"}M=document.getElementsByClassName("contained");for(var n=0;n<M.length;n++)(P=M[n]).style.transform="translateX(0vw)";window.pos=0,this.props.updateActive()}},{key:"render",value:function(){return i.a.createElement("div",{className:"upArrow",onClick:this.handleClick.bind(this),style:{opacity:"0.33"}},i.a.createElement("img",{className:"upArrowArrow",src:"https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png"}))}}]),a}(n.Component),L=new Set([]),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={activeItem:0},e.incrementActiveItem=e.incrementActiveItem.bind(Object(r.a)(e)),e.decrementActiveItem=e.decrementActiveItem.bind(Object(r.a)(e)),e.setActiveItem=e.setActiveItem.bind(Object(r.a)(e)),e}return Object(l.a)(a,[{key:"incrementActiveItem",value:function(){var e=this.state.activeItem+1;1===e&&(document.getElementsByClassName("downArrow")[0].style.opacity=.33);if(e>1){document.getElementsByClassName("downArrow")[0].style.opacity=.33}else{for(;L.has(e+2015)&&e<=4;)e++;document.getElementsByClassName("upArrow")[0].style.opacity=1,this.setState({activeItem:e})}}},{key:"decrementActiveItem",value:function(){var e=this.state.activeItem-1;0===e&&(document.getElementsByClassName("upArrow")[0].style.opacity=.33);if(!(e<0)){for(;L.has(e+2016);)e--;document.getElementsByClassName("downArrow")[0].style.opacity=1,this.setState({activeItem:e})}}},{key:"setActiveItem",value:function(e){this.setState({activeItem:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Y,null),i.a.createElement("div",{className:"maintitle"},i.a.createElement("div",{className:"opinion"},"OPINION ARCHIVE"),i.a.createElement("div",{className:"pagetitle"},"How Israel, Palestine, and BDS cemented itself in student debate at Columbia"),i.a.createElement("div",{className:"credits"},i.a.createElement("p",null,"Illustration by Brenda Huang"),i.a.createElement("p",null,"Engineering by McKenna Gillard and Hong Sen Du")),i.a.createElement("div",{className:"letter"},"LETTER FROM THE EDITOR:"),i.a.createElement("div",{className:"letter-content"},i.a.createElement("p",null,"Dear readers,"),i.a.createElement("p",null,"Last November, the Columbia College Student Council voted to place a question on its next ballot after a tumultuous four-year saga where the vote failed to pass twice. The question reads: "),i.a.createElement("div",{className:"center"},"Should Columbia University divest its stocks, funds, and endowment from companies that profit from or engage in the State of Israel\u2019s acts toward Palestinians that, according to Columbia University Apartheid Divest (CUAD), fall under the United Nations International Convention of the Suppression and Punishment of the Crime of Apartheid?"),i.a.createElement("p",null,"After months of delay due to COVID-19, Columbia College students are now scheduled to vote on this question between September 22 and September 25, 2020. The Boycott, Divest, and Sanction movement advocates for colleges and universities to divest their endowments from companies that the movement claims profit off of Israeli aggression toward Palestine. As a member of the Columbia community, I know how contentious the topics of BDS, Palestine, and Israel can be on campus. Hopefully, this digital platform and the review of our predecessors' arguments will enable us to better engage in the critical inquiry of each side of the debate. On behalf of myself and the editorial team, I urge you to read critically and consciously reexamine your own beliefs and positions if you are introduced to new perspectives within this scope. Lastly, I would impress upon you that we strove to curate and edit these pieces devoid of any personal biases."),i.a.createElement("p",null,"Warmly,"),i.a.createElement("p",null,"Ryan Oden"),i.a.createElement("p",null,"Administrative Deputy Editorial Page Editor")),i.a.createElement("div",{className:"timeline-title"},"EXPLORE PIECES")),i.a.createElement(J,{updateActive:this.decrementActiveItem}),i.a.createElement(B,{excludeYears:L,activeItem:this.state.activeItem,setActiveItem:this.setActiveItem}),i.a.createElement("div",{className:"allcontainer"},i.a.createElement("div",{className:"allcontain",id:"allcontain",style:{transform:"translateY(0)"}},i.a.createElement(I,{year:"Pro Israel",opeds:[["BDS is a perversion of Columbia's investments","September 23, 2020","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NMUXKKL5BBCAZPMSU7YSSSJWU4.jpg",[],"https://www.columbiaspectator.com/opinion/2020/09/23/bds-is-a-perversion-of-columbias-investments/","Using financial pressure to achieve the political goal of ridding the region of a Jewish state is not advocacy. It is economic warfare."],["I am a pro-Israel former Aryeh board member, and I am embarrassed by CCSC\u2019s vote","March 11, 2019","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QEQB46ZJJRH5PKU7ZV3ZONZE3E.jpg",[],"https://www.columbiaspectator.com/opinion/2019/03/12/i-am-a-pro-israel-former-aryeh-board-member-and-i-am-embarrassed-by-ccscs-vote/","I used to feel safe, trusting that even if members of the council would feel comfortable privately voting to alienate the majority of Jewish students, they would not do so publicly. Now that CCSC has used a secret ballot, I can no longer feel safe."],["Reject BDS and keep Barnard an inclusive environment","April 11, 2018","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7M7KZURRRVH5RFIM5WPF66J4CI.jpg",[],"https://www.columbiaspectator.com/opinion/2018/04/11/reject-bds-and-keep-barnard-an-inclusive-environment/","If BDS were to pass on our campus, Barnard would become a less inclusive and safe environment for Jewish students, regardless of whether or not they identify as Zionists. ... If BDS were to pass, even symbolically, while the repercussions may not impact non-Jewish students, they certainly would impact the 33 percent Jewish Barnard student body who could become the targets of an increase in anti-Semitic acts."],["If you support peace, don't support BDS","April 24, 2017","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MV54BEX6VRGCTOBKMBRLOFOFTA",[],"https://www.columbiaspectator.com/opinion/2017/04/24/if-you-support-peace-dont-support-bds/","So while CUAD members claim that the BDS movement is \u201cfocused on securing equal rights\u201d and not \u201cdemonizing Israel,\u201d the movement they have embraced seeks to end the Jewish right to self-determination, specifically by demonizing Israel. The movement\u2019s warped version of justice precludes the possibility of a solution that satisfies the needs of both Israelis and Palestinians."],["Israel and Palestine on campus: Where do we go from here?","December 9, 2016","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SOICTUC3INBCLBGTVUV5GUHHIQ",[],"https://www.columbiaspectator.com/opinion/2016/12/08/israel-and-palestine-campus-where-do-we-go-here/","Pro-Palestinian activists speak of justice, pro-Israel activists of peace; neither will be achieved without compromises from both peoples. Thus to attain both goals, there must be a basic point of agreement, a starting line from which we can both proceed."],["A beginner's guide to Israel Apartheid Week","March 22, 2014","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",[],"https://www.columbiaspectator.com/2010/03/07/beginners-guide-israel-apartheid-week/","[T]he apartheid label is not compatible with the desire for a two-state solution, but rather with the destruction of the Jewish State of Israel, and the creation of a single state in the territory formerly composing the British Mandate of Palestine."],["No More Israel?","March 27, 2013","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",[],"https://www.columbiaspectator.com/2002/11/12/no-more-israel/","It's time we admit it: if Israel were to suddenly withdraw from the West Bank and Gaza, or, to take it further, if Israel were to disappear altogether, it wouldn't do any good for the Palestinian people in particular or the Arab people in general."]]}),i.a.createElement(I,{year:"Pro Palestine",opeds:[["Stand for justice, stand for Palestine","September 23, 2020","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",[],"https://www.columbiaspectator.com/opinion/2020/09/23/stand-for-justice-stand-for-palestine/","The investments an institution or corporation holds largely reflects the environment and social fabric that is being cultivated in the shared space it produces."],["A Jewish argument for divestment","September 23, 2020","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NAQMI6XFCVAAFPQPM46QPGP3GU",[],"https://www.columbiaspectator.com/opinion/2020/09/23/a-jewish-argument-for-divestment/","To stand in solidarity with the boycott, divestment, and sanctions movement is to stand in solidarity with Palestinians."],["Bold, beautiful, BDS: The moral case for saying \u201cYes to Divest\u201d","April 13, 2018","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LT3G7FEXXJGS5OO62DQMSUTJNY.jpg",[],"https://www.columbiaspectator.com/opinion/2018/04/13/bold-beautiful-bds-the-moral-case-for-saying-yes-to-divest/","The task of creating a socially-conscious college falls to the students who give their campus form and life during their time at Barnard. Divestment, if we understand it from the standpoint of the oppressed, represents the first step in the path towards justice."],["When it comes to Israel Week, nothing is apolitical","November 18, 2015","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/72XPJQPHVFFD7FUZTBJMQDI5MQ",[],"https://www.columbiaspectator.com/opinion/2015/11/18/when-it-comes-israel-week-nothing-apolitical/","Aryeh attempts to present an image of Israel beyond the conflict by highlighting elements of Israeli society that are seemingly unrelated to Palestine. Such events don't present an image of Israel beyond the conflict, but rather an image of Israel without one."],["Israel practices apartheid ","March 22, 2014","https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PBHJIT6R2VGCRFNJ3RHFBFUC6A",[],"https://www.columbiaspectator.com/2011/02/27/israel-practices-apartheid/","Israel is an apartheid state according to legal definition, but it doesn't take legal expertise of international law to understand that what is happening to the Palestinians is anything but apartheid\xad\u2014it just takes a simple examination of the situation. "],["Soft Snow on Israel","March 27, 2013","https://cloudfront-us-east-1.images.arcpublishing.com/spectator/SHMEGXTRTNDX3KFT3HUYS75ROI",[],"https://www.columbiaspectator.com/opinion/2017/02/17/columbia-you-owe-harlem-big-time/",'The attraction of using "neighborhood" is that it personalizes the inhabitants. If writers use "neighborhood," then the immediate question is, "Why are Palestinians attacking Jewish neighborhoods?" Or even, "Why should the Israeli military have to defend a Jewish neighborhood?"']]}))),i.a.createElement(D,{updateActive:this.incrementActiveItem}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a503bfa3.chunk.js.map