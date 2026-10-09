/* Recovered shipped factory. Module 981133.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4927483..4928024
 * Raw property SHA-256: 434f622f4b16b821faf2ae6647e0b11f6d053878a6d7d0856569e3a226ce82da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { sK: () => l, AL: () => r, RK: () => s });
  var i = n(945810);
  n(506774);
  let r = "private_channel_obfuscation",
    a = (0, i.mj)({
      name: "2026-02-private-channel-hiding",
      kind: "user",
      defaultConfig: { enableObfuscation: !1, enableIntegrityCheck: !1 },
      variations: {
        1: { enableObfuscation: !0, enableIntegrityCheck: !1 },
        2: { enableObfuscation: !0, enableIntegrityCheck: !0 },
        3: { enableObfuscation: !1, enableIntegrityCheck: !1 },
      },
    });
  function s(e) {
    return a.getConfig({ location: e }).enableObfuscation;
  }
  function l(e) {
    return a.useConfig({ location: e }).enableObfuscation;
  }
}
