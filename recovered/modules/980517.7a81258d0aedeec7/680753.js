/* Recovered shipped factory. Module 680753.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 49353..50316
 * Raw property SHA-256: 4be1ad84637c79996c4c26ad00395994c0d802823f0d57048700bfed23e5b122
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { qO: () => o });
  var n = r(83220),
    a = r(231577);
  function o(e, t = {}) {
    if (
      (t.user &&
        (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
      (e.timestamp = t.timestamp || (0, n.zf)()),
      t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
      t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
      t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, a.eJ)()),
      void 0 !== t.init && (e.init = t.init),
      !e.did && t.did && (e.did = `${t.did}`),
      "number" == typeof t.started && (e.started = t.started),
      e.ignoreDuration)
    )
      e.duration = void 0;
    else if ("number" == typeof t.duration) e.duration = t.duration;
    else {
      let t = e.timestamp - e.started;
      e.duration = t >= 0 ? t : 0;
    }
    (t.release && (e.release = t.release),
      t.environment && (e.environment = t.environment),
      !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
      !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
      "number" == typeof t.errors && (e.errors = t.errors),
      t.status && (e.status = t.status));
  }
}
