/* Recovered shipped factory. Module 638421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2266531..2266992
 * Raw property SHA-256: 45c6ca5453b786b11d9f5705a8763455c20dd447f1a5e28afaeab243068241ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => u });
  var i = n(477900),
    r = n(462180),
    a = n(17928),
    s = n(724066),
    l = n(721668),
    o = n(773669),
    d = n(660183),
    c = n(709327);
  function u(e) {
    let { children: t } = e,
      n = (0, a.bG)([o.default], () => o.default.locale),
      [u, _] = (0, s.hs)((e) => [e.isLoading, e.error], r.x);
    return null != _
      ? (0, i.jsx)(l.A, {
          title: d.intl.formatToPlainString(d.t["7basa2"], { locale: n }),
          note: (0, i.jsx)("span", { children: _.message }),
        })
      : u
        ? __OVERLAY__
          ? null
          : (0, i.jsx)("div", { className: c.L })
        : (t ?? null);
  }
}
