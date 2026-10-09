/* Recovered shipped factory. Module 365258.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2700845..2704078
 * Raw property SHA-256: 557ec01eab8eb8f3d139e37893377be4ee29d4c037322b919100dd7234145307
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    AB: () => S,
    AI: () => _,
    Xc: () => p,
    ae: () => m,
    g8: () => I,
    gF: () => N,
    gS: () => g,
    vz: () => T,
  });
  var i,
    r = n(873298),
    a = n(885386),
    s = n(205761),
    l = n(498642),
    o = n(71393),
    d = n(711014),
    c = n(115063),
    u = n(660183),
    _ = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
  let E = r.Qd;
  function A(e) {
    switch (e) {
      case E.ACTIVITY_STATUS_OFF:
        return 2;
      case E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
        return 1;
      case E.ACTIVITY_STATUS_ON:
        return 0;
      default:
        return -1;
    }
  }
  let h = new Map([
    [r.KP.FRIENDS_AND_ALL_GUILDS, E.ACTIVITY_STATUS_OFF],
    [r.KP.FRIENDS_AND_SMALL_GUILDS, E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [r.KP.FRIENDS_ONLY, E.ACTIVITY_STATUS_ON],
  ]);
  function f(e) {
    return h.get(e) ?? E.ACTIVITY_STATUS_OFF;
  }
  function I(e, t) {
    if (e === t) return null;
    let n = A(e),
      i = A(t);
    if (n < 0 || i < 0) return null;
    let r = i < n ? "restricting" : "expanding",
      a = (0, c.Kk)(),
      s = d.Ay.getFlattenedGuildIds(),
      u =
        (e === E.ACTIVITY_STATUS_OFF && t === E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
        (e === E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === E.ACTIVITY_STATUS_OFF)
          ? "large_only"
          : (e === E.ACTIVITY_STATUS_ON && t === E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
              (e === E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === E.ACTIVITY_STATUS_ON)
            ? "small_only"
            : "all",
      _ = s.filter((e) => {
        if (null == o.A.getGuild(e)) return !1;
        let t = a.has(e);
        if (("restricting" === r && t) || ("expanding" === r && !t)) return !1;
        if ("all" === u) return !0;
        let n = l.A.getMemberCount(e);
        return null == n ? "restricting" === r : "large_only" === u ? n > 200 : n <= 200;
      });
    return 0 === _.length
      ? null
      : (_.sort((e, t) => {
          let n = o.A.getGuild(e),
            i = o.A.getGuild(t);
          return n?.joinedAt == null && i?.joinedAt == null
            ? 0
            : n?.joinedAt == null
              ? 1
              : i?.joinedAt == null
                ? -1
                : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime();
        }),
        { affectedGuildIds: _, direction: r });
  }
  function p(e) {
    switch (e) {
      case E.ACTIVITY_STATUS_OFF:
        return u.intl.string(u.t.FzgQna).toLowerCase();
      case E.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
        return u.intl.string(u.t["1hvuGH"]).toLowerCase();
      case E.ACTIVITY_STATUS_ON:
        return u.intl.string(u.t.fQc5la).toLowerCase();
      default:
        return "";
    }
  }
  function T(e, t) {
    return {
      title: u.intl.string(e ? u.t.eYDA7D : u.t["9jYwjo"]),
      subtitle: u.intl.format(e ? u.t["c5/jDc"] : u.t.ajzh8S, { settingName: t }),
      confirmText: u.intl.string(e ? u.t["6uPZV1"] : u.t.a9PIyD),
      toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
  }
  function m(e, t) {
    return {
      title: u.intl.string(e ? u.t.jRx1Aa : u.t.S0Y0bh),
      subtitle: u.intl.format(e ? u.t.Fs96LO : u.t.GcoYX8, { settingName: t }),
      confirmText: u.intl.string(e ? u.t["4DM5HJ"] : u.t.WRrDtI),
      toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
  }
  function g(e, t) {
    let n = f(t),
      i = a._Z.getSetting();
    if (i === n || A(f(e)) > A(n) != A(i) > A(n)) return null;
    let s = I(i, n);
    if (null == s) return null;
    let l = (function (e) {
      switch (e) {
        case r.KP.FRIENDS_AND_ALL_GUILDS:
          return u.intl.string(u.t.Boxc8R).toLowerCase();
        case r.KP.FRIENDS_AND_SMALL_GUILDS:
          return u.intl.string(u.t.YOIKBt).toLowerCase();
        case r.KP.FRIENDS_ONLY:
          return u.intl.string(u.t.u0nlJv).toLowerCase();
        default:
          return "";
      }
    })(t);
    return {
      affectedGuildIds: s.affectedGuildIds,
      direction: s.direction,
      settingName: l,
      mappedActivityValue: n,
    };
  }
  function S(e) {
    return [...e].sort(
      (e, t) => s.A.getScoreWithoutFetchingLatest(t) - s.A.getScoreWithoutFetchingLatest(e),
    );
  }
  function N(e, t) {
    let n = (0, c.Kk)(),
      i = new Set(t);
    if ("restricting" === e) {
      let e = new Set([...n, ...i]);
      a.JG.updateSetting([...e]);
    } else {
      let e = [...n].filter((e) => !i.has(e));
      a.JG.updateSetting(e);
    }
  }
}
