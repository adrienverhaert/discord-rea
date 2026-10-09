/* Recovered shipped factory. Module 903093.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5029070..5030956
 * Raw property SHA-256: 854cc2004d89a4f4ba0d1fb6ea9f97025e842a0fc202cbd7dcba24a170633e36
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    $5: () => _,
    P$: () => c,
    Qm: () => u,
    Z7: () => p,
    _J: () => h,
    di: () => f,
    fi: () => A,
    k$: () => d,
    mR: () => E,
    ql: () => T,
    r2: () => I,
    yc: () => o,
  }),
    n(321073));
  var i = n(536637),
    r = n.n(i),
    a = n(834409),
    s = n(218113),
    l = n(660183);
  let o = { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" };
  function d(e) {
    return (
      (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()()) ||
      (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()())
    );
  }
  function c(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.Qs, "hours") > r()();
  }
  function u(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.Qs, "hours") > r()();
  }
  function _(e) {
    return null == e ? void 0 : c(e) ? a.V.JOIN_RAID : a.V.DM_RAID;
  }
  function E(e, t) {
    let n = [];
    return (e && n.push(a.ZE.INVITES_DISABLED), t && n.push(a.ZE.DMS_DISABLED), n);
  }
  function A(e, t) {
    let n = [];
    return (e || n.push(a.ZE.INVITES_DISABLED), t || n.push(a.ZE.DMS_DISABLED), n);
  }
  function h(e) {
    return (
      (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) ||
      (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date())
    );
  }
  function f(e) {
    return e?.dmsDisabledUntil != null && new Date(e.dmsDisabledUntil) > new Date();
  }
  function I(e) {
    return e?.invitesDisabledUntil != null && new Date(e.invitesDisabledUntil) > new Date();
  }
  function p(e) {
    let t = e?.lockdownDurationHours;
    return null != t && (0, s.aE)().some((e) => e.value === t) ? t : s.f7;
  }
  function T(e, t) {
    let n = e.dmsDisabledUntil ?? e.invitesDisabledUntil;
    if (null == n) return "";
    let i = null != e.dmsDisabledUntil,
      r = null != e.invitesDisabledUntil;
    switch (!0) {
      case i && r:
        return l.intl.formatToPlainString(l.t.hCZitf, {
          guildName: t,
          time: new Date(n).toLocaleString(l.intl.currentLocale, o),
        });
      case i:
        return l.intl.formatToPlainString(l.t["HNKxf+"], {
          guildName: t,
          time: new Date(n).toLocaleString(l.intl.currentLocale, o),
        });
      case r:
        return l.intl.formatToPlainString(l.t.M3iSyL, {
          guildName: t,
          time: new Date(n).toLocaleString(l.intl.currentLocale, o),
        });
      default:
        return "";
    }
  }
}
