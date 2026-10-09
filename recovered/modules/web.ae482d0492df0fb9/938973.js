/* Recovered shipped factory. Module 938973.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6862724..6862978
 * Raw property SHA-256: 6acbacb2249215059438711a99a70595b28f702eecb600ca51c780b5a406088b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => a });
  var i = n(403581),
    r = n(245383);
  function a(e) {
    let { iconOverride: t, variantOverride: n, ...a } = e,
      { buttonText: s, disabled: l } = (0, r.A)(a);
    return {
      subscribeButtonProps: { text: s, disabled: l, icon: t ?? i.t, variant: n ?? "expressive" },
    };
  }
}
