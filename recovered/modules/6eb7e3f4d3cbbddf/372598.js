/* Recovered shipped factory. Module 372598.
 * Source: recovered/web/assets/6eb7e3f4d3cbbddf.js
 * UTF-16 property offsets: 95..828
 * Raw property SHA-256: 39b873a5c656937918612f4bd0a4e2f646d5c4fa8987c3ac9c5f3cf5d0977e3e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { XO: () => E, b_: () => o, dL: () => a, zR: () => l });
  var r = n(403362),
    i = n(452245),
    u = n(243277);
  function a(e) {
    let t = E();
    return Array.from(e.defaultActionTypes).map((e) => t[e]);
  }
  function l(e) {
    return (0, i.J6)(e.triggerType)
      .map((t) =>
        e.actions.find((e) => {
          let { type: n } = e;
          return n === t;
        }),
      )
      .filter(r.Vq);
  }
  function o(e, t, n) {
    let r = e.actions.filter((e) => e.type !== t);
    return { ...e, actions: null != n ? [...r, n] : r };
  }
  function E() {
    return {
      [u.AH.BLOCK_MESSAGE]: { type: u.AH.BLOCK_MESSAGE, metadata: { customMessage: void 0 } },
      [u.AH.FLAG_TO_CHANNEL]: { type: u.AH.FLAG_TO_CHANNEL, metadata: { channelId: void 0 } },
      [u.AH.USER_COMMUNICATION_DISABLED]: {
        type: u.AH.USER_COMMUNICATION_DISABLED,
        metadata: { durationSeconds: 60 },
      },
      [u.AH.QUARANTINE_USER]: { type: u.AH.QUARANTINE_USER, metadata: {} },
    };
  }
}
