/* Recovered shipped factory. Module 864197.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3087570..3088272
 * Raw property SHA-256: 7ebdbeb2e259845ce51b65e9110268d4b019da0b29a112c8bc5c42ac0645ee42
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { g: () => s, z: () => a }), n(321073));
  var i = n(70283);
  let r = [i.$.STREAMING, i.$.GAME_VARIETY, i.$.GAME_TIME, i.$.ACCOUNT_AGE];
  function a(e) {
    let t = new Map(e.map((e) => [e.badge_id, e])),
      n = [];
    for (let e of r) {
      let i = t.get(e);
      if (i?.owned !== !0 || null == i.current_tier) continue;
      let r = i.tiers.findIndex((e) => e.key === i.current_tier);
      if (-1 === r) continue;
      let a = i.tiers[r],
        s = a?.complex_icon_static_url ?? a?.simple_icon_url;
      null != s && n.push({ iconUrl: s, tierIndex: r });
    }
    return n
      .sort((e, t) => t.tierIndex - e.tierIndex)
      .slice(0, 3)
      .map((e) => e.iconUrl);
  }
  function s(e) {
    let [t, n, i] = e;
    return null == t
      ? { type: "fallback" }
      : null == n
        ? { type: "single", iconUrls: [t] }
        : null == i
          ? { type: "pair", iconUrls: [n, t] }
          : { type: "trio", iconUrls: [n, t, i] };
  }
}
