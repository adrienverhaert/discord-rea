/* Recovered shipped factory. Module 572009.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7903200..7904028
 * Raw property SHA-256: 05c5810f129563c536c8117d24bc23de4898b4033708bdde7dfe83764015e1fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { I9: () => c, _$: () => d, _D: () => u, gX: () => o, nq: () => _ }), n(938796));
  var i = n(284009),
    r = n.n(i),
    a = n(665260),
    s = n(115093),
    l = n(652215);
  function o(e, t, n) {
    e || void 0 === t || r()(n === t, "Premium type should not change for non-staff users");
  }
  function d(e) {
    return "production" === s.B.TEST && null != e ? e : "production";
  }
  function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return (
      d(t) === s.B.DEVELOPMENT ||
      window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING ||
      (null != e && (e.isStaff() || e.isStaffPersonal()))
    );
  }
  function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return (
      d(t) === s.B.DEVELOPMENT ||
      window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING ||
      (null != e &&
        (!!(null != e.flags && (0, a.Lt)(e.flags, l.nhx.STAFF)) ||
          null != e.personal_connection_id))
    );
  }
  function _(e) {
    return void 0 !== e && e === l.oA2 ? null : e;
  }
}
