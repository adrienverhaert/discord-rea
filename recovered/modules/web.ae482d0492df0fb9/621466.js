/* Recovered shipped factory. Module 621466.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11737278..11738472
 * Raw property SHA-256: a50fd46ba12c98385f41c9cb54ecce8b2d412fc35c43488a31db30d4a09edfca
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    if (null == e) return !1;
    let n = e?.ownerDocument?.defaultView;
    if (null == n) return (console.warn("Unable to determine render window for element", e), !1);
    let i = t?.name ?? "Element",
      r = n[i];
    return null == r
      ? (console.warn(`Unable to find element constructor "${i}" in`, n), !1)
      : e instanceof r;
  }
  function r(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
  }
  n.d(t, { BF: () => d, Cw: () => o, p3: () => c, vq: () => i, wB: () => u, xI: () => r });
  let a = /input/i,
    s = /textarea/i,
    l = new Set([
      "text",
      "password",
      "number",
      "date",
      "datetime-local",
      "time",
      "week",
      "month",
      "email",
      "search",
      "tel",
      "url",
    ]);
  function o(e) {
    if (null == e) return !1;
    if ("true" === e.getAttribute("contenteditable") || s.test(e.tagName)) return !0;
    if (a.test(e.tagName)) {
      let t = e.getAttribute("type") ?? "text";
      if (l.has(t)) return !0;
    }
    return !1;
  }
  function d(e) {
    let { target: t } = e;
    return null == t
      ? null
      : "ownerDocument" in t
        ? t.ownerDocument
        : "document" in t
          ? t.document
          : (console.warn("Unable to get owner document from event", e.type), null);
  }
  function c(e, t) {
    let n = e.parentElement;
    for (; null != n;) {
      if (n.classList.contains(t)) return n;
      n = n.parentElement;
    }
    return null;
  }
  function u(e, t) {
    let n = e.parentElement;
    for (; null != n;) {
      if (null != n.getAttribute(t)) return n;
      n = n.parentElement;
    }
    return null;
  }
}
