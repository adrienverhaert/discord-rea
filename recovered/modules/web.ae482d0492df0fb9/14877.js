/* Recovered shipped factory. Module 14877.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9886709..9886986
 * Raw property SHA-256: b12ceeeb272d17dfe896157c5eb86b08d1c56c3d109db75908e75f9ca95771b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => a });
  var i = n(582128),
    r = n(765178);
  function a(e) {
    let { currentLength: t, maxLength: n, message: a } = e,
      s = i.useRef(!1);
    i.useEffect(() => {
      if (null == n) return;
      let e = t >= n;
      e && !s.current ? ((s.current = !0), r.O.announce(a, "assertive")) : e || (s.current = !1);
    }, [t, n, a]);
  }
}
