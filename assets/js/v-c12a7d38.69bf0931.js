"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75610],{520769:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d=JSON.parse('{"key":"v-c12a7d38","path":"/devices/easyCodeTouch_v1.html","title":"Onesti Products AS easyCodeTouch_v1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Onesti Products AS easyCodeTouch_v1 control via MQTT","description":"Integrate your Onesti Products AS easyCodeTouch_v1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sound volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Last unlock source (enum)","slug":"last-unlock-source-enum","link":"#last-unlock-source-enum","children":[]},{"level":3,"title":"Last unlock user (text)","slug":"last-unlock-user-text","link":"#last-unlock-user-text","children":[]},{"level":3,"title":"Last lock source (enum)","slug":"last-lock-source-enum","link":"#last-lock-source-enum","children":[]},{"level":3,"title":"Last lock user (text)","slug":"last-lock-user-text","link":"#last-lock-user-text","children":[]},{"level":3,"title":"Last used pin code (text)","slug":"last-used-pin-code-text","link":"#last-used-pin-code-text","children":[]},{"level":3,"title":"Auto relock (binary)","slug":"auto-relock-binary","link":"#auto-relock-binary","children":[]},{"level":3,"title":"Pin code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694267443000},"filePathRelative":"devices/easyCodeTouch_v1.md"}')},8691:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var d=t(166252);const c=(0,d._)("h1",{id:"onesti-products-as-easycodetouch-v1",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#onesti-products-as-easycodetouch-v1","aria-hidden":"true"},"#"),(0,d.Uk)(" Onesti Products AS easyCodeTouch_v1")],-1),s=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),a=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"easyCodeTouch_v1")],-1),l=(0,d._)("td",null,"Vendor",-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Zigbee module for EasyAccess code touch series")],-1),i=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"lock (state, lock_state), battery, sound_volume, last_unlock_source, last_unlock_user, last_lock_source, last_lock_user, last_used_pin_code, auto_relock, pin_code, linkquality")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/easyCodeTouch_v1.jpg",alt:"Onesti Products AS easyCodeTouch_v1"})])],-1),r=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="last-unlock-source-enum" tabindex="-1"><a class="header-anchor" href="#last-unlock-source-enum" aria-hidden="true">#</a> Last unlock source (enum)</h3><p>Last unlock source. Value can be found in the published state on the <code>last_unlock_source</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>zigbee</code>, <code>keypad</code>, <code>fingerprintsensor</code>, <code>rfid</code>, <code>self</code>, <code>unknown</code>.</p><h3 id="last-unlock-user-text" tabindex="-1"><a class="header-anchor" href="#last-unlock-user-text" aria-hidden="true">#</a> Last unlock user (text)</h3><p>Last unlock user. Value can be found in the published state on the <code>last_unlock_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="last-lock-source-enum" tabindex="-1"><a class="header-anchor" href="#last-lock-source-enum" aria-hidden="true">#</a> Last lock source (enum)</h3><p>Last lock source. Value can be found in the published state on the <code>last_lock_source</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>zigbee</code>, <code>keypad</code>, <code>fingerprintsensor</code>, <code>rfid</code>, <code>self</code>, <code>unknown</code>.</p><h3 id="last-lock-user-text" tabindex="-1"><a class="header-anchor" href="#last-lock-user-text" aria-hidden="true">#</a> Last lock user (text)</h3><p>Last lock user. Value can be found in the published state on the <code>last_lock_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="last-used-pin-code-text" tabindex="-1"><a class="header-anchor" href="#last-used-pin-code-text" aria-hidden="true">#</a> Last used pin code (text)</h3><p>Last used pin code. Value can be found in the published state on the <code>last_used_pin_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="auto-relock-binary" tabindex="-1"><a class="header-anchor" href="#auto-relock-binary" aria-hidden="true">#</a> Auto relock (binary)</h3><p>Auto relock after 7 seconds.. Value can be found in the published state on the <code>auto_relock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock&quot;: NEW_VALUE}</code>. If value equals <code>true</code> auto relock is ON, if <code>false</code> OFF.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',24),h={},p=(0,t(983744).Z)(h,[["render",function(e,o){const t=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),c,(0,d._)("table",null,[s,(0,d._)("tbody",null,[a,(0,d._)("tr",null,[l,(0,d._)("td",null,[(0,d.Wm)(t,{to:"/supported-devices/#v=Onesti%20Products%20AS"},{default:(0,d.w5)((()=>[(0,d.Uk)("Onesti Products AS")])),_:1})])]),u,i,n])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),r])}]])}}]);