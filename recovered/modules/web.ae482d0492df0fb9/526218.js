/* Recovered shipped factory. Module 526218.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11645922..11646241
 * Raw property SHA-256: db0ac9548c6426cae31ba59c1d9063489599ab8f8bca5ad2f2e103f664e83905
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => r, t: () => a });
  var i,
    r = (((i = {})[(i.MANAGED = 0)] = "MANAGED"), (i[(i.QUICK = 1)] = "QUICK"), i);
  function a(e) {
    if (null == e) return null;
    let [t, n] = e.split("-"),
      i = (function (e) {
        switch (e) {
          case "0":
            return 0;
          case "1":
            return 1;
          default:
            return null;
        }
      })(t);
    return null == i ? null : { type: i, encodedLinkId: e, decodedLinkId: n };
  }
}
