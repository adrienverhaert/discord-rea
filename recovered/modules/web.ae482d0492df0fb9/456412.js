/* Recovered shipped factory. Module 456412.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 785488..786150
 * Raw property SHA-256: 6eae0d98ce1bf3b5eeb2066d652a8bd11512e36acdad4883197b0c07f952c0c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(770178),
    s = n(765548);
  let l = { width: "100%", height: "100%", display: "flex" },
    o = { width: "100%", height: "100%", flex: 1 };
  function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (n) {
      let { ref: d, ...c } = n,
        [u, _] = r.useState({ width: 0, height: 0 }),
        E = (0, s.A)((e) => {
          if (null != e) {
            let { width: t, height: n } = e;
            _({ width: t, height: n });
          }
        }),
        A = (0, s.A)((e) => {
          E(e.contentRect);
        }),
        h = (0, a.w)(A, [], t);
      return (
        r.useImperativeHandle(d, () => ({
          triggerResize: () => {
            E(h.current?.getBoundingClientRect());
          },
        })),
        (0, i.jsx)("div", {
          ref: h,
          style: l,
          children: (0, i.jsx)(e, { ...c, width: u.width, height: u.height, style: o }),
        })
      );
    };
  }
}
