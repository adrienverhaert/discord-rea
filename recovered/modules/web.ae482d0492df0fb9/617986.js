/* Recovered shipped factory. Module 617986.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7138412..7151345
 * Raw property SHA-256: ec02c0dd9379eed9e428469bfc58f0d96fdf36e5af88a543a857d9ea08e845ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    QA: () => eo,
    Df: () => ee,
    FS: () => ei,
    z6: () => ea,
    cf: () => J,
    hJ: () => et,
    zg: () => ec,
    q$: () => ed,
    mA: () => z.m,
    Zc: () => er,
    gC: () => eu,
    Fy: () => e_,
    _x: () => Q,
    d5: () => el,
    f7: () => Z,
    m6: () => en,
    e0: () => eE,
    rx: () => q,
    Q_: () => eh,
    l9: () => es,
    Oz: () => eA,
  }),
    n(323874),
    n(14289),
    n(35956));
  var i = n(477900);
  n(582128);
  var r = n(132500),
    a = n(323889),
    s = n(742821),
    l = n(80703);
  n(876230);
  var o = n(192308),
    d = n(892491),
    c = n(414499),
    u = n(687966),
    _ = n(646270),
    E = n(847374),
    A = n(509434),
    h = n(157559),
    f = n(376728),
    I = n(274670),
    p = n(144779),
    T = n(167189),
    m = n(721779),
    g = n(976860),
    S = n(280450),
    N = n(299091),
    C = n(711014),
    O = n(174459),
    R = n(998218),
    L = n(877062),
    y = n(396813),
    D = n(859703),
    v = n(405670),
    b = n(192444),
    M = n(104886),
    P = n(291749),
    U = n(561844),
    w = n(590202),
    G = n(851936),
    x = n(199510),
    k = n.n(x),
    F = n(792620),
    B = n(660183),
    V = n(977416),
    H = n(901406),
    j = n(814793),
    W = n(753386),
    Y = n(448967),
    K = n(190107),
    $ = n(652215),
    z = n(216934);
  async function X(e) {
    try {
      let t = (0, m.br)(e);
      if (null == t || t.type !== T.I.INVITE) return !1;
      let n = N.A.getInvite(t.code);
      if (null == n) {
        let { invite: e } = await f.Ay.resolveInvite(t.code, "Markdown Link");
        n = e;
      }
      if (null == n) return !1;
      let i = C.Ay.getFlattenedGuildIds(),
        r = n?.guild?.id;
      return null != r && i.includes(r);
    } catch (e) {
      return !1;
    }
  }
  async function Z(e) {
    try {
      if (R.A.isDiscordUrl(e)) return !0;
      return await X(e);
    } catch (e) {
      return !1;
    }
  }
  function q(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
      let { default: e } = await Promise.all([
        n.e("730931"),
        n.e("132073"),
        n.e("644013"),
        n.e("896691"),
        n.e("971156"),
        n.e("260009"),
        n.e("779367"),
        n.e("552653"),
        n.e("85427"),
        n.e("247917"),
        n.e("89530"),
        n.e("64769"),
        n.e("992956"),
        n.e("880150"),
        n.e("490743"),
        n.e("457428"),
        n.e("7452"),
        n.e("529787"),
        n.e("60002"),
        n.e("189423"),
        n.e("415695"),
        n.e("219798"),
        n.e("691398"),
        n.e("266201"),
        n.e("752704"),
        n.e("56606"),
        n.e("206516"),
        n.e("327545"),
        n.e("163466"),
        n.e("227652"),
        n.e("234017"),
        n.e("629972"),
        n.e("40791"),
        n.e("358404"),
        n.e("996907"),
        n.e("831130"),
        n.e("398929"),
        n.e("377989"),
        n.e("788029"),
        n.e("505928"),
        n.e("752657"),
        n.e("747973"),
        n.e("395919"),
        n.e("885251"),
        n.e("953840"),
        n.e("496818"),
        n.e("587618"),
        n.e("985788"),
        n.e("645499"),
        n.e("615643"),
        n.e("454048"),
        n.e("300699"),
        n.e("349619"),
        n.e("543039"),
        n.e("599666"),
        n.e("244560"),
        n.e("398125"),
        n.e("221825"),
        n.e("253729"),
        n.e("930758"),
        n.e("827708"),
        n.e("266900"),
        n.e("901555"),
        n.e("948804"),
        n.e("593600"),
        n.e("695445"),
        n.e("811310"),
        n.e("611523"),
        n.e("707826"),
        n.e("199999"),
        n.e("890027"),
        n.e("183776"),
        n.e("417286"),
        n.e("776195"),
        n.e("672727"),
        n.e("809915"),
        n.e("662174"),
        n.e("87306"),
        n.e("361626"),
        n.e("747017"),
        n.e("165595"),
        n.e("445124"),
        n.e("913823"),
        n.e("851130"),
        n.e("445421"),
        n.e("832823"),
        n.e("761935"),
        n.e("511527"),
        n.e("763070"),
        n.e("381933"),
        n.e("187110"),
        n.e("502018"),
        n.e("249366"),
        n.e("728633"),
        n.e("628439"),
        n.e("757238"),
        n.e("92678"),
        n.e("570506"),
        n.e("225990"),
        n.e("539620"),
        n.e("133902"),
        n.e("485393"),
        n.e("292583"),
        n.e("973794"),
        n.e("123353"),
        n.e("401590"),
        n.e("498215"),
        n.e("27773"),
        n.e("252264"),
        n.e("836863"),
        n.e("593176"),
        n.e("621624"),
        n.e("836545"),
        n.e("784041"),
        n.e("466322"),
        n.e("858514"),
        n.e("344265"),
        n.e("401827"),
        n.e("170653"),
        n.e("869546"),
        n.e("682337"),
        n.e("238412"),
        n.e("637721"),
        n.e("454625"),
        n.e("231578"),
        n.e("288705"),
        n.e("35485"),
        n.e("837687"),
        n.e("324761"),
        n.e("653849"),
        n.e("159957"),
        n.e("932606"),
        n.e("285350"),
        n.e("669558"),
        n.e("919885"),
        n.e("271217"),
        n.e("377022"),
        n.e("212466"),
        n.e("307865"),
        n.e("536037"),
        n.e("769539"),
      ]).then(n.bind(n, 130190));
      return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
  }
  function Q(e) {
    let { quest: t, sourceQuestContent: r } = e;
    (0, o.openModalLazy)(async () => {
      let { default: e } = await Promise.all([
        n.e("788029"),
        n.e("505928"),
        n.e("885251"),
        n.e("953840"),
        n.e("115308"),
        n.e("388250"),
        n.e("782208"),
        n.e("454048"),
        n.e("811310"),
        n.e("913823"),
        n.e("292583"),
        n.e("836863"),
        n.e("466322"),
        n.e("682337"),
        n.e("454625"),
        n.e("35485"),
        n.e("363618"),
        n.e("324761"),
        n.e("653849"),
        n.e("932606"),
        n.e("285350"),
        n.e("669558"),
        n.e("919885"),
        n.e("672877"),
        n.e("689393"),
        n.e("377022"),
        n.e("506286"),
        n.e("212466"),
        n.e("394704"),
        n.e("873551"),
        n.e("334853"),
      ]).then(n.bind(n, 205604));
      return (n) => (0, i.jsx)(e, { ...n, initialQuest: t, sourceQuestContent: r });
    });
  }
  function J(e, t, r) {
    (0, o.openModalLazy)(async () => {
      let { default: a } = await Promise.all([
        n.e("505928"),
        n.e("752657"),
        n.e("747973"),
        n.e("395919"),
        n.e("885251"),
        n.e("953840"),
        n.e("454048"),
        n.e("811310"),
        n.e("187110"),
        n.e("836863"),
        n.e("324761"),
        n.e("653849"),
        n.e("932606"),
        n.e("285350"),
        n.e("669558"),
        n.e("271217"),
        n.e("377022"),
        n.e("212466"),
        n.e("307865"),
        n.e("826747"),
      ]).then(n.bind(n, 529398));
      return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, location: t, sourceQuestContent: r });
    });
  }
  function ee(e, t, r) {
    (0, o.openModalLazy)(async () => {
      let { default: a } = await Promise.all([
        n.e("171206"),
        n.e("395919"),
        n.e("505928"),
        n.e("885251"),
        n.e("953840"),
        n.e("454048"),
        n.e("811310"),
        n.e("942724"),
        n.e("836863"),
        n.e("324761"),
        n.e("653849"),
        n.e("423532"),
        n.e("753589"),
        n.e("932606"),
        n.e("285350"),
        n.e("669558"),
        n.e("271217"),
        n.e("377022"),
        n.e("888205"),
        n.e("254103"),
        n.e("212466"),
        n.e("307865"),
        n.e("33546"),
        n.e("446098"),
      ]).then(n.bind(n, 589161));
      return (n) => (0, i.jsx)(a, { ...n, initialQuest: e, sourceQuestContent: r, location: t });
    });
  }
  function et(e, t, r, a) {
    (0, o.openModalLazy)(async () => {
      let { default: s } = await Promise.all([
        n.e("629972"),
        n.e("395919"),
        n.e("505928"),
        n.e("885251"),
        n.e("953840"),
        n.e("454048"),
        n.e("300699"),
        n.e("349619"),
        n.e("599666"),
        n.e("244560"),
        n.e("398125"),
        n.e("221825"),
        n.e("930758"),
        n.e("593600"),
        n.e("811310"),
        n.e("707826"),
        n.e("183776"),
        n.e("776195"),
        n.e("87306"),
        n.e("836863"),
        n.e("77473"),
        n.e("324761"),
        n.e("653849"),
        n.e("932606"),
        n.e("285350"),
        n.e("36877"),
        n.e("669558"),
        n.e("627323"),
        n.e("271217"),
        n.e("377022"),
        n.e("212466"),
        n.e("307865"),
        n.e("190948"),
      ]).then(n.bind(n, 651663));
      return (n) =>
        (0, i.jsx)(s, { ...n, initialQuest: e, sourceQuestContent: r, location: t, preview: a });
    });
  }
  function en(e, t, r) {
    (0, o.openModalLazy)(async () => {
      let { default: a } = await Promise.all([n.e("653849"), n.e("981169")]).then(
        n.bind(n, 124232),
      );
      return (n) => (0, i.jsx)(a, { ...n, quest: e, location: t, sourceQuestContent: r });
    });
  }
  function ei() {
    (0, o.openModalLazy)(async () => {
      let { default: e } = await n.e("856086").then(n.bind(n, 700085));
      return (t) => (0, i.jsx)(e, { ...t });
    });
  }
  function er(e, t, r) {
    let { ctaContent: s } = t;
    ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "open_disclosure_modal")
      ? (0, I.r)({
          type: p.F.CLICK_INTERNAL,
          adCreativeType: a.p.QUEST,
          adCreativeId: e.id,
          questContentCTA: s,
          surfaceId: t.content,
          sourceQuestContent: t.sourceQuestContent,
          questContentPosition: t.position,
          impressionId: t.impressionId,
        })
      : (0, U.Y5)({
          questId: e.id,
          questContent: t.content,
          questContentPosition: t.position,
          questContentCTA: s,
          impressionId: t.impressionId,
          sourceQuestContent: t.sourceQuestContent,
        }),
      (0, o.openModalLazy)(
        async () => {
          let { default: a } = await Promise.all([
            n.e("422750"),
            n.e("24922"),
            n.e("678050"),
            n.e("100132"),
          ]).then(n.bind(n, 348559));
          return (n) => (0, i.jsx)(a, { ...n, questContent: t.content, quest: e, returnRef: r });
        },
        {
          onCloseCallback: () => {
            let e = r?.current;
            if (null == e) return;
            let t = 0;
            requestAnimationFrame(function n() {
              var i;
              null == e ||
                ((t += 1),
                document.body.contains(e) &&
                  ((null != (i = document.activeElement) &&
                    document.body.contains(i) &&
                    null !=
                      i.closest('[data-mana-component="modal"], [role="dialog"][tabindex="-1"]')) ||
                    document.activeElement === e ||
                    e.focus(),
                  (null != document.querySelector('[data-mana-component="modal"]') ||
                    document.activeElement !== e) &&
                    t < 90 &&
                    requestAnimationFrame(n)));
            });
          },
        },
      ));
  }
  function ea(e) {
    let t,
      n = (0, G.L)({ quest: e });
    if (Math.random() > 0.01) return;
    let i =
      ((t = [
        {
          key: "NOT_INTERESTED",
          text: (0, F.vv)(e)
            ? B.intl.string(B.t.wHRWkE)
            : B.intl.formatToPlainString(B.t.AZRWVY, { entityName: e.config.messages.gameTitle }),
        },
        { key: "INVALUABLE", text: B.intl.string(B.t.ETU4Na) },
        { key: "TOO_LONG", text: B.intl.string(B.t.uRIIpD) },
        { key: "UNSURE_HOW", text: B.intl.string(B.t["5dxvxs"]) },
        { key: "OTHER", text: B.intl.string(B.t.RFasgu) },
      ]),
      {
        id: "1290718710658629658",
        title: B.intl.string(B.t.ugbhDS),
        subtitle: B.intl.string(B.t.FIYcpC),
        choices: k()(t.slice(0, 4)).concat(t[4]),
      });
    (n.log(`Showing survey ${i.id}`), (0, Y.m)({ questId: e.id, survey: i }));
  }
  function es() {
    return Promise.all([
      n.e("734818"),
      n.e("216870"),
      n.e("505928"),
      n.e("752657"),
      n.e("747973"),
      n.e("348231"),
      n.e("920955"),
      n.e("953840"),
      n.e("808368"),
      n.e("480889"),
      n.e("171120"),
      n.e("392868"),
      n.e("454048"),
      n.e("811310"),
      n.e("809915"),
      n.e("187110"),
      n.e("621624"),
      n.e("344502"),
      n.e("592731"),
      n.e("53374"),
      n.e("482815"),
      n.e("170653"),
      n.e("784103"),
      n.e("198323"),
      n.e("613867"),
      n.e("817852"),
      n.e("390098"),
      n.e("334127"),
      n.e("710638"),
      n.e("912773"),
      n.e("324761"),
      n.e("653849"),
      n.e("434691"),
      n.e("932606"),
      n.e("285350"),
      n.e("669558"),
      n.e("24914"),
      n.e("655602"),
      n.e("825717"),
      n.e("263408"),
      n.e("77375"),
      n.e("479907"),
      n.e("119580"),
    ]).then(n.bind(n, 834135));
  }
  function el(e) {
    let {
      quest: t,
      questContent: n,
      sourceQuestContent: a,
      sourceQuestContentCTA: s,
      autoplay: l = !0,
      skipEnrollmentCheck: c = !1,
    } = e;
    if ((0, F.K$)(t)) return void e_(t);
    if (D.A.isQuestAccessSuspended && t.userStatus?.completedAt == null) return void ei();
    let u = (0, r.A)();
    if (!c && t.userStatus?.enrolledAt == null && !(0, V.Ic)(t)) {
      D.A.isEnrolling(t.id) ||
        (0, y.Oy)(t.id, {
          questContent: n,
          questContentCTA: w.Cy.ACCEPT_QUEST,
          sourceQuestContent: a,
        });
      let e = v.Ay.getState().getVideoProgress(t.id);
      null != e &&
        e.timestampSec > 1 &&
        ((0, y.QG)(t.id),
        O.default.track($.HAw.QUEST_VIDEO_ENROLLMENT_RETRY_ATTEMPTED, {
          quest_id: t.id,
          source_quest_content: (0, w.jO)(a),
          source_quest_content_cta: s,
          video_session_id: u,
        }));
    }
    let { setCaptionEnabled: _, muted: E, volume: A, captionEnabled: h } = v.Ay.getState(),
      { enabled: f, variant: I } = b.Ig.getConfig({ location: K.rE.VIDEO_MODAL }),
      p = null != (0, P.tW)(t, P.fY.VIDEO_PLAYER_CAPTION, void 0, !1);
    E &&
      f &&
      (I === b.sy.AUTO_ENABLE_CAPTIONS && p && !h
        ? _(!0)
        : I === b.sy.AUTO_UNMUTE &&
          (v.Ay.getState().setMuted(!1), 0 === A && v.Ay.getState().setVolume(0.3)));
    let T = performance.now();
    (0, o.openModalLazy)(
      async () => {
        let { default: e } = await es();
        return (n) =>
          (0, i.jsx)(e, {
            ...n,
            openStartClockTime: T,
            questId: t.id,
            autoplay: l,
            videoSessionId: u,
            sourceQuestContent: a,
          });
      },
      {
        modalKey: (0, W.cZ)(t.id),
        backdropStyle: d.F.IMMERSIVE,
        onCloseCallback: () =>
          (0, W.vm)({ questId: t.id, sourceQuestContent: a, videoSessionId: u }),
      },
    );
  }
  function eo(e) {
    let t = (function (e) {
        let t = platform.os?.family;
        if ("Android" === t || "iOS" === t) {
          let t = S.default.getFingerprint(),
            n = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quests/${e}`;
          return (0, s.Ay)(i, { utmSource: "quest", fingerprint: t, attemptId: n });
        }
        return "discord://";
      })(e),
      n = (0, s.X7)(t);
    (null != n &&
      O.default.track($.HAw.DEEP_LINK_CLICKED, {
        fingerprint: (0, l.v)(n.fingerprint),
        attempt_id: n.attemptId,
        source: n.utmSource,
      }),
      L.A.launch(t, (t) => {
        t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
      }));
  }
  function ed(e) {
    let t = (function (e) {
        let t = platform.os?.family;
        if ("Android" === t || "iOS" === t) {
          let t = S.default.getFingerprint(),
            n = (0, s.I_)(),
            i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-preview/${e}`;
          return (0, s.Ay)(i, { utmSource: "quest-preview", fingerprint: t, attemptId: n });
        }
        return "discord://";
      })(e),
      n = (0, s.X7)(t);
    (null != n &&
      O.default.track($.HAw.DEEP_LINK_CLICKED, {
        fingerprint: (0, l.v)(n.fingerprint),
        attempt_id: n.attemptId,
        source: n.utmSource,
      }),
      L.A.launch(t, (t) => {
        t || (0, g.bG)({ pathname: $.BVt.QUEST_HOME, hash: e });
      }));
  }
  function ec(e) {
    let t = (function (e) {
        let t = platform.os?.family;
        if ("Android" !== t && "iOS" !== t) return "discord://";
        let n = new URLSearchParams();
        e.forEach((e) => n.append("ad_creative_ids", e));
        let i = S.default.getFingerprint(),
          r = (0, s.I_)(),
          a = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/quest-home?${n.toString()}`;
        return (0, s.Ay)(a, { utmSource: "quest-home-preview", fingerprint: i, attemptId: r });
      })(e),
      n = (0, s.X7)(t);
    (null != n &&
      O.default.track($.HAw.DEEP_LINK_CLICKED, {
        fingerprint: (0, l.v)(n.fingerprint),
        attempt_id: n.attemptId,
        source: n.utmSource,
      }),
      L.A.launch(t, (e) => {
        e || (0, g.bG)({ pathname: $.BVt.QUEST_HOME });
      }));
  }
  function eu(e, t, r) {
    (0, o.openModalLazy)(async () => {
      let { default: a } = await Promise.all([
        n.e("10058"),
        n.e("64231"),
        n.e("454048"),
        n.e("724285"),
        n.e("199999"),
        n.e("165595"),
        n.e("133902"),
        n.e("486792"),
        n.e("831145"),
        n.e("662355"),
        n.e("59413"),
        n.e("724637"),
        n.e("883922"),
        n.e("899513"),
        n.e("862101"),
      ]).then(n.bind(n, 50292));
      return (n) => (0, i.jsx)(a, { ...n, multiplier: e, orbMultiplierEligibility: t, ...r });
    });
  }
  function e_(e) {
    (0, o.openModalLazy)(async () => {
      let { default: t } = await Promise.all([
        n.e("72338"),
        n.e("241797"),
        n.e("595429"),
        n.e("65407"),
        n.e("748370"),
        n.e("746485"),
      ]).then(n.bind(n, 518420));
      return (n) => (0, i.jsx)(t, { ...n, questId: e.id });
    });
  }
  async function eE(e, t) {
    let { type: n } = await (0, y.Oy)(e.id, {
      questContent: t.questContent,
      questContentCTA: t.questContentCTA,
      sourceQuestContent: t.sourceQuestContent,
      questContentPosition: t.questContentPosition,
      questContentRowIndex: t.questContentRowIndex,
    });
    switch (n) {
      case y.WM.SUCCESS:
        el({
          quest: e,
          questContent: t.questContent,
          sourceQuestContent: t.sourceQuestContent,
          sourceQuestContentCTA: t.sourceQuestContentCTA,
        });
        break;
      case y.WM.UNKNOWN_ERROR:
        h.A.show({ title: B.intl.string(B.t.R0RpRX), body: B.intl.string(B.t.OXD41D) });
      case y.WM.PREVIOUS_IN_FLIGHT_REQUEST:
    }
  }
  function eA(e) {
    if ((0, j.vA)(e))
      return e.config.features.includes(K.Li.CLOUD_GAMING_ACTIVITY) ? c.h : u.GameControllerIcon;
  }
  function eh(e) {
    let t = (0, H.bg)(e);
    return (0, F.K$)(e)
      ? { icon: _.u }
      : t.length > 0 && !(0, F.I6)(e)
        ? { icon: E.a, iconPosition: "end" }
        : (0, F.no)(e)
          ? { icon: A.I, iconPosition: "end" }
          : { icon: void 0, iconPosition: void 0 };
  }
}
