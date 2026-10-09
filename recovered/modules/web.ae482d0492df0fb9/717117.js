/* Recovered shipped factory. Module 717117.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2779437..2779708
 * Raw property SHA-256: e0fbd05c9bf3b18f431c560b6408683d2aa0339fcf90e053baa76039e61ec478
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => a });
  var i = n(582128),
    r = n(202091);
  function a(e) {
    let t = i.forwardRef(function (t, n) {
      return i.createElement(e, { ...t, ref: n });
    });
    return (
      (t.displayName = `AnimatedWithRef(${("displayName" in e ? e.displayName : void 0) ?? e.name})`),
      (0, r.animated)(t)
    );
  }
}
