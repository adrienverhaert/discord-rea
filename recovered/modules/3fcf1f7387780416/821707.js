/* Recovered shipped factory. Module 821707.
 * Source: recovered/web/assets/3fcf1f7387780416.js
 * UTF-16 property offsets: 3120..3561
 * Raw property SHA-256: 22cf86bd2e6a960af7d303146ce5f5b2b61c444d9b8c432133b568268fd98f26
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  r.d(e, { A: () => u });
  var i = r(477900);
  r(582128);
  var n = r(403581),
    l = r(834730),
    a = r(336089);
  function u(t) {
    let { discountedPrice: e, normalPrice: r } = t;
    return (0, i.jsxs)("div", {
      className: a.k,
      children: [
        (0, i.jsx)(n.t, { size: "xs", color: "currentColor" }),
        (0, i.jsx)(l.E, {
          variant: "text-md/bold",
          color: "currentColor",
          lineClamp: 1,
          children: e,
        }),
        null != r &&
          (0, i.jsx)(l.E, {
            className: a.o,
            variant: "text-xs/medium",
            color: "text-muted",
            lineClamp: 1,
            children: r,
          }),
      ],
    });
  }
}
