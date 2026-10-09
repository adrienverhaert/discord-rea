/* Recovered shipped factory. Module 123583.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3323830..3331008
 * Raw property SHA-256: 017f773b1afa693b3f73b7c1ee0fde5fd9c301cc7cfa76732f0aaed1e01f4720
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => en }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(607399),
    s = n(17928),
    l = n(155718),
    o = n(775602),
    d = n(861382),
    c = n(136722),
    u = n(406704),
    _ = n(696451),
    E = n(576705),
    A = n(287809),
    h = n(652215),
    f = n(86379),
    I = n(503698),
    p = n.n(I),
    T = n(697744),
    m = n(939249),
    g = n(795816),
    S = n(211401),
    N = n(989837),
    C = n(500049),
    O = n(598071),
    R = n(60809),
    L = n(660183),
    y = n(215837);
  let D = function (e) {
      let { type: t, channelId: n, ref: a } = e,
        l = (0, s.bG)(
          [N.A],
          () => N.A.shouldShowPopup() && N.A.activeViewType() === t && N.A.activeChannelId() === n,
        ),
        { Component: o, events: d, play: c } = (0, T.c)(),
        u = r.useContext(O.Ay);
      r.useEffect(() => {
        function e() {
          d.onMouseEnter();
        }
        return (
          u.on("command-sentinel-typed", e),
          () => {
            u.off("command-sentinel-typed", e);
          }
        );
      }, [u, d]);
      let _ = r.useCallback(() => {
          (l ? S.k(C.Se.DISMISSED) : (S.R(C.s4.TEXT, t, void 0, n), g.LK()), c());
        }, [l, t, n, c]),
        E = (0, i.jsx)(o, { size: "refresh_sm", color: "currentColor" });
      return (0, i.jsx)("div", {
        className: p()(y.UD, R.KG),
        ref: a,
        children: (0, i.jsx)(m.D, {
          tabIndex: 0,
          className: p()(y.x6, { [y.rK]: l }),
          onClick: _,
          "aria-label": L.intl.string(L.t.erHFxI),
          "aria-expanded": l,
          "aria-haspopup": "dialog",
          focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
          ...d,
          children: E,
        }),
      });
    },
    v = r.memo(function (e) {
      let { type: t, channelId: n } = e;
      return (0, i.jsx)(D, { type: t, channelId: n });
    });
  var b = n(931664),
    M = n(951260),
    P = n(522602),
    U = n(158045),
    w = n(462180),
    G = n(375499),
    x = n(151271),
    k = n(355622),
    F = n(698279),
    B = n(495088);
  let V = r.memo(function (e) {
    let { disabled: t, type: n, channelId: a, ref: s } = e,
      [l, o, d, c] = (0, x.RQ)(
        (e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId],
        w.x,
      ),
      u = n === k.oU.NORMAL,
      _ = r.useCallback(() => {
        (0, x.r$)(F.kx.EMOJI, n, a);
      }, [n, a]);
    return t
      ? null
      : (0, i.jsx)("div", {
          className: p()(F.VQ, B.UD),
          ref: s,
          children: (0, i.jsx)(G.A, {
            className: B.Z8,
            onClick: _,
            active: l === F.kx.EMOJI && o === n && c === a,
            "aria-controls": d,
            tabIndex: 0,
            focusProps: { offset: { top: 4, bottom: 4, left: -4, right: -4 } },
            canShowNUXPremiumTooltip: u,
          }),
        });
  });
  var H = n(530134),
    j = n(3203),
    W = n(866665),
    Y = n(617617),
    K = n(234320),
    $ = n(767089);
  let z = r.memo(function (e) {
    let { disabled: t, type: n, channel: a, ref: l } = e,
      [o, d] = r.useState(!1),
      c = (0, s.bG)(
        [Y.A],
        () =>
          o &&
          Object.values(Y.A.frecencyWithoutFetchingLatest.favoriteGifs?.gifs ?? {}).length <= 2,
      ),
      [u, _, E, A] = (0, x.RQ)(
        (e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId],
        w.x,
      ),
      f = r.useRef(0),
      I = r.useCallback(() => {
        (d(!0),
          clearTimeout(f.current),
          (f.current = setTimeout(() => {
            (d(!1), (f.current = 0));
          }, 2e3)));
      }, []);
    (0, K.Vo)({ event: h.jej.FAVORITE_GIF, handler: I });
    let T = r.useCallback(() => {
        (0, x.r$)(F.kx.GIF, n, a.id);
      }, [n, a.id]),
      { Component: m, events: g, play: S } = (0, j.V)();
    if (t) return null;
    let N = u === F.kx.GIF && _ === n && A === a.id;
    return (0, i.jsx)(W.m, {
      text: L.intl.string(c ? L.t.mE2e8A : L.t.nffuyb),
      shouldShow: c,
      forceOpen: c,
      children: (0, i.jsx)("div", {
        ref: l,
        className: p()(F.VQ, B.UD),
        children: (0, i.jsx)($.A, {
          className: B.x6,
          onMouseEnter: g.onMouseEnter,
          onMouseLeave: g.onMouseLeave,
          onClick: () => {
            (T(), S());
          },
          isActive: N,
          pulse: o,
          "aria-label": L.intl.string(L.t.PtVpk2),
          "aria-expanded": N,
          "aria-haspopup": "dialog",
          "aria-controls": E,
          children: (0, i.jsx)(m, { size: "refresh_sm", color: "currentColor" }),
        }),
      }),
    });
  });
  var X = n(365990),
    Z = n(559647),
    q = n(757261);
  let Q = r.memo(function (e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("div", { className: q.me }),
        (0, i.jsx)("div", {
          className: q.kL,
          children: (0, i.jsx)("div", {
            className: q.UD,
            children: (0, i.jsx)($.A, {
              className: q.x6,
              childClassName: p()(q.Z4, { [q.r9]: n, [q.xb]: !n }),
              onClick: t,
              disabled: n,
              isActive: !1,
              noHover: n,
              "aria-label": L.intl.string(L.t.oeb1vg),
              children: (0, i.jsx)(Z.SendMessageIcon, {
                size: "xs",
                color: "currentColor",
                className: q.AO,
              }),
            }),
          }),
        }),
      ],
    });
  });
  var J = n(744682);
  let ee = {
      click: { name: "click", start: 0, duration: 66 },
      hover: { name: "hover", start: 90, duration: 40 },
    },
    et = r.memo(function (e) {
      let t,
        a,
        s,
        l,
        o,
        { disabled: d, type: c, channel: u, ref: _ } = e,
        [E, A, h, f] = (0, x.RQ)(
          (e) => [e.activeView, e.pickerId, e.activeChannelId, e.activeViewType],
          w.x,
        ),
        I = E === F.kx.STICKER && f === c && h === u.id,
        T = r.useCallback(() => {
          (0, x.r$)(F.kx.STICKER, c, u.id);
        }, [c, u.id]),
        {
          Component: m,
          events: g,
          play: S,
        } = ((t = r.useRef(null)),
        (a = r.useCallback(() => {
          null != t.current && t.current.play("click");
        }, [])),
        (s = r.useCallback(() => {
          null != t.current && t.current.play("hover");
        }, [])),
        (l = r.useCallback(() => {
          null != t.current && t.current.stopIfPlaying("hover");
        }, [])),
        (o = r.useCallback(
          (e) =>
            (0, i.jsx)(J.P, {
              ...e,
              src: () => n.e("2890").then(n.t.bind(n, 279825, 19)),
              ref: t,
              markers: ee,
            }),
          [],
        )),
        {
          events: { onMouseEnter: s, onMouseLeave: l },
          play: a,
          getDuration: r.useCallback(() => t.current?.getDuration(), []),
          getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
          Component: o,
        });
      return d
        ? null
        : (0, i.jsx)("div", {
            className: p()(F.VQ, B.UD),
            ref: _,
            children: (0, i.jsx)($.A, {
              className: p()(B.x6, B.KE),
              ...g,
              onClick: () => {
                (T(), S());
              },
              isActive: I,
              "aria-label": L.intl.string(L.t.rZpidU),
              "aria-expanded": I,
              "aria-haspopup": "dialog",
              "aria-controls": A,
              sparkle: !1,
              children: (0, i.jsx)(m, { size: "refresh_sm", color: "currentColor" }),
            }),
          });
    }),
    en = r.memo(function (e) {
      var t, n, r;
      let {
          type: I,
          disabled: p,
          channel: T,
          handleSubmit: m,
          isEmpty: g,
          showAllButtons: S,
          expressionButtonsHidden: N,
        } = e,
        C = (0, M.n)("ChannelTextAreaButtons"),
        O = (0, s.cf)([o.Ay], () => ({
          isSubmitButtonEnabled: o.Ay.isSubmitButtonEnabled,
          isAppsButtonEnabled: o.Ay.isAppsButtonEnabled,
          isEmojiButtonEnabled: o.Ay.isEmojiButtonEnabled,
          isGifButtonEnabled: o.Ay.isGifButtonEnabled,
          isStickerButtonEnabled: o.Ay.isStickerButtonEnabled,
        })),
        R = O.isSubmitButtonEnabled,
        L = !C || O.isAppsButtonEnabled,
        y = !C || O.isEmojiButtonEnabled,
        D = !C || O.isGifButtonEnabled,
        w = !C || O.isStickerButtonEnabled,
        G =
          ((t = T.id),
          (n = I),
          (r = g),
          (0, s.bG)([b.A, P.A], () => {
            let e = b.A.getStickerPreview(t, n.drafts.type),
              i = null != e && e.length > 0;
            return 0 === P.A.getUploads(t, n.drafts.type).length && r && !i;
          })),
        { activeCommand: x, activeCommandOption: k } = (0, s.cf)([d.A], () => ({
          activeCommand: d.A.getActiveCommand(T.id),
          activeCommandOption: d.A.getActiveOption(T.id),
        })),
        F = (0, f.dw)(),
        j = [],
        W = !T.isDM() || void 0 === T.recipients || T.recipients.length > 1,
        Y = (0, s.bG)([A.default], () => (W ? null : A.default.getUser(T.recipients[0]))),
        K = (function (e) {
          let { channel: t, chatInputType: n } = e,
            i = n.commands?.enabled ?? !1,
            r = (function (e) {
              let t = e.getGuildId(),
                n = (0, s.bG)([_.Ay, A.default], () => {
                  let e = A.default.getCurrentUser();
                  return (null != t && null != e ? _.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                }),
                { messagesDisabled: i } = (0, s.cf)(
                  [E.A],
                  () => {
                    let t = e.isPrivate(),
                      i = E.A.computePermissions(e),
                      r = c.zy(i, h.xBc.SEND_MESSAGES),
                      a = (0, u.UJ)(e);
                    return { messagesDisabled: n || (!t && !r) || a };
                  },
                  [e, n],
                );
              return !i;
            })(t),
            { activeCommand: a } = (0, s.cf)([d.A], () => ({
              activeCommand: i ? d.A.getActiveCommand(t.id) : null,
            }));
          return i && r && null == a;
        })({ channel: T, chatInputType: I }),
        $ = I.submit?.button != null && (I.submit?.ignorePreference || R),
        Z = null == x || (null != k && k.type !== l.n4.ATTACHMENT);
      return (!a.Fr &&
        (I.gifts?.button != null &&
          null == x &&
          !F &&
          (null == Y || U.Ay.isPremiumEligible(Y)) &&
          j.push((0, i.jsx)(X.A, { disabled: p, channel: T }, "gift")),
        I.gifs?.button != null &&
          null == x &&
          S &&
          D &&
          !N &&
          j.push((0, i.jsx)(z, { disabled: p, type: I, channel: T }, "gif")),
        I.stickers?.button != null &&
          null == x &&
          S &&
          w &&
          !N &&
          j.push((0, i.jsx)(et, { disabled: p, type: I, channel: T }, "sticker"))),
      I.emojis?.button != null &&
        !N &&
        Z &&
        (S || N
          ? y && j.push((0, i.jsx)(V, { disabled: p, type: I, channelId: T.id }, "emoji"))
          : j.push((0, i.jsx)(H.A, { disabled: p, type: I, channel: T }, "expression"))),
      K && L && j.push((0, i.jsx)(v, { channelId: T.id, type: I }, "appLauncher")),
      $ && j.push((0, i.jsx)(Q, { onClick: m, disabled: p || G }, "submit")),
      0 === j.length)
        ? null
        : (0, i.jsx)("div", { className: B.Uo, children: j });
    });
}
