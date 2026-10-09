/* Recovered shipped factory. Module 657792.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7104588..7116711
 * Raw property SHA-256: 0afc87e27f97e1fb7d9a7ec908e1523d5d2ea0bffe97bb59079ae6a96f7b32ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => B, Z: () => V });
  var i = n(477900),
    r = n(582128),
    a = n(172218),
    s = n(323889),
    l = n(17928),
    o = n(475743),
    d = n(531685),
    c = n(132500),
    u = n(731738),
    _ = n(964486),
    E = n(274670),
    A = n(144779),
    h = n(7588),
    f = n(657375),
    I = n(692184),
    p = n(929482),
    T = n(345353),
    m = n(69114),
    g = n(807393),
    S = n(723702),
    N = n(396813),
    C = n(859703),
    O = n(104886),
    R = n(710969),
    L = n(977416),
    y = n(851936),
    D = n(561844),
    v = n(590202),
    b = n(910463),
    M = n(971649),
    P = n(823784),
    U = n(653819);
  n(23766);
  var w = n(652215);
  let G = new Set();
  class x {
    id;
    entity;
    questContent;
    triggeredByStatusChange;
    trackGuildAndChannelMetadata;
    questContentPosition;
    questContentRowIndex;
    sourceQuestContent;
    heartbeatTimeoutId;
    lastBeatTime;
    minViewTimeReachedTimeoutId;
    minViewTimeSeconds;
    minViewportPercentage;
    isQuestEnrollmentBlocked;
    onImpressionCallback;
    isRunning = !1;
    iosAttributionRegistered = !1;
    migrateQuestContentLoadedToCaptureAdUserAction;
    migrateQuestContentViewedToCaptureAdUserAction;
    constructor(e) {
      const {
        adContentIds: t,
        adCreativeType: n,
        relatedQuestId: i,
        noFillDecision: r,
        questContent: a,
        triggeredByStatusChange: l,
        trackGuildAndChannelMetadata: o,
        questContentPosition: d,
        questContentRowIndex: u,
        minViewTimeSeconds: _ = 1,
        isQuestEnrollmentBlocked: E,
        onImpression: A,
        sourceQuestContent: h,
      } = e;
      ((this.id = (0, c.A)()),
        (this.questContent = a),
        (this.questContentPosition = d),
        (this.minViewTimeSeconds = _),
        (this.minViewportPercentage = 0.5),
        (this.trackGuildAndChannelMetadata = o),
        (this.triggeredByStatusChange = l),
        (this.questContentRowIndex = u),
        (this.isQuestEnrollmentBlocked = E),
        (this.onImpressionCallback = A),
        (this.sourceQuestContent = h),
        (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, O.E5)(
          O.kI.STEP_1_LOADED,
          "quest_content_impression",
        )),
        (this.migrateQuestContentViewedToCaptureAdUserAction = (0, O.E5)(
          (0, R.xn)(a, n) ? O.kI.STEP_5_VIEWED_IMPRESSION : O.kI.STEP_4_VIEWED_NON_IMPRESSION,
          "quest_content_impression",
        )),
        n === s.p.QUEST
          ? (this.entity = { adContentIds: t, adCreativeType: n })
          : (this.entity = {
              adContentIds: t,
              adCreativeType: n,
              relatedQuestId: i,
              noFillDecision: r,
            }));
    }
    getId() {
      return this.id;
    }
    getQuestContentPosition() {
      return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
      let t = (0, R.HN)(this.questContent);
      null != t && (0, R.xn)(this.questContent, this.entity.adCreativeType) && G.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
      let t = (0, R.HN)(this.questContent);
      return (
        null != t && !G.has(`${e}_${t}`) && (0, R.xn)(this.questContent, this.entity.adCreativeType)
      );
    };
    maybeRegisterIosAttributionImpression = (e, t) => {
      if (this.iosAttributionRegistered || !(0, h.C$)()) return;
      let n = (0, p.BU)();
      null == n
        ? (0, I.$8)(I.vI.NO_FRAMEWORK, n, this.id)
        : null == t
          ? (0, I.$8)(I.vI.NO_METADATA, n, this.id)
          : (0, h.Oh)(this.sourceQuestContent, e)
            ? ((0, f.RH)({ impressionId: this.id, metadataSealed: t, framework: n }),
              (this.iosAttributionRegistered = !0))
            : (0, I.$8)(I.vI.NOT_SKAN_ENABLED, n, this.id);
    };
    onMinViewTimeReached = async () => {
      let e = await (0, T.N)((0, v.jO)(this.questContent)),
        t = {
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent,
        },
        n = {
          min_view_time_seconds: this.minViewTimeSeconds,
          min_viewport_percentage: this.minViewportPercentage,
          triggered_by_status_change: this.triggeredByStatusChange,
          apple_advertising_id: null != e && (0, S.isIOS)() ? e.advertisingId : null,
          android_advertising_id: null != e && (0, S.isAndroid)() ? e.advertisingId : null,
          ...(0, m.A)(),
          ...(0, b.X)(this.questContent),
        };
      (this.entity.adContentIds.forEach((i, r) => {
        let a = (0, R.L4)(this.sourceQuestContent, i),
          l = this.shouldExtendSession(i);
        if ((this.trackViewedPlacement(i), this.migrateQuestContentViewedToCaptureAdUserAction)) {
          if (this.entity.adCreativeType === s.p.QUEST) {
            let e = this.entity.adContentIds[r],
              t = C.A.getQuest(e);
            null == t || (0, L.Ic)(t) || (0, N.zh)(s.p.QUEST, [e]);
          }
          let t = {
            type: (0, R.xn)(this.questContent, this.entity.adCreativeType)
              ? A.F.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION
              : A.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
            surfaceId: this.questContent,
            sourceQuestContent: this.sourceQuestContent,
            impressionId: this.id,
            triggeredByStatusChange: this.triggeredByStatusChange,
            minViewTimeSeconds: this.minViewTimeSeconds,
            minViewportPercentage: this.minViewportPercentage,
            isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
            shouldExtendSession: l,
            adUser: e,
            questContentPosition: this.questContentPosition,
            questContentRowIndex: this.questContentRowIndex,
            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          };
          (this.entity.adCreativeType === s.p.QUEST
            ? (0, E.r)({
                ...t,
                adCreativeType: this.entity.adCreativeType,
                adCreativeId: this.entity.adContentIds[r],
              })
            : null != this.entity.relatedQuestId
              ? (0, E.r)({
                  ...t,
                  adCreativeType: this.entity.adCreativeType,
                  adCreativeId: this.entity.adContentIds[r],
                  relatedQuestId: this.entity.relatedQuestId,
                })
              : (0, E.r)({
                  ...t,
                  adCreativeType: this.entity.adCreativeType,
                  adCreativeId: this.entity.adContentIds[r],
                  ...(null != this.entity.noFillDecision
                    ? { noFillDecision: this.entity.noFillDecision }
                    : {}),
                }),
            (0, y.L)().info(
              `${i} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, v.jO)(this.questContent)}`,
              { impressionId: this.id },
            ));
          return;
        }
        if (this.entity.adCreativeType === s.p.QUEST) {
          let e = this.entity.adContentIds[r],
            i = C.A.getQuest(e);
          (null == i || (0, L.Ic)(i) || (0, N.zh)(s.p.QUEST, [e]),
            (0, y.L)().info(
              `${i?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, v.jO)(this.questContent)}`,
              { impressionId: this.id },
            ),
            (0, D.av)({
              ...t,
              shouldExtendSession: l,
              questId: e,
              event: w.HAw.QUEST_CONTENT_VIEWED,
              properties: {
                ...n,
                ...this.commonProperties(),
                metadata_sealed: a ?? null,
                search_session_id: (0, P.tv)()?.uuid ?? null,
                traffic_metadata_sealed: (0, R.Gp)(this.sourceQuestContent, i?.id) ?? null,
              },
            }));
        } else {
          let e = this.entity.adContentIds[r];
          ((0, y.L)().info(
            `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, v.jO)(this.questContent)}`,
            { impressionId: this.id },
          ),
            (0, D.Qg)({
              ...t,
              shouldExtendSession: l,
              adContentId: e,
              relatedQuestId: this.entity.relatedQuestId,
              noFillDecision: this.entity.noFillDecision,
              adCreativeType: this.entity.adCreativeType,
              event: w.HAw.QUEST_CONTENT_VIEWED,
              properties: { ...n, ...this.commonProperties() },
            }));
        }
      }),
        this.onImpressionCallback?.());
    };
    beat = (() => {
      var e = this;
      return function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (null != e.lastBeatTime) {
          let n = Math.round(Date.now() - e.lastBeatTime),
            i = {
              trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
              sourceQuestContent: e.sourceQuestContent,
            },
            r = {
              is_termination_beat: t,
              viewed_time_ms: n,
              triggered_by_status_change: e.triggeredByStatusChange,
            };
          e.entity.adContentIds.forEach((a, l) => {
            if (e.entity.adCreativeType === s.p.QUEST) {
              let a = e.entity.adContentIds[l],
                s = C.A.getQuest(a);
              ((0, y.L)().info(
                `${s?.config.messages.questName ?? a} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                { impressionId: e.id },
              ),
                (0, D.av)({
                  ...i,
                  questId: a,
                  event: w.HAw.QUEST_CONTENT_VIEW_TIME,
                  properties: { ...r, ...e.commonProperties() },
                }));
            } else {
              let a = e.entity.adContentIds[l];
              ((0, y.L)().info(
                `${a} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                { impressionId: e.id },
              ),
                (0, D.Qg)({
                  ...i,
                  adContentId: a,
                  relatedQuestId: e.entity.relatedQuestId,
                  noFillDecision: e.entity.noFillDecision,
                  adCreativeType: e.entity.adCreativeType,
                  event: w.HAw.QUEST_CONTENT_VIEW_TIME,
                  properties: { ...r, ...e.commonProperties() },
                }));
            }
          });
        }
        e.lastBeatTime = Date.now();
      };
    })();
    commonProperties = () => ({
      impression_id: this.id,
      is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
      ...(0, v.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
      let { triggeredByStatusChange: t } = e;
      return (
        this.stop(),
        new x({
          questContent: this.questContent,
          questContentRowIndex: this.questContentRowIndex,
          questContentPosition: this.questContentPosition,
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          triggeredByStatusChange: t,
          isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
          onImpression: this.onImpressionCallback,
          sourceQuestContent: this.sourceQuestContent,
          ...this.entity,
        })
      );
    };
    start = () => {
      (this.stop(!1),
        (this.lastBeatTime = Date.now()),
        (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4)),
        (this.minViewTimeReachedTimeoutId = window.setTimeout(
          this.onMinViewTimeReached,
          1e3 * this.minViewTimeSeconds,
        )));
      let e = {
          trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
          sourceQuestContent: this.sourceQuestContent,
        },
        t = { triggered_by_status_change: this.triggeredByStatusChange };
      (this.entity.adContentIds.forEach((n, i) => {
        let r = (0, R.L4)(this.sourceQuestContent, n),
          a = (0, R.s9)(this.sourceQuestContent, n);
        if (
          (this.maybeRegisterIosAttributionImpression(n, a),
          this.migrateQuestContentLoadedToCaptureAdUserAction)
        ) {
          let e =
            this.entity.adCreativeType === s.p.QUEST
              ? {
                  adCreativeType: this.entity.adCreativeType,
                  adCreativeId: this.entity.adContentIds[i],
                }
              : {
                  adCreativeType: this.entity.adCreativeType,
                  adCreativeId: this.entity.adContentIds[i],
                  relatedQuestId: this.entity.relatedQuestId,
                  noFillDecision: this.entity.noFillDecision,
                };
          (0, E.r)({
            type: A.F.END_CONTENT_LOAD,
            surfaceId: this.questContent,
            sourceQuestContent: this.sourceQuestContent,
            impressionId: this.id,
            triggeredByStatusChange: this.triggeredByStatusChange,
            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
            questContentPosition: this.questContentPosition,
            questContentRowIndex: this.questContentRowIndex,
            ...e,
          });
          return;
        }
        if (this.entity.adCreativeType === s.p.QUEST) {
          let n = this.entity.adContentIds[i],
            a = C.A.getQuest(n);
          ((0, y.L)().info(
            `${a?.config.messages.questName ?? n} Quest became visible at ${(0, v.jO)(this.questContent)}`,
            { impressionId: this.id },
          ),
            (0, D.av)({
              ...e,
              questId: n,
              event: w.HAw.QUEST_CONTENT_LOADED,
              properties: {
                ...t,
                metadata_sealed: r ?? null,
                ...this.commonProperties(),
                traffic_metadata_sealed: (0, R.Gp)(this.sourceQuestContent, a?.id) ?? null,
              },
            }));
        } else {
          let n = this.entity.adContentIds[i];
          ((0, y.L)().info(`${n} ad content became visible at ${(0, v.jO)(this.questContent)}`, {
            impressionId: this.id,
          }),
            (0, D.Qg)({
              ...e,
              adContentId: n,
              relatedQuestId: this.entity.relatedQuestId,
              noFillDecision: this.entity.noFillDecision,
              adCreativeType: this.entity.adCreativeType,
              event: w.HAw.QUEST_CONTENT_LOADED,
              properties: { ...t, ...this.commonProperties() },
            }));
        }
      }),
        g.A.increment({
          name: u.K.QUEST_CONTENT_IMPRESSION,
          tags: [`quest_content:${(0, v.jO)(this.questContent)}`],
        }),
        (this.isRunning = !0));
    };
    stop = (() => {
      var e = this;
      return function () {
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        (t && e.beat(!0),
          (e.lastBeatTime = void 0),
          clearInterval(e.heartbeatTimeoutId),
          clearTimeout(e.minViewTimeReachedTimeoutId),
          (e.isRunning = !1),
          (0, f.bg)(e.id));
      };
    })();
  }
  function k(e) {
    let {
        visible: t,
        visibleChanged: n,
        focused: a,
        reference: o,
        focusedChanged: d,
        sourceQuestContent: c,
      } = e,
      u = (0, M.iY)(e),
      E = e.adCreativeType === s.p.QUEST ? void 0 : e.relatedQuestId,
      A = e.adCreativeType === s.p.QUEST ? void 0 : e.noFillDecision,
      h = r.useRef(null),
      f = (0, l.bG)([C.A], () => null != C.A.questEnrollmentBlockedUntil, []);
    return (
      (0, _.Ay)(() => () => {
        null != h.current && h.current.stop();
      }),
      r.useEffect(() => {
        let i = a && t,
          r = (n || d || u) && i,
          l = ((n || d) && !i) || u;
        if (((r || l) && null != h.current && h.current.stop(), r)) {
          let t = {
            isQuestEnrollmentBlocked: f,
            minViewTimeSeconds: e.minViewTimeSeconds,
            onImpression: e.onImpression,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentRowIndex: e.questContentRowIndex,
            sourceQuestContent: c,
            trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
            triggeredByStatusChange: u,
          };
          (e.adCreativeType === s.p.QUEST
            ? (h.current = new x({
                ...t,
                adContentIds: e.adContentIds,
                adCreativeType: e.adCreativeType,
              }))
            : (h.current = new x({
                ...t,
                adContentIds: e.adContentIds,
                adCreativeType: e.adCreativeType,
                relatedQuestId: E,
                noFillDecision: A,
              })),
            h.current.start());
        }
      }, [
        a,
        t,
        d,
        n,
        e.adContentIds,
        e.onImpression,
        e.questContent,
        e.questContentPosition,
        e.questContentRowIndex,
        e.trackGuildAndChannelMetadata,
        u,
        e.minViewTimeSeconds,
        f,
        c,
        e.adCreativeType,
        E,
        A,
      ]),
      (0, i.jsx)(U.n.Provider, { value: h, children: e.children(o, h) })
    );
  }
  let F = r.memo(function (e) {
    let t,
      n,
      i,
      { focused: c, focusedChanged: u } =
        ((t = (0, l.bG)([d.A], () => d.A.isFocused())),
        (n = (0, o.Ay)(t)),
        (i = t !== n),
        { focused: t, focusedChanged: i }),
      {
        visible: _,
        visibleChanged: E,
        reference: A,
      } = (function (e) {
        let [t, n] = r.useState(!1),
          i = e ?? t,
          s = i !== (0, o.Ay)(i);
        return { visible: i, visibleChanged: s, reference: (0, a.K)((e) => n(e), 0.5) };
      })(e.overrideVisibility),
      { key: h, adContentIds: f } = (0, M.RC)(e),
      I = { ...e, focused: c, focusedChanged: u, visible: _, visibleChanged: E, reference: A };
    return "questOrQuests" in e
      ? (0, r.createElement)(k, { ...I, key: h, adContentIds: f, adCreativeType: s.p.QUEST })
      : (0, r.createElement)(k, {
          ...I,
          key: h,
          adContentIds: f,
          adCreativeType: e.adCreativeType,
        });
  });
  function B(e) {
    return (0, i.jsx)(F, { ...e });
  }
  function V(e) {
    return (0, i.jsx)(F, { ...e });
  }
}
