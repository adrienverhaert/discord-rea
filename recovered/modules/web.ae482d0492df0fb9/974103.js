/* Recovered shipped factory. Module 974103.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5028027..5028675
 * Raw property SHA-256: fc98b7108e3cc281c3868cb7807cc331affcbdecca80d707e17bb2cb48ec70a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ic: () => d, nc: () => o, w: () => c });
  var i = n(17928),
    r = n(576705),
    a = n(903093),
    s = n(610136),
    l = n(652215);
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return (
      t.can(l.xBc.BAN_MEMBERS, e) ||
      t.can(l.xBc.KICK_MEMBERS, e) ||
      t.can(l.xBc.MODERATE_MEMBERS, e) ||
      t.can(l.xBc.MANAGE_GUILD, e)
    );
  }
  function d(e) {
    let t = (0, i.bG)([r.A], () => o(e, r.A), [e]),
      n = (0, i.bG)([s.A], () => (null != e ? s.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, a.k$)(n)) && t;
  }
  function c(e) {
    return (0, i.bG)(
      [r.A],
      () =>
        (function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
          return t.can(l.xBc.MANAGE_GUILD, e);
        })(e, r.A),
      [e],
    );
  }
}
