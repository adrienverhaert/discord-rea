/* Recovered shipped factory. Module 878549.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2641681..2641938
 * Raw property SHA-256: 1d70189e3b3b3375e73e7c107bf0678b4f385f0f5020a66c424c55d0cf3589e7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { S: () => r });
  var i = n(280450);
  function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
      n = t.getId(),
      r = t.getSessionId();
    return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === r);
  }
}
