/* Recovered shipped factory. Module 111487.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5235241..5235661
 * Raw property SHA-256: f96c3e24f0ca311fb4a415ddba7617d2030a60a972bf97a72de09c41b5f1f931
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, g: () => l });
  var i = n(477900);
  n(582128);
  var r = n(565645),
    a = n(202027),
    s = n(771653);
  let l = { SMALL: s.EX, MEDIUM: s.Y, LARGE: s.as };
  function o(e) {
    let { emojiId: t, emojiName: n, defaultComponent: s, size: o = l.MEDIUM } = e,
      { customEmoji: d, unicodeEmoji: c } = (0, a.A)(t, n);
    return null == d && null == c
      ? s
      : (0, i.jsx)(r.A, {
          emojiName: null != d ? d?.name : n,
          animated: null != d && d.animated,
          emojiId: d?.id,
          autoplay: !0,
          className: o,
        });
  }
}
