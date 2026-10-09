/* Recovered shipped factory. Module 93675.
 * Source: recovered/web/assets/2009a2bca8680049.js
 * UTF-16 property offsets: 95..740
 * Raw property SHA-256: abf8636c76cf162fe0fa4286dbcf94f7a46b7ef9135e9c093e1a9978c2cca8f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, t) {
  t.d(r, { f: () => o });
  var a = t(477900);
  t(582128);
  let d =
    "https://cdn.discordapp.com/assets/content/67d52916de05ae5374f3644778bee66c05ae690f07026521e7d55ff97dd80850.riv";
  var n = t(845867),
    s = t(799226);
  let c = { "Server Hub Perk": { on: "boolean", reducedMotion: "boolean" }, _Asset_Pencil: {} },
    i = { "Server Hub Perk": ["State Machine 1"], _Asset_Pencil: ["State Machine 1"] };
  function o(e) {
    let { artboard: r = "Server Hub Perk", stateMachine: t, ...o } = e,
      { status: b, buffer: u } = (0, s.CE)(d),
      p = (0, s.m2)(d);
    return b === s.BW.Loading
      ? null
      : (0, a.jsx)(n.w, {
          ...(p ? { key: "override" } : {}),
          buffer: u,
          artboard: r,
          stateMachine: t,
          artboardProperties: c,
          artboardStateMachines: i,
          ...o,
        });
  }
  o.riveSrc = d;
}
