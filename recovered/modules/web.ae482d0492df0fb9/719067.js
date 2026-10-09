/* Recovered shipped factory. Module 719067.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4802282..4802574
 * Raw property SHA-256: 11d48b2e389fad539f056de3ca1fd4168b8c01d58d3173425a93d30134200067
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(168017),
    a = n(404277),
    s = n(209553);
  function l(e) {
    let { platforms: t, location: n } = e,
      { extraChromeEnabled: l } = r.A.useConfig({ location: n });
    return l
      ? (0, i.jsx)("span", { className: s.B, children: (0, i.jsx)(a.A, { platforms: t }) })
      : null;
  }
}
