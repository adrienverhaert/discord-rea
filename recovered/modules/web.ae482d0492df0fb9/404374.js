/* Recovered shipped factory. Module 404374.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4049714..4051906
 * Raw property SHA-256: 6a798cb565b3b3f28213d9c911100be244f58b6a9aec288ec8a42dac34fe051d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => d, gi: () => l, k0: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(132500),
    s = n(661531);
  let l = Object.freeze({
      PREMIUM_TIER_0: (0, a.A)(),
      PREMIUM_TIER_1: (0, a.A)(),
      PREMIUM_TIER_2: (0, a.A)(),
      PREMIUM_GUILD: (0, a.A)(),
      PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, a.A)(),
    }),
    o = {
      PREMIUM_TIER_0: `url(#${l.PREMIUM_TIER_0})`,
      PREMIUM_TIER_1: `url(#${l.PREMIUM_TIER_1})`,
      PREMIUM_TIER_2: `url(#${l.PREMIUM_TIER_2})`,
      PREMIUM_GUILD: `url(#${l.PREMIUM_GUILD})`,
      PREMIUM_GUILD_BADGE_V2_BACKGROUND: `url(#${l.PREMIUM_GUILD_BADGE_V2_BACKGROUND})`,
    },
    d = r.memo(
      function () {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 1 1",
          style: {
            position: "absolute",
            pointerEvents: "none",
            top: -1,
            left: -1,
            width: 1,
            height: 1,
          },
          "aria-hidden": !0,
          children: [
            (0, i.jsxs)("linearGradient", {
              id: l.PREMIUM_TIER_0,
              children: [
                (0, i.jsx)("stop", {
                  offset: ".1762",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css,
                }),
                (0, i.jsx)("stop", {
                  offset: "0.5351",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css,
                }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css,
                }),
              ],
            }),
            (0, i.jsxs)("linearGradient", {
              id: l.PREMIUM_TIER_1,
              children: [
                (0, i.jsx)("stop", { stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
                }),
              ],
            }),
            (0, i.jsxs)("linearGradient", {
              id: l.PREMIUM_TIER_2,
              children: [
                (0, i.jsx)("stop", {
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css,
                }),
                (0, i.jsx)("stop", {
                  offset: "0.502368",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css,
                }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css,
                }),
              ],
            }),
            (0, i.jsxs)("linearGradient", {
              id: l.PREMIUM_GUILD,
              children: [
                (0, i.jsx)("stop", { stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_BLUE.css }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: s.A.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css,
                }),
              ],
            }),
            (0, i.jsxs)("linearGradient", {
              id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
              gradientTransform: "rotate(45)",
              children: [
                (0, i.jsx)("stop", {
                  offset: "0",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css,
                }),
                (0, i.jsx)("stop", {
                  offset: "1",
                  stopColor: s.A.unsafe_rawColors.PREMIUM_TIER_2_PINK.css,
                }),
              ],
            }),
          ],
        });
      },
      () => !0,
    );
}
