/* Recovered shipped factory. Module 576761.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7074989..7075592
 * Raw property SHA-256: b1f313599727a74c63812ae34b92f4767d55ee00384cd2d9dbfb82f6fa13b2ab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B9: () => u, Et: () => d, MA: () => o, _z: () => _ });
  var i,
    r,
    a = n(441574),
    s = n(349871),
    l = n(158045),
    o =
      (((i = {}).UPSELL = "UPSELL"),
      (i.NITRO = "NITRO"),
      (i.XBOX_GAME_PASS = "XBOX_GAME_PASS"),
      (i.INELIGIBLE = "INELIGIBLE"),
      i),
    d = (((r = {}).NITRO = "nitro"), (r.XBOX_GAME_PASS = "xbox_game_pass"), r);
  let c = ["XBOX_GAME_PASS", "NITRO"];
  function u(e) {
    return c.includes(e);
  }
  function _(e) {
    if (!l.Ay.canUseMoreQuestOrbs(e)) return null;
    let t = (0, s.kQ)(e?.perks, a.bb.MORE_QUEST_ORBS);
    return t?.includes(a.g$.SOURCE_NITRO) || l.Ay.canUseQuestOrbMultiplier(e)
      ? "nitro"
      : t?.includes(a.g$.SOURCE_THIRDPARTY_CROISSANT)
        ? "xbox_game_pass"
        : null;
  }
}
