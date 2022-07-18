(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),l=n(7),r=(n(0),n(216)),o={title:"Conditions",id:"conditions"},c={unversionedId:"patternlib/tour/conditions",id:"patternlib/tour/conditions",isDocsHomePage:!1,title:"Conditions",description:"This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:",source:"@site/docs/patternlib/tour/conditions.md",slug:"/patternlib/tour/conditions",permalink:"/docs/patternlib/tour/conditions",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/patternlib/tour/conditions.md",version:"current",lastUpdatedBy:"Thomas Grund",lastUpdatedAt:1658174960,sidebar:"docs",previous:{title:"Performance",permalink:"/docs/patternlib/tour/performance"},next:{title:"Time",permalink:"/docs/patternlib/tour/time"}},i=[{value:"Every and the others",id:"every-and-the-others",children:[{value:"every",id:"every",children:[]},{value:"every&#39;",id:"every-1",children:[]},{value:"whenmod",id:"whenmod",children:[]}]},{value:"The &quot;sometimes&quot; family",id:"the-sometimes-family",children:[{value:"sometimes",id:"sometimes",children:[]},{value:"sometimesBy",id:"sometimesby",children:[]},{value:"someCycles",id:"somecycles",children:[]},{value:"someCyclesBy",id:"somecyclesby",children:[]}]},{value:"Choosing",id:"choosing",children:[{value:"choose",id:"choose",children:[]},{value:"chooseby",id:"chooseby",children:[]},{value:"wchoose",id:"wchoose",children:[]},{value:"wchooseby",id:"wchooseby",children:[]}]},{value:"Boolean conditions",id:"boolean-conditions",children:[{value:"struct",id:"struct",children:[]},{value:"mask",id:"mask",children:[]},{value:"sew",id:"sew",children:[]},{value:"stitch",id:"stitch",children:[]},{value:"select",id:"select",children:[]},{value:"selectF",id:"selectf",children:[]},{value:"pickF",id:"pickf",children:[]},{value:"squeeze",id:"squeeze",children:[]},{value:"euclid",id:"euclid",children:[]},{value:"euclidInv",id:"euclidinv",children:[]},{value:"euclidFull",id:"euclidfull",children:[]}]},{value:"ControlPattern conditions",id:"controlpattern-conditions",children:[{value:"fix",id:"fix",children:[]},{value:"fixRange",id:"fixrange",children:[]}]},{value:"ifp",id:"ifp",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",Object(r.b)("strong",{parentName:"li"},"Haskell")," side."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Description"),": verbal description of the function."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),Object(r.b)("h2",{id:"every-and-the-others"},"Every and the others"),Object(r.b)("h3",{id:"every"},"every"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"every")," is function that allows you to apply another function conditionally. It takes three inputs: how often the function should be applied (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"3")," to apply it every ",Object(r.b)("inlineCode",{parentName:"p"},"3")," cycles), the function to be applied, and the pattern you are applying it to. For example: to reverse a pattern every three cycles (and for the other two play it normally)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"\n')),Object(r.b)("p",null,"Note that if the function you're applying itself requires additional parameters (such as fast 2 to make a pattern twice as fast), then you'll need to wrap it in parenthesis, like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 3 (fast 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),Object(r.b)("p",null,"Otherwise, the ",Object(r.b)("inlineCode",{parentName:"p"},"every")," function will think it is being passed too many parameters."),Object(r.b)("h3",{id:"every-1"},"every'"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"every'")," is a generalisation of ",Object(r.b)("inlineCode",{parentName:"p"},"every"),", taking one additional argument. The additional argument allows you to offset the function you are applying."),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"every' 3 0 (fast 2)")," will speed up the cycle on cycles 0,3,6,\u2026 whereas ",Object(r.b)("inlineCode",{parentName:"p"},"every' 3 1 (fast 2)")," will transform the pattern on cycles 1,4,7,\u2026"),Object(r.b)("p",null,"With this in mind, setting the second argument of ",Object(r.b)("inlineCode",{parentName:"p"},"every'")," to ",Object(r.b)("inlineCode",{parentName:"p"},"0")," gives the equivalent ",Object(r.b)("inlineCode",{parentName:"p"},"every")," function. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"every 3")," is equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"every' 3 0"),". "),Object(r.b)("h3",{id:"whenmod"},"whenmod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: whenmod :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"whenmod")," has a similar form and behavior to ",Object(r.b)("inlineCode",{parentName:"p"},"every"),", but requires an additional number. It applies the function to the pattern, when the remainder of the current loop number divided by the first parameter, is greater or equal than the second parameter. For example the following makes every other block of four loops twice as ",Object(r.b)("inlineCode",{parentName:"p"},"fast"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ whenmod 8 4 (fast 2) (sound "bd sn kurt")\n')),Object(r.b)("h2",{id:"the-sometimes-family"},'The "sometimes" family'),Object(r.b)("h3",{id:"sometimes"},"sometimes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sometimes")," is function, that applies another function to a pattern, around 50% of the time, at random. It takes two inputs, the function to be applied, and the pattern you are applying it to."),Object(r.b)("p",null,"For example to distort half the events in a pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sometimes")," has a number of variants, which apply the function with different likelihood: "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"function"),Object(r.b)("th",{parentName:"tr",align:null},"\xa0likelihood"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"always"),Object(r.b)("td",{parentName:"tr",align:null},"100%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"almostAlways"),Object(r.b)("td",{parentName:"tr",align:null},"90%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"often"),Object(r.b)("td",{parentName:"tr",align:null},"75%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"sometimes"),Object(r.b)("td",{parentName:"tr",align:null},"50%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"rarely"),Object(r.b)("td",{parentName:"tr",align:null},"25%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"almostNever"),Object(r.b)("td",{parentName:"tr",align:null},"10%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"never"),Object(r.b)("td",{parentName:"tr",align:null},"0%")))),Object(r.b)("h3",{id:"sometimesby"},"sometimesBy"),Object(r.b)("p",null,"If you want to be specific, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"sometimesBy")," and a number, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"sometimesBy 0.93 (# speed 2)\n")),Object(r.b)("p",null,"to apply the speed control on average 93 times out of a hundred."),Object(r.b)("h3",{id:"somecycles"},"someCycles"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"someCycles")," is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"sometimes"),", but instead of applying the given function to random events, it applies it to random cycles. For example the following will either distort all of the events in a cycle, or none of them:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ someCycles (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"\n')),Object(r.b)("h3",{id:"somecyclesby"},"someCyclesBy"),Object(r.b)("p",null,"As with ",Object(r.b)("inlineCode",{parentName:"p"},"sometimesBy"),", if you want to be specific, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"someCyclesBy")," and a number. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"someCyclesBy 0.93 (# speed 2)\n")),Object(r.b)("p",null,"will apply the speed control on average ",Object(r.b)("inlineCode",{parentName:"p"},"93")," cycles out of a hundred."),Object(r.b)("h2",{id:"choosing"},"Choosing"),Object(r.b)("h3",{id:"choose"},"choose"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: choose :: [a] -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"choose")," function emits a stream of randomly choosen values from the given list, as a continuous pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])\n')),Object(r.b)("p",null,"As with all continuous patterns, you have to be careful to give them structure; in this case choose gives you an infinitely detailed stream of random choices. "),Object(r.b)("h3",{id:"chooseby"},"chooseby"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: chooseBy :: Pattern Double -> [a] -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"chooseBy")," function is like choose but instead of selecting elements of the list randomly, it uses the given pattern to select elements."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'chooseBy "0 0.25 0.5" ["a","b","c","d"]\n')),Object(r.b)("p",null,"will result in the pattern ",Object(r.b)("inlineCode",{parentName:"p"},'"a b c" '),"."),Object(r.b)("h3",{id:"wchoose"},"wchoose"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: wchoose :: [(a, Double)] -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"wchoose")," is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"choose"),", but allows you to 'weight' the choices, so some are more likely to be chosen than others. The following is similar to the previous example, but the ",Object(r.b)("inlineCode",{parentName:"p"},"2")," is twice as likely to be chosen than the ",Object(r.b)("inlineCode",{parentName:"p"},"0")," or ",Object(r.b)("inlineCode",{parentName:"p"},"3"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Prior to version ",Object(r.b)("inlineCode",{parentName:"p"},"1.0.0")," of ",Object(r.b)("strong",{parentName:"p"},"Tidal"),", the weights had to add up to ",Object(r.b)("inlineCode",{parentName:"p"},"1"),", but this is no longer the case. "))),Object(r.b)("h3",{id:"wchooseby"},"wchooseby"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"wchooseBy")," function is like ",Object(r.b)("inlineCode",{parentName:"p"},"wchoose")," but instead of selecting elements of the list randomly, it uses the given pattern to select elements. "),Object(r.b)("h2",{id:"boolean-conditions"},"Boolean conditions"),Object(r.b)("h3",{id:"struct"},"struct"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: struct :: Pattern Bool -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"struct")," places a rhythmic 'boolean' structure on the pattern you give it. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct ("t ~ t*2 ~") $ sound "cp"\n')),Object(r.b)("p",null,"... is the same as ..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "cp ~ cp*2 ~"\n')),Object(r.b)("p",null,"The structure comes from a boolean pattern, i.e. a binary one containing true or false values. Above we only used true values, denoted by ",Object(r.b)("inlineCode",{parentName:"p"},"t"),". It's also possible to include false values with ",Object(r.b)("inlineCode",{parentName:"p"},"f"),", which struct will simply treat as silience. For example, this would have the same outcome as the above:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct ("t f t*2 f") $ sound "cp"\n')),Object(r.b)("p",null,"These true/false binary patterns become useful when you conditionally manipulate them, for example 'inverting' the values using ",Object(r.b)("inlineCode",{parentName:"p"},"every")," and ",Object(r.b)("inlineCode",{parentName:"p"},"inv"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct (every 3 inv "t f t*2 f") $ sound "cp"\n')),Object(r.b)("p",null,"In the above, the boolean values will be 'inverted' every third cycle, so that the structure comes from the ",Object(r.b)("inlineCode",{parentName:"p"},"fs")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"t"),". Note that euclidean patterns also create true/false values, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct (every 3 inv "t(3,8)") $ sound "cp"\n')),Object(r.b)("p",null,"In the above, the euclidean pattern creates ",Object(r.b)("inlineCode",{parentName:"p"},'"t f t f t f f t"')," which gets inverted to ",Object(r.b)("inlineCode",{parentName:"p"},'"f t f t f t t f"')," every third cycle. Note that if you prefer you can use ",Object(r.b)("inlineCode",{parentName:"p"},"1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"0")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"t")," and ",Object(r.b)("inlineCode",{parentName:"p"},"f"),"."),Object(r.b)("h3",{id:"mask"},"mask"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: mask :: Pattern Bool -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mask")," takes a boolean (aka binary) pattern and 'masks' another pattern with it. That is, events are only carried over if they match within a 'true' event in the binary pattern. For example consider this kind of messy rhythm without any rests:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (cat ["sn*8", "[cp*4 bd*4, hc*5]"]) # n (run 8)\n')),Object(r.b)("p",null,"If we apply a mask to it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ mask "t t t ~ t t ~ t"\n  $ s (cat ["sn*8", "[cp*4 bd*4, bass*5]"])\n  # n (run 8)\n')),Object(r.b)("p",null,"Due to the use of ",Object(r.b)("inlineCode",{parentName:"p"},"cat")," here, the same mask is first applied to ",Object(r.b)("inlineCode",{parentName:"p"},'"sn*8"')," and in the next cycle to ",Object(r.b)("inlineCode",{parentName:"p"},'"[cp4 bd4, hc*5]"'),"."),Object(r.b)("p",null,"You could achieve the same effect by adding rests within the ",Object(r.b)("inlineCode",{parentName:"p"},"cat")," patterns, but mask allows you to do this more easily. It kind of keeps the rhythmic structure and you can change the used samples independently:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ mask "1 ~ 1 ~ 1 1 ~ 1"\n  $ s (cat ["can*8", "[cp*4 sn*4, jvbass*16]"])\n  # n (run 8)\n')),Object(r.b)("h3",{id:"sew"},"sew"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"sew")," uses a pattern of boolean (true or false) values to switch between two other patterns. For example the following will play the first pattern for the first half of a cycle, and the second pattern for the other half."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound (sew "t f" "bd*8" "cp*8")\n')),Object(r.b)("p",null,"The above combines two patterns of strings, and passes the result to the sound function. It's also possible to sew together two control patterns, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sew "t <f t> <f [f t] t>" (n "0 .. 15" # s "future") (s "cp:3*16" # speed saw + 1.2)\n')),Object(r.b)("p",null,"You can also use Euclidean rhythm syntax in the boolean sequence:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sew "t(11,16)" (n "0 .. 15" # s "future") (s "cp:3*16" # speed sine + 1.5)\n')),Object(r.b)("h3",{id:"stitch"},"stitch"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"stitch")," uses the first (binary) pattern to switch between the following two patterns. The resulting structure comes from the binary pattern, not the source patterns. This differs from sew where the resulting structure comes from the source patterns. For example, the following uses a euclidean pattern to control CC0:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ccv (stitch "t(7,16)" 127 0) # ccn 0  # "midi"\n')),Object(r.b)("h3",{id:"select"},"select"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"select :: Pattern Double -> [Pattern a] -> Pattern a\n")),Object(r.b)("p",null,"Chooses between a list of patterns, using a pattern of floats (from ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to ",Object(r.b)("inlineCode",{parentName:"p"},"1"),"). "),Object(r.b)("h3",{id:"selectf"},"selectF"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"selectF :: Pattern Double -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"Chooses between a list of functions, using a pattern of floats (from ",Object(r.b)("inlineCode",{parentName:"p"},"0")," to ",Object(r.b)("inlineCode",{parentName:"p"},"1"),") "),Object(r.b)("h3",{id:"pickf"},"pickF"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"pickF :: Pattern Int -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"Chooses between a list of functions, using a pattern of integers."),Object(r.b)("h3",{id:"squeeze"},"squeeze"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"squeeze :: Pattern Int -> [Pattern a] -> Pattern a\n")),Object(r.b)("p",null,"Chooses between a list of patterns, using a pattern of integers."),Object(r.b)("h3",{id:"euclid"},"euclid"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: euclid :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"euclid")," creates a Euclidean rhythmic structure. It produces the same output as the Euclidean pattern string. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ euclid 3 8 $ sound "cp"\n')),Object(r.b)("p",null,"is the same as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "cp(3,8)"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"euclid")," accepts two parameters that can be patterns:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ euclid "<3 5>" "[8 16]/4" $ s "bd"\n')),Object(r.b)("h3",{id:"euclidinv"},"euclidInv"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: euclidInv :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,"Inverts the pattern given by ",Object(r.b)("inlineCode",{parentName:"p"},"euclid"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ stack [euclid 5 8 $ s "bd",\n            euclidInv 5 8 $ s "hh27"]\n')),Object(r.b)("p",null,"to hear that the hi-hat event fires on every one of the eight even beats that the bass drum does not."),Object(r.b)("h3",{id:"euclidfull"},"euclidFull"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Type: euclidFull :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a ->Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"euclidFull")," is a convenience function for playing one pattern on the euclidean rhythm and a different pattern on the off-beat."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'euclidFull 5 8 (s "bd") (s "hh27")\n')),Object(r.b)("p",null,"is equivalent to our above example. "),Object(r.b)("h2",{id:"controlpattern-conditions"},"ControlPattern conditions"),Object(r.b)("h3",{id:"fix"},"fix"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"fix")," you can apply a ControlPattern as a condition and apply a function wich matches the controls. The first parameter is the function to apply and the second paramete is the condition."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fix (ply 2) (s "hh") $ s "bd hh sn hh"\n')),Object(r.b)("h3",{id:"fixrange"},"fixRange"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"fixRange :: (ControlPattern -> Pattern ValueMap) -> Pattern (Map.Map String (Value, Value)) -> ControlPattern -> ControlPattern\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"fixRange")," function isn't very user-friendly at the moment but you can create a ",Object(r.b)("inlineCode",{parentName:"p"},"fix")," variant with a range condition. Any value of a ControlPattern wich matches the values will apply the passed function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ (fixRange ((# distort 1) . (# gain 0.8)) (pure $ Map.singleton "note"  ((VN 0, VN 7)))) $ s "superpiano" <| note "1 12 7 11"\n')),Object(r.b)("h2",{id:"ifp"},"ifp"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},"Type: ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ifp")," decides whether to apply one or another function depending on the result of a test function, which is passed the current cycle as a number. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ ifp ((== 0).(flip mod 2))\n  (striate 4)\n  (# coarse "24 48") $\n  sound "hh hc"\n')),Object(r.b)("p",null,"This will apply ",Object(r.b)("inlineCode",{parentName:"p"},"striate 4")," for every even cycle, and ",Object(r.b)("inlineCode",{parentName:"p"},'# coarse "24 48"')," for every odd one."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The test function does not rely on anything Tidal-specific, it uses plain Haskell functionality for operating on numbers. That is, it calculates the modulo of ",Object(r.b)("inlineCode",{parentName:"p"},"2")," of the current cycle which is either ",Object(r.b)("inlineCode",{parentName:"p"},"0")," (for even cycles) or ",Object(r.b)("inlineCode",{parentName:"p"},"1"),". It then compares this value against ",Object(r.b)("inlineCode",{parentName:"p"},"0")," and returns the result, which is either ",Object(r.b)("inlineCode",{parentName:"p"},"True")," or ",Object(r.b)("inlineCode",{parentName:"p"},"False"),". This is what the first part of ",Object(r.b)("inlineCode",{parentName:"p"},"ifp"),"'s type signature signifies ",Object(r.b)("inlineCode",{parentName:"p"},"(Int -> Bool)"),", a function that takes a whole number and returns either ",Object(r.b)("inlineCode",{parentName:"p"},"True")," or ",Object(r.b)("inlineCode",{parentName:"p"},"False"),". "))))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?l.a.createElement(m,c(c({ref:t},s),{},{components:n})):l.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);