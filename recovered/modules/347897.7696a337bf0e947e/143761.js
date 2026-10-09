/* Recovered shipped factory. Module 143761.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1173427..1173892
 * Raw property SHA-256: 40b2a635bbf702713ac671feab770f569e27cb983b6f37f6eb91ece3ba190fb4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Ng: () => a, TW: () => n, mD: () => i });
  let n = (e) => {
      var t, r;
      return "object" == typeof (t = e) && null != t && "window" in t && t.window === t
        ? e.document
        : o((r = e)) && 9 === r.nodeType
          ? e
          : (e?.ownerDocument ?? ("u" > typeof document ? document : void 0));
    },
    i = (e) => {
      let t = n(e);
      return t?.defaultView ?? ("u" > typeof window ? window : void 0);
    };
  function o(e) {
    return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType;
  }
  function a(e) {
    return o(e) && 11 === e.nodeType && "host" in e;
  }
}
