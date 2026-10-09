/* Recovered shipped factory. Module 330976.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1100187..1100713
 * Raw property SHA-256: cd0641879fcfdf953b98f0a584858563f0905226e268769b3f2a186f25730ef0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Ig: () => a, vX: () => o });
  var n = r(256062),
    i = r(143761);
  function o(e) {
    var t, r, o;
    let s,
      l,
      u =
        ((t = (0, i.TW)(e)),
        (s = (0, n.bq)(t)),
        ((l = s?.getAttribute("aria-activedescendant")) && t.getElementById(l)) || s);
    u !== e &&
      (u &&
        ((r = u),
        (o = e),
        r.dispatchEvent(new FocusEvent("blur", { relatedTarget: o })),
        r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: o }))),
      e && a(e, u));
  }
  function a(e, t) {
    (e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
      e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t })));
  }
}
