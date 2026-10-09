/* Recovered shipped factory. Module 607399.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11658730..11659174
 * Raw property SHA-256: 65ff6c074ea6c10a5b8f109d928abdf0edbbd05da99f5600eb2e63754079233f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ct: () => u, Fr: () => d, KY: () => c, v1: () => o });
  var i = n(214958),
    r = n.n(i);
  let a = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    s = new Set(["Android", "iOS", "Windows Phone"]),
    l =
      window?.navigator?.platform === "MacIntel" &&
      void 0 !== window?.navigator?.standalone &&
      window?.navigator?.maxTouchPoints > 1,
    o = a.has(r().product ?? "") || l,
    d = !o && s.has(r()?.os?.family ?? ""),
    c = r()?.os?.family === "iOS",
    u = r()?.os?.family === "Android";
}
