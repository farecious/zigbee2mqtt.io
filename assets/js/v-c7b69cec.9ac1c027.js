"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45522],{656175:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-c7b69cec","path":"/devices/BHT-006GBZB.html","title":"Moes BHT-006GBZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes BHT-006GBZB control via MQTT","description":"Integrate your Moes BHT-006GBZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:46:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Min temperature limit (numeric)","slug":"min-temperature-limit-numeric","link":"#min-temperature-limit-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Program (composite)","slug":"program-composite","link":"#program-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694267443000},"filePathRelative":"devices/BHT-006GBZB.md"}')},12723:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const a=(0,o._)("h1",{id:"moes-bht-006gbzb",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#moes-bht-006gbzb","aria-hidden":"true"},"#"),(0,o.Uk)(" Moes BHT-006GBZB")],-1),u=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"BHT-006GBZB")],-1),r=(0,o._)("td",null,"Vendor",-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smart heating thermostat")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"lock (state), deadzone_temperature, max_temperature_limit, min_temperature_limit, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, program, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BHT-006GBZB.jpg",alt:"Moes BHT-006GBZB"})])],-1),n=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric" aria-hidden="true">#</a> Deadzone temperature (numeric)</h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric" aria-hidden="true">#</a> Max temperature limit (numeric)</h3><p>Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode.. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-limit-numeric" aria-hidden="true">#</a> Min temperature limit (numeric)</h3><p>Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the tempreature drops below this.. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>hold</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>, <code>cool</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-30</code> and the maximum value is <code>30</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>IN</code>, <code>AL</code>, <code>OU</code>.</p><h3 id="program-composite" tabindex="-1"><a class="header-anchor" href="#program-composite" aria-hidden="true">#</a> Program (composite)</h3><p>Time of day and setpoint to use when in program mode. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;program&quot;: {&quot;weekdays_p1_hour&quot;: VALUE, &quot;weekdays_p1_minute&quot;: VALUE, &quot;weekdays_p1_temperature&quot;: VALUE, &quot;weekdays_p2_hour&quot;: VALUE, &quot;weekdays_p2_minute&quot;: VALUE, &quot;weekdays_p2_temperature&quot;: VALUE, &quot;weekdays_p3_hour&quot;: VALUE, &quot;weekdays_p3_minute&quot;: VALUE, &quot;weekdays_p3_temperature&quot;: VALUE, &quot;weekdays_p4_hour&quot;: VALUE, &quot;weekdays_p4_minute&quot;: VALUE, &quot;weekdays_p4_temperature&quot;: VALUE, &quot;saturday_p1_hour&quot;: VALUE, &quot;saturday_p1_minute&quot;: VALUE, &quot;saturday_p1_temperature&quot;: VALUE, &quot;saturday_p2_hour&quot;: VALUE, &quot;saturday_p2_minute&quot;: VALUE, &quot;saturday_p2_temperature&quot;: VALUE, &quot;saturday_p3_hour&quot;: VALUE, &quot;saturday_p3_minute&quot;: VALUE, &quot;saturday_p3_temperature&quot;: VALUE, &quot;saturday_p4_hour&quot;: VALUE, &quot;saturday_p4_minute&quot;: VALUE, &quot;saturday_p4_temperature&quot;: VALUE, &quot;sunday_p1_hour&quot;: VALUE, &quot;sunday_p1_minute&quot;: VALUE, &quot;sunday_p1_temperature&quot;: VALUE, &quot;sunday_p2_hour&quot;: VALUE, &quot;sunday_p2_minute&quot;: VALUE, &quot;sunday_p2_temperature&quot;: VALUE, &quot;sunday_p3_hour&quot;: VALUE, &quot;sunday_p3_minute&quot;: VALUE, &quot;sunday_p3_temperature&quot;: VALUE, &quot;sunday_p4_hour&quot;: VALUE, &quot;sunday_p4_minute&quot;: VALUE, &quot;sunday_p4_temperature&quot;: VALUE}}</code></p><ul><li><code>weekdays_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),m={},p=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[u,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Moes"},{default:(0,o.w5)((()=>[(0,o.Uk)("Moes")])),_:1})])]),s,l,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),n])}]])}}]);