/* Recovered shipped factory. Module 804980.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8313973..8317219
 * Raw property SHA-256: f9f620736bbe1225995d2b89b96ea105ae85cdca576dae6dcc5404ffa09a5702
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => B, LN: () => k });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(778712),
    d = n(866665),
    c = n(834730),
    u = n(821609),
    _ = n(212245),
    E = n(933958),
    A = n(62583),
    h = n(878549),
    f = n(969151),
    I = n(550151),
    p = n(902439),
    T = n(283488),
    m = n(732637),
    g = n(315206),
    S = n(104171),
    N = n(594007),
    C = n(227042),
    O = n(793574),
    R = n(688810),
    L = n(698141),
    y = n(429913),
    D = n(567249),
    v = n(280450),
    b = n(186111),
    M = n(287809),
    P = n(403362),
    U = n(562153),
    w = n(660183),
    G = n(782660);
  let x = ["embedded_background"];
  function k(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: a } = e,
      s = t ?? o._3.SIZE_32,
      l = (0, o.FT)(s);
    return (0, i.jsx)(S.Ay, {
      size: l,
      guildId: n,
      users: a,
      max: 4,
      renderUser: function (e) {
        if (null == e || e === S.mt) return null;
        let t = U.Ay.getName(n, r, e);
        return (0, i.jsx)(
          d.m,
          {
            text: t,
            children: (0, i.jsx)(
              "img",
              { src: e.getAvatarURL(n, l), alt: t, className: G.my },
              e.id,
            ),
          },
          e.id,
        );
      },
    });
  }
  function F(e) {
    let { participants: t, application: n, channel: a, width: d } = e,
      f = d > 400 ? 2 : +(d > 300),
      [p] = d > 400 ? [o._3.SIZE_56, 56] : d > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
      T = (0, l.yK)([M.default, v.default], () =>
        Array.from(t)
          .map((e) => ((0, h.S)(e, v.default) ? null : M.default.getUser(e.userId)))
          .filter(P.Vq),
      ),
      m = (0, l.bG)([E.Ay], () =>
        E.Ay.getEmbeddedActivitiesForChannelIncludingHidden(a.id).find(
          (e) => e.applicationId === n.id,
        ),
      ),
      { analyticsLocations: g } = (0, R.Ay)(),
      S = (0, _.p)(),
      N = U.Ay.getName(a.getGuildId(), a.id, T?.[0]),
      C =
        (0, I.vG)({ userId: M.default.getCurrentUser()?.id, channelId: a.id, application: n }) ===
        I.Gy.CAN_JOIN,
      O = a.getGuildId() ?? void 0,
      y = r.useId(),
      D = n.id,
      b = r.useMemo(() => ({ channel: a, type: "channel" }), [a]),
      { submitting: x } = (0, L.A)({ applicationId: D, context: b, launchingComponentId: y });
    return (0, i.jsxs)("div", {
      className: G.Yi,
      children: [
        (0, i.jsx)(k, { avatarSize: p, guildId: O, channelId: a.id, users: T }),
        (0, i.jsx)(c.E, {
          className: s()(G.m_, { [G.EX]: 0 === f, [G.Y]: 1 === f }),
          variant: "text-sm/normal",
          children:
            T.length > 1
              ? w.intl.formatToPlainString(w.t.cpe6CK, { username: N, count: T.length - 1 })
              : w.intl.formatToPlainString(w.t["7Uuia2"], { username: N }),
        }),
        (0, i.jsx)(c.E, {
          className: s()(G.wx, { [G.EX]: 0 === f, [G.Y]: 1 === f }),
          variant: "text-sm/normal",
          children: n.name,
        }),
        (0, i.jsx)("div", {
          className: G.Uo,
          children: C
            ? (0, i.jsx)(u.$, {
                text: w.intl.string(w.t["4i2vj+"]),
                onClick: function (e) {
                  (e.stopPropagation(),
                    null != m &&
                      (0, A.A)({
                        applicationId: m.applicationId,
                        activityChannelId: a.id,
                        locationObject: S.location,
                        analyticsLocations: g,
                        componentId: y,
                      }));
                },
                loading: x,
                size: 2 === f ? "md" : "sm",
                variant: "overlay-primary",
              })
            : null,
        }),
      ],
    });
  }
  function B(e) {
    let { participant: t, width: n, selected: a, interactible: s, channel: o } = e,
      { analyticsLocations: d } = (0, R.Ay)(O.A.ACTIVITY_TILE),
      { applicationId: c } = t,
      u = (0, p.A)(),
      _ = null != u && (0, f.H)(u.location) === o.id && u.applicationId === c,
      [E] = (0, y.A)([c]),
      { url: A } = (0, T.A)({ applicationId: c, names: x, size: 1024 }),
      h = !a && _,
      I = !_,
      S = !_ && !a,
      L = (0, l.bG)([b.A, D.A], () => (0, C.A)({ LayerStore: b.A, PopoutWindowStore: D.A }));
    return (
      r.useEffect(() => {
        if (h && null != u && !L) {
          let e = (0, N.A)(u.location.id, u.applicationId);
          (0, g.cK)(e);
        }
      }, [h, u, L]),
      (0, i.jsx)(R.f5, {
        value: d,
        children: (0, i.jsxs)("div", {
          className: G.kL,
          children: [
            h &&
              null != u &&
              (0, i.jsx)(m.A, { className: G.pU, embedId: (0, N.A)(u.location.id, c) }),
            I && null != E && null != A && "" !== A
              ? (0, i.jsx)("img", { className: G.j0, alt: E.name, src: A })
              : null,
            S &&
              null != E &&
              (0, i.jsx)(F, { width: n, channel: o, participants: t.participants, application: E }),
            s || I ? null : (0, i.jsx)("div", { className: G.OB }),
          ],
        }),
      })
    );
  }
}
