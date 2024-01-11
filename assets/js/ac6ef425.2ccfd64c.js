"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(3117),i=(n(7294),n(3905));const l={title:"Synthesizers",id:"synthesizers"},r=void 0,o={unversionedId:"reference/synthesizers",id:"reference/synthesizers",title:"Synthesizers",description:"SuperDirt is installed along with an extensive list of default audio effects and synthesizers. Note that you can also extend this list by adding your own synthesizers and audio effects to the audio engine. For instance, check out the Mutable Instruments or the SynthDefs for Tidal threads on the Tidal Club forum.",source:"@site/docs/reference/synthesizers.md",sourceDirName:"reference",slug:"/reference/synthesizers",permalink:"/docs/reference/synthesizers",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/synthesizers.md",tags:[],version:"current",lastUpdatedAt:1704955736,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{title:"Synthesizers",id:"synthesizers"},sidebar:"reference",previous:{title:"Oscillators",permalink:"/docs/reference/oscillators"},next:{title:"Audio effects",permalink:"/docs/reference/audio_effects"}},p={},s=[{value:"Basic instruments",id:"basic-instruments",level:2},{value:"Additive synthesis",id:"additive-synthesis",level:3},{value:"Supergong",id:"supergong",level:4},{value:"Substractive synthesis",id:"substractive-synthesis",level:3},{value:"Supersquare",id:"supersquare",level:4},{value:"Supersaw",id:"supersaw",level:4},{value:"Superpwm",id:"superpwm",level:4},{value:"Superchip",id:"superchip",level:4},{value:"Superhoover",id:"superhoover",level:4},{value:"Superzow",id:"superzow",level:4},{value:"Supertron",id:"supertron",level:4},{value:"Superreese",id:"superreese",level:4},{value:"Supernoise",id:"supernoise",level:4},{value:"Superstatic",id:"superstatic",level:3},{value:"Supercomparator",id:"supercomparator",level:4},{value:"Physical modelling",id:"physical-modelling",level:3},{value:"Supermandolin",id:"supermandolin",level:4},{value:"Superpiano",id:"superpiano",level:4},{value:"Superfork",id:"superfork",level:4},{value:"Superhammond",id:"superhammond",level:4},{value:"Supervibe",id:"supervibe",level:4},{value:"FM synthesis",id:"fm-synthesis",level:3},{value:"Superfm",id:"superfm",level:4},{value:"Drum synthesis",id:"drum-synthesis",level:3},{value:"Superhex",id:"superhex",level:4},{value:"Superkick",id:"superkick",level:4},{value:"Super808",id:"super808",level:4},{value:"Superhat",id:"superhat",level:4},{value:"Supersnare",id:"supersnare",level:4},{value:"Superclap",id:"superclap",level:4},{value:"SOSKick",id:"soskick",level:4},{value:"SOSHats",id:"soshats",level:4},{value:"SOSToms",id:"sostoms",level:4},{value:"SOSSnare",id:"sossnare",level:4},{value:"Audio Input",id:"audio-input",level:3},{value:"in",id:"in",level:4},{value:"inr",id:"inr",level:4},{value:"Other synths and goodies",id:"other-synths-and-goodies",level:3},{value:"imp",id:"imp",level:4},{value:"psin",id:"psin",level:4},{value:"gabor",id:"gabor",level:4},{value:"cyclo",id:"cyclo",level:4},{value:"Supersiren",id:"supersiren",level:4},{value:"Supergrind",id:"supergrind",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SuperDirt")," is installed along with an extensive list of ",(0,i.kt)("em",{parentName:"p"},"default")," audio effects and synthesizers. Note that you can also extend this list by adding your own synthesizers and audio effects to the audio engine. For instance, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/mutable-instruments-ugens/2730"},"Mutable Instruments")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/synthdefs-for-tidal/1092"},"SynthDefs for Tidal")," threads on the ",(0,i.kt)("strong",{parentName:"p"},"Tidal Club")," forum."),(0,i.kt)("h2",{id:"basic-instruments"},"Basic instruments"),(0,i.kt)("p",null,"Default values are in ",(0,i.kt)("strong",{parentName:"p"},"parentheses"),".  In all synths, ",(0,i.kt)("inlineCode",{parentName:"p"},"sustain")," (default 1) affects the overall envelope timescale. The parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"pan")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"freq")," can also be set in all synths. The default value for freq is usually 440 \u2013 in synths where it\u2019s not, ",(0,i.kt)("inlineCode",{parentName:"p"},"freq")," and its default value for that synth are mentioned in its parameter list below."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some undocumented parameters are included without descriptions.")),(0,i.kt)("h3",{id:"additive-synthesis"},"Additive synthesis"),(0,i.kt)("h4",{id:"supergong"},"Supergong"),(0,i.kt)("p",null,"An example of additive synthesis, building up a gong-like noise from a sum of sine-wave harmonics. Notice how the envelope timescale and amplitude can be scaled as a function of the harmonic frequency."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): provides something like a tone knob"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (1): adjusts how the harmonics decay"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for pitch glide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ n (slow 2 $ fmap (*7) $ run 8)\n  # s "supergong"\n  # decay "[1 0.2]/4"\n  # voice "[0.5 0]/8"\n')),(0,i.kt)("h3",{id:"substractive-synthesis"},"Substractive synthesis"),(0,i.kt)("h4",{id:"supersquare"},"Supersquare"),(0,i.kt)("p",null,"A moog-inspired square-wave synth; variable-width pulses with filter frequency modulated by an LFO:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice"),": controls the pulse width (exactly zero or one will make no sound)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0): the decay"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semitone")," (12): how far off in pitch the secondary oscillator is (need not be integer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance")," (0.2): filter resonance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfo")," (1): how much the LFO affects the filter frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): LFO rate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by \u201cn\u201d")),(0,i.kt)("h4",{id:"supersaw"},"Supersaw"),(0,i.kt)("p",null,"A moog-inspired sawtooth synth; slightly detuned saws with triangle harmonics, filter frequency modulated by LFO:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0.5): controls a relative phase and detune amount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semitone")," (12): how far off in pitch the secondary oscillator is (need not be integer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance")," (0.2) filter resonance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfo")," (1) how much the LFO affects the filter frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): LFO rate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by \u201cn\u201d")),(0,i.kt)("h4",{id:"superpwm"},"Superpwm"),(0,i.kt)("p",null,"A moog-inspired PWM synth; pulses multiplied by phase-shifted pulses, double filtering with an envelope on the second"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice"),": controls the phase shift rate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0): decay."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semitone")," (12): how far off in pitch the secondary oscillator is (need not be integer)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance")," (0.2): filter resonance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfo")," (1): how much the LFO affects the filter frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): LFO rate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by \u201cn\u201d")),(0,i.kt)("h4",{id:"superchip"},"Superchip"),(0,i.kt)("p",null,"Uses the Atari ST emulation ",(0,i.kt)("em",{parentName:"p"},"UGen")," with 3 oscillators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slide")," (0): for a linear frequency glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): repeats the above glide \u201cn\u201d times (can be fractional or negative)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for an overall glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch2")," (2): control the ratio of harmonics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch3")," (3): control the ratio of harmonics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): causes variations in the levels of the 3 oscillators")),(0,i.kt)("h4",{id:"superhoover"},"Superhoover"),(0,i.kt)("p",null,"Hoover, adapted from ",(0,i.kt)("a",{parentName:"p",href:"http://superdupercollider.blogspot.com/2009/06/more-dominator-deconstruction.html"},"Wouter Snoei"),"\u2019s implementation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slide")," (0): for the amount of initial pitch glide, positive slides up in pitch, negative slides down"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0): for a different envelope shape"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for constant pitch glide")),(0,i.kt)("h4",{id:"superzow"},"Superzow"),(0,i.kt)("p",null,"Phased saws:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0): for envelope shaping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for pitch bend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slide")," (1): how fast it moves through the phase"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (1): for oscillator detuning")),(0,i.kt)("h4",{id:"supertron"},"Supertron"),(0,i.kt)("p",null,"Feedback PWM:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): number of voices"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0): detune amount")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "supertron"\n  # octave 3\n  # accelerate "0.2"\n')),(0,i.kt)("h4",{id:"superreese"},"Superreese"),(0,i.kt)("p",null,"Vaguely Reese-like synth:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): number of voices"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0): detune amount")),(0,i.kt)("h4",{id:"supernoise"},"Supernoise"),(0,i.kt)("p",null,"Digital noise in several flavors with a bandpass filter:"),(0,i.kt)("h3",{id:"superstatic"},"Superstatic"),(0,i.kt)("p",null,"Impulse noise with a fadein/fadeout."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice"),": at 0 is a digital noise for which \u201cn\u201d controls rate, at 1 is Brown+White noise for which \u201cn\u201d controls knee frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate"),": causes glide in n, \u201crate\u201d will cause it to repeat"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1"),": scales the bandpass frequency (which tracks \u201cn\u201d)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slide"),": works like accelerate on the bandpass"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance"),": is the filter resonance")),(0,i.kt)("h4",{id:"supercomparator"},"Supercomparator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0.5): scales the comparator frequencies, higher values will sound \u201cbreathier\u201d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance")," (0.5): filter resonance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfo")," (1): how much the LFO affects the filter frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): LFO rate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by \u201cn\u201d")),(0,i.kt)("h3",{id:"physical-modelling"},"Physical modelling"),(0,i.kt)("h4",{id:"supermandolin"},"Supermandolin"),(0,i.kt)("p",null,"Physical modeling of a vibrating string, using a delay line (",(0,i.kt)("inlineCode",{parentName:"p"},"CombL"),") excited by an intial pulse (",(0,i.kt)("inlineCode",{parentName:"p"},"Impulse"),"). To make it a bit richer, I\u2019ve combined two slightly detuned delay lines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sustain")," (1): changes the envelope timescale"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0.2): detune amount")),(0,i.kt)("h4",{id:"superpiano"},"Superpiano"),(0,i.kt)("p",null,"Hooking into a nice synth piano already in ",(0,i.kt)("strong",{parentName:"p"},"SuperCollider"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"velocity"),": affects how hard the keys are pressed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sustain"),": controls envelope and decay time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0.1): detune amount."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"muffle")," (1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stereo")," (0.2): stereo amount.")),(0,i.kt)("h4",{id:"superfork"},"Superfork"),(0,i.kt)("p",null,"Tuning fork from Ben Gold\u2019s experimentation and from \u201cOn the acoustics of tuning forks\u201d, Rossing Russell and Brown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide amount.")),(0,i.kt)("h4",{id:"superhammond"},"Superhammond"),(0,i.kt)("p",null,"Hammond B3 sim. Frequency adjustments courtesy of ",(0,i.kt)("a",{parentName:"p",href:"https://electricdruid.net/"},"Tom Wiltshire"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"perc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"percf")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"decay"),": an attempt at the percussion, no idea if it sounds at all reasonable. Vintage Hammonds had ",(0,i.kt)("inlineCode",{parentName:"li"},"percf")," as 2 or 3 (switchable), two perc levels (maybe roughly 0.7 and 1.2?), and two decay options (roughly 0 and maybe 1ish?)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vibrato"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vrate"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"perc"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"percf"),": new parameters you\u2019ll need to define in Tidal if you want to change them.")),(0,i.kt)("p",null,"Voices are drawbar presets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"0.")," bass violin 16\u2019"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.")," tibia 8\u2019"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2.")," bassoon 8\u2019"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3.")," french trumpet 8\u2019"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"4.")," string ensemble"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"5.")," Blues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"6.")," Jazz 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"7.")," Full Shout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"8.")," Bro\u2019 Jack"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"9.")," Jazz 2")),(0,i.kt)("h4",{id:"supervibe"},"Supervibe"),(0,i.kt)("p",null,"Vibraphone simulation, adapted with some help from Kevin Larke\u2019s thesis Real Time Vibraphone Pitch and Timbre Classification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (0): use larger values to damp higher harmonics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"velocity")," (1): higher velocity will brighten the sound a bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for a linear pitch bend"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modamp")," (1): amplitude of the tremolo (0-2 is OK)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modfreq")," (7): frequency of the tremolo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0): adjusts a high harmonic to give the sound a different character")),(0,i.kt)("h3",{id:"fm-synthesis"},"FM synthesis"),(0,i.kt)("h4",{id:"superfm"},"Superfm"),(0,i.kt)("p",null,"6 operator FM synth (",(0,i.kt)("strong",{parentName:"p"},"DX7"),"-like). Works a bit different from the original ",(0,i.kt)("strong",{parentName:"p"},"DX7"),". Instead of algorithms, you set the amount of modulation every operator receives from other operators and itself (feedback), virtually providing an endless number of possible combinations (algorithms)."),(0,i.kt)("p",null,"Addition reference sources:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=REgE33Esy2Q"},"superfm super-tutorial")," by Loopier (aka Roger Pibernat) who created superfm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://club.tidalcycles.org/t/superfm/1761"},"Club Tidal superfm thread"),": discussion on various ways to load and use the parameter variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/loopier/2535109e5d64cc43f56475d902cda905"},"GitHub source of superfm variables for Tidal"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To use superfm, you need to initialize all of the parameter variables you will use. Get the full list from the GitHub source (above) and execute this in your editor or add it to your ",(0,i.kt)("inlineCode",{parentName:"p"},"BootTidal.hs"),'. If you get "Variable not in scope" error messages, then you haven\'t loaded the variable definitions properly.')),(0,i.kt)("p",null,"General parameters:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice"),": preset number: 0 is user-defined; 1-5 are randomly generated presets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfofreq"),": overall pitch modulation frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lfodepth"),": overall pitch modulation amplitude")),(0,i.kt)("p",null,"Each operator (of 6) responds to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amp"),": operator volume - makes the operator a carrier"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ratio"),": frequency ratio - multiple of the base frequency (default: 440)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"use whole numbers for harmonic, decimal values for inharmonic frequencies"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune"),": in Hz"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eglevel"),": 1-4 (env stage), envelope generator levels (env generators have 4 stages ADSR)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"egrate")," : 1-4 (env stage), envelope generator rates")),(0,i.kt)("p",null,"The syntax for operator arguments is ",(0,i.kt)("inlineCode",{parentName:"p"},"<argumentName + opIndex>[modulatorIndex | egIndex]"),". For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# amp1 1")," : op1 as carrier with full volume"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# ratio2 2.3")," : op2 frequency ratio of 2.3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# mod12 0.78")," : op1 modulation amount by op2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# mod11 0.5 # feedback 1")," : op1 feedback (self modulate), need to specify feedback level"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# detune1 0.2")," : op1 detune"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# egrate11 0.01")," : op1 EG stage 1 rate (stage 1 is the attack)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# eglevel11 1")," : op1 EG stage 1 level"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"# egrate12 5")," : op1 EG stage 2 rate (stage )")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Higher env generator (egrate) values go faster!")),(0,i.kt)("p",null,"superfm examples   "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'d1 $ s "superfm" # n 0 #octave "<4 5 6>"\n  #amp1 1 #amp3 1\n  #mod11 1 #feedback 2\n  #mod12 "0 1 2"\n  #ratio2 3\n  #eglevel22 0.1\n\n-- env generator values for 4 stages on one operator\nd1 $ n "[0 11]/8" # "superfm" #octave 4\n  # amp1 1\n  # ratio2 2.5\n  # mod12 4\n  # egrate11 0.3 # eglevel11 1 -- slow attack\n  # egrate12 1  # eglevel12 0.1 -- fast decay to 1/2 amp\n  # egrate13 0.5 # eglevel13 0.8 -- 2nd amp swell\n  # egrate14 0.4 # eglevel14 0 -- decay of mod to 0\n\nd1 $ freq "<200 300> <400 800>" #s "superfm"\n  # amp1 1 # amp3 1\n  # mod12 2 # ratio2 "<8 4> 0.5 0.9 1.4 2.5"\n  # mod34 1 # ratio3 4\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"superfm code examples (longer)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  d1 $ s "superfm/2"\n    # octave 4\n    -- # n "<0 5 11>"\n    # n (irand 40 -10)\n    # amp1 1\n    # amp2 1\n    # amp3 0.8\n    # amp4 0\n    # amp5 0.8\n    # amp6 1\n    # ratio2 2\n    # ratio3 8\n    # ratio4 5\n    # ratio5 5\n    # ratio6 6.5\n    # detune5 1\n    # feedback 0.8\n    # mod11 1\n    # mod16 2.5\n    # mod23 3.5\n    # mod34 4.8\n    # mod45 3.5\n    # mod65 2\n    # egrate11 0.01\n    # egrate21 0.01\n    # egrate31 0.5\n    # egrate61 0.1\n    # egrate62 0.5\n    # egrate63 1\n    # eglevel62 0.13\n    # eglevel63 1.5\n    # lfofreq 0.2\n    # lfodepth 0.01\n    # room 0.8 # size 0.8 # dry 0.2\n\n    --- from Club Tidal\n    d1 $ s "superfm"\n    # octave 4\n    # n 0\n    # amp1 1\n    # amp2 1\n    # amp3 0\n    # amp4 0\n    # amp5 0\n    # amp6 1\n    # ratio2 2\n    # ratio3 3\n    # ratio4 4\n    # ratio5 0.5\n    # ratio6 0.25\n    # feedback 1\n    # mod11 1\n    # mod16 1\n    # mod23 1\n    # mod34 1\n    # mod45 1\n    # mod66 1\n    # egrate61 1\n    # egrate62 10\n    # egrate63 1\n    # eglevel62 0.13\n    # eglevel63 1.5\n    # room 0.5\n'))),(0,i.kt)("h3",{id:"drum-synthesis"},"Drum synthesis"),(0,i.kt)("h4",{id:"superhex"},"Superhex"),(0,i.kt)("p",null,"Waveguide mesh, hexagonal drum-like membrane:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): ??"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide amount")),(0,i.kt)("h4",{id:"superkick"},"Superkick"),(0,i.kt)("p",null,"Kick Drum using ",(0,i.kt)("a",{parentName:"p",href:"http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1"},"Rumble-San"),"\u2019s implementation as a starting point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": controls the kick frequency in a nonstandard way"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): sweeps the click filter frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): affects the click frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (1): changes the click duration relative to the overall timescale")),(0,i.kt)("h4",{id:"super808"},"Super808"),(0,i.kt)("p",null,"A vaguely 808-ish kick drum:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": controls the chirp frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): controls the filter sweep speed\n",(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): sets the sinewave feedback")),(0,i.kt)("h4",{id:"superhat"},"Superhat"),(0,i.kt)("p",null,"Hi-hat using ",(0,i.kt)("a",{parentName:"p",href:"http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1"},"Rumble-San"),"\u2019s implementation as a starting point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": provides some variation on the frequency in a weird way"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): sweeps the filter")),(0,i.kt)("h4",{id:"supersnare"},"Supersnare"),(0,i.kt)("p",null,"Snare drum using ",(0,i.kt)("a",{parentName:"p",href:"http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1"},"Rumble-San"),"\u2019s implementation as a starting point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n")," for some variation on frequency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"decay")," (1): for scaling noise duration relative to tonal part"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for tonal glide")),(0,i.kt)("h4",{id:"superclap"},"Superclap"),(0,i.kt)("p",null,"Hand clap using ",(0,i.kt)("a",{parentName:"p",href:"http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1"},"Rumble-San"),"\u2019s implementation as a starting point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n")," (?): changes how spread is calculated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay")," (1): controls the echo delay"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): affects the decay time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (1): scales the bandpass frequency")),(0,i.kt)("h4",{id:"soskick"},"SOSKick"),(0,i.kt)("p",null,"Kick drum synth. Increase ",(0,i.kt)("inlineCode",{parentName:"p"},"pitch1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"voice")," for interesting electronic percussion:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"midinote")," \u2013 controls the root note of the kick (the source comments mention this, but the function doesn\u2019t have this parameter at all)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (0): controls modulation frequency in Hz (min: 0, max: SampleRate.ir / 2)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (1): controls modulation input phase in radians (min: 0, max: your sanity)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch2")," (0): controls WhiteNoise amplitude (min: 0, max: 1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"speed")," (0.3): controls WhiteNoise sweep (min: 0, max: 1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"freq")," (65)")),(0,i.kt)("h4",{id:"soshats"},"SOSHats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resonance")," (1): bandpass filter resonance value (min: 0, max: 1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitch1")," (238.5): oscillator modulation in radians (min: 0, max: ",(0,i.kt)("inlineCode",{parentName:"li"},"SampleRate.ir / 2"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sustain")," (0.5): sustain amount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"freq")," (220): frequency")),(0,i.kt)("h4",{id:"sostoms"},"SOSToms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0.5): controls modulation input phase in radians (min: 0, max: your sanity)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sustain")," (0.5): sustain amount"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"freq")," (261.626): frequency")),(0,i.kt)("h4",{id:"sossnare"},"SOSSnare"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"voice")," (0.385): controls modulation input phase in radians (min: 0, max: your sanity)\n",(0,i.kt)("inlineCode",{parentName:"p"},"semitone")," (0.452): modulation frequency in semitones of fundamental\n",(0,i.kt)("inlineCode",{parentName:"p"},"pitch1")," (2000): resonance filter frequency (Hz)\n",(0,i.kt)("inlineCode",{parentName:"p"},"resonance")," (0.1): resonance of bandpass and resonz filters (min: 0, max: 1)\n",(0,i.kt)("inlineCode",{parentName:"p"},"freq")," (405): frequency"),(0,i.kt)("h3",{id:"audio-input"},"Audio Input"),(0,i.kt)("h4",{id:"in"},"in"),(0,i.kt)("p",null,"Live audio input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in"),": audio input")),(0,i.kt)("h4",{id:"inr"},"inr"),(0,i.kt)("p",null,"Pitch shifted live audio input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inr"),": audio input"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide")),(0,i.kt)("h3",{id:"other-synths-and-goodies"},"Other synths and goodies"),(0,i.kt)("h4",{id:"imp"},"imp"),(0,i.kt)("p",null,"Modulated band limited impulse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide amount")),(0,i.kt)("h4",{id:"psin"},"psin"),(0,i.kt)("p",null,"Modulated phase mod sines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide amount")),(0,i.kt)("h4",{id:"gabor"},"gabor"),(0,i.kt)("p",null,"Gabor grain"),(0,i.kt)("h4",{id:"cyclo"},"cyclo"),(0,i.kt)("p",null,"Shepard on a cycle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): pitch-glide amount.")),(0,i.kt)("h4",{id:"supersiren"},"Supersiren"),(0,i.kt)("p",null,"A controllable synth siren, defaults to 1 second, draw it out with ",(0,i.kt)("inlineCode",{parentName:"p"},"sustain"),"."),(0,i.kt)("h3",{id:"supergrind"},"Supergrind"),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"synthdef.art")," fragment(2018-08-16):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accelerate")," (0): for pitch glide"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"detune")," (0): in Hz, but even small values are quite noticeable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"voice")," (0): changes harmonics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rate")," (1): is the impulse trigger rate")))}m.isMDXComponent=!0}}]);