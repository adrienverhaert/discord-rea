/* Recovered shipped factory. Module 975807.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2522433..2522798
 * Raw property SHA-256: 799ce80979ea0a93921ca3056badb98798e376237f2200ba3d3261ef62bbdb00
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(723702);
  async function r(e, t) {
    let { default: r } = await Promise.resolve().then(n.bind(n, 983555)),
      a = r(e, { skipExtensionCheck: t, analyticsLocations: [] });
    if (null != a) a(null);
    else if (i.isPlatformEmbedded) window.open(e);
    else {
      let t = document.createElement("a");
      ((t.href = e), (t.target = "_blank"), (t.rel = "noreferrer noopener"), t.click());
    }
  }
}
