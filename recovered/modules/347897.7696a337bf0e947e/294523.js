/* Recovered shipped factory. Module 294523.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1191593..1191918
 * Raw property SHA-256: 070b104a6261d56aea42dadbc5b0e93399a736dd1fb7453c8a0882546c1166b7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { w: () => o });
  var n = r(241872),
    i = r(582128);
  function o(e, t) {
    let r = (0, i.useRef)(!0),
      o = (0, i.useRef)(null),
      a = (0, n.J)(e);
    ((0, i.useEffect)(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      [],
    ),
      (0, i.useEffect)(() => {
        let e = o.current;
        (r.current ? (r.current = !1) : (!e || t.some((t, r) => !Object.is(t, e[r]))) && a(),
          (o.current = t));
      }, t));
  }
}
