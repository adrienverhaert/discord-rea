/* Recovered shipped factory. Module 963027.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3220492..3223922
 * Raw property SHA-256: c05bb169c2ad0c7149a0d99aa29d2c2696a157c7ab885f4f8e31946aa592decc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Ay: () => u, r2: () => _ }), n(321073), n(667532));
  var i = n(583846),
    r = n(994500),
    a = n(287809),
    s = n(427262),
    l = n(148719),
    o = n(47167),
    d = n(652215),
    c = n(660183);
  function u(e) {
    let t,
      n,
      {
        channel: u,
        unread: _ = !1,
        mentionCount: E = 0,
        voiceStates: A,
        embeddedActivitiesCount: h,
        activityNames: f,
        isSubscriptionGated: I,
        needSubscriptionToAccess: p,
        isIncomingCall: T = !1,
        isOngoingCall: m = !1,
        voiceChannelStartTime: g,
        ignored: S = !1,
        blocked: N = !1,
      } = e,
      C = (0, o.m1)(u, a.default, r.A),
      O = (function (e) {
        if (e) return c.intl.string(c.t["4qvAtn"]);
      })((0, l.A)(u)),
      R = (function (e) {
        let { blocked: t, ignored: n } = e;
        return t ? c.intl.string(c.t.dByf4y) : n ? c.intl.string(c.t.mMCUM9) : void 0;
      })({ blocked: N, ignored: S });
    switch (u.type) {
      case d.rbe.DM:
        t = E > 0 ? c.t.TO8LYt : _ ? c.t.F2MZsu : c.t.fYqXVY;
        break;
      case d.rbe.GROUP_DM: {
        let e;
        ((e = E > 0 ? c.t.Lo0dCa : _ ? c.t["fxxUo/"] : c.t.lts3Ld),
          (n = [
            c.intl.formatToPlainString(e, { channelName: C, mentionCount: E }),
            c.intl.formatToPlainString(c.t.CxSA5N, { members: u.recipients.length + 1 }),
          ].join(", ")));
        break;
      }
      case d.rbe.GUILD_STORE:
        t = c.t.Bo4msg;
        break;
      case d.rbe.GUILD_DIRECTORY:
        t = c.t["92EAF2"];
        break;
      case d.rbe.GUILD_ANNOUNCEMENT:
        t = E > 0 ? c.t.sDKIpm : _ ? c.t.VM7z8f : c.t.WJ3MPt;
        break;
      case d.rbe.GUILD_APP:
        t = E > 0 ? c.t.BILI3J : _ ? c.t["xzhzM/"] : c.t.F98YPC;
        break;
      case d.rbe.GUILD_FORUM:
        t = E > 0 ? c.t.rSsuUF : _ ? c.t["dr/Oik"] : c.t.Ajnhpa;
        break;
      case d.rbe.GUILD_MEDIA:
        t = E > 0 ? c.t.KqEUsJ : _ ? c.t["37AyNG"] : c.t.KuUltE;
        break;
      case d.rbe.GUILD_VOICE:
        let L = [c.intl.formatToPlainString(c.t.bkpadO, { channelName: C })];
        (E > 0 && L.push(c.intl.formatToPlainString(c.t["3l1GOx"], { mentionCount: E })),
          _ && L.push(c.intl.string(c.t.x5zAGZ)));
        let y = u.userLimit,
          D = null != y && y > 0;
        if (null != A && A.length > 0) {
          let e = A.length - 3,
            t = A.slice(0, 3)
              .map((e) => {
                let { nick: t, user: n } = e;
                return t ?? (0, s.mG)(n);
              })
              .join(", ");
          (L.push(t),
            e > 0 && L.push(c.intl.formatToPlainString(c.t.sfgpgr, { overflow: e })),
            D &&
              L.push(c.intl.formatToPlainString(c.t["6qgTOF"], { userCount: A.length, limit: y })));
        }
        (null != g &&
          L.push(
            c.intl.formatToPlainString(c.t.JQtsGh, {
              duration: (0, i.U3)({ start: g }, Date.now()),
            }),
          ),
          null != f &&
            f.length > 0 &&
            L.push(c.intl.formatToPlainString(c.t.LmYuHT, { activeActivities: f.join(", ") })),
          (n = L.join(", ")));
        break;
      case d.rbe.GUILD_STAGE_VOICE:
        t = c.t.TPPk2T;
        break;
      case d.rbe.ANNOUNCEMENT_THREAD:
      case d.rbe.PUBLIC_THREAD:
      case d.rbe.PRIVATE_THREAD:
      case d.rbe.MEDIA_THREAD:
        t = E > 0 ? c.t["ZL7+I6"] : _ ? c.t.YlVvmc : c.t["0nZpiF"];
        break;
      case d.rbe.GUILD_TEXT:
      case d.rbe.GUILD_CATEGORY:
      case d.rbe.GUILD_SPACE:
      case d.rbe.UNKNOWN:
      default:
        t = E > 0 ? c.t.g8ONM0 : _ ? c.t.smf1CZ : c.t.s0JADj;
    }
    let v =
      null != n
        ? [n]
        : null != t
          ? [c.intl.formatToPlainString(t, { channelName: C, mentionCount: E })]
          : [];
    (null != R && v.unshift(R),
      T ? v.push(c.intl.string(c.t["fk1/bX"])) : m && v.push(c.intl.string(c.t["NGg/fm"])),
      null != h && h > 0 && v.push(c.intl.formatToPlainString(c.t.O6PLYd, { activitiesCount: h })));
    let b = (function (e) {
      let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
      if (t)
        if (n) return c.intl.string(c.t["oj+HOs"]);
        else return c.intl.string(c.t.xI3TQQ);
    })({ isSubscriptionGated: I, needSubscriptionToAccess: p });
    return (null != b && v.push(b), null != O && v.push(O), v.join(", "));
  }
  function _(e) {
    let { channel: t, muted: n, userStatus: i, isFavorite: r } = e,
      a = [];
    return (r && a.push(c.intl.string(c.t.cCPjSK)), !0 === n)
      ? (a.push(c.intl.string(c.t.C4zCMb)), a.join(", "))
      : (t.type === d.rbe.DM &&
          null != i &&
          a.push(
            (function (e) {
              switch (e) {
                case d.clD.ONLINE:
                  return (0, s.MU)(d.clD.ONLINE);
                case d.clD.IDLE:
                  return (0, s.MU)(d.clD.IDLE);
                case d.clD.DND:
                  return (0, s.MU)(d.clD.DND);
                case d.clD.INVISIBLE:
                  return (0, s.MU)(d.clD.INVISIBLE);
                default:
                  return "";
              }
            })(i),
          ),
        a.length > 0 ? a.join(", ") : void 0);
  }
}
