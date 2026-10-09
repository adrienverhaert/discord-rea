/* Recovered shipped factory. Module 851023.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3364032..3364502
 * Raw property SHA-256: 54bb1a678822c15974c847e7704fc2a60e5f0d93c34b52c428b9abf1874830e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(101555),
    d = n(343005);
  function c(e) {
    let {
      onClick: t,
      children: n,
      tooltip: a,
      dangerous: c = !1,
      className: u,
      "aria-label": _,
    } = e;
    return (0, i.jsx)(l.m, {
      text: a,
      children: (0, i.jsx)(o.$n, {
        onClick: (e) => {
          (e.stopPropagation(), t(e));
        },
        dangerous: c,
        "aria-label": _ ?? a,
        className: u,
        children: r.Children.map(n, (e) =>
          r.isValidElement(e) ? r.cloneElement(e, { className: s()(e.props.className, d.l) }) : e,
        ),
      }),
    });
  }
}
