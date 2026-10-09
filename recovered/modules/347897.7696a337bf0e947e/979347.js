/* Recovered shipped factory. Module 979347.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1176124..1177617
 * Raw property SHA-256: a953a354d8f75c94c48ed6dff5a6d4146d956a8313efc3eeaaa3d31f8ea32802
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { A: () => c, t: () => u });
  var n = r(143761);
  let i = "u" > typeof Element && "checkVisibility" in Element.prototype;
  function o(e, t) {
    return i
      ? e.checkVisibility({ visibilityProperty: !0 }) &&
          !e.closest("[data-react-aria-prevent-focus]")
      : "#comment" !== e.nodeName &&
          (function (e) {
            let t = (0, n.mD)(e);
            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
            let { display: r, visibility: i } = e.style,
              o = "none" !== r && "hidden" !== i && "collapse" !== i;
            if (o) {
              let { getComputedStyle: t } = (0, n.mD)(e),
                { display: r, visibility: i } = t(e);
              o = "none" !== r && "hidden" !== i && "collapse" !== i;
            }
            return o;
          })(e) &&
          !e.hasAttribute("hidden") &&
          !e.hasAttribute("data-react-aria-prevent-focus") &&
          ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) &&
          (!e.parentElement || o(e.parentElement, e));
  }
  let a = [
      "input:not([disabled]):not([type=hidden])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "a[href]",
      "area[href]",
      "summary",
      "iframe",
      "object",
      "embed",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable^="false"])',
      "permission",
    ],
    s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
  a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
  let l = a.join(':not([hidden]):not([tabindex="-1"]),');
  function u(e, t) {
    return e.matches(s) && !f(e) && (t?.skipVisibilityCheck || o(e));
  }
  function c(e) {
    return e.matches(l) && o(e) && !f(e);
  }
  function f(e) {
    let t = e;
    for (; null != t;) {
      if (t instanceof (0, n.mD)(t).HTMLElement && t.inert) return !0;
      t = t.parentElement;
    }
    return !1;
  }
}
