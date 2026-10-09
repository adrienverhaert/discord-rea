/* Recovered shipped factory. Module 480870.
 * Source: recovered/web/assets/04e47ce223dc697b.js
 * UTF-16 property offsets: 95..1167
 * Raw property SHA-256: 5e4bbda35f010d5316442bd83c7b2e103bb6f7263e45b921bac585b334adf8a8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, l) {
  l.d(i, { A: () => c });
  var n = l(47167),
    a = l(652215),
    e = l(660183);
  function c(t) {
    let { channel: i, isReadonly: l = !1, isCreatingThread: c = !1 } = t,
      r = (0, n.Ay)(i, !0),
      s = (0, n.Ay)(i, !1);
    return null == i || null == r
      ? { placeholder: e.intl.string(e.t.MKDeyL), accessibilityLabel: e.intl.string(e.t.MKDeyL) }
      : c
        ? { placeholder: e.intl.string(e.t.YzpScd), accessibilityLabel: e.intl.string(e.t.YzpScd) }
        : l
          ? {
              placeholder: e.intl.string(e.t["RRvRp/"]),
              accessibilityLabel: e.intl.string(e.t["RRvRp/"]),
            }
          : i.isForumPost()
            ? {
                placeholder: e.intl.formatToPlainString(e.t.Y6qWLc, { channel: r }),
                accessibilityLabel: e.intl.formatToPlainString(e.t.KffKoR, { channel: s }),
              }
            : a.kvI.THREADS.has(i.type)
              ? {
                  placeholder: e.intl.formatToPlainString(e.t["8lzR/R"], { channel: r }),
                  accessibilityLabel: e.intl.formatToPlainString(e.t.UZIMWS, { channel: s }),
                }
              : i.type === a.rbe.DM
                ? {
                    placeholder: e.intl.formatToPlainString(e.t["4c+CAx"], { channel: r }),
                    accessibilityLabel: e.intl.formatToPlainString(e.t.fqOxbV, { channel: s }),
                  }
                : {
                    placeholder: e.intl.formatToPlainString(e.t["8lzR/R"], { channel: r }),
                    accessibilityLabel: e.intl.formatToPlainString(e.t.ih7ZSA, { channel: s }),
                  };
  }
}
