/* Recovered shipped factory. Module 9578.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 743244..743774
 * Raw property SHA-256: a5ef8ead7c917fc6ffd9fff1d9c78bb01693b0c0afd76fac0372cfca99a38417
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(478676),
    s = n.n(a),
    l = n(28863),
    o = n(793574),
    d = n(688810),
    c = n(123917);
  let u = r.memo(function (e) {
    let {
        onClick: t,
        trusted: n,
        title: a,
        href: u,
        children: _,
        messageId: E,
        channelId: A,
        ...h
      } = e,
      { analyticsLocations: f } = (0, d.Ay)(o.A.MASKED_LINK),
      I = r.useCallback((t) => (0, c.h)(e, t, f), [f, e]),
      p = r.useCallback(
        (e) => {
          1 === e.button && I(e);
        },
        [I],
      ),
      T = s().sanitizeUrl(u);
    return (0, i.jsx)(l.Anchor, {
      ...h,
      title: a,
      target: "_blank",
      rel: "noreferrer noopener",
      href: T,
      onClick: I,
      onAuxClick: p,
      children: _ ?? a,
    });
  });
}
