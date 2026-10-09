/* Recovered shipped factory. Module 155545.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9456415..9456762
 * Raw property SHA-256: 11185606ef8c8982b6e8e88bdf529cd35caebf1a2cf3ee9de0d47f78cc76d1ec
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
        width: "9",
        height: "9",
        x: "1.5",
        y: "1.5",
        fill: "none",
        stroke: a,
        className: s,
      }),
    });
  }
}
