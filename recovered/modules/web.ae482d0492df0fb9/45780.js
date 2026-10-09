/* Recovered shipped factory. Module 45780.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5129814..5130490
 * Raw property SHA-256: 6299783006bc871f861968d4b41a93ab709e04446fc4af4c3c04b47ccb2114d4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G$: () => E, _$: () => h, hk: () => f, zs: () => _ });
  var i = n(17928),
    r = n(554146),
    a = n(594061),
    s = n(617617),
    l = n(174459),
    o = n(460288),
    d = n(652215),
    c = n(49999),
    u = n(355097);
  function _(e, t) {
    let n = s.A.getDismissedGuildContent(t);
    return null != n && (0, o.c0)(n, e);
  }
  function E(e, t) {
    return (0, i.bG)([s.A], () => _(e, t));
  }
  function A(e, t, n, i, s) {
    ((0, a.TG)(
      n,
      (i) => {
        let r = _(t, n);
        if ((e && r) || (!e && !r)) return !1;
        i.dismissedGuildContent = (e ? o.Vf : o.We)(i.dismissedGuildContent, t);
      },
      e ? u.Sb.INFREQUENT_USER_ACTION : u.Sb.FREQUENT_USER_ACTION,
    ),
      i &&
        l.default.track(d.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
          type: r.V[t],
          guild_id: n,
          action: s ?? c.i.UNKNOWN,
        }));
  }
  function h(e, t, n, i) {
    A(!0, e, t, n, i);
  }
  function f(e, t) {
    A(!1, e, t);
  }
}
