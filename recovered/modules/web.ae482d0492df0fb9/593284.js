/* Recovered shipped factory. Module 593284.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6046767..6051386
 * Raw property SHA-256: 27e45e98495d75c3a2056cbcff7fbdb66ee27165931ce5e301cb045f6627e4ab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => F, Y: () => k });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(317097),
    o = n(17928),
    d = n(473193),
    c = n(364522),
    u = n(545442),
    _ = n(922016),
    E = n(442433),
    A = n(589158),
    h = n(964486),
    f = n(775602),
    I = n(793574),
    p = n(688810),
    T = n(282006),
    m = n(485947),
    g = n(386784),
    S = n(545868),
    N = n(332173),
    C = n(176201),
    O = n(676608),
    R = n(342296),
    L = n(260509),
    y = n(734057),
    D = n(696451),
    v = n(317525),
    b = n(71393),
    M = n(287809),
    P = n(427262),
    U = n(660183),
    w = n(165648),
    G = n(778724);
  function x(e) {
    let { member: t, guildId: a, channelId: s, role: l } = e,
      d = r.useRef(null),
      c = (0, o.bG)([b.A], () => b.A.getGuild(a)?.ownerId, [a]),
      u = (0, o.bG)([M.default], () => M.default.getUser(t.userId), [t.userId]),
      _ = (0, o.bG)([y.A], () => y.A.getChannel(s), [s]);
    return null == u || null == _
      ? null
      : (0, i.jsx)(
          R.A,
          {
            targetElementRef: d,
            userId: t.userId,
            guildId: a,
            channelId: s,
            roleId: l.id,
            spacing: 14,
            children: (e, r) => {
              let { isShown: s } = r;
              return (0, i.jsx)(
                A.A,
                {
                  ref: d,
                  selected: s,
                  colorString: t.colorString,
                  colorStrings: t.colorStrings,
                  colorRoleName: l.name,
                  user: u,
                  isOwner: t.userId === c,
                  nick: t.nick,
                  premiumSince: null == t.premiumSince ? null : new Date(t.premiumSince),
                  channel: _,
                  guildId: a,
                  onContextMenu: (e) => {
                    (0, E.L3)(e, async () => {
                      let { default: e } = await Promise.all([
                        n.e("147119"),
                        n.e("403382"),
                        n.e("597981"),
                        n.e("896691"),
                        n.e("779367"),
                        n.e("992956"),
                        n.e("7452"),
                        n.e("60002"),
                        n.e("189423"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
                        n.e("326692"),
                        n.e("834552"),
                        n.e("993103"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("893190"),
                        n.e("21921"),
                        n.e("189673"),
                        n.e("695445"),
                        n.e("890027"),
                        n.e("536200"),
                        n.e("638221"),
                        n.e("571210"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("676418"),
                        n.e("592028"),
                        n.e("425906"),
                        n.e("123216"),
                        n.e("428296"),
                        n.e("691994"),
                        n.e("166495"),
                        n.e("229787"),
                        n.e("88342"),
                        n.e("147786"),
                        n.e("936320"),
                        n.e("576665"),
                        n.e("482861"),
                        n.e("311802"),
                        n.e("698965"),
                        n.e("869853"),
                        n.e("682337"),
                        n.e("538887"),
                        n.e("235313"),
                        n.e("843719"),
                        n.e("454625"),
                        n.e("332470"),
                        n.e("371133"),
                        n.e("41991"),
                        n.e("959669"),
                        n.e("624198"),
                        n.e("715038"),
                        n.e("436564"),
                        n.e("252229"),
                        n.e("680986"),
                        n.e("245996"),
                        n.e("939171"),
                        n.e("700792"),
                        n.e("592822"),
                        n.e("190889"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("856753"),
                        n.e("61129"),
                        n.e("983525"),
                        n.e("309291"),
                        n.e("242204"),
                        n.e("331203"),
                        n.e("307059"),
                        n.e("449145"),
                        n.e("255302"),
                        n.e("493014"),
                        n.e("349644"),
                        n.e("649520"),
                        n.e("825486"),
                        n.e("522261"),
                        n.e("873786"),
                        n.e("678195"),
                        n.e("951811"),
                        n.e("343116"),
                        n.e("139103"),
                        n.e("713708"),
                        n.e("470314"),
                        n.e("70515"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("774021"),
                        n.e("666939"),
                        n.e("830221"),
                        n.e("324240"),
                        n.e("304866"),
                        n.e("717334"),
                        n.e("184841"),
                      ]).then(n.bind(n, 107632));
                      return (t) =>
                        (0, i.jsx)(e, {
                          ...t,
                          user: u,
                          guildId: a,
                          channel: _,
                          showMediaItems: !0,
                        });
                    });
                  },
                  ...e,
                },
                t.userId,
              );
            },
          },
          t.userId,
        );
  }
  function k(e) {
    let { popoutProps: t, roleId: n, guildId: a, channelId: l } = e,
      u = r.useRef(null);
    ((0, h.Ay)(() => {
      t.setPopoutRef?.(u.current);
    }),
      (0, h.l0)(() => {
        t.setPopoutRef?.(null);
      }));
    let _ = (0, g.A)(a),
      E = (0, o.bG)(
        [b.A],
        () => {
          let e = b.A.getGuild(a);
          return null == e ? null : (0, L.af)(e);
        },
        [a],
      ),
      A = (0, o.yK)(
        [D.Ay, M.default],
        () => {
          let e = D.Ay.getMembers(a),
            t = null == n || n === E ? e : e.filter((e) => e.roles.includes(n));
          return s()(t)
            .filter((e) => null != M.default.getUser(e.userId))
            .sortBy((e) => e.nick ?? P.Ay.getName(M.default.getUser(e.userId)))
            .value();
        },
        [a, n, E],
      ),
      f = (0, o.bG)(
        [v.A],
        () => {
          let e = n ?? E;
          return null == e ? null : v.A.getRole(a, e);
        },
        [a, n, E],
      ),
      I = null == n ? null : _?.[n],
      p = r.useMemo(
        () =>
          null != f
            ? A.map((e) =>
                (0, i.jsx)(x, { member: e, guildId: a, channelId: l, role: f }, e.userId),
              )
            : [],
        [l, a, f, A],
      );
    return null == f
      ? null
      : (0, i.jsx)(d.C.Provider, {
          value: void 0,
          children: (0, i.jsx)("div", {
            className: w.qm,
            ref: u,
            ...t,
            children: (0, i.jsxs)(c.Ip, {
              className: w.bY,
              children: [
                (0, i.jsx)(T.Y, { id: n, guildId: a, title: f.name, count: I, className: w.sd }),
                p,
                null == I || I <= p.length
                  ? null
                  : (0, i.jsx)(m.A, {
                      className: w.sd,
                      children: U.intl.formatToPlainString(U.t["9oMmZC"], { count: I - p.length }),
                    }),
              ],
            }),
          }),
        });
  }
  function F(e) {
    let {
        roleId: t,
        channelId: n,
        roleName: a,
        guildId: s,
        children: d,
        inlinePreview: c = !1,
      } = e,
      { analyticsLocations: E } = (0, p.Ay)(I.A.ROLE_MENTION),
      A = (0, o.bG)([f.Ay], () => f.Ay.roleStyle),
      h = (0, o.bG)([v.A], () => (null == s || null == t ? null : v.A.getRole(s, t))),
      T = (0, O.jV)(s, h),
      m = !c && null != h && !(0, C.Qv)(h),
      g = m && "dot" === A,
      R = m && "username" === A,
      L = T && null != h ? h.colorStrings : null,
      y = r.useRef(null);
    function D(e) {
      return (0, i.jsxs)(N.A, {
        ref: y,
        className: w.Dz,
        color: R ? h.color : null,
        roleColors: R ? L : null,
        ...e,
        children: [
          g &&
            null != h.color &&
            (0, i.jsx)(u.W, {
              color: (0, l.Hl)(h.color),
              colors: L,
              className: G.m,
              background: !1,
              tooltip: !1,
            }),
          d,
        ],
      });
    }
    return c || null == n || null == s || (null == t && "@everyone" !== a)
      ? (0, i.jsx)(p.f5, { value: E, children: D() })
      : (0, i.jsx)(p.f5, {
          value: E,
          children: (0, i.jsx)(_.Y, {
            targetElementRef: y,
            preload: async () => {
              null != t && (await (0, S.a)(s, t));
            },
            renderPopout: (e) =>
              (0, i.jsx)(k, { guildId: s, channelId: n, roleId: t, popoutProps: e }),
            position: "right",
            children: D,
          }),
        });
  }
}
