/* Recovered shipped factory. Module 936785.
 * Source: recovered/web/assets/4b877a4798bd1cc7.js
 * UTF-16 property offsets: 95..431
 * Raw property SHA-256: 34b678687be2d152fc82dd15c043851e355e7f918f631efded2545929b8be5ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, l) {
  (l.d(t, { Ew: () => d, LZ: () => a, RD: () => i }), l(582128));
  var e = l(318254),
    r = l(278416),
    u = l(403581);
  let o = { ORBS: e.C, TAG: r.TagIcon, NITRO: u.t };
  function a(n) {
    return null != n ? o[n] : void 0;
  }
  function i(n) {
    return null != n ? new Date(n) : null;
  }
  let c = "{value}";
  function d(n, t) {
    return null == n ? null : n.includes(c) ? (null == t ? null : n.replaceAll(c, String(t))) : n;
  }
}
