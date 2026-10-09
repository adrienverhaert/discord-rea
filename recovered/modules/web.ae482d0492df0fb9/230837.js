/* Recovered shipped factory. Module 230837.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8287954..8288323
 * Raw property SHA-256: c7fe20b2de50bc156eb7ef0064f34ca0391d4dd899e9c64111d470d9a04abacc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(780964),
    r = n(766075),
    a = n(99206);
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, r.openUserSettings)(
      (function (e) {
        switch (e) {
          case a.J.MY_GAMES:
            return i.X.REGISTERED_GAMES_PANEL;
          case a.J.OVERLAY:
            return i.X.OVERLAY_PANEL;
          case a.J.ACTIVITY_PRIVACY:
            return i.X.ACTIVITY_PRIVACY_PANEL;
        }
      })(e),
      t,
    );
  }
}
