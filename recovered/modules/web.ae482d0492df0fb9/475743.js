/* Recovered shipped factory. Module 475743.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2250191..2250487
 * Raw property SHA-256: bda8a4d5cc8f169b5c212b65bd0bd2de29124b49abbe36a77e1ae0d2f64f40a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => r, p0: () => a });
  var i = n(582128);
  function r(e) {
    let t = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  }
  function a(e) {
    let { value: t, shouldUpdate: n } = e,
      r = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(() => {
        n && (r.current = t);
      }, [t, n]),
      n ? t : r.current
    );
  }
}
