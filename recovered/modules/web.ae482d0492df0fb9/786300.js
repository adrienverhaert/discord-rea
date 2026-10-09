/* Recovered shipped factory. Module 786300.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9524758..9525111
 * Raw property SHA-256: f342639f2b769b625660215d2d4a0adb5e7799c055341e64d3933c1d8216255e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900),
    r = n(582128);
  function a() {
    let e = r.createContext(void 0);
    function t() {
      let t = r.useContext(e);
      if (null == t) throw Error("Context was used outside of defined provider.");
      return t;
    }
    return [
      e,
      t,
      function () {
        let n = t();
        return function (t) {
          let { children: r } = t;
          return (0, i.jsx)(e.Provider, { value: n, children: r });
        };
      },
    ];
  }
}
