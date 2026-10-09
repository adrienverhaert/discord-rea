/* Recovered shipped factory. Module 668279.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7440990..7441186
 * Raw property SHA-256: c4c13053c8f6d9eb860401a441d6ac6fe02a4c3176a8afe20dadddc30bfc0e9f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    window.DiscordSentry?.addBreadcrumb({
      type: "default",
      level: "info",
      category: e.category,
      message: e.message,
      data: e.data,
      timestamp: Date.now(),
    });
  }
  n.d(t, { A: () => i });
}
