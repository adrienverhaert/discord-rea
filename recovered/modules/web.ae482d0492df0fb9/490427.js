/* Recovered shipped factory. Module 490427.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4141086..4141543
 * Raw property SHA-256: e19a4ec521ed7683fcf7d8eea226e1c51d89fed8541432e2f5b9f32584d82ea7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(236285),
    r = n(95701),
    a = n(690521),
    s = n(488926),
    l = n(652215);
  function o(e) {
    let { activity: t, user: n, channel: o } = e;
    if (null == n || t?.type !== l.$pd.CUSTOM_STATUS || null == t.emoji) return !1;
    let d = t.emoji;
    if (null == d.id || null == o || !(0, r.ke)(o.type)) return !0;
    let c = i.Ay.getUsableCustomEmojiById(d.id),
      u = a.Ay.isInternalEmojiForGuildId(c, o.getGuildId()),
      _ = s.$3({ permission: l.xBc.USE_EXTERNAL_EMOJIS, user: n, context: o });
    return !u || _;
  }
}
