/* Recovered shipped factory. Module 640631.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2855952..2856160
 * Raw property SHA-256: cf233fad6ff127b762b3dc374c440cef1ef07f0beded799d8051b01ec7d174f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => s });
  var i = n(284009),
    r = n.n(i),
    a = n(935208);
  function s(e) {
    r()(
      e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0,
      "messages must be sorted in descending order.",
    );
  }
}
