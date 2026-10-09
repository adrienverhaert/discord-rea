/* Recovered shipped factory. Module 80682.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2520467..2521075
 * Raw property SHA-256: 6bdb566c4b6385779cbd5de0e31471a67fa2ebfcc2442c9921afa9ea5a0912f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Eq: () => u, k6: () => _ });
  var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(361610),
    l = n(860071),
    o = n(287809),
    d = n(38405);
  let c = !1;
  function u(e, t) {
    i.useEffect(
      () => (
        a().forEach(e, (e, n) => {
          (!c &&
            e.length > 50 &&
            ((c = !0),
            d.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
              extra: { count: e.length, guildId: n, reason: t },
            })),
            (0, s.un)(n, e));
        }),
        () => {
          a().forEach(e, (e, t) => (0, s.NE)(t, e));
        }
      ),
      [e, t],
    );
  }
  function _(e, t) {
    let n = i.useMemo(() => (0 === t.length ? {} : { [e]: t }), [e, t]);
    (i.useEffect(() => {
      t.forEach((t) => {
        null == o.default.getUser(t) && l.A.requestMember(e, t);
      });
    }, [e, t]),
      u(n, "useEnsureHydratedGuildUsers"));
  }
}
