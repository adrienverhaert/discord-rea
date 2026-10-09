/* Recovered shipped factory. Module 108015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4785902..4786299
 * Raw property SHA-256: e3864a3d5a7af12b75bbab9c133f4bd1b6b38de0a9b72d7a2370fccd061f8428
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { RV: () => s, n7: () => l });
  var i = n(574211),
    r = n(660183);
  let a = [i.Z.DESKTOP, i.Z.MOBILE, i.Z.CONSOLE];
  function s(e) {
    if (null == e || 0 === e.length) return [];
    let t = new Set(e);
    return a.filter((e) => t.has(e));
  }
  function l(e) {
    switch (e) {
      case i.Z.DESKTOP:
        return r.intl.string(r.t.KT6uCJ);
      case i.Z.MOBILE:
        return r.intl.string(r.t["0DvssQ"]);
      case i.Z.CONSOLE:
        return r.intl.string(r.t.RT9Ccb);
    }
  }
}
