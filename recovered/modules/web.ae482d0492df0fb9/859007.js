/* Recovered shipped factory. Module 859007.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2664856..2665153
 * Raw property SHA-256: 0b396da252b87ebd2fffc4ca2626e11a78d0063c00f8e028a2761f37824927e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => l });
  var i = n(587895),
    r = n(625180),
    a = n(25451),
    s = n(165610);
  function l(e) {
    let { applicationId: t, launch: n, analyticsContext: l } = e,
      o = i.A.getApplication(t);
    return (
      !!(null != o && (0, a.X)(o)) &&
      (r.A.launchFrame({ applicationId: t, surface: s.sd, launch: n, analyticsContext: l }), !0)
    );
  }
}
