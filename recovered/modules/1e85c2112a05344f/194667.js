/* Recovered shipped factory. Module 194667.
 * Source: recovered/web/assets/1e85c2112a05344f.js
 * UTF-16 property offsets: 95..509
 * Raw property SHA-256: c9d1ea1cf1b66a149cf4978aee065fd391fc6b4871cd6b537051899b78997a1b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, a, l) {
  l.d(a, { X: () => i });
  var e = l(477900);
  l(582128);
  var r = l(834730),
    c = l(122203);
  function i(s) {
    let { title: a, subtitle: l, icon: i } = s;
    return (0, e.jsxs)("div", {
      className: c.iE,
      children: [
        null != i && (0, e.jsx)(i, { size: "xs", color: "currentColor", className: c.Kk }),
        (0, e.jsx)(r.E, { variant: "text-md/normal", className: c.DD, children: a }),
        null != l && "" !== l
          ? (0, e.jsx)(r.E, { variant: "text-xs/semibold", className: c.VA, children: l })
          : null,
      ],
    });
  }
}
