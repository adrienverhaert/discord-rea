/* Recovered shipped factory. Module 693879.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4006361..4007711
 * Raw property SHA-256: b7efc858ed806f7920c2bd028782ce6a61214a25680049e2e60ff2141f4ecf53
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f, z: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(773669),
    u = n(574520),
    _ = n(583846),
    E = n(809854),
    A = n(358509);
  function h(e) {
    let {
        entry: t,
        inline: n = !1,
        textColor: a,
        textTabularNumbers: l = !0,
        hovered: c = !1,
        scaleFontToUserSetting: u = !1,
      } = e,
      { now: h } = (0, E.e)(c),
      { timestamp: f, a11yTimeStamp: I } = r.useMemo(
        () => ({ timestamp: (0, _.W6)(t, h), a11yTimeStamp: (0, _.U3)(t, h) }),
        [t, h],
      );
    return (0, i.jsxs)(o.E, {
      className: s()(A.$N, { [A.E1]: n }),
      variant: "text-xs/normal",
      tabularNumbers: l,
      color: a,
      scaleFontToUserSetting: u,
      children: [
        (0, i.jsx)(d.A, { tag: "span", role: "timer", children: I }),
        (0, i.jsx)("span", { "aria-hidden": "true", children: f }),
      ],
    });
  }
  let f = function (e) {
    let { entry: t, textColor: n, hovered: r = !1, scaleFontToUserSetting: a = !1 } = e,
      s = (0, _.Hd)(t),
      E = (0, l.bG)([c.default], () => c.default.locale),
      A = (0, l.bG)([u.A], () => u.A.getMatchingActivity(t)),
      f = A?.timestamps?.start ?? A?.created_at;
    if (null != f)
      return (0, i.jsx)(h, {
        entry: { start: f },
        textColor: n,
        hovered: r,
        scaleFontToUserSetting: a,
      });
    if (s) return (0, i.jsx)(h, { entry: t, textColor: n, hovered: r, scaleFontToUserSetting: a });
    let I = (0, _.aJ)(t, E),
      p = (0, _.aJ)(t, E, void 0, { formatSet: _.sg });
    return (0, i.jsxs)(o.E, {
      variant: "text-xs/normal",
      color: n,
      lineClamp: 1,
      scaleFontToUserSetting: a,
      children: [
        (0, i.jsx)(d.A, { tag: "span", children: p }),
        (0, i.jsx)("span", { "aria-hidden": "true", children: I }),
      ],
    });
  };
}
