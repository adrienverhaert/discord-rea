/* Recovered shipped factory. Module 866157.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7010462..7028104
 * Raw property SHA-256: 35f2cbb97837b37006da87f2e0c8d8521d4ab16d75de3a09d2b419b65e780d88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    O9: () => ej,
    Vn: () => eb,
    Wj: () => ek,
    mL: () => el,
    Cv: () => eQ,
    Yl: () => eR,
    Nb: () => e2,
    tZ: () => eW,
    pT: () => e1,
    UH: () => e8,
    $P: () => e6,
    YW: () => ew,
    zW: () => eq,
    NC: () => ep,
    Hv: () => eO,
    j$: () => eG,
    fc: () => eM,
    SD: () => eS,
    aC: () => eK,
    FA: () => eZ,
    LS: () => eC,
    p5: () => eJ,
    Ns: () => e5,
    Iq: () => eg,
    Qh: () => em,
    t9: () => e7,
    RR: () => eF,
    XD: () => e3,
    ZP: () => eN,
    UX: () => eB,
    mn: () => ef,
    C5: () => e$,
    sb: () => e0,
    I3: () => eP,
    Qo: () => eY,
    In: () => eH,
    H6: () => ez,
    a5: () => eX,
    F3: () => eV,
    L1: () => eT,
    do: () => ey,
    oH: () => eU,
    S5: () => eL,
    Du: () => ex,
  }),
    n(321073),
    n(801541));
  var i,
    r,
    a,
    s = n(582128),
    l = n(435558),
    o = n(181370),
    d = n.n(o),
    c = n(889137),
    u = n(323889),
    _ = n(412703),
    E = n(114046);
  n(731355);
  var A = n(517846),
    h = n(118751),
    f = n(462887),
    I = n(17928),
    p = n(736653),
    T = n(787389),
    m = n(157695),
    g = n(183636),
    S = n(429913);
  n(674658);
  var N = n(27620),
    C = n(773669),
    O = n(885386),
    R = n(734057),
    L = n(30370),
    y = n(287809),
    D = n(174459),
    v = n(927813),
    b = n(403362),
    M = n(975571),
    P = n(723702),
    U = n(158045);
  (n(323874),
    n(14289),
    n(35956),
    n(636537),
    n(73153),
    n(181658),
    n(269936),
    n(107195),
    n(881615),
    n(390595));
  var w = n(626584);
  (n(544180), n(265704));
  var G = n(859703),
    x = n(738822),
    k = n(710969),
    F = n(652215);
  new w.A("BountyActionCreators");
  var B = n(178540),
    V = n(396813),
    H = n(192444),
    j = n(945810);
  (0, j.mj)({
    name: "2026-09-quest-home-bounties-feature-gate",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  let W = (0, j.mj)({
    name: "2026-07-renewable-end-date-sort",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var Y = n(291749),
    K = n(971276),
    $ = n(561844);
  n(590202);
  var z = n(971649),
    X = n(651892),
    Z = n(977416),
    q = n(639214),
    Q = n(576761),
    J = n(901406),
    ee = n(801365),
    et = n(792620),
    en = n(814793),
    ei = n(753386),
    er = n(190107),
    ea = n(202541),
    es = n(660183);
  function el() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { fetchPolicy: "cache-only", callerSource: "unknown" },
      [t, n] = s.useState(!1),
      i = (0, I.yK)([G.A], () => [...G.A.quests.values()]),
      r = (0, I.yK)([G.A], () => [...G.A.excludedQuests.values()]),
      { isFetchingCurrentQuests: a, lastFetchedCurrentQuests: l } = (0, I.cf)([G.A], () => ({
        isFetchingCurrentQuests: G.A.isFetchingCurrentQuests,
        lastFetchedCurrentQuests: G.A.lastFetchedCurrentQuests,
      })),
      o = (0, K.s)();
    return (
      s.useEffect(() => {
        let i;
        switch (e.fetchPolicy) {
          case "cache-only":
            return;
          case "cache-or-network":
            i = 0 === l;
            break;
          case "cache-and-network":
            i = !0;
            break;
          default:
            e.fetchPolicy;
            return;
        }
        if (
          i &&
          o &&
          !t &&
          !a &&
          (n(!0), (0, V.N1)(), (0, P.isMac)() && "focused" !== g.A.getState())
        )
          return;
      }, [e.fetchPolicy, o, t, a, l, e.callerSource]),
      { quests: i, excludedQuests: r, isFetchingCurrentQuests: a, hasFetched: t }
    );
  }
  function eo(e, t, n, i) {
    let r = e.id === er.aJ,
      a = t.id === er.aJ,
      s = r && e.userStatus?.completedAt == null;
    if (s !== (a && t.userStatus?.completedAt == null)) return s ? -1 : 1;
    let l = !(0, Z.Ic)(e),
      o = e.userStatus?.claimedAt != null,
      d = t.userStatus?.claimedAt != null,
      c = e.userStatus?.enrolledAt != null,
      u = t.userStatus?.enrolledAt != null,
      _ = 20 * v.A.Millis.MINUTE,
      E = e4(e, _),
      A = e4(t, _);
    if (l) {
      var h, f, I;
      let r,
        a,
        { questHomeHero: s, isQuestHomeHeroShelfEnabled: l } = n;
      if (null != s && !l) {
        let n = (0, en.I0)(s, e.id),
          i = (0, en.I0)(s, t.id);
        if (n || i) return n ? -1 : 1;
      }
      return E !== A && (E || A)
        ? E
          ? 1
          : -1
        : o !== d
          ? o
            ? 1
            : -1
          : c !== u
            ? c
              ? -1
              : 1
            : ((h = e),
              (f = t),
              (r = (I = i).get(h.id)),
              (a = I.get(f.id)),
              null != r && null != a
                ? r !== a
                  ? r - a
                  : h.id !== f.id
                    ? h.id < f.id
                      ? -1
                      : 1
                    : 0
                : null != r
                  ? -1
                  : null != a
                    ? 1
                    : eI(h.config.expiresAt, f.config.expiresAt, 1));
    }
    return o !== d
      ? o
        ? -1
        : 1
      : c !== u
        ? c
          ? -1
          : 1
        : eI(e.config.expiresAt, t.config.expiresAt, 0);
  }
  function ed(e, t, n) {
    return eI(e.config.startsAt, t.config.startsAt, 0);
  }
  function ec(e, t, n) {
    let i = e.userStatus?.enrolledAt,
      r = t.userStatus?.enrolledAt;
    return null == i && null == r
      ? eI(e.config.expiresAt, t.config.expiresAt, 0)
      : null != i && null == r
        ? -1
        : null == i && null != r
          ? 1
          : eI(i, r, 0);
  }
  function eu(e, t, n) {
    return eI(e.config.expiresAt, t.config.expiresAt, 1);
  }
  function e_(e, t) {
    switch (t) {
      case er.Pc.VIDEO:
        return (0, et.vv)(e);
      case er.Pc.PLAY:
        return (
          (0, et.t)({ quest: e }) ||
          (0, et.fE)({ quest: e }) ||
          (0, et.vl)(e) ||
          (0, et.g5)(e) ||
          (0, et.Cr)(e)
        );
      default:
        return !1;
    }
  }
  function eE(e, t) {
    switch (t) {
      case er.BQ.VIRTUAL_CURRENCY:
        return (0, ee.ks)(e.config);
      case er.BQ.COLLECTIBLE:
        return (0, ee.tU)(e.config);
      case er.BQ.IN_GAME:
        return (0, ee.HG)(e.config) || (0, ee.r7)(e.config);
      default:
        return !1;
    }
  }
  let eA = {},
    eh = {
      questHomeHero: null,
      isQuestHomeHeroShelfEnabled: !1,
      currentUserId: null,
      isRenewableEndDateSortEnabled: !1,
      isMobileQuestHomeSortPriorityEnabled: !1,
    };
  function ef(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eh,
      { sortMethod: r, filters: a } = n,
      s =
        null == a || 0 === a.length
          ? e
          : (function (e, t) {
              if (0 === t.length) return e;
              let n = (0, l.groupBy)(t, "group");
              return e.filter((e) =>
                Object.entries(n).every((t) => {
                  let n,
                    [i, r] = t;
                  return (
                    (n = (function (e) {
                      switch (e) {
                        case "task":
                          return e_;
                        case "reward":
                          return eE;
                      }
                    })(i)),
                    0 === r.length || r.some((t) => n(e, t.filter))
                  );
                }),
              );
            })(e, a),
      o = (function (e, t, n) {
        let i = new Map();
        if (!n || null == t) return i;
        for (let n of e) {
          var r;
          (0, en.iM)(n, er.Li.RENEWABLE_END_DATE) &&
            i.set(n.id, ((r = n.id), d().v3(`${t}:${r}`) >>> 0));
        }
        return i;
      })(s, i.currentUserId, i.isRenewableEndDateSortEnabled),
      c =
        ((t = (function (e) {
          switch (e) {
            case er.kL.MOST_RECENT:
              return ed;
            case er.kL.RECENTLY_ENROLLED:
              return ec;
            case er.kL.EXPIRING_SOON:
              return eu;
            case er.kL.SUGGESTED:
            default:
              return eo;
          }
        })(r)),
        function (e, n) {
          let r = !(0, Z.Ic)(e);
          return !(0, Z.Ic)(n) !== r ? (r ? -1 : 1) : t(e, n, i, o);
        });
    return s.sort(c);
  }
  function eI(e, t, n) {
    return e.localeCompare(t) * (0 === n ? -1 : 1);
  }
  var ep = (((i = {}).ALL = "all"), (i.CLAIMED = "claimed"), (i.PREVIEW_TOOL = "preview_tool"), i),
    eT =
      (((r = {}).TAB = "tab"),
      (r.QUEST_ID = "quest_id"),
      (r.SORT = "sort"),
      (r.FILTER = "filter"),
      (r.AD_CREATIVE_IDS = "ad_creative_ids"),
      r);
  function em(e) {
    let t,
      n,
      i,
      r,
      a,
      l,
      o,
      d,
      c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
      {
        quests: u,
        excludedQuests: _,
        isFetchingCurrentQuests: E,
        hasFetched: A,
      } = el({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" }),
      h = new Map(u.map((e) => [e.id, e])),
      f =
        ((t = (function () {
          let e = (0, I.bG)([m.A], () => m.A.getQuestHomeHero()),
            { isShelfEnabled: t } = e7(e),
            n = (0, I.bG)([y.default], () => y.default.getCurrentUser()?.id ?? null),
            { enabled: i } = W.useConfig({ location: er.rE.QUEST_HOME_MOBILE }),
            { enabled: r } = H.NN.useConfig({ location: er.rE.QUEST_HOME_MOBILE });
          return s.useMemo(
            () => ({
              questHomeHero: e,
              isQuestHomeHeroShelfEnabled: t,
              currentUserId: n,
              isRenewableEndDateSortEnabled: !1,
              isMobileQuestHomeSortPriorityEnabled: !1,
            }),
            [e, t, n, !1, !1],
          );
        })()),
        (n = s.useRef([])),
        (i = s.useRef(c.sortMethod)),
        (r = s.useRef(c.filters)),
        (a = s.useRef(0)),
        (l = s.useRef(t)),
        s.useMemo(() => {
          if (0 === u.length) return [];
          if (
            n.current.length > 0 &&
            a.current === u.length &&
            i.current === c.sortMethod &&
            r.current === c.filters &&
            l.current === t
          )
            return n.current;
          let e = ef(u, c, t).map((e) => e.id);
          return (
            (n.current = e),
            (i.current = c.sortMethod),
            (r.current = c.filters),
            (a.current = u.length),
            (l.current = t),
            e
          );
        }, [u, c, t])),
      p =
        ((o = s.useMemo(
          () =>
            u.filter((e) => {
              let t = e.userStatus?.completedAt != null,
                n = e.userStatus?.claimedAt != null;
              return t && n;
            }),
          [u],
        )),
        (d = s.useRef([])),
        s.useMemo(() => {
          if (0 === o.length) return [];
          if (d.current.length > 0 && d.current.length === o.length) return d.current;
          let e = o
            .sort((e, t) => {
              let n = e.userStatus?.claimedAt == null;
              return n !== (t.userStatus?.claimedAt == null)
                ? n
                  ? -1
                  : 1
                : eI(
                    e.config.rewardsConfig.rewardsExpireAt,
                    t.config.rewardsConfig.rewardsExpireAt,
                    0,
                  );
            })
            .map((e) => e.id);
          return ((d.current = e), e);
        }, [o])),
      T = [];
    for (let t of "all" === e ? f : p) {
      let n = h.get(t),
        i =
          null != n &&
          "all" === e &&
          c.removeExpiredQuests &&
          (0, Z.Ic)(n) &&
          !(0, k.GR)(n.userStatus);
      null == n || i || T.push(n);
    }
    return { quests: T, excludedQuests: _, isFetchingCurrentQuests: E, hasFetched: A };
  }
  function eg() {
    let e = s.useRef(!1),
      t = (0, I.yK)([G.A], () => Array.from(G.A.claimedQuests.values())),
      n = (0, I.bG)([G.A], () => G.A.isFetchingClaimedQuests);
    return (
      s.useEffect(() => {
        n || e.current || ((e.current = !0), (0, V.HA)());
      }, [n]),
      { claimedQuests: t, isFetchingClaimedQuests: n }
    );
  }
  function eS(e, t) {
    let n = eC(e),
      i = (0, ee.ks)(e.config),
      r = (0, ee.KK)(e.config),
      a = t !== Q.MA.INELIGIBLE;
    return !n && i && r && a;
  }
  function eN(e) {
    return (0, I.bG)(
      [G.A],
      () => {
        let t = G.A.getQuest(e);
        return null == t ? null : (0, ee.b)(t.config);
      },
      [e],
    );
  }
  function eC(e) {
    return (0, I.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
  }
  function eO() {
    return (0, I.bG)([G.A], () => G.A.isQuestAccessSuspended, []);
  }
  function eR(e, t, n) {
    let i = (0, I.bG)([R.A], () => R.A.getChannel(t?.channelId) ?? null),
      r = (0, I.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []),
      a = (0, I.bG)([y.default], () => y.default.getCurrentUser()?.id),
      s = (0, I.bG)([G.A], () => null != e && G.A.isQuestExpired(e.id), [e]);
    if (null == e || r || s || a === n) return !1;
    let l = e.userStatus?.claimedAt != null,
      o = (0, en.Ll)(t, i);
    return !l || !!o;
  }
  function eL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" },
      n = (0, I.bG)([C.default], () => C.default.locale);
    return s.useMemo(() => (null == e ? "" : new Date(e).toLocaleDateString(n, t)), [e, t, n]);
  }
  function ey(e) {
    let { quest: t, content: n, ctaContent: i, sourceQuestContent: r } = e,
      a = (0, z.wW)();
    return s.useCallback(() => {
      t.id === er.Fw
        ? window.open(M.A.getArticleURL(F.MVz.VIRTUAL_CURRENCY_LEARN_MORE))
        : (0, J.pu)(t, { content: n, ctaContent: i, impressionId: a(), sourceQuestContent: r });
    }, [t, n, i, a, r]);
  }
  function eD(e) {
    return (0, I.bG)([G.A], () => G.A.isProgressingOnDesktop(e.id));
  }
  function ev(e) {
    return s.useMemo(() => (0, et.YL)(e), [e]);
  }
  function eb(e) {
    let t,
      n = eD(e),
      i = ev(e),
      r =
        ((t = (0, I.bG)([G.A], () => G.A.getOptimisticProgress(e.id, _.n.WATCH_VIDEO))),
        s.useMemo(() => (0, ei.J$)(e), [e, t]));
    return n || i || r;
  }
  let eM = (e) => {
    let t = s.useCallback(() => (0, et.Yh)(e), [e]),
      [n, i] = s.useState(t()),
      r = s.useCallback(() => i(t()), [t]),
      a = eb(e);
    return (
      s.useEffect(() => {
        if (
          e.userStatus?.enrolledAt == null ||
          e.userStatus?.completedAt != null ||
          e.userStatus?.claimedAt != null ||
          !a
        )
          return void r();
        let t = window.setInterval(() => {
          r();
        }, +v.A.Millis.SECOND);
        return () => {
          (clearInterval(t), r());
        };
      }, [e, a, r]),
      n
    );
  };
  function eP(e) {
    return s.useMemo(() => (0, et.JC)(e), [e]);
  }
  function eU(e) {
    let t = s.useMemo(() => {
      let t = new Set();
      for (let n of e) {
        let e = (0, et.F9)(n);
        null != e && t.add(e);
      }
      return Array.from(t);
    }, [e]);
    return (0, S.A)(t);
  }
  function ew(e) {
    let t = (0, I.bG)([G.A], () => G.A.quests),
      n = eU(Array.from(t.values())),
      i = s.useMemo(() => {
        let n = (0, en.$e)(t, er.zO);
        return (0, q.BM)(n, e);
      }, [e, t, n]);
    return eC(i) ? null : i;
  }
  function eG(e) {
    return s.useMemo(
      () => ({
        handleComplete: () => (0, V.Yb)(e),
        handleProgress: (t) => (0, V.Yb)(e, t),
        handleResetStatusClick: () => (0, V.UZ)(e),
        handleResetDismissibilityClick: () => (0, V.Gt)(e),
        handleOverridePreviewClick: (t) => (0, V.L4)(t, e),
        handleResetHasBeenSeenClick: () => (0, V.qV)(u.p.QUEST, [e]),
      }),
      [e],
    );
  }
  function ex() {
    let { fetching: e, accounts: t } = (0, I.cf)([L.A], () => ({
        fetching: L.A.isFetching(),
        accounts: L.A.getAccounts(),
      })),
      {
        xboxAccounts: n,
        playstationAccounts: i,
        xboxAndPlaystationAccounts: r,
      } = s.useMemo(() => {
        let e = t.filter((e) => !1 === e.revoked),
          n = e.filter((e) => e.type === F.fg2.XBOX),
          i = e.filter((e) => e.type === F.fg2.PLAYSTATION),
          r = n.concat(i);
        return { xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
      }, [t]);
    return { fetching: e, xboxAccounts: n, playstationAccounts: i, xboxAndPlaystationAccounts: r };
  }
  function ek(e) {
    let { questId: t, preview: n, beforeRequest: i, afterRequest: r } = e,
      [a, l] = s.useState(!1),
      o = (0, I.bG)([L.A], () => L.A.getAccounts()),
      d = (0, B.O)((e) => e.clearErrorHintsByType),
      c = s.useCallback((e) => B.O.getState().setErrorHints(t, e), [t]);
    return (
      s.useEffect(() => {
        d(t, E._.EXPIRED_CREDENTIAL);
      }, [o, d, t]),
      {
        startConsoleQuest: s.useCallback(async () => {
          if (a) return;
          (i?.(), l(!0));
          let e = null;
          try {
            ((e = await (0, V.vD)(t, n)), c(e.errorHints));
          } finally {
            (l(!1), r?.());
          }
        }, [a, i, r, n, t, c]),
        startingConsoleQuest: a,
      }
    );
  }
  function eF(e) {
    let { quest: t } = e,
      { xboxAndPlaystationAccounts: n } = ex(),
      i = eb(t),
      r = 0 === n.length;
    return (0, et.g5)(t) && r && !i;
  }
  function eB() {
    let { xboxAccounts: e, playstationAccounts: t } = ex(),
      n = e.length > 0,
      i = t.length > 0,
      r = M.A.getArticleURL(F.MVz.QUEST_HOW_TO_PLAYSTATION),
      a = M.A.getArticleURL(F.MVz.QUEST_HOW_TO_XBOX),
      s = es.intl.format(es.t.beN4DG, { psHelpdeskArticle: r, xboxHelpdeskArticle: a }),
      l = es.intl.format(es.t.HVS7nh, { helpdeskArticle: i ? r : a });
    return { message: (n && !i) || (!n && i) ? l : s, xboxURL: a, playstationURL: r };
  }
  var eV =
    (((a = {})[(a.UNACCEPTED = 0)] = "UNACCEPTED"),
    (a[(a.ACCEPTED = 1)] = "ACCEPTED"),
    (a[(a.IN_PROGRESS = 2)] = "IN_PROGRESS"),
    (a[(a.COMPLETED = 3)] = "COMPLETED"),
    (a[(a.CLAIMED = 4)] = "CLAIMED"),
    a);
  function eH(e) {
    let t = e.userStatus?.enrolledAt != null,
      n = e.userStatus?.completedAt != null,
      i = e.userStatus?.claimedAt != null,
      r = eM(e).percentComplete > 0;
    return i ? 4 : n ? 3 : r && t ? 2 : 1 * !!t;
  }
  function ej(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = (0, I.bG)([C.default], () => C.default.locale),
      { percentComplete: i } = eM(e),
      r = eP(e),
      a = null != r ? r.percentComplete : i,
      s = 100 * a,
      l =
        null == r || t ? (0, h.l9)(n, a, { roundingMode: "floor" }) : `${r?.progress}/${r?.target}`;
    return { completedRatio: a, percentComplete: s, completedRatioDisplay: l };
  }
  function eW(e) {
    return [
      (0, I.bG)([G.A], () => G.A.selectedTaskPlatform(e)),
      s.useCallback((t) => (0, V.lx)(e, t), [e]),
    ];
  }
  function eY(e, t) {
    let [n, i] = eW(e.id),
      r = s.useMemo(() => (0, J.UR)(e), [e]),
      a = r.includes(er.fO.DESKTOP),
      l = r.includes(er.fO.CONSOLE),
      o = eD(e),
      d = ev(e),
      u = s.useMemo(
        () =>
          (0, c.YW)(t)
            .with({ percentComplete: 0 }, () => null)
            .with({ taskType: _.n.PLAY_ON_DESKTOP }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.PLAY_ACTIVITY }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.WATCH_VIDEO }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.WATCH_VIDEO_ON_MOBILE }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.STREAM_ON_DESKTOP }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.PLAY_ON_XBOX }, () => er.fO.CONSOLE)
            .with({ taskType: _.n.PLAY_ON_PLAYSTATION }, () => er.fO.CONSOLE)
            .with({ taskType: _.n.ACHIEVEMENT_IN_GAME }, () => er.fO.DESKTOP)
            .with({ taskType: _.n.ACHIEVEMENT_IN_ACTIVITY }, () => er.fO.DESKTOP)
            .exhaustive(),
        [t],
      ),
      E = o ? er.fO.DESKTOP : d ? er.fO.CONSOLE : null;
    return [
      s.useMemo(
        () =>
          (0, c.YW)({ lastPlatformProgress: u, currentProgressingPlatform: E, selectedPlatform: n })
            .with({ currentProgressingPlatform: er.fO.CONSOLE }, () => x.X0.CONSOLE)
            .with({ currentProgressingPlatform: er.fO.DESKTOP }, () => x.X0.DESKTOP)
            .with(
              { currentProgressingPlatform: null, lastPlatformProgress: er.fO.CONSOLE },
              () => x.X0.CONSOLE,
            )
            .with(
              { currentProgressingPlatform: null, lastPlatformProgress: er.fO.DESKTOP },
              () => x.X0.DESKTOP,
            )
            .with(
              {
                currentProgressingPlatform: null,
                lastPlatformProgress: null,
                selectedPlatform: er.fO.CONSOLE,
              },
              () => x.X0.CONSOLE,
            )
            .with(
              {
                currentProgressingPlatform: null,
                lastPlatformProgress: null,
                selectedPlatform: er.fO.DESKTOP,
              },
              () => x.X0.DESKTOP,
            )
            .with(
              {
                currentProgressingPlatform: null,
                lastPlatformProgress: null,
                selectedPlatform: null,
              },
              () => (l && a ? x.X0.SELECT : l ? x.X0.CONSOLE : x.X0.DESKTOP),
            )
            .exhaustive(),
        [l, a, u, E, n],
      ),
      r,
      i,
    ];
  }
  function eK(e) {
    let t = eP(e),
      n = eM(e),
      [i] = eY(e, n),
      r = eC(e),
      a = e.userStatus?.enrolledAt != null,
      s = e.userStatus?.completedAt != null,
      l = _.o.DESKTOP.has(n.taskType) && n.percentComplete > 0,
      o = 0 === n.percentComplete,
      d = a && !s && !r && null == t && (l || (o && i === x.X0.DESKTOP)),
      c = (0, P.isWeb)() && d && !(0, J.W1)(e),
      u = (0, P.isMac)() && n.taskType === _.n.STREAM_ON_DESKTOP && d,
      E = [];
    return (u && E.push(es.intl.string(es.t.MFGxFM)), c && E.push(es.intl.string(es.t.BV6xDm)), E);
  }
  function e$(e) {
    return (0, I.bG)([G.A], () => G.A.quests).get(e) ?? null;
  }
  function ez(e) {
    let t,
      n,
      i,
      { mode: r, questContent: a, sourceQuestContent: l } = e;
    "questId" in e ? (t = e.questId) : ((n = e.adContentId), (i = e.adCreativeType));
    let o = s.useCallback(
        (e, r) => {
          null != t
            ? (0, $.Zu)({
                mode: e,
                prevMode: r,
                questContent: a,
                questId: t,
                sourceQuestContent: l,
              })
            : null != n &&
              null != i &&
              (0, $.Wc)({
                adContentId: n,
                adCreativeType: i,
                mode: e,
                prevMode: r,
                questContent: a,
                sourceQuestContent: l,
              });
        },
        [a, l, t, n, i],
      ),
      d = t ?? n,
      c = s.useRef(null);
    (s.useEffect(() => {
      null != d && c.current !== r && (o(r, c.current), (c.current = r));
    }, [r, d, o]),
      s.useEffect(() => {
        if (null != d)
          return () => {
            o(null, c.current);
          };
      }, [d, o]));
  }
  function eX(e, t) {
    let n = (0, I.bG)([G.A], () => G.A.getQuest(e), [e]),
      i = (0, p.Ay)();
    return s.useMemo(() => {
      if (null == n) return null;
      let e = t ?? ((0, f.M)(i) ? F.NJ8.DARK : F.NJ8.LIGHT);
      return (0, Y.tW)(n, Y.fY.COSPONSOR_LOGO_TYPE, e);
    }, [i, t, n]);
  }
  function eZ(e) {
    let t = (0, I.bG)([y.default], () => y.default.getCurrentUser()),
      n = (0, ee.mq)(e, t),
      i = (0, ee.k5)(e),
      r = (0, ee.$5)(e),
      a = (0, ee.Y7)(e),
      s = (0, ee.JX)(e),
      l = (0, U.TW)(t, ea.PremiumTypes.TIER_2);
    if (null == i) return es.intl.formatToPlainString(es.t.l9uXL8, { decorationName: n });
    let o = es.intl.formatToPlainString(es.t.o97tNn, { rewardName: n }),
      d = es.intl.formatToPlainString(es.t.PkyRZo, { rewardName: n, expirationDate: r }),
      c = es.intl.formatToPlainString(es.t.ie4YK0, { rewardName: n, duration: i }),
      u = es.intl.formatToPlainString(es.t.yCpc0U, { duration: i, rewardName: n });
    return s
      ? a
        ? l
          ? o
          : c
        : l
          ? d
          : u
      : es.intl.formatToPlainString(es.t.tTlItm, { duration: i, decorationName: n });
  }
  function eq(e) {
    let t = (0, et.TP)(e);
    return { launchInGameActivity: (0, T.A)({ applicationId: t }) };
  }
  function eQ() {
    return (0, I.yK)([G.A], () => [...G.A.quests.values()]).some((e) => e.preview);
  }
  function eJ() {
    return eQ();
  }
  function e0(e) {
    let t = e?.userStatus != null && (0, k.gO)(e.userStatus, x.uF.ACTIVITY_PANEL),
      n = eC(e ?? null),
      i = e?.userStatus?.claimedAt != null,
      r = (0, I.bG)([G.A], () => null != G.A.questEnrollmentBlockedUntil, []);
    return !t && !n && !i && !r;
  }
  function e1() {
    let e = (0, I.yK)([G.A], () => [...G.A.quests.values()]);
    return s.useMemo(() => e.filter((e) => e.preview), [e]);
  }
  function e2() {
    let e = er.pc;
    return s.useMemo(
      () =>
        e.map((e) => {
          let [t, n] = e;
          return { heading: (0, X.fx)(t), options: n };
        }),
      [e],
    );
  }
  function e3() {
    return s.useMemo(
      () => Object.keys(er.kL).map((e) => ({ label: (0, X.Js)(er.kL[e]), value: er.kL[e] })),
      [],
    );
  }
  function e6(e) {
    let { selectedSortMethod: t, selectedFilters: n, numQuestsVisible: i } = e,
      r = s.useRef(null),
      a = s.useRef(null);
    (s.useEffect(() => {
      (D.default.track(F.HAw.QUEST_HOME_SORT_METHOD_CHANGED, {
        sort_method: t,
        previous_sort_method: r.current,
      }),
        (r.current = t));
    }, [t]),
      s.useEffect(() => {
        let e = n.map((e) => e.filter);
        (D.default.track(F.HAw.QUEST_HOME_FILTERS_CHANGED, {
          filters: e,
          previous_filters: a.current ?? [],
          num_quests_visible: i,
        }),
          (a.current = e));
      }, [n, i]));
  }
  function e5(e) {
    return s.useMemo(() => y.default.getCurrentUser()?.isStaff() === !0, []) || e.preview;
  }
  function e4(e, t) {
    let n = e.userStatus?.completedAt != null;
    return (
      e.userStatus?.enrolledAt != null &&
      !n &&
      Date.now() - new Date(e.userStatus?.enrolledAt).getTime() > t
    );
  }
  function e7(e) {
    let t = (0, I.bG)([G.A], () => G.A.quests),
      n = e?.questIds;
    return s.useMemo(() => {
      if (null == n) return { shelfQuests: [], isShelfEnabled: !1 };
      let e = n
        .map((e) => t.get(e))
        .filter(b.Vq)
        .filter((e) => !(0, Z.Ic)(e));
      return e.length <= 1
        ? { shelfQuests: [], isShelfEnabled: !1 }
        : { shelfQuests: e, isShelfEnabled: !0 };
    }, [t, n]);
  }
  function e8(e) {
    let t = O.H1.useSetting(),
      n = e.userStatus?.enrolledAt != null;
    return s.useCallback(() => {
      if (n) return;
      let i = t ? A.w.AD_IMPRESSION_QUEST_BAR_OPT_OUT : A.w.AD_IMPRESSION_QUEST_BAR_OPT_IN;
      (0, N.hs)(i, { quest_id: e.id });
    }, [t, n, e.id]);
  }
  (v.A.Millis.HOUR, v.A.Millis.MINUTE);
}
