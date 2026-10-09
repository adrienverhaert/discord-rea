/* Recovered shipped factory. Module 14115.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8424285..8424525
 * Raw property SHA-256: 53f2edc27a01e70e436269f0921d96046427c322247c7fa72e86f2697f993ed1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { v: () => r });
  let i = { EARN: 0.25, SPEND: 0.3 };
  function r(e, t) {
    let { targetTime: n, isRenderedWithoutLottieAnimation: r } = t;
    if (r) return { duration: n, delay: 0 };
    let a = e > 0,
      s = n * i[a ? "EARN" : "SPEND"];
    return { duration: s, delay: a ? n - s : 0 };
  }
}
