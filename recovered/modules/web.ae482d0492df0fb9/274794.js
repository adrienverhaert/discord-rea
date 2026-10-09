/* Recovered shipped factory. Module 274794.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2274789..2275023
 * Raw property SHA-256: 3a8910d62077eef99bf06fa249a43227f26498d5527de2512aec1dd0ba4edfad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => s });
  var i = n(186111),
    r = n(625494),
    a = n(652215);
  let s = {
    binds: ["mod+s"],
    comboKeysBindGlobal: !0,
    action: () =>
      !(i.A.getLayers().length > 0) &&
      (r._.dispatchToLastSubscribed(a.jej.TOGGLE_STICKER_PICKER), !1),
  };
}
