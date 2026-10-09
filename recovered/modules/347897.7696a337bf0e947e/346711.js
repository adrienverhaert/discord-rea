/* Recovered shipped factory. Module 346711.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1175041..1175759
 * Raw property SHA-256: 35fd01afb12c1a2756c38377f6f4de92943b7664af0383dff364cf3aaa09a450
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(e) {
    if (
      (function () {
        if (null == i) {
          i = !1;
          try {
            document.createElement("div").focus({
              get preventScroll() {
                return ((i = !0), !0);
              },
            });
          } catch {}
        }
        return i;
      })()
    )
      e.focus({ preventScroll: !0 });
    else {
      let t = (function (e) {
        let t = e.parentNode,
          r = [],
          n = document.scrollingElement || document.documentElement;
        for (; t instanceof HTMLElement && t !== n;)
          ((t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
            r.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
            (t = t.parentNode));
        return (
          n instanceof HTMLElement &&
            r.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
          r
        );
      })(e);
      (e.focus(),
        (function (e) {
          for (let { element: t, scrollTop: r, scrollLeft: n } of e)
            ((t.scrollTop = r), (t.scrollLeft = n));
        })(t));
    }
  }
  r.d(t, { e: () => n });
  let i = null;
}
