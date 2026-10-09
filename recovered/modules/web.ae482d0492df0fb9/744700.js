/* Recovered shipped factory. Module 744700.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4798916..4799283
 * Raw property SHA-256: 0b778358863e481c507c594270dc731323834df923e305678b02b6fdb1cba10a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(534573),
    r = n(486020),
    a = n(240248);
  function s(e, t, n) {
    if (null == t) return null;
    switch (t.type) {
      case "hash":
        if ((0, a.uJ)(t.value)) return null;
        return r.Ay.getGameAssetURL({ id: e, hash: t.value, ...n }) ?? null;
      case "url":
        return (0, i.Ec)(t.value, {
          size: n?.size,
          keepAspectRatio: n?.keepAspectRatio,
          format: n?.format,
        });
      default:
        return null;
    }
  }
}
