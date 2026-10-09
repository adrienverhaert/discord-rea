/* Recovered shipped factory. Module 66464.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1148142..1148491
 * Raw property SHA-256: 52715db378cada457b6a5b8eb624a3b16bfb503d7af228e76a084a7a46e9decb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { M: () => o });
  var n = r(295551),
    i = r(268678);
  function o(e) {
    let {
      id: t,
      label: r,
      "aria-labelledby": o,
      "aria-label": a,
      labelElementType: s = "label",
    } = e;
    t = (0, n.Bi)(t);
    let l = (0, n.Bi)(),
      u = {};
    return (
      r && ((o = o ? `${l} ${o}` : l), (u = { id: l, htmlFor: "label" === s ? t : void 0 })),
      { labelProps: u, fieldProps: (0, i.b)({ id: t, "aria-label": a, "aria-labelledby": o }) }
    );
  }
}
