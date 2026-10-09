/* Recovered shipped factory. Module 600918.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 156576..156940
 * Raw property SHA-256: 1b518cd79ce783d1c1be8d1e5ce4b3bc0d9eba402123d9ef9831c16be8af243f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { CH: () => o, H5: () => i, NQ: () => a });
  var n = r(582128),
    i = function (e) {
      return (0, n.useEffect)(e, []);
    },
    o = function () {
      var e = (0, n.useState)(0)[1],
        t = (0, n.useRef)(!1);
      return (
        i(function () {
          return function () {
            t.current = !0;
          };
        }),
        function () {
          t.current || e({});
        }
      );
    };
  function a(e) {
    var t = (0, n.useRef)(void 0);
    return (
      (0, n.useEffect)(function () {
        t.current = e;
      }),
      t.current
    );
  }
}
