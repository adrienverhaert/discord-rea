/* Recovered shipped factory. Module 131607.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4223945..4225361
 * Raw property SHA-256: c05c2e52c12588af15f3edcfba6cf1ad3283295361a1b20f7e5850fac3e51d2a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    iP: () => f,
    kn: () => c,
    x_: () => h,
    D8: () => I,
    Cc: () => A,
    RF: () => _,
    Wl: () => E,
    ww: () => u,
  });
  var i = n(595529),
    r = n(582128),
    a = n(223449),
    s = n(199773),
    l = n(256787),
    o = n(49999);
  function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = arguments.length > 3 ? arguments[3] : void 0,
      d = null != e && !n && !a.C.has(e);
    r.useEffect(
      () => () => {
        d &&
          (s.A.lastDismissed?.content !== e ||
            ((0, l.vf)(e) && s.A.lastDismissed?.guildId !== i)) &&
          t(o.i.AUTO_DISMISS, !0);
      },
      [d, t, e, i],
    );
  }
  function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      [r, a] = (0, i.DP)(e, t);
    return (d(r, a, n), [r, a]);
  }
  function u(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      [a, s] = (0, i.AA)(e, t, n);
    return (d(a, s, r, t), [a, s]);
  }
  function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      [a, s] = (0, i.eE)(e, t, n);
    return (d(a, s, r), [a, s]);
  }
  function E(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      [a, s] = (0, i.Bo)(e, t, n);
    return (d(a, s, r), [a, s]);
  }
  function A(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      [a, s] = (0, i.Vu)(e, t, n);
    return (d(a, s, r), [a, s]);
  }
  function h(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      [s, l] = (0, i.b5)(e, n, t, r);
    return (d(s, l, a, t), [s, l]);
  }
  function f(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      [s, l] = (0, i.Tr)(e, n, t, r);
    return (d(s, l, a), [s, l]);
  }
  function I(e, t, n, r) {
    let [a, s] = (0, i.PP)(e, t, n, r);
    return (d(a, s, !1, t), [a, s]);
  }
}
