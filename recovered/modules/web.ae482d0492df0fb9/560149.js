/* Recovered shipped factory. Module 560149.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3705142..3718369
 * Raw property SHA-256: 73778020a7a69c1c95c5eaa335ac570b7732b731cdc107fbdc37701a167bf5a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => eg });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(494012),
    o = n(505124),
    d = n(43990),
    c = n(683574);
  n(938796);
  var u = n(202091),
    _ = n(665260),
    E = n(17928),
    A = n(683063),
    h = n(922016),
    f = n(460905),
    I = n(110384),
    p = n(939249),
    T = n(834730),
    m = n(148494),
    g = n(565645),
    S = n(822123),
    N = n(879064),
    C = n(73153),
    O = n(95701),
    R = n(232835),
    L = n(652215);
  let y = (0, E.UT)(R.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (R.A.isReady(e.id) ? R.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
      if (null == n || null == t) return;
      let r = e.id;
      (await m.A.fetchMessages({ channelId: r, limit: 100 }),
        await C.h.dispatch({
          type: "THREAD_CREATE",
          channel: new O.Lt({
            id: r,
            parent_id: t,
            type: L.rbe.MEDIA_THREAD,
            name: e.title ?? "",
            guild_id: n ?? L.eGj,
            ownerId: i,
            threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
          }),
          messageId: e.id,
        }));
    },
    getIsLoading: (e) => R.A.isLoadingMessages(e.id),
  });
  var D = n(451909),
    v = n(118517),
    b = n(747926),
    M = n(280450),
    P = n(734057),
    U = n(625494),
    w = n(475815);
  let G = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
  });
  var x = n(307731),
    k = n(381941),
    F = n(704796),
    B = n(660183),
    V = n(455871);
  function H(e, t) {
    let n = t?.current?.currentTime;
    return null == n
      ? { attachment_id: e, timestamp: 0 }
      : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
  }
  function j(e) {
    let {
        controlBarAnimationSpring: t,
        attachment: n,
        channelId: a,
        messageId: l,
        guildId: o,
        hidden: d = !1,
        containerWidth: C,
      } = e,
      O = n.id,
      j = (0, S.QZ)(o),
      Y = null != C && C < 460,
      K = j.slice(0, Y ? 2 : 3),
      $ = (0, E.bG)([R.A], () => R.A.getMessage(a, l), [a, l]),
      z = (0, E.bG)([P.A], () => P.A.getChannel(a), [a]),
      X = (0, E.bG)([P.A], () => P.A.getChannel(O), [O]),
      { enableMediaComments: Z } = G.useConfig({ location: "ClipEmbedMediaMentionBar" }),
      { activeLayer: q, videoRef: Q } = (0, c.X$)(),
      J = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
      { data: ee } = y(n, a, o, $?.author.id, Z && J),
      et = r.useRef(null);
    function en(e, t) {
      (e?.stopPropagation(),
        (function (e) {
          if (null == z || null == $ || null == l || null == Q?.current?.currentTime) return;
          let t =
              null != e.id
                ? !0 === e.animated
                  ? `<a:${e.originalName ?? e.name}:${e.id}>`
                  : `<:${e.originalName ?? e.name}:${e.id}>`
                : "surrogates" in e && null != e.surrogates
                  ? e.surrogates
                  : e.name,
            n = $.author.id === M.default.getId();
          m.A.sendMessage(z.id, D.Ay.parse(z, t), !1, {
            location: k.Hx.MEDIA_MENTION,
            doNotScroll: !0,
            messageReference: {
              channel_id: z.id,
              guild_id: z.getGuildId() ?? void 0,
              message_id: l,
            },
            allowedMentions: { replied_user: !n },
            mediaMention: H(O, Q),
          });
        })(t));
    }
    let ei = ee?.length ?? 0;
    if (!Z || null == z || null == l) return null;
    let er = B.intl.formatToPlainString(F.default.OYDyt2, { count: ei });
    return (0, i.jsxs)(u.animated.div, {
      className: s()(V.M0, { [V.pd]: d }),
      inert: d,
      style: {
        opacity: (0, u.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (d ? 0 : `${e}`)),
        transform: (0, u.to)(
          [t.to({ range: [0, 1], output: [50, 0] })],
          (e) => `translateY(${e}px) translateX(-50%)`,
        ),
      },
      children: [
        (0, i.jsx)("div", {
          className: V.gm,
          children: K.map((e) =>
            (0, i.jsx)(
              A.u,
              {
                title: B.intl.formatToPlainString(F.default["CZCvn+"], { emoji: e.name }),
                body: B.intl.string(F.default.wQFVGI),
                children: (0, i.jsx)("button", {
                  type: "button",
                  className: V.x6,
                  onClick: (t) => en(t, e),
                  children: (0, i.jsx)(g.A, {
                    emojiId: e.id,
                    emojiName: null != e.id ? e.name : e.surrogates,
                    shouldAnimate: !1,
                    animated: "animated" in e ? e.animated : void 0,
                    surrogate: "surrogates" in e ? e.surrogates : void 0,
                  }),
                }),
              },
              `${e.id ?? 0}:${e.name}`,
            ),
          ),
        }),
        (0, i.jsx)(W, {}),
        (0, i.jsx)(h.Y, {
          layerContext: q,
          targetElementRef: et,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(N.A, {
              channel: z,
              closePopout: t,
              messageId: l,
              pickerIntention: x.EmojiIntention.CHAT,
              onSelectEmoji: (e) => {
                let { emoji: n } = e;
                null != n && (en(void 0, n), t());
              },
            });
          },
          position: "right",
          align: "center",
          clickTrap: !0,
          children: (e) =>
            (0, i.jsx)(A.u, {
              title: B.intl.string(F.default["ZEs/pI"]),
              body: B.intl.string(F.default.K8Khlc),
              targetElementRef: et,
              children: (0, i.jsx)("button", {
                ...e,
                ref: et,
                type: "button",
                className: V.x6,
                children: (0, i.jsx)(f.n, { size: "sm" }),
              }),
            }),
        }),
        (0, i.jsx)(A.u, {
          title: B.intl.string(F.default.y2TE38),
          body: B.intl.string(F.default.c3OIMS),
          children: (0, i.jsx)("button", {
            type: "button",
            className: V.x6,
            onClick: function (e) {
              if ((e.stopPropagation(), null == z || null == $ || null == Q?.current?.currentTime))
                return;
              w._U(Q.current) && w.sP(Q.current);
              let t = $.author.id === M.default.getId();
              ((0, v.Yf)({
                channel: z,
                message: $,
                shouldMention: !e.shiftKey && !t,
                showMentionToggle: !z.isPrivate() && !t,
                mediaMention: H(O, Q),
              }),
                U._.dispatch(L.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: z.id }));
            },
            children: (0, i.jsx)(I.W, { size: "sm" }),
          }),
        }),
        ei > 0 &&
          !Y &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(W, {}),
              (0, i.jsx)(p.D, {
                className: V.jC,
                tag: "span",
                onClick: function (e) {
                  (e.stopPropagation(),
                    null != X && (w._U(Q.current) && w.sP(Q.current), (0, b.JA)(X)));
                },
                "aria-label": er,
                children: (0, i.jsx)(T.E, {
                  variant: "text-sm/semibold",
                  color: "text-link",
                  lineClamp: 1,
                  children: er,
                }),
              }),
            ],
          }),
      ],
    });
  }
  function W() {
    return (0, i.jsx)("div", { className: V.yF });
  }
  var Y = n(555115),
    K = n(717421),
    $ = n(534890),
    z = n(661531),
    X = n(97808),
    Z = n(778712),
    q = n(7584);
  let Q = /^<(a)?:(\w+):(\d+)>$/;
  var J = n(521981),
    ee = n(466491);
  function et(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
  }
  function en(e) {
    let {
        controlBarAnimationSpring: t,
        attachment: n,
        durationSeconds: a,
        guildId: s,
        channelId: l,
        messageId: o,
        hidden: d = !1,
      } = e,
      { enableMediaComments: A } = G.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
      h = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
      { isActive: f, isControlBarExpanded: I } = (0, c.X$)(),
      p = (0, E.bG)([R.A], () => R.A.getMessage(l, o), [l, o]),
      { data: T } = y(n, l, s, p?.author.id, A && h && f);
    return (r.useEffect(() => {
      f && y.refetch(n, l, s, p?.author.id, A && h && f);
    }, [f, n, l, s, p?.author.id, A, h]),
    !A || null == T || a <= 0)
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            !d && (!f || !I) && (0, i.jsx)("div", { className: ee.s_ }),
            (0, i.jsx)(u.animated.div, {
              className: ee.IO,
              style: {
                transform: f
                  ? (0, u.to)(
                      [t.to({ range: [0, 1], output: [60, 0] })],
                      (e) => `translateY(${e}px)`,
                    )
                  : "translateY(60px)",
              },
              children: T.map((e) =>
                (0, i.jsx)(ei, { hidden: d, message: e, durationSeconds: a }, e.id),
              ),
            }),
          ],
        });
  }
  function ei(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
      s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
      l = r.useMemo(
        () =>
          (function (e) {
            let t = e.trim();
            if (0 === t.length) return null;
            let n = t.match(Q);
            return null != n
              ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
              : "" !== q.Ay.convertSurrogateToName(t, !1)
                ? { surrogate: t, emojiName: t }
                : null;
          })(t?.content ?? ""),
        [t?.content],
      ),
      o = r.useMemo(
        () => (null != t && "" !== t.content ? (0, J.Ay)(t, { formatInline: !0 }).content : null),
        [t],
      ),
      { videoRef: d, isActive: _, isControlBarExpanded: E } = (0, c.X$)(),
      [h, f] = r.useState(!1),
      [I, T] = r.useState(!1),
      [S, N] = r.useState(!1);
    r.useEffect(() => {
      let e = d.current;
      if (null != e)
        return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
      function n() {
        if (null == e) return;
        let n = e.currentTime,
          i = t?.mediaMention?.timestamp;
        null != i && f(1e3 >= Math.abs(1e3 * n - i));
      }
    }, [t?.mediaMention?.timestamp, d]);
    let C = h || !_ || I,
      [O, R] = (0, K.z)(() => ({ ...et(C), config: { ...Y.n } }));
    if (
      (r.useEffect(() => {
        let e = !1;
        return (
          (async function () {
            N(!0);
            let t = await R(et(C));
            !e && t.finished && N(!1);
          })(),
          () => {
            e = !0;
          }
        );
      }, [R, C]),
      null == t)
    )
      return null;
    let L = (0, i.jsx)(p.D, {
      className: ee.xL,
      style: { left: s, display: a ? "none" : "block" },
      inert: a,
      onMouseEnter: () => T(!0),
      onMouseLeave: () => T(!1),
      onClick: function (e) {
        e.stopPropagation();
        let n = t.messageReference?.channel_id,
          i = t.messageReference?.message_id;
        null != n && null != i && m.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
      },
      children: (0, i.jsx)(u.animated.div, {
        className: ee.BC,
        style: O,
        children:
          null != l
            ? (0, i.jsx)(g.A, {
                emojiId: l.emojiId,
                emojiName: l.emojiName,
                shouldAnimate: h,
                animated: l.animated,
                surrogate: l.surrogate,
                className: ee.Zg,
              })
            : (0, i.jsx)($.ChatIcon, {
                colorClass: ee.Or,
                color: z.A.colors.ICON_OVERLAY_LIGHT,
                size: "custom",
                width: "100%",
                height: "100%",
              }),
      }),
    });
    return null == o
      ? L
      : (0, i.jsx)(A.u, {
          positionKey: `${E}`,
          forceOpen: h && null == l && !S,
          asset: (0, i.jsx)(X.eu, {
            src: t.author.getAvatarURL(void 0, 16),
            size: Z._3.SIZE_16,
            "aria-hidden": !0,
          }),
          assetSize: 16,
          lineClamp: 1,
          body: o,
          children: L,
        });
  }
  var er = n(478531),
    ea = n(194498),
    es = n(376595),
    el = n(773503);
  let eo = [];
  function ed(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
      l = r.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
      [o, d] = r.useState({ speakingUserIds: [], activeSoundboards: [] }),
      { videoRef: u } = (0, c.X$)();
    return (
      (0, ea.A)(() => {
        let e = u.current;
        if (null == e) return;
        let t = 1e3 * e.currentTime;
        d(l.getEventsAtTimestamp(t));
      }),
      (0, i.jsx)(el.A, {
        speakingUserIds: o.speakingUserIds,
        activeSoundboards: eo,
        userIds: n,
        guildId: a,
        channelId: s,
      })
    );
  }
  var ec = n(915725),
    eu = n(458977),
    e_ = n(42502),
    eE = n(110742),
    eA = n(352527),
    eh = n(996682),
    ef = n(27989);
  function eI(e) {
    let {
        size: t = "md",
        width: n,
        height: r,
        color: a = z.A.colors.INTERACTIVE_ICON_DEFAULT,
        colorClass: s = "",
        ...l
      } = e,
      o = (0, ef.J)(t),
      d = o?.width ?? n,
      c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
      ...(0, eh.A)(l),
      width: d,
      height: c,
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        (0, i.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
          fill: "string" == typeof a ? a : a.css,
          className: s,
        }),
        (0, i.jsx)("path", {
          d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
          fill: "string" == typeof a ? a : a.css,
          className: s,
        }),
        (0, i.jsx)("path", {
          d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
          fill: "string" == typeof a ? a : a.css,
          className: s,
        }),
        (0, i.jsx)("path", {
          d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
          fill: "string" == typeof a ? a : a.css,
          className: s,
        }),
      ],
    });
  }
  var ep = n(879241);
  function eT(e) {
    let {
        attachment: t,
        channelId: n,
        messageId: a,
        isControlBarExpanded: l,
        isPlayerActive: o,
      } = e,
      { enableDistributedClips: d } = eu.A.useConfig({ location: "DistributedClipShareCTA" }),
      c = (0, E.bG)(
        [ec.Ay, M.default],
        () =>
          (function (e, t) {
            let n,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec.Ay,
              r = i.getClips(),
              a = e.clip_remote_id,
              s = null != a ? i.getClipByRemoteId(a) : void 0;
            if (null != s) return s;
            let l = (0, eE.Vi)(e);
            if (null == l || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
            let o = 0;
            for (let e of Object.values(r)) {
              let t = (0, eE.Gn)(e);
              if (null == t) continue;
              let i = (0, eE.hL)(l, t);
              null != i && i > o && ((o = i), (n = e));
            }
            return n;
          })(t, M.default.getId(), ec.Ay),
        [t],
      ),
      { onShareClick: u } = (0, eA.A)(n),
      _ = (0, E.bG)([M.default, R.A], () => {
        let e = R.A.getMessage(n, a);
        return (
          null != e &&
          e.author?.id !== M.default.getId() &&
          (null == e.messageReference ||
            R.A.getMessage(n, e.messageReference.message_id)?.author?.id !== M.default.getId())
        );
      }),
      A = (0, E.bG)([ec.Ay], () => ec.Ay.hasRepliedWithClip(a), [a]),
      h = r.useCallback(
        (e) => {
          null != c &&
            (e.stopPropagation(),
            u({
              clips: [c],
              messageReference: { channel_id: n, message_id: a },
              povTargetInformation: (0, e_.A)(t),
            }));
        },
        [u, c, n, a, t],
      );
    return d && null != c && !A && _
      ? (0, i.jsxs)("button", {
          className: s()(ep.eZ, { [ep.vu]: l, [ep.jn]: !o }),
          onClick: h,
          children: [
            (0, i.jsx)(eI, { size: "refresh_sm", color: z.A.colors.WHITE }),
            (0, i.jsx)(T.E, {
              variant: "text-xs/semibold",
              color: "text-overlay-light",
              children: B.intl.string(F.default.YKst58),
            }),
          ],
        })
      : null;
  }
  var em = n(862649);
  function eg(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: r,
        isActive: a,
        isVolumeExpanded: u,
        attachment: _,
        guildId: E,
        isFullScreen: A,
        showParticipants: h,
        showTextContent: f,
        channelId: I,
        messageId: p,
        showSpeakingIndicators: T,
        clipUserIds: m,
        durationSeconds: g,
        showTimelineComments: S,
        setIsGridView: N,
        isGridView: C,
      } = e,
      { activeLayer: O } = (0, c.X$)(),
      { ref: R, width: L } = (0, l.Ay)();
    return (0, i.jsx)(d.N, {
      theme: o.NJ.ONYX,
      children: (e) =>
        (0, i.jsxs)("div", {
          ref: R,
          className: s()(em.MU, e),
          children: [
            (0, i.jsx)(er.A, {
              createdAt: null != _.clip_created_at ? Date.parse(_.clip_created_at) : void 0,
              participantIds: h ? m : [],
              applicationId: _.application?.id,
              title: _.title,
              guildId: E,
              playerState: t,
              isControlBarExpanded: r,
              isFullScreen: A,
              activeLayer: O,
              showTextContent: f,
              isGridView: C,
              setIsGridView: N,
            }),
            !C &&
              null != p &&
              null != I &&
              (0, i.jsx)(eT, {
                isControlBarExpanded: r,
                isPlayerActive: a,
                attachment: _,
                messageId: p,
                channelId: I,
              }),
            !C &&
              T &&
              null != _.clip_events_timeline &&
              null != I &&
              (0, i.jsx)(ed, {
                guildId: E,
                timeline: _.clip_events_timeline,
                userIds: m,
                channelId: I,
              }),
            a &&
              null != E &&
              null != I &&
              null != p &&
              (0, i.jsx)(j, {
                controlBarAnimationSpring: n,
                attachment: _,
                channelId: I,
                messageId: p,
                guildId: E,
                containerWidth: L,
                hidden: !r || u,
              }),
            null != E &&
              null != I &&
              null != p &&
              (0, i.jsx)(en, {
                controlBarAnimationSpring: n,
                attachment: _,
                channelId: I,
                messageId: p,
                guildId: E,
                durationSeconds: _.duration_secs ?? g,
                hidden: !S,
              }),
          ],
        }),
    });
  }
}
