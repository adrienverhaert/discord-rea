/* Recovered shipped factory. Module 480900.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3970382..3973408
 * Raw property SHA-256: 4c46d502687b76ea1c9334aef0e794e485622f930fe79a42e9500fb3480994b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => M, default: () => P });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(189213),
    d = n(462887),
    c = n(192308),
    u = n(331322),
    _ = n(939249),
    E = n(478016),
    A = n(834730),
    h = n(442433),
    f = n(66834),
    I = n(736653),
    p = n(573648),
    T = n(104171),
    m = n(666860),
    g = n(889227),
    S = n(280450),
    N = n(696451),
    C = n(317525),
    O = n(174459),
    R = n(975571),
    L = n(967740),
    y = n(652215),
    D = n(660183),
    v = n(609548),
    b = n(76145);
  function M(e, t) {
    (0, c.openModalLazy)(async () => {
      let { default: r } = await Promise.all([
        n.e("106980"),
        n.e("839772"),
        n.e("555679"),
        n.e("124060"),
        n.e("146566"),
        n.e("317225"),
        n.e("696123"),
        n.e("553984"),
        n.e("237834"),
        n.e("28561"),
        n.e("138042"),
        n.e("717460"),
        n.e("269178"),
        n.e("373566"),
        n.e("553203"),
        n.e("49282"),
        n.e("580971"),
      ]).then(n.bind(n, 488358));
      return (n) => (0, i.jsx)(r, { role: e, guildId: t, ...n });
    });
  }
  let P = function (e) {
    let { guildId: t, transitionState: a, onClose: c } = e,
      P = (0, l.bG)([C.A], () => C.A.getSortedRoles(t)),
      U = (0, l.bG)([S.default], () => S.default.getId()),
      w = (0, l.bG)([N.Ay], () => N.Ay.getMember(t, U)),
      [G, x] = r.useState([]),
      k = (0, I.Ay)();
    if (
      (r.useEffect(() => {
        0 !== G.length &&
          O.default.track(y.HAw.PASSPORT_ENTRY_VIEWED, {
            role_ids: G.map((e) => {
              let { role_id: t } = e;
              return t;
            }),
            ...(0, m.H$)(t),
          });
      }, [t, G]),
      r.useEffect(() => {
        f.A.getGuildRoleConnectionsConfigurations(t).then((e) => x(e));
      }, [t]),
      null == w)
    )
      return null;
    let F = P.filter((e) => null === e.tags.guild_connections);
    return (0, i.jsx)(o.a, {
      transitionState: a,
      title: D.intl.string(D.t.ghtnss),
      onClose: c,
      subtitle: D.intl.format(D.t["Y+TsEV"], {
        helpdeskArticleUrl: R.A.getArticleURL(y.MVz.CONNECTION_DETAILS),
      }),
      actions: [],
      children: (0, i.jsx)(u.B, {
        padding: { top: 8 },
        children: F.map((e) => {
          let a = w.roles.includes(e.id),
            l = (function (e) {
              let n = G.find((t) => {
                let { role_id: n } = t;
                return n === e;
              });
              if (null == n) return [];
              let r = {};
              for (let e of n.rules.flat()) {
                let a;
                if (null != e.application_id) {
                  let r = n.applications?.[e.application_id];
                  a =
                    r?.bot != null
                      ? (0, i.jsx)("img", {
                          src: new g.A(r.bot).getAvatarURL(t, 24),
                          alt: "",
                          className: s()(v.ZN, b.my),
                        })
                      : null;
                } else {
                  let t = p.A.get(e.connection_type);
                  if (null == t) continue;
                  a = (0, i.jsx)("img", {
                    src: (0, d.q)(k) ? t.icon.lightSVG : t.icon.darkSVG,
                    alt: "",
                    className: b.my,
                  });
                }
                null != a && (r[`${e.connection_type}:${e.application_id}`] = a);
              }
              return Object.values(r);
            })(e.id);
          return (0, i.jsxs)(
            _.D,
            {
              className: s()(v.L5, a ? v.xN : null),
              onClick: a ? void 0 : () => M(e, t),
              onContextMenu: a
                ? (r) => {
                    var a;
                    return (
                      (a = e.id),
                      void (0, h.L3)(r, async () => {
                        let { default: e } = await n.e("868001").then(n.bind(n, 699896));
                        return (n) =>
                          (0, i.jsx)(e, {
                            ...n,
                            roleId: a,
                            onLeaveRole: () => f.A.unassignGuildRoleConnection(t, a),
                          });
                      })
                    );
                  }
                : void 0,
              children: [
                a
                  ? (0, i.jsx)("div", {
                      className: v.UA,
                      children: (0, i.jsx)(E.U, { size: "xs", color: "currentColor" }),
                    })
                  : null,
                (0, i.jsx)(L.A, { guildId: t, role: e, size: 24 }),
                (0, i.jsxs)("div", {
                  className: v.fk,
                  children: [
                    (0, i.jsx)(A.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: v.CF,
                      children: e.name,
                    }),
                    void 0 !== e.description
                      ? (0, i.jsx)(A.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          className: v.Xr,
                          children: e.description,
                        })
                      : null,
                  ],
                }),
                (0, i.jsx)(T.Ay, {
                  showUserPopout: !1,
                  guildId: t,
                  users: l.map(() => null),
                  renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, { children: l[n] }, n),
                  max: 3,
                }),
              ],
            },
            e.id,
          );
        }),
      }),
    });
  };
}
