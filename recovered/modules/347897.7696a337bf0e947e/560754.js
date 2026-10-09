/* Recovered shipped factory. Module 560754.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1187511..1187779
 * Raw property SHA-256: 55b0cdb53bef8fc2f9d23ab46cb91283c034567a87e38e5cf76958e4df8a64f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { F: () => o });
  var n = r(241872),
    i = r(582128);
  function o(e, t, r) {
    let o = (0, n.J)((e) => {
      r && !e.defaultPrevented && r(t);
    });
    (0, i.useEffect)(() => {
      let t = e?.current?.form;
      return (
        t?.addEventListener("reset", o),
        () => {
          t?.removeEventListener("reset", o);
        }
      );
    }, [e]);
  }
}
