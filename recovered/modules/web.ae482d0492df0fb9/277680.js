/* Recovered shipped factory. Module 277680.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4996113..4996381
 * Raw property SHA-256: 795878209343321c5ef5470271de6aac2730a0620ae20d0a4832f5507e4e9cfe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(660183);
  let r = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  function a(e) {
    let t = i.intl.string(i.t.FeUKeA);
    return (
      null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
      { sanitizedTitle: t.replace(r, ""), title: t }
    );
  }
}
