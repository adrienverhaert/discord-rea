/* Recovered shipped factory. Module 490682.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3436073..3437123
 * Raw property SHA-256: 0c2d082d5552e0930b2b392781eab5141e8808e704cba0ab89c96f503fed8e88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => l }), n(321073));
  var i = n(22098),
    r = n(820066);
  let a = new Set(["line", "blockQuote"]),
    s = [];
  function l(e, t, n) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [l, d] = t;
    if (1 !== d.length || !r.AS.isInTypes(l, a)) return s;
    let { entries: c, serializedChildren: u } = r.cv.markdown(l, n, !0),
      _ = [];
    for (let t = 0; t < c.length; t++) {
      let n = c[t];
      if (n.attributes.length > 0 && n.text.length > 0) {
        let a = c[t - 1],
          s = c[t + 1],
          l = {
            anchor: (0, i.Q)(e, d, u, n.start),
            focus: (0, i.Q)(e, d, u, n.start + n.text.length),
          },
          E = r.VW.nodes(e, { at: l, mode: "lowest", voids: !1 }),
          A = {};
        for (let e of n.attributes)
          if (((A[e] = !0), "syntaxBefore" === e && null != s))
            for (let e of s.attributes) o(e) || (A[`before_${e}`] = !0);
          else if ("syntaxAfter" === e && null != a)
            for (let e of a.attributes) o(e) || (A[`after_${e}`] = !0);
        for (let [t, n] of E) {
          let t = { anchor: r.VW.start(e, n), focus: r.VW.end(e, n) };
          (r.Kh.isBefore(t.anchor, l.anchor) && (t.anchor = l.anchor),
            r.Kh.isAfter(t.focus, l.focus) && (t.focus = l.focus),
            _.push({ ...A, ...t }));
        }
      }
    }
    return _;
  }
  function o(e) {
    return (
      "syntaxBefore" === e ||
      "syntaxAfter" === e ||
      e.startsWith("before_") ||
      e.startsWith("after_")
    );
  }
}
