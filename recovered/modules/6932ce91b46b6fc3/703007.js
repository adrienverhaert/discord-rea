/* Recovered shipped factory. Module 703007.
 * Source: recovered/web/assets/6932ce91b46b6fc3.js
 * UTF-16 property offsets: 94..697
 * Raw property SHA-256: 138f570e9712378f0b2832560e3b309e07f97129a04177278fed2e983d6c5729
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, i, e) {
  e.d(i, { A: () => b });
  var s = e(477900);
  e(582128);
  var d = e(503698),
    r = e.n(d),
    l = e(862482),
    n = e(559106),
    c = e(780777);
  function b(a) {
    let {
      children: i,
      className: e,
      innerClassName: d,
      onChange: b,
      "aria-label": h,
      "aria-describedby": t,
      filters: p,
      multiple: u = !1,
      disabled: x = !1,
      submitting: j = !1,
      ...k
    } = a;
    return (0, s.jsx)(n.vN, {
      within: !0,
      children: (0, s.jsxs)("div", {
        className: r()(e, (0, l.WS)({ ...k, submitting: j, disabled: x })),
        "aria-disabled": x,
        children: [
          (0, s.jsx)("span", { "aria-hidden": !0, className: d, children: i }),
          (0, s.jsx)(c.A, {
            tabIndex: 0,
            onChange: b,
            filters: p,
            multiple: u,
            "aria-label": h,
            "aria-describedby": t,
            disabled: x,
          }),
        ],
      }),
    });
  }
}
