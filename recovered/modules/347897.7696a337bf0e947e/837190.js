/* Recovered shipped factory. Module 837190.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1218559..1218871
 * Raw property SHA-256: a55ceab0ce684a8563f76ab61822f273d919c4cc4c1c9177535dab71227b6e95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { H: () => o });
  var n = r(526739),
    i = r(582128);
  function o(e = {}) {
    let { isReadOnly: t } = e,
      [r, a] = (0, n.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
      [s] = (0, i.useState)(r);
    return {
      isSelected: r,
      defaultSelected: e.defaultSelected ?? s,
      setSelected: function (e) {
        t || a(e);
      },
      toggle: function () {
        t || a(!r);
      },
    };
  }
}
