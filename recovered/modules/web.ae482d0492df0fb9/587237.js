/* Recovered shipped factory. Module 587237.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6254888..6255290
 * Raw property SHA-256: ce8a728f7b34a6a33e1bd1cdd380be7f80a306605bbc3f73422c090f85fc8fe3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(439372),
    r = n(626584),
    a = n(237984),
    s = n(394072);
  let l = new r.A("OverlaySmoketestLaunchManager");
  class o extends i.A {
    launched = !1;
    actions = {
      POST_CONNECTION_OPEN: () => {
        (0, s.SE)() &&
          !this.launched &&
          ((this.launched = !0),
          l.info("Opening v3 overlay for smoketest"),
          (0, a.o)({ windowed: !0 }).catch((e) => {
            l.error("Failed to open v3 overlay for smoketest", e);
          }));
      },
    };
  }
  let d = new o();
}
