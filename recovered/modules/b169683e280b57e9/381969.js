/* Recovered shipped factory. Module 381969.
 * Source: recovered/web/assets/b169683e280b57e9.js
 * UTF-16 property offsets: 544..2282
 * Raw property SHA-256: 22c30d4e9163fd1364fad53552a6491e32de4bc517a92758068ff727e6f76096
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, S) {
  (S.d(e, { A: () => p, k: () => c }), S(321073));
  var n = S(477900),
    i = S(582128),
    _ = S(284009),
    I = S.n(_),
    R = S(702841),
    r = S(554146),
    a = S(666860),
    s = S(826673),
    l = S(440293),
    u = S(599941),
    P = S(960253),
    E = S(164956),
    C = S(976860),
    U = S(808728),
    D = S(71393),
    o = S(174459),
    L = S(486418),
    O = S(920814),
    T = S(284683),
    d = S(634654),
    A = S(652215);
  let h = i.createContext(void 0);
  function c() {
    let t = i.useContext(h);
    return (
      I()(
        null != t,
        "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider",
      ),
      t
    );
  }
  function p(t) {
    let { children: e, initialTab: S, guildId: _ } = t,
      I = (0, R.bG)([D.A], () => D.A.getGuild(_)),
      c = (0, R.bG)([E.A], () => E.A.isViewingServerShop(_)),
      p = (0, L.P)(I),
      B = (0, l.w)(_),
      G = I?.features.has(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) === !0,
      N = (0, P.Oh)(I?.id),
      f = (0, u.Tq)(_)?.server_shop_tab_order,
      v = [],
      V = O.B.GUILD_SHOP_FULL_PREVIEW;
    (c || (G && N)
      ? (v.push(f === T.HA.PRODUCTS_FIRST ? O.B.GUILD_PRODUCTS : O.B.GUILD_ROLE_SUBSCRIPTIONS),
        v.push(f === T.HA.PRODUCTS_FIRST ? O.B.GUILD_ROLE_SUBSCRIPTIONS : O.B.GUILD_PRODUCTS),
        (V = v[0]))
      : G && !N
        ? (v.push(O.B.GUILD_PRODUCTS), (V = O.B.GUILD_PRODUCTS))
        : !G &&
          N &&
          (v.push(O.B.GUILD_ROLE_SUBSCRIPTIONS),
          (V = O.B.GUILD_ROLE_SUBSCRIPTIONS),
          p && v.push(O.B.GUILD_PRODUCTS_PREVIEW)),
      (S = S ?? V));
    let [W, H] = i.useState(S),
      g = (p && !(N && B)) || W === O.B.GUILD_PRODUCTS_PREVIEW;
    return (
      i.useEffect(() => {
        H(S);
      }, [S]),
      (0, n.jsx)(h.Provider, {
        value: {
          selectedTab: W,
          setSelectedTab: H,
          categoryTabs: v,
          isPhantomPreview: g,
          handlePreviewDismiss: function (t) {
            (0, s.Dr)(r.M.SERVER_SHOP_PHANTOM_PREVIEW);
            let e = { ...(0, a.H$)(_) };
            (W === O.B.GUILD_PRODUCTS_PREVIEW
              ? (t.stopPropagation(),
                H(O.B.GUILD_ROLE_SUBSCRIPTIONS),
                (e.action_taken = d.hN.DISMISS_TAB_PREVIEW))
              : ((0, C.bG)(A.BVt.CHANNEL(_, U.Ay.getDefaultChannel(_)?.id)),
                (e.action_taken = d.hN.DISMISS_FULL_PREVIEW)),
              o.default.track(A.HAw.GUILD_SHOP_PREVIEW_CLICK, e));
          },
        },
        children: e,
      })
    );
  }
}
