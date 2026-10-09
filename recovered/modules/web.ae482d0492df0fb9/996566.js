/* Recovered shipped factory. Module 996566.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4929475..4929963
 * Raw property SHA-256: aa1c20c5e57d21734a99efbb062198b470f1eb8ef980852ba3d2eeff13c6eeb0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { IE: () => d, km: () => c, rM: () => o });
  var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(683973);
  let l = {};
  function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      t = (0, s.k)(e);
    return t.favoriteGifs?.gifs ?? l;
  }
  function d(e) {
    let t = o();
    return i.useMemo(
      () =>
        a()(t)
          .map((t, n) => ({ ...t, url: n, src: e?.(t.src, n) ?? t.src }))
          .sortBy("order")
          .reverse()
          .value(),
      [t, e],
    );
  }
  function c(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return null != o(t)[e];
  }
}
