/* Recovered shipped factory. Module 650019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5897516..5897797
 * Raw property SHA-256: 401fb85c7c0696e55bdc2fc34c2cdc42002f1c5de43890825c729d7d1e3248b3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => a }), n(938796));
  var i = n(613373),
    r = n(652215);
  function a(e, t) {
    if (null == e) return null;
    let n = t?.find((t) => t.id === e.attachment_id);
    return {
      timestamp: (0, i.rB)(e.timestamp / 1e3),
      title: n?.title ?? null,
      isClip: ((n?.flags ?? 0) & r.sbO.IS_CLIP) != 0,
      attachment: n,
    };
  }
}
