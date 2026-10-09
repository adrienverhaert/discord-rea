/* Recovered shipped factory. Module 521981.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5978728..5983345
 * Raw property SHA-256: b97997cb4c1a09ddc89f7d877a0a2b420617d3feb412a0eece79b74f2256b50d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ko: () => E, Ay: () => h, Le: () => A, Tz: () => I, jp: () => f });
  var i = n(46054);
  (n(380610), n(100392));
  var r = n(38405),
    a = n(448767),
    s = n(652215),
    l = n(307731);
  let o = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
  function d(e) {
    if (
      e.some(
        (e) =>
          "emoji" !== e.type &&
          "customEmoji" !== e.type &&
          "soundboard" !== e.type &&
          ("string" != typeof e.content || "" !== e.content.trim()),
      )
    )
      return e;
    let t = 0;
    return (
      e.forEach((e) => {
        if (
          (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1),
          t > l.MAX_EMOJI_TO_BE_JUMBO)
        )
          return !1;
      }),
      t > l.MAX_EMOJI_TO_BE_JUMBO ||
        e.forEach((e) => {
          e.jumboable = !0;
        }),
      e
    );
  }
  function c(e, t) {
    if (e instanceof Array) return e.some((e) => c(e, t));
    let n = t(e);
    return null != n
      ? n
      : e.content instanceof Array
        ? c(e.content, t)
        : e.items instanceof Array && e.items.some((e) => c(e, t));
  }
  function u(e) {
    return c(e, (e) =>
      "spoiler" === e.type
        ? c(e, (e) => "link" === e.type || "attachmentLink" === e.type || null)
        : null,
    );
  }
  function _(e) {
    return "link" === e.type || "attachmentLink" === e.type;
  }
  function E(e, t) {
    let n = A({
        channelId: e.channel_id,
        messageId: e.id,
        authorId: e.author?.id,
        renderOptions: t,
      }),
      i = null != e.webhookId;
    return {
      ...n,
      allowLinks: i || n.allowLinks,
      allowEmojiLinks: i,
      mentionChannels: e.mentionChannels,
      soundboardSounds: e.soundboardSounds ?? [],
    };
  }
  function A(e) {
    let { channelId: t, messageId: n, authorId: i, renderOptions: r } = e;
    return {
      channelId: t,
      messageId: n,
      authorId: i,
      allowLinks: !!r.allowLinks,
      allowDevLinks: !!r.allowDevLinks,
      allowGameMentions: !!r.allowGameMentions,
      allowTimeMentionInput: !!r.allowTimeMentionInput,
      formatInline: !!r.formatInline,
      noStyleAndInteraction: !!r.noStyleAndInteraction,
      allowHeading: !!r.allowHeading,
      allowList: !!r.allowList,
      previewLinkTarget: !!r.previewLinkTarget,
      disableAnimatedEmoji: !!r.disableAnimatedEmoji,
      allowEmojiLinks: !1,
      disableAutoBlockNewlines: !0,
      mentionChannels: [],
      soundboardSounds: [],
      muted: !1,
      unknownUserMentionPlaceholder: !0,
      viewingChannelId: r.viewingChannelId,
      forceWhite: !!r.forceWhite,
      textColor: r.textColor,
      disablePressableChannelMention: !!r.disablePressableChannelMention,
    };
  }
  function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
      let {
          toAST: i = !1,
          hideSimpleEmbedContent: l = !0,
          formatInline: c = !1,
          postProcessor: A,
          contentMessage: h,
        } = n,
        f = !1,
        I = !1,
        p = (h ?? t).content,
        T = e(p, !0, E(t, n), (e, n, E) => {
          let { ast: T, hasSpoilerEmbeds: m } = (function (e) {
            var t, n, i, l, c;
            let E,
              {
                ast: A,
                inline: h,
                hasBailedAst: f,
                message: I,
                contentMessage: p,
                messageContent: T,
                hideSimpleEmbedContent: m,
                formatInline: g,
                toAST: S,
              } = e,
              N = Array.isArray(A) ? A : [A],
              C = !1;
            return (
              f && (N = [{ type: "text", content: T, originalMatch: { index: 0, 0: T } }]),
              m &&
                ((t = N),
                (n = (p ?? I).embeds),
                (N = (0, a.k5)(n) && (0, a.iz)((0, a.dn)(t, _)) ? [] : t)),
              g ||
                I.type === s.lAJ.MEDIA_MENTION_MESSAGE ||
                ((i = N),
                (N = h
                  ? d(i)
                  : ("paragraph" === i[0].type &&
                      i[0].content instanceof Array &&
                      (i[0].content = d(i[0].content)),
                    i))),
              (l = N),
              (E = { onlyLinkContent: (0, a.dn)(l, _).onlyLinks, stripGameServerShareLinks: !0 }),
              (N = l.filter((e) => {
                let t = "link" === e.type ? (e.target ?? null) : null;
                return null == t || !(0, a.c_)(t, E);
              })),
              (p ?? I).embeds.length > 0 &&
                ((c = N),
                (C = h
                  ? u(c)
                  : "paragraph" === c[0].type && c[0].content instanceof Array && u(c[0].content))),
              g &&
                (N = (function e(t) {
                  return (
                    t.forEach((t) => {
                      o.has(t.type) &&
                        null != t.content &&
                        (Array.isArray(t.content)
                          ? e(t.content)
                          : "string" == typeof t.content
                            ? (t.content = t.content.replace(/\n/g, " "))
                            : r.A.captureMessage(
                                `AST node type:${t.type} with content typeof ${typeof t.content}. Keys ${Object.keys(t)}`,
                              ));
                    }),
                    t
                  );
                })(N)),
              { ast: N, hasSpoilerEmbeds: C }
            );
          })({
            ast: e,
            inline: n,
            hasBailedAst: (I = E ?? !1),
            message: t,
            contentMessage: h,
            messageContent: p,
            hideSimpleEmbedContent: l,
            formatInline: c,
            toAST: i,
          });
          f = m;
          let g = T;
          return (null != A && (g = A(g, n)), g);
        });
      return { hasSpoilerEmbeds: f, hasBailedAst: I, content: T };
    })(t.formatInline ? i.A.parseInlineReply : i.A.parse, e, t);
  }
  function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { content: i, guildId: r, channelId: a, messageId: s, authorId: l } = t;
      return e(
        i,
        !0,
        {
          allowLinks: !1,
          allowDevLinks: !1,
          allowEmojiLinks: !1,
          allowGameMentions: !1,
          mentionChannels: [],
          soundboardSounds: [],
          formatInline: !0,
          noStyleAndInteraction: !1,
          allowHeading: !1,
          allowList: !1,
          disableAutoBlockNewlines: !0,
          previewLinkTarget: !1,
          disableAnimatedEmoji: !0,
          guildId: r,
          channelId: a,
          messageId: s,
          authorId: l,
          muted: !1,
          disablePressableChannelMention: !0,
          textColor: n.textColor,
        },
        (e) => (Array.isArray(e) || (e = [e]), e),
      );
    })(e, t, n);
  }
  function I(e, t, n) {
    return (0, i.A.parseAutoModerationSystemMessage)(
      e,
      !0,
      {
        allowLinks: !1,
        allowDevLinks: !1,
        allowEmojiLinks: !1,
        allowGameMentions: !1,
        mentionChannels: [],
        soundboardSounds: [],
        formatInline: !1,
        noStyleAndInteraction: !1,
        allowHeading: !1,
        allowList: !1,
        disableAutoBlockNewlines: !0,
        highlightWord: t,
        disableAnimatedEmoji: !1,
        channelId: n,
        muted: !1,
      },
      (e) => (Array.isArray(e) || (e = [e]), e),
    );
  }
}
