/* Recovered shipped factory. Module 227042.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2700615..2700844
 * Raw property SHA-256: fef5166cd5614bed07ae33f4476939190c01668b341c200e1139cf7da037bc3a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(652215);
  function r(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
      r = t.hasLayers(),
      a = n.getWindowOpen(i.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(i.MLl.ACTIVITY_POPOUT);
    return r && !a;
  }
}
