webpackJsonp([49],{"0K88":function(s,a){s.exports='<h1 id="collapse">Collapse</h1>\n<blockquote>\n<p>The Bootstrap-Vue <code>&lt;b-collapse&gt;</code> component and <code>v-b-toggle</code> directive allows you to\n  toggle content visibility on your pages. Includes support for making accordions.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.collapse1</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapse1&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text&quot;</span>&gt;</span>Collapse contents Here<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.collapse1_inner</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Toggle Inner Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">collapse1_inner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- collapse-1.vue --&gt;</span>\n</pre>\n<h2 id="usage">Usage</h2>\n<p>Other elements can easily toggle <code>&lt;b-collapse&gt;</code> components using the <code>v-b-toggle</code> directive.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Using modifiers --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.collapse2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Using value --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle</span>=<span class="hljs-string">&quot;&apos;collapse2&apos;&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- element to collapse --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapse2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      I am collapsable content!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- collapse-2.vue --&gt;</span>\n</pre>\n<h2 id="initial-visibility-start-expanded-">Initial visibility (start expanded)</h2>\n<p>To make the <code>&lt;b-collapse&gt;</code> show initially, set the <code>visible</code> prop:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.collapse3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;m-1&quot;</span>&gt;</span>Toggle Collapse<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">visible</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapse3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      I should start open!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- collapse-3.vue --&gt;</span>\n</pre>\n<h2 id="v-model-support"><code>v-model</code> support</h2>\n<p>The component&apos;s collapsed (visible) state can also be set with <code>v-model</code> which\nbinds internally to the <code>visible</code> prop.</p>\n<p>Note, when using v-model to control <code>&lt;b-collapse&gt;</code>, the <code>aria-*</code> attributes and\nclass <code>collapsed</code> are not automaticaly placed on the trigger button (as is the case\nwhen using the <code>v-b-toggle</code> directive). In this example we must control them ourselves.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCollapse = !showCollapse&quot;</span>\n           <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;showCollapse ? &apos;collapsed&apos; : null&quot;</span>\n           <span class="hljs-attr">aria-controls</span>=<span class="hljs-string">&quot;collapse4&quot;</span>\n           <span class="hljs-attr">:aria-expanded</span>=<span class="hljs-string">&quot;showCollapse ? &apos;true&apos; : &apos;false&apos;&quot;</span>&gt;</span>\n      Toggle Collapse\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;showCollapse&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapse4&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n        I should start open!\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">showCollapse</span>: <span class="hljs-literal">true</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">--</span> <span class="hljs-attr">collapse-4.vue</span> <span class="hljs-attr">--</span>&gt;</span>\n</pre>\n<h2 id="trigger-multiple-collapse-elements">Trigger multiple collapse elements</h2>\n<p>You can even collapse multiple <code>&lt;b-collapse&gt;</code> components via a single <code>v-b-toggle</code> by\nproviding multiple target IDs using modifers:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Single button triggers two b-collapse components --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.collapseA.collapseB</span>&gt;</span>Toggle Both Collapse A and B<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- elements to collapse --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapseA&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      I am collapsable content A!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;collapseB&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span>&gt;</span>\n      I am collapsable content B!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- collapse-mult-1.vue --&gt;</span>\n</pre>\n<h2 id="accordion-support">Accordion Support</h2>\n<p>Turn a group of <code>&lt;b-collapse&gt;</code> components into an accordion by supplying\nan accordion group identifier via the <code>accordion</code> prop:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tablist&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-1&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tab&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">v-b-toggle.accordion1</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Accordion 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;accordion1&quot;</span> <span class="hljs-attr">visible</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">&quot;my-accordion&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tabpanel&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text&quot;</span>&gt;</span>\n            I start opened because <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>visible<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> is <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>true<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text&quot;</span>&gt;</span>\n            {{ text }}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-1&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tab&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">v-b-toggle.accordion2</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Accordion 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;accordion2&quot;</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">&quot;my-accordion&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tabpanel&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text&quot;</span>&gt;</span>\n            {{ text }}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">no-body</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-card-header</span> <span class="hljs-attr">header-tag</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;p-1&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tab&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">block</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span> <span class="hljs-attr">v-b-toggle.accordion3</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Accordion 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-header</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;accordion3&quot;</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">&quot;my-accordion&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;tabpanel&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-card-body</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;card-text&quot;</span>&gt;</span>\n            {{ text }}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-card-body</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">text</span>: <span class="hljs-string">`\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n        synth nesciunt you probably haven&apos;t heard of them accusamus labore VHS.\n      `</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- accordion-1.vue --&gt;</span>\n</pre>\n<p><strong>Notes:</strong></p>\n<ul>\n<li>When using accordion mode, make sure you place the trigger elements and <code>&lt;b-collapse&gt;</code>\ncomponents inside an element with <code>role=&quot;tablist&quot;</code> and set <code>role=&quot;tab&quot;</code> on each trigger\nelement&apos;s container (each trigger element should be wrapped) in order to help screen\nreader users navigate the accordion group.</li>\n<li>If using the <code>v-model</code> feature of <code>&lt;b-collaspe&gt;</code> in accordion mode, do not bind the\n<code>v-model</code> or <code>visible</code> prop of all the collapses in the accordion group to the same variable!</li>\n<li>Ensure, at most, only one <code>&lt;b-collapse&gt;</code> in the accordion group has the <code>visible</code>\nprop and/or <code>v-model</code> set to <code>true</code>.</li>\n</ul>\n<h2 id="hiding-and-showing-content-in-the-toggle-button-based-on-collapse-state">Hiding and showing content in the toggle button based on collapse state</h2>\n<p>When using the <code>v-b-toggle</code> directive, the class <code>collapsed</code> will automatically be placed\non the trigger element when the collapse is closed, and removed when open. You can\nuse this class to display or hide content within the togger via custom CSS:</p>\n<p><strong>Example HTML markup:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-toggle.myCollapse</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;when-opened&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;when-closed&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  My Collapse\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-collapse</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;myCollapse&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- content here --&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-collapse</span>&gt;</span>\n</pre>\n<p><strong>Example Custom CSS:</strong></p>\n<pre class="hljs"><span class="hljs-selector-class">.collapsed</span> &gt; <span class="hljs-selector-class">.when-opened</span>,\n<span class="hljs-selector-pseudo">:not(.collapsed)</span> &gt; <span class="hljs-selector-class">.when-closed</span> {\n  <span class="hljs-attribute">display</span>: none;\n}\n</pre>\n<h2 id="accessibility">Accessibility</h2>\n<p>The <code>v-b-toggle</code> directive will automatically add the ARIA attributes <code>aria-controls</code> and <code>aria-expanded</code>\nto the component that the directive appears on (as well as add the class <code>collapsed</code> when not expanded).\n<code>aria-expanded</code> will reflect the state of the tartget <code>&lt;b-collapse&gt;</code> component, while <code>aria-controls</code>\nwill be set to the ID(s) of the target <code>&lt;b-collapse&gt;</code> component(s).</p>\n<p>If using <code>v-model</code> to set the visible state instead of the directive <code>v-b-toggle</code>, you will be\nrequired to, on the toggle element, add the <code>aria-controls</code> and other appropriate attributes and\nclasses yourself.</p>\n<p>While the <code>v-b-toggle</code> directive can be placed on almost any HTML element or Vue component, it is\nreccomended to use a button or link (or similar component) to act as your toggler. Otherwise your\ntrigger elements may be inaccessible to keyboard or screen reader users. If you do place them on\nsomething other than a button or link (or similar component), you should add the attributes\n<code>tabindex=&quot;0&quot;</code> and <code>role=&quot;button&quot;</code> to allow users of assistive technology to reach your\ntrigger element.</p>\n<p>When using accordion mode, make sure you place the trigger elements and <code>&lt;b-collapse&gt;</code>\ncomponents inside an element with <code>role=&quot;tablist&quot;</code> and set <code>role=&quot;tab&quot;</code> on each trigger\nelement&apos;s container in order to help screen reader users navigate the accordion group.\nUnfortunately, Boostrap-Vue cannont apply those roles for you automaticaly, as it depends on\nyour final document markup.</p>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components8.52e24147b69dec88fd82.js.map