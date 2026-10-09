/* Recovered shipped factory. Module 270045.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7116712..7123548
 * Raw property SHA-256: 169bece52ae007234e5a26ddae4ae7f419b546b4e03d6ec1b23de224305c5c84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => H });
  var i = n(477900),
    r = n(582128),
    a = n(323889),
    s = n(17928),
    l = n(739187),
    o = n(857250),
    d = n(97483),
    c = n(477782),
    u = n(980707),
    _ = n(743368),
    E = n(173936),
    A = n(577473),
    h = n(922016),
    f = n(442433),
    I = n(181658),
    p = n(274670),
    T = n(144779),
    m = n(976860),
    g = n(246356),
    S = n(957565),
    N = n(396813),
    C = n(859703),
    O = n(738822),
    R = n(104886),
    L = n(866157),
    y = n(18437),
    D = n(590202),
    v = n(971649),
    b = n(651892),
    M = n(710969),
    P = n(792620),
    U = n(814793),
    w = n(518293),
    G = n(617986),
    x = n(190107),
    k = n(652215),
    F = n(818348),
    B = n(660183);
  function V(e) {
    let t = (0, s.bG)([C.A], () => C.A.getQuestPreviewOverride(O.uF.QUEST_BAR_V2), []),
      n = (0, s.bG)([C.A], () => C.A.getQuestPreviewOverride(O.uF.ACTIVITY_PANEL), []),
      h = (0, s.bG)([C.A], () => C.A.getQuestPreviewOverride(O.uF.QUEST_LIVE_STREAM), []),
      g = (0, s.bG)([C.A], () => C.A.getQuestPreviewOverride(O.uF.MEMBERS_LIST), []),
      V = (0, M.vy)(e.questContent),
      H = [O.uF.QUEST_BAR_V2, O.uF.QUEST_BAR].includes(e.questContent),
      j = (0, y.Ut)(),
      W = (0, v.wW)(),
      Y = (0, b.wr)(e.quest),
      K = !0 === e.showShareLink && (0, U.E0)(e.quest.config),
      {
        handleComplete: $,
        handleProgress: z,
        handleResetDismissibilityClick: X,
        handleResetStatusClick: Z,
        handleOverridePreviewClick: q,
      } = (0, L.j$)(e.quest.id),
      Q = (0, L.do)({
        quest: e.quest,
        content: e.questContent,
        ctaContent: D.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
        sourceQuestContent: e.sourceQuestContent,
      }),
      J = (0, w.Lk)({
        isShareable: K,
        questId: e.quest.id,
        trackingCtx: r.useMemo(
          () => ({
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: D.Cy.CONTEXT_MENU_COPY_LINK,
            sourceQuestContent: e.sourceQuestContent,
          }),
          [e.questContent, e.questContentPosition, e.sourceQuestContent],
        ),
      });
    function ee(e) {
      return (0, l.P)((0, o.o)(new I.A(e, e.status).message, d.Ck.FAILURE));
    }
    function et() {
      return (0, N.CV)(e.quest.id).catch(ee);
    }
    let en = (0, L.Ns)(e.quest),
      ei = r.useMemo(
        () =>
          (0, i.jsx)(c.sL, {
            id: "delivery",
            label: "Show in Quest Bar",
            checked: t?.id === e.quest.id,
            action: () => q(O.uF.QUEST_BAR_V2),
          }),
        [q, e.quest.id, t?.id],
      ),
      er = r.useMemo(
        () =>
          (0, i.jsx)(c.sL, {
            id: "activity-panel",
            label: "Show in Activity Panel",
            checked: n?.id === e.quest.id,
            action: () => q(O.uF.ACTIVITY_PANEL),
          }),
        [q, e.quest.id, n?.id],
      ),
      ea = r.useMemo(
        () =>
          (0, i.jsx)(c.sL, {
            id: "channel-call-header",
            label: "Show in Voice Channel Header",
            checked: h?.id === e.quest.id,
            action: () => q(O.uF.QUEST_LIVE_STREAM),
          }),
        [q, e.quest.id, h?.id],
      ),
      es = r.useMemo(
        () =>
          (0, i.jsx)(c.sL, {
            id: "members-list",
            label: "Show in Members List",
            checked: g?.id === e.quest.id,
            action: () => q(O.uF.MEMBERS_LIST),
          }),
        [q, e.quest.id, g?.id],
      ),
      el = r.useCallback(() => {
        (0, m.pX)(k.BVt.QUEST_PREVIEW_TOOL_2(e.quest.id));
      }, [e.quest.id]),
      eo = e.shouldShowDisclosure && e.quest.id !== x.Fw;
    return (0, i.jsxs)(u.W, {
      "data-menu-migrated": !0,
      variant: "fixed",
      onSelect: function () {
        null != e.onSelect ? e.onSelect() : (0, f.Z_)();
      },
      navId: "quests-entry",
      "aria-label": B.intl.string(B.t.ogxXGq),
      onClose: e?.onClose ?? F.tE,
      children: [
        (0, i.jsxs)(
          c.rX,
          {
            children: [
              (0, i.jsx)(c.Dr, {
                id: "play-game",
                label: Y,
                action: Q,
                icon: _.W,
                leadingAccessory: { type: "icon", icon: _.W },
              }),
              K &&
                (0, i.jsx)(c.Dr, {
                  id: "share-link",
                  label: B.intl.string(B.t.RDE0Sc),
                  action: J,
                  icon: E.LinkIcon,
                  leadingAccessory: { type: "icon", icon: E.LinkIcon },
                }),
              en && ei,
              en && er,
              en && ea,
              en && es,
            ],
          },
          "major-actions",
        ),
        (0, i.jsxs)(
          c.rX,
          {
            children: [
              !e.hideLearnMore &&
                (0, i.jsx)(c.Dr, {
                  id: "learn-more",
                  label: B.intl.string(B.t["Ws2Bl+"]),
                  action: function () {
                    ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                      ? (0, p.r)({
                          type: T.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: e.quest.id,
                          questContentCTA: D.Cy.CONTEXT_MENU_LEARN_MORE,
                          surfaceId: e.questContent,
                          sourceQuestContent: e.sourceQuestContent,
                          impressionId: W(),
                          questContentPosition: e.questContentPosition,
                        })
                      : j({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: D.Cy.CONTEXT_MENU_LEARN_MORE,
                          sourceQuestContent: e.sourceQuestContent,
                        }),
                      (0, G.mA)({ fromContent: e.questContent, questId: e.quest.id }));
                  },
                  icon: A.r,
                  leadingAccessory: { type: "icon", icon: A.r },
                }),
              eo &&
                (0, i.jsx)(c.Dr, {
                  id: "display-disclosure",
                  label: B.intl.string(B.t.GcsZKJ),
                  action: function () {
                    (0, G.Zc)(
                      e.quest,
                      {
                        content: e.questContent,
                        position: e.questContentPosition,
                        ctaContent: D.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                        impressionId: W(),
                        sourceQuestContent: e.sourceQuestContent,
                      },
                      e.returnRef,
                    );
                  },
                }),
              V &&
                (0, i.jsx)(c.Dr, {
                  id: "hide-entrypoint",
                  label: B.intl.string(B.t.NN79E9),
                  action: function () {
                    ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu")
                      ? (0, p.r)({
                          type: T.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: e.quest.id,
                          questContentCTA: D.Cy.CONTEXT_MENU_HIDE_CONTENT,
                          surfaceId: e.questContent,
                          sourceQuestContent: e.sourceQuestContent,
                          impressionId: W(),
                          questContentPosition: e.questContentPosition,
                        })
                      : j({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: D.Cy.CONTEXT_MENU_HIDE_CONTENT,
                          sourceQuestContent: e.sourceQuestContent,
                        }),
                      (0, M.vy)(e.questContent) &&
                        ((0, N.g5)(e.quest.id, e.questContent), H && (0, G.z6)(e.quest)));
                  },
                  subtext: B.intl.string(B.t.RK9gxo),
                }),
            ],
          },
          "minor-actions",
        ),
        e.quest.preview &&
          (0, i.jsxs)(
            c.rX,
            {
              label: B.intl.string(B.t["Ape+mm"]),
              children: [
                (0, i.jsx)(c.Dr, { id: "dismiss", label: B.intl.string(B.t.JF6W66), action: X }),
                (0, i.jsx)(c.Dr, {
                  id: "enrollment",
                  label: B.intl.string(B.t.taqkwK),
                  action: function () {
                    (Z(), et());
                  },
                }),
                (0, i.jsx)(c.Dr, {
                  id: "progress",
                  label: B.intl.string(B.t.cKSLr4),
                  action: function () {
                    z(0.9 * Math.random() + 0.03);
                  },
                }),
                (0, i.jsx)(c.Dr, { id: "complete", label: B.intl.string(B.t.jQEfRT), action: $ }),
                (0, P.g5)(e.quest) &&
                  (0, i.jsxs)(c.Dr, {
                    id: "console",
                    label: "Console Heartbeat",
                    children: [
                      (0, i.jsx)(c.Dr, {
                        disabled: !0,
                        id: "status",
                        label: `Status: ${(0, P.YL)(e.quest) ? "alive" : "dead"}`,
                      }),
                      (0, i.jsx)(c.Dr, {
                        id: "start",
                        label: "Start heartbeat (cheatmode)",
                        action: function () {
                          return (0, N.vD)(e.quest.id, !0).catch(ee);
                        },
                      }),
                      (0, i.jsx)(c.Dr, { id: "stop", label: "Stop heartbeat", action: et }),
                    ],
                  }),
                (0, i.jsx)(c.Dr, {
                  id: "copy-quest-id",
                  label: B.intl.string(B.t.oisrFi),
                  action: () => {
                    (0, S.C)(e.quest.id);
                  },
                }),
                (0, i.jsx)(c.Dr, { id: "preview", label: B.intl.string(B.t.tx5Ax5), action: el }),
              ],
            },
            "preview-controls",
          ),
      ],
    });
  }
  function H(e) {
    let {
        children: t,
        onOpen: n,
        onClose: s,
        preventIdle: l,
        quest: o,
        questContent: d,
        questContentPosition: c,
        sourceQuestContent: u,
        ..._
      } = e,
      E = (0, y.Ut)(),
      A = (0, v.wW)(),
      f = r.useRef(null),
      I = r.useCallback(() => {
        ((0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_entry_context_menu_popout")
          ? (0, p.r)({
              type: T.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: o.id,
              questContentCTA: D.Cy.OPEN_CONTEXT_MENU,
              surfaceId: d,
              sourceQuestContent: u,
              impressionId: A(),
              questContentPosition: c,
            })
          : E({
              questId: o.id,
              questContent: d,
              questContentCTA: D.Cy.OPEN_CONTEXT_MENU,
              questContentPosition: c,
              sourceQuestContent: u,
            }),
          null != n && n());
      }, [n, o.id, d, c, E, u, A]);
    return (0, i.jsx)(h.Y, {
      targetElementRef: f,
      onRequestOpen: I,
      onRequestClose: s,
      renderPopout: (e) => {
        let { closePopout: t } = e;
        return l
          ? (0, i.jsx)(g.A, {
              children: (0, i.jsx)(V, {
                ..._,
                quest: o,
                questContent: d,
                questContentPosition: c,
                onClose: t,
                sourceQuestContent: u,
              }),
            })
          : (0, i.jsx)(V, {
              ..._,
              quest: o,
              questContent: d,
              questContentPosition: c,
              onClose: t,
              sourceQuestContent: u,
            });
      },
      animation: h.Y.Animation.NONE,
      children: (e) => (0, i.jsx)("div", { ref: f, children: t(e) }),
    });
  }
}
