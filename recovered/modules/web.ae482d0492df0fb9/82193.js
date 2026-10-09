/* Recovered shipped factory. Module 82193.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4174813..4175135
 * Raw property SHA-256: b0619d2476e2c5a6c96fdeecf49b06c67687f51651c578ee6d4ade95ad79b5ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { getDeviceState: () => s, logger: () => a }));
  var i = n(626584),
    r = n(817476);
  let a = new i.A("native/DeviceState.tsx");
  function s() {
    let { fallback: e } =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fallback: !0 };
    return e ? Promise.resolve(r.t) : Promise.reject("Cannot get device state on web");
  }
}
