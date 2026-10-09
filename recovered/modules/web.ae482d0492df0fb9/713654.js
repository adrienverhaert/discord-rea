/* Recovered shipped factory. Module 713654.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3234895..3241000
 * Raw property SHA-256: 70c0bd4e991e39a41b3fb36fdbf88f2193a4ac2ab0a13a4896aade161d00c14f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bq: () => en, _U: () => er, gU: () => ei });
  var i = n(138134),
    r = n(622629),
    a = n(922288),
    s = n(986226),
    l = n(669281),
    o = n(778492),
    d = n(278416),
    c = n(935063),
    u = n(425557),
    _ = n(176781),
    E = n(948428),
    A = n(534890),
    h = n(163328),
    f = n(24825),
    I = n(11779),
    p = n(446057),
    T = n(770880),
    m = n(276293),
    g = n(87221),
    S = n(781481),
    N = n(760911),
    C = n(107086),
    O = n(532590),
    R = n(597050),
    L = n(191023),
    y = n(434831),
    D = n(56059),
    v = n(194261),
    b = n(808107),
    M = n(451394),
    P = n(512474),
    U = n(445567),
    w = n(183623),
    G = n(844972),
    x = n(146151),
    k = n(428689),
    F = n(983851),
    B = n(101277),
    V = n(678708),
    H = n(367332),
    j = n(91166),
    W = n(901117),
    Y = n(323384),
    K = n(855473),
    $ = n(740426),
    z = n(51758),
    X = n(696451),
    Z = n(71393),
    q = n(287809),
    Q = n(148719),
    J = n(746080),
    ee = n(652215),
    et = n(660183);
  function en(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return et.intl.string(et.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
      case ee.rbe.GUILD_TEXT:
        if (null != e.linkedLobby) return et.intl.string(et.t.Lt3PAK);
        if (i) return et.intl.string(et.t.LKpYbi);
        if (r) return et.intl.string(et.t.vvASTb);
        if (e.isSpoilerChannel()) return et.intl.string(et.t["8QsJXA"]);
        if ((0, Q.A)(e)) return et.intl.string(et.t.jQ1plj);
        return et.intl.string(et.t.t1yj0N);
      case ee.rbe.GUILD_FORUM:
        let a = e.isMediaChannel(),
          s = e.isGameInvitesChannel();
        if (r) return a ? et.intl.string(et.t["pZ/fYa"]) : et.intl.string(et.t.ibmpPi);
        if (e.isSpoilerChannel()) return et.intl.string(et.t.TDGaxd);
        if ((0, Q.A)(e)) {
          if (s) return et.intl.string(et.t.AwjsC9);
          return a ? et.intl.string(et.t.gfVCfL) : et.intl.string(et.t.UbLM3J);
        }
        if (s) return et.intl.string(et.t.BW4VHV);
        return a ? et.intl.string(et.t.seKITE) : et.intl.string(et.t["0sDXdm"]);
      case ee.rbe.GUILD_MEDIA:
        if (r) return et.intl.string(et.t["pZ/fYa"]);
        if (e.isSpoilerChannel()) return et.intl.string(et.t.vjYxox);
        if ((0, Q.A)(e)) return et.intl.string(et.t.gfVCfL);
        return et.intl.string(et.t.seKITE);
      case ee.rbe.GUILD_STAGE_VOICE:
        if (n) return et.intl.string(et.t.ZjZB3r);
        if ((0, Q.A)(e)) return et.intl.string(et.t["7pRuCQ"]);
        return et.intl.string(et.t.eJFSiN);
      case ee.rbe.GUILD_VOICE:
        if (n) return et.intl.string(et.t.xY8Wth);
        if (r) return et.intl.string(et.t.ajeTKN);
        if (e.isSpoilerChannel()) return et.intl.string(et.t.hGmOlP);
        if ((0, Q.A)(e)) return et.intl.string(et.t.qaY8Dm);
        return et.intl.string(et.t["0kBmow"]);
      case ee.rbe.GUILD_ANNOUNCEMENT:
        if (r) return et.intl.string(et.t.eRc6o9);
        if (e.isSpoilerChannel()) return et.intl.string(et.t["7F1TCC"]);
        if ((0, Q.A)(e)) return et.intl.string(et.t.EHLQwl);
        return et.intl.string(et.t.GtDRi2);
      case ee.rbe.GUILD_STORE:
        return et.intl.string(et.t.Ea4NDL);
      case ee.rbe.DM:
        return et.intl.string(et.t.jN2DfZ);
      case ee.rbe.GROUP_DM:
        return et.intl.string(et.t["e5y+gm"]);
      case ee.rbe.GUILD_DIRECTORY:
        return et.intl.string(et.t.IzZTIe);
      case ee.rbe.PUBLIC_THREAD:
      case ee.rbe.ANNOUNCEMENT_THREAD:
      case ee.rbe.MEDIA_THREAD:
        return et.intl.string(et.t["7Xm5QI"]);
      case ee.rbe.PRIVATE_THREAD:
        return et.intl.string(et.t.F1zyvU);
      case ee.rbe.GUILD_APP:
        if (r) return et.intl.string(et.t.zAEV11);
        if (e.isSpoilerChannel()) return et.intl.string(et.t["HO/lY5"]);
        if ((0, Q.A)(e)) return et.intl.string(et.t.MpFE11);
        return et.intl.string(et.t["A+8d6M"]);
      case ee.rbe.GUILD_CATEGORY:
      case ee.rbe.GUILD_SPACE:
      case ee.rbe.UNKNOWN:
      default:
        return null;
    }
  }
  function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      {
        locked: et = !1,
        video: en = !1,
        stream: ei = !1,
        hasActiveThreads: er = !1,
        textFocused: ea = !1,
      } = n;
    if (null == e) return null;
    null == t && (t = Z.A.getGuild(e.getGuildId()));
    let es = (0, z.V)(t?.id, [Z.A, q.default, X.Ay]);
    if (e.isModeratorReportChannel()) return i.FlagIcon;
    if (e?.id === t?.rulesChannelId) return r.B;
    let el = e.isNSFW();
    switch (e.type) {
      case ee.rbe.GUILD_ANNOUNCEMENT:
        if (er)
          if (el) return a.M;
          else if (e.isSpoilerChannel()) return s.u;
          else if ((0, Q.A)(e)) return l.X;
          else return o.k;
        if (el) return a.M;
        if (e.isSpoilerChannel()) return s.u;
        if ((0, Q.A)(e)) return l.X;
        return o.k;
      case ee.rbe.GUILD_STORE:
        return d.TagIcon;
      case ee.rbe.DM:
      case ee.rbe.GROUP_DM:
        return c.X;
      case ee.rbe.PRIVATE_THREAD:
        return u.t;
      case ee.rbe.MEDIA_THREAD:
        return _.x;
      case ee.rbe.ANNOUNCEMENT_THREAD:
      case ee.rbe.PUBLIC_THREAD:
        if (el) return E.m;
        if (e.isForumPost()) return A.ChatIcon;
        return h.y;
      case ee.rbe.GUILD_TEXT:
        if (null != e.linkedLobby) return f.x;
        if (el) return I.r;
        if (e.isSpoilerChannel()) return p.n;
        if ((0, Q.A)(e)) return T.I;
        return m.N;
      case ee.rbe.GUILD_FORUM:
        let eo = e.isMediaChannel(),
          ed = e.isGameInvitesChannel();
        if (el) return eo ? g.D : S.f;
        if (e.isSpoilerChannel()) return N.H;
        if ((0, Q.A)(e)) {
          if (ed) return C.s;
          return eo ? O.c : R.Q;
        } else if (eo) return L.ImageIcon;
        else if (ed) return y.t;
        else return D.b;
      case ee.rbe.GUILD_MEDIA:
        if (el) return g.D;
        if (e.isSpoilerChannel()) return N.H;
        if ((0, Q.A)(e)) return O.c;
        else return L.ImageIcon;
      case ee.rbe.GUILD_STAGE_VOICE:
        if (es) return (0, Q.A)(e) ? v.LockIcon : b.D;
        if (et) return v.LockIcon;
        if ((0, Q.A)(e)) return b.D;
        else return M.q;
      case ee.rbe.GUILD_VOICE:
        if (ea) return A.ChatIcon;
        if (el) return P.O;
        if (e.isSpoilerChannel()) return U.P;
        if (ei) return w.F;
        if (es)
          if ((0, Q.A)(e)) return v.LockIcon;
          else return en ? G.k : x.t;
        if (et) return v.LockIcon;
        if ((0, Q.A)(e)) return en ? G.k : x.t;
        else return en ? k.VideoIcon : F.H;
      case ee.rbe.GUILD_DIRECTORY:
        return B.P;
      case ee.rbe.GUILD_CATEGORY:
        return V.FolderIcon;
      case ee.rbe.GUILD_APP:
        if (el) return H.c;
        if (e.isSpoilerChannel()) return j.W;
        if ((0, Q.A)(e)) return W.Z;
        else return Y.k;
      case ee.rbe.UNKNOWN:
        if (J.aQ.has(e.id)) {
          if (e.id === J.T4.GUILD_HOME || e.id === J.T4.SERVER_GUIDE) return K.Z;
          else if (e.id === J.T4.CHANNEL_BROWSER || e.id === J.T4.CUSTOMIZE_COMMUNITY) return $.k;
        }
        return null;
      case ee.rbe.GUILD_SPACE:
      default:
        return null;
    }
  }
  function er(e) {
    switch (e) {
      case ee.rbe.GUILD_ANNOUNCEMENT:
        return o.k;
      case ee.rbe.GUILD_STORE:
        return d.TagIcon;
      case ee.rbe.DM:
      case ee.rbe.GROUP_DM:
        return c.X;
      case ee.rbe.PRIVATE_THREAD:
        return u.t;
      case ee.rbe.ANNOUNCEMENT_THREAD:
      case ee.rbe.PUBLIC_THREAD:
      case ee.rbe.MEDIA_THREAD:
        return h.y;
      case ee.rbe.GUILD_TEXT:
        return m.N;
      case ee.rbe.GUILD_FORUM:
        return D.b;
      case ee.rbe.GUILD_MEDIA:
        return L.ImageIcon;
      case ee.rbe.GUILD_STAGE_VOICE:
        return M.q;
      case ee.rbe.GUILD_VOICE:
        return F.H;
      case ee.rbe.GUILD_CATEGORY:
        return V.FolderIcon;
      case ee.rbe.GUILD_DIRECTORY:
        return B.P;
      case ee.rbe.GUILD_APP:
        return Y.k;
      case ee.rbe.LOBBY:
      case ee.rbe.DM_SDK:
      case ee.rbe.GUILD_SPACE:
      case ee.rbe.UNKNOWN:
      default:
        return null;
    }
  }
}
