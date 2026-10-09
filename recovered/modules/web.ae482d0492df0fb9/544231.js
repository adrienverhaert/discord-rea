/* Recovered shipped factory. Module 544231.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7425670..7426562
 * Raw property SHA-256: 82204b57fd50d27c8bbe78a496ee9fe7b090cf8792889efbd6826d425daafa26
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ju: () => _, WJ: () => d, XR: () => u, bg: () => c, v2: () => o, xi: () => l });
  var i = n(636537),
    r = n(73153),
    a = n(349435),
    s = n(652215);
  function l(e, t) {
    return (
      r.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
      i.Bo.post({
        url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
        body: { warning_ids: t },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
      })
    );
  }
  function o(e, t, n) {
    r.h.dispatch({
      type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
      channelId: e,
      warningId: t,
      feedbackType: n,
    });
  }
  function d(e) {
    r.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
  }
  function c(e) {
    r.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
  }
  function u(e) {
    return i.Bo.post({ url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: (0, i.fT)() });
  }
  function _(e) {
    return i.Bo.post({
      url: s.Rsh.ADD_SAFETY_WARNING(e),
      body: { safety_warning_type: a._j.STRANGER_DANGER },
      rejectWithError: (0, i.fT)(),
    });
  }
}
