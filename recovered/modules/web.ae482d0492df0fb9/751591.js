/* Recovered shipped factory. Module 751591.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10406648..10407204
 * Raw property SHA-256: 15bfd5390da467e1c4e026d1713a030f6aa56629c525ce41ce006e1bdfeb138f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => o });
  let i = Object.freeze({ overflowY: "scroll", overflowX: "hidden" }),
    r = Object.freeze({ overflowY: "auto", overflowX: "hidden" }),
    a = Object.freeze({ overflowX: "scroll", overflowY: "hidden" }),
    s = Object.freeze({ overflowX: "auto", overflowY: "hidden" }),
    l = Object.freeze({ overflow: "auto" });
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "scroll",
      o =
        "vertical" === t ? ("auto" === n ? r : i) : "horizontal" === t ? ("auto" === n ? s : a) : l;
    return null != e ? { ...o, ...e } : o;
  }
}
