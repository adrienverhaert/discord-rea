/* Recovered shipped factory. Module 792831.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9406333..9407212
 * Raw property SHA-256: 2cdfcea0a84cbde160a6a28f61f4891d34ec70950d1c84dc535ba96258415dcf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i,
    r = n(477900);
  n(582128);
  var a = n(503698),
    s = n.n(a),
    l = n(953727),
    o = n(256109);
  function d(e) {
    let {
      width: t = 24,
      height: n = 24,
      color: i = "currentColor",
      direction: a,
      foreground: d,
      className: c,
      title: u,
      ..._
    } = e;
    return (0, r.jsxs)("svg", {
      ...(0, l.A)(_),
      width: t,
      height: n,
      className: s()(
        c,
        (function (e) {
          switch (e) {
            case "LEFT":
              return o.kb;
            case "RIGHT":
              return o.pG;
            case "UP":
              return null;
            case "DOWN":
              return o.TR;
            case "UP_LEFT":
              return o.l0;
            case "DOWN_RIGHT":
              return o.Nu;
            default:
              throw Error(`Invalid Direction ${e}`);
          }
        })(a),
      ),
      viewBox: "0 0 24 24",
      children: [
        null != u ? (0, r.jsx)("title", { children: u }) : null,
        (0, r.jsx)("polygon", {
          className: d,
          fill: i,
          fillRule: "nonzero",
          points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
        }),
      ],
    });
  }
  d.Directions =
    (((i = {}).LEFT = "LEFT"),
    (i.RIGHT = "RIGHT"),
    (i.UP = "UP"),
    (i.DOWN = "DOWN"),
    (i.UP_LEFT = "UP_LEFT"),
    (i.DOWN_RIGHT = "DOWN_RIGHT"),
    i);
  let c = d;
}
