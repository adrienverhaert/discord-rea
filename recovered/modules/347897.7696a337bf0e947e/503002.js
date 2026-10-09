/* Recovered shipped factory. Module 503002.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1125961..1126215
 * Raw property SHA-256: 88005ac8d3cff6c0bb2257ec2ee725e4a3e3204fd5311d6fbb8efccf70571b8b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { Q: () => o });
  var n = r(366632);
  let i = new Map();
  function o(e) {
    let { locale: t } = (0, n.Y)(),
      r =
        t +
        (e
          ? Object.entries(e)
              .sort((e, t) => (e[0] < t[0] ? -1 : 1))
              .join()
          : "");
    if (i.has(r)) return i.get(r);
    let o = new Intl.Collator(t, e);
    return (i.set(r, o), o);
  }
}
