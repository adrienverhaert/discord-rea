/* Recovered shipped factory. Module 692969.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4755685..4756044
 * Raw property SHA-256: 7bfd7fd4221e26d7199f7ea72ea5798b48fe3fb4d3675534799d883d33e09067
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(60465),
    r = n(921138);
  function a(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = (0, r.Ay)(e),
      { gameId: a } = n;
    return n.shouldOpenGameProfile && null != a
      ? (r) => {
          (r?.stopPropagation(),
            r?.preventDefault(),
            i.default.openGameProfileModal({ ...e, gameId: a, gameProfileModalChecks: n }),
            t?.());
        }
      : void 0;
  }
}
