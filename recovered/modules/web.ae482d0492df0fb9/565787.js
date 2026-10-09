/* Recovered shipped factory. Module 565787.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 828842..829330
 * Raw property SHA-256: 041da9a5e3463294afa6fc07b5a90ba6fde683f46ce422209265586f989b897d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => a });
  var i = n(477900);
  n(582128);
  var r = n(260612);
  function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
      let { color: a, ...s } = n,
        l = "currentColor";
      null != a && (l = "string" != typeof a && "css" in a ? a.css : a);
      let o = s.size ?? "md",
        d = (0, r.J)(o),
        c = {
          color: l,
          width: d?.width ?? s.width ?? 24,
          height: d?.height ?? s.height ?? 24,
          foreground: s.colorClass,
        };
      for (let [e, n] of Object.entries(t)) null != s[e] && (c[n] = s[e]);
      return (0, i.jsx)(e, { ...s, ...c });
    };
  }
}
