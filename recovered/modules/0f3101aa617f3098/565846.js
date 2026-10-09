/* Recovered shipped factory. Module 565846.
 * Source: recovered/web/assets/0f3101aa617f3098.js
 * UTF-16 property offsets: 3833..5246
 * Raw property SHA-256: 7d4baac64540d4bc485da6a6781db1acecb0f3de79ffce9d98ffed9135ff1721
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => g });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    l = n(477782),
    a = n(442433),
    d = n(565645),
    s = n(236285),
    o = n(919577),
    u = n(691060),
    c = n(406704),
    h = n(734057),
    A = n(690521);
  n(253913);
  var m = n(660183);
  function g(t) {
    let e = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
      n = (0, c.NI)(e),
      g = (0, r.bG)([h.A], () => h.A.getChannel(e?.parent_id), [e]),
      b = (0, u.OT)(g),
      j = (0, u.kt)(e),
      p = j.length >= 5,
      f = (0, c.Id)(e),
      v = (0, r.bG)(
        [s.Ay],
        () => {
          let t = new Set();
          for (let e of b ?? [])
            if (null != e.emojiId) {
              let n = s.Ay.getUsableCustomEmojiById(e.emojiId);
              n?.animated && t.add(e.emojiId);
            }
          return t;
        },
        [b],
      );
    if (null == e) return ((0, a.Z_)(), null);
    if (
      !n ||
      __OVERLAY__ ||
      !e.isForumPost() ||
      b?.length === 0 ||
      !f ||
      e.isModeratorReportChannel()
    )
      return null;
    let I = b?.map((t) => {
      let n = j.includes(t),
        r = null != t.emojiId || null != t.emojiName;
      return (0, i.jsx)(
        l.sL,
        {
          id: t.id,
          label: t.name,
          leftIcon: r
            ? (0, i.jsx)(d.A, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                animated: null != t.emojiId && v.has(t.emojiId),
              })
            : void 0,
          leadingAccessory: (function (t, e) {
            let { emojiId: n, emojiName: i } = t;
            if (null != n || null != i)
              return {
                type: "emoji",
                emojiId: n,
                src: null == n && null != i ? A.Ay.getURL(i) : void 0,
                animated: null != n && e.has(n),
              };
          })(t, v),
          disabled: p && !n,
          action: () =>
            (function (t) {
              if (null == e) return;
              let n = new Set(j);
              if (n.has(t)) n.delete(t);
              else {
                if (p) return;
                n.add(t);
              }
              let i = Array.from(n).map((t) => t.id);
              o.A.updateForumPostTags(e.id, i);
            })(t),
          checked: n,
        },
        t.id,
      );
    });
    return (0, i.jsx)(l.Dr, { id: "edit-tags", label: m.intl.string(m.t["436ZFw"]), children: I });
  }
}
