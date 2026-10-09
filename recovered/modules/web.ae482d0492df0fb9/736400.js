/* Recovered shipped factory. Module 736400.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3150264..3150646
 * Raw property SHA-256: f0886c53677e8bc2fdca67c32551bf3884fbf2a096dc4204a6446fa3028881ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => r, X3: () => a, n2: () => s });
  var i = n(136722);
  function r(e) {
    for (let { permissionOverwrites_: t } of e)
      if (null != t)
        for (let e in t) {
          let n = t[e];
          ((n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny)));
        }
  }
  function a(e) {
    for (let [t, n] of e) r(n);
  }
  function s(e) {
    let { permissionOverwrites_: t } = e;
    if (null != t)
      for (let e in t) {
        let n = t[e];
        ((n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny)));
      }
    return e;
  }
}
