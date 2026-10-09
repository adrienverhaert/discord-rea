/* Recovered shipped factory. Module 777334.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6206207..6206851
 * Raw property SHA-256: e967c78d575317b0b7e93560fa16401f289ca7227ea3444ef5100c0197f12029
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { St: () => l, pj: () => s });
  var i = n(38405),
    r = n(41984);
  function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = arguments.length > 1 ? arguments[1] : void 0;
    return {
      ...t,
      tags: {
        source: __OVERLAY__ ? "overlay" : "legacy-overlay",
        overlayMethod: `${null == e ? null : r.Ue[e ?? r.Ue.Disabled]}`,
        ...(t?.tags ?? {}),
      },
    };
  }
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : void 0;
    i.A.captureException(e, a(t, n));
  }
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : void 0;
    return i.A.captureCrash(e, a(t, n));
  }
}
