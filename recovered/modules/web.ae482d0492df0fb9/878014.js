/* Recovered shipped factory. Module 878014.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3028110..3028366
 * Raw property SHA-256: 5b32500542f31e42d9238fcf94197553167999dd82ae83d71c9cfe011951dc2b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return null == e
      ? []
      : "embeddedSurfaces" in e
        ? (e.embeddedSurfaces ?? [])
        : "embedded_surfaces" in e
          ? (e.embedded_surfaces ?? [])
          : [];
  }
  function r(e) {
    return i(e).length > 0;
  }
  function a(e, t) {
    return i(e).includes(t);
  }
  n.d(t, { D: () => r, W: () => a });
}
