/* Recovered shipped factory. Module 592909.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6730355..6731455
 * Raw property SHA-256: cb6a82c13365dfc18f6cb2b1fb38796fa25f11cbc09ee50b2a63758419080f05
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A0: () => d, VI: () => o, _d: () => u, hd: () => c, j: () => l, rl: () => _ });
  var i = n(945810);
  let r = (0, i.mj)({
      kind: "user",
      name: "2026-07-cod-3pp",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
      kind: "user",
      name: "2026-07-call-of-duty-3pp-expired",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
      kind: "user",
      name: "2026-07-call-of-duty-3pp-marketing",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
      kind: "user",
      name: "2026-07-call-of-duty-3pp-non-sub-marketing",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, i.mj)({
      kind: "user",
      name: "2026-08-call-of-duty-3pp-nagbar",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
  function d(e) {
    let { location: t } = e,
      { enabled: n } = r.useConfig({ location: t });
    return n;
  }
  function c(e) {
    let { location: t } = e,
      { enabled: n } = a.useConfig({ location: t });
    return n;
  }
  function u(e) {
    let { location: t } = e,
      { enabled: n } = s.useConfig({ location: t });
    return n;
  }
  function _(e) {
    let { location: t } = e,
      { enabled: n } = l.useConfig({ location: t });
    return n;
  }
}
