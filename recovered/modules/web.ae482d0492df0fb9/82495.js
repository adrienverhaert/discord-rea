/* Recovered shipped factory. Module 82495.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2249847..2250190
 * Raw property SHA-256: 480d9799221308b96d471507c51af68ec22304ca68f1d230efa7e5457f70163e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(582128);
  function r(e, t, n) {
    let r = i.useRef(e);
    return (
      i.useEffect(() => {
        function e(e) {
          null == r.current ||
            r.current.contains(e.target) ||
            (n?.current != null && n.current.contains(e.target)) ||
            t();
        }
        return (
          document.addEventListener("mousedown", e),
          () => {
            document.removeEventListener("mousedown", e);
          }
        );
      }, [r, t, n]),
      r
    );
  }
}
