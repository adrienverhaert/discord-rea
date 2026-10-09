/* Recovered shipped factory. Module 304072.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2250802..2251066
 * Raw property SHA-256: 955125461e346d59f03f7a85d1c8a6586b1c14432cddeef7f7bf0ce9a12e23ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(451988),
    a = n(444927);
  function s(e, t) {
    let [n, s] = (0, i.useState)(e),
      l = (0, a.A)(() => new r.Ep());
    return (
      (0, i.useEffect)(() => () => l.stop(), [l]),
      [
        n,
        (0, i.useCallback)(
          (n) => {
            (s(n), n !== e && l.start(t, () => s(e)));
          },
          [t, e, l],
        ),
      ]
    );
  }
}
