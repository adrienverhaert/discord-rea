/* Recovered shipped factory. Module 465856.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5974651..5974844
 * Raw property SHA-256: 1de268a33c775f359215e07bdb52a988ea3dba392c69a9f5d74245ccd5ca460b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    if (null != e.title && null != e.filename) {
      let t = e.filename.lastIndexOf("."),
        n = t > 0 ? e.filename.substr(t) : "";
      return e.title + n;
    }
    return e.filename;
  }
  n.d(t, { A: () => i });
}
