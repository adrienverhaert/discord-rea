/* Recovered shipped factory. Module 753838.
 * Source: recovered/web/assets/062639008d367e9a.js
 * UTF-16 property offsets: 95..1122
 * Raw property SHA-256: 91d6d7368d7d2bfbfde84b5acaa96ca993da01a690019d47117766ae62339574
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, l, e) {
  e.d(l, { A: () => x });
  var n = e(477900);
  e(582128);
  var r = e(503698),
    a = e.n(r),
    i = e(104510),
    t = e(661531),
    c = e(297264),
    h = e(866665),
    o = e(939249),
    d = e(473145),
    u = e(660183),
    j = e(795874);
  let x = function (s) {
    let l,
      e,
      r,
      {
        guildFeature: x,
        guild: m,
        className: N,
        hideTooltip: _ = !1,
        tooltipPosition: p = "left",
        onClick: k,
      } = s,
      v = m.features.has(x),
      g = (0, d.Ys)(x);
    return (v
      ? (null != g && (r = u.intl.string(u.t.hUgjyP)),
        (l = (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i._, { color: t.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: j.RQ }),
            (0, n.jsx)(c.D, {
              variant: "eyebrow",
              className: j.h_,
              children: u.intl.string(u.t["0O+87i"]),
            }),
          ],
        })))
      : (null != g && (r = u.intl.string(u.t.L2wYYj)),
        (l = (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i._, { color: "currentColor", className: j.Kk }),
            (0, n.jsx)(c.D, {
              variant: "eyebrow",
              className: j.h_,
              children: null != g && (0, d.Qu)(g),
            }),
          ],
        }))),
    (e =
      _ || null == r
        ? (0, n.jsx)("div", { className: a()(j.Jz, N), children: l })
        : (0, n.jsx)(h.m, {
            position: p,
            text: r,
            children: (0, n.jsx)("div", { className: a()(j.Jz, N), children: l }),
          })),
    null == k || v)
      ? e
      : (0, n.jsx)(o.D, { onClick: k, className: j.vk, children: e });
  };
}
