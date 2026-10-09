/* Recovered shipped factory. Module 921138.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4756683..4757853
 * Raw property SHA-256: efa72245449e713fa4521c65f2aea91995c36c9ef47ab20f148c5e9a3cadf441
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { T_: () => f, oS: () => I, Ay: () => p }), n(321073));
  var i,
    r = n(582128),
    a = n(284009),
    s = n.n(a),
    l = (((i = {})[(i.GAME_DISABLED = 1)] = "GAME_DISABLED"), i),
    o = n(665260),
    d = n(501592),
    c = n(311043),
    u = n(174459),
    _ = n(738250),
    E = n(652215);
  function A(e) {
    return o.Lt(e.gameFlags, l.GAME_DISABLED);
  }
  function h(e) {
    if (null == e) return ["no match"];
    let t = [];
    return (
      A(e) && t.push("profile disabled"),
      (0, d.K)(e.contentClassification) && t.push("nsfw"),
      t
    );
  }
  function f(e) {
    return 0 === h(e).length;
  }
  function I(e) {
    return f(c.A.getGame(e));
  }
  let p = function (e) {
    let { applicationId: t = "", gameId: n, source: i, trackEntryPointImpression: a = !0 } = e,
      l = r.useRef(!1),
      { gameId: o, gameRecord: d, isLoading: c } = (0, _.A)({ applicationId: t, gameId: n }),
      f = null != d && !A(d);
    return (
      r.useEffect(() => {
        l.current ||
          !a ||
          c ||
          null == d ||
          (s()(null != i, "Cannot track a Game Profile Entry Point Impressions without a source."),
          (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              i = arguments.length > 3 ? arguments[3] : void 0;
            u.default.track(E.HAw.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
              game_profile_available: e,
              application_id: t,
              rejection_reason: n,
              source: i,
            });
          })(f, d.id, h(d), i),
          (l.current = !0));
      }, [d, f, c, i, a]),
      { shouldOpenGameProfile: f, gameId: o }
    );
  };
}
