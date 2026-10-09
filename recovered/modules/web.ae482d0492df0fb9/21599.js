/* Recovered shipped factory. Module 21599.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5651470..5652610
 * Raw property SHA-256: 24790f579a85c72a9b12bd86536deebb136d103113575c70b0f197d963089e28
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    LO: () => d,
    WU: () => u,
    _U: () => h,
    fB: () => c,
    m0: () => E,
    y$: () => _,
    ys: () => A,
  });
  var i = n(488428),
    r = n(372250),
    a = n(935208);
  let s = "event",
    l = "channel",
    o = "message";
  function d(e) {
    return "string" == typeof e && a.default.isProbablyAValidSnowflake(e) ? e : void 0;
  }
  function c(e, t) {
    let n;
    if (null == t) return e;
    let a = "?" === t.charAt(0) ? t.substring(1) : t;
    try {
      n = i.parse(a);
    } catch (t) {
      return e;
    }
    let c = (0, r.p)(n[s]),
      _ = d((0, r.p)(n[l])),
      E = null != _ ? d((0, r.p)(n[o])) : void 0;
    return u({ baseCode: e, guildScheduledEventId: c, targetChannelId: _, targetMessageId: E });
  }
  function u(e) {
    let { baseCode: t, guildScheduledEventId: n, targetChannelId: r, targetMessageId: a } = e,
      d = {};
    (null != n && (d[s] = n), null != r && ((d[l] = r), null != a && (d[o] = a)));
    let c = i.stringify(d);
    return "" === c ? t : `${t}?${c}`;
  }
  function _(e) {
    let [t, n] = e.split("?");
    if (null == n) return { baseCode: t };
    let a = i.parse(n),
      c = (0, r.p)(a[s]),
      u = d((0, r.p)(a[l])),
      _ = null != u ? d((0, r.p)(a[o])) : void 0;
    return { baseCode: t, guildScheduledEventId: c, targetChannelId: u, targetMessageId: _ };
  }
  function E(e) {
    let [t] = e.split("?");
    return t;
  }
  function A(e) {
    let t = e.indexOf("?");
    return t >= 0 ? e.substring(t) : "";
  }
  function h(e, t) {
    if (null == t) return;
    let n = E(e);
    return `${t}:${n}`;
  }
}
