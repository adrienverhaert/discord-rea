/* Recovered shipped factory. Module 224964.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6650884..6651365
 * Raw property SHA-256: a27d368f9c69fef2bb4a3c9f4d4a160dd35548b0bbb0800858e33a8fba8b9d37
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(702841),
    a = n(21161),
    s = n(3137);
  function l() {
    let { createMultipleConfettiAt: e } = i.useContext(a.x),
      t = (0, r.bG)([s.A], () => s.A.getState()),
      n = i.useCallback(
        (e) => ({
          size: {
            type: "static-random",
            minValue: e.confettiSize - 7,
            maxValue: e.confettiSize + 7,
          },
        }),
        [],
      );
    return i.useMemo(
      () => ({
        fire: (i, r, a) => {
          let s = a?.settings != null ? { ...t, ...a.settings } : t;
          e(i, r, n(s), (a?.count ?? s.confettiCount) * (a?.countMultiplier ?? 1), {
            sprite: a?.sprite,
          });
        },
      }),
      [e, n, t],
    );
  }
}
