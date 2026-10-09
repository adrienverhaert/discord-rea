/* Recovered shipped factory. Module 967740.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3973409..3973723
 * Raw property SHA-256: d73009414deaedf48f9486a64ef795ac37c96fdda505a94945ef8097f233ba25
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(69282),
    a = n(657048),
    s = n(63104);
  function l(e) {
    let { guildId: t, role: n, size: l, className: o } = e,
      d = (0, r.Xx)({ guildId: t, roleId: n.id, size: l });
    return null != d
      ? (0, i.jsx)(a.A, { className: o, ...d })
      : (0, i.jsx)(s.A, { color: n.colorString, className: o, size: l });
  }
}
