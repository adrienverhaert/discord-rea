/* Recovered shipped factory. Module 18437.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7043811..7046613
 * Raw property SHA-256: fd8e5ede3866e448a49e50441c026d47583448a79fcc29b374b8635c1133f828
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ii: () => g, Ut: () => p, WS: () => T, cR: () => S, tG: () => m, u0: () => I });
  var i = n(582128),
    r = n(132500),
    a = n(323889),
    s = n(345353),
    l = n(69114),
    o = n(174459),
    d = n(723702),
    c = n(738822),
    u = n(710969),
    _ = n(561844),
    E = n(590202),
    A = n(971649),
    h = n(823784),
    f = n(652215);
  function I() {
    let e = (0, A.wW)();
    return i.useCallback(
      (t) => {
        (0, _.av)({ ...t, properties: { ...t.properties, impression_id: e() } });
      },
      [e],
    );
  }
  function p() {
    let e = I();
    return i.useCallback(
      (t) => {
        let {
            questId: n,
            questContent: i,
            questContentCTA: a,
            questContentPosition: o,
            questContentRowIndex: c,
            trackGuildAndChannelMetadata: _,
            sourceQuestContent: A,
          } = t,
          I = (0, u.L4)(A),
          p = (0, u.Gp)(A, n);
        (0, s.N)((0, E.jO)(i)).then((t) => {
          e({
            questId: n,
            event: f.HAw.QUEST_CONTENT_CLICKED,
            properties: {
              ...(0, E.fF)(i, o, c),
              ...(0, l.A)(),
              cta_name: a,
              click_id: (0, r.A)(),
              apple_advertising_id: null != t && (0, d.isIOS)() ? t.advertisingId : null,
              android_advertising_id: null != t && (0, d.isAndroid)() ? t.advertisingId : null,
              metadata_sealed: null != I ? I : null,
              traffic_metadata_sealed: null != p ? p : null,
              search_session_id: (0, h.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: _,
            shouldExtendSession: (0, u.xn)(i),
            sourceQuestContent: A,
          });
        });
      },
      [e],
    );
  }
  function T() {
    let e = (0, A.wW)();
    return i.useCallback(
      (t) => {
        (0, _.Qg)({ ...t, properties: { ...t.properties, impression_id: e() } });
      },
      [e],
    );
  }
  function m() {
    let e = T();
    return i.useCallback(
      (t) => {
        let {
          adContentId: n,
          relatedQuestId: i,
          adCreativeType: a,
          questContent: o,
          questContentCTA: c,
          questContentPosition: _,
          questContentRowIndex: A,
          trackGuildAndChannelMetadata: I,
          sourceQuestContent: p,
        } = t;
        (0, s.N)((0, E.jO)(o)).then((t) => {
          e({
            adContentId: n,
            relatedQuestId: i,
            adCreativeType: a,
            event: f.HAw.QUEST_CONTENT_CLICKED,
            properties: {
              ...(0, E.fF)(o, _, A),
              ...(0, l.A)(),
              cta_name: c,
              click_id: (0, r.A)(),
              apple_advertising_id: null != t && (0, d.isIOS)() ? t.advertisingId : null,
              android_advertising_id: null != t && (0, d.isAndroid)() ? t.advertisingId : null,
              search_session_id: (0, h.tv)()?.uuid ?? null,
            },
            trackGuildAndChannelMetadata: I,
            shouldExtendSession: (0, u.xn)(o),
            sourceQuestContent: p,
          });
        });
      },
      [e],
    );
  }
  function g(e, t) {
    i.useEffect(() => {
      (0, _.DZ)(t, e);
    }, [e, t]);
  }
  function S(e) {
    let { questHomeHero: t, shouldShowQuestHomeHeroContent: n } = e,
      r = n ? c.uF.QUEST_HOME_ENTRYPOINT_THEMED : c.uF.QUEST_HOME_ENTRYPOINT,
      s = i.useMemo(() => {
        let e = (0, E.fF)(r);
        return (delete e.row_index, e);
      }, [r]),
      l = i.useCallback(
        (e) => {
          null != t && n
            ? (0, _.Qg)({
                adContentId: t.id,
                adCreativeType: a.p.QUEST_HOME_HERO,
                event: e,
                properties: s,
                sourceQuestContent: r,
              })
            : o.default.track(e, s);
        },
        [t, n, r, s],
      ),
      d = i.useCallback(() => {
        l(f.HAw.QUEST_HOVER);
      }, [l]),
      u = i.useCallback(() => {
        l(f.HAw.QUEST_HOVER_OFF);
      }, [l]),
      A = i.useCallback(() => {
        o.default.track(f.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED);
      }, []),
      h = i.useCallback(() => {
        o.default.track(f.HAw.QUEST_CONTENT_CLICKED, {
          is_targeted: !1,
          ...s,
          ...(null != t ? { ad_content_id: t.id } : {}),
        });
      }, [s, t]);
    return i.useMemo(
      () => ({
        handleMouseEnter: d,
        handleMouseLeave: u,
        handleOnboardingPopoutRender: A,
        handleEntrypointClick: h,
      }),
      [d, u, A, h],
    );
  }
}
