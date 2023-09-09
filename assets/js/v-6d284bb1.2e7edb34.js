"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47094],{782772:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-6d284bb1","path":"/devices/AX_Valve_Controller.html","title":"CTM Lyng AX_Valve_Controller control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"CTM Lyng AX_Valve_Controller control via MQTT","description":"Integrate your CTM Lyng AX_Valve_Controller via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Water leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Active water leak (binary)","slug":"active-water-leak-binary","link":"#active-water-leak-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694267443000},"filePathRelative":"devices/AX_Valve_Controller.md"}')},509750:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(166252);const i=(0,l._)("h1",{id:"ctm-lyng-ax-valve-controller",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ctm-lyng-ax-valve-controller","aria-hidden":"true"},"#"),(0,l.Uk)(" CTM Lyng AX_Valve_Controller")],-1),o=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),r=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"AX_Valve_Controller")],-1),n=(0,l._)("td",null,"Vendor",-1),d=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"AX Valve Controller, water shutoff valve controller")],-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"switch (state), water_leak, active_water_leak, linkquality")],-1),c=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AX_Valve_Controller.jpg",alt:"CTM Lyng AX_Valve_Controller"})])],-1),u=(0,l._)("h2",{id:"options",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,l.Uk)(" Options")],-1),h=(0,l.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id="active-water-leak-binary" tabindex="-1"><a class="header-anchor" href="#active-water-leak-binary" aria-hidden="true">#</a> Active water leak (binary)</h3><p>Indicates whether there is an active water leak. Value can be found in the published state on the <code>active_water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> active water leak is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),p={},v=(0,a(983744).Z)(p,[["render",function(e,t){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),i,(0,l._)("table",null,[o,(0,l._)("tbody",null,[r,(0,l._)("tr",null,[n,(0,l._)("td",null,[(0,l.Wm)(a,{to:"/supported-devices/#v=CTM%20Lyng"},{default:(0,l.w5)((()=>[(0,l.Uk)("CTM Lyng")])),_:1})])]),d,s,c])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,l.kq)(" Notes END: Do not edit below this line "),u,(0,l._)("p",null,[(0,l._)("em",null,[(0,l.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.w5)((()=>[(0,l.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);