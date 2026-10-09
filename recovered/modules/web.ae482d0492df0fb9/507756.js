/* Recovered shipped factory. Module 507756.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4994915..4995177
 * Raw property SHA-256: dd47e1ba4a6feb24c77e1cdfdacf882d6e17a374d8591d9fa8ee2b111042131e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(287809),
    r = n(248174),
    a = n(753070);
  function s(e, t, n, s) {
    if (n !== a.on.RESOLUTION_1080 || s !== a.kn.FPS_30) return n;
    let l = (0, r.A)(e, i.default.getCurrentUser(), t);
    return l?.maskReportedQuality === !0 ? a.on.RESOLUTION_720 : n;
  }
}
