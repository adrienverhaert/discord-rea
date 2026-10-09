/* Recovered shipped factory. Module 149282.
 * Source: recovered/web/assets/4a3eaef5267afb06.js
 * UTF-16 property offsets: 95..699
 * Raw property SHA-256: 4be9ed123bd14437366e50553d90bc365b5927bdc2a3af9cd6733ee490fc542d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, e, t) {
  t.d(e, { s: () => f });
  var r = t(477900);
  t(582128);
  let c =
    "https://cdn.discordapp.com/assets/content/fac02dd925a746a61291e1f604a8affff663e9d8a22cd9b21749991ff745f1f2.riv";
  var d = t(845867),
    s = t(799226);
  let i = { "STACKED COINS": {}, "SINGLE COIN": {} },
    n = { "STACKED COINS": ["State Machine 1"], "SINGLE COIN": ["State Machine 1"] };
  function f(a) {
    let { artboard: e = "STACKED COINS", stateMachine: t, ...f } = a,
      { status: o, buffer: S } = (0, s.CE)(c),
      p = (0, s.m2)(c);
    return o === s.BW.Loading
      ? null
      : (0, r.jsx)(d.w, {
          ...(p ? { key: "override" } : {}),
          buffer: S,
          artboard: e,
          stateMachine: t,
          artboardProperties: i,
          artboardStateMachines: n,
          ...f,
        });
  }
  f.riveSrc = c;
}
