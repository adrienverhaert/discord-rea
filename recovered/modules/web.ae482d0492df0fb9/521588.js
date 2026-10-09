/* Recovered shipped factory. Module 521588.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2681293..2681723
 * Raw property SHA-256: f8ef705a59ca31b5440ac8f1d88171bb2fdc635cd0b4e0cd7b1acf425c572bc1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a: () => l });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(809380);
  let l = (e) => {
    let {
      left: t,
      top: n = 0,
      right: r = 0,
      bottom: l,
      size: o = 8,
      alert: d = !1,
      showBlurpleTreatment: c = !1,
      maskColor: u = 2,
      additionalStyles: _,
    } = e;
    return (0, i.jsx)("span", {
      className: a()(s.Om, {
        [s.xE]: d,
        [s.nB]: c,
        [s.GS]: 0 === u,
        [s.Pn]: 1 === u,
        [s.HP]: 2 === u,
        [s.gl]: 3 === u,
        [_ ?? ""]: void 0 !== _,
      }),
      style: { height: o, width: o, left: t, top: n, right: r, bottom: l },
    });
  };
}
