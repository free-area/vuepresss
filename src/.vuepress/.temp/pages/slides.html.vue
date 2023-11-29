<template><div><!-- markdownlint-disable MD024 MD051 -->
<p>@slidestart</p>
<!-- .slide: data-transition="slide" -->
<h2 id="幻灯片演示" tabindex="-1"><a class="header-anchor" href="#幻灯片演示" aria-hidden="true">#</a> 幻灯片演示</h2>
<!-- .element: class="r-fit-text" -->
<p>一个简单的幻灯片演示与各种小贴士。</p>
<!-- .element: class="r-fit-text" -->
<blockquote>
<p>作者 Mr.Hope. 请滚动鼠标滚轮进入下一页</p>
</blockquote>
<hr>
<h2 id="标注幻灯片" tabindex="-1"><a class="header-anchor" href="#标注幻灯片" aria-hidden="true">#</a> 标注幻灯片</h2>
<!-- .element: class="r-fit-text" -->
<p><a href="#/1/1">👇</a></p>
<p>--</p>
<h2 id="标注幻灯片-1" tabindex="-1"><a class="header-anchor" href="#标注幻灯片-1" aria-hidden="true">#</a> 标注幻灯片</h2>
<!-- .element: class="r-fit-text" -->
<p>使用 <code v-pre>---</code> 标注水平幻灯片</p>
<!-- .element: class="fragment fade-in" -->
<p>在水平幻灯片中使用 <code v-pre>--</code> 分割垂直幻灯片</p>
<!-- .element: class="fragment fade-in" -->
<p>使用 <code v-pre>&lt;!-- .slide: ... --&gt;</code> 在幻灯片上添加属性</p>
<!-- .element: class="fragment fade-in" -->
<p>使用 <code v-pre>&lt;!-- .element: ... --&gt;</code> 在前一个 HTML 元素上添加属性</p>
<!-- .element: class="fragment fade-in" -->
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2>
<!-- .element: class="r-fit-text" -->
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-1" tabindex="-1"><a class="header-anchor" href="#markdown-1" aria-hidden="true">#</a> Markdown</h2>
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<h3 id="这是一个-h3" tabindex="-1"><a class="header-anchor" href="#这是一个-h3" aria-hidden="true">#</a> 这是一个 H3</h3>
<p>标题默认会自动转换为大写。</p>
<p>这是一个有着 <strong>粗体</strong>, <em>斜体</em>, <s>删除线</s> 文字并包含 <a href="https://mister-hope.com" target="_blank" rel="noopener noreferrer">一个链接<ExternalLinkIcon/></a> 的段落，并且它会自动换行。所以你无需担心它的长度。</p>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-2" tabindex="-1"><a class="header-anchor" href="#markdown-2" aria-hidden="true">#</a> Markdown</h2>
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<p>列表默认为 <code v-pre>inline-block</code></p>
<ul>
<li>项目</li>
<li>项目</li>
<li>项目</li>
</ul>
<ol>
<li>项目 1</li>
<li>项目 2</li>
<li>项目 3</li>
</ol>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-3" tabindex="-1"><a class="header-anchor" href="#markdown-3" aria-hidden="true">#</a> Markdown</h2>
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<p>在你启用 <code v-pre>highlight</code> 插件后，代码块会自动高亮。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-4" tabindex="-1"><a class="header-anchor" href="#markdown-4" aria-hidden="true">#</a> Markdown</h2>
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<p>在你启用 <code v-pre>math</code> 插件后，你也可以使用 TEX 格式使用数学公式。</p>
<mjx-container v-pre class="MathJax" jax="SVG" display="true" style="position: relative;"><svg style="vertical-align: -2.819ex;" xmlns="http://www.w3.org/2000/svg" width="14.58ex" height="4.968ex" role="img" focusable="false" viewBox="0 -950 6444.3 2195.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D43D" d="M447 625Q447 637 354 637H329Q323 642 323 645T325 664Q329 677 335 683H352Q393 681 498 681Q541 681 568 681T605 682T619 682Q633 682 633 672Q633 670 630 658Q626 642 623 640T604 637Q552 637 545 623Q541 610 483 376Q420 128 419 127Q397 64 333 21T195 -22Q137 -22 97 8T57 88Q57 130 80 152T132 174Q177 174 182 130Q182 98 164 80T123 56Q115 54 115 53T122 44Q148 15 197 15Q235 15 271 47T324 130Q328 142 387 380T447 625Z"></path></g><g data-mml-node="mo" transform="translate(633,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="msub" transform="translate(1022,0)"><g data-mml-node="mi"><path data-c="1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></g><g data-mml-node="mn" transform="translate(502,-150) scale(0.707)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></g></g><g data-mml-node="mo" transform="translate(1927.6,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path></g><g data-mml-node="msub" transform="translate(2372.2,0)"><g data-mml-node="mi"><path data-c="1D703" d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"></path></g><g data-mml-node="mn" transform="translate(502,-150) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></g><g data-mml-node="mo" transform="translate(3277.8,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g><g data-mml-node="mo" transform="translate(3944.6,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="munder" transform="translate(5000.3,0)"><g data-mml-node="mo"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z"></path></g><g data-mml-node="TeXAtom" transform="translate(148.2,-1087.9) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(345,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(1123,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>J</mi><mo stretchy="false">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>,</mo><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><munder><mo data-mjx-texclass="OP">∑</mo><mrow data-mjx-texclass="ORD"><mi>i</mi><mo>=</mo><mn>0</mn></mrow></munder></math></mjx-assistive-mml></mjx-container><p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="markdown-5" tabindex="-1"><a class="header-anchor" href="#markdown-5" aria-hidden="true">#</a> Markdown</h2>
<p>你可以在幻灯片中使用 Markdown 语法的各种标记.</p>
<p>⚠<strong>请注意</strong>: 表格和分割线，以及所有不在 Markdown 标准语法中的内容均不受支持。</p>
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate  -->
<h2 id="布局-1" tabindex="-1"><a class="header-anchor" href="#布局-1" aria-hidden="true">#</a> 布局</h2>
<!-- .element: class="r-fit-text" -->
<p>👆 <code v-pre>r-fit-text</code> class 会让文字在不超出幻灯片范围的情况下尽可能大。</p>
<p>--</p>
<!-- .slide: data-auto-animate  -->
<h2 id="布局-2" tabindex="-1"><a class="header-anchor" href="#布局-2" aria-hidden="true">#</a> 布局</h2>
<figure><img src="/logo.svg" alt="Logo" tabindex="0" loading="lazy"><figcaption>Logo</figcaption></figure>
<!-- .element: class="r-stretch" -->
<p>👆 <code v-pre>r-stretch</code> class 帮助你控制注入图片或视频的大小，使它们填充满幻灯片垂直方向上的剩余空间。</p>
<p>--</p>
<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->
<h2 id="布局-3" tabindex="-1"><a class="header-anchor" href="#布局-3" aria-hidden="true">#</a> 布局</h2>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<p>你可以通过向特定幻灯片添加 <code v-pre>data-background</code> 属性自定义幻灯片背景.</p>
<hr>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段" tabindex="-1"><a class="header-anchor" href="#动画片段" aria-hidden="true">#</a> 动画片段</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段-1" tabindex="-1"><a class="header-anchor" href="#动画片段-1" aria-hidden="true">#</a> 动画片段</h2>
<!-- .element: class="r-fit-text" -->
<p>动画片段用于高亮或显隐幻灯片中的元素。</p>
<p>你需要在元素上添加 <code v-pre>fragment</code> 和动画 class。</p>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段-2" tabindex="-1"><a class="header-anchor" href="#动画片段-2" aria-hidden="true">#</a> 动画片段</h2>
<h3 id="动画-class" tabindex="-1"><a class="header-anchor" href="#动画-class" aria-hidden="true">#</a> 动画 class</h3>
<ul>
<li><code v-pre>fade-in</code></li>
</ul>
<!-- .element: class="fragment fade-in" -->
<ul>
<li><code v-pre>fade-out</code></li>
</ul>
<!-- .element: class="fragment fade-out" -->
<ul>
<li><code v-pre>fade-up</code></li>
</ul>
<!-- .element: class="fragment fade-up" -->
<!-- list break -->
<ul>
<li><code v-pre>fade-down</code></li>
</ul>
<!-- .element: class="fragment fade-down" -->
<ul>
<li><code v-pre>fade-left</code></li>
</ul>
<!-- .element: class="fragment fade-left" -->
<ul>
<li><code v-pre>fade-right</code></li>
</ul>
<!-- .element: class="fragment fade-right" -->
<!-- list break -->
<ul>
<li><code v-pre>fade-in-then-out</code></li>
</ul>
<!-- .element: class="fragment fade-in-then-out" -->
<ul>
<li><code v-pre>fade-in-then-semi-out</code></li>
</ul>
<!-- .element: class="fragment fade-in-then-semi-out" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段-3" tabindex="-1"><a class="header-anchor" href="#动画片段-3" aria-hidden="true">#</a> 动画片段</h2>
<h3 id="动画-class-1" tabindex="-1"><a class="header-anchor" href="#动画-class-1" aria-hidden="true">#</a> 动画 class</h3>
<ul>
<li><code v-pre>grow</code></li>
</ul>
<!-- .element: class="fragment grow" -->
<ul>
<li><code v-pre>shrink</code></li>
</ul>
<!-- .element: class="fragment shrink" -->
<ul>
<li><code v-pre>strike</code></li>
</ul>
<!-- .element: class="fragment strike" -->
<!-- list break -->
<ul>
<li><code v-pre>highlight-red</code></li>
</ul>
<!-- .element: class="fragment highlight-red" -->
<ul>
<li><code v-pre>highlight-green</code></li>
</ul>
<!-- .element: class="fragment highlight-green" -->
<ul>
<li><code v-pre>highlight-blue</code></li>
</ul>
<!-- .element: class="fragment highlight-blue" -->
<!-- list break -->
<ul>
<li><code v-pre>highlight-current-red</code></li>
</ul>
<!-- .element: class="fragment highlight-current-red" -->
<ul>
<li><code v-pre>highlight-current-green</code></li>
</ul>
<!-- .element: class="fragment highlight-current-green" -->
<ul>
<li><code v-pre>highlight-current-blue</code></li>
</ul>
<!-- .element: class="fragment highlight-current-blue" -->
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段-4" tabindex="-1"><a class="header-anchor" href="#动画片段-4" aria-hidden="true">#</a> 动画片段</h2>
<h3 id="多个动画片段" tabindex="-1"><a class="header-anchor" href="#多个动画片段" aria-hidden="true">#</a> 多个动画片段</h3>
<p>你可以按照顺序包裹一个 HTML 元素使其拥有多个动画片段</p>
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      渐入 > 变红 > 渐出
    </span>
  </span>
</span>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="动画片段-5" tabindex="-1"><a class="header-anchor" href="#动画片段-5" aria-hidden="true">#</a> 动画片段</h2>
<h3 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序" aria-hidden="true">#</a> 顺序</h3>
<p>你可以使用 <code v-pre>data-fragment-index</code> 属性改变元素的动画顺序。</p>
<p>不同元素可以有相同的动画顺序。</p>
<ul>
<li>最后显示</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="3"-->
<ul>
<li>第二个显示</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="2"-->
<!-- list break -->
<ul>
<li>第一个显示</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="1"-->
<ul>
<li>第二个显示</li>
</ul>
<!-- .element: class="fragment" data-fragment-index="2"-->
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="渐变-1" tabindex="-1"><a class="header-anchor" href="#渐变-1" aria-hidden="true">#</a> 渐变</h2>
<!-- .element: class="r-fit-text" -->
<p>Transition 可以通过配置中的 <code v-pre>transition</code> 选项全局设置，也可以通过在特定幻灯片添加 <code v-pre>data-transition</code> 属性局部设置.</p>
<p>可能的值:</p>
<ul>
<li>none</li>
<li>fade</li>
<li>slide</li>
</ul>
<!-- list break -->
<ul>
<li>convex</li>
<li>concave</li>
<li>zoom</li>
</ul>
<p>--</p>
<!-- .slide: data-auto-animate -->
<h2 id="渐变-2" tabindex="-1"><a class="header-anchor" href="#渐变-2" aria-hidden="true">#</a> 渐变</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="过渡动画" tabindex="-1"><a class="header-anchor" href="#过渡动画" aria-hidden="true">#</a> 过渡动画</h3>
<p>你可以在相邻的幻灯片上添加 <code v-pre>data-auto-animate</code> 使相同的 HTML 元素产生过渡动画效果。</p>
<hr>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<!-- .element: class="r-fit-text" -->
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="功能-1" tabindex="-1"><a class="header-anchor" href="#功能-1" aria-hidden="true">#</a> 功能</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p>通过启用 <code v-pre>highlight</code> 插件，你可以对代码块进行高亮。</p>
<p>你可以使用 <code v-pre>[a-b|c-d]</code> 语法来分布高亮特定行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> x<span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="功能-2" tabindex="-1"><a class="header-anchor" href="#功能-2" aria-hidden="true">#</a> 功能</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="预览模式" tabindex="-1"><a class="header-anchor" href="#预览模式" aria-hidden="true">#</a> 预览模式</h3>
<p>按下 <code v-pre>Esc</code> 或 <code v-pre>O</code> 即可在幻灯片获得焦点时进入预览模式。</p>
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="功能-3" tabindex="-1"><a class="header-anchor" href="#功能-3" aria-hidden="true">#</a> 功能</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="全屏模式" tabindex="-1"><a class="header-anchor" href="#全屏模式" aria-hidden="true">#</a> 全屏模式</h3>
<p>按下 <code v-pre>F</code> 或 <code v-pre>F11</code> 即可在幻灯片获得焦点时进入全屏模式。</p>
<p>--</p>
<!-- .slide: data-transition="slide" data-auto-animate -->
<h2 id="功能-4" tabindex="-1"><a class="header-anchor" href="#功能-4" aria-hidden="true">#</a> 功能</h2>
<!-- .element: class="r-fit-text" -->
<h3 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h3>
<p>按下 <code v-pre>alt</code> (Linux 上使用 <code v-pre>ctrl</code>) 的同时点击幻灯片的任何元素，即可以向此元素进行放大。</p>
<p>再次点击即可缩小。</p>
<hr>
<!-- .element: class="r-fit-text" -->
<h2 id="结束" tabindex="-1"><a class="header-anchor" href="#结束" aria-hidden="true">#</a> 结束</h2>
<p>@slideend</p>
</div></template>


