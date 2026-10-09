/* Recovered shipped factory. Module 954376.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5016864..5017371
 * Raw property SHA-256: 906b206886056c886760ebd3eb3c1bef22db65e15ad47992f463d2b05ccefde3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(778712),
    s = n(478063),
    l = n(287809);
  let o = function (e) {
    let { recipients: t, size: n, status: o, isTyping: d, className: c, ...u } = e,
      _ = a.vC[n],
      E = (0, r.yK)(
        [l.default],
        () =>
          t.slice(0, 2).map((e) => {
            let t = l.default.getUser(e);
            if (null != t) return t.getAvatarURL(void 0, _.size, !1);
          }),
        [t, _.size],
      );
    return (0, i.jsx)(s.A, {
      "aria-label": u["aria-label"],
      "aria-hidden": u["aria-hidden"],
      backSrc: E[0],
      frontSrc: E[1],
      size: n,
      status: o,
      isTyping: d ?? !1,
      className: c,
    });
  };
}
