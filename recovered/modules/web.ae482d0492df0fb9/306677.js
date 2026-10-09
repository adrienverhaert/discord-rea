/* Recovered shipped factory. Module 306677.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3969251..3969548
 * Raw property SHA-256: e79841de2dcd079eed18e80fb8f0c705de442007e82d313419d263e2587b8498
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => a });
  var i = n(636537),
    r = n(652215);
  function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return i.Bo.post({
      url: r.Rsh.CONNECTIONS_CALLBACK(e),
      body: { ...t, insecure: n, friend_sync: r.txh.has(e) },
      oldFormErrors: !0,
      rejectWithError: (0, i.fT)(),
    });
  }
}
