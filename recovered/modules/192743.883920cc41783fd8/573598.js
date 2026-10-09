/* Recovered shipped factory. Module 573598.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 534937..535280
 * Raw property SHA-256: c138d47999bb09ebfcfdf94bdc4522e1e4723be3820809935c86ca7922edc463
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  var n = Symbol.for("react.transitional.element");
  function r(e, t, r) {
    var o = null;
    if ((void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t))
      for (var a in ((r = {}), t)) "key" !== a && (r[a] = t[a]);
    else r = t;
    return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
  }
  ((t.Fragment = Symbol.for("react.fragment")), (t.jsx = r), (t.jsxs = r));
}
