/* Recovered shipped factory. Module 247186.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5758904..5766719
 * Raw property SHA-256: e68155271466983e25dac8db6f16251ebad9d04bad45db04e4f7699c0e333370
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r3: () => en, Ay: () => e_, xS: () => ed });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(478676),
    o = n(939249),
    d = n(933832),
    c = n(624479),
    u = n(140735),
    _ = n(9578),
    E = n(268218),
    A = n(236285),
    h = n(232042),
    f = n(906754),
    I = n(332173),
    p = n(37632),
    T = n(534890),
    m = n(660183),
    g = n(879386);
  let S = function () {
    return (0, i.jsx)(T.ChatIcon, {
      size: "md",
      color: "currentColor",
      className: g.K,
      "aria-label": m.intl.string(m.t.BAB0yK),
    });
  };
  var N = n(112107),
    C = n(930101),
    O = n(302031),
    R = n(586172),
    L = n(71393),
    y = n(957565),
    D = n(143145),
    v = n(392605),
    b = n(785562),
    M = n(192308),
    P = n(588975),
    U = n(442433),
    w = n(975807),
    G = n(235393),
    x = n(679164),
    k = n(652215),
    F = n(24686),
    B = n(147190),
    V = n(556300),
    H = n(990474);
  n(938796);
  var j = n(380610),
    W = n(435954),
    Y = n(721779),
    K = n(333421),
    $ = n(100392),
    z = n(950980),
    X = n(836156);
  let Z = r.lazy(() =>
      Promise.all([n.e("503634"), n.e("761764"), n.e("218126"), n.e("60800"), n.e("467696")])
        .then(n.bind(n, 881267))
        .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    q = r.lazy(() =>
      Promise.all([n.e("378100"), n.e("886456"), n.e("278078")])
        .then(n.bind(n, 909261))
        .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    Q = RegExp("^" + Y.st.source, Y.st.flags);
  var J = n(569926),
    ee = n(266645);
  function et(e) {
    let { gameId: t, authorId: n } = e;
    return ((0, J.I)(t), (0, i.jsx)(ee.A, { gameId: t, authorId: n }));
  }
  function en() {
    return {
      gameMention: {
        react: (e, t, n) => (0, i.jsx)(et, { gameId: e.gameId, authorId: n.authorId }, n.key),
      },
    };
  }
  var ei = n(881140),
    er = n(279538),
    ea = n(165648),
    es = n(969490);
  let el = { display: "inline" };
  function eo(e) {
    return e.stopPropagation();
  }
  function ed(e) {
    return {
      ...e,
      react: (t, n, r) =>
        (0, i.jsx)("span", { style: el, onClick: eo, children: e.react(t, n, r) }, r.key),
    };
  }
  function ec(e) {
    let { text: t } = e,
      [n, a] = r.useState(!1);
    return (0, i.jsx)(o.D, {
      onClick: function () {
        (0, y.C)(
          t,
          () => a(!0),
          () => a(!1),
        );
      },
      children: n
        ? (0, i.jsx)(d.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
        : (0, i.jsx)(c.CopyIcon, { size: "xs", color: "currentColor" }),
    });
  }
  let eu = {
    blockQuote: {
      react: (e, t, n) =>
        (0, i.jsxs)(
          "div",
          {
            className: ea.h,
            children: [
              (0, i.jsx)("div", { className: ea.r }),
              (0, i.jsx)("blockquote", { children: t(e.content, n) }),
            ],
          },
          n.key,
        ),
    },
    s: { react: (e, t, n) => (0, i.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: {
      react: (e, t, n) =>
        (0, i.jsx)("span", { className: "highlight", children: e.content }, n.key),
    },
    paragraph: { react: (e, t, n) => (0, i.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: {
      react: (e, t, n) =>
        (0, i.jsx)("code", { className: "inline", children: (0, D.t)(e, t, n) }, n.key),
    },
    codeBlock: {
      react(e, t, r) {
        function a() {
          return (0, i.jsx)("code", { className: s()(es.kw, "hljs"), children: (0, D.t)(e, t, r) });
        }
        return (0, i.jsx)(
          "pre",
          {
            children: (0, i.jsxs)("div", {
              className: ea.Hy,
              children: [
                y.p5
                  ? (0, i.jsx)("div", {
                      className: ea.lB,
                      children: (0, i.jsx)(ec, { text: e.content }),
                    })
                  : null,
                (0, i.jsx)(R.l, {
                  location: "MarkupReactRules",
                  code: e.content,
                  lang: e.lang,
                  className: s()(es.kw, "hljs"),
                  highlightedClassName: er.H,
                  children: (0, i.jsx)(E.c2, {
                    createPromise: () =>
                      Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
                    webpackId: 981776,
                    renderFallback: a,
                    render: (t) => {
                      if (!(e.lang && t.hasLanguage(e.lang))) return a();
                      {
                        let n = t.highlight(e.lang, e.content, !0);
                        return null == n
                          ? a()
                          : (0, i.jsx)("code", {
                              className: s()(es.kw, "hljs", n.language),
                              dangerouslySetInnerHTML: { __html: n.value },
                            });
                      }
                    },
                  }),
                }),
              ],
            }),
          },
          r.key,
        );
      },
    },
    text: {
      react: (e, t, n) =>
        "string" == typeof e.content
          ? (0, i.jsx)("span", { children: e.content }, n.key)
          : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
      react: (e, t, n) =>
        (0, i.jsx)(
          O.Ay,
          {
            type: O.Ay.Types.TEXT,
            inline: n.formatInline,
            renderTextElement: (e, t) =>
              null == e || e.type !== _.A || t ? e : r.cloneElement(e, { tabIndex: -1 }),
            children: () => t(e.content, n),
          },
          n.key,
        ),
    },
    soundboard: {
      react: (e, t, n) =>
        (0, i.jsx)(N.Ay, {
          channelId: e.channelId,
          messageId: e.messageId,
          soundId: e.soundId,
          jumbo: e.jumboable,
          messageSounds: n.soundboardSounds,
        }),
    },
    staticRouteLink: {
      react: (e, t, n) =>
        (0, D.d)(e.id)
          ? (0, i.jsxs)(
              I.A,
              {
                role: "link",
                onClick: function () {
                  (0, v.i)(e.guildId, e.id, e.itemId);
                },
                className: "channelMention",
                iconType: e.id,
                children: [
                  t(e.mainContent, n),
                  null != e.itemContent ? (0, i.jsx)(p.A, {}) : null,
                  null != e.itemContent ? t(e.itemContent, n) : null,
                ],
              },
              n.key,
            )
          : null,
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(b.A, { node: e }, n.key) },
    list: {
      react: (e, t, n) => {
        let r = e.ordered ? "ol" : "ul",
          a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
        return (0, l.reactElement)(r, `${n.key}`, {
          start: e.start,
          className: n.formatInline ? ea.tZ : null,
          style: {
            "--totalCharacters": a,
            "--olCounterStart": null == e.start ? void 0 : e.start - 1,
          },
          children: e.items.map((e, r) => {
            let a = (0, l.reactElement)("span", `${n.key}-${r}-innerSpan`, { children: t(e, n) });
            return (0, l.reactElement)("li", `${n.key}-${r}` + r, {
              children: [a, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
            });
          }),
        });
      },
    },
    heading: {
      react: (e, t, n) => {
        let r = (0, l.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
        return (0, l.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
          children: [r, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
          className: n.formatInline ? ea.tZ : null,
        });
      },
    },
    guild: {
      react: (e, t, n) => {
        let r = L.A.getGuild(e.guildId);
        return (0, i.jsx)(f.A, { guild: r, children: (0, D.t)(e, t, n) }, n.key);
      },
    },
    channel: {
      react: (e, t, n) =>
        (0, i.jsx)(h.A, { iconType: e.iconType, children: (0, D.t)(e, t, n) }, n.key),
    },
    message: { react: (e, t, n) => (0, i.jsx)(S, {}, n.key) },
    subtext: {
      react: (e, t, n) => {
        let i = (0, l.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
        return (0, l.reactElement)("small", n?.key != null ? `${n.key}` : null, {
          children: i,
          className: n.formatInline ? ea.tZ : null,
        });
      },
    },
    silentPrefix: {
      react: (e, t, n) =>
        "string" == typeof e.content
          ? (0, i.jsx)("span", { children: e.content }, n.key)
          : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
  };
  function e_(e) {
    let { shouldStopPropagation: t } = e;
    function a(e) {
      return !0 === t ? ed(e) : e;
    }
    return {
      ...eu,
      link: (0, ei.A)(e),
      devLink: {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? Q.exec(e) : null),
        parse: (e, t) => ({ target: e, type: "devLink" }),
        react: (e, t, n) => {
          let a = e.target[0];
          return (0, j.h4)(a)
            ? (0, i.jsxs)(
                r.Fragment,
                {
                  children: [
                    (0, i.jsx)("span", { children: a }),
                    (0, i.jsx)(W.default, { url: a }, a),
                  ],
                },
                n.key,
              )
            : (0, $.W0)(a)
              ? (0, i.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      (0, i.jsx)("span", { children: a }),
                      (0, i.jsx)(z.ExperimentEmbed, { url: a }),
                    ],
                  },
                  n.key,
                )
              : (0, X.i)(a)
                ? (0, i.jsx)(
                    r.Fragment,
                    {
                      children: (0, i.jsxs)(r.Suspense, {
                        fallback: null,
                        children: [(0, i.jsx)("span", { children: a }), (0, i.jsx)(Z, { url: a })],
                      }),
                    },
                    n.key,
                  )
                : (0, K.my)(a)
                  ? (0, i.jsx)(
                      r.Fragment,
                      {
                        children: (0, i.jsxs)(r.Suspense, {
                          fallback: null,
                          children: [
                            (0, i.jsx)("span", { children: a }),
                            (0, i.jsx)(q, { url: a }),
                          ],
                        }),
                      },
                      n.key,
                    )
                  : (0, i.jsx)("span", { children: a }, n.key);
        },
        order: 6,
      },
      emoji: a(
        (function (e) {
          let {
            emojiTooltipPosition: t = "top",
            enableEmojiClick: n = !0,
            emojiFocusable: r = !0,
          } = e;
          return {
            react(e, a, s) {
              let { key: l, channelId: o, messageId: d } = s;
              return e.src
                ? (0, i.jsx)(
                    C.H,
                    {
                      node: e,
                      tooltipPosition: t,
                      enableClick: n,
                      focusable: r,
                      channelId: o,
                      messageId: d,
                    },
                    l,
                  )
                : (0, i.jsx)("span", { children: e.surrogate }, l);
            },
          };
        })(e),
      ),
      customEmoji: a(
        (function (e) {
          let {
            emojiTooltipPosition: t = "top",
            enableEmojiClick: n = !0,
            emojiFocusable: r = !0,
          } = e;
          return {
            react(e, a, s) {
              let { key: l, guildId: o, channelId: d, messageId: c } = s,
                u = A.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
              if (null != u) {
                let t = u.require_colons;
                e = { ...e, name: t ? `:${u.name}:` : u.name };
              }
              return (0, i.jsx)(
                C.X,
                {
                  node: e,
                  tooltipPosition: t,
                  enableClick: n,
                  focusable: r,
                  channelId: d,
                  messageId: c,
                },
                l,
              );
            },
          };
        })(e),
      ),
      channelMention: (0, V.A)(e),
      commandMention: (0, H.Ay)(e),
      attachmentLink: {
        react(t, r, a) {
          let l = a.noStyleAndInteraction
              ? void 0
              : async (n) => {
                  let i = await x.AN(t.attachmentUrl);
                  (e.shouldStopPropagation && n?.stopPropagation(),
                    G.A.trackLinkClicked(i),
                    e.shouldCloseDefaultModals && (0, M.closeAllModals)(),
                    (0, w.A)(i));
                },
            o = a.noStyleAndInteraction
              ? k.tEg
              : (e) => {
                  (0, U.L3)(e, async () => {
                    let { default: e } = await n.e("762529").then(n.bind(n, 740024));
                    return (n) =>
                      (0, i.jsx)(e, {
                        ...n,
                        attachmentUrl: t.attachmentUrl,
                        attachmentName: t.attachmentName,
                      });
                  });
                };
          return (0, i.jsxs)(
            I.A,
            {
              role: "link",
              href: t.attachmentUrl,
              onClick: l,
              onContextMenu: o,
              className: "attachmentLink",
              children: [
                (0, i.jsx)(P.P, { size: "xs", className: s()(B.Kk, F.K), color: "currentColor" }),
                (0, D.t)(t, r, a),
              ],
            },
            a.key,
          );
        },
      },
      soundboard: a(eu.soundboard),
      gameMention: {
        react(e, t, n) {
          let { gameId: r } = e;
          return (0, i.jsx)(ee.A, { gameId: r, authorId: n.authorId }, n.key);
        },
      },
    };
  }
}
