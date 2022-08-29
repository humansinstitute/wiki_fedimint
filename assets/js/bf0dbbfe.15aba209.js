"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6600],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=s,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_position:4},r="Fedimint Wallet",o={unversionedId:"MiniMintDetails/Wallet",id:"MiniMintDetails/Wallet",title:"Fedimint Wallet",description:"To be backed by Bitcoin the federation needs a federated on-chain wallet. It is used to receive deposits that clients",source:"@site/docs/MiniMintDetails/Wallet.md",sourceDirName:"MiniMintDetails",slug:"/MiniMintDetails/Wallet",permalink:"/docs/MiniMintDetails/Wallet",draft:!1,editUrl:"https://github.com/fedimint/fedimint.org/tree/main/docs/MiniMintDetails/Wallet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fedimint Consensus",permalink:"/docs/MiniMintDetails/Consensus"},next:{title:"Frequently Asked Questions",permalink:"/docs/category/frequently-asked-questions"}},l={},p=[{value:"Chain tip consensus",id:"chain-tip-consensus",level:2},{value:"Fee consensus",id:"fee-consensus",level:2},{value:"Randomness beacon",id:"randomness-beacon",level:2},{value:"Address Derivation",id:"address-derivation",level:2},{value:"Receiving Bitcoin",id:"receiving-bitcoin",level:2},{value:"Sending Bitcoin",id:"sending-bitcoin",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fedimint-wallet"},"Fedimint Wallet"),(0,s.kt)("p",null,"To be backed by Bitcoin the federation needs a federated on-chain wallet. It is used to receive deposits that clients\nexchange for blind tokens and to make payouts when clients want to withdraw. Generally it is just a multisig wallet\ndefined by a script descriptor. For example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"wsh(sortedmulti(3,A,B,C,D))\n")),(0,s.kt)("p",null,"where ",(0,s.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"D")," are the public keys of the federation members."),(0,s.kt)("p",null,"Yet, notable differences exist. Other than most wallets we do not require extended public keys since we define our own\nderivation scheme. Furthermore, the wallet can not rely on local fee estimation and the local chain tip since these\nmight be different for all members. Instead it uses the consensus algorithm to agree on these. Our particular protocol\nwill also use a randomness beacon."),(0,s.kt)("h2",{id:"chain-tip-consensus"},"Chain tip consensus"),(0,s.kt)("p",null,"To validate transactions a wallet needs to know the current chain tip. The problem with this is that different\nfederation members might see different chain tips either due to latency or even shallow forks."),(0,s.kt)("p",null,"To avoid the forking\nproblem we can just define that our internal chain tip is always e.g. 100 blocks behind the real one. This should\nsufficiently mitigate the risk of being on different forks (bitcoin itself would be in trouble with such deep forks).\nBut the latency problem remains."),(0,s.kt)("p",null,"To solve this we use the consensus, each round each participant does the following:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Query ",(0,s.kt)("inlineCode",{parentName:"li"},"bitcoind")," for the current block height"),(0,s.kt)("li",{parentName:"ol"},"If the block height shrank, use the previous one"),(0,s.kt)("li",{parentName:"ol"},"Propose ",(0,s.kt)("inlineCode",{parentName:"li"},"height - 100")," as the consensus height"),(0,s.kt)("li",{parentName:"ol"},"Receive peer proposals and use median as the new consensus height")),(0,s.kt)("p",null,"Due to the assumption that less than"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"1"),(0,s.kt)("mn",{parentName:"mfrac"},"3"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1}{3}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,s.kt)("p",null,"of the participants are malicious, this will always leads to a value that either was proposed by a honest participant or lies between two honest values to be chosen. Let's say that all"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,s.kt)("p",null,"malicious proposals and"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n-2f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,s.kt)("p",null,"honest proposals are accepted, then"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f < n-2f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,s.kt)("p",null,"due to the previous requirement. It is easy to see that the"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,s.kt)("p",null,"malicious proposals do not suffice to meaningfully alter the median."),(0,s.kt)("p",null,"Of course this assumes that all honest participants stay reasonable close to the real chain tip, but this is the task\nof the operators and outside our protocol."),(0,s.kt)("h2",{id:"fee-consensus"},"Fee consensus"),(0,s.kt)("p",null,"We also face a similar problem when spending Bitcoin. While the destinations and amounts are generally assumed to be\noutputs of the consensus protocol and thus unproblematic one factor of transactions is not easily made deterministic:\nthe fees. But to avoid depletion attacks by overpaying fees we need to agree on them."),(0,s.kt)("p",null,"Naively we could use an algorithm that uses on-chain analysis to determine proper fee levels. But we only agree on\na tip buried 100 blocks deep, which would make the algorithm quite unresponsive. Furthermore other algorithms that take\nthe mempool into account may be preferable, but agreeing on the mempool is a fools errand. Instead we use a modified\nversion of the algorithm used for the chain tip consensus. Each round each participant does the following:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Query ",(0,s.kt)("inlineCode",{parentName:"li"},"bitcoind")," for the current optimal fee rate"),(0,s.kt)("li",{parentName:"ol"},"Propose said rate as the consensus fee rate"),(0,s.kt)("li",{parentName:"ol"},"Receive peer proposals and use median as the new consensus height")),(0,s.kt)("p",null,"The median argument works similarly and we achieve a honest consensus on fee rates."),(0,s.kt)("h2",{id:"randomness-beacon"},"Randomness beacon"),(0,s.kt)("p",null,"In some cases it is useful to have access to agreed-upon, fair randomness. Thus every round every participant also\nproposes 32bytes of random data. The ones included in the consensus outcome are then XORed to form the round's\nrandomness beacon. We note that this is only safe if the items proposed to the consensus are encrypted till there is\nagreement on which contributions will be included. This is the case for HBBFT. Otherwise an attacker could wait for the\nother participants to announce their contribution and then adaptively chose his own to influence the outcome."),(0,s.kt)("h2",{id:"address-derivation"},"Address Derivation"),(0,s.kt)("p",null,'To allow clients to generate deposit addresses independent of the federation we do not use BIP32 derivation to\ngenerate new addresses from the wallet descriptor, but a custom derivation scheme. We instead use a pay-to-contract\nconstruction where a "contract" is hashed and added to all keys in the descriptor (added in the exponent in case of the\npub key). A descriptor with derived keys can then trivially be transformed into an address.'),(0,s.kt)("p",null,'In Fedimint the "contract" is just a public key that can later be used to tie the deposit to a issuance transaction.'),(0,s.kt)("h2",{id:"receiving-bitcoin"},"Receiving Bitcoin"),(0,s.kt)("p",null,"When depositing Bitcoin into the federation a client proceeds as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Generate public/secret key pair"),(0,s.kt)("li",{parentName:"ol"},"Tweak federation descriptor with public key"),(0,s.kt)("li",{parentName:"ol"},"Send BTC to the resulting address"),(0,s.kt)("li",{parentName:"ol"},"Generate ",(0,s.kt)("a",{parentName:"li",href:"https://bitcoincore.org/en/doc/0.21.0/rpc/blockchain/gettxoutproof/"},"TxOutProof")," and fetch raw transaction. These compact data structures allow the federation to verify the\ndeposit with only the block hashes being synced and not the whole chain."),(0,s.kt)("li",{parentName:"ol"},"The tweak together with the TxOutProof and the raw transaction can now be sent to the federation to prove money was\ndeposited. The federation should require a signature using the secret key.")),(0,s.kt)("p",null,"Note that only once the federation is in possession of the tweak they can actually spend the funds as it is also needed\nto tweak the private keys."),(0,s.kt)("h2",{id:"sending-bitcoin"},"Sending Bitcoin"),(0,s.kt)("p",null,"Once the federation agrees on paying Bitcoin to a set of destinations every participant deterministically selects\nthe necessary outputs. The previously agreed-upon fee rate is used to determine the fee. In case a change address is needed\nthe randomness beacon is used to derive a random change address just as a deposit address would be derived."),(0,s.kt)("p",null,"This transaction is then signed by each participant individually and the signatures broadcasted via the consensus\nprotocol. Note that due to the transaction being generated deterministically it does not need to be exchanged itself."),(0,s.kt)("p",null,"After receiving sufficient signatures each party can assemble the final transaction and broadcast it."))}c.isMDXComponent=!0}}]);