/* Recovered shipped factory. Module 917592.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9676158..9677249
 * Raw property SHA-256: 2172a8cd4b9d0232a1f41eb3020588ddc77d37c36e0f33d0e808b37940b96a2c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(652215),
    r = n(660183);
  let a = {
    getStatus: function (e) {
      let t,
        n,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      switch (e) {
        case i.S7L.CONNECTING:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t.MzW9sN)));
          break;
        case i.S7L.AUTHENTICATING:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t.GxXwE2)));
          break;
        case i.S7L.AWAITING_ENDPOINT:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t.uQle7a)));
          break;
        case i.S7L.RTC_CONNECTED:
          ((t = i.vkP.CONNECTED), (n = a ? r.intl.string(r.t.HtVOdd) : r.intl.string(r.t.daXg45)));
          break;
        case i.S7L.RTC_CONNECTING:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t.Gp51dl)));
          break;
        case i.S7L.ICE_CHECKING:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t["rdCyA/"])));
          break;
        case i.S7L.DTLS_CONNECTING:
          ((t = i.vkP.CONNECTING), (n = r.intl.string(r.t.UvB3gV)));
          break;
        case i.S7L.NO_ROUTE:
          ((t = i.vkP.ERROR), (n = r.intl.string(r.t.mGhOIi)));
          break;
        case i.S7L.RTC_DISCONNECTED:
          ((t = i.vkP.ERROR), (n = r.intl.string(r.t.M7LDmE)));
          break;
        case i.S7L.DISCONNECTED:
        default:
          ((t = i.vkP.ERROR), (n = r.intl.string(r.t.NLKQbx)));
      }
      return { connectionStatus: t, connectionStatusText: n };
    },
    getShortHostname: function (e) {
      return null == e ? "" : e.split(".")[0];
    },
  };
}
