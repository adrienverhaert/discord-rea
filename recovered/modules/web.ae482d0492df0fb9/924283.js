/* Recovered shipped factory. Module 924283.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2829195..2829408
 * Raw property SHA-256: 35248e57f7d3ec264612fee24f1599e46ba72132b5b78a59a0b427a0153f5857
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(174459),
    r = n(933024),
    a = n(652215);
  function s(e) {
    let { tab_opened: t, source: n } = e,
      s = (0, r.A)();
    i.default.track(a.HAw.FRIENDS_LIST_CLICKED, { tab_opened: t, source: n, ...s });
  }
}
