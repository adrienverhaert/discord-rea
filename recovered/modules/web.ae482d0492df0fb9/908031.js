/* Recovered shipped factory. Module 908031.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9455983..9456414
 * Raw property SHA-256: c72f022ac73d89f0cfd8a76607e9be4177c957113f591a8c954ed6416aa2c3f4
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
      children: (0, i.jsx)("polygon", {
        fill: a,
        className: s,
        fillRule: "evenodd",
        points:
          "11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1",
      }),
    });
  }
}
