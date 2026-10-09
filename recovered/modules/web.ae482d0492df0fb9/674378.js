/* Recovered shipped factory. Module 674378.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9596315..9597274
 * Raw property SHA-256: 37e0f9ce0c3846dbe150243a831e052ea3c5cfd8314a1e24b6bc43b0d07b08c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Tr: () => u,
    XZ: () => A,
    gW: () => l,
    kv: () => d,
    r0: () => o,
    uA: () => c,
    z0: () => _,
    zY: () => E,
  });
  var i = n(885386),
    r = n(287809),
    a = n(67480),
    s = n(652215);
  function l(e, t) {
    return `${e}:${t}`;
  }
  function o(e) {
    let [t, n] = e.split(":");
    return { applicationId: t, branchId: n };
  }
  function d(e, t) {
    if (!i.tz.getSetting() || i.jP.getSetting() === s.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(s.hM6.PRIVATE);
  }
  function c(e, t) {
    return 0 === t ? 100 : (e / t) * 100;
  }
  function u(e, t, n) {
    return !(null == t || (n.enabled && t.hasFlag(s.hM6.PRIVATE))) && !t.isHidden();
  }
  function _(e) {
    return null == e
      ? null
      : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING
        ? e
        : null;
  }
  function E(e) {
    return e.reduce(
      (e, t) => {
        let n = _(t);
        return null == n || t.type === s.WTw.UP_TO_DATE
          ? e
          : { total: e.total + Number(n.total), progress: e.progress + Number(n.progress) };
      },
      { total: 0, progress: 0 },
    );
  }
  function A(e) {
    return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), a.A);
  }
}
