/* Recovered shipped factory. Module 92551.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6811660..6812123
 * Raw property SHA-256: 726cbad2d5dc5240db742e0b311b6ec25d5174b2f4fb063914e917c75b245a75
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => o, n: () => d });
  var i = n(226536),
    r = n(626584),
    a = n(660183);
  let s = new r.A("MarketingStringFormat.tsx");
  function l(e, t, n) {
    if ("" === e) return { ok: !0, content: t };
    try {
      return { ok: !0, content: n((0, i.b2)(e, a.intl.currentLocale)) };
    } catch (e) {
      return (s.warn("Failed to format marketing string", e), { ok: !1, error: String(e) });
    }
  }
  function o(e, t) {
    return l(e, "", (e) => a.intl.format(() => e, t));
  }
  function d(e, t) {
    return l(e, "", (e) => a.intl.formatToPlainString(() => e, t));
  }
}
