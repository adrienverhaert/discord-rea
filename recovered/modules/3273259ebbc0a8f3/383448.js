/* Recovered shipped factory. Module 383448.
 * Source: recovered/web/assets/3273259ebbc0a8f3.js
 * UTF-16 property offsets: 7139..8236
 * Raw property SHA-256: 11ceac23b6c98e6be4978b098610f25c4f688a52df0f7534a086d045df90178c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => E });
  var i = n(477900);
  n(582128);
  var l = n(503698),
    s = n.n(l),
    r = n(17928),
    a = n(834730),
    d = n(28863),
    o = n(717398),
    u = n(994500),
    c = n(946356),
    m = n(652215),
    A = n(660183),
    f = n(342528);
  function E(t) {
    let { user: e, className: n } = t,
      {
        isPendingIncoming: l,
        isBlocked: E,
        isIgnored: x,
      } = (0, r.cf)([u.A], () => ({
        isPendingIncoming: u.A.getRelationshipType(e.id) === m.eA$.PENDING_INCOMING,
        isBlocked: u.A.isBlocked(e.id),
        isIgnored: u.A.isIgnored(e.id),
      }));
    return E || (x && !l)
      ? (0, i.jsxs)(c.A.Overlay, {
          className: s()(f.k, n),
          children: [
            E &&
              (0, i.jsx)(a.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                children: A.intl.string(A.t["oC/fU6"]),
              }),
            x &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(a.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: A.intl.string(A.t.HXz5An),
                  }),
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(a.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: "\u2022",
                      }),
                      (0, i.jsx)(a.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: A.intl.format(A.t.PrtAqy, {
                          unignoreHook: (t, n) =>
                            (0, i.jsx)(
                              d.Anchor,
                              {
                                onClick: () =>
                                  o.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
                                children: t,
                              },
                              n,
                            ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      : null;
  }
}
