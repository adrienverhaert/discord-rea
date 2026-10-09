/* Recovered shipped factory. Module 268678.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1189712..1190014
 * Raw property SHA-256: a21c250e481314a4528465b28239fc395fa18cb2612aef91347c478642e4d7fb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { b: () => i });
  var n = r(295551);
  function i(e, t) {
    let { id: r, "aria-label": i, "aria-labelledby": o } = e;
    return (
      (r = (0, n.Bi)(r)),
      o && i
        ? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" "))
        : o && (o = o.trim().split(/\s+/).join(" ")),
      i || o || !t || (i = t),
      { id: r, "aria-label": i, "aria-labelledby": o }
    );
  }
}
