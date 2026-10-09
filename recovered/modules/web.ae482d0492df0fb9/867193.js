/* Recovered shipped factory. Module 867193.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3920782..3921037
 * Raw property SHA-256: bd05496b35fb91f1fd42cf37dc1888a4bfa900f89a05135ebd675382e366eb13
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => o, V: () => d });
  var i = n(582128);
  let r = 0,
    a = new Set();
  function s(e) {
    return (a.add(e), () => a.delete(e));
  }
  function l() {
    return r;
  }
  function o(e) {
    if (e !== r) for (let t of ((r = e), [...a])) t();
  }
  function d() {
    return i.useSyncExternalStore(s, l);
  }
}
