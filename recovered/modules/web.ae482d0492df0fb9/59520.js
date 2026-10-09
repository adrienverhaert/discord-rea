/* Recovered shipped factory. Module 59520.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2253074..2253657
 * Raw property SHA-256: 99dfe26490839618ab50a04f92bf8713a0c69e4fce8c84d718c91b0e11eccb54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => l, J: () => s });
  var i = n(582128),
    r = n(435558);
  function a(e) {
    return e;
  }
  let s = function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 ? arguments[3] : void 0,
        s = l(a, t, n, r),
        o = i.useRef(e);
      return (
        i.useEffect(() => {
          o.current = s(e);
        }, [e, s]),
        0 === t ? e : o.current
      );
    },
    l = function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        a = arguments.length > 3 ? arguments[3] : void 0,
        s = i.useRef((0, r.throttle)(e, t, a));
      return (
        i.useEffect(
          () => (
            (s.current = (0, r.throttle)(e, t, a)),
            () => {
              s.current?.cancel();
            }
          ),
          [e, t, a, ...n],
        ),
        s.current
      );
    };
}
