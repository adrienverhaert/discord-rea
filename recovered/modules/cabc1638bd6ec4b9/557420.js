/* Recovered shipped factory. Module 557420.
 * Source: recovered/web/assets/cabc1638bd6ec4b9.js
 * UTF-16 property offsets: 94..736
 * Raw property SHA-256: a671e416a98a78b74a3095bfa05ad17b25e27f92675594721e06bd0591a9f313
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { d: () => c });
  var i = t(477900);
  t(582128);
  var l = t(307301),
    r = t(834730),
    s = t(866665),
    a = t(939249),
    o = t(972748);
  function c(e) {
    let { text: n, tooltipText: t, onClick: c, disabled: d } = e;
    return d
      ? (0, i.jsxs)("div", {
          className: o.k,
          children: [
            (0, i.jsx)(l.j, { size: "md", color: "currentColor", className: o.K }),
            (0, i.jsx)(r.E, {
              color: "interactive-text-active",
              variant: "text-md/semibold",
              children: n,
            }),
          ],
        })
      : (0, i.jsx)(s.m, {
          text: t,
          shouldShow: null != t,
          children: (0, i.jsxs)(a.D, {
            className: o.k,
            onClick: c,
            children: [
              (0, i.jsx)(l.j, { size: "md", color: "currentColor", className: o.K }),
              (0, i.jsx)(r.E, {
                color: "interactive-text-active",
                variant: "text-md/semibold",
                children: n,
              }),
            ],
          }),
        });
  }
}
