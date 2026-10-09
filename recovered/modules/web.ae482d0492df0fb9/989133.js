/* Recovered shipped factory. Module 989133.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3066998..3067244
 * Raw property SHA-256: 796497b8da42ba75b5e1fa79de06cdacdd26d4d77f49bde7db234debe6dbbb24
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    if (e.score === t.score) {
      let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
        i = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
      if (n < i) return -1;
      if (n > i) return 1;
    }
    return t.score - e.score;
  }
  n.d(t, { A: () => i });
}
