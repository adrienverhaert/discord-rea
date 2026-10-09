/* Recovered shipped factory. Module 450707.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5974845..5976997
 * Raw property SHA-256: bae4c9c5a7e0275ca2ed840650363a0e7b5e9671101eec6cdd30efb0a44f3d4f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => c, u: () => d });
  var i,
    r = n(624793),
    a = n(975571),
    s = n(652215),
    l = n(660183),
    o = n(938213),
    d =
      (((i = {}).GET_PREMIUM = "GET_PREMIUM"),
      (i.JOIN_GUILD = "JOIN_GUILD"),
      (i.UNAVAILABLE = "UNAVAILABLE"),
      i);
  function c(e) {
    if (e.sourceType === r.rV.PACK)
      return {
        type: "UNAVAILABLE",
        text: null,
        description: null,
        emojiDescription: l.intl.format(o.default["/jdd/7"], {
          helpdeskArticle: a.A.getArticleURL(s.MVz.NITRO_EMOJI_PACKS),
        }),
        analyticsType: "Custom Emoji Popout (Nitro Emoji Pack)",
      };
    let t = (function (e) {
        let {
          sourceType: t,
          expressionSourceApplication: n,
          isPremium: i,
          hasJoinedEmojiSourceGuild: a,
          isUnusableRoleSubscriptionEmoji: s,
          isDiscoverable: o,
          emojiComesFromCurrentGuild: d,
          userIsRoleSubscriber: c,
          isRoleSubscriptionEmoji: u,
          shouldHideRoleSubscriptionCTA: _,
          onOpenPremiumSettings: E,
        } = e;
        return t === r.rV.APPLICATION && null != n
          ? l.intl.formatToPlainString(l.t.uERlTd, { appName: n.name })
          : i
            ? a
              ? u
                ? _ && s
                  ? l.intl.string(l.t.xFb68j)
                  : s
                    ? c
                      ? l.intl.string(l.t.vLklfF)
                      : l.intl.string(l.t["g8i/bf"])
                    : l.intl.string(l.t.Eoynp0)
                : d
                  ? l.intl.string(l.t.hU4kIe)
                  : l.intl.string(l.t.GM0xaX)
              : o
                ? l.intl.string(l.t.xE9WGt)
                : l.intl.string(l.t["0LMpW+"])
            : a
              ? _ && s
                ? l.intl.string(l.t.xFb68j)
                : s
                  ? c
                    ? l.intl.string(l.t.vLklfF)
                    : l.intl.string(l.t["g8i/bf"])
                  : d
                    ? l.intl.string(l.t.ICPhqa)
                    : l.intl.string(l.t.jQy3aM)
              : o
                ? l.intl.string(l.t.FJ6Z01)
                : l.intl.format(l.t.U6vLcA, { openPremiumSettings: E });
      })(e),
      n = (function (e) {
        let {
            isPremium: t,
            hasJoinedEmojiSourceGuild: n,
            isUnusableRoleSubscriptionEmoji: i,
            emojiComesFromCurrentGuild: r,
            isDiscoverable: a,
          } = e,
          s = "Custom Emoji Popout";
        return (
          t && !n && a
            ? (s = "Custom Emoji Popout (Cross-Server)")
            : t || !n || i
              ? t ||
                n ||
                (s = a
                  ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)"
                  : "Custom Emoji Popout (Soft Upsell)")
              : (s = r
                  ? "Custom Emoji Popout (Upsell Joined Current-Server)"
                  : "Custom Emoji Popout (Upsell Joined Cross-Server)"),
          s
        );
      })(e);
    return {
      ...(function (e) {
        let {
            isPremium: t,
            hasJoinedEmojiSourceGuild: n,
            isUnusableRoleSubscriptionEmoji: i,
            isDiscoverable: r,
          } = e,
          a = !n && r;
        return t && a
          ? { type: "JOIN_GUILD", text: l.intl.string(l.t.riu2R5), description: null }
          : !t && ((n && !i) || a)
            ? { type: "GET_PREMIUM", text: l.intl.string(l.t["gl/XHJ"]), description: null }
            : { type: "UNAVAILABLE", text: null, description: null };
      })(e),
      emojiDescription: t,
      analyticsType: n,
    };
  }
}
