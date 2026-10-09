/* Recovered shipped factory. Module 360161.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2930669..2931203
 * Raw property SHA-256: a9f950d246a8e24e82c81bef3029bd4f9ac3c920faeb7ff915740cf954459727
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $7: () => s, Bk: () => l, Xf: () => o, a5: () => a, lM: () => d });
  var i = n(166862),
    r = n(73510);
  function a(e) {
    let t = e.toLowerCase() === r.NH.toLowerCase(),
      n = e.toLowerCase() === r.oW.toLowerCase();
    if (t || n) return t;
  }
  function s(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("string" == typeof n) return n;
  }
  function l(e, t) {
    let n = e?.find((e) => e.displayName === t)?.value;
    if ("number" == typeof n) return n;
  }
  function o(e, t, n) {
    return s(i.A.getAutocompleteLastChoices(e, t), n);
  }
  function d(e, t, n) {
    return l(i.A.getAutocompleteLastChoices(e, t), n);
  }
}
