/* Recovered shipped factory. Module 901406.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7075593..7083666
 * Raw property SHA-256: 540dd5bb906b5d1337650dad1cc952d7470044531727eae98031ff474f398b5d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    $J: () => v,
    IG: () => M,
    Ps: () => B,
    UR: () => R,
    W1: () => y,
    WU: () => D,
    _Q: () => x,
    b6: () => k,
    bg: () => L,
    pu: () => G,
    se: () => F,
    v0: () => b,
  }),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
  var i,
    r = n(132500),
    a = n(323889),
    s = n(412703),
    l = n(73153),
    o = n(975807),
    d = n(274670),
    c = n(144779),
    u = n(7588),
    _ = n(657375),
    E = n(968309),
    A = n(780964),
    h = n(625494),
    f = n(723702),
    I = n(192444),
    p = n(104886),
    T = n(561844),
    m = n(590202),
    g = n(651892),
    S = n(792620),
    N = n(190107),
    C = n(652215),
    O = n(660183);
  function R(e) {
    let t = (0, S.t)({ quest: e }) || (0, S.fE)({ quest: e }) || (0, S.I6)(e),
      n = (0, S.uD)(e),
      i = [];
    return (t && i.push(N.fO.DESKTOP), n && i.push(N.fO.CONSOLE), i);
  }
  function L(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
      n = [];
    for (let e of t)
      switch (e) {
        case s.n.PLAY_ON_XBOX:
          n.push(C.fg2.XBOX);
          break;
        case s.n.PLAY_ON_PLAYSTATION:
          n.push(C.fg2.PLAYSTATION);
      }
    return n;
  }
  function y(e) {
    let t = (0, S.vv)(e),
      n = (0, S.vl)(e);
    return t || n;
  }
  var D = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
  function v(e) {
    return "xbox" === e.connected_account_type ? C.fg2.XBOX : C.fg2.PLAYSTATION;
  }
  function b(e, t) {
    let { platformType: n, quest: i } = e;
    ((0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
      ? (0, d.r)({
          type: c.F.CLICK_INTERNAL,
          adCreativeType: a.p.QUEST,
          adCreativeId: i.id,
          questContentCTA: t.ctaContent,
          surfaceId: t.content,
          sourceQuestContent: t.sourceQuestContent,
          impressionId: t.impressionId,
        })
      : (0, T.Y5)({
          questId: i.id,
          questContent: t.content,
          sourceQuestContent: t.sourceQuestContent,
          questContentCTA: t.ctaContent,
          impressionId: t.impressionId,
        }),
      (0, E.A)({ platformType: n, location: t.ctaContent }));
  }
  function M(e) {
    return v(e) === C.fg2.XBOX ? O.t["mytEv+"] : O.t.iDiwby;
  }
  function P(e) {
    if (((0, f.isIOS)() || "ios" === (0, f.getOS)()) && e.ios?.iosAppId != null) {
      let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
      return `https://apps.apple.com/app/${t}`;
    }
    return ((0, f.isAndroid)() || "android" === (0, f.getOS)()) && e.android?.androidAppId != null
      ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
      : null;
  }
  function U(e) {
    if ((0, f.isAndroid)() && e.android?.androidAppId != null)
      return {
        url: `https://play.google.com/d?id=${e.android.androidAppId}`,
        os: "android",
        storeAppId: e.android.androidAppId,
        appId: null,
      };
    if ((0, f.isIOS)() && e.ios?.iosAppId != null) {
      let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
      return {
        url: `https://apps.apple.com/app/id${t}`,
        os: "ios",
        storeAppId: t,
        appId: parseInt(t, 10),
      };
    }
    return null;
  }
  function w(e) {
    let {
      link: t,
      directLink: n,
      inlineStoreParams: i,
      trackOverlayEvent: r,
      trackOverlaySurfaceClick: a,
      appStoreOverlayCarouselScrollContext: s,
      getIosAttribution: l,
      allowExternalOpen: d = !0,
    } = e;
    return (
      I.OO.getConfig({ location: "quest_open_game_link" }).enabled,
      d && (0, o.A)(t),
      Promise.resolve(!1)
    );
  }
  function G(e, t) {
    let n,
      i,
      s,
      l = (0, g.Jx)(e.config),
      o =
        null == (n = e.config.ctaConfig)
          ? null
          : P({ url: (0, g.Jx)(e.config), android: n.android, ios: n.ios });
    (null != o && (l = o),
      (function (e) {
        try {
          return new URL(e).searchParams.has("dclid");
        } catch {
          return !1;
        }
      })(l) &&
        (l = (function (e, t) {
          try {
            let n = new URL(e);
            return (n.searchParams.set("dclid", t), n.toString());
          } catch {
            return e;
          }
        })(l, (s = (0, r.A)()))));
    let { impressionId: E } = t,
      A =
        null != E
          ? (0, u.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id)
          : null;
    (h._.dispatch(C.jej.QUEST_GAME_LINK_OPENED),
      w({
        link: l,
        directLink: o,
        inlineStoreParams:
          null == (i = e.config.ctaConfig)
            ? null
            : U({ url: (0, g.Jx)(e.config), android: i.android, ios: i.ios }),
        trackOverlayEvent: (n, i, r, a, s) =>
          (0, T.eA)({
            quest: e,
            trackingCtx: t,
            inlineStoreAppId: i,
            overlayVariant: r,
            event: n,
            timeSpentMs: a,
            overlaySurface: s,
          }),
        trackOverlaySurfaceClick: (n) =>
          (0, T.hR)({ questId: e.id, trackingCtx: t, overlaySurface: n }),
        appStoreOverlayCarouselScrollContext: { questId: e.id },
        getIosAttribution: null != A && null != E ? () => (0, _.FW)({ impressionId: E }) : void 0,
      }).then((n) => {
        "custom" === n
          ? (0, d.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: e.id,
              questContentCTA: m.Cy.OPEN_CUSTOM_APP_STORE,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
              clickId: s,
            })
          : (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, d.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                adCreativeType: a.p.QUEST,
                adCreativeId: e.id,
                questContentCTA: t.ctaContent,
                surfaceId: t.content,
                sourceQuestContent: t.sourceQuestContent,
                questContentPosition: t.position,
                impressionId: t.impressionId,
                clickId: s,
              })
            : (0, T.Y5)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position,
                impressionId: t.impressionId,
                sourceQuestContent: t.sourceQuestContent,
                clickId: s,
              });
      }));
  }
  function x(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e;
    !(function (e, t, n) {
      let { adContentId: i, adCreativeType: r, cta: a } = e,
        { preferExternalAppStore: s } = n,
        l = a.url,
        E = P(a);
      (null != E && (l = E), h._.dispatch(C.jej.QUEST_GAME_LINK_OPENED));
      let { impressionId: A } = t,
        f = null != A ? (0, u.vV)(a.ios?.iosAppId != null, t.sourceQuestContent, i) : null,
        I = U(a),
        g = null != f && null != A ? () => (0, _.FW)({ impressionId: A }) : void 0;
      function S(e) {
        "custom" === e
          ? (0, d.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: r,
              adCreativeId: i,
              questContentCTA: m.Cy.OPEN_CUSTOM_APP_STORE,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
            })
          : (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
            ? (0, d.r)({
                type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                adCreativeType: r,
                adCreativeId: i,
                questContentCTA: t.ctaContent,
                surfaceId: t.content,
                sourceQuestContent: t.sourceQuestContent,
                questContentPosition: t.position,
                impressionId: t.impressionId,
              })
            : (0, T.vK)({
                adContentId: i,
                adCreativeType: r,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position,
                impressionId: t.impressionId,
                sourceQuestContent: t.sourceQuestContent,
              });
      }
      if (s && null == g) {
        ((0, o.A)(l), S(!1));
        return;
      }
      w({
        link: l,
        directLink: E,
        inlineStoreParams: I,
        trackOverlayEvent: (e, n, a, s, l) =>
          (0, T.YE)({
            adContentId: i,
            adCreativeType: r,
            trackingCtx: t,
            inlineStoreAppId: n,
            overlayVariant: a,
            event: e,
            timeSpentMs: s,
            overlaySurface: l,
          }),
        trackOverlaySurfaceClick: (e) =>
          (0, T.jk)({ adContentId: i, adCreativeType: r, trackingCtx: t, overlaySurface: e }),
        appStoreOverlayCarouselScrollContext: { adContentId: i },
        getIosAttribution: g,
      }).then(S);
    })({ adContentId: n, adCreativeType: i, cta: r }, t, { preferExternalAppStore: !1 });
  }
  function k(e, t) {
    let { quest: i } = e;
    ((0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
      ? (0, d.r)({
          type: c.F.CLICK_INTERNAL,
          adCreativeType: a.p.QUEST,
          adCreativeId: i.id,
          questContentCTA: t.ctaContent,
          surfaceId: t.content,
          sourceQuestContent: t.sourceQuestContent,
          impressionId: t.impressionId,
          questContentPosition: t.position,
        })
      : (0, T.Y5)({
          questId: i.id,
          questContent: t.content,
          questContentPosition: t.position,
          questContentCTA: t.ctaContent,
          impressionId: t.impressionId,
          sourceQuestContent: t.sourceQuestContent,
        }),
      (function () {
        {
          let { openUserSettings: e } = n(766075);
          e(A.X.CONNECTIONS_CATEGORY);
        }
      })());
  }
  function F(e, t) {
    let { quest: n } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
      ? (0, d.r)({
          type: c.F.CLICK_INTERNAL,
          adCreativeType: a.p.QUEST,
          adCreativeId: n.id,
          questContentCTA: t.ctaContent,
          surfaceId: t.content,
          sourceQuestContent: t.sourceQuestContent,
          impressionId: t.impressionId,
          questContentPosition: t.position,
          questContentRowIndex: t.rowIndex,
        })
      : (0, T.Y5)({
          questId: n.id,
          questContent: t.content,
          questContentPosition: t.position,
          questContentRowIndex: t.rowIndex,
          questContentCTA: t.ctaContent,
          impressionId: t.impressionId,
          sourceQuestContent: t.sourceQuestContent,
        });
    let i = L(n);
    if (1 === i.length) return (0, E.A)({ platformType: i.at(0) });
    l.h.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: (e) => (0, E.A)({ platformType: e }),
      includedPlatformTypes: new Set(i),
      includeApplicationConnections: !1,
    });
  }
  function B(e, t, n) {
    let { quest: i } = e;
    return (
      (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
        ? (0, d.r)({
            type: c.F.CLICK_INTERNAL,
            adCreativeType: a.p.QUEST,
            adCreativeId: i.id,
            questContentCTA: t.ctaContent,
            surfaceId: t.content,
            sourceQuestContent: t.sourceQuestContent,
            impressionId: t.impressionId,
            questContentPosition: t.position,
            questContentRowIndex: t.rowIndex,
          })
        : (0, T.Y5)({
            questId: i.id,
            questContent: t.content,
            questContentPosition: t.position,
            questContentRowIndex: t.rowIndex,
            questContentCTA: t.ctaContent,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
          }),
      (0, E.A)({ platformType: n })
    );
  }
}
