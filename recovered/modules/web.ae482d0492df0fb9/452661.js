/* Recovered shipped factory. Module 452661.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2550763..2551638
 * Raw property SHA-256: f9b30323d99c87b6ec5f5a993f7a54bb015891dd60706807cce3a95cfbd713d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { DP: () => A, E5: () => c, II: () => _, NX: () => E, Tn: () => u });
  let i = new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]),
    r = new Set([".heic", ".heif", ".hif"]),
    a = /\.(heic|heif|hif)$/i,
    s = new Set(["image/jxr", "image/vnd.ms-photo"]),
    l = new Set([".jxr", ".wdp", ".hdp"]),
    o = /\.(jxr|wdp|hdp)$/i;
  function d(e) {
    let t = "string" == typeof e.name ? e.name : "",
      n = t.lastIndexOf(".");
    return n < 0 ? null : t.slice(n).toLowerCase();
  }
  function c(e) {
    if (i.has(e.type)) return !0;
    let t = d(e);
    return null != t && r.has(t);
  }
  function u(e) {
    if (s.has(e.type)) return !0;
    let t = d(e);
    return null != t && l.has(t);
  }
  function _(e) {
    return "" !== e.type
      ? e.type
      : ("string" == typeof e.name ? e.name : "").toLowerCase().endsWith(".heic")
        ? "image/heic"
        : "image/heif";
  }
  function E(e) {
    return "" !== e.type ? e.type : "image/jxr";
  }
  function A(e) {
    return a.test(e) ? e.replace(a, ".jpg") : o.test(e) ? e.replace(o, ".jpg") : `${e}.jpg`;
  }
}
