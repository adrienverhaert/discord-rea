/* Recovered shipped factory. Module 11043.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 917058..917300
 * Raw property SHA-256: 6485660063bbe3015fcb956617f3b67a8617d428f177c259babb4fe4c48243e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { A: () => s });
  var n = r(582128),
    i = r(859141),
    o = r.n(i),
    a = {};
  function s(e, t) {
    void 0 === t && (t = o());
    var r = (0, n.useRef)(a),
      i = r.current;
    return (
      (0, n.useEffect)(function () {
        r.current = i;
      }),
      (r.current !== a && t(e, r.current)) || (i = e),
      i
    );
  }
}
