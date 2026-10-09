/* Recovered shipped factory. Module 283488.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2666219..2666753
 * Raw property SHA-256: 07300b8df88dd7c33bd17c5a2abee962f1e2733c151d0b66d64fcaeb6bf0f21e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(970928);
  let a = ["embedded_cover", "embedded_background"];
  function s(e) {
    let { applicationId: t, size: n, names: s = a, format: l = "png" } = e,
      [o, d] = i.useState(null),
      [c, u] = i.useState(!0),
      _ = (0, r.uD)(t, o, n, l),
      E = i.useRef(s);
    return (
      i.useEffect(() => {
        E.current = s;
      }),
      i.useEffect(() => {
        let { current: e } = E;
        null != t &&
          (0, r.Y)(t).then((t) => {
            for (let [n, i] of (u(!1), Object.entries(t)))
              if (null != i && "" !== i.id && e.includes(i.name)) return void d(i.id);
          });
      }, [t]),
      { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
    );
  }
}
