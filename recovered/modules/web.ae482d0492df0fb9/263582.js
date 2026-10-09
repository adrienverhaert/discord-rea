/* Recovered shipped factory. Module 263582.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3474346..3474808
 * Raw property SHA-256: db015d77394598814f2344b39918988e9f5382ce815217ec1105a0888cb4ac11
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(135621),
    a = n(287809),
    s = n(158045),
    l = n(652215);
  function o(e) {
    let { type: t, textValue: n, maxCharacterCount: o, showRemainingCharsAfterCount: d } = e,
      c = (0, i.bG)([a.default], () =>
        s.Ay.canUseIncreasedMessageLength(a.default.getCurrentUser()),
      ),
      u = (0, r.A)(),
      _ = n.length,
      E = null != t.upsellLongMessages && _ > l.uvi && c,
      A = null != t.upsellLongMessages && !c,
      h = (o ?? u) - _,
      f = h > (d ?? o ?? u / 10);
    return { isVisible: (E && h >= 0) || !f, showsUpsell: A && !f };
  }
}
