/* Recovered shipped factory. Module 115718.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3065174..3065594
 * Raw property SHA-256: 932b4d2e7126e3ae2e3e75f4e8bad90abcf21b2135c071a9af34b15a70164ef9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    AT: () => r.AT,
    jF: () => a,
    Ay: () => l,
    rD: () => r.rD,
    vB: () => r.vB,
    Vv: () =>
      function e(t, n, i, a) {
        let { length: s } = i,
          l = a,
          o = n;
        if (0 === s) return 0;
        if (null == l) l = o;
        else if (l === o) return o;
        return (o += t === r.vB.UP ? -1 : 1) < 0 || o >= s
          ? e(t, o < 0 ? s : -1, i, l)
          : i[o].type === r.rD.HEADER
            ? e(t, o, i, l)
            : o;
      },
    vH: () => s.A,
  });
  var i = n(978263),
    r = n(926140);
  function a(e) {
    return { type: r.rD.HEADER, record: new r.X9(e), score: 0 };
  }
  var s = n(989133);
  let l = i.A;
}
