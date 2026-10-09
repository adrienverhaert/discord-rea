/* Recovered shipped factory. Module 256497.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5418326..5418688
 * Raw property SHA-256: 99e3ad03f646ec35421e7b9d7e35f46aabe78bac2358f1ce593cbaeff80a1853
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { aA: () => s, fX: () => l });
  var i = n(945810),
    r = n(652215);
  let a = (0, i.mj)({
    kind: "guild",
    name: "2026-09-guild-spaces",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function s(e, t) {
    return null != e && a.getConfig({ guildId: e, location: t }).enabled;
  }
  function l(e, t) {
    return a.useConfig({ guildId: e ?? r.dJq, location: t }).enabled;
  }
}
