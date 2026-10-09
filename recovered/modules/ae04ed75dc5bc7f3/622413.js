/* Recovered shipped factory. Module 622413.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 1458..2015
 * Raw property SHA-256: 8ccda32ae9bca925af6caf73abd03612d9aa41bdd719bbeef4046072347248e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var l = n(503698),
    s = n.n(l),
    r = n(707554),
    a = n(274279);
  let o = function (e) {
    let {
      renderTitle: t,
      renderTagline: n,
      renderActions: l,
      renderMedia: o,
      className: d,
      isHorizontal: c = !1,
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(a.Vs, { [a.ZQ]: c }, d),
      children: [
        null != o && (0, i.jsx)("div", { className: s()(a.$_, { [a.rO]: c }), children: o?.() }),
        (0, i.jsxs)("div", {
          className: a.h_,
          children: [
            (0, i.jsx)(r.H, { className: a.DD, children: t?.() }),
            (0, i.jsx)("div", { className: a.dS, children: n?.() }),
            (0, i.jsx)("div", { className: a.o1, children: l?.() }),
          ],
        }),
      ],
    });
  };
}
