"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(m,a(a({ref:t},h),{},{components:n})):o.createElement(m,a({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const r={},a="Why consider community custody?",s={unversionedId:"FAQs/WhyCommunityCustody",id:"FAQs/WhyCommunityCustody",title:"Why consider community custody?",description:"High level logical model of a fedimint",source:"@site/docs/FAQs/WhyCommunityCustody.md",sourceDirName:"FAQs",slug:"/FAQs/WhyCommunityCustody",permalink:"/wiki_fedimint/docs/FAQs/WhyCommunityCustody",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/FAQs/WhyCommunityCustody.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What does the Federation do?",permalink:"/wiki_fedimint/docs/FAQs/TheFederation"},next:{title:"Why eCash integrated with Lightning?",permalink:"/wiki_fedimint/docs/FAQs/WhyLN"}},c={},l=[],h={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"why-consider-community-custody"},"Why consider community custody?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"High level logical model of a fedimint",src:n(8646).Z,width:"1021",height:"118"})),(0,i.kt)("p",null,"What does the infamous Mt. Gox exchange and the latest cryptocurrency restrictions agreed by the world's regulators have in common?"),(0,i.kt)("p",null,"The answer is Bitcoin custody (how and where you secure your bitcoin) - how it was, how it will be if nothing changes, and how it can evolve for the better if we take appropriate action. To understand why, we need to go back to the rise of Bitcoin custodial services."),(0,i.kt)("p",null,"Back in 2013, the Bitcoin exchange space was dominated by ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mt._Gox"},"Mt. Gox"),", the exchange colossus based out of Tokyo, Japan and headed up by one Mark Karpeles."),(0,i.kt)("p",null,"Many people held their bitcoin Fedimint on Mt. Gox until one day, it all vanished.\xa0 Users could no longer gain access to their hard earned or purchased bitcoin. Due to reasons that are still not fully clear, much of the capital custodied with the platform had disappeared and to this day, the subset that has been recovered is yet to be returned to its rightful owners."),(0,i.kt)("p",null,"In response to the Mt. Gox drama, many exchanges were set up that aimed to bring back trust to the exchange space and make holding bitcoin on an exchange safe. But their success has created a different risk for the exchange customers\u2019 coins."),(0,i.kt)("p",null,"This is because immediately after Mt. Gox, no one trusted exchanges. Users would buy their bitcoin and promptly withdraw it from exchanges as quickly as they could, making self custody was the norm. Today user trust in exchanges is strong. Ironically, as a result, the percentage of Bitcoin holders custodying their bitcoin on exchanges is at all time highs."),(0,i.kt)("p",null,"You might think that this is not an issue but this is where the world's regulators, through an organisation called the FATF, come in.\xa0 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Financial_Action_Task_Force"},"FATF"),", or the Financial Action Task Force, is an unelected international advisory body that issues guidance designed to prevent whatever the majority of countries deem to be financial crimes. Although no country is forced to enact one of their recommendations, the potentially devastating effects to international trade of ignoring them mean that their proclamations are consistently implemented by almost every country in the world. So when the FATF \u201cadvises\u201d a country to adopt a regulatory stance, you can assume that it will almost always be implemented. In June 2019, they issued guidance for cryptocurrencies that included a controversial provision called the \u201c",(0,i.kt)("a",{parentName:"p",href:"https://complyadvantage.com/insights/fatf-travel-rule/"},"Travel Rule"),"\u201d.\xa0 This rule advocates that all crypto exchanges and Bitcoin brokers should only allow transfers of crypto to parties that they can properly identify. The challenge is that the identity-less nature of cryptocurrencies makes complying with this guidance, while still allowing customers to withdraw to their own crypto wallets, difficult at best and impossible at worst."),(0,i.kt)("p",null,"So once again, we are heading into a future where huge crypto exchanges prevent their customers from taking ownership of their own coins.\xa0 But this time it will be due to an over-abundance of regulation as opposed to a lack of it as was the case in the time of Mt. Gox."),(0,i.kt)("p",null,"\u201cBut why is holding most of my bitcoin on an exchange a problem?\u201d you may ask.\xa0 Simply put, if a regulated 3rd party has control of your bitcoin, no matter how trustworthy they might seem, they can be compelled to prevent you from taking custody of your crypto.\xa0 With the latest FATF rule, we already see countries such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.reuters.com/markets/currencies/proposed-india-bill-banning-crypto-payments-could-mean-jail-violations-document-2021-12-07/"},"India"),", ",(0,i.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/south-korea-crypto-exchanges-to-follow-coinone-in-verifying-private-wallets"},"South Korea"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.coindesk.com/policy/2022/01/04/estonia-regulator-says-no-plans-to-ban-crypto/"},"Estonia")," look to fast track regulation to this effect and we can expect more to follow.\xa0 If left unchecked, the end result could be a majority of bitcoin being stored on a handful of centralised exchanges - barring Bitcoiners from self-sovereignty."),(0,i.kt)("p",null,"This is a concern because Bitcoin only succeeds if all its major constituents - mining, payments, software development, and custody - stay strong and decentralised. For Bitcoin to achieve its potential for separating money from state and thereby creating a freer and fairer financial world, nothing can be more important than reinforcing Bitcoin\u2019s decentralised foundations."),(0,i.kt)("p",null,"All the major elements of the Bitcoin ecosystem are significantly decentralised except for one, custody.\xa0 Right now, the default for most users is to store their censorship resistant decentralised Bitcoin with a few censurable centralised exchanges or custodians.\xa0 Fedimint is designed to resolve this major chink in the Bitcoin ecosystem\u2019s armour."))}d.isMDXComponent=!0},8646:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/CommunityCustody-2c2c00273708f46f59633034e7693ddc.png"}}]);