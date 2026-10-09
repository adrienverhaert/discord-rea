/* Recovered shipped factory. Module 114716.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3033878..3034394
 * Raw property SHA-256: 999b470a5151d269ccabe63d0b3137ad51486a9ed71a0b70a1bfaf268e541530
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => o });
  var i = n(477900);
  n(582128);
  var r = n(280450),
    a = n(612181),
    s = n(642277),
    l = n(652215);
  function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function o(o) {
      return !(0, a.wR)() &&
        r.default.getLoginStatus() !== l.aUe.LOGGING_IN &&
        r.default.allowLogoutRedirect()
        ? null != t
          ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(s.A, {}) })
          : (0, i.jsx)(s.A, {})
        : (0, i.jsx)(e, { ...(n.passProps ? o : null) });
    }
    return ((o.displayName = `Authenticated(${e.displayName ?? e.name ?? "<Unknown>"})`), o);
  }
}
