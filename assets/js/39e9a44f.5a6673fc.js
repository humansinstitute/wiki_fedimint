"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6854],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=r,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return i?n.createElement(h,o(o({ref:t},l),{},{components:i})):n.createElement(h,o({ref:t},l))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4808:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_position:3},o="Debasement Risk",s={unversionedId:"TradeOffs/DebasementRisk",id:"TradeOffs/DebasementRisk",title:"Debasement Risk",description:"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.",source:"@site/docs/TradeOffs/03-DebasementRisk.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/DebasementRisk",permalink:"/wiki_fedimint/docs/TradeOffs/DebasementRisk",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/TradeOffs/03-DebasementRisk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custodial Risk",permalink:"/wiki_fedimint/docs/TradeOffs/NotYourKeys"},next:{title:"Regulatory Risk",permalink:"/wiki_fedimint/docs/TradeOffs/RegulatoryRisk"}},d={},c=[{value:"The Risk",id:"the-risk",level:2},{value:"The Mitigation",id:"the-mitigation",level:2},{value:"In Mint Audits",id:"in-mint-audits",level:3},{value:"Audit on Receipt of eCash",id:"audit-on-receipt-of-ecash",level:3},{value:"Know Your Federation",id:"know-your-federation",level:3}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debasement-risk"},"Debasement Risk"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.")),(0,r.kt)("p",null,"eCash tokens represent a claim on bitcoin held by the federation guardians."),(0,r.kt)("p",null,"As such there is a possibility that the mint could generate more claims for bitcoin than there are bitcoin in the custody of the guardians. "),(0,r.kt)("p",null,"Fedimint federations can not be audited by external parties.\xa0This fact makes the importance of strong 2nd party trust of federation guardians even greater and acts as a limit on how large a Fedimint community can grow."),(0,r.kt)("p",null,"However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a \u201cre-keying checkpoint\u201d is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed."),(0,r.kt)("h2",{id:"the-risk"},"The Risk"),(0,r.kt)("p",null,"The risk here is that the guardians would be able to debase your holding by secretly signing and issuing additional tokens that are spendable inside the mint"),(0,r.kt)("h2",{id:"the-mitigation"},"The Mitigation"),(0,r.kt)("h3",{id:"in-mint-audits"},"In Mint Audits"),(0,r.kt)("p",null,"Each consensus epoch, balances the assets and liabilities of hte mint "),(0,r.kt)("h3",{id:"audit-on-receipt-of-ecash"},"Audit on Receipt of eCash"),(0,r.kt)("h3",{id:"know-your-federation"},"Know Your Federation"),(0,r.kt)("p",null,"You're already trusting the mint with all of your bitcoin."))}u.isMDXComponent=!0}}]);