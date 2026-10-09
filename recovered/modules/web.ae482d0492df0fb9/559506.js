/* Recovered shipped factory. Module 559506.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8055417..8055791
 * Raw property SHA-256: 67d47f4515e31a7a520b13d9eb5b6ddfa9ff6dba658b3719250492315bf98c35
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(683071),
    s = n(321191),
    l = n(83931),
    o = n(660183);
  function d(e) {
    let { userId: t, className: n } = e,
      d = (0, l.W)(t),
      c = (0, r.bG)([s.A], () => s.A.getUserProfile(t)?.fetchError);
    return d || null == c
      ? null
      : (0, i.jsx)("div", {
          className: n,
          children: (0, i.jsx)(a.w, { type: "warning", children: o.intl.string(o.t.L9wE7H) }),
        });
  }
}
