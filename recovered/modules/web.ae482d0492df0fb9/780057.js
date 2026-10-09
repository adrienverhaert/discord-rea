/* Recovered shipped factory. Module 780057.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7816388..7816729
 * Raw property SHA-256: 6c038fe0cecae36c17b6aee6710dc7639d3b6501a0ccccdac9aa89d5cf9d6ab1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = !1;
  function s() {
    a = !1;
  }
  class l extends i.Ay.Store {
    static displayName = "ThreadSummaryStore";
    summaryInProgress = !1;
    initialize() {
      a = !1;
    }
    isInProgress() {
      return a;
    }
  }
  let o = new l(r.h, {
    SUMMARIZE_THREAD_START: function () {
      a = !0;
    },
    SUMMARIZE_THREAD_SUCCESS: s,
    SUMMARIZE_THREAD_FAILURE: s,
  });
}
