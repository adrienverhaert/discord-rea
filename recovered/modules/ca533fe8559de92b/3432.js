/* Recovered shipped factory. Module 3432.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 415556..415863
 * Raw property SHA-256: 8e1b50a9e2af5881f68c405a5e13a0e221c03b23c69f718ebe695ab72c0ada94
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { N: () => s });
  var l = n(477900);
  n(582128);
  var i = n(301677),
    r = n(565645),
    a = n(371794);
  function s(e, t) {
    if (null != t)
      switch (t.type) {
        case i.A.STORE_ASSET:
          let n = (0, a.YE)(e, t.store_asset_id);
          return (0, l.jsx)("img", { src: n, alt: "", className: "emoji" });
        case i.A.EMOJI:
          return (0, l.jsx)(r.A, { emojiName: t.emoji });
      }
  }
}
