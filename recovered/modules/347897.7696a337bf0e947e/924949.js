/* Recovered shipped factory. Module 924949.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1187249..1187510
 * Raw property SHA-256: 82f394bb31ade11f570fa897eab9c7f056ee11a35f65dbecd42afa47de6a8817
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { _: () => o });
  var n = r(241872),
    i = r(582128);
  function o(e, t, r, o) {
    let a = (0, n.J)(r),
      s = null == r;
    (0, i.useEffect)(() => {
      if (s || !e.current) return;
      let r = e.current;
      return (
        r.addEventListener(t, a, o),
        () => {
          r.removeEventListener(t, a, o);
        }
      );
    }, [e, t, o, s]);
  }
}
