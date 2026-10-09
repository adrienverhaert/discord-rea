/* Recovered shipped factory. Module 827669.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3241452..3241731
 * Raw property SHA-256: 21c5e9eae489c0cbfcf664635d759b0b9e8d0e5414d63acbf9f5aa048a82c5f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Dx: () => s, EZ: () => l, KW: () => r, P7: () => a });
  let i = [];
  function r(e) {
    return `<@$${e}>`;
  }
  let a = /^<@\$(\d+)>/,
    s = RegExp(a.source.replace(/^\^/, ""), "g");
  function l(e) {
    if (!e.includes("<@$")) return i;
    let t = [...e.matchAll(s)].map((e) => e[1]);
    return t.length > 0 ? t : i;
  }
}
