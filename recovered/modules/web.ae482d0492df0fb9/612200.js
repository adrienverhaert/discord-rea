/* Recovered shipped factory. Module 612200.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2761912..2762723
 * Raw property SHA-256: 1a41375aca04e7ed20d8c51ec57217902ae8aefc11efd487e033399232253906
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { IO: () => o, MP: () => c, Nk: () => d, yO: () => l });
  var i = n(73153);
  (n(830215), n(976860));
  var r = n(174459),
    a = n(204925),
    s = n(652215);
  function l(e, t) {
    (r.default.track(s.HAw.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: e } }),
      i.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: e, channelId: t }));
  }
  function o(e) {
    (i.h.wait(() => i.h.dispatch({ type: "AGE_GATE_MODAL_CLOSE" })),
      void 0 !== e &&
        r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_CLOSE }));
  }
  function d(e) {
    (i.h.wait(() => {
      i.h.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
    }),
      r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_SUCCESS }));
  }
  function c(e, t) {
    (i.h.wait(() => {
      i.h.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: t });
    }),
      r.default.track(s.HAw.AGE_GATE_ACTION, { source: e, action: a.AM.AGE_GATE_FAILURE }));
  }
}
