/* Recovered shipped factory. Module 808829.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6931675..6931966
 * Raw property SHA-256: 7409abf48c516b632be9774e93777188b45fbb0fe36d6e85fa8b8129d05cf6ea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => r });
  var i = n(660183);
  function r(e) {
    let { application: t, username: n, usernameOnClick: r } = e;
    return null != t
      ? i.intl.formatToParts(i.t.Tes5Ou, {
          username: n,
          applicationName: t.name,
          usernameOnClick: r,
        })
      : i.intl.formatToParts(i.t.PUJtgi, { username: n, usernameOnClick: r });
  }
}
