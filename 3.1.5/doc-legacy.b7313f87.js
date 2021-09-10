System.register(["./vendor-legacy.7d1181c8.js"],(function(s){"use strict";var t,a,n;return{setters:[function(s){t=s.e,a=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},e=[n('<h1>Overlay 遮罩层</h1><h3>介绍</h3><p>创建一个遮罩层，通常用于阻止用户进行其他操作</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { OverLay } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { OverLay } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(OverLay);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-overlay</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.show&quot;</span> <span class="hljs-attr">:z-index</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-overlay</span>&gt;</span>\n</code></pre><h3>嵌套内容</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-overlay</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.show2&quot;</span> <span class="hljs-attr">:z-index</span>=<span class="hljs-string">&quot;2000&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>这里是正文<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-overlay</span>&gt;</span>\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>当前组件是否显示</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>z-index</td><td>遮罩层级</td><td>String, Number</td><td><code>2000</code></td></tr><tr><td>duration</td><td>动画时长，单位秒</td><td>String, Number</td><td><code>0.3</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩类名</td><td>String</td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>是否点击遮罩关闭</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td>event: Event</td></tr></tbody></table>',15)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(a(),t("div",l,e)))})}}}));