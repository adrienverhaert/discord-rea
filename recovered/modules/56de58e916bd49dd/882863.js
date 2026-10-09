/* Recovered shipped factory. Module 882863.
 * Source: recovered/web/assets/56de58e916bd49dd.js
 * UTF-16 property offsets: 1984..2470
 * Raw property SHA-256: 4ee8b4c1a8ff833646f9fc8ae08b52889f2691c44c3c40744c85974977585560
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => l });
  var r = e(582128),
    a = e(157559),
    i = e(913122),
    c = e(306522),
    o = e(975807),
    s = e(660183);
  function l(t, n) {
    let [e, l] = r.useState(!1);
    return {
      isLoading: e,
      downloadAttachment: r.useCallback(
        async (e) => {
          if (null != t && null != n) {
            l(!0);
            try {
              let { url: r } = await c.P0({ guildId: t, productId: n, attachmentId: e });
              await (0, o.A)(r);
            } catch (n) {
              let t = n instanceof i.LG ? n.getAnyErrorMessage() : void 0;
              a.A.show({ title: s.intl.string(s.t.R0RpRX), body: t ?? s.intl.string(s.t.eAn6z2) });
            } finally {
              l(!1);
            }
          }
        },
        [t, n],
      ),
    };
  }
}
