/* Recovered shipped factory. Module 598104.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5016327..5016863
 * Raw property SHA-256: ce08b1b0fa153d652fb7c584b0e90b07db659eeefffdc5e918717925908e9998
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(97808),
    s = n(571694),
    l = n(954376);
  let o = r.memo(function (e) {
    let {
      channel: t,
      size: n,
      facepileSizeOverride: r,
      isTyping: o,
      status: d,
      className: c,
      animated: u = !1,
      ..._
    } = e;
    return t.recipients.length >= 2 && null == t.icon
      ? (0, i.jsx)(l.A, {
          "aria-label": _["aria-label"],
          "aria-hidden": _["aria-hidden"],
          className: c,
          recipients: t.recipients,
          size: r ?? n,
          isTyping: o,
          status: d,
        })
      : (0, i.jsx)(a.eu, {
          "aria-hidden": _["aria-hidden"],
          "aria-label": _["aria-label"],
          className: c,
          size: n,
          src: (0, s.Y)(t, 80, u),
        });
  });
}
