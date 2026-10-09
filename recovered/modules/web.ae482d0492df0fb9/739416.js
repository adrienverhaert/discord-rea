/* Recovered shipped factory. Module 739416.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8388744..8389135
 * Raw property SHA-256: 7979804c889981777895b1de1b63493457714771bf19f1ec5610993c612b6de4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A7: () => c, O7: () => d, bq: () => o });
  var i = n(582128),
    r = n(172218),
    a = n(17928),
    s = n(475743),
    l = n(531685);
  let o = 2;
  function d() {
    let [e, t] = i.useState(!1),
      n = (0, s.Ay)(e),
      a = null !== n && e !== n;
    return { visible: e, visibleChanged: a, targetRef: (0, r.K)((e) => t(e), 0.6) };
  }
  function c() {
    let e = (0, a.bG)([l.A], () => l.A.isFocused()),
      t = (0, s.Ay)(e),
      n = null !== t && e !== t;
    return { focused: e, focusedChanged: n };
  }
}
