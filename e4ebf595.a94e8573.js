(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),r=(a(0),a(156)),o={title:"visualizeAudio()",id:"visualize-audio"},u={unversionedId:"visualize-audio",id:"visualize-audio",isDocsHomePage:!1,title:"visualizeAudio()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/visualize-audio.md",slug:"/visualize-audio",permalink:"/docs/visualize-audio",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/visualize-audio.md",version:"current",sidebar:"someSidebar",previous:{title:"useAudioData()",permalink:"/docs/use-audio-data"},next:{title:"getCompositions()",permalink:"/docs/get-compositions"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>options</code>",id:"options",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Part of the ",Object(r.b)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),Object(r.b)("p",null,"This function takes in ",Object(r.b)("inlineCode",{parentName:"p"},"AudioData")," (preferrably fetched by the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"useAudioData()"))," hook) and processes it in a way that makes visualizing the audio that is playing at the current frame easy."),Object(r.b)("h2",{id:"arguments"},"Arguments"),Object(r.b)("h3",{id:"options"},Object(r.b)("inlineCode",{parentName:"h3"},"options")),Object(r.b)("p",null,"The only argument for this function is an object containing the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"audioData"),": ",Object(r.b)("inlineCode",{parentName:"p"},"AudioData")," - an object containing audio data. You can fetch this object using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"useAudioData()"))," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"get-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"getAudioData()")),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"frame"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," - the time of the track that you want to get the audio information for. The ",Object(r.b)("inlineCode",{parentName:"p"},"frame")," always refers to the position in the audio track - if you have shifted or trimmed the audio in your timeline, the frame returned by ",Object(r.b)("inlineCode",{parentName:"p"},"useCurrentFrame")," must also be tweaked before you pass it into this function.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"fps"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," - the frame rate of the composition. This helps the function understand the meaning of the ",Object(r.b)("inlineCode",{parentName:"p"},"frame")," input.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"numberOfSamples"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," - must be a power of two, such as ",Object(r.b)("inlineCode",{parentName:"p"},"32"),", ",Object(r.b)("inlineCode",{parentName:"p"},"64"),", ",Object(r.b)("inlineCode",{parentName:"p"},"128"),", etc. This parameter controls the length of the output array. A lower number will simplify the spectrum and is useful if you want to animate elements roughly based on the level of lows, mids and highs. A higher number will give the spectrum in more detail, which is useful for displaying a bar chart or waveform-style visualization of the audio."))),Object(r.b)("h2",{id:"return-value"},"Return value"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"number[]")," - An array of values describing the amplitude of each frequency range. Each value is between 0 and 1. The array is of length defined by the ",Object(r.b)("inlineCode",{parentName:"p"},"numberOfSamples")," parameter."),Object(r.b)("p",null,"The values on the left of the array are low frequencies (for example bass) and as we move towards the right, we go through the mid and high frequencies like drums and vocals."),Object(r.b)("p",null,"Usually the values on left side of the array can become much larger than the values on the right. This is not a mistake, but for some visualizations you might have to apply some postprocessing to it, you can flatten the curve by for example mapping each value to a logarithm of the original function."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"In this example, we render a bar chart visualizing the audio spectrum of an audio file we imported using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"use-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"useAudioData()"))," and ",Object(r.b)("inlineCode",{parentName:"p"},"visualizeAudio()"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {Audio, useCurrentFrame, useVideoConfig} from 'remotion';\nimport {useAudioData, visualizeAudio} from '@remotion/media-utils';\nimport music from './music.mp3';\n\nexport const MyComponent: React.FC = () => {\n  const frame = useCurrentFrame();\n  const {width, height, fps} = useVideoConfig();\n  const audioData = useAudioData(music);\n\n  if (!audioData) {\n    return null;\n  }\n\n  const visualization = visualizeAudio({\n    fps,\n    frame,\n    audioData,\n    numberOfSamples: 16,\n  }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n\n  // Render a bar chart for each frequency, the higher the amplitude,\n  // the longer the bar\n  return (\n    <div>\n      <Audio src={music}/>\n      {visualization.map(v => {\n        return (\n          <div style={{width: 1000 * v, height: 15, backgroundColor: 'blue'}} />\n        );\n      })}\n    </div>\n  )\n}\n\n")),Object(r.b)("h2",{id:"see-also"},"See also"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/audio-visualization"}),"Audio visualization")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/use-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"useAudioData()"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/get-audio-data"}),Object(r.b)("inlineCode",{parentName:"a"},"getAudioData()"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/audio"}),Object(r.b)("inlineCode",{parentName:"a"},"<Audio/>"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-audio"}),"Using audio"))))}s.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return a?i.a.createElement(m,u(u({ref:t},c),{},{components:a})):i.a.createElement(m,u({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);