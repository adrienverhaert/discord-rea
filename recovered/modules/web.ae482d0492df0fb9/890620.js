/* Recovered shipped factory. Module 890620.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5151535..5151902
 * Raw property SHA-256: 7fc61c2d7ce3253720bc5fcd860950669f096a2afb744aba79fc88982f2071ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C7: () => c, YN: () => o, Yb: () => d });
  var i = n(196765),
    r = n(121894),
    a = n(625494),
    s = n(652215);
  let l = Object.freeze({ hasUnsubmittedChanges: !1, shouldShowWarning: !1 }),
    o = (0, i.v)((e) => l);
  function d(e) {
    (0, r.r)(() => o.setState({ hasUnsubmittedChanges: e }));
  }
  function c(e) {
    ((0, r.r)(() => o.setState({ shouldShowWarning: e })),
      e && a._.dispatch(s.jej.EMPHASIZE_NOTICE));
  }
}
