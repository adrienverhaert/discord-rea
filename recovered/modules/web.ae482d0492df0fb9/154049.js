/* Recovered shipped factory. Module 154049.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2838524..2839279
 * Raw property SHA-256: 0edf88a42e257ed53e4893c66d447714d2e14dbb50f7fe2d3acce80cc29e1a27
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ES: () => l, Ek: () => s, kk: () => a });
  var i = n(73153);
  let r = new (n(626584).A)("TryLoad");
  async function a(e) {
    try {
      return await e();
    } catch (e) {
      return (r.log("database load failed.", e), null);
    }
  }
  function s(e, t, n) {
    try {
      return t();
    } catch (t) {
      return (
        r.log(`${e}: exception thrown, resetting socket.`, t, t.stack),
        i.h.dispatch({
          type: "RESET_SOCKET",
          args: {
            error: t,
            action: `tryLoadOrResetCacheGateway (${e})`,
            metricAction: `tryLoadOrResetCacheGateway (${n ?? e})`,
          },
        }),
        null
      );
    }
  }
  async function l(e, t, n) {
    try {
      return await t();
    } catch (t) {
      return (
        r.log(`${e}: exception thrown, resetting socket.`, t, t.stack),
        i.h.dispatch({
          type: "RESET_SOCKET",
          args: {
            error: t,
            action: `tryLoadOrResetCacheGatewayAsync (${e})`,
            metricAction: `tryLoadOrResetCacheGatewayAsync (${n ?? e})`,
          },
        }),
        null
      );
    }
  }
}
