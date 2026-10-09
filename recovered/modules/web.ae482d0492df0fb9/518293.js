/* Recovered shipped factory. Module 518293.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7125732..7134007
 * Raw property SHA-256: b4ccaf0fceeecef056fed5e9f02e0cd98f020933cf0a1efbb8816eb435423095
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    c9: () => J,
    UX: () => er,
    wo: () => q,
    TQ: () => Q,
    Lk: () => et,
    lg: () => ei,
    H1: () => z,
    T2: () => en,
    ix: () => K,
    Xf: () => $,
    _c: () => Z,
  });
  var i = n(477900),
    r = n(582128),
    a = n(202091),
    s = n(323889),
    l = n(17928),
    o = n(717421),
    d = n(663417),
    c = n(739187),
    u = n(857250),
    _ = n(97483),
    E = n(59520),
    A = n(157695),
    h = n(274670),
    f = n(144779);
  n(952818);
  var I = n(87719),
    p = n(287809),
    T = n(166403),
    m = n(174459),
    g = n(515718),
    S = n(38405),
    N = n(396813),
    C = n(859703),
    O = n(738822),
    R = n(104886),
    L = n(866157),
    y = n(291749),
    D = n(971276),
    v = n(18437),
    b = n(590202),
    M = n(971649),
    P = n(773545),
    U = n(651892),
    w = n(710969),
    G = n(901406),
    x = n(801365),
    k = n(792620),
    F = n(814793),
    B = n(753386),
    V = n(175248),
    H = n(617986),
    j = n(190107),
    W = n(652215),
    Y = n(660183);
  function K(e) {
    let {
        quest: t,
        questContent: n,
        questContentPosition: i,
        questContentRowIndex: a,
        sourceQuestContent: o,
      } = e,
      d = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
      c = d?.hasVerifiedEmailOrPhone(),
      u = d?.verified,
      _ = (0, v.Ut)(),
      E = (0, M.wW)();
    return r.useCallback(() => {
      null != t &&
        ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_claim_reward")
          ? (0, h.r)({
              type: f.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: t.id,
              questContentCTA: b.Cy.CLAIM_REWARD,
              surfaceId: n,
              sourceQuestContent: o,
              impressionId: E(),
              questContentPosition: i,
              questContentRowIndex: a,
            })
          : _({
              questId: t.id,
              questContent: n,
              questContentCTA: b.Cy.CLAIM_REWARD,
              questContentPosition: i,
              questContentRowIndex: a,
              sourceQuestContent: o,
            }),
        (0, x.ks)(t.config) && !u
          ? (0, V.E)()
          : c
            ? (0, x.K9)(t.config)
              ? (0, I.x)()
              : (0, x.tU)(t.config)
                ? (0, H.hJ)(t, n, o)
                : (0, x.HG)(t.config)
                  ? (0, H.cf)(t, n, o)
                  : (0, x.ks)(t.config)
                    ? (0, H.Df)(t, n, o)
                    : (0, H.rx)({ quest: t, sourceQuestContent: o })
            : (0, V.E)());
    }, [t, _, E, n, i, a, c, u, o]);
  }
  function $(e) {
    let { useReducedMotion: t, className: n } = e,
      [s, l] = (0, o.z)(() => ({})),
      c = r.useRef(!1),
      u = (0, a.animated)(d.RefreshIcon);
    return {
      render: () =>
        (0, i.jsx)(u, { className: n, style: t ? void 0 : s, color: "currentColor", size: "xs" }),
      startAnimation: function (e) {
        ((c.current = !0),
          l({
            from: { rotate: "0deg" },
            to: { rotate: "360deg" },
            config: { tension: 750, mass: 5, friction: 100 },
            loop: () => e ?? c.current,
            immediate: t,
          }));
      },
      stopAnimation: () => {
        c.current = !1;
      },
    };
  }
  let z = (e, t, n) => {
    let { message: r, xboxURL: a } = (0, L.UX)(),
      l = (0, v.Ut)(),
      o = (0, M.wW)();
    return (0, i.jsx)("span", {
      onClick: function (i) {
        let r = i.target;
        if (r?.tagName?.toLowerCase() !== "a") return;
        let d =
          r.getAttribute("href") === a
            ? b.Cy.HOW_TO_HELP_ARTICLE_XBOX
            : b.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION;
        (0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_how_to_help_article")
          ? (0, h.r)({
              type: f.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: e,
              questContentCTA: d,
              surfaceId: t,
              sourceQuestContent: n,
              impressionId: o(),
            })
          : l({ questId: e, questContent: t, questContentCTA: d, sourceQuestContent: n });
      },
      children: r,
    });
  };
  function X(e) {
    return (0, k.vl)(e)
      ? e.config.features.includes(j.Li.CLOUD_GAMING_ACTIVITY)
        ? { text: Y.intl.string(Y.t["+qoymD"]), questContentCTA: b.Cy.START_QUEST }
        : { text: Y.intl.string(Y.t.E4kW5O), questContentCTA: b.Cy.START_QUEST }
      : (0, k.Ov)(e)
        ? { text: Y.intl.string(Y.t.CkUzLd), questContentCTA: b.Cy.START_QUEST }
        : { text: Y.intl.string(Y.t.l7E81v), questContentCTA: b.Cy.ACCEPT_QUEST };
  }
  function Z(e) {
    let {
        quest: t,
        progressState: n,
        questContent: i,
        questContentPosition: a,
        questContentRowIndex: s,
        inGiftInventory: l,
        isVideoQuest: o,
        inGameQuest: d,
        sourceQuestContent: c,
      } = e,
      u = K({
        quest: t,
        questContent: i,
        questContentPosition: a,
        questContentRowIndex: s,
        sourceQuestContent: c,
      }),
      _ = (0, L.RR)({ quest: t }),
      E = (0, L.fc)(t),
      A = (0, M.vU)()?.getId(),
      { launchInGameActivity: h } = (0, L.zW)(t),
      f = (0, F.vA)(t);
    return r.useMemo(() => {
      switch (n) {
        case L.F3.UNACCEPTED:
          let e = Y.intl.string(Y.t.kUQLMJ),
            r = b.Cy.ACCEPT_QUEST;
          return (
            o && ((e = Y.intl.string(Y.t.umdNin)), (r = b.Cy.START_QUEST)),
            (d || (0, k.vl)(t)) && ({ text: e, questContentCTA: r } = X(t)),
            {
              text: e,
              tooltipText: null,
              onClick: async () => {
                if ((0, k.K$)(t)) {
                  (await (0, N.Oy)(t.id, {
                    questContent: i,
                    questContentCTA: r,
                    questContentPosition: a,
                    questContentRowIndex: s,
                    sourceQuestContent: c,
                  }),
                    (0, H.Fy)(t));
                  return;
                }
                (o ||
                  f ||
                  (0, N.Oy)(t.id, {
                    questContent: i,
                    questContentCTA: r,
                    questContentPosition: a,
                    questContentRowIndex: s,
                    sourceQuestContent: c,
                  }),
                  o
                    ? await (0, H.e0)(t, {
                        questContent: i,
                        questContentCTA: r,
                        sourceQuestContent: c,
                        sourceQuestContentCTA: b.Cy.ACCEPT_QUEST,
                        questContentPosition: a,
                        questContentRowIndex: s,
                      })
                    : f &&
                      (await (0, N.Oy)(t.id, {
                        questContent: i,
                        questContentCTA: r,
                        questContentPosition: a,
                        questContentRowIndex: s,
                        sourceQuestContent: c,
                      }),
                      h()));
              },
            }
          );
        case L.F3.ACCEPTED:
        case L.F3.IN_PROGRESS:
          if (_ && l)
            return {
              text: Y.intl.string(Y.t.Cfye4v),
              tooltipText: null,
              onClick: () =>
                (0, G.se)(
                  { quest: t },
                  {
                    content: i,
                    ctaContent: b.Cy.CONNECT_CONSOLE,
                    position: a,
                    rowIndex: s,
                    impressionId: A,
                    sourceQuestContent: c,
                  },
                ),
            };
          if ((0, k.K$)(t))
            return {
              text: Y.intl.string(Y.t["/cXIc6"]),
              tooltipText: null,
              onClick: () => {
                (0, H.Fy)(t);
              },
            };
          if (o)
            return {
              text: (0, B.WM)(E),
              tooltipText: Y.intl.string(Y.t.hsbwjv),
              onClick: () =>
                (0, H.d5)({
                  quest: t,
                  questContent: i,
                  sourceQuestContent: c,
                  sourceQuestContentCTA: b.Cy.WATCH_VIDEO,
                }),
            };
          else if (f) {
            let { text: e } = X(t);
            return {
              text: e,
              tooltipText: Y.intl.string(Y.t.hsbwjv),
              onClick: () => {
                h();
              },
            };
          }
          return {
            text: Y.intl.string(Y.t.cfY4PE),
            tooltipText: Y.intl.string(Y.t.hsbwjv),
            onClick: null,
          };
        case L.F3.COMPLETED:
          return { text: Y.intl.string(Y.t.cfY4PE), tooltipText: null, onClick: u };
        case L.F3.CLAIMED:
          return {
            tooltipText: null,
            onClick: u,
            text: (0, x.r7)(t.config) ? Y.intl.string(Y.t.bAGFz3) : Y.intl.string(Y.t.vTgCWx),
          };
      }
    }, [n, o, _, l, u, t, i, a, s, A, E, d, h, c, f]);
  }
  function q() {
    return (
      (0, P.kW)(O.p9.DESKTOP_ACCOUNT_PANEL_AREA),
      (0, P.r8)(O.p9.DESKTOP_ACCOUNT_PANEL_AREA, O.uF.QUEST_BAR_V2)
    );
  }
  function Q(e) {
    let { quest: t } = e,
      n = (0, D.s)(),
      i = (0, L.LS)(t),
      { premiumSubscription: r } = (0, l.cf)([T.A], () => ({
        premiumSubscription: T.A.getPremiumSubscription(),
      })),
      a = (0, l.bG)([C.A], () => null != C.A.getQuestPreviewOverride(O.uF.QUEST_BAR_V2), []);
    if (null == t) return { isQuestBarVisible: !1, reason: "quest_is_null" };
    let s = t.userStatus?.claimedAt != null;
    if (a && !s) return { isQuestBarVisible: !0, reason: "quest_bar_visible" };
    if ((0, x.K9)(t.config) && r?.isPurchasedExternally)
      return { isQuestBarVisible: !1, reason: "premium_subscription_is_purchased_externally" };
    let o = null != t.userStatus && (0, w.gO)(t.userStatus, O.uF.QUEST_BAR);
    return s
      ? { isQuestBarVisible: !1, reason: "quest_claimed" }
      : i
        ? { isQuestBarVisible: !1, reason: "quest_expired" }
        : n
          ? o
            ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
            : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
          : { isQuestBarVisible: !1, reason: "quest_not_eligible_for_quests" };
  }
  function J() {
    let e = (function (e) {
        let { isQuestBarVisible: t } = Q({ quest: e.type === s.p.QUEST ? e.quest : null });
        switch (e.type) {
          case s.p.QUEST:
            return t;
          case s.p.BOUNTY:
          case s.p.NO_FILL:
            return !1;
        }
      })(q()),
      { lastFetchedCurrentQuests: t, lastFetchedQuestToDeliver: n } = (0, l.cf)([C.A, A.A], () => ({
        lastFetchedCurrentQuests: C.A.lastFetchedCurrentQuests,
        lastFetchedQuestToDeliver: A.A.lastFetchedQuestToDeliver,
      }));
    return { isQuestBarEmpty: !e, hasLoadedQuestBar: 0 !== t && 0 !== n };
  }
  let ee = { leading: !0, trailing: !1 };
  function et(e) {
    let { isShareable: t, questId: n, trackingCtx: i } = e,
      a = (0, M.wW)();
    return (0, E.I)(
      r.useCallback(() => {
        t &&
          ((0, U.Xm)(n, { ...i, impressionId: a() }),
          (0, c.P)((0, u.o)(Y.intl.string(Y.t["+5kSoW"]), _.Ck.SUCCESS)));
      }, [t, n, i, a]),
      3e3,
      [],
      ee,
    );
  }
  function en() {
    let e = (0, l.bG)([A.A], () => A.A.getQuestHomeHero()),
      [t, n] = r.useState(() => Date.now()),
      i = null != e ? Date.parse(e.endsAt) : null,
      a = null != e;
    return (r.useEffect(() => {
      if (!a) return;
      let e = setInterval(() => n(Date.now()), 3e4);
      return () => clearInterval(e);
    }, [a]),
    null == e || null == i || Number.isNaN(i) || t >= i)
      ? null
      : e;
  }
  function ei(e) {
    let [t, n] = r.useState(!0),
      [i, a] = r.useState(!1),
      [o, d] = r.useState(!1),
      c = (0, l.bG)([A.A], () => A.A.isFetchingQuestHomeHero()),
      u = en();
    (r.useEffect(() => {
      !(async function () {
        try {
          null != e ? await (0, N.IV)(e) : await (0, N.Yf)();
        } catch (e) {
          d(!0);
        } finally {
          n(!1);
        }
      })();
    }, [e]),
      r.useEffect(() => {
        !(async function () {
          try {
            if (null == u) return;
            if (null == u.heroImage) {
              let e = Error("Hero image is missing");
              (!(function (e) {
                let { questHomeHero: t, assetId: n, error: i } = e,
                  r = i instanceof Error ? i.message : null;
                (m.default.track(W.HAw.AD_ASSET_LOADING_FAILURE, {
                  source: j.rE.QUEST_HOME_DESKTOP,
                  ad_creative_id: t.id,
                  ad_creative_type: s.p.QUEST_HOME_HERO,
                  asset_id: n,
                }),
                  S.A.captureException(
                    Error(
                      `Error loading asset: ${null != r ? `${r}, ` : ""}${n}, QuestHomeHeroPreload`,
                    ),
                    { tags: { source: j.rE.QUEST_HOME_DESKTOP } },
                  ));
              })({ questHomeHero: u, assetId: "QuestHomeHeroBackground_heroImage", error: e }),
                a(!0));
              return;
            }
            let e = [
              null != u.heroVideo ? (0, y.WV)(u.heroVideo) : null,
              u.heroImage,
              u.sponsorImage,
            ].filter((e) => null != e);
            await Promise.all(e.map(g.NN));
          } catch (e) {}
        })();
      }, [u]));
    let _ = !t && !c && !o && !i && null == e && null == u;
    return { questHomeHero: o || i ? null : u, isLoading: t || c, confirmedEmpty: _ };
  }
  function er(e) {
    let t = en(),
      { isShelfEnabled: n } = (0, L.t9)(t);
    return !n && null != t && (0, F.I0)(t, e);
  }
}
