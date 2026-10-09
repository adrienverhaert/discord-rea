/* Recovered shipped factory. Module 509929.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9476555..9476877
 * Raw property SHA-256: 14dc852b321b66fe403c0daa7f12bd4e6322e3d74e2850b68a9aa3850f95c969
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Si: () => l, a$: () => d, sm: () => o });
  var i = n(284009),
    r = n.n(i),
    a = n(274652),
    s = n(292348);
  function l(e, t) {
    r()(e.item.platform === a.x.WEB, "Upload must be in the Web format");
    let n = (0, s.OW)(e, t);
    return Promise.resolve({ file: e.item.file, name: n.filename ?? "" });
  }
  async function o(e) {}
  function d(e) {
    return !1;
  }
}
