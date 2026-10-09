/* Recovered shipped factory. Module 416626.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 276854..277294
 * Raw property SHA-256: 7561e842b1ab5e79022560d146c63bf5e67941a559fa13c5a0eb30ab119b6227
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { M: () => o });
  var r = n(688331),
    i = n(804524);
  let o = (0, r._C)(() => ({
    name: "HttpContext",
    preprocessEvent(e) {
      if (!i.jf.navigator && !i.jf.location && !i.jf.document) return;
      let t = (e.request && e.request.url) || (i.jf.location && i.jf.location.href),
        { referrer: n } = i.jf.document || {},
        { userAgent: r } = i.jf.navigator || {},
        o = {
          ...(e.request && e.request.headers),
          ...(n && { Referer: n }),
          ...(r && { "User-Agent": r }),
        },
        a = { ...e.request, ...(t && { url: t }), headers: o };
      e.request = a;
    },
  }));
}
