(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==u?(u="//"+(u||""),n&&"/"!==n[0]&&(n="/"+n)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${u}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,i)),t&&(n.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),n=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return g},useLinkStatus:function(){return v}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809),o=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(88540),m=e.r(91949),f=e.r(73668),y=e.r(9396);function g(t){var r,i;let n,a,g,[v,x]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:k,as:S,children:T,prefetch:j=null,passHref:P,replace:N,shallow:R,scroll:A,onClick:C,onMouseEnter:O,onTouchStart:B,legacyBehavior:M=!1,onNavigate:_,transitionTypes:E,ref:D,unstable_dynamicOnHover:I,...L}=t;n=T,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let W=s.default.useContext(u.AppRouterContext),F=!1!==j,U=!1!==j?null===(i=j)||"auto"===i?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,K="string"==typeof(r=S||k)?r:(0,l.formatUrl)(r);if(M){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(n)}let V=M?a&&"object"==typeof a&&a.ref:D,G=s.default.useCallback(e=>(null!==W&&(w.current=(0,m.mountLinkInstance)(e,K,W,U,F,x)),()=>{w.current&&((0,m.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,K,W,U,x]),$={ref:(0,c.useMergedRef)(G,V),onClick(t){M||"function"!=typeof C||C(t),M&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!W||t.defaultPrevented||function(t,r,i,n,a,o,l){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,n?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,i.current,l)})}}(t,K,w,N,A,_,E)},onMouseEnter(e){M||"function"!=typeof O||O(e),M&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),W&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){M||"function"!=typeof B||B(e),M&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),W&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,d.isAbsoluteUrl)(K)?$.href=K:M&&!P&&("a"!==a.type||"href"in a.props)||($.href=(0,h.addBasePath)(K)),g=M?s.default.cloneElement(a,$):(0,o.jsx)("a",{...L,...$,children:n}),(0,o.jsx)(b.Provider,{value:v,children:g})}e.r(84508);let b=(0,s.createContext)(m.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},95282,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(22016),n=e.i(18566);let a={"why-oral-strips":{title:"Why Oral Strips Are the Future of Supplement Delivery",date:"May 8, 2026",category:"Science",content:`Pills, powders, and gummies have dominated the supplement industry for decades. But oral dissolvable strips are quietly revolutionizing how we think about daily nutrition.

## The Problem with Traditional Supplements

The biggest barrier to consistent supplementation isn't efficacy — it's convenience. Swallowing large pills is uncomfortable for millions of people. Powders require measuring, mixing, and cleanup. Gummies are palatable but often loaded with sugar and limited in dosage capacity.

Studies show that over 50% of supplement users stop their routine within the first three months. The primary reason? It's simply too much hassle.

## How Oral Strips Work

Oral dissolvable strips use a thin-film technology originally developed for breath fresheners. The active ingredients are embedded in a water-soluble polymer matrix that dissolves on contact with saliva.

Once dissolved, the ingredients are absorbed directly through the oral mucosa — the lining of your mouth — bypassing the digestive system entirely. This means:

- **Faster onset**: Sublingual and buccal absorption delivers ingredients to the bloodstream faster than swallowing a pill
- **Higher bioavailability**: Bypassing first-pass metabolism in the liver means more of the active ingredients reach your system
- **No water needed**: Just place on your tongue and go

## Why This Matters for Wellness

Oral strips remove every barrier to consistency. Keep a pack in your pocket, your desk, your gym bag — and you'll never miss a dose again. No water fountain required. No measuring scoops. No excuses.

At STRIPD, we've combined this delivery technology with 13 targeted formulas backed by clinically-studied ingredients. From recovery to focus to sleep, there's a strip designed to make your wellness routine effortless.

The future of supplements isn't a bigger pill — it's no pill at all.`},"morning-after-science":{title:"The Science Behind Your Morning Recovery",date:"May 1, 2026",category:"Wellness",content:`We've all been there — the morning after a night out, feeling like you've been hit by a truck. But what's actually happening in your body, and how can you support its natural recovery processes?

## What Happens Overnight

When you consume alcohol, your body prioritizes metabolizing it over other processes. This leads to:

1. **Dehydration**: Alcohol is a diuretic, causing increased fluid loss
2. **Inflammation**: Your body mounts an inflammatory response
3. **Oxidative stress**: Free radicals accumulate as alcohol is broken down
4. **Liver strain**: Your liver works overtime to process toxins
5. **Blood sugar fluctuations**: Alcohol can cause blood sugar to drop

## Key Ingredients for Recovery

### Curcuma Longa (Turmeric)
Curcumin, the active compound in turmeric, is well-documented for its antioxidant properties that help combat oxidative stress and support a healthy inflammatory response.

### Andrographis
This traditional herb has been used for centuries in Ayurvedic and traditional medicine. Modern research supports its role in supporting immune function and overall wellness.

### Phyllanthus Species
Both Phyllanthus Niruri and Phyllanthus Emblica are known in traditional medicine for their liver-supportive properties, helping maintain normal liver function and detoxification pathways.

### Vitis Vinifera (Grape Seed)
Rich in proanthocyanidins, grape seed extract provides powerful antioxidant support that helps protect cells from oxidative damage.

## The STRIPD Approach

Our Recover formula combines these ingredients in a precise, fast-dissolving strip. No water needed, no chalky powders — just targeted support that starts working the moment it hits your tongue.

Remember: the best recovery strategy is always moderation and hydration. STRIPD is here to support your body's natural processes, not replace common sense.`},"gut-brain-connection":{title:"The Gut-Brain Connection: Why Digestive Health Matters",date:"Apr 24, 2026",category:"Digestive",content:`Your gut is often called your "second brain" — and for good reason. The enteric nervous system (ENS) lining your digestive tract contains over 100 million neurons, more than either the spinal cord or peripheral nervous system.

## The Gut-Brain Axis

The gut and brain communicate through a bidirectional network called the gut-brain axis. This involves:

- **The vagus nerve**: A direct neural highway between your gut and brain
- **Neurotransmitters**: About 90% of serotonin — your "feel-good" chemical — is produced in the gut
- **Immune signals**: Gut bacteria influence inflammation throughout your body, including your brain
- **Metabolic pathways**: Gut microbes produce compounds that affect brain function

## Why Probiotics Matter

Beneficial bacteria (probiotics) play a crucial role in maintaining this communication network. They help:

- **Maintain gut barrier integrity**: Preventing "leaky gut" and systemic inflammation
- **Produce short-chain fatty acids**: Fuel for gut cells and signaling molecules for the brain
- **Synthesize vitamins**: Including B vitamins and vitamin K
- **Crowd out harmful bacteria**: Supporting a balanced microbiome

## Prebiotics: Food for Your Good Bacteria

Prebiotics like polydextrose provide the fuel your beneficial bacteria need to thrive. When combined with probiotics, they create a synergistic effect that supports digestive wellness more effectively than either alone.

Our Gut Stripd combines 10 billion CFU of Bifidobacterium lactis with prebiotic polydextrose — all in a convenient mixed berry strip that dissolves on your tongue.`},"beauty-from-within":{title:"Beauty From Within: Nutrients That Actually Work",date:"Apr 17, 2026",category:"Beauty",content:`You can spend hundreds on serums, creams, and treatments — but true beauty starts from the inside. The nutrients you consume directly affect the health and appearance of your skin, hair, and nails.

## Biotin: The Beauty Vitamin

Biotin (Vitamin B7) is one of the most researched nutrients for hair, skin, and nail health. It plays a crucial role in keratin production — the protein that makes up your hair, skin, and nails.

At 5,000mcg per serving, our Glow Stripd delivers a clinically significant dose that supports:

- Normal hair strength and thickness
- Skin vitality and radiance
- Stronger, less brittle nails

## Folate for Cell Renewal

Folate (Vitamin B9) is essential for DNA synthesis and cell division — processes that are constantly happening in your skin and hair follicles. Adequate folate levels support healthy cell turnover and renewal.

## Vitamin D3: The Sunshine Vitamin

Vitamin D3 receptors are found throughout your skin cells. Adequate vitamin D levels support normal skin barrier function and immune health, helping your skin look and feel its best.

## Collagen and Vitamin E

For those seeking more targeted support, our Renew Stripd combines Collagen Peptides (100mg) with Vitamin E — a powerful antioxidant duo that supports skin elasticity and protects against environmental stressors.

The bottom line: the most effective beauty routine starts with what you put into your body, not just what you put on your skin.`},"sleep-hygiene-guide":{title:"The Complete Guide to Better Sleep Hygiene",date:"Apr 10, 2026",category:"Sleep",content:`Sleep is the foundation of health — yet millions of people struggle to get quality rest. The science of sleep hygiene offers practical, evidence-based strategies for better sleep.

## The Science of Sleep

Your sleep-wake cycle is regulated by your circadian rhythm — an internal clock influenced by light exposure, eating patterns, and physical activity. Key players include:

- **Melatonin**: The "sleep hormone" that signals your body it's time to rest
- **Adenosine**: A neurotransmitter that builds up during wakefulness, creating "sleep pressure"
- **Cortisol**: The stress hormone that should be lowest at bedtime

## Practical Sleep Hygiene Tips

### 1. Optimize Your Environment
- Keep your bedroom cool (65-68\xb0F / 18-20\xb0C)
- Use blackout curtains or an eye mask
- Minimize noise with earplugs or white noise
- Remove screens 60-90 minutes before bed

### 2. Establish a Routine
- Go to bed and wake up at the same time every day (yes, weekends too)
- Create a 30-minute wind-down ritual (reading, gentle stretching, meditation)
- Avoid caffeine after 2 PM
- Limit alcohol — it may help you fall asleep but disrupts REM sleep

### 3. Nutrition for Sleep
Certain nutrients directly support sleep quality:
- **Melatonin**: Helps regulate your sleep-wake cycle
- **Valerian Root**: Traditionally used to support relaxation
- **Chamomile**: Known for its calming properties
- **Lavender**: Aromatherapy shown to improve sleep quality
- **Magnesium**: Supports GABA receptors and muscle relaxation

## When Supplements Help

Even with perfect sleep hygiene, some nights need extra support. Our Rest Stripd combines Melatonin with Valerian Root, Lavender, Chamomile, and Hibiscus — formulated to help you fall asleep naturally and wake up refreshed, without the grogginess.

Remember: supplements work best as part of a comprehensive sleep routine, not as a replacement for good habits.`}};e.s(["default",0,function(){let e=(0,n.useSearchParams)().get("id"),[o,s]=(0,r.useState)(!1);(0,r.useEffect)(()=>s(!0),[]);let l=e?a[e]:null;return l?(0,t.jsxs)("div",{className:"min-h-dvh bg-black text-white",children:[(0,t.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]",children:[(0,t.jsx)(i.default,{href:"/",className:"text-xl font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsx)(i.default,{href:"/blog",className:"text-sm font-medium text-white/50 hover:text-white/80 transition",children:"← Blog"})]}),(0,t.jsx)("article",{className:"pt-28 pb-20 px-6 max-w-md mx-auto",children:(0,t.jsxs)("div",{className:`transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/50 border border-white/10",children:l.category}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:l.date})]}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-white mb-8",children:l.title}),(0,t.jsx)("div",{className:"prose prose-invert prose-sm max-w-none text-white/60 leading-relaxed space-y-4",children:l.content.split("\n\n").map((e,r)=>e.startsWith("## ")?(0,t.jsx)("h2",{className:"text-lg font-bold text-white mt-8 mb-4",children:e.replace("## ","")},r):e.startsWith("### ")?(0,t.jsx)("h3",{className:"text-base font-semibold text-white mt-6 mb-3",children:e.replace("### ","")},r):e.startsWith("- **")?(0,t.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:e.split("\n").map((e,r)=>(0,t.jsx)("li",{className:"text-sm text-white/60",children:e.replace(/^- \*\*(.*?)\*\*:?/,"$1 — ")},r))},r):(0,t.jsx)("p",{className:"text-sm leading-relaxed",children:e},r))})]})}),(0,t.jsx)("footer",{className:"border-t border-white/[0.06] px-6 py-10",children:(0,t.jsxs)("div",{className:"mx-auto max-w-md flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-sm font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:"Wellness Dissolved"})]}),(0,t.jsx)("span",{className:"text-[11px] text-white/20",children:"© 2026 Stripd"})]})})]}):(0,t.jsx)("div",{className:"min-h-dvh bg-black text-white flex items-center justify-center",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"text-white/40 mb-4",children:"Post not found."}),(0,t.jsx)(i.default,{href:"/blog",className:"rounded-full bg-white px-6 py-3 text-sm font-semibold text-black",children:"Back to Blog"})]})})}])}]);