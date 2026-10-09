/* Recovered shipped factory. Module 787541.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7850910..7851498
 * Raw property SHA-256: d7f4abf434065b9cc358998888002adfacda3869c8e3ddd31ef50b4c1d66d450
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { WU: () => s, X8: () => o, jD: () => l, n7: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s(e, t) {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_SHOW", tutorialId: e, renderData: t });
  }
  function l(e) {
    r.h.dispatch({ type: "TUTORIAL_INDICATOR_HIDE", tutorialId: e });
  }
  function o(e) {
    (r.h.dispatch({ type: "TUTORIAL_INDICATOR_DISMISS", tutorialId: e }),
      i.Bo.put({ url: a.Rsh.TUTORIAL_INDICATOR(e), oldFormErrors: !0, rejectWithError: !0 }));
  }
  function d() {
    (r.h.dispatch({ type: "TUTORIAL_INDICATOR_SUPPRESS_ALL" }),
      i.Bo.post({
        url: a.Rsh.TUTORIAL_INDICATORS_SUPPRESS,
        oldFormErrors: !0,
        rejectWithError: !0,
      }));
  }
}
