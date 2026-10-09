/* Recovered shipped factory. Module 602853.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 975157..975714
 * Raw property SHA-256: 82958f47f643b1f57144fcee94d0dd5d79524eeec361d7573c6bb31970088950
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { r: () => l }), n(321073));
  var i = n(38021),
    r = n(702841),
    a = n(775602),
    s = n(534409);
  function l(e, t) {
    let { theme: n, density: l } = (0, i.wR)(),
      o = (0, r.bG)([a.Ay], () => a.Ay.saturation),
      d = (0, r.bG)([a.Ay], () => a.Ay.isHighContrastModeEnabled),
      c = (0, s.qK)("useToken"),
      u = (0, s.k5)("useToken"),
      _ = (0, s.lV)("useToken"),
      E = [];
    return (
      c && E.push("refresh-fast-follow-avatars"),
      u && E.push("refresh-fast-follow-guild-bg"),
      _ && E.push("refresh-fast-follow-distinct-borders"),
      e.resolve({
        theme: t ?? n,
        saturation: o,
        enabledExperiments: E,
        density: l,
        highContrastModeEnabled: d,
      })
    );
  }
}
