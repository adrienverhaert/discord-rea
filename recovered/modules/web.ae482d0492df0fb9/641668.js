/* Recovered shipped factory. Module 641668.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10433903..10434467
 * Raw property SHA-256: b14ee03c8144dba7ef057703dcf86c5fdbab5fe14c34d8f15dc0e0fea96e1709
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G: () => l });
  var i = n(582128),
    r = n(561392),
    a = n(499957),
    s = n(844222);
  function l() {
    let { reducedMotion: e } = i.useContext(s.C),
      {
        isOpen: t,
        setIsOpen: n,
        refs: l,
        floatingStyles: o,
        getReferenceProps: d,
        getFloatingProps: c,
        context: u,
      } = (0, r.u)({ placement: "bottom", matchReferenceWidth: !0, transform: e.enabled }),
      { styles: _ } = (0, a.DL)(u, {
        common: { transformOrigin: "top center" },
        initial: { opacity: 0.5, transform: "scaleY(0.96)" },
        duration: 100,
      });
    return {
      isOpen: t,
      setIsOpen: n,
      refs: l,
      floatingStyles: o,
      getReferenceProps: d,
      getFloatingProps: c,
      transitionStyles: e.enabled ? {} : _,
    };
  }
}
