/* Recovered shipped factory. Module 967758.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5908450..5908867
 * Raw property SHA-256: bf4faac29ddd51efab8830a9be058e6f4f36ba50766fc0a1181808f0db82031e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(515718);
  function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
      { innerWidth: r, innerHeight: a } = n,
      s = r - (e ? 76 : 24) * 2,
      l = a - 176;
    if (!(0, i.eJ)(t)) return { width: s, height: l };
    let { width: o, height: d } = t,
      c = (0, i.Uj)({ width: o, height: d, maxWidth: s, maxHeight: l }),
      u = (0, i.Uj)({ width: o, height: d, maxWidth: r - 544, maxHeight: a - (e ? 88 : 36) * 2 });
    return c.width >= u.width ? c : u;
  }
}
