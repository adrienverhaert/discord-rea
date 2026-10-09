/* Recovered shipped factory. Module 421108.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7498662..7499653
 * Raw property SHA-256: feedefe4f187317b11bc6153f9c4f296cf4e91f25e3ad8de2bec92b115657e7d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ZH: () => c, dA: () => E, tm: () => u, ur: () => _ });
  var i = n(582128),
    r = n(536637),
    a = n.n(r),
    s = n(396583),
    l = n(927813),
    o = n(621547),
    d = n(660183);
  function c(e) {
    if (null == e) return null;
    let t = a()(e).diff(a()(), "seconds");
    if (t <= 0) return null;
    let n = Math.floor(t / l.A.Seconds.DAY),
      i = Math.floor((t % l.A.Seconds.DAY) / l.A.Seconds.HOUR);
    return {
      days: n,
      hours: i,
      minutes: Math.floor((t % l.A.Seconds.HOUR) / l.A.Seconds.MINUTE),
      seconds: t % l.A.Seconds.MINUTE,
    };
  }
  function u(e) {
    let t = null != e && null == c(e),
      [, n] = i.useReducer((e) => e + 1, 0);
    return ((0, s.A)(n, null == e || t ? null : l.A.Millis.SECOND), t);
  }
  function _(e) {
    let t = c(e);
    if (null == t) return null;
    let { days: n, hours: i, minutes: r } = t;
    return n > 0
      ? d.intl.formatToPlainString(d.t.BXpdIg, { days: n })
      : i > 0
        ? d.intl.formatToPlainString(o.default.PPaJSw, { hours: i })
        : d.intl.formatToPlainString(o.default["7Z+aIf"], { minutes: Math.max(r, 1) });
  }
  function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, r] = i.useState(() => _(e));
    return (
      (0, s.A)(
        () => {
          r(_(e));
        },
        t ? 1e3 : null,
      ),
      t ? n : null
    );
  }
}
