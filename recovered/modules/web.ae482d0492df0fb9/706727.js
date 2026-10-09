/* Recovered shipped factory. Module 706727.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5680251..5681042
 * Raw property SHA-256: 0109c1e50d89c02c637351caee85f0cb027ee8899f55af14df6f407e7ed69b93
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C1: () => o, S7: () => d, Sw: () => s, tU: () => l });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s(e, t, n, i) {
    r.h.dispatch({
      type: "QUEUE_INTERACTION_COMPONENT_STATE",
      messageId: e,
      nonce: t,
      state: n,
      componentId: i,
    });
  }
  function l(e, t) {
    let { data: n, messageId: i, preflight: a, onCreate: s, onSuccess: l, onFailure: o } = t;
    r.h.dispatch({
      type: "INTERACTION_QUEUE",
      data: n,
      nonce: e,
      messageId: i,
      preflight: a,
      onCreate: s,
      onSuccess: l,
      onFailure: o,
    });
  }
  function o(e, t, n, i) {
    r.h.dispatch({
      type: "INTERACTION_FAILURE",
      nonce: e,
      errorMessage: n,
      errorCode: t,
      status: i,
    });
  }
  async function d(e, t) {
    let n = (
      await i.Bo.get({
        url: a.Rsh.MESSAGE_INTERACTION_DATA(e, t),
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      })
    ).body;
    return (
      r.h.dispatch({
        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
        channelId: e,
        messageId: t,
        interactionData: n,
      }),
      n
    );
  }
}
