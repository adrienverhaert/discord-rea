/* Recovered shipped factory. Module 112834.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10487965..10488208
 * Raw property SHA-256: c4169f1024adbc9f0bdb2e163b8eb34996204b209c723baa82fe37c73b973856
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => a });
  var i = n(812743);
  let r = new Map([
    [i.NJ.DARK, i.NJ.ASH],
    [i.NJ.ONYX, i.NJ.ASH],
  ]);
  function a(e) {
    if (null == e) return;
    let t = r.get(e);
    return null != t ? `theme-${t} theme-${e} images-${t}` : `theme-${e} images-${e}`;
  }
}
