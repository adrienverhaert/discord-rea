/* Recovered shipped factory. Module 536763.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5909916..5910209
 * Raw property SHA-256: d8654695482b0ee4afc87154d305ab1f736d4633587cbd5b8cbc29b8481beb0a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(619517),
    r = n(967758);
  function a(e) {
    let { src: t, width: n, height: a, hasMultiple: s = !1, options: l } = e,
      { width: o, height: d } = (0, r.A)(s, { width: n, height: a });
    i.Ay.preloadImage({
      src: t,
      dimensions: { maxWidth: o, maxHeight: d, imageWidth: n, imageHeight: a },
      options: l,
    });
  }
}
