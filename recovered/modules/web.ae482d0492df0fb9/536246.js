/* Recovered shipped factory. Module 536246.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2648487..2648773
 * Raw property SHA-256: cef85cfd1490e7b9b16785b7cf670c1666a213a04516b755af3ca90bed336f72
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => r });
  var i = n(818023);
  function r(e) {
    return (
      null != e &&
      (!!i._J.has(e.id) ||
        ("embeddedActivityConfig" in e
          ? e.embeddedActivityConfig?.displays_advertisements === !0
          : "embedded_activity_config" in e &&
            e.embedded_activity_config?.displays_advertisements === !0))
    );
  }
}
