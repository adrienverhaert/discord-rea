/* Recovered shipped factory. Module 10862.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8110338..8110865
 * Raw property SHA-256: 495c0b4ec4d5e20e5000c4da75de71f3521aec709e87618b25247699582fbd43
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(978940),
    s = n(808107),
    l = n(451394),
    o = n(512474),
    d = n(146151),
    c = n(983851),
    u = n(148719),
    _ = n(576705),
    E = n(818348);
  function A(e) {
    let { channel: t, ...n } = e,
      A = (0, r.bG)([_.A], () => t.isPrivate() || _.A.can(E.xB.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, i.jsx)(a._, { ...n });
    let h = t.isGuildStageVoice(),
      f = !A || (0, u.A)(t);
    return h && f
      ? (0, i.jsx)(s.D, { ...n })
      : h
        ? (0, i.jsx)(l.q, { ...n })
        : t.isNSFW()
          ? (0, i.jsx)(o.O, { ...n })
          : f
            ? (0, i.jsx)(d.t, { ...n })
            : (0, i.jsx)(c.H, { ...n });
  }
}
