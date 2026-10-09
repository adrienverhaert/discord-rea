/* Recovered shipped factory. Module 966327.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 776468..776845
 * Raw property SHA-256: e1cafdb5060544933dc97e7bcd029504bdaa6b2e593939d54af8593d3f9c8658
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(778712),
    s = n(97808),
    l = n(386467);
  let o = r.memo(function (e) {
    var t, n;
    let {
        user: o,
        guildId: d,
        size: c = a._3.SIZE_32,
        animate: u = !1,
        "aria-hidden": _ = !1,
        ...E
      } = e,
      A = r.useContext(l.A);
    return (0, i.jsx)(s.eu, {
      src: ((t = (0, a.FT)(c)), (n = d ?? A), o.getAvatarURL(n, t, u)),
      size: c,
      "aria-label": _ ? void 0 : o.username,
      "aria-hidden": _,
      ...E,
    });
  });
}
