/* Recovered shipped factory. Module 30076.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7915915..7916093
 * Raw property SHA-256: 6e0c0700b20b1e656deff1041f07709e1e05aaf14b4be1b8edb82e3eb8a78d03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => r });
  var i = n(652215);
  function r(e, t) {
    return (
      e >= 400 &&
      e < 500 &&
      null != t &&
      t >= i.t02.USER_LIMITED_ACCESS_DEFAULT &&
      t <= i.t02.USER_LIMITED_ACCESS_MAX
    );
  }
}
