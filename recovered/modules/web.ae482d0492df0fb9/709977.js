/* Recovered shipped factory. Module 709977.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5147645..5148210
 * Raw property SHA-256: 2b148e437416b4e8145c7f2e1935bdf03fde84192505bfce005ae6ace4cb39ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ge: () => l, OP: () => o, Qd: () => d });
  var i = n(403362),
    r = n(513461),
    a = n(260197),
    s = n(652215);
  function l(e) {
    let { required: t, response: n, field_type: a } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (a) {
      case r.rX.TERMS:
      case r.rX.VERIFICATION:
        return !!n;
      case r.rX.TEXT_INPUT:
      case r.rX.PARAGRAPH:
        return "string" == typeof n && "" !== n.trim();
      case r.rX.MULTIPLE_CHOICE:
        return "number" == typeof n;
      default:
        return (0, i.xb)(a);
    }
  }
  function o(e) {
    return a.AI.has(e?.field_type);
  }
  function d(e) {
    return null != e && e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
}
