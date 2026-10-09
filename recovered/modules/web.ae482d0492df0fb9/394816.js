/* Recovered shipped factory. Module 394816.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8122702..8138985
 * Raw property SHA-256: 94bc6fd5622d004a4f7facd34693e37caf8ad1cd294dd88523cb639a6c900ec0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => eO });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(17928),
    d = n(451988),
    c = n(192308),
    u = n(245604),
    _ = n(834730),
    E = n(939249),
    A = n(140735),
    h = n(717421),
    f = n(847374),
    I = n(775602),
    p = n(51183),
    T = n(793574),
    m = n(688810),
    g = n(915089),
    S = n(410540),
    N = n(7584),
    C = n(208971),
    O = n(280450),
    R = n(562153),
    L = n(183555),
    y = n(679492),
    D = n(922016),
    v = n(403777),
    b = n(462887),
    M = n(879064),
    P = n(363195),
    U = n(403362),
    w = n(427262),
    G = n(448613),
    x = n(866665),
    k = n(460905),
    F = n(110384),
    B = n(365199),
    V = n(101555),
    H = n(570287),
    j = n(518477),
    W = n(660183),
    Y = n(47119);
  let K = "> -# *",
    $ = {
      [j.dS.AVATAR]: () => W.intl.string(W.t["fEUP/i"]),
      [j.dS.STATUS]: () => W.intl.string(W.t.TKdBC8),
      [j.dS.ACTIVITY]: () => W.intl.string(W.t.bSe71F),
    },
    z = {
      [j.dS.AVATAR]: () => W.intl.string(W.t.xvN0fV),
      [j.dS.STATUS]: () => W.intl.string(W.t["C/vzS7"]),
      [j.dS.ACTIVITY]: () => W.intl.string(W.t.ObfsSj),
    };
  function X(e) {
    let {
        user: t,
        sourceType: n,
        isVisible: a,
        isExpandable: l,
        interactionSourceId: d,
        targetRef: c,
        onAction: u,
        renderMoreButtonPopout: _,
      } = e,
      E = r.useRef(null),
      A = (0, o.bG)([O.default], () => O.default.getId() === t.id),
      h = (0, H.A)(t.id),
      { onInteraction: f, onInteractionPopoutTargetRefChange: I } = (0, y.Pq)();
    return t.bot || A || !h
      ? null
      : (0, i.jsxs)(V.Ay, {
          className: s()(Y.oO, {
            [Y.RK]: a,
            [Y.lu]: l,
            [Y.U7]: n === j.dS.STATUS,
            [Y.nL]: n === j.dS.AVATAR,
            [Y.bt]: n === j.dS.ACTIVITY,
          }),
          children: [
            (0, i.jsx)(x.m, {
              asContainer: !0,
              text: W.intl.string(W.t.nhaI4b),
              shouldShow: a,
              delay: 0,
              ariaHidden: !0,
              children: (0, i.jsx)(V.$n, {
                onClick: function () {
                  (I(c),
                    n === j.dS.AVATAR
                      ? u({ action: "PRESS_REACT_AVATAR" })
                      : n === j.dS.STATUS
                        ? u({ action: "PRESS_REACT_CUSTOM_STATUS" })
                        : u({ action: "PRESS_REACT_ACTIVITY" }),
                    f?.({
                      interactionType: j.AQ.REACT,
                      interactionSource: n,
                      interactionSourceId: d,
                    }));
                },
                className: Y.x6,
                "aria-label": $[n](),
                "aria-haspopup": "dialog",
                children: (0, i.jsx)(k.n, { size: "xs", className: Y.Kk }),
              }),
            }),
            (0, i.jsx)(x.m, {
              asContainer: !0,
              text: W.intl.string(W.t.RmDYKK),
              shouldShow: a,
              delay: 0,
              ariaHidden: !0,
              children: (0, i.jsx)(V.$n, {
                onClick: function () {
                  (I(c),
                    n === j.dS.AVATAR
                      ? u({ action: "PRESS_REPLY_AVATAR" })
                      : n === j.dS.STATUS
                        ? u({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                        : u({ action: "PRESS_REPLY_ACTIVITY" }),
                    f?.({
                      interactionType: j.AQ.REPLY,
                      interactionSource: n,
                      interactionSourceId: d,
                    }));
                },
                className: Y.x6,
                "aria-label": z[n](),
                "aria-haspopup": "dialog",
                children: (0, i.jsx)(F.W, { size: "xs", className: Y.Kk }),
              }),
            }),
            _?.((e) =>
              (0, i.jsx)(x.m, {
                asContainer: !0,
                text: W.intl.string(W.t["UKOtz+"]),
                shouldShow: a,
                delay: 0,
                ariaHidden: !0,
                children: (0, i.jsx)(V.$n, {
                  ref: E,
                  ...e,
                  onClick: function () {
                    (I(E), e.onClick?.());
                  },
                  className: Y.x6,
                  "aria-label": W.intl.string(W.t["UKOtz+"]),
                  children: (0, i.jsx)(B.MoreHorizontalIcon, { size: "xs", className: Y.Kk }),
                }),
              }),
            ),
          ],
        });
  }
  var Z = n(939496),
    q = n(307731),
    Q = n(818348),
    J = n(650583),
    ee = n(954024);
  function et(e) {
    let {
        user: t,
        guildId: n,
        entry: a,
        sourceType: s,
        sourceDetails: l,
        setPopoutRef: d,
        onAction: c,
        onClose: u,
      } = e,
      { resetInteraction: _, setInteractionToast: E } = (0, y.Pq)(),
      { theme: A } = (0, Z.E)(),
      h = (0, o.bG)([P.A], () => P.A.theme),
      f = (0, b.M)(h) ? !(0, b.M)(A) : (0, b.M)(A),
      I = r.useRef(null);
    async function p(e) {
      if (null == e) return;
      s === j.dS.AVATAR
        ? c({ action: "SEND_REACT_AVATAR" })
        : s === j.dS.STATUS
          ? c({ action: "SEND_REACT_CUSTOM_STATUS" })
          : c({ action: "SEND_REACT_ACTIVITY" });
      let n = (function (e) {
        let { emoji: t, username: n, sourceType: i, sourceDetails: r } = e,
          a = `:${t.name}:`;
        switch (i) {
          case j.dS.ACTIVITY:
            let s = W.intl.formatToPlainString(W.t.EUFEJt, { username: n }),
              l = `
> ${r}`;
            return null != r
              ? `${K}${s}*${l}
${a}`
              : `${K}${s}*
${a}`;
          case j.dS.AVATAR:
            let o = W.intl.formatToPlainString(W.t.E6H15q, { username: n });
            return `${K}${o}*
${a}`;
          case j.dS.STATUS:
            let d = W.intl.formatToPlainString(W.t.XPQgL2, { username: n }),
              c = `
> ${r}`;
            return null != r
              ? `${K}${d}*${c}
${a}`
              : `${K}${d}*
${a}`;
          default:
            (0, U.xb)(i);
        }
      })({ emoji: e, username: w.Ay.getName(t), sourceType: s, sourceDetails: l });
      E(null);
      try {
        await (0, G.p)({
          userId: t.id,
          content: n,
          location: "UserProfileReactPopout",
          openChannel: !1,
          whenReady: !1,
          entry: a,
        });
      } catch (e) {}
      E(j.AQ.REACT);
    }
    return (
      r.useEffect(() => {
        d?.(I?.current);
      }, [I, d]),
      r.useEffect(() => {
        function e(e) {
          e.key === J.dh.ESCAPE && (e.stopPropagation(), _());
        }
        return (
          document.addEventListener("keydown", e),
          () => {
            document.removeEventListener("keydown", e);
          }
        );
      }, [u, _]),
      (0, i.jsx)(M.A, {
        headerClassName: f ? ee.X : void 0,
        guildId: n ?? void 0,
        closePopout: Q.tE,
        onSelectEmoji: async (e) => {
          let { emoji: t, willClose: n } = e;
          (await p(t), n && (_(), u?.()));
        },
        pickerIntention: q.EmojiIntention.PROFILE,
      })
    );
  }
  var en = n(478437),
    ei = n(305866),
    er = n(355622),
    ea = n(408018),
    es = n(479909),
    el = n(95701),
    eo = n(767523);
  let ed = (0, el.createChannelRecord)({ id: "1", type: en.r.DM });
  function ec(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        sourceType: l,
        sourceDetails: o,
        setPopoutRef: d,
        modalKey: c,
        onAction: u,
        onClose: _,
        entry: E,
      } = e,
      { resetInteraction: A, setInteractionToast: h } = (0, y.Pq)(),
      { primaryColor: f } = (0, Z.E)(),
      [I, p] = r.useState(""),
      [T, m] = r.useState((0, ea.x7)(I)),
      g = r.useRef(!1),
      S = r.useRef(null),
      N = r.useCallback(
        (e) => {
          e.key === J.dh.ESCAPE && (e.stopPropagation(), A());
        },
        [A],
      );
    async function C(e) {
      if (null == e) return;
      l === j.dS.AVATAR
        ? u({ action: "SEND_REPLY_AVATAR" })
        : l === j.dS.STATUS
          ? u({ action: "SEND_REPLY_CUSTOM_STATUS" })
          : u({ action: "SEND_REPLY_ACTIVITY" });
      let n = (function (e) {
        let { input: t, username: n, sourceType: i, sourceDetails: r } = e;
        switch (i) {
          case j.dS.ACTIVITY:
            let a = W.intl.formatToPlainString(W.t.WmvMCo, { username: n }),
              s = `
> ${r}`;
            return null != r
              ? `${K}${a}*${s}
${t}`
              : `${K}${a}*
${t}`;
          case j.dS.AVATAR:
            let l = W.intl.formatToPlainString(W.t.lpaBsB, { username: n });
            return `${K}${l}*
${t}`;
          case j.dS.STATUS:
            let o = W.intl.formatToPlainString(W.t.lFXgFV, { username: n }),
              d = `
> ${r}`;
            return null != r
              ? `${K}${o}*${d}
${t}`
              : `${K}${o}*
${t}`;
          default:
            (0, U.xb)(i);
        }
      })({ input: e, username: w.Ay.getName(t), sourceType: l, sourceDetails: o });
      h(null);
      try {
        await (0, G.p)({
          userId: t.id,
          content: n,
          location: "UserProfileReplyPopout",
          openChannel: !1,
          whenReady: !1,
          entry: E,
        });
      } catch (e) {}
      h(j.AQ.REPLY);
    }
    r.useEffect(() => {
      d?.(S?.current);
    }, [S, d]);
    let O = {
      [eo.h5]: l === j.dS.STATUS,
      [eo.my]: l === j.dS.AVATAR,
      [eo.Eb]: l === j.dS.ACTIVITY,
    };
    return (0, i.jsx)(ei.l, {
      ref: S,
      onKeyDown: N,
      children: (0, i.jsx)("div", {
        className: s()(eo.kL, O, { [eo.GE]: null != f }),
        children: (0, i.jsx)(es.Ay, {
          parentModalKey: c,
          emojiPickerCloseOnModalOuterClick: !0,
          className: eo.hF,
          innerClassName: eo.rn,
          editorClassName: eo.EN,
          type: er.oU.USER_PROFILE_REPLY,
          placeholder: W.intl.formatToPlainString(
            (function (e) {
              switch (e) {
                case j.dS.ACTIVITY:
                  return W.t.Qn081O;
                case j.dS.AVATAR:
                  return W.t.xGNPFK;
                case j.dS.STATUS:
                  return W.t.g9BTCM;
                default:
                  (0, U.xb)(e);
              }
            })(l),
            { username: R.Ay.getName(n, a, t) },
          ),
          channel: ed,
          textValue: I,
          richValue: T,
          onChange: (e, t, n) => {
            t !== I && (p(t), m(n));
          },
          focused: g.current,
          onFocus: () => {
            g.current = !0;
          },
          onSubmit: async (e) => {
            let { value: t } = e,
              n = t.trim();
            if (0 === n.length) return { shouldClear: !1, shouldRefocus: !1 };
            try {
              return (await C(n), A(), _?.(), { shouldClear: !0, shouldRefocus: !1 });
            } catch {
              return { shouldClear: !1, shouldRefocus: !1 };
            }
          },
        }),
      }),
    });
  }
  var eu = n(996988);
  function e_(e) {
    let { user: t, guildId: n, channelId: r, themeType: a, onClose: s, children: l, ...o } = e,
      {
        interactionType: d,
        interactionSource: c,
        resetInteraction: u,
        interactionSourceId: _,
        interactionPopoutTargetRef: E,
      } = (0, y.Pq)(),
      A = [eu.d.MODAL, eu.d.MODAL_V2].includes(a) ? (0, v.n1)(t.id, n) : void 0,
      h = c === o.sourceType && d === j.AQ.REACT,
      f = c === o.sourceType && d === j.AQ.REPLY,
      I = (h || f) && _ === o.sourceId;
    return (0, i.jsx)(D.Y, {
      targetElementRef: E ?? void 0,
      renderPopout: (e) => {
        let { setPopoutRef: l } = e;
        return (0, i.jsx)(h ? et : ec, {
          user: t,
          guildId: n,
          channelId: r,
          themeType: a,
          onClose: s,
          modalKey: A,
          setPopoutRef: l,
          ...o,
        });
      },
      onRequestClose: () => {
        (u(), s?.());
      },
      shouldShow: I,
      ...(function (e) {
        let { interactionType: t, interactionSource: n, themeType: i } = e;
        return t === j.AQ.REACT
          ? { position: "left", align: "top", animationPosition: "right", spacing: 8 }
          : i === eu.d.MODAL || i === eu.d.MODAL_V2 || n === j.dS.ACTIVITY
            ? { position: "bottom", align: "center", animationPosition: "top", spacing: 6 }
            : { position: "bottom", align: "left", animationPosition: "top", spacing: 6 };
      })({ interactionType: d, interactionSource: c, themeType: a }),
      children: l,
    });
  }
  var eE = n(22231),
    eA = n(241326),
    eh = n(885386),
    ef = n(33969),
    eI = n(777357);
  function ep(e) {
    let { isVisible: t, isExpandable: a, onCloseProfile: l, editButtonRef: o } = e,
      { analyticsLocations: d } = (0, m.Ay)(),
      { trackUserProfileAction: u } = (0, L.NJ)(),
      _ = r.useRef(null),
      { themeType: E } = (0, Z.E)();
    return (0, i.jsxs)(ef.A, {
      className: s()(eI.oO, { [eI.RK]: t, [eI.lu]: a }),
      children: [
        (0, i.jsx)(ef.Y, {
          variant: "custom-status",
          ref: o,
          tooltipText: W.intl.string(W.t.bt75uw),
          shouldDelayTooltip: a,
          onClick: function () {
            (u({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
              (function (e) {
                let { analyticsLocations: t, stackingBehavior: r, returnRef: a } = e;
                (0, c.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("775417"),
                      n.e("865429"),
                      n.e("25300"),
                      n.e("291103"),
                      n.e("686889"),
                      n.e("875762"),
                      n.e("526807"),
                      n.e("193158"),
                      n.e("455924"),
                      n.e("250478"),
                      n.e("348900"),
                      n.e("356296"),
                      n.e("220287"),
                      n.e("428367"),
                      n.e("655552"),
                      n.e("772163"),
                      n.e("689122"),
                    ]).then(n.bind(n, 657977));
                    return (n) =>
                      (0, i.jsx)(e, { ...n, sourceAnalyticsLocations: t, returnRef: a });
                  },
                  null != r ? { stackingBehavior: r } : void 0,
                );
              })({
                analyticsLocations: d,
                stackingBehavior: E === eu.d.MODAL_V2 ? "stack" : void 0,
                returnRef: o,
              }),
              l?.());
          },
          "aria-label": W.intl.string(W.t.QdHxos),
          "aria-haspopup": "dialog",
          icon: eE.PencilIcon,
        }),
        (0, i.jsx)(ef.Y, {
          variant: "custom-status",
          ref: _,
          tooltipText: W.intl.string(W.t.VkKicb),
          shouldDelayTooltip: a,
          onClick: function () {
            (u({ action: "PRESS_CLEAR_CUSTOM_STATUS" }),
              eh.G2.updateSetting(void 0),
              requestAnimationFrame(() => o.current?.focus()));
          },
          "aria-label": W.intl.string(W.t.wfYTHe),
          icon: eA.TrashIcon,
        }),
      ],
    });
  }
  var eT = n(502622);
  function em(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", {
      className: s()(eT.nL, n),
      children: (0, i.jsx)("div", {
        className: eT.A7,
        children: (0, i.jsx)("span", { className: eT.vW, children: t }),
      }),
    });
  }
  function eg(e) {
    let { onCloseProfile: t, prompt: r, addButtonRef: a, ref: l } = e,
      o = (0, g.GV)(),
      { analyticsLocations: d } = (0, m.Ay)(),
      { trackUserProfileAction: h } = (0, L.NJ)(),
      { themeType: f } = (0, Z.E)(),
      I = null != r ? r.label() : W.intl.string(W.t.evw0oz),
      p = (0, i.jsxs)("div", {
        className: eT.Qs,
        children: [
          (0, i.jsx)(u.U, { size: "xs", className: eT.Tw, colorClass: eT.qv }),
          (0, i.jsx)(_.E, {
            variant: "text-sm/normal",
            className: s()(eT.ch, null != r && eT.R9),
            children: I,
          }),
        ],
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(em, { children: p }),
        (0, i.jsx)("div", {
          className: s()(eT.kL, eT.LL),
          ref: l,
          children: (0, i.jsx)(E.D, {
            innerRef: a,
            className: eT.A7,
            "aria-label": W.intl.string(W.t["zrpF/b"]),
            "aria-describedby": o,
            onClick: function () {
              (h({ action: "PRESS_ADD_CUSTOM_STATUS" }),
                t?.(),
                (0, c.openModalLazy)(
                  async () => {
                    let { default: e } = await Promise.all([
                      n.e("775417"),
                      n.e("865429"),
                      n.e("25300"),
                      n.e("291103"),
                      n.e("686889"),
                      n.e("875762"),
                      n.e("526807"),
                      n.e("193158"),
                      n.e("455924"),
                      n.e("250478"),
                      n.e("348900"),
                      n.e("356296"),
                      n.e("220287"),
                      n.e("428367"),
                      n.e("655552"),
                      n.e("772163"),
                      n.e("689122"),
                    ]).then(n.bind(n, 657977));
                    return (t) =>
                      (0, i.jsx)(e, { ...t, sourceAnalyticsLocations: d, prompt: r, returnRef: a });
                  },
                  f === eu.d.MODAL_V2 ? { stackingBehavior: "stack" } : void 0,
                ));
            },
            focusProps: { ringClassName: eT.hN },
            children: (0, i.jsxs)("span", {
              className: s()(eT.vW, eT.vk),
              children: [
                (0, i.jsx)(u.U, { size: "xs", className: eT.Tw, colorClass: eT.qv }),
                (0, i.jsxs)(A.A, { id: o, children: [W.intl.string(W.t.EVV6uZ), ": ", I] }),
                (0, i.jsx)(_.E, {
                  variant: "text-sm/normal",
                  className: s()(eT.ch, null != r && eT.R9),
                  "aria-hidden": "true",
                  children: I,
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  function eS(e) {
    let {
        emoji: t,
        text: n,
        statusLabel: a,
        themeType: c,
        animate: u,
        className: T,
        referenceClassName: m,
        renderToolbar: S,
        onShowToolbar: N,
        placeholderText: C,
        hasEntered: O = !0,
        ref: R,
      } = e,
      D = (0, y.NR)(),
      { trackUserProfileAction: v } = (0, L.NJ)(),
      b = 1.25 * (null != t),
      M = 36 + b,
      P = 144 + b,
      U = r.useRef(null),
      w = r.useRef(null),
      G = r.useRef(null),
      x = (0, g.GV)(),
      k = r.useRef(M),
      F = r.useRef(M),
      B = null != t && null == n,
      [V, H] = r.useState(!1),
      [Y, K] = r.useState(!0),
      [$, z] = r.useState(!B && O),
      [X, Z] = r.useState(!1),
      q = O && V,
      Q = c === eu.d.MODAL || c === eu.d.MODAL_V2,
      J = r.useCallback((e) => (Q ? e : Math.min(e, P)), [P, Q]),
      ee = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
      [et] = r.useState(() => new d.Ep());
    (r.useEffect(() => () => et.stop(), [et]),
      r.useEffect(() => {
        D?.onInteractionPopoutTargetRefChange(U);
      }, [D]));
    let [en, ei] = (0, h.z)(() => ({
      maxHeight: `${k.current}px`,
      config: { clamp: !0, duration: 150 },
    }));
    function er(e) {
      $ &&
        (Z(e),
        e
          ? ei({
              maxHeight: `${J(F.current)}px`,
              delay: 300 * !ee,
              config: { clamp: !0, duration: 150 * !ee },
            })
          : ei({ maxHeight: `${Math.min(k.current, M)}px`, delay: 0 }),
        ee ? K(!e) : et.start(e ? 300 : 150, () => K(!e)));
    }
    r.useLayoutEffect(() => {
      if ((H(!0), null == w.current || null == G.current || !q)) return;
      let e = w.current.getBoundingClientRect().height,
        t = G.current.getBoundingClientRect().height,
        n = J(t);
      (z(n > e),
        (k.current = e),
        (F.current = t),
        ei({ maxHeight: `${Y ? Math.min(k.current, M) : n}px` }));
    }, [q, n, t, ei, Y, M, J]);
    let ea =
        null != t
          ? (0, i.jsx)(p.A, {
              emoji: t,
              animate: u,
              hideTooltip: !1,
              tooltipDelay: j.In,
              className: eT.H0,
            })
          : null,
      es =
        null != n
          ? (0, i.jsx)(_.E, { variant: "text-sm/normal", className: eT.qS, children: n })
          : null,
      el =
        void 0 !== C && null == t
          ? (0, i.jsx)(_.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              "aria-label": `${W.intl.string(W.t.EVV6uZ)}: ${C}`,
              className: s()(eT.qS, eT.R9),
              children: C ?? "",
            })
          : null,
      eo = null == es || "" === n ? el : es,
      ed = (0, i.jsxs)("div", { className: eT.Qs, children: [ea, eo] }),
      ec = (0, i.jsxs)("div", { ref: w, className: s()(eT.Qs, eT.mj), children: [ea, eo] }),
      e_ = (0, i.jsxs)("div", { ref: G, className: s()(eT.Qs, eT.m2, eT.mj), children: [ea, eo] }),
      eE = W.intl.string(X ? W.t.fFaN1b : W.t.xPkLPy),
      eA = $
        ? (0, i.jsx)(A.A, {
            showOnFocus: !0,
            children: (0, i.jsx)(E.D, {
              className: eT.uJ,
              "aria-label": eE,
              "aria-controls": x,
              "aria-expanded": X,
              onClick: () => er(!X),
              focusProps: { ringClassName: eT.o5 },
              children: (0, i.jsx)(f.a, {
                size: "xs",
                color: "currentColor",
                className: X ? eT.DE : void 0,
              }),
            }),
          })
        : null,
      eh = (0, i.jsx)("div", {
        ref: R,
        className: eT.A7,
        role: "group",
        "aria-label": a,
        children: (0, i.jsx)("span", {
          className: eT.vW,
          children: (0, i.jsxs)(l.animated.div, {
            id: x,
            style: en,
            className: s()(eT.Qs, { [eT.m2]: !Y && Q, [eT.p$]: !Y && !Q }),
            children: [ea, eo],
          }),
        }),
      }),
      ef = (0, i.jsxs)(em, { className: m, children: [ed, ec, e_] });
    return null == N
      ? (0, i.jsxs)(i.Fragment, {
          children: [
            ef,
            (0, i.jsxs)("div", {
              ref: U,
              className: s()(eT.kL, T),
              onMouseEnter: () => {
                (v({ action: "HOVER_CUSTOM_STATUS" }), er(!0));
              },
              onMouseLeave: () => {
                er(!1);
              },
              children: [eh, S?.($), eA],
            }),
          ],
        })
      : (0, i.jsxs)(i.Fragment, {
          children: [
            ef,
            (0, i.jsxs)("div", {
              ref: U,
              className: s()(eT.kL, T),
              onFocus: () => {
                N(!0);
              },
              onBlur: (e) => {
                U.current?.contains(e.relatedTarget) || N(!1);
              },
              onMouseEnter: () => {
                (v({ action: "HOVER_CUSTOM_STATUS" }), N(!0), er(!0));
              },
              onMouseLeave: () => {
                (N(!1), er(!1));
              },
              children: [eh, S?.($), eA],
            }),
          ],
        });
  }
  function eN(e) {
    let { emoji: t, text: n, onCloseProfile: a, editButtonRef: l, className: o, ref: d, ...c } = e,
      [u, _] = r.useState(!1);
    return (0, i.jsx)(eS, {
      ...c,
      ref: d,
      emoji: t,
      text: n,
      className: s()(eT.LL, o),
      onShowToolbar: _,
      renderToolbar: (e) =>
        (0, i.jsx)(ep, { isVisible: u, isExpandable: e, onCloseProfile: a, editButtonRef: l }),
    });
  }
  function eC(e) {
    let t,
      {
        emoji: n,
        text: a,
        user: l,
        guildId: o,
        channelId: d,
        themeType: c,
        className: u,
        ..._
      } = e,
      { trackUserProfileAction: E } = (0, L.NJ)(),
      { interactionType: A, interactionSource: h, resetInteraction: f } = (0, y.Pq)(),
      I = h === j.dS.STATUS && A === j.AQ.REACT,
      p = h === j.dS.STATUS && A === j.AQ.REPLY,
      T = I || p,
      m = r.useRef(null),
      g = r.useRef(n),
      S = r.useRef(a);
    r.useEffect(() => {
      h === j.dS.STATUS &&
        ((g.current !== n || S.current !== a) && f(), (g.current = n), (S.current = a));
    }, [h, f, n, a]);
    let [C, O] = r.useState(!1),
      R = r.useCallback(
        (e) => {
          (e || !T) && O(e);
        },
        [T],
      );
    return (0, i.jsx)(e_, {
      user: l,
      guildId: o,
      channelId: d,
      themeType: c,
      sourceDetails:
        ((t =
          null == n
            ? null
            : null != n.id
              ? `\`:${n.name}:\``
              : N.Ay.translateSurrogatesToInlineEmoji(n.name)),
        null == a ? t : null == t ? a : `${t} ${a}`),
      sourceType: j.dS.STATUS,
      onAction: E,
      onClose: () => O(!1),
      children: () =>
        (0, i.jsx)(eS, {
          ..._,
          ref: m,
          emoji: n,
          text: a,
          themeType: c,
          className: s()(u, { [eT.zf]: T }),
          onShowToolbar: R,
          renderToolbar: (e) =>
            (0, i.jsx)(X, {
              targetRef: m,
              user: l,
              sourceType: j.dS.STATUS,
              isVisible: C && !T,
              isExpandable: e,
              onAction: E,
            }),
        }),
    });
  }
  let eO = function (e) {
    let { ref: t, ...n } = e,
      {
        user: a,
        guildId: s,
        channelId: l,
        onCloseProfile: d,
        previewText: c,
        previewEmoji: u,
        placeholderText: _,
        prompt: E,
        disableToolbar: A = !1,
        ...h
      } = n,
      f = (0, S.A)(a.id),
      { analyticsLocations: I } = (0, m.Ay)(T.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE),
      p = r.useRef(null),
      g = null != c || null != u,
      N = (0, C.G)(g ? c : f?.state),
      L = (0, o.bG)([O.default], () => O.default.getId() === a.id),
      y = L && !A,
      D = R.Ay.useName(s, l, a),
      v = L ? W.intl.string(W.t.SlKMnR) : W.intl.formatToPlainString(W.t["91lTRe"], { name: D }),
      b = !L && !a.bot && !A;
    if (g) {
      let e = null != N && "" !== N ? N : null;
      return (0, i.jsx)(m.f5, {
        value: I,
        children: (0, i.jsx)(eS, {
          emoji: u ?? null,
          text: e,
          statusLabel: v,
          placeholderText: _,
          ref: t,
          ...h,
        }),
      });
    }
    let M = f?.emoji ?? null,
      P = null != N && "" !== N ? N : null;
    return null != M || null != P || y
      ? null == M && null == P
        ? (0, i.jsx)(m.f5, {
            value: I,
            children: (0, i.jsx)(eg, { onCloseProfile: d, prompt: E, ref: t, addButtonRef: p }),
          })
        : b
          ? (0, i.jsx)(m.f5, {
              value: I,
              children: (0, i.jsx)(eC, {
                user: a,
                guildId: s,
                channelId: l,
                emoji: M,
                text: P,
                statusLabel: v,
                ...h,
              }),
            })
          : y
            ? (0, i.jsx)(m.f5, {
                value: I,
                children: (0, i.jsx)(eN, {
                  emoji: M,
                  text: P,
                  statusLabel: v,
                  onCloseProfile: d,
                  editButtonRef: p,
                  ref: t,
                  ...h,
                }),
              })
            : (0, i.jsx)(m.f5, {
                value: I,
                children: (0, i.jsx)(eS, { emoji: M, text: P, statusLabel: v, ref: t, ...h }),
              })
      : null;
  };
}
