(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||s.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),u&&"?"!==u[0]&&(u="?"+u),n=n.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${i}${c}${n}${u}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,i)),t&&(n.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),n=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return b}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809),s=e.r(43476),o=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(88540),m=e.r(91949),f=e.r(73668),y=e.r(9396);function x(t){var r,i;let n,a,x,[b,v]=(0,o.useOptimistic)(m.IDLE_LINK_STATUS),w=(0,o.useRef)(null),{href:j,as:k,children:N,prefetch:S=null,passHref:T,replace:A,shallow:P,scroll:B,onClick:C,onMouseEnter:R,onTouchStart:M,legacyBehavior:O=!1,onNavigate:W,transitionTypes:D,ref:_,unstable_dynamicOnHover:L,...E}=t;n=N,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let I=o.default.useContext(c.AppRouterContext),F=!1!==S,U=!1!==S?null===(i=S)||"auto"===i?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,G="string"==typeof(r=k||j)?r:(0,l.formatUrl)(r);if(O){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=o.default.Children.only(n)}let K=O?a&&"object"==typeof a&&a.ref:_,V=o.default.useCallback(e=>(null!==I&&(w.current=(0,m.mountLinkInstance)(e,G,I,U,F,v)),()=>{w.current&&((0,m.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,G,I,U,v]),H={ref:(0,u.useMergedRef)(V,K),onClick(t){O||"function"!=typeof C||C(t),O&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!I||t.defaultPrevented||function(t,r,i,n,a,s,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);o.default.startTransition(()=>{d(r,n?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,i.current,l)})}}(t,G,w,A,B,W,D)},onMouseEnter(e){O||"function"!=typeof R||R(e),O&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),I&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){O||"function"!=typeof M||M(e),O&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),I&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(G)?H.href=G:O&&!T&&("a"!==a.type||"href"in a.props)||(H.href=(0,h.addBasePath)(G)),x=O?o.default.cloneElement(a,H):(0,s.jsx)("a",{...E,...H,children:n}),(0,s.jsx)(g.Provider,{value:b,children:x})}e.r(84508);let g=(0,o.createContext)(m.IDLE_LINK_STATUS),b=()=>(0,o.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},12923,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(18566),n=e.i(22016);let a=[{id:"why-oral-strips",title:"Why Oral Strips Are the Future of Supplement Delivery",excerpt:"Pills, powders, and gummies have dominated the supplement industry for decades. But oral dissolvable strips are changing everything — here's why.",category:"Science",date:"May 8, 2026",readTime:"4 min read"},{id:"morning-after-science",title:"The Science Behind Your Morning Recovery",excerpt:"What actually happens to your body after a night out? We break down the ingredients that help you bounce back faster.",category:"Wellness",date:"May 1, 2026",readTime:"5 min read"},{id:"gut-brain-connection",title:"The Gut-Brain Connection: Why Digestive Health Matters",excerpt:"Your gut is often called your 'second brain' — and for good reason. Learn how your digestive health impacts everything from mood to immunity.",category:"Digestive",date:"Apr 24, 2026",readTime:"6 min read"},{id:"beauty-from-within",title:"Beauty From Within: Nutrients That Actually Work",excerpt:"Topical products only go skin-deep. Discover the supplements that nourish your hair, skin, and nails from the inside out.",category:"Beauty",date:"Apr 17, 2026",readTime:"4 min read"},{id:"sleep-hygiene-guide",title:"The Complete Guide to Better Sleep Hygiene",excerpt:"Struggling with restless nights? From melatonin timing to wind-down routines, here's your science-backed sleep optimization playbook.",category:"Sleep",date:"Apr 10, 2026",readTime:"7 min read"}],s=["All","Science","Wellness","Digestive","Beauty","Sleep"];function o(){let[e,i]=(0,r.useState)("All"),[o,l]=(0,r.useState)(""),[c,u]=(0,r.useState)(!1),[d,h]=(0,r.useState)(!1),p="All"===e?a:a.filter(t=>t.category===e);return(0,t.jsxs)("div",{className:"min-h-dvh bg-black text-white",children:[(0,t.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]",children:[(0,t.jsx)(n.default,{href:"/",className:"text-xl font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsxs)("div",{className:"flex items-center gap-5",children:[(0,t.jsx)(n.default,{href:"/cart",className:"relative text-white",children:(0,t.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,t.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,t.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]})}),(0,t.jsx)(n.default,{href:"/",className:"text-sm font-medium text-white/50 hover:text-white/80 transition",children:"Home"})]})]}),(0,t.jsxs)("section",{className:"pt-32 pb-16 px-6 text-center",children:[(0,t.jsx)("span",{className:"text-[11px] font-medium tracking-[0.25em] uppercase text-white/40 mb-6 block",children:"The Stripd Blog"}),(0,t.jsx)("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-white mb-6",children:"Wellness, Dissolved."}),(0,t.jsx)("p",{className:"text-base sm:text-lg font-light tracking-tight text-white/60 max-w-md mx-auto",children:"Science-backed insights, wellness tips, and everything you need to know about the future of supplementation."})]}),(0,t.jsx)("section",{className:"px-6 pb-12",children:(0,t.jsx)("div",{className:"mx-auto max-w-md rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6",children:c?(0,t.jsxs)("div",{className:"text-center py-4",children:[(0,t.jsx)("svg",{className:"w-10 h-10 mx-auto mb-3 text-white/60",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})}),(0,t.jsx)("p",{className:"text-sm font-semibold text-white mb-1",children:"You're in!"}),(0,t.jsx)("p",{className:"text-xs text-white/40",children:"Welcome to the Stripd newsletter. We'll send you the latest posts and exclusive offers."})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2",children:"Never miss a post"}),(0,t.jsx)("p",{className:"text-xs text-white/50 mb-4",children:"Get the latest wellness insights delivered to your inbox every week."}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o&&(h(!0),setTimeout(()=>{u(!0),h(!1),l("")},800))},className:"flex gap-2",children:[(0,t.jsx)("input",{type:"email",value:o,onChange:e=>l(e.target.value),placeholder:"your@email.com",required:!0,className:"flex-1 rounded-full border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-white/40 transition"}),(0,t.jsx)("button",{type:"submit",disabled:d||!o,className:"rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-50 shrink-0",children:d?"Sending...":"Subscribe"})]})]})})}),(0,t.jsx)("section",{className:"sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/[0.06] py-4 px-4",children:(0,t.jsx)("div",{className:"mx-auto max-w-lg flex items-center justify-center gap-2.5 flex-wrap",children:s.map(r=>(0,t.jsx)("button",{onClick:()=>i(r),className:`shrink-0 rounded-full px-4 py-1.5 text-[12px] font-medium transition-all duration-300 border ${e===r?"bg-white text-black border-white":"bg-transparent text-white/60 border-white/15 hover:border-white/30 hover:text-white"}`,children:r},r))})}),(0,t.jsx)("section",{className:"px-4 py-14",children:(0,t.jsx)("div",{className:"mx-auto max-w-md space-y-5",children:p.map(e=>(0,t.jsxs)(n.default,{href:`/blog?id=${e.id}`,className:"group block rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#111111]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,t.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/50 border border-white/10",children:e.category}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:e.date}),(0,t.jsx)("span",{className:"text-[10px] text-white/20",children:"·"}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:e.readTime})]}),(0,t.jsx)("h2",{className:"text-base font-bold tracking-tight text-white mb-2 group-hover:text-white/90 transition",children:e.title}),(0,t.jsx)("p",{className:"text-[12px] leading-relaxed text-white/40",children:e.excerpt})]},e.id))})}),(0,t.jsx)("footer",{className:"border-t border-white/[0.06] px-6 py-10",children:(0,t.jsxs)("div",{className:"mx-auto max-w-md flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-sm font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:"Wellness Dissolved"})]}),(0,t.jsx)("span",{className:"text-[11px] text-white/20",children:"© 2026 Stripd"})]})})]})}let l={"why-oral-strips":{title:"Why Oral Strips Are the Future of Supplement Delivery",date:"May 8, 2026",category:"Science",content:`Pills, powders, and gummies have dominated the supplement industry for decades. But oral dissolvable strips are quietly revolutionizing how we think about daily nutrition.

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

Remember: supplements work best as part of a comprehensive sleep routine, not as a replacement for good habits.`}};function c({postId:e}){let[i,a]=(0,r.useState)(!1);(0,r.useEffect)(()=>a(!0),[]);let s=e?l[e]:null;return s?(0,t.jsxs)("div",{className:"min-h-dvh bg-black text-white",children:[(0,t.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/[0.06]",children:[(0,t.jsx)(n.default,{href:"/",className:"text-xl font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsx)(n.default,{href:"/blog",className:"text-sm font-medium text-white/50 hover:text-white/80 transition",children:"← Blog"})]}),(0,t.jsx)("article",{className:"pt-28 pb-20 px-6 max-w-md mx-auto",children:(0,t.jsxs)("div",{className:`transition-all duration-1000 ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)("span",{className:"px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase text-white/50 border border-white/10",children:s.category}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:s.date})]}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-white mb-8",children:s.title}),(0,t.jsx)("div",{className:"prose prose-invert prose-sm max-w-none text-white/60 leading-relaxed space-y-4",children:s.content.split("\n\n").map((e,r)=>e.startsWith("## ")?(0,t.jsx)("h2",{className:"text-lg font-bold text-white mt-8 mb-4",children:e.replace("## ","")},r):e.startsWith("### ")?(0,t.jsx)("h3",{className:"text-base font-semibold text-white mt-6 mb-3",children:e.replace("### ","")},r):e.startsWith("- **")?(0,t.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:e.split("\n").map((e,r)=>(0,t.jsx)("li",{className:"text-sm text-white/60",children:e.replace(/^- \*\*(.*?)\*\*:?/,"$1 — ")},r))},r):(0,t.jsx)("p",{className:"text-sm leading-relaxed",children:e},r))})]})}),(0,t.jsx)("footer",{className:"border-t border-white/[0.06] px-6 py-10",children:(0,t.jsxs)("div",{className:"mx-auto max-w-md flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-sm font-bold tracking-tight text-white",children:"STRIPD"}),(0,t.jsx)("span",{className:"text-[10px] text-white/30",children:"Wellness Dissolved"})]}),(0,t.jsx)("span",{className:"text-[11px] text-white/20",children:"© 2026 Stripd"})]})})]}):(0,t.jsx)("div",{className:"min-h-dvh bg-black text-white flex items-center justify-center",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"text-white/40 mb-4",children:"Post not found."}),(0,t.jsx)(n.default,{href:"/blog",className:"rounded-full bg-white px-6 py-3 text-sm font-semibold text-black",children:"Back to Blog"})]})})}e.s(["default",0,function(){let e=(0,i.useSearchParams)().get("id"),[n,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>a(!0),[]),n)?e?(0,t.jsx)(c,{postId:e}):(0,t.jsx)(o,{}):(0,t.jsx)("div",{className:"min-h-dvh bg-black"})}],12923)}]);