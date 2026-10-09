/* Recovered shipped factory. Module 881902.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7911469..7911690
 * Raw property SHA-256: 9a9cef9b4c54778c1cd162774f852f2ff828c198eae68e174862d6c9279c7a60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(201718);
  function a(e) {
    r.P.refetch(e.user_id);
  }
  class s extends i.A {
    actions = { USER_APPLICATION_IDENTITY_UPDATE: a, USER_APPLICATION_IDENTITY_REMOVE: a };
  }
  let l = new s();
}
