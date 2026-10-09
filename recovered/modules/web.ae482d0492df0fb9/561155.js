/* Recovered shipped factory. Module 561155.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9456763..9457093
 * Raw property SHA-256: 580b87684580c97c49f3bd846b05672b0b2ad096da10f7192aca9d9891a0c832
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900);
  n(582128);
  var r = n(953727);
  function a(e) {
    let { width: t = 12, height: n = 12, color: a = "currentColor", foreground: s, ...l } = e;
    return (0, i.jsx)("svg", {
      ...(0, r.A)(l),
      width: t,
      height: n,
      viewBox: "0 0 12 12",
      children: (0, i.jsx)("rect", {
        className: s,
        fill: a,
        width: "10",
        height: "1",
        x: "1",
        y: "6",
      }),
    });
  }
}
