/* Recovered shipped factory. Module 941861.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10490705..10491844
 * Raw property SHA-256: 44a269013f61834ab5b546d34041e9ba31b87bb4f08af4f7e647c4bb982d483a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Cz: () => s, Rs: () => l, Xb: () => a });
  var i = n(582128);
  let r = ["mousemove", "mousedown", "keydown", "scroll", "touchstart", "pointerdown"];
  function a(e) {
    let [t, n] = i.useState(!1),
      a = i.useRef(null),
      s = i.useCallback(() => {
        (n(!1),
          null != a.current && clearTimeout(a.current),
          (a.current = setTimeout(() => n(!0), e)));
      }, [e]);
    return (
      i.useEffect(() => {
        for (let e of r) window.addEventListener(e, s, { passive: !0, capture: !0 });
        return (
          (a.current = setTimeout(() => n(!0), e)),
          () => {
            for (let e of r) window.removeEventListener(e, s, { capture: !0 });
            null != a.current && clearTimeout(a.current);
          }
        );
      }, [e, s]),
      [t, s]
    );
  }
  function s(e) {
    let [t, n] = i.useState(!0);
    return (
      i.useEffect(() => {
        if (null == e || "u" < typeof IntersectionObserver) return void n(!0);
        let t = new IntersectionObserver((e) => {
          let t = e[e.length - 1];
          null != t && n(t.isIntersecting);
        });
        return (t.observe(e), () => t.disconnect());
      }, [e]),
      t
    );
  }
  function l() {
    let [e, t] = i.useState(!0);
    return (
      i.useEffect(() => {
        function e() {
          return t(!0);
        }
        function n() {
          return t(!1);
        }
        return (
          t(window.document.hasFocus()),
          window.addEventListener("focus", e),
          window.addEventListener("blur", n),
          () => {
            (window.removeEventListener("focus", e), window.removeEventListener("blur", n));
          }
        );
      }, []),
      e
    );
  }
}
