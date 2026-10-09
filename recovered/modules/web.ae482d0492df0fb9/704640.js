/* Recovered shipped factory. Module 704640.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6876510..6877814
 * Raw property SHA-256: dd9527868805c470491c2b4733a8094e36a9352d7c70785a14e207fb41722e69
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(661531),
    r = n(202541);
  let a = r.Ac.PREMIUM_TENURE_1_MONTH,
    s = {
      [r.Ac.PREMIUM_TENURE_1_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END",
      },
      [r.Ac.PREMIUM_TENURE_3_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END",
      },
      [r.Ac.PREMIUM_TENURE_6_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END",
      },
      [r.Ac.PREMIUM_TENURE_12_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END",
      },
      [r.Ac.PREMIUM_TENURE_24_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END",
      },
      [r.Ac.PREMIUM_TENURE_36_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END",
      },
      [r.Ac.PREMIUM_TENURE_60_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END",
      },
      [r.Ac.PREMIUM_TENURE_72_MONTH]: {
        start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
        end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END",
      },
    };
  function l(e) {
    let t = s[e ?? a] ?? s[a];
    return { type: "custom", start: i.A.colors[t.start], end: i.A.colors[t.end] };
  }
}
