/* Recovered shipped factory. Module 552049.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2273929..2274241
 * Raw property SHA-256: ba11269317c87e860b513ce6785546306c90f495e7822bd14bc6d839d4625e24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U5: () => a, fz: () => s });
  var i = n(625494),
    r = n(652215);
  let a = {
      binds: ["pageup"],
      comboKeysBindGlobal: !0,
      action: () => (i._.dispatchToLastSubscribed(r.jej.SCROLL_PAGE_UP), !1),
    },
    s = {
      binds: ["pagedown"],
      comboKeysBindGlobal: !0,
      action: () => (i._.dispatchToLastSubscribed(r.jej.SCROLL_PAGE_DOWN), !1),
    };
}
