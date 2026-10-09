/* Recovered shipped factory. Module 886393.
 * Source: recovered/web/assets/567b8647caf8b40e.js
 * UTF-16 property offsets: 95..550
 * Raw property SHA-256: db245bb847fca2f17fc818ef107c57fbcf3f2850f0d86cf9401f94230d66b439
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, i) {
  i.d(t, { A: () => d });
  var l = i(477900);
  i(582128);
  var s = i(702841),
    a = i(477782),
    c = i(853742),
    e = i(734057),
    o = i(147036),
    r = i(957565),
    u = i(652215),
    p = i(660183);
  function d(n, t, i) {
    let d = (0, s.bG)([e.A], () => (null != n ? e.A.getChannel(n.parent_id) : null));
    return null == n
      ? null
      : (0, l.jsx)(a.Dr, {
          id: "channel-copy-link",
          label: p.intl.string(p.t.WqhZss),
          action: () => {
            (n.isForumPost() &&
              (0, c.jC)({ postId: n.id, location: { section: u.JJy.CONTEXT_MENU } }),
              (0, r.C)((0, o.af)(n, d, t, i)));
          },
        });
  }
}
