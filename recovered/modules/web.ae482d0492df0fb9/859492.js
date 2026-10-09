/* Recovered shipped factory. Module 859492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6735545..6737295
 * Raw property SHA-256: f92ed9502cb6c9d21ca272e8757aa74b9567b6941a939ae6ab2805b57de0b50a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Se: () => m, Hv: () => g, Ig: () => p, F5: () => I, GZ: () => f, b9: () => T });
  var i = n(582128),
    r = n(70283),
    a = n(17928),
    s = n(554146),
    l = n(682618),
    o = n(982240),
    d = n(826673),
    c = n(287809),
    u = n(945810);
  let _ = (0, u.mj)({
      name: "2026-09-gifting-badge-coachmark-audience",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    E = (0, u.mj)({
      name: "2026-09-gifting-badge-complex-art",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    A = (0, u.mj)({
      name: "2026-06-gifting-badge-desktop",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
  var h = n(998370);
  function f(e, t, n) {
    let i = (0, o.rL)(t),
      r = (0, o.rL)(n);
    return Math.min(
      Math.max(
        null != n ? (r > 0 ? (e / r) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100,
        0,
      ),
      100,
    );
  }
  function I(e) {
    let { enabled: t } = h.J.useConfig({ location: e }),
      { enabled: n } = A.useConfig({ location: `${e}${t ? "" : "-DISABLED"}` });
    return n && t;
  }
  function p(e) {
    return !!h.J.getConfig({ location: e }).enabled && A.getConfig({ location: e }).enabled;
  }
  function T(e) {
    return E.useConfig({ location: e }).enabled;
  }
  function m(e, t) {
    return t ? (e?.complex_icon_static_url ?? e?.simple_icon_url) : e?.simple_icon_url;
  }
  function g(e) {
    let { platform: t, location: n, enabled: u = !0 } = e,
      { enabled: E } = h.J.useConfig({ location: n }),
      { enabled: f } = A.useConfig({ location: `${n}${"web" === t ? "" : "-DISABLED"}` }),
      I = "web" === t ? f && E : E,
      { enabled: p } = _.useConfig({ location: `${n}${I ? "" : "-DISABLED"}` }),
      T = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
      m = (0, d.HX)(s.M.NEW_GIFTING_BADGES_COACHMARK),
      g = (0, a.bG)([o.Ay], () => o.Ay.getBadgeById(r.$.GIFTING)),
      S = I && !m && u,
      N = S && !p && T,
      C = S && p && null == g;
    return (i.useEffect(() => {
      C ? (0, l.Ay)(r.$.GIFTING) : N && (0, l.o0)(r.$.GIFTING);
    }, [N, C]),
    p)
      ? S && null != g && !g.hidden && (T || g.owned)
        ? "noCount"
        : null
      : S && T && null != g
        ? "count"
        : null;
  }
  (n(95769), n(660183));
}
