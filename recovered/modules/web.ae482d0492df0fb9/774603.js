/* Recovered shipped factory. Module 774603.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2266993..2267373
 * Raw property SHA-256: fab60f6650ebfaa19ed238341a05ed588ca07b04ddd26ef14e850d90353fdad0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { OX: () => s, Yo: () => a });
  var i = n(625494),
    r = n(652215);
  let a = {
      binds: ["mod+return"],
      comboKeysBindGlobal: !0,
      action() {
        if (i._.hasSubscribers(r.jej.CALL_ACCEPT)) return (i._.dispatch(r.jej.CALL_ACCEPT), !1);
      },
    },
    s = {
      binds: ["ctrl+'", "ctrl+shift+'"],
      comboKeysBindGlobal: !0,
      action(e) {
        if (i._.hasSubscribers(r.jej.CALL_START)) return (i._.dispatch(r.jej.CALL_START, e), !1);
      },
    };
}
