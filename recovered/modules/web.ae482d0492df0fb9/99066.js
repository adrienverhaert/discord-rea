/* Recovered shipped factory. Module 99066.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3982153..3982950
 * Raw property SHA-256: c14b03310e83de3d4603fc5ed025b35afc33a4f2f3c15bbed8d45e848e57e7b7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { VS: () => d, sE: () => c, t4: () => o });
  var i = n(600975),
    r = n(945810),
    a = n(519059),
    s = n(688151);
  let l = (0, r.mj)({
      kind: "user",
      name: "2026-03-content-inventory-memberlist-and-ranker",
      defaultConfig: { enabled: !0, impressionCappingEnabled: !0 },
      variations: { 0: { enabled: !1, impressionCappingEnabled: !1 } },
    }),
    o = (0, i.C)({
      kind: "user",
      id: "2025-09_hotwheels_nvidia_boost",
      label: "Next iteration of the activity feed ranking model.",
      commonTriggerPoint: s.$G.CONNECTION_OPEN,
      defaultConfig: {},
      treatments: [
        { id: 16, label: "ML model V3 - Nvidia small boost", config: {} },
        { id: 17, label: "ML model V3 - Nvidia big boost", config: {} },
      ],
    });
  function d(e) {
    let { enabled: t } = l.getConfig({ location: e }),
      n = (0, a.HF)(e);
    return t || n;
  }
  function c(e) {
    let { enabled: t, impressionCappingEnabled: n } = l.getConfig({ location: e });
    return t && !0 === n;
  }
}
