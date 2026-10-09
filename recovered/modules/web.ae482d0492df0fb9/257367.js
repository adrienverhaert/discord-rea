/* Recovered shipped factory. Module 257367.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7993876..7994193
 * Raw property SHA-256: 4833a0a5e56bdd28e145387a5bb582d215a70816d9964b756efb7b2348c4fbe8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(172218),
    a = n(17928),
    s = n(517164);
  function l(e) {
    let { userId: t, onAction: n } = e,
      [l, o] = (0, i.useState)(!1),
      d = (0, a.bG)([s.A], () => s.A.isFetchingUserOutbox(t)),
      c = (0, i.useCallback)(
        (e) => {
          e && (n({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
        },
        [n],
      );
    return (0, r.K)(c, void 0, !d && !l);
  }
}
