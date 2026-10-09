/* Recovered shipped factory. Module 104217.
 * Source: recovered/web/assets/55859e2649a90fc5.js
 * UTF-16 property offsets: 652..830
 * Raw property SHA-256: 00041dcffa76e6aaf36f40723252ad6f7b33645534657250287554255fa37b30
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => s });
  var i = e(73153);
  let s = {
    disableFalsePositiveButton: function (t, n) {
      i.h.dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId: n, channelId: t });
    },
  };
}
