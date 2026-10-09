/* Recovered shipped factory. Module 94264.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6770209..6771213
 * Raw property SHA-256: 8283108940335bc85e8b49126acdfda7b78200a964815437e3ef2f760a029479
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(892227),
    l = n(661531),
    o = n(403581),
    d = n(318254),
    c = n(914410),
    u = n(636592),
    _ = n(366505),
    E = n(903080);
  let A = {
      churning: {
        start: l.A.unsafe_rawColors.OPACITY_RED_80.css,
        end: l.A.unsafe_rawColors.RED_NEW_30.css,
      },
      active: {
        start: l.A.unsafe_rawColors.OPACITY_GREEN_80.css,
        end: l.A.unsafe_rawColors.GREEN_NEW_30.css,
      },
    },
    h = function (e) {
      let { className: t } = e,
        { passesProgressBarInvariant: n, programReward: r, totalDays: l } = (0, _.F)();
      if (!n || null == r || null == l) return null;
      let h = (0, s.default)(new Date(r.next_reward_date), new Date()),
        f = r.program_current_state === u.L.PREMIUM_CHURNING,
        I = f ? A.churning.start : A.active.start,
        p = f ? A.churning.end : A.active.end;
      return (0, i.jsxs)("div", {
        className: a()(E.k, t),
        children: [
          (0, i.jsx)(c.Ay, {
            variant: c.qP.UNSET,
            progress: l - h,
            maximum: l,
            override: { default: { gradientStart: I, gradientEnd: p } },
          }),
          f
            ? (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: E.K })
            : (0, i.jsx)(d.C, { size: "sm", color: "currentColor", className: E.K }),
        ],
      });
    };
}
