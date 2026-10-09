/* Recovered shipped factory. Module 957565.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9514026..9514432
 * Raw property SHA-256: 8e7dd75fdfa87d84a210881da7711f6dc3037324bfc5a1d5157c239ca8446c8a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => d, p5: () => o });
  var i = n(723702),
    r = n(38405),
    a = n(19575);
  let s = i.isPlatformEmbedded && null != a.Ay.copy,
    l = "function" == typeof window.navigator?.clipboard?.writeText,
    o = s || l;
  async function d(e, t, n) {
    if (!o) return void n?.(Error("Clipboard API not supported."));
    try {
      (s ? await a.Ay.copy(e) : await window.navigator.clipboard.writeText(e), t?.());
    } catch (e) {
      (n?.(e), r.A.captureException(e));
    }
  }
}
