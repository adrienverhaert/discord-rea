/* Recovered shipped factory. Module 183636.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2904384..2904618
 * Raw property SHA-256: 81b3ba981d8ba16d9fcca6603dea953ebede7f752ca6c0fee0d5ef40b1e8c896
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(531685);
  let r = {
    canUIRequestGatewaySocket: function () {
      return !0;
    },
    getState: function () {
      return i.A.isAppFocused() ? "focused" : "unfocused";
    },
    useCanUIRequestGatewaySocket: function () {
      return !0;
    },
  };
}
