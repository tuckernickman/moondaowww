"use strict";(self.webpackChunkmoondao_web=self.webpackChunkmoondao_web||[]).push([[195],{5131:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a,l=n(5861),r=n(7757),o=n.n(r),c=n(7294),s=n(7019),i=n(2263),m=n(1262),u=n(5999),d=n(9960),p=n(3990),h=n(859),E=["title","titleId"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v=function(e){var t=e.title,n=e.titleId,l=g(e,E);return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240","aria-labelledby":n},l),t?c.createElement("title",{id:n},t):null,a||(a=c.createElement("path",{d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})))};var b="0xd569d3cce55b71a8a3f3c418c329a66e5f714431",y="0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9",N="https://api.etherscan.io/api",w="TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS",k=8888888,Z=2503.78;function O(e){return C.apply(this,arguments)}function C(){return(C=(0,l.Z)(o().mark((function e(t){var n,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7",n=N+"?module=proxy&action=eth_call&to="+b+"&data=0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7&tag=latest&apikey="+w,console.log("getJuiceboxBalance - Request: ",n),e.next=5,t.get(n);case 5:if(a=e.sent,console.log("getJuiceboxBalance - Response: ",a),!(a&&a.data&&a.data.result)){e.next=10;break}return l=T(a.data.result),e.abrupt("return",S(l));case 10:return e.abrupt("return",0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return x.apply(this,arguments)}function x(){return(x=(0,l.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N+"?module=account&action=balance&address="+y+"&tag=latest&apikey="+w,console.log("getMultisigBalance - Request: ",n),e.next=4,t.get(n);case 4:if(a=e.sent,console.log("getMultisigBalance - Response: ",a),!(a&&a.data&&a.data.result)){e.next=8;break}return e.abrupt("return",S(a.data.result));case 8:return console.error("getMultisigBalance - Failed"),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return A.apply(this,arguments)}function A(){return(A=(0,l.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",console.log("getEthToUsd - Request: ",n),e.next=4,t.get(n);case 4:if(a=e.sent,console.log("getEthToUsd - Response: ",a),!(a&&a.data&&a.data.USD)){e.next=8;break}return e.abrupt("return",a.data.USD);case 8:return e.abrupt("return",0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return parseInt(e,16)}function S(e){return e/1e18}function _(){return(_=(0,l.Z)(o().mark((function e(){var t,a,l,r,c,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(9669),e.next=3,O(t);case 3:return a=e.sent,e.next=6,B(t);case 6:return l=e.sent,e.next=9,M(t);case 9:r=e.sent,c=a+l,console.log("ETH: "+c),s=(Z*r).toFixed(0),s/k*100,c.toFixed(2),i=s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),k.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),(k/r).toFixed(2),document.getElementById("endRaise").textContent+=" $"+i;case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){return c.createElement(m.Z,{fallback:c.createElement("div",null," Loading... ")},(function(){!function(){_.apply(this,arguments)}()}))};function P(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return c.createElement(s.Z,{title:t.title,description:t.tagline},c.createElement(D,null),c.createElement("meta",{charset:"UTF-8"}),c.createElement("div",{className:"Home"},c.createElement("div",{className:"HomeHero"},c.createElement("div",{className:"BigHero"},c.createElement("div",{className:"Block__Contents",id:"homeTitle"},c.createElement("h1",{className:"daoColor",id:"homeTitle"},c.createElement(u.Z,null,"Send a MoonDAO member to space")),c.createElement("p",{className:"BigP"},c.createElement(u.Z,null,"Buy $MOONEY to join MoonDAO and send a fren to space in 2022!")),c.createElement("h2",{className:"daoColor",id:"endRaiseTitle"},c.createElement(u.Z,null,"Our token launch raised...")),c.createElement("h1",{className:"BigP",id:"endRaise"},"2508.78 ETH \u23e9"),c.createElement("p",{className:"BigP",id:"thankYou"},c.createElement(u.Z,null,"Thanks for everyone's contributions! Our next step swill be releasing TicketToSpace NFTs and sending a member to space! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80")),c.createElement("div",{className:"HeroButtonGroup"},c.createElement("a",{href:"https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8",target:"_blank",className:"Button Big Primary Outlined",id:"heroButton"},c.createElement(u.Z,null,"Learn More")),c.createElement("a",{href:"https://moondao.com/docs/launch-path#-moon-phase-2-send-a-moondao-member-to-space-in-2022",className:"Button Big Primary Outlined",id:"heroButton"},c.createElement(u.Z,null,"What's Next?")))))),c.createElement("div",{className:"Goal Block"},c.createElement("div",{className:"Block__Contents"},c.createElement("div",{className:"Row"},c.createElement("div",{className:"Column--100"},c.createElement("h3",null,c.createElement(u.Z,null,"Our plan to send a MoonDAO member to space in 2022:")),c.createElement("ol",null,c.createElement("li",null,c.createElement(u.Z,{values:{token:c.createElement(d.Z,{to:"/docs/token"},"$MOONEY governance tokens")}},"Offer {token} to begin decentralized community governance of MoonDAO."),"\xa0",c.createElement("strong",null,c.createElement(u.Z,null,"This will be our only supply of tokens."))),c.createElement("li",null,c.createElement(u.Z,{values:{ticketToSpace:c.createElement("strong",null,c.createElement(u.Z,null,"Ticket to Space"))}},"Release the {ticketToSpace} NFT collection. These NFTs will give you a chance to fly to space in 2022.")),c.createElement("li",null,c.createElement(u.Z,null,"Buy a ticket(s) to space on a SpaceX/Blue Origin/Virgin Galactic etc. rocket ship.")),c.createElement("li",null,c.createElement(u.Z,null,"Send MoonDAO member(s) to space in 2022."))))))),c.createElement("div",{className:"Block PrimaryBg"},c.createElement("div",{className:"Block__Contents"},c.createElement("div",{className:"Row"},c.createElement("div",{className:"Column--100"},c.createElement("h5",{className:"daoColor"},c.createElement(u.Z,null,"Mission")),c.createElement("h2",null,c.createElement(u.Z,null,"MoonDAO is going to the moon.")),c.createElement("p",null,c.createElement(u.Z,null,"MoonDAO is an international collective of people united by the mission of decentralizing access to space research and exploration. We are currently living at the inflection point of a privatized space race, and the implications of this moment will define our future. Making life multi-planetary is one of the most inspiring and important missions in our lifetime. The big question is: how? We believe that an international, decentralized, inclusive, and transparent organization would be much better aligned with the needs of the everyday person.")),c.createElement("blockquote",null,c.createElement("p",null,'"',c.createElement(u.Z,null,"All civilizations become either spacefaring or extinct."),'"'),c.createElement("p",{className:"attribution"},"\u2014 Carl Sagan")))))),c.createElement("div",{className:"Values Block"},c.createElement("div",{className:"Block__Contents"},c.createElement("div",{className:"Row"},c.createElement("div",{className:"Column--100"},c.createElement("h5",null,c.createElement(u.Z,null,"Values")),c.createElement("h3",null,c.createElement(u.Z,null,"Space should be in the hands of the people.")),c.createElement("p",null,c.createElement(u.Z,null,"We uphold values of inclusion, peace, transparency, freedom of organization and speech. Space should be in the hands of the people, not any one nation or private entity.")),c.createElement("p",null,c.createElement(u.Z,null,"As such, MoonDAO will support funding for individuals to go to space and fund future space research and exploration as it fits into the mission of becoming a governing body for the moon and other celestial bodies.")),c.createElement("p",null,c.createElement(u.Z,null,"It is very important to note that the core team has not pre-mined any tokens for ourselves. We have not given \u201cspecial terms\u201d to any Venture Capitalists, Influencers, Angel Investors, Rich Friends or Family, or any other person. We are all being treated equally.")))))),c.createElement("div",{className:"Roadmap Block PrimaryBg",id:"MoonPhase"},c.createElement("div",{className:"Block__Contents"},c.createElement("h5",null,c.createElement(u.Z,null,"Moon Phases")),c.createElement("h3",null,c.createElement(u.Z,null,"Our roadmap to the stars.")),c.createElement("div",{className:"Row AlignCenter"},c.createElement("div",{className:"Column--66"},c.createElement("h4",null,c.createElement(u.Z,null,"Moon phase 1")),c.createElement("p",null,c.createElement("strong",null,c.createElement(u.Z,null,"Deploy a token for decentralized governance of MoonDAO."))),c.createElement("p",{className:"small"},c.createElement(u.Z,{values:{token:c.createElement(d.Z,{to:"/docs/token"},"$MOONEY governance tokens")}},"In order to be a DAO, we need a governance token for decision making. Launching the {token} is our first step. There is no expectation of profit with this token, this token\u2019s purpose is to coordinate our governance.")),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"Every investor, builder, or fren, big or small, has gotten the same terms. No special treatment for anyone. This is unusual for an Ethereum project, but we thought it would be more fair for everyone involved that we did not airdrop or pre-mine any number of tokens for people ahead of time. We are not VC funded, we are community organized and led, this is very important to us!"))),c.createElement("div",{className:"Column--33"},c.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf12 ",c.createElement("br",null)))),c.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},c.createElement("div",{className:"Column--66"},c.createElement("h4",null,c.createElement(u.Z,null,"Moon phase 2")),c.createElement("p",null,c.createElement("strong",null,c.createElement(u.Z,null,"Send a MoonDAO member to space."))),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"Virgin Galactic advertises its tickets will be sold for \u201cas low as\u201d $450K and it has been reported that Blue Origin\u2019s tickets are have gone up for auction for over $28M. The range is large. MoonDAO wants to help create a world where anyone can fly to space regardless of their financial situation. We hope that this can be a meaningful and inspirational first step in decentralizing space exploration.")),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"So far in history, space exploration has been gated to the rest of the world \u2014 accessible to only the privileged. MoonDAO changes this for the first time in history."))),c.createElement("div",{className:"Column--33"},c.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf13 ",c.createElement("br",null)))),c.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},c.createElement("div",{className:"Column--66"},c.createElement("h4",null,c.createElement(u.Z,null,"Moon phase 3")),c.createElement("p",null,c.createElement("strong",null,c.createElement(u.Z,null,"Provide funding to space research and exploration."))),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"We don\u2019t want to just take a ride on someone else\u2019s rockets, we\u2019d like to fund and coordinate our own plans. We think an international collective could move much faster than any red-taped organization, and we can contract out certain aspects of rocket development to private companies -- just like NASA.")),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"The exploration of space should unify the world, not pit us against each other like the last space race. After all, aren't we all just curious earthlings that want to explore the unknown? Now, Web 3.0 represents a technology that can unify earthlings and decentralize space exploration."))),c.createElement("div",{className:"Column--33"},c.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf14 ",c.createElement("br",null)))),c.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},c.createElement("div",{className:"Column--66"},c.createElement("h4",null,c.createElement(u.Z,null,"Moon phase 4")),c.createElement("p",null,c.createElement("strong",null,c.createElement(u.Z,null,"Put a MoonDAO colony on the moon."))),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"That's one small step for man, one giant leap for mankind.")),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"The 1967 Space Treaty forms the basis for all law concerning space. In this treaty it states that no national appropriation of the Moon can take place. However, a DAO is not a nation \u2014 it is an international collective of frens.")),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"We have the opportunity to use these new governance and coordination tools in order to form a more perfect union as we extend the rights and liberties of every human on earth into the solar system."))),c.createElement("div",{className:"Column--33"},c.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf15 ",c.createElement("br",null)))),c.createElement("div",{className:"Row AlignCenter",id:"MoonPhase5"},c.createElement("div",{className:"Column--66"},c.createElement("h4",null,c.createElement(u.Z,null,"Moon phase 5")),c.createElement("p",null,c.createElement("strong",null,c.createElement(u.Z,null,"Have sweet moon parties (everyone's invited)."))),c.createElement("p",{className:"small"},c.createElement(u.Z,null,"They're gonna be sweet. BYOB but we'll provide transportation."))),c.createElement("div",{className:"Column--33"},c.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf1d ",c.createElement("br",null)))))),c.createElement("div",{className:"Block",id:"community"},c.createElement("div",{className:"Block__Contents"},c.createElement("div",{className:"Row"},c.createElement("div",{className:"Column--50"},c.createElement("h3",null,c.createElement(u.Z,null,"Join our mission.")),c.createElement("p",null,c.createElement(u.Z,null,"Contribute to our efforts by buying our governance token to fund our treasury, or lend us your brain power and help us build the world's first decentralized public space program.")),c.createElement("div",{id:"community_actions",className:"Row AlignCenter"},c.createElement("div",null,c.createElement("a",{href:"https://moondao.com/docs/contribute",className:"Button Primary Outlined"},c.createElement(u.Z,null,"Contribute"))),c.createElement("div",{className:"Social"},c.createElement("a",{href:"https://discord.gg/5nAu7K9aES",target:"_blank",rel:"noopener noreferrer"},c.createElement(v,null)),c.createElement("a",{href:"https://github.com/Official-MoonDao",target:"_blank",rel:"noopener noreferrer"},c.createElement(h.gik,null)),c.createElement("a",{href:"https://twitter.com/OfficialMoonDAO",target:"_blank",rel:"noopener noreferrer"},c.createElement(p.Fwv,null))))),c.createElement("div",{className:"Column--50"},c.createElement("p",{className:"center"},c.createElement("img",{width:"75%",src:"img/undraw_launch_day_4e04.svg",alt:"illustration of astronaut in space with moon in distance"}))))))))}}}]);