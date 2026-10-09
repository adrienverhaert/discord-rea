/* Recovered shipped factory. Module 379587.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4546383..4546959
 * Raw property SHA-256: 7ef484a2312c29b3763a369d52a6047e3477986580f6228ed1abc7cf117e8b44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => o, m: () => l });
  var i = n(945810);
  let r = (0, i.mj)({
      name: "2026-01-favorites-server",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
    }),
    a = (0, i.mj)({
      name: "2026-08-favorites-server",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
  function s(e, t) {
    return { enabled: e.enabled || t.enabled, isFreemium: e.enabled };
  }
  function l(e) {
    let { location: t } = e;
    return s(a.useConfig({ location: t }), r.useConfig({ location: t }));
  }
  function o(e) {
    let { location: t } = e;
    return s(a.getConfig({ location: t }), r.getConfig({ location: t }));
  }
}
