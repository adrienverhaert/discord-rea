/* Recovered shipped factory. Module 853390.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7973896..7974777
 * Raw property SHA-256: 2f8cb3943aac09e5acb719e139081144bc3e78f2a45f7451804f7e4f5262f954
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ar: () => c, Ay: () => u, fU: () => d });
  var i = n(582128),
    r = n(451988),
    a = n(583846),
    s = n(927813);
  function l(e) {
    let t = Math.floor(e) % s.A.Seconds.MINUTE,
      n = Math.floor(e / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
    return { hours: Math.floor(e / s.A.Seconds.HOUR), minutes: n, seconds: t };
  }
  function o(e) {
    return String(e).padStart(2, "0");
  }
  function d(e) {
    let { hours: t, minutes: n, seconds: i } = l(e);
    return 0 === t ? `${o(n)}:${o(i)}` : `${o(t)}:${o(n)}:${o(i)}`;
  }
  function c(e) {
    let { hours: t, minutes: n, seconds: i } = l(e);
    return (0, a.XK)({ hours: t, minutes: n, seconds: i });
  }
  function u(e) {
    let { start: t, end: n } = e,
      [a] = (0, i.useState)(new r.IX()),
      [l, o] = (0, i.useState)(() => Date.now());
    (0, i.useEffect)(
      () => (a.start(s.A.Millis.HALF_SECOND, () => o(Date.now())), () => a.stop()),
      [a],
    );
    let d = (n - t) / s.A.Millis.SECOND,
      c = Math.max(Math.min((l - t) / s.A.Millis.SECOND, d), 0);
    return { elapsed: c, duration: d, percentage: Math.max(Math.min(c / d, 1), 0) };
  }
}
