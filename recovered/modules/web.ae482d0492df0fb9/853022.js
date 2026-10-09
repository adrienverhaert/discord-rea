/* Recovered shipped factory. Module 853022.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2651856..2652146
 * Raw property SHA-256: 47e022147f50980c9c361b1a37cce423df1c8a349422f6d99a98e344e39468cc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b9: () => s, bH: () => r, jA: () => a });
  let i = "discord7937464",
    r = "www.xbox.com";
  function a(e) {
    let t = encodeURIComponent(e);
    return `https://${r}/games/store/title/${t}?ocid=${i}`;
  }
  function s(e) {
    let t = encodeURIComponent(e);
    return `msxbox://game/?productid=${t}&ocid=${i}`;
  }
}
