/* Recovered shipped factory. Module 862780.
 * Source: recovered/web/assets/52c27b413f754515.js
 * UTF-16 property offsets: 6898..7452
 * Raw property SHA-256: eadaa93e3154dc09ffdc77c5cee132b8ce921fd2084ff813a164436a07236102
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A2: () => u, d$: () => a, xt: () => d });
  var l = n(882035),
    i = n(121894),
    s = n(52133);
  n(935208);
  let r = {},
    o = (0, l.h)((e) => ({
      pollsByChannelId: {},
      pollsByMessageId: {},
      updatePollState(t, n, l) {
        (0, i.r)(() => {
          e((e) => {
            let i = l(e.pollsByChannelId[t]?.[n]);
            return {
              pollsByChannelId: {
                ...e.pollsByChannelId,
                [t]: { ...e.pollsByChannelId[t], [n]: i },
              },
              pollsByMessageId: { ...e.pollsByMessageId, [n]: i },
            };
          });
        });
      },
    }));
  function a(e) {
    return o((t) => t.pollsByChannelId[e] ?? r, s.A);
  }
  function u(e, t, n) {
    o.getState().updatePollState(e, t, n);
  }
  function d(e, t) {
    return o.getState().pollsByChannelId[e]?.[t];
  }
}
