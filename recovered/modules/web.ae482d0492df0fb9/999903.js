/* Recovered shipped factory. Module 999903.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3224972..3225238
 * Raw property SHA-256: 9198db3a22c1fdbcc66420d59d44978d8a59839a78fba6194cfdae97fc44b94b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(435558),
    r = n.n(i);
  function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return r()(e)
      .map((e) => ("null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]))
      .flattenDeep()
      .filter(n)
      .value();
  }
}
