"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49707],{218632:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-4754ee7a","path":"/devices/ZTS-EU_3gang.html","title":"Moes ZTS-EU_3gang control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZTS-EU_3gang control via MQTT","description":"Integrate your Moes ZTS-EU_3gang via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-30T20:29:35.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Indicate light (enum)","slug":"indicate-light-enum","link":"#indicate-light-enum","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694267443000},"filePathRelative":"devices/ZTS-EU_3gang.md"}')},671110:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const d=(0,i._)("h1",{id:"moes-zts-eu-3gang",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#moes-zts-eu-3gang","aria-hidden":"true"},"#"),(0,i.Uk)(" Moes ZTS-EU_3gang")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZTS-EU_3gang")],-1),l=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wall touch light switch (3 gang)")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), indicate_light, power_on_behavior, linkquality")],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTS-EU_3gang.jpg",alt:"Moes ZTS-EU_3gang"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="indicate-light-enum" tabindex="-1"><a class="header-anchor" href="#indicate-light-enum" aria-hidden="true">#</a> Indicate light (enum)</h3><p>Indicator light status. Value can be found in the published state on the <code>indicate_light</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicate_light&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>switch</code>, <code>position</code>, <code>freeze</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power on behavior (enum)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>previous</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),r={},p=(0,o(983744).Z)(r,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[n,(0,i._)("tbody",null,[a,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Moes")])),_:1})])]),s,c,h])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);