/* Recovered shipped factory. Module 916603.
 * Source: recovered/web/assets/12f496a51f99ddb4.js
 * UTF-16 property offsets: 95..799
 * Raw property SHA-256: 0759005785baec7346dae820ee0f850abbee4df3b8c8c4050ff0e86158966959
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, _, E) {
  E.d(_, { F: () => i, G: () => I });
  var c = E(73153),
    r = E(636537),
    R = E(913122),
    T = E(652215);
  async function e(t, _) {
    try {
      return (
        await r.Bo.get({
          url: T.Rsh.PRICE_TIERS,
          query: { price_tier_type: _, guild_id: t },
          rejectWithError: !1,
        })
      ).body;
    } catch (t) {
      throw new R.LG(t);
    }
  }
  async function i(t, _) {
    c.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH", guildId: t, priceTierType: _ });
    try {
      let E = await e(t, _);
      c.h.dispatch({
        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
        guildId: t,
        priceTierType: _,
        priceTiers: E,
      });
    } catch (E) {
      c.h.dispatch({
        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
        guildId: t,
        priceTierType: _,
      });
    }
  }
  function I(t) {
    c.h.dispatch({ type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD", guildId: t });
  }
}
