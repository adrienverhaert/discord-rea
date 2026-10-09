/* Recovered shipped factory. Module 309199.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5929633..5930466
 * Raw property SHA-256: 6a8bd7e171972aa4be60a4375f580a5c4ab2a3ca79790796e959dee4d60f7036
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { SM: () => d, eh: () => l, k_: () => o, uX: () => s });
  var i = n(935208),
    r = n(380335),
    a = n(157550);
  function s(e) {
    var t;
    let [n, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
    return Array.from(
      ((t = e), i.default.keys(t).map((e) => [e, t[e]])).filter((e) => {
        let [, t] = e;
        return !n.isMessageRequest(t.id) && !s.isSpam(t.id);
      }),
    ).reduce((e, t) => {
      let [n, i] = t;
      return Object.assign(e, { [n]: i });
    }, {});
  }
  function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
  }
  function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
    return t.isMessageRequest(e) || n.isSpam(e);
  }
  function d() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, a.A],
      n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
  }
}
