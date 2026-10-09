/* Recovered shipped factory. Module 669510.
 * Source: recovered/web/assets/3ef6861df6635ca9.js
 * UTF-16 property offsets: 15788..16777
 * Raw property SHA-256: c4e375ac57856ec5fe8cd3dfdf11eb64dd8fd1828c5b0ed48fa69ad99f2f4349
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { _: () => u });
  var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(834730),
    o = n(580630),
    c = n(777485),
    d = n(564082);
  function u(e) {
    let {
        label: t,
        totalLineItemLabel: n,
        totalLineItemLabelSubText: r,
        totalLineItemValueSubText: u,
        showTotalWhenCollapsed: m = !1,
        lineItems: x,
        intervalType: f,
        intervalCount: h,
        currency: p,
        defaultExpanded: j = !1,
      } = e,
      [v, g] = a.useState(j),
      E = a.useMemo(() => {
        let e = x.reduce((e, t) => e + t.amount, 0),
          t = (0, o.$g)(e, p);
        return (0, o.CE)(t, f, h);
      }, [x, p, f, h]),
      N = (0, l.jsxs)(c.h, {
        label: t,
        defaultExpanded: j,
        isDisabled: x.length <= 0,
        onExpandedChange: g,
        collapsedContent: m
          ? (0, l.jsx)(i.E, { variant: "text-md/normal", color: "text-subtle", children: E })
          : null,
        children: [
          x.map((e) => {
            let { formatWithoutRate: t, amount: n, ...a } = e,
              r = (0, o.$g)(n, p),
              s = t ? r : (0, o.CE)(r, f, h);
            return (0, l.jsx)(c.i, { value: s, ...a }, a.id);
          }),
          (0, l.jsx)("div", { className: d.m }),
          (0, l.jsx)(c.i, {
            label: n ?? t,
            labelSubText: r,
            value: E,
            subText: u,
            color: "text-strong",
            valueColor: "text-strong",
          }),
        ],
      });
    return (0, l.jsx)("div", { className: s()({ [d.k]: v }), children: N });
  }
}
