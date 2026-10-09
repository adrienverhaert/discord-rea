/* Recovered shipped factory. Module 209787.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1191105..1191419
 * Raw property SHA-256: fc67a3c67b5dbf2da498a6ffe87beae0ac05b43a6c1314e9f3a88eed51a5ce95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { L: () => a });
  var n = r(295551),
    i = r(361854),
    o = r(582128);
  function a(e = !0) {
    let t = (0, n.Bi)(),
      [r, s] = (function (e = !0) {
        let [t, r] = (0, o.useState)(e),
          n = (0, o.useRef)(!1),
          a = (0, o.useCallback)((e) => {
            ((n.current = !0), r(!!e));
          }, []);
        return (
          (0, i.N)(() => {
            n.current || r(!1);
          }, []),
          [a, t]
        );
      })(e);
    return { id: s ? t : void 0, ref: r };
  }
}
