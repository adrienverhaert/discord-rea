/* Recovered shipped factory. Module 271478.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4405769..4406162
 * Raw property SHA-256: 779f96c7ab9e8797b794254fbedd9a0f19c881b19e75ef425325f19b5a164a69
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { g: () => l });
  var i = n(477900);
  n(582128);
  var r = n(691885),
    a = n(100392),
    s = n(102609);
  function l(e) {
    let { label: t, description: n, experiment: l, experimentId: o, overrideInfo: d } = e;
    return (0, i.jsx)(r.l, {
      label: t,
      description: n,
      value: null != d ? d.variantId : void 0,
      clearable: null != d,
      options: (0, a.hp)(l),
      onSelectionChange: (e) => (0, s.t$)(l.system, o, e),
      selectionMode: "single",
      fullWidth: !0,
    });
  }
}
