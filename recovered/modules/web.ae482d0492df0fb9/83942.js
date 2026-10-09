/* Recovered shipped factory. Module 83942.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7315759..7316166
 * Raw property SHA-256: 32c1d240bbcb8ae48af3bc3ce7fa2c030deddce264f6d6bcd1d61ce9fc6c2fa6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c: () => d, w: () => o });
  var i = n(17928),
    r = n(280450),
    a = n(763827),
    s = n(116956);
  function l(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
  }
  function o(e) {
    return (0, i.bG)([s.A, r.default], () => {
      if (null == e) return !0;
      let t = s.A.getUserIds(e);
      return null == t || l(t, r.default.getId());
    });
  }
  function d() {
    return (0, i.bG)([a.A, r.default], () => {
      let e = a.A.getUserIds();
      return null == e || l(e, r.default.getId());
    });
  }
}
