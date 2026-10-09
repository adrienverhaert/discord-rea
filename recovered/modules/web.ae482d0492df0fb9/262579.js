/* Recovered shipped factory. Module 262579.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4633068..4633408
 * Raw property SHA-256: 06ec6bfc29a6cbdf365f87e29902c4f9e513f02180bb935dad3f3cc08290db5f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(789645),
    s = n(204651),
    l = n(580954),
    o = n(660183);
  function d(e) {
    let { frameId: t, centerButton: n = !1, ...d } = e,
      c = r.useCallback(() => {
        (0, l.A)().leaveFrame(t);
      }, [t]),
      u = n ? s.l : s.A;
    return (0, i.jsx)(u, {
      ...d,
      isTrayButton: !1,
      onClick: c,
      iconComponent: a.P,
      label: o.intl.string(o.t.cpT0Cq),
    });
  }
}
