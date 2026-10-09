/* Recovered shipped factory. Module 90517.
 * Source: recovered/web/assets/c963c3e89b9b80dd.js
 * UTF-16 property offsets: 95..722
 * Raw property SHA-256: daf194e0fa097d680a8ca17bca98d5c76335dffc84f4806ace23408c5e8b59b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, a) {
  a.d(r, { l: () => s });
  var t = a(477900);
  a(582128);
  let o =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
  var i = a(845867),
    d = a(799226);
  let n = { "Nitro Referral Confirmation - Old Logo": {} },
    c = { "Nitro Referral Confirmation - Old Logo": ["State Machine 1"] };
  function s(e) {
    let { artboard: r = "Nitro Referral Confirmation - Old Logo", stateMachine: a, ...s } = e,
      { status: f, buffer: l } = (0, d.CE)(o),
      p = (0, d.m2)(o);
    return f === d.BW.Loading
      ? null
      : (0, t.jsx)(i.w, {
          ...(p ? { key: "override" } : {}),
          buffer: l,
          artboard: r,
          stateMachine: a,
          artboardProperties: n,
          artboardStateMachines: c,
          ...s,
        });
  }
  s.riveSrc = o;
}
