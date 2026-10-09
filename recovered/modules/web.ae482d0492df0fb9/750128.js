/* Recovered shipped factory. Module 750128.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5677559..5678874
 * Raw property SHA-256: fb443948127d9ca0410294379a221844bd74098b6167fcc64d2538f1642c5919
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r, a, s, l;
  n.d(t, { A: () => T, Z: () => I });
  var o,
    d = n(284009),
    c = n.n(d),
    u = n(127258),
    _ = n(17928),
    E = n(73153),
    A = n(148494),
    h = n(706727),
    f = n(927813),
    I =
      (((o = {})[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
      (o[(o.ERRORED = 1)] = "ERRORED"),
      (o[(o.SUCCEEDED = 2)] = "SUCCEEDED"),
      o);
  class p extends _.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
      return e !== i ? null : r;
    }
  }
  let T = new p(E.h, {
    LOGOUT: function () {
      return ((i = null), (r = null), (a = null), (s = null), (l = null), !0);
    },
    INTERACTION_MODAL_CREATE: function (e) {
      let { nonce: t } = e;
      return (t === l && (A.A.deleteMessage(s, a, !0), (a = null), (s = null), (l = null)), !1);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
      let { nonce: t } = e;
      return (t === l && (A.A.deleteMessage(s, a, !0), (a = null), (s = null), (l = null)), !1);
    },
    INTERACTION_QUEUE: function (e) {
      let { messageId: t, nonce: n, data: o, preflight: d } = e;
      switch (o.interactionType) {
        case u.G.APPLICATION_COMMAND:
          return ((a = t), (s = o.channelId), (l = n), !1);
        case u.G.MODAL_SUBMIT:
          (c()(null == i || 1 === r || 2 === r, "cannot submit multiple modals at once"),
            (i = n),
            (r = 0));
          let _ = (e) => {
            setTimeout(() => {
              i === n && 0 === r && (0, h.C1)(n);
            }, e);
          };
          return (
            null != d
              ? (_(2 * f.A.Millis.MINUTE),
                d.then(() => _(10 * f.A.Millis.SECOND)).catch(() => (0, h.C1)(n)))
              : _(10 * f.A.Millis.SECOND),
            !0
          );
        default:
          return !1;
      }
    },
    INTERACTION_SUCCESS: function (e) {
      let { nonce: t } = e;
      return null != t && t === i && ((r = 2), !0);
    },
    INTERACTION_FAILURE: function (e) {
      let { nonce: t } = e;
      return null != t && t === i && ((r = 1), !0);
    },
  });
}
