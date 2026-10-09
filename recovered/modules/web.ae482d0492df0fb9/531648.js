/* Recovered shipped factory. Module 531648.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8092780..8093479
 * Raw property SHA-256: 5f3491757d068a5fb96fb7110bc46bc841473fb1355d19931c05e8223264c924
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E, Q: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(3026),
    a = n(939249),
    s = n(297264),
    l = n(834730),
    o = n(939496),
    d = n(996988),
    c = n(260155);
  function u(e) {
    let { text: t, onClick: n, component: s, ...l } = e,
      { themeType: u } = (0, o.E)(),
      _ = "string" == typeof t ? t.trim() : t;
    if (null == _ || "" === _) return null;
    function E() {
      return u === d.d.MODAL || u === d.d.MODAL_V2
        ? (0, i.jsx)(s, { color: "text-default", ...l, children: _ })
        : (0, i.jsx)(s, {
            color: "text-default",
            ...l,
            children: (0, i.jsx)(r.A, { children: _ }),
          });
    }
    return null != n
      ? (0, i.jsx)(a.D, {
          onClick: (e) => {
            (e.stopPropagation(), n(e));
          },
          className: c.sd,
          children: E(),
        })
      : E();
  }
  function _(e) {
    return (0, i.jsx)(u, { component: s.D, ...e });
  }
  function E(e) {
    return (0, i.jsx)(u, { component: l.E, ...e });
  }
}
