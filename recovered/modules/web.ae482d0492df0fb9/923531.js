/* Recovered shipped factory. Module 923531.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6513305..6515428
 * Raw property SHA-256: f65b5f767e9dd49905671eb0c343b84c1f6f59548dbcb62061ab528e97305670
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    FT: () => I,
    Is: () => h,
    Mo: () => T,
    Nv: () => p,
    VE: () => S,
    aq: () => A,
    cV: () => u,
    fq: () => N,
    hO: () => g,
    i6: () => _,
    jp: () => c,
    kN: () => m,
    mV: () => E,
    u7: () => f,
  });
  var i = n(536637),
    r = n.n(i),
    a = n(899847),
    s = n(695515),
    l = n(191627),
    o = n(273665),
    d = n(660183);
  function c() {
    return {
      today: d.intl.string(o.default.VjIAQQ),
      yesterday: d.intl.string(o.default["2a8xHY"]),
      days: o.default.Xt6oND,
    };
  }
  function u(e) {
    return e
      ? {
          today: d.intl.string(o.default["2AtcIs"]),
          yesterday: d.intl.string(o.default.stOECr),
          days: o.default.n8n5Ba,
        }
      : {
          today: d.intl.string(o.default.g1ZX6m),
          yesterday: d.intl.string(o.default.s3qSVt),
          days: o.default.f1UJiC,
        };
  }
  function _(e, t, n) {
    let i = r()().diff(r()(e), "s"),
      a = t(),
      s = r()(e).format("LL");
    return i < 86400
      ? a.today
      : i < 172800
        ? a.yesterday
        : d.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(i / 86400), n ?? 999) });
  }
  function E(e, t) {
    let n = r()().diff(r()(e), "s"),
      i = t(),
      a = r()(e).format("LL");
    return n < 60
      ? i.seconds
      : n < 3600
        ? d.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) })
        : n < 86400
          ? d.intl.formatToPlainString(i.hours, { count: Math.floor(n / 3600) })
          : n < 172800
            ? i.yesterday
            : n < 604800
              ? d.intl.formatToPlainString(i.days, { count: Math.floor(n / 86400) })
              : d.intl.formatToPlainString(i.date, { date: a });
  }
  function A(e) {
    return (
      e.display_type === l.NV.USER_ADD ||
      e.display_type === l.NV.USER_INTERACTION ||
      e.display_type === l.NV.USER_CALLED
    );
  }
  function h(e) {
    return e.display_type === l.NV.GUILD_ADD || e.display_type === l.NV.GUILD_INTERACTION;
  }
  function f(e) {
    return e.display_type === l.NV.PURCHASES;
  }
  function I(e) {
    return e.display_type === l.NV.GIFTS;
  }
  function p(e) {
    return l.bo[e.code] ?? l.vW.GENERIC_ERROR;
  }
  function T() {
    let e = m();
    return 0 === e.size
      ? []
      : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
  }
  function m() {
    return new Map(l.ly);
  }
  function g(e) {
    let t = Math.floor(e / 60),
      n = e % 60;
    return t > 0 ? `${t}h ${n}m` : `${n}m`;
  }
  function S() {
    if (s.A.getAreLinkedUsersProcessed()) return s.A.getLinkedUsers();
    a.Ay.fetchLinkedUsers();
  }
  function N(e, t) {
    return t > 0 && 0 === e
      ? d.intl.formatToPlainString(o.default["L/Cj7S"], { callCount: t })
      : e > 0 && 0 === t
        ? d.intl.formatToPlainString(o.default["6X1F0i"], { messageCount: e })
        : d.intl.formatToPlainString(o.default.IYqGMG, { messageCount: e, callCount: t });
  }
}
