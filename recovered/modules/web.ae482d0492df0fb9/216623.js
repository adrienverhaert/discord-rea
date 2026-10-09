/* Recovered shipped factory. Module 216623.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7373886..7374752
 * Raw property SHA-256: 05d0a87c778a2768fa0cf16a02da03b7f048652fa562c71c5ee76643e177623d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AX: () => u, cf: () => c, oN: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(320095),
    s = n(85109),
    l = n(756377),
    o = n(652215);
  async function d(e) {
    let t = await i.Bo.put({
      url: o.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
      body: { due_at: e.dueAt, source: e.source },
      rejectWithError: (0, i.fT)(),
    });
    return (0, l.iz)(t.body);
  }
  async function c(e) {
    return (
      await i.Bo.del({
        url: o.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
        rejectWithError: (0, i.fT)(),
      }),
      !0
    );
  }
  async function u() {
    let e;
    if (!s.A.getIsStale()) return Promise.resolve();
    try {
      e = await i.Bo.get({ url: o.Rsh.GET_SAVED_MESSAGES, rejectWithError: (0, i.fT)() });
    } catch {
      await r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: [] });
      return;
    }
    let t = e.body.results.map((e) => ({
      message: null != e.message ? (0, a.rh)(e.message) : null,
      saveData: (0, l.Dd)(e.save_data),
    }));
    await r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: t });
  }
}
