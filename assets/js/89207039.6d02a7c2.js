"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[9911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return n?i.createElement(p,o(o({ref:t},c),{},{components:n})):i.createElement(p,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="What is a Fedimint",s={unversionedId:"GettingStarted/What-is-a-Fedimint",id:"GettingStarted/What-is-a-Fedimint",title:"What is a Fedimint",description:"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.",source:"@site/docs/GettingStarted/03-What-is-a-Fedimint.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/What-is-a-Fedimint",permalink:"/wiki_fedimint/docs/GettingStarted/What-is-a-Fedimint",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/GettingStarted/03-What-is-a-Fedimint.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Who are the federations?",permalink:"/wiki_fedimint/docs/GettingStarted/Who-are-the-fms"},next:{title:"Core Technology Components",permalink:"/wiki_fedimint/docs/GettingStarted/TechCompontents"}},l={},d=[{value:"Fedimint Components Structure",id:"fedimint-components-structure",level:2},{value:"Fedimint Guardians",id:"fedimint-guardians",level:3},{value:"Fedimint Users",id:"fedimint-users",level:3},{value:"Lightning Gateway Provider",id:"lightning-gateway-provider",level:3}],c={toc:d};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-fedimint"},"What is a Fedimint"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.")),(0,a.kt)("p",null,'A Fedimint - or "Federated Mint" is an implementation of ',(0,a.kt)("a",{parentName:"p",href:"../CommonTerms/Blind%20Signatures"},"Chaumian eCash")," with a federation of guardians to custody funds, instead of a centralized actor, and is natively interoperable with Bitcoin's Lightning Network."),(0,a.kt)("p",null,"The user experience of a Fedimint is designed to be similar to that of a custodial lightning wallet (e.g. Wallet of Satoshi) with the advantage of strong privacy for the user from the federation guardians, and a native backup scheme for a user to recover their funds from the federation."),(0,a.kt)("p",null,"It is anticipated there will be multiple federated mints deployed globally in both small and large community instances."),(0,a.kt)("p",null,"It makes sense to consider Fedimints deployed on a small scale for example, as a community bank for a small community with a robust circular economy and remember there will be many Fedimints deployed on the lightning network and not a single global implementation."),(0,a.kt)("p",null,"The open protocol enables communities of Bitcoiners to come together at their own discretion, assist each other with their custody and backup arrangements and make lightning payments through a privacy preserving wallet."),(0,a.kt)("p",null,"Fedimints are run for the community, by the community."),(0,a.kt)("h2",{id:"fedimint-components-structure"},"Fedimint Components Structure"),(0,a.kt)("p",null,"A Fedimint has five functional components (accounts, custody & redemption, backup & recovery, transaction processing, LN Gateway) and three user personas (Guardian, User, Lightning Gateway) as outlined in the figure and with details below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High level logical model of a fedimint",src:n(9640).Z,width:"1337",height:"1002"})),(0,a.kt)("p",null,"All of these are supported by three core technology components, discussed in greater detail in ",(0,a.kt)("a",{parentName:"p",href:"TechCompontents"},'"Overview > Technologies used in Fedimint"'),"."),(0,a.kt)("h3",{id:"fedimint-guardians"},"Fedimint Guardians"),(0,a.kt)("p",null,"Fedimint guardians are the technical community members responsible for setting up and running the Federated Chaumian eCash system. They custody and backup funds and are responsible for the minting and redemption of eCash token claims against the Bitcoin reserves. A fedimint member is explicitly trusting that the federation guardians will not form a majority quorum to collude to steal user funds."),(0,a.kt)("p",null,"The guardians coordinate using a ",(0,a.kt)("a",{parentName:"p",href:"../CommonTerms/HBBFTConsensus"},"distributed consensus protocol (HBBFT)")," which is part of the Fedimint software deployed on personal servers. The consensus mechanism is Asynchronous, Byzantine Fault Tolerant, and can survive and operate even if a minority of individual federation guardians disconnect from the network. If a majority of the federation guardians disconnect, the consensus protocol will halt execution until a quorum of guardians come back online, at which point the consensus will continue."),(0,a.kt)("p",null,"The federation guardians are specific roles within the system that can only be added or removed with consensus of the existing set of guardians."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:"),' The federation guardians will run the Fedimint protocol software stack. This will allow the guardians to generate a "joining a federation QR Code".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:")," The federation guardians will hold private keys to the threshold multi signature contract into which bitcoin is deposited. When a user executes a deposit process they will also blind sign eCash certificates to an amount equivalent to the deposited bitcoin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:")," Federation members will manage the back up of \"shards\" (individual parts of complete file) of users' wallet data. When a recovery request is made they will manage an out of band process to confirm the authenticity of the recovery request, the identity of the federation member attempting to recover funds, and coordinate with other federation members to reconstruct the shard and recover the user's funds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," review transactions submitted to the federation to ensure that only valid eCash certificates are redeemed and that new eCash certificates are generated where required (",(0,a.kt)("a",{parentName:"li",href:"How-FM-Transactions-Work"},"see how do FM transactions work?"),").")),(0,a.kt)("h3",{id:"fedimint-users"},"Fedimint Users"),(0,a.kt)("p",null,"The users of the Fedimint use Fedimint compatible wallet software like ",(0,a.kt)("a",{parentName:"p",href:"https://www.fedi.xyz"},"Fedi")," to interact with the Fedimint. We anticipate there will be many different wallet applications, and are intentionally building Fedimint to be compatible across these different wallets."),(0,a.kt)("p",null,"We assume no specific technical knowledge in order for Fedimint users to send and receive Bitcoin through the Fedimint model. Our initial usecase for Fedimint is as an extremely private, federated custodial wallet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:")," Users must ensure they are happy with the reputation of the guardians for the chosen Fedimint, then they would simply scan a QR code to connect an account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:"),' Users can submit a request to deposit bitcoin, "pegging in", in exchange for fm-BTC eCash tokens or use the fm-BTC eCash tokens in their wallet in order to redeem on-chain bitcoin (note: users could also transfer out to themselves via the LN Gateway)'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:")," The user will encrypt and shard their data to be backed up to the federation by their wallet application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," The user could submit transactions that transfer fm-BTC to other users. Alternatively the user can redeem transfered fm-BTC for newly issued fm-BTC, settling a paid transaction (",(0,a.kt)("a",{parentName:"li",href:"How-FM-Transactions-Work"},"see how do FM transactions work?"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LN Gateway:")," As an alternative to transacting inside the Fedimint, a user can create contracts (enforced by the Fedimint consensus) that will pay the lightning gateway persona to pay LN invoices on their behalf or generate lightning invoices to be paid.")),(0,a.kt)("p",null,"In principle anyone can become a Fedimint user as long as they have access to the onboarding link / QR code. The onboarding process itself is subject to the specific implementations by the Federations."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The money "fm-BTC" held by the user are actually "digital bearer certificates" or "eCash tokens" stored on the users phone.'),(0,a.kt)("p",{parentName:"admonition"},"These are not account balances but equivalent to digital banknotes of specific set values. As these are digital, they can be encrypted and backed up.")),(0,a.kt)("h3",{id:"lightning-gateway-provider"},"Lightning Gateway Provider"),(0,a.kt)("p",null,"The Lighting Gateway is a Fedimint User who also runs a lightning node. A federation may opt to run its own lightning gateway as well, but we have intentionally architected Fedimint such that any user can act as a lightning gateway to interact with the broader lighting network outside of the mint."),(0,a.kt)("p",null,"The Lightning Gateway monitors the Federation for user requests to pay Ligtning invoices or receive lightning payments. To send a lightning payment, the Fedimint User locks eCash tokens to a contract which contains a lightning invoice. The lightning gateway can sweep the eCash tokens from the contract by paying the lightning invoice. To receive a payment, the Fedimint User broadcasts a tweaked invoice to the lightning gateway. The User reveals the tweak, allowing the gateway to receive the lightning payment, in exchange for ecash tokens."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:")," Similar to a user the Lightning Service provider will need to be comfortable accepting the federations fm-BTC in exchange for providing a liquidity bridge to the lightning network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:")," As per user persona. It is more likely a Lightning Gateway user would require the redemption and deposit service in order to more actively balance fm-BTC, lighting and on-chain balances."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:")," As per user persona."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," As per user persona. The Lightning Gateway would also be running additional daemon software to automate the process of accepting contracts for lighting services (",(0,a.kt)("a",{parentName:"li",href:"How-FM-Transactions-Work"},"more details in FAQs > Lightning Network Integration"))),(0,a.kt)("p",null,"There will need to be a market discovery process, by which users of a Fedimint are able to contract with the Lightning Gateways, the specifics of this is still to be documented."),(0,a.kt)("p",null,"It is anticipated there will be a process by which a Lightning Gateway registers it's service with the federation to ease discovery, but it would also be possible to have multiple unannounced gateways that users could contract with directly."))}h.isMDXComponent=!0},9640:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Fedimint-HL-3d786bff02c1156c43eb7b6f880e1ae6.png"}}]);