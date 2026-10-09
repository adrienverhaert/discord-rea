/* Recovered shipped factory. Module 402216.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3234143..3234894
 * Raw property SHA-256: 02e7e9649907a77f053022f64a75036b183077157410f03e5fc564810c3e9896
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => h, ed: () => _, gv: () => u, u1: () => E });
  var i,
    r = n(477900);
  n(582128);
  var a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(812993),
    d = n(660183),
    c = n(874888),
    u = (((i = {}).RED = "RED"), (i.GRAY = "GRAY"), i);
  let _ = { LARGE: c.Kp, SMALL: c.qx },
    E = {
      [o.EG.ROUND]: c.qG,
      [o.EG.ROUND_LEFT]: c.HZ,
      [o.EG.ROUND_RIGHT]: c.q5,
      [o.EG.SQUARE]: "",
    };
  function A(e) {
    let {
        className: t,
        style: n,
        shape: i = o.EG.ROUND,
        look: a = "RED",
        size: u = _.LARGE,
        count: A,
      } = e,
      h = null != A && A > 1 ? d.intl.format(d.t.hOnBrr, { count: A }) : d.intl.string(d.t.dI3q4h);
    return "RED" === a
      ? (0, r.jsx)(o.Lp, {
          text: h,
          className: s()(t, c.VD, u),
          color: l.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
          shape: E[i],
          style: n,
        })
      : (0, r.jsx)(o.Lp, {
          text: h,
          className: s()(t, c.VD, u, c.Oh),
          disableColor: !0,
          shape: E[i],
          style: n,
        });
  }
  ((A.Looks = u), (A.Sizes = _));
  let h = A;
}
