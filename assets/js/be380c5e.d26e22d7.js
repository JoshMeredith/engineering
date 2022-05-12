"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[207],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3057:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={slug:"2022-04-28-on-the-inlining-of-integer-and-natural-operations",title:"On the inlining of Integer and Natural operations",authors:[],tags:["ghc"],custom_edit_url:null},s=void 0,p={permalink:"/2022-04-28-on-the-inlining-of-integer-and-natural-operations",source:"@site/blog/2022-04-28-on-the-inlining-of-integer-and-natural-operations-bot8CUQvoe-import.md",title:"On the inlining of Integer and Natural operations",description:"Sylvain Henry (sylvain.henry@iohk.io)",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:4.15,truncated:!1,authors:[],frontMatter:{slug:"2022-04-28-on-the-inlining-of-integer-and-natural-operations",title:"On the inlining of Integer and Natural operations",authors:[],tags:["ghc"],custom_edit_url:null},prevItem:{title:"Setting up Csaba's External STG Interpreter",permalink:"/2022-05-02-setup-ext-stg-interp"},nextItem:{title:"GHC March 2022 Update",permalink:"/2022-04-19-ghc-march-2022-update"}},u={authorsImageUrls:[]},d=[],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sylvain Henry (",(0,l.kt)("a",{parentName:"strong",href:"mailto:sylvain.henry@iohk.io"},"sylvain.henry@iohk.io"),")")," "),(0,l.kt)("p",null,"In this post I discuss the inlining of Integer and Natural operations in Haskell. It\u2019s a promising performance work I\u2019ve been conducting six months ago, which was blocked by an independent issue, but that I will likely resume soon as the issue has been fixed in the meantime."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To follow this post, you must know that ",(0,l.kt)("inlineCode",{parentName:"p"},"Natural")," numbers are represented as follows in ",(0,l.kt)("inlineCode",{parentName:"p"},"ghc-bignum"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | Natural number\n--\n-- Invariant: numbers <= WORD_MAXBOUND use the `NS` constructor\ndata Natural\n   = NS !Word#\n   | NB !BigNat#\n")),(0,l.kt)("p",null,"Small naturals are represented with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Word#")," and large ones with a ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNat#")," (a ",(0,l.kt)("inlineCode",{parentName:"p"},"ByteArray#"),")."),(0,l.kt)("p",null,"Now consider the following simple example using Natural:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | Add 2 to a Word. Use Natural to avoid Word overflow\nfoo :: Word -> Natural\nfoo x = fromIntegral x + 2\n")),(0,l.kt)("p",null,"There are only small naturals involved: ",(0,l.kt)("inlineCode",{parentName:"p"},"fromIntegral x")," is small because ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Word"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," is small. We could hope that GHC would use ",(0,l.kt)("inlineCode",{parentName:"p"},"Word#")," primops to implement this and would allocate a ",(0,l.kt)("inlineCode",{parentName:"p"},"Natural")," heap object for the result ",(0,l.kt)("em",{parentName:"p"},"only"),". However it\u2019s not what happens currently, even in GHC HEAD. In the following STG dump, we can see that a ",(0,l.kt)("inlineCode",{parentName:"p"},"Natural")," heap object is allocated for ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," before calling ",(0,l.kt)("inlineCode",{parentName:"p"},"naturalAdd")," (",(0,l.kt)("inlineCode",{parentName:"p"},"let")," bindings in STG reflect heap allocations):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"foo1 = NS! [2##];\n\nfoo =\n    \\r [x_sXn]\n        case x_sXn of {\n        W# x#_sXp ->\n        let { sat_sXq = NS! [x#_sXp]; } in  naturalAdd sat_sXq foo1;\n        };\n")),(0,l.kt)("p",null,"Let\u2019s look at ",(0,l.kt)("inlineCode",{parentName:"p"},"naturalAdd"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | Add two naturals\nnaturalAdd :: Natural -> Natural -> Natural\n{-# NOINLINE naturalAdd #-}\nnaturalAdd (NS x) (NB y) = NB (bigNatAddWord# y x)\nnaturalAdd (NB x) (NS y) = NB (bigNatAddWord# x y)\nnaturalAdd (NB x) (NB y) = NB (bigNatAdd x y)\nnaturalAdd (NS x) (NS y) =\n   case addWordC# x y of\n      (# l,0# #) -> NS l\n      (# l,c  #) -> NB (bigNatFromWord2# (int2Word# c) l)\n")),(0,l.kt)("p",null,"We are clearly in the last case where both arguments are small. It seems beneficial to allow this function to be inlined. If we did we would get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"foo =\n    \\r [x_s158]\n        case x_s158 of {\n        W# x#_s15a ->\n        case addWordC# [x#_s15a 2##] of {\n        (#,#) l_s15c ds_s15d ->\n        case ds_s15d<TagProper> of ds1_s15e {\n          __DEFAULT ->\n              case int2Word# [ds1_s15e] of sat_s15f {\n              __DEFAULT ->\n              case bigNatFromWord2# sat_s15f l_s15c of ds2_s15g {\n              __DEFAULT -> NB [ds2_s15g];\n              };\n              };\n          0# -> NS [l_s15c];\n        };\n        };\n        };\n")),(0,l.kt)("p",null,"which produces much better assembly code, especially if there is no carry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    addq $2,%rax       ; add 2 to a machine word\n    setc %bl           ; test the carry.\n    movzbl %bl,%ebx    ; it could be done\n    testq %rbx,%rbx    ; more efficiently\n    jne _blk_c17c      ; with "jc"\n_blk_c17i:\n    movq $NS_con_info,-8(%r12) ; alloc NS datacon value\n    movq %rax,(%r12)           ; with the addition result as payload.\n    leaq -7(%r12),%rbx         ; make it the first argument\n    addq $8,%rbp               ; and then\n    jmp *(%rbp)                ; call continuation\n...\n')),(0,l.kt)("p",null,"So why aren\u2019t we always inlining ",(0,l.kt)("inlineCode",{parentName:"p"},"naturalAdd"),"? We even explicitly disallow it with a ",(0,l.kt)("inlineCode",{parentName:"p"},"NOINLINE")," pragma. The reason is that ",(0,l.kt)("inlineCode",{parentName:"p"},"naturalAdd")," and friends are involved in constant-folding rules."),(0,l.kt)("p",null,"For example, consider:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"bar :: Natural -> Natural\nbar x = x + 2\n\nbaz = bar 0x12345678913245678912345679123456798\n")),(0,l.kt)("p",null,"Currently we get the following Core:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"bar1 = NS 2##\n\nbar = \\ x_aHU -> naturalAdd x_aHU bar1\n\nbaz = NB 99114423092485377935703335253042771879834\n")),(0,l.kt)("p",null,"You can see that ",(0,l.kt)("inlineCode",{parentName:"p"},"baz"),"  is a constant thanks to constant-folding."),(0,l.kt)("p",null,"However if we let ",(0,l.kt)("inlineCode",{parentName:"p"},"naturalAdd")," inline we get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"baz\n  = case bigNatAddWord# 99114423092485377935703335253042771879832 2##\n    of ds_d11H\n    { __DEFAULT ->\n    NB ds_d11H\n    }\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"baz")," is no longer a constant."),(0,l.kt)("p",null,"A solution would be to add constant-folding rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNat#")," functions, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"bigNatAddWord#"),". This is exactly what we have started doing in ",(0,l.kt)("a",{parentName:"p",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20361"},"#20361"),". Our new plan is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make ",(0,l.kt)("inlineCode",{parentName:"li"},"BigNat#")," operation ",(0,l.kt)("inlineCode",{parentName:"li"},"NOINLINE")," and add constant-folding rules for them"),(0,l.kt)("li",{parentName:"ul"},"Make Integer/Natural operations ",(0,l.kt)("inlineCode",{parentName:"li"},"INLINEABLE")," (expose their unfolding)"),(0,l.kt)("li",{parentName:"ul"},"Hence rely on constant-folding for ",(0,l.kt)("inlineCode",{parentName:"li"},"Word#/Int#/BigNat#")," to provide constant folding for ",(0,l.kt)("inlineCode",{parentName:"li"},"Integer")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Natural"))),(0,l.kt)("p",null,"The good consequences of this plan are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Less allocations when bignum operations are inlined and some of the arguments are known to be small/big or fully known (constant)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Integer")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Natural")," are less magical: you can implement your own similar types and expect the same performance without having to add new rewrite rules")),(0,l.kt)("p",null,"There were some unforeseen difficulties with this plan though:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Some of the rewrite rules we need involve unboxed values such as ",(0,l.kt)("inlineCode",{parentName:"li"},"BigNat#")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Word#")," and the weren\u2019t supported. Luckily, this has been recently fixed (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19313"},"#19313"),") by removing the \u201capp invariant\u201d (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20554"},"#20554"),"). Thanks Joachim! That\u2019s the reason why we could resume this work now."),(0,l.kt)("li",{parentName:"ol"},"Some unfoldings (RHSs) become bigger due to the inlining of bignum operations. Hence they may not themselves be inlined further due to inlining thresholds even if it would be beneficial. A better inlining heuristic would fix this (see ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20516"},"#20516"),"). It will likely be the topic of the next post.")))}m.isMDXComponent=!0}}]);