/* Recovered shipped factory. Module 474090.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9624588..9624972
 * Raw property SHA-256: f889b5b81e80260993bb05b193664ef02497aa5483a0a10adfa8501838a43848
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => o, CC: () => r, YE: () => l, cr: () => a, ki: () => s });
  var i = n(202541);
  function r(e, t) {
    return null == t || (null != e && i.ci[e] >= i.ci[t]);
  }
  function a(e, t) {
    return null == e || i.ci[e] <= i.ci[t];
  }
  function s(e, t) {
    return null != e && null != e.premiumType && r(e.premiumType, t);
  }
  function l(e, t) {
    return null != e && e.premiumType === t;
  }
  let o = { isPremiumAtLeast: r, isPremium: s, isPremiumExactly: l };
}
