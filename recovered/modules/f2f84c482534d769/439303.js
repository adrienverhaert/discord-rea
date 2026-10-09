/* Recovered shipped factory. Module 439303.
 * Source: recovered/web/assets/f2f84c482534d769.js
 * UTF-16 property offsets: 94..701
 * Raw property SHA-256: 0cc1a21aa3cc6faf63502a8e955903c30e0bba3c81906e2cb3def6ed511d92a7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { E9: () => d, Ye: () => o, jM: () => u });
  var n,
    r = t(477900),
    a = t(582128),
    i = t(812729),
    s = t.n(i),
    o =
      (((n = {}).COLLECTIBLES_SHOP = "collectibles_shop"),
      (n.COLLECTIBLES_SHOP_BANNER = "collectibles_shop_banner"),
      (n.SLAYER_SERVER_SHOP = "slayer_server_shop"),
      (n.GAME_PROFILE = "game_profile"),
      (n.GAME_PROFILE_GAME_SHOP = "game_profile_game_shop"),
      (n.EMBED = "embed"),
      (n.MULTI_SKU_EMBED = "multi_sku_embed"),
      n);
  let c = a.createContext({});
  function u() {
    return a.useContext(c);
  }
  function d(e) {
    let { newValue: l, children: t } = e,
      n = u(),
      i = a.useMemo(() => {
        let e = { ...n, ...l };
        return s()(n, e) ? (n ?? e) : e;
      }, [n, l]);
    return (0, r.jsx)(c.Provider, { value: i, children: t });
  }
}
