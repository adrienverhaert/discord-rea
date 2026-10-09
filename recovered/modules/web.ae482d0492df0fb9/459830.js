/* Recovered shipped factory. Module 459830.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5615248..5615943
 * Raw property SHA-256: 7c5d3d18bbd972c3e8e82556c2e244438704957090652b906dd9e5bc4ac342c6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { iE: () => r, v7: () => a });
  let i = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
  function r(e, t) {
    return t >= e.minSnapDownDpr ? e.maxUpscale : null;
  }
  function a(e) {
    let { targetWidth: t, targetHeight: n, sourceWidth: r, sourceHeight: a, maxUpscale: s } = e,
      l = Math.max(t, n);
    if (l <= 0) return { width: t, height: n };
    let o = i.find((e) => l <= e) ?? i[i.length - 1],
      d = null != r && null != a && Math.max(r, a) <= o,
      c = o;
    if (null != s && s > 1 && !d) {
      let e;
      for (let t of i)
        if (t <= l) e = t;
        else break;
      null != e && l <= e * s && (c = e);
    }
    if (null != r && null != a && Math.max(r, a) <= c) return { width: r, height: a };
    let u = c / l,
      _ = Math.max(1, Math.round(t * u)),
      E = Math.max(1, Math.round(n * u));
    return { width: null != r ? Math.min(_, r) : _, height: null != a ? Math.min(E, a) : E };
  }
}
