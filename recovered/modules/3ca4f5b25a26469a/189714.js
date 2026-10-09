/* Recovered shipped factory. Module 189714.
 * Source: recovered/web/assets/3ca4f5b25a26469a.js
 * UTF-16 property offsets: 14380..14790
 * Raw property SHA-256: c12a3ae4eed9d799e4a757a4a9e92d25b78c7e3683a4ea877c9cefcd0906c0ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { $L: () => d, iI: () => o, j: () => u });
  var i = n(17928),
    l = n(873298),
    s = n(594061),
    r = n(617617);
  function u(e, t) {
    return e.vibegrations?.projects[t]?.muted === !0;
  }
  function o(e) {
    return (0, i.bG)([r.A], () => u(r.A.settings, e), [e]);
  }
  function d(e, t) {
    s.wc.updateAsync(
      "vibegrations",
      (n) => {
        if (t) n.projects[e] = l.ky.create({ muted: !0 });
        else {
          if (null == n.projects[e]) return !1;
          delete n.projects[e];
        }
      },
      s.Sb.INFREQUENT_USER_ACTION,
    );
  }
}
