/* Recovered shipped factory. Module 583094.
 * Source: recovered/web/assets/d48587c2c6177728.js
 * UTF-16 property offsets: 95..692
 * Raw property SHA-256: 82f39458cca352c4f3a3c0b2a07919a2310b85c8b1b887637a2b47e0647b7834
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  e.d(r, { u: () => n });
  var a = e(477900);
  e(582128);
  let i =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
  var o = e(845867),
    s = e(799226);
  let c = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } },
    d = { "Nitro Wishlist": ["State Machine 1"] };
  function n(t) {
    let { artboard: r = "Nitro Wishlist", stateMachine: e, ...n } = t,
      { status: b, buffer: h } = (0, s.CE)(i),
      l = (0, s.m2)(i);
    return b === s.BW.Loading
      ? null
      : (0, a.jsx)(o.w, {
          ...(l ? { key: "override" } : {}),
          buffer: h,
          artboard: r,
          stateMachine: e,
          artboardProperties: c,
          artboardStateMachines: d,
          ...n,
        });
  }
  n.riveSrc = i;
}
